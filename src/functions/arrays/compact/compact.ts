/**
 * Creates an array with all falsy values removed.
 * The values false, null, 0, "", undefined, and NaN are falsy.
 * @param array
 */
export default function compact<T>(array: Array<T>): Array<T> {
    return array.filter(isTheValueTruthy);

    function isTheValueTruthy(value: T) {
        return value
    }
}