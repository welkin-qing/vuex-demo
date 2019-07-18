//import moment = require("../../node_modules/moment/moment");

//vue 全局方法
Vue.filter('date', time => moment(time).format('DD/MM/YY, HH:mm'))
//创建vue实例
new Vue({
  el: '#notebook',
  data () {
    return {
      //content: "I'm in **bold**!",
      //初始化获取从localsotrage 中获取notes的初始化代码
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      //selectedId: localStorage.getItem('selected-id') || null,
      selectedId: localStorage.getItem('selected-id') || null,
    }
  },
  methods:{
    // saveNote(val){
    //   console.log(val)
    //   localStorage.setItem('content', val)
    // },

    //在不同会话之间保存和恢复笔记
    saveNotes (){
      //当前需要保存的是一个数组对象，所以需要将数组转换为字符串，再保存再localstorage中
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },
    //用于添加笔记
    addNote() {
      const createTime = Date.now()
      const note = {
        id: String(createTime),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet ) for formatting!',
        created: createTime,
        favorite: 'false',
      }
      //add note to notes
      this.notes.push(note)
    },
    //单击该笔记的时候被调用
    selectNote (note) {
      this.selectedId = note.id
    },
    //删除笔记
    removeNote() {
      if(this.selectedNote && confirm('Delete the note?')){
        const index = this.notes.indexOf(this.selectedNote)
        if(index !== -1){
          this.notes.splice(index, 1)
        }
      }
    },
    //收藏笔记
    favoriteNote(){
      //console.log(this.selectedNote.favorite)
      this.selectedNote.favorite = !this.selectedNote.favorite
      //this.selectedNote.favorite ^= true
    }
  },
  computed: {
    notePreview () {
      // markdown 渲染为html
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },
    //文章总共条数
    addButtonTitle () {
      return this.notes.length + 'note(s) already'
    },
    selectedNote () {
      //返回与selectedId 匹配的笔记
      return this.notes.find(note => note.id === this.selectedId)
      //箭头函数的参数是note
      //返回的表达式是 note.id === this.selectedId 的结果
    },
    //对文章排序
    sortedNotes() {
      return this.notes.slice().sort((a,b) => a.created - b.created).sort((a,b) => (a.favorite === b.favorite) ? 0 : a.favorite ? -1 : 1)
    },
    //计算换行符的个数
    linesCount() {
      if(this.selectedNote){
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    wordsCount(){
      if(this.selectedNote){
        var s = this.selectedNote.content;
        //将换行符转换为空格
        s = s.replace(/\n/g, ' ');
        //排除开头和结尾的空格
        s = s.replace(/(^\s*)|(\s*$)/gi, '');
        //将多个重复空格转换为一个
        s = s.replace(/\s\s+/gi, ' ');
        //返回空格数量
        return s.split(' ').length;
      }
    },
    charactersCount(){
      if(this.selectedNote){
        return this.selectedNote.content.split('').length;
      }
    }
  },
  watch: {
    //键      值
    // content: {
    //   //handler属性为一个函数
    //   handler(val, oldval){ 
    //     console.log(val, oldval)
    //   },
    //   immediate: true,
    // }

    // content(val, oldval){
    //   console.log(val, oldval)
    //   localStorage.setItem('content', val)
    // }

    
    //简洁 content: 'saveNote'
    // content: {
    //     handler: 'saveNote',
    // }

    //侦听notes数据变化
    notes: {
      //方法名
      handler: 'saveNotes',
      deep: true,
    },
    // 保存选中项
    selectedId (val) {
      localStorage.setItem('selected-id', val)
    }
  },
  // created() {
  //   //在浏览器的本地存储数据中，如果对应的键不存在，localStorage.getItem()方法会返回 null。
  //   this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  // }
})