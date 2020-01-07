import difference from "../difference";

test("Removes elements in array2 from array1", () => {
    let array1 = [1, 2];
    let array2 = [2, 3];
    expect(difference({array1, array2})).toEqual([1]);
});