function linear(arr: number[], target: number): number {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === target) {
            return i
        }
        i++
    }
    return -1

}

const arr1 = [1, 44, 67, 89, 43, 65, 88, 9, 23, 55]

console.log("it's on index : " + linear(arr1, 89));

