export default function concat(array: any[], ...values: any[]) {
    if (values.length == 1) {
        return [values, ...array];
    } else {
        const flatValues = flattendValues(values);
        return [...array, ...flatValues];
    }
}

function flattendValues(values: any[]) {
    return values.reduce(flattenIfArray, []);

    function flattenIfArray(flattenedArray: any[], val: any) {
        // We spread ...flattenedArray first to maintain the order
        if (val instanceof Array) {
            // [3] becomes 3
            // [[4]] becomes [4]
            return [...flattenedArray, ...val];
        } else {
            return [...flattenedArray, val];
        }

    }

}