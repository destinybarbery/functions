Array.prototype.myPush = function(array,value) {
  array[array.length] = value;
  return array.length;
};

const arr = ['pigs', 'goats', 'sheep']
console.log(arr.myPush(arr, 'cows'))
console.log(arr)