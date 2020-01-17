import dropRightWhile from "../dropRightWhile";

function isActive({ active }: { user: string; active: boolean }) {
  return !active;
}

describe("dropRightFn", () => {
  var users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false }
  ];

  test("Drops all the elements that dont satisfy the predicate", () =>
    expect(dropRightWhile({ array: users, predicateFn: isActive })).toEqual([
      {
        user: "barney",
        active: true
      }
    ]));

  test("Predicate should stop checking once it hits the first element that returns falsy", () => {
    users = [{ user: "abul", active: false }, ...users];
    expect(dropRightWhile({ array: users, predicateFn: isActive })).toEqual([
      { user: "abul", active: false },
      {
        user: "barney",
        active: true
      }
    ]);
  });

  test("Defaults to identity predicate when nothing is passed", () => {
    var randomArr = [0, false, 1, "string"];
    expect(dropRightWhile({ array: randomArr })).toEqual([0, false]);
  });
});
