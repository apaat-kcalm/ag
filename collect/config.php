<?php
$path = 'application/data/config/quickmenu.txt';
$vfed = @require ('application/extra/maccms.php');
$info = 'vfed采集资源,' . $vfed['site']['install_dir'] . 'addons/collect/cjvfed.php';
if (stristr(file_get_contents($path), $info))
	die(json_encode(array('code' => 0, 'msg' => '快捷菜单已存在，请刷新页面后在后台首页快捷菜单中查找【vfed采集资源】菜单<script>setTimeout(function(){top.location.reload()},3000)</script>'), JSON_UNESCAPED_UNICODE));
elseif (file_put_contents($path, chr(13) . chr(10) . $info, FILE_APPEND))
	die(json_encode(array('code' => 0, 'msg' => '快捷菜单添加成功，请刷新页面后在后台首页快捷菜单中查找【vfed采集资源】菜单<script>setTimeout(function(){top.location.reload()},3000)</script>'), JSON_UNESCAPED_UNICODE));
else
	die(json_encode(array('code' => 0, 'msg' => '快捷菜单添加失败，请检查文件权限或者查看是否被防火墙拦截<script>setTimeout(function(){location.reload()},3000)</script>'), JSON_UNESCAPED_UNICODE));
?>