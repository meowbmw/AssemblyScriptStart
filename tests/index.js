import assert from "assert";
import { abs, sum, memcpy, quicksort } from "../build/debug.js";
// assert.strictEqual(abs(-10), 10);
// assert.strictEqual(abs(2), 2);
// assert.strictEqual(sum(2), 3);
// assert.strictEqual(sum(3), 6);

import loader from "@assemblyscript/loader"; 
import { readFileSync } from 'fs'

loader.instantiate(
    readFileSync('./build/debug.wasm')
).then(({ exports }) => {
    let arrayPtr = exports.__pin(exports.__newArray(exports.Int32Array_ID, [
        3, 4, 5, 6, 7, 8, 9
    ]));
    exports.quicksort(arrayPtr);
    let wasmArray = exports.__getInt32Array(arrayPtr);
    console.log("Sorted array:", wasmArray);
    exports.__unpin(arrayPtr);

    // memcpy test from here
    let srcPtr=exports.__pin(exports.__newArray(exports.Int32Array_ID, [
        3, 4, 5, 6, 7, 8, 9
    ]));

    let dstPtr=exports.__pin(exports.__newArray(exports.Int32Array_ID, [
        9, 9, 9, 9, 9, 9, 9
    ]));
    exports.memcpy(srcPtr,dstPtr);
    dstPtr = exports.__getInt32Array(dstPtr);
    console.log("Dst array", dstPtr);
})

