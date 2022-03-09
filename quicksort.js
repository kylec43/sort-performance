function partition(arr, low, high) {

    let part = arr[high];
    let lastSmaller = low-1;


    for (let i = low; i < high; i++) {

        if (arr[i] < part) {
            [arr[lastSmaller+1], arr[i]] = [arr[i], arr[lastSmaller+1]];
            lastSmaller++;
        }
    }

    [arr[lastSmaller+1], arr[high]] = [arr[high], arr[lastSmaller+1]];
    return lastSmaller+1;
}


function quicksort(arr, low, high) {

    if (low < high) {
        const part = partition(arr, low, high);
        quicksort(arr, part+1, high);
        quicksort(arr, low, part-1);
    }
}


module.exports = quicksort;