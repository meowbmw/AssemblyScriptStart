import assert from "assert";
import { abs, sum } from "../build/debug.js";
import loader from "@assemblyscript/loader"; 
import { readFileSync } from 'fs'

it('test abs', function () {
    assert.equal(abs(22), 22);
    assert.equal(abs(-22), 22);
  });

it('test sum', function () {
    assert.equal(sum(2), 3);
    assert.equal(sum(3), 6);
  });

it('test memcpy', function () {
    loader.instantiate(
        readFileSync('./build/debug.wasm')
    ).then(({ exports }) => {
        // memcpy test from here
        let srcPtr=exports.__pin(exports.__newArray(exports.Int32Array_ID, [
            3, 4, 5, 6, 7, 8, 9
        ]));
    
        let dstPtr=exports.__pin(exports.__newArray(exports.Int32Array_ID, [
            9, 9, 9, 9, 9, 9, 9
        ]));
        exports.memcpy(srcPtr,dstPtr);
        dstPtr = exports.__getInt32Array(dstPtr);
        assert.equal(dstPtr[0], 3);
        assert.equal(dstPtr[1], 4);
        assert.equal(dstPtr[2], 5);
    })
  });

it('test quicksort', function () {
    loader.instantiate(
        readFileSync('./build/debug.wasm')
    ).then(({ exports }) => {
        let arrayPtr = exports.__pin(exports.__newArray(exports.Int32Array_ID, [
            9,8,7,6,5,4,3
        ]));
        exports.quicksort(arrayPtr);
        let wasmArray = exports.__getInt32Array(arrayPtr);
        assert.equal(wasmArray[0], 3);
        assert.equal(wasmArray[1], 4);
        assert.equal(wasmArray[2], 5);
        exports.__unpin(arrayPtr);
    })
  });
