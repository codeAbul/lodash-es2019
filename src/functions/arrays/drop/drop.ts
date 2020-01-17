interface args<T> {
    array: T[],
    numOfElemToBeRemoved?: number
}

export const ERROR_MSG = "Array is of insufficient length. Please try with a different array, or a lesser number";

export default function drop<T>({
                                    array,
                                    numOfElemToBeRemoved = 1
                                }: args<T>) {

    if (array.length <= numOfElemToBeRemoved) {
        throw Error(ERROR_MSG);
    } else {
        return array.filter(isIndexGreaterThanN);
    }

    // checks if the element at index n or more

    function isIndexGreaterThanN(_: T, index: number) {
        return index >= numOfElemToBeRemoved
    }
}
