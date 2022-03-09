function insertionSort(arr) {


    for (let i = 1; i < arr.length; i++) {

        let value = arr[i];
        let pos = i-1;
        while (pos > -1 && value < arr[pos]) {
            arr[pos+1] = arr[pos];
            pos--;
        }

        arr[pos+1] = value;
    }


    return arr;
}


module.exports = insertionSort;