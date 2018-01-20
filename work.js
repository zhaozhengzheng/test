Vue.config.productionTip = true
var Home = {
	template: `
		<div>
			<div style="width: 400px;height: 500px;background-color: brown;position: absolute;top: 60px;left: 270px;">文章列表</div>
			<div style="width: 400px;height: 500px;background-color: blue;position: absolute;top: 60px;left: 690px;">视频列表</div>
		</div>
`
}
var Event = {
	template: `
		<div style="width: 1000px;margin:auto;">
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 100px;text-align:center;line-height:60px">文章列表</div>
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 200px;text-align:center;line-height:60px">视频列表</div>
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 300px;text-align:center;line-height:60px">视频列表</div>
		</div>
`
}
var Video = {
	template: `
		<div style="width: 1000px;margin:auto;">
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 100px;text-align:center;line-height:60px">广告栏</div>
			<div style="width: 1000px;height: 500px;background-color: dodgerblue;position: absolute;top: 200px;text-align:center;line-height:60px">视频内容</div>
		</div>
`
}

var routes = [{
		path: "/",
		component: Home,
},
	{
		path: "/events",
		component: Event,
},
	{
		path: "/videos",
		component: Video,
}]

var router = new VueRouter({
	routes
})

var vm = new Vue({
	el: "#app",
	router
})
