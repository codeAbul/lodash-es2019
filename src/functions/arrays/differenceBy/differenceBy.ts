import difference from "../difference/difference";

/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array1 and array2
 * to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array.
 * The iteratee is invoked with one argument:
 * Eg. differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 => [1.2]
 * @param array1
 * @param array2
 * @param iterateeFn
 */

function differenceBy({
                          array1,
                          array2,
                          iterateeFn
                      }: { array1: any[], array2: any[], iterateeFn: (x: any) => any }) {

    // Apply iterateeFn for each value of the both arrays
    let transformedArray1 = array1.map(iterateeFn);
    let transformedArray2 = array2.map(iterateeFn);
    // (1.2,1) (2.3,2) We create this map to retrieve the original element
    // after the difference is calculated with the transformed Arrays
    let mapToOriginalArr = createMap(transformedArray1, array1);
    let finalArr: any[] = [];
    for (let transformedElem of difference({array1: transformedArray1, array2: transformedArray2})) {
        finalArr = [mapToOriginalArr.get(transformedElem), ...finalArr];
    }
    return finalArr;
}

function createMap<T, U>(array1: T[], array2: U[]) {
    let keyValueTuples = array1.map(addElemFromOtherArray);
    return new Map(keyValueTuples);

    function addElemFromOtherArray(elem: T, index: number): [T, U] {
        return [elem, array2[index]];
    }
}

export default differenceBy;