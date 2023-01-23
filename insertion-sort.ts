function insertionSort(arr: number[]): number[] {
    let i = 1
    while (i < arr.length) {
        const current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = current
        i++

    }
    return arr

}

const arr = [2, 34, 5, 8]

console.log(insertionSort(arr));

