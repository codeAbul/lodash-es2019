function differenceWith<T extends U, S, U>({
                                               array,
                                               values,
                                               comparator
                                           }: differenceWith<T, S>): U[] {

    return array.filter(testComparatorOnVal);

    /******************************************************/

    // Function Declaration
    function testComparatorOnVal(valFromArray: T) {
        return !values.some(runComparatorFn);

        function runComparatorFn(valFromValues: S) {
            return comparator(valFromArray, valFromValues);
        }

    }
}

interface differenceWith<T, S> {
    array: Array<T>;
    values: Array<S>;
    comparator: (val1: T, val2: S) => Boolean
}

export default differenceWith;