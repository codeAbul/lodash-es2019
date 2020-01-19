import fill from "../fill";

describe("Fill", () => {
  test("Fills the whole array when start and end are not mentioned", () => {
    var array = [1, 2, 3];
    expect(
      fill({
        array,
        value: "a"
      })
    ).toEqual(["a", "a", "a"]);

    expect(
      fill({
        array: Array(3),
        value: 2
      })
    ).toEqual([2, 2, 2]);
  });

  test("Fills the array from start index, not including end index", () => {
    var array = [4, 6, 8, 10];
    expect(
      fill({
        array,
        value: "*",
        start: 1,
        end: 3
      })
    ).toEqual([4, "*", "*", 10]);
  });
});
