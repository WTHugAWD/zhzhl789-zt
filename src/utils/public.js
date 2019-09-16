let aliTime = function(timestr){
	let xx = timestr.split('T')
	return xx[0]+ ' ' + xx[1].slice(0,5)
}



export {aliTime}
