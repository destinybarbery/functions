const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
Array.prototype.myFilter = function() {
	let newArr = [];
	for(let i = 0; i < this.length; i++){
		if(this[i] === undefined) continue;
		newArr.push(callbackFn(this[i], i, this))
	}
	return newArr;
