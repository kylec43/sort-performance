
function merge(arr, l, m, r) {

    const leftArr = arr.slice(l, m+1);
    const rightArr = arr.slice(m+1, r+1);
    let left = 0;
    let right = 0;

    let k = l; //initial index of subarray to merge
    while (left < leftArr.length && right < rightArr.length) {

        const leftValue = leftArr[left];
        const rightValue = rightArr[right];

        if (leftValue < rightValue) {
            arr[k] = leftArr[left];
            left++;
        } else {
            arr[k] = rightArr[right];
            right++;
        }

        k++;
    }

    while (right < rightArr.length) {
        arr[k] = rightArr[right];
        right++;
        k++;
    }

    while (left < leftArr.length) {
        arr[k] = leftArr[left];
        left++;
        k++;
    }


}


function mergesort(arr, l, r) {

    if (l < r) {
        const m = l + parseInt((r-l)/2);
        mergesort(arr, l, m);
        mergesort(arr, m+1, r);
        merge(arr, l, m, r);
    }
}

module.exports = mergesort;