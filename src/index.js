module.exports = function longestConsecutiveLength(array) {
  // your solution here
    var count = 0;
    var minCount = 0;
    var array2 = [];

    for(let i = 0; i < array.length; i++) {
        array2[array[i]] = array[i];
    }

    array = array2.filter(function() { return true; });


    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1])
            continue;
        if (array[i] === array[i + 1] - 1)
            count++;
        else {
            minCount = Math.max(++count, minCount);
            count = 0;
        }

    }

    return minCount;
}
