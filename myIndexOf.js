const arr = ['ant', 'bison', 'camel', 'duck', 'bison']
Array.prototype.myIndexOf = function(callbackFn) {
    
    result = -1;
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

       
        if (element == undefined) {
            
            result = i;
            
            break;
        }
    }
    
    return result;
};
console.log("my each: ")
console.log(arr.indexOf('camel'))