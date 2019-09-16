//接口封装
//export const getBanner = (url,type) => {
//return axios.request({
//  url: 'home/Slide',
//  params: {type: type},
//  method: 'get'
//})
//}
//接口封装  - get
export const getFun = (url,datas) => {
  	return this.$axios.get(url, {
			params: datas,
		}).then(res => {
			
			
		}).catch(error => {
			console.log('error init' + error);
		})
}
//接口封装  - post
export const postFun = (url,datas) => {
  	return this.$axios({
	        method: "POST",
	        url:url,
	        data: datas,
	        headers: {
				'Content-type': 'application/json'
			}
	    }).then(function(res) {
	        console.log(res.data);
			
		});
}
