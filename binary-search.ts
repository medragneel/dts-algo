// array must be sorted
function binary(arr: number[], target: number): number {
    let l = 0
    let h = arr.length - 1
    while (l <= h) {
        const m = Math.floor((l + h) / 2)
        if (arr[m] == target) {
            return m
        } else if (arr[m] < target) {
            l = m + 1
        } else {
            h = m - 1

        }
    }
    return -1

}


const arr2 = [2, 4, 6, 8, 10, 12, 14, 20, 24, 28, 34]
console.log(arr2[binary(arr2, 20)] + " index is: " + binary(arr2, 20));

