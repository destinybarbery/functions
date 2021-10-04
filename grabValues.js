Object.grabValues = function(object) {
	let arr =[]
	let i = 0;
	for(let property in object1){
		arr[i] = object[property];
		i++;
	}
	return arr;

};