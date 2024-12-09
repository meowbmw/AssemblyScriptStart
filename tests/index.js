import assert from "assert";
import { abs, sum, memcpy, quicksort } from "../build/debug.js";
assert.strictEqual(abs(-10), 10);
assert.strictEqual(abs(2), 2);
assert.strictEqual(sum(2), 3);
assert.strictEqual(sum(3), 6);
let arr=new Array<i32>([2,1]);
quicksort(arr,0,arr.length-1);
console.log(arr);
// assert.strictEqual(arr[0],2);

console.log("ok");
