type RecursiveArray<T> = T| Array<T> | [Array<T>,...RecursiveArray<T>[]]

/**
 * Creates an array of elements split into groups the length of chunkSize.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param array
 * @param chunkSize
 */


export default function chunk<T>({
                                     array = [],
                                     chunkSize = 1
                                 }: { array: Array<T>, chunkSize: number }): RecursiveArray<T> | undefined {
    if (array.length == 0) {
        return;
    }
    if (array.length == 1) {
        return array;
    } else {
        let firstChunk = array.filter((_,index) => index < chunkSize);
        let restOfArr = array.filter((_,index) => index >= chunkSize);
        let restOfTheChunks = chunk({array: restOfArr, chunkSize});
        if (restOfTheChunks == undefined) {
            // no more chunks left to carve
            return firstChunk;
        }
        return [firstChunk, restOfTheChunks]
    }
}