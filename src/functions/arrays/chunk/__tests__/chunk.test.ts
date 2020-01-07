import chunk from "../chunk";

test("Splits the array in accordance to the chunksize", () => {
    var array = ['a', 'b', 'c', 'd'];
    expect(chunk({array, chunkSize: 2}))
        .toEqual([['a', 'b'], ['c', 'd']]);

    expect(chunk({array, chunkSize:3}))
        .toEqual([['a','b','c'],['d']]);
});