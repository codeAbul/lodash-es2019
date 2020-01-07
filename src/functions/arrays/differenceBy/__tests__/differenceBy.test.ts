import differenceBy from "../differenceBy";

test("Runs iterateefn on both arrays and returns the difference of the transformed arrays", () => {
    let array1 = [2.1, 1.2];
    let array2 = [2.3, 3.4];
    let iterateeFn = Math.floor;

    expect(differenceBy({array1, array2, iterateeFn})).toEqual([1.2]);
})