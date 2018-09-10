var vfed = {
	'advs': {
		'head': '广告投放 >>> 官方QQ群：<a href="https://jq.qq.com/?_wv=1027&k=5UIPDzc">137183109</a> >>> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=1570457334&site=qq&menu=yes">1570457334</a> >>>',
		'tips': '',
		'rows': [{
			'name': '超清无广告解析',
			'rema': '支持https',
			'apis': 'https://jx.itaoju.top/?url=',
			'tip1': '优酷演示',
			'url1': 'https://jx.itaoju.top/?url=https://v.youku.com/v_show/id_XMjkzNzY0NzkyOA==.html',
			'tip2': '腾讯演示',
			'url2': 'https://jx.itaoju.top/?url=https://v.qq.com/x/cover/5r3n1td1xijy87h.html',
			'tip3': '奇艺演示',
			'url3': 'https://jx.itaoju.top/?url=https://www.iqiyi.com/v_19rrdmuvuc.html',
			'tip4': '搜狐演示',
			'url4': 'https://jx.itaoju.top/?url=https://www.le.com/ptv/vplay/31078847.html',
			'tips': '<span class="layui-badge layui-bg-green">免费解析</span>',
			'sell': '1'
		}]
	},
	'down': {
		'head': '下载资源专区',
		'tips': '',
		'rows': [{
			'name': '豆瓣云资源',
			'rema': 'HTTP下载',
			'apis': 'http://www.dbzyz.com/inc/apidown.php',
			'flag': 'dbzyz',
			'coll': 'down',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': '&param=JmN0PTE'
		}, {
			'name': '最大云资源',
			'rema': '迅雷下载',
			'apis': 'http://www.zdziyuan.com/inc/s_apidown.php',
			'flag': 'zuida',
			'coll': 'down',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': '&param=JmN0PTE'
		}, {
			'name': '精品云资源',
			'rema': '迅雷下载',
			'apis': 'http://www.jingpinzy.com/inc/apidown.php',
			'flag': 'jingpin',
			'coll': 'down',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': '&param=JmN0PTE'
		}]
	},
	'm3u8': {
		'head': '切片资源专区',
		'tips': 'vfed主题推荐资源，支持自动播放下一集',
		'rows': [{
			'name': '豆瓣云资源',
			'rema': '跑马灯,右下角广告',
			'apis': 'http://www.dbzyz.com/inc/dbm3u8.php',
			'flag': 'dbzyz',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '八戒云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.bajieziyuan.com/inc/bjm3u8.php',
			'flag': 'bajie',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-red">国内CDN加速</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '666云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.666zyw.net/inc/666m3u8.php',
			'flag': 'liuliu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-red">国内CDN加速</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最快云资源',
			'rema': '不支持https,右下广告',
			'apis': 'http://cj.zuikzy.com/inc/zkm3u8.php',
			'flag': 'zuikuai',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最大云资源',
			'rema': '顶部跑马灯广告，管理员不接受速度慢的意见，谁说踢谁！',
			'apis': 'http://www.zdziyuan.com/inc/s_api_zuidam3u8.php',
			'flag': 'zuida',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷酷云资源',
			'rema': '屏幕中间跑马灯广告',
			'apis': 'http://www.kuyun9.com/inc/s_ldg_kkm3u8.asp',
			'flag': 'kuku',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '百万云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.baiwanzy.com/inc/bwm3u8.php',
			'flag': 'baiwan',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '永久云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://yongjiuzy.net/inc/s_yjm3u8.php',
			'flag': 'yongjiu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '帝国云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.yszydg.com/inc/apickm3u8.php',
			'flag': 'diguo',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '暧昧云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'https://www.imeizy.com/inc/apim3u8.php',
			'flag': 'aimei',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '资源片资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.ziyuanpian.com/inc/ckm3u8.php',
			'flag': 'ziyuan',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '精品云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.jingpinzy.com/inc/s_api_jpm3u8.php',
			'flag': 'jingpin',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '605云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.605zy.cc/inc/605m3u8.php',
			'flag': 'liuzy',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '156云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.156zy.com/inc/33uuck.php',
			'flag': 'sanu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '97云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.97zyw.com/inc/97zyck.php',
			'flag': 'jiuqi',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'OK云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.iokzy.com/inc/apickm3u8s.php',
			'flag': 'okzy',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '129云资源',
			'rema': '不支持https,右下,中间',
			'apis': 'http://www.129zy.com/inc/129m3u8.php',
			'flag': 'yierjiu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最新云资源',
			'rema': '屏幕中间常驻广告',
			'apis': 'http://api.zuixinapi.com/inc/apixinm3u8.php',
			'flag': 'zuixin',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '几千客资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.go1977.com/inc/gom3u8.php',
			'flag': 'qianke',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '极速云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.caijizy.com/inc/jsm3u8.php',
			'flag': 'jisu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷播云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.kbzyapi.com/inc/s_api_kakam3u8.php',
			'flag': 'kubo',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}]
	},
	'disk': {
		'head': '网盘资源专区',
		'tips': '',
		'rows': [{
			'name': '27盘云资源',
			'rema': 'https资源',
			'apis': 'http://cj2.tv6.com/mox/inc/27pan.php',
			'flag': 'tvliu',
			'coll': '27pan',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}]
	},
	'vfed': {
		'head': '视频网站专区',
		'tips': '',
		'rows': [{
			'name': '6U云资源',
			'rema': '含VIP视频',
			'apis': 'http://zy.ataoju.com/inc/api.php',
			'flag': 'liuu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'TV6云资源',
			'rema': '需要tu.php',
			'apis': 'http://cj2.tv6.com/mox/inc/api.php',
			'flag': 'tvliu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '强强云资源',
			'rema': '需要pic.php',
			'apis': 'http://caiji.000o.cc/inc/api.php',
			'flag': 'qiang',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '花园云资源',
			'rema': '无用播放器过多',
			'apis': 'http://api.zz22x.com/inc/api.php',
			'flag': 'huayuan',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-cyan">资源杂乱</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'CKFLV云资源',
			'rema': '失效图片过多',
			'apis': 'http://zy.vivcms.com/inc/api.php',
			'flag': 'ckflv',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-cyan">资源杂乱</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '1717云资源',
			'rema': 'API不稳定',
			'apis': 'http://zy.itono.cn/inc/api.php',
			'flag': 'yiqi',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">更新很慢</span>',
			'sell': '',
			'down': ''
		}]
	},
	'offi': {
		'head': '视频网站专区',
		'tips': '',
		'rows': [{
			'name': 'PPTV资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/pptv.php',
			'flag': 'ckflv',
			'coll': 'pptv',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '优酷资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/youku.php',
			'flag': 'ckflv',
			'coll': 'youku',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '乐视资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/letv.php',
			'flag': 'ckflv',
			'coll': 'letv',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '奇艺资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/qiyi.php',
			'flag': 'ckflv',
			'coll': 'qiyi',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '腾讯资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/qq.php',
			'flag': 'ckflv',
			'coll': 'qq',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '芒果资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/mgtv.php',
			'flag': 'ckflv',
			'coll': 'mgtv',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '搜狐资源',
			'rema': 'CKFLV云资源',
			'apis': 'http://zy.vivcms.com/inc/sohu.php',
			'flag': 'ckflv',
			'coll': 'sohu',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'PPTV资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/pptv.php',
			'flag': 'tvliu',
			'coll': 'pptv',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '优酷资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/youku.php',
			'flag': 'tvliu',
			'coll': 'youku',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '芒果资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/mgtv.php',
			'flag': 'tvliu',
			'coll': 'mgtv',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '奇艺资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/qiyi.php',
			'flag': 'tvliu',
			'coll': 'qiyi',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '腾讯资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/qq.php',
			'flag': 'tvliu',
			'coll': 'qq',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '搜狐资源',
			'rema': 'TV6云资源',
			'apis': 'http://cj2.tv6.com/mox/inc/sohu.php',
			'flag': 'tvliu',
			'coll': 'sohu',
			'tips': '<span class="layui-badge layui-bg-cyan">各种无图</span>',
			'sell': '',
			'down': ''
		}]
	},
	'comp': {
		'head': '综合资源专区',
		'tips': '',
		'rows': [{
			'name': '豆瓣云资源',
			'rema': '跑马灯,右下角广告',
			'apis': 'http://www.dbzyz.com/inc/api.php',
			'flag': 'dbzyz',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '八戒云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.bajieziyuan.com/inc/api.php',
			'flag': 'bajie',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '666云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.666zyw.net/inc/api.php',
			'flag': 'liuliu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-red">移动宽带</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最快云资源',
			'rema': '不支持https,右下广告',
			'apis': 'http://cj.zuikzy.com/inc/api.php',
			'flag': 'zuikuai',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最大云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.zdziyuan.com/inc/s_api.php',
			'flag': 'zuida',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷酷云资源',
			'rema': '屏幕中间跑马灯广告',
			'apis': 'http://www.kuyun9.com/inc/s_ldg_m3u8.asp',
			'flag': 'kuku',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '百万云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.baiwanzy.com/inc/api.php',
			'flag': 'baiwan',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '永久云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://yongjiuzy.net/inc/s_api.php',
			'flag': 'yongjiu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '帝国云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.yszydg.com/inc/api.php',
			'flag': 'diguo',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '暧昧云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'https://www.imeizy.com/inc/api.php',
			'flag': 'aimei',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '资源片资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.ziyuanpian.com/inc/api.php',
			'flag': 'ziyuan',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '精品云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.jingpinzy.com/inc/s_api.php',
			'flag': 'jingpin',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '605云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.605zy.cc/inc/api.php',
			'flag': 'liuzy',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '156云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.156zy.com/inc/api.php',
			'flag': 'sanu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '97云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.97zyw.com/inc/api.php',
			'flag': 'jiuqi',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'OK云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.iokzy.com/inc/api1s.php',
			'flag': 'okzy',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '129云资源',
			'rema': '不支持https,右下,中间',
			'apis': 'http://www.129zy.com/inc/api.php',
			'flag': 'yierjiu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最新云资源',
			'rema': '屏幕中间常驻广告',
			'apis': 'http://api.zuixinapi.com/inc/api.php',
			'flag': 'zuixin',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '几千客资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.go1977.com/inc/api.php',
			'flag': 'qianke',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '极速云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.caijizy.com/inc/api.php',
			'flag': 'jisu',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷播云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.kbzyapi.com/inc/s_api.php',
			'flag': 'kubo',
			'coll': 'all',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}]
	},
	'play': {
		'head': '云播资源专区',
		'tips': '',
		'rows': [{
			'name': '豆瓣云资源',
			'rema': '跑马灯,右下角广告',
			'apis': 'http://www.dbzyz.com/inc/dbyun.php',
			'flag': 'dbzyz',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '八戒云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.bajieziyuan.com/inc/bjyun.php',
			'flag': 'bajie',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '666云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://zy.666zyw.net/inc/666yun.php',
			'flag': 'liuliu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-red">移动宽带</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最快云资源',
			'rema': '不支持https,右下广告',
			'apis': 'http://cj.zuikzy.com/inc/zkyun.php ',
			'flag': 'zuikuai',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-red">国内分发</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最大云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.zdziyuan.com/inc/s_api_zuidall.php',
			'flag': 'zuida',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷酷云资源',
			'rema': '屏幕中间跑马灯广告',
			'apis': 'http://www.kuyun9.com/inc/s_ldg_kkyun.asp',
			'flag': 'kuku',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '百万云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.baiwanzy.com/inc/bwyun.php',
			'flag': 'baiwan',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '永久云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://yongjiuzy.net/inc/s_yjyun.php',
			'flag': 'yongjiu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '帝国云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.yszydg.com/inc/apikuyun.php',
			'flag': 'diguo',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '暧昧云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'https://www.imeizy.com/inc/apikuyun.php',
			'flag': 'aimei',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '资源片资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.ziyuanpian.com/inc/kuyun.php',
			'flag': 'ziyuan',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '精品云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.jingpinzy.com/inc/s_api_jpyun.php',
			'flag': 'jingpin',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '605云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.605zy.cc/inc/605yun.php',
			'flag': 'liuzy',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '156云资源',
			'rema': '右下角常驻广告',
			'apis': 'http://www.156zy.com/inc/33uu.php',
			'flag': 'sanu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '97云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.97zyw.com/inc/97zy.php',
			'flag': 'jiuqi',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'OK云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.iokzy.com/inc/apikuyuns.php',
			'flag': 'okzy',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'C值云资源',
			'rema': '不支持https,底部,右下',
			'apis': 'http://www.czhiziyuan.com/inc/api.php',
			'flag': 'czhi',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '129云资源',
			'rema': '不支持https,右下,中间',
			'apis': 'http://www.129zy.com/inc/129zy.php',
			'flag': 'yierjiu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '最新云资源',
			'rema': '屏幕中间常驻广告',
			'apis': 'http://api.zuixinapi.com/inc/apixinyun.php',
			'flag': 'zuixin',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">广告太多</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '几千客资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://www.go1977.com/inc/link.php',
			'flag': 'qianke',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '极速云资源',
			'rema': '右下角短时出现广告',
			'apis': 'http://www.caijizy.com/inc/jsyun.php',
			'flag': 'jisu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '酷播云资源',
			'rema': '顶部跑马灯广告',
			'apis': 'http://api.kbzyapi.com/inc/s_api_kuyun.php',
			'flag': 'kubo',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'sell': '',
			'down': ''
		}]
	},
	'fuck': {
		'head': '叉站资源专区',
		'tips': '',
		'rows': [{
			'name': '九州云资源',
			'rema': '云播,https资源',
			'apis': 'http://zyapi.jssida.top/api.php',
			'flag': 'jiuzhou',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'BT616资源',
			'rema': '云播,不支持https',
			'apis': 'http://www.bt616.com/inc/api.php',
			'flag': 'btliu',
			'coll': 'line',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '色色云资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://sscj8.com/inc/api.php',
			'flag': 'sese',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '撸死你资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://lsnzxcj.com/inc/api.php',
			'flag': 'lusini',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '玖玖云资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://99zxcj.com/inc/api.php',
			'flag': 'jiujiu',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'YELLOW资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://zmwcj8.com/inc/api.php',
			'flag': 'yellow',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': 'IXX云资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://api.iixxzyapi.com/inc/api.php',
			'flag': 'ixx',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'sell': '',
			'down': ''
		}, {
			'name': '哥搞妹资源',
			'rema': 'M3U8,不支持https',
			'apis': 'http://gegaomeizy2.com/inc/api.php',
			'flag': 'gegaomei',
			'coll': 'm3u8',
			'tips': '<span class="layui-badge layui-bg-gray">翻墙采集</span>',
			'sell': '',
			'down': ''
		}]
	}
};
var html = '';
var urls = 'api?ac={ac}&rday={rday}&cjflag={flag}&cjurl={apis}';
$.each(vfed, function(list, name) {
	html += '<table class="layui-table"><thead>';
	html += '<tr><td colspan="7"><span style="float:left">' + name.head + '</span><span style="float:right">' + name.tips + '</span></td></tr>';
	html += '</thead><tbody>';
	$.each(name.rows, function(nums, info) {
		var nums = (nums + 1) < 10 ? '0' + (nums + 1) : (nums + 1);
		var sell = info.sell == '1' ? '<span class="layui-badge">推荐</span>' : '';
		var tips = info.tips == 'ok' ? '<span class="layui-badge layui-bg-green">未知节点</span>' : '<span class="layui-badge">' + info.tips + '</span>';
		var url1 = urls.replace('{ac}', 'list').replace('{rday}', '').replace('{flag}', info.flag).replace('{apis}', info.apis);
		var url2 = urls.replace('{ac}', 'cjday').replace('{rday}', '24').replace('{flag}', info.flag).replace('{apis}', info.apis);
		var url3 = urls.replace('{ac}', 'cjday').replace('{rday}', '98').replace('{flag}', info.flag).replace('{apis}', info.apis);
		var url4 = urls.replace('{ac}', 'cjall').replace('{rday}', '').replace('{flag}', info.flag).replace('{apis}', info.apis);
		html += '<tr>';
		html += '<td width="20" align="center">' + nums + '</td>';
		html += '<td width="60" align="center">' + info.tips + '</td>';
		if(list == 'advs') {
			html += '<td><a target="_blank" href="' + info.apis + '">' + info.name + '【' + info.rema + '】' + sell + '</a></td>';
			html += '<td width="60" align="center"><a target="_blank" href="' + info.url1 + '">' + info.tip1 + '</a></td></td>';
			html += '<td width="60" align="center"><a target="_blank" href="' + info.url2 + '">' + info.tip2 + '</a></td>';
			html += '<td width="60" align="center"><a target="_blank" href="' + info.url3 + '">' + info.tip3 + '</a></td>';
			html += '<td width="60" align="center"><a target="_blank" href="' + info.url4 + '">' + info.tip4 + '</a></td>';
		} else {
			html += '<td><a href="' + url1 + info.down + '">' + info.name + '【' + info.rema + '】' + sell + '</a></td>';
			html += '<td width="60" align="center"><a href="javascript:;" class="timming" data-name="当日采集：' + encodeURIComponent(info.name + '【' + info.rema + '-' + name.head + '】') + '" data-flag="' + encodeURIComponent(info.flag + info.coll) + '" data-param="' + url2.replace('api?', '') + info.down + '">定时任务</a></td>';
			html += '<td width="60" align="center"><a href="' + url2 + info.down + '">采集当天</a></td>';
			html += '<td width="60" align="center"><a href="' + url3 + info.down + '">采集本周</a></td>';
			html += '<td width="60" align="center"><a href="' + url4 + info.down + '">采集所有</a></td>';
		}
		html += '</tr>';
	});
	html += '</tbody></table>';
});
document.write(html);
$('.timming').click(function() {
	if(confirm('确认添加到定时任务吗？')) {
		$.post('../../../template/vfed/asset/fed/create.php?id=tim', 'name=' + $(this).attr('data-name') + '&flag=' + $(this).attr('data-flag') + '&param=' + encodeURIComponent($(this).attr('data-param')), function(data) {
			alert(data.msg);
		}).error(function(data) {
			alert('请求失败：' + data.status);
		}, 'json');
	}
});