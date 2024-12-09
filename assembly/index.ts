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

export function memcpy(src: Int32Array, dst: Int32Array): Int32Array {
  for (let i = 0; i < src.length; ++i) {
    dst[i] = src[i];
  }
  return dst;
}
export function quicksort(arr: Int32Array): Int32Array {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}

function quickSortHelper(arr: Int32Array, left: i32, right: i32): void {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSortHelper(arr, left, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, right);
  }
}

function partition(arr: Int32Array, left: i32, right: i32): i32 {
  let pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;
}

export const Int32Array_ID = idof<Int32Array>()