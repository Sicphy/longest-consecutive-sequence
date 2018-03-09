module.exports = function longestConsecutiveLength(array) {
  // your solution here
    var count = 0;
    var minCount = 0;
    array.sort(fun);
    for(var i = 0; i<array.length; i++) {
        if(array[i] === array[i+1])
            continue;
        if(array[i] === array[i+1] - 1)
            count++;
        else {
            minCount = Math.max(++count, minCount);
            count = 0;
        }
    }

    return minCount;
}

function fun(a,b) {
    return a - b;
}
