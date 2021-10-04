Array.prototype.myMap = function(callbackFn){
	let newArr = [];
	for(let i = 0; i < this.length; i++){
		if(this[i] === undefined) continue;
		newArr.push(callbackFn(this[i], i, this))
	}
	return newArr;

}
const array1 = [1, 4, 9, 16];


const map1 = array1.myMap(x => x * 2);

console.log(map1);
