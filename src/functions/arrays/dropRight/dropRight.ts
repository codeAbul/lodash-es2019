interface DropRightArgs<T> {
    array: T[],
    numOfElemToBeRemoved?: number
}

export const ERROR_MSG = "Array is of insufficient length. Please try with a different array, or a lesser number";

function dropRight<T>({array, numOfElemToBeRemoved = 1}: DropRightArgs<T>) {
    if (array.length <= numOfElemToBeRemoved) {
        throw Error(ERROR_MSG);
    } else {
        return array.filter(removeElementsFromRight);
    }

    function removeElementsFromRight(elem: T, index: number) {
        // Imagine [1,2,3] need to remove 1 element from right index can be either  0 or 1 ( < 3 - 1 )
        return index < array.length - numOfElemToBeRemoved
    }
}

export default dropRight;