//首页
$('#shouye').click(function () {
  // console.log('shouye')
   $('#pageInfo').val(1)
   getData(1, 10, condition);
 })
 //尾页
 $('#weiye').click(function () {
   var zongye = $('.zongye').html()//总页
  // console.log('zongye')
   $('#pageInfo').val(zongye)
   getData(zongye, 10, condition)
 })
 //上一页
 $('#prev').click(function () {
   var current = $('#pageInfo').val();
   if (current <= 1) {
     alert("已经是第一页了哦！")
     current = 1;
   } else {
     current--;
   }
   //console.log('shangyiye')
   $('#pageInfo').val(current)
   getData(current, 10, condition);
   //console.log(current);
 })
 //下一页
 $('#next').click(function () {
   var current = $('#pageInfo').val();//当前页
   var zongye = $('.zongye').html()//总页
  // console.log(zongye)
   if (current == zongye) {
     alert("已经是最后一页了哦！")
     current = zongye;
   } else {
     current++;
   }
  // console.log(current)
   
   $('#pageInfo').val(current)
   getData(current, 10, condition);
   //console.log(current);
 })
 //跳转
 $('#jump').click(function () {
   var current = $('#pageInfo').val();//当前页
   var zongye = $('.zongye').html()//总页
   if (current <= 0 || current > zongye) {
     window.alert('请输入有效数据')
   } else {
     getData(current, 10, condition)
   }
 })