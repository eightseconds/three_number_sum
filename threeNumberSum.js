function threeNumberSum(array, target) {
    array.sort((a,b) => a - b)
    const triplets = [];

    for (let i = 0; i < array.length - 2; i++) {
        let leftIdx = i + 1
        let rightIdx = array.length - 1
        while (leftIdx < rightIdx) {
            const currentSum = array[i] + array[leftIdx] + array[rightIdx];
            if (currentSum === target) {
                triplets.push([array[i], array[leftIdx], array[rightIdx]])
                leftIdx ++;
                rightIdx --;
            } else if (currentSum < target) {
                leftIdx ++;
            } else if (currentSum > target) {
                rightIdx --;
            }
        }
    }

    return triplets;
}