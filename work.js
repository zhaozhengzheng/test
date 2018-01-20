Vue.config.productionTip = true
var one = {
	template: `
		<div>
			<div style="width: 400px;height: 500px;background-color: brown;position: absolute;top: 60px;left: 270px;">????</div>
			<div style="width: 400px;height: 500px;background-color: blue;position: absolute;top: 60px;left: 690px;">????</div>
		</div>
`
}
var two = {
	template: `
		<div style="width: 1000px;margin:auto;">
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 100px;text-align:center;line-height:60px">????</div>
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 200px;text-align:center;line-height:60px">????</div>
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 300px;text-align:center;line-height:60px">????</div>
		</div>
`
}
var three = {
	template: `
		<div style="width: 1000px;margin:auto;">
			<div style="width: 1000px;height: 60px;background-color: dodgerblue;position: absolute;top: 100px;text-align:center;line-height:60px">???</div>
			<div style="width: 1000px;height: 500px;background-color: dodgerblue;position: absolute;top: 200px;text-align:center;line-height:60px">????</div>
		</div>
`
}

var routes = [{
		path: "/",
		component: one,
},
	{
		path: "/events",
		component: two,
},
	{
		path: "/videos",
		component: three,
}]

var router = new VueRouter({
	routes
})

var vm = new Vue({
	el: "#app",
	router
})
