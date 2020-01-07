import compact from "../compact";

test("Removes falsy values", () => {
    expect(compact([0, 1, false, 2, "", 3]))
        .toEqual([1, 2, 3]);
})