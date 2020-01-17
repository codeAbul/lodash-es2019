import drop, {ERROR_MSG} from "../drop";

test("Drops n elements from the beginning", () => {
    expect(drop({array: [1, 2, 3, 4], numOfElemToBeRemoved: 2})).toEqual([3, 4]);

    // if number is not specified, default to 1

    expect(drop({array: [1, 2, 3, 4]})).toEqual([2, 3, 4]);
});

test("Should throw error if number of elements to be removed exceeds length", () => {

    // Need to wrap the function being tested to throw error inside an anon func

    expect(() => {
        drop({array: [1, 2, 3, 4], numOfElemToBeRemoved: 5})
    })
        .toThrowError(ERROR_MSG)
});