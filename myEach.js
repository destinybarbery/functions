arr = [1,2,3]
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0 ; i < this.length; i++)
    {
        if(this[i] === undefined) continue;

        callbackFn(this[i], i , this)
    }
};

console.log("my each: ")
arr.myEach(x => console.log(x))