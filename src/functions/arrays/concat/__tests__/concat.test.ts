import concat from "../concat";

test("Concats the values into the given array", () => {
    expect(concat([1], 2, [3], [[4]]))
        .toEqual([1,2,3,[4]])
})