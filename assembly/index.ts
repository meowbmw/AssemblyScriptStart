// The entry file of your WebAssembly module.

export function abs(a: i32): i32 {
  if (a >= 0) {
    return a;
  }
  return -a;
}

export function sum(n: i32): i32 {
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    ans += i;
  }
  return ans;
}

export function memcpy(src: Array<string>, dst: Array<string>): Array<string> {
  for (let i = 0; i < src.length; ++i) {
    dst[i] = src[i];
  }
  return dst;
}

export function partition(arr: Array<i32>, low: i32, high: i32): i32 {
  // Choose the pivot
  let pivot = arr[high];
  // Index of smaller element and indicates 
  // the right position of pivot found so far
  let i = low - 1;
  // Traverse arr[low..high] and move all smaller
  // elements to the left side. Elements from low to 
  // i are smaller after every iteration
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i += 1;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // Move pivot after smaller elements and
  // return its position
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

export function quicksort(arr: Array<i32>, low: i32, high: i32): void {
  if (low < high) {
    // pi is the partition return index of pivot
    let pi = partition(arr, low, high);
    // Recursion calls for smaller elements
    // and greater or equals elements
    quicksort(arr, low, pi - 1);
    quicksort(arr, pi + 1, high);
  }
}