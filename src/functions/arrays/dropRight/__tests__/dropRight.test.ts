import dropRight, {ERROR_MSG} from "../dropRight";

test("Drops n elements from the beginning", () => {
    expect(dropRight({array: [1, 2, 3, 4], numOfElemToBeRemoved: 2})).toEqual([1,2]);

    // if number is not specified, default to 1

    expect(dropRight({array: [1, 2, 3, 4]})).toEqual([1,2,3]);
});

test("Should throw error if number of elements to be removed exceeds length", () => {

    // Need to wrap the function being tested to throw error inside an anon func

    expect(() => {
        dropRight({array: [1, 2, 3, 4], numOfElemToBeRemoved: 5})
    })
        .toThrowError(ERROR_MSG)
});