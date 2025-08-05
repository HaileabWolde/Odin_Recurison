const MergeSort = (arr)=>{
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = MergeSort(arr.slice(0, mid));
    const right = MergeSort(arr.slice(mid, arr.length + 1));

    return merge(MergeSort(left), MergeSort(right));
}
const merge = (left, right) =>{
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
   // Concatenate remaining elements and assign to result
    return result.concat(left.slice(i), right.slice(j));
}
// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(arr)
const sortedArr = MergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]