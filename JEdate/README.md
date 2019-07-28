# jedate-开始使用一款好用的时间插件
jeDate日期控件 -（原生JS版）jeDate V6.5.0 是一款原生JS开发的 不依赖任何第三方库 大众化的日期控件，包含 多语言、设定年月（YYYY-MM）、日期范围限制、开始日期设定、自定义日期格式、根据不同的日期格式，显示不同内容。

# 使用
1. git clone
2. open index.html
3. click input

# 说明
1. 第一个input是带时分秒的
2. 第二个是不带时分秒的

---
官方文档：http://www.jemui.com/uidoc/jedate.html

![图片.png](http://upload-images.jianshu.io/upload_images/5640239-5aea5930ec2920ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

链接：https://pan.baidu.com/s/1vJTof9Q16DV_En_vxmrh5g 密码：xmyq
github:https://github.com/wangxiaoting666/jedate

>下载jedate ， 解压后不要改变文件夹内的目录结构，否则样式无法引入，然后引入jedate.js文件即可
 ```  
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<script  src="date/jedate/jedate.js"></script>
	</head>

	<body>
		<input  type="text" class="form-control input-medium" placeholder="开始时间" name="" id="beginTime1" />
		<input  type="text" class="form-control input-medium" placeholder="结束时间" name="" id="endTime1" /> 
		
	</body>
	<script type="text/javascript">
		jeDate({
			dateCell: "#beginTime1",
			format: "YYYY-MM-DD", //控制是否显示小时
		});
		jeDate({
			dateCell: "#endTime1",
			format: "YYYY-MM-DD", //控制是否显示小时
		});
	</script>

</html>
 ```  

