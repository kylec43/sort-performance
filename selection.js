const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    
    for (let i = 0; i < array.length-1; i++) {

        let smallest = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < smallest) {
                smallest = j;
            }
        }

        [array[i], array[smallest]] = [array[smallest], array[i]];
    }
}

module.exports = selectionSort;