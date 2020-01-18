import dropWhile from "../dropWhile";

function isActive({ active }: { user: string; active: boolean }) {
  return !active;
}

describe("dropRightFn", () => {
  var users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true }
  ];

  test("Drops all the elements that dont satisfy the predicate", () =>
    expect(dropWhile({ array: users, predicateFn: isActive })).toEqual([
      {
        user: "pebbles",
        active: true
      }
    ]));

  test("Predicate should stop checking once it hits the first element that returns falsy", () => {
    users = [...users, { user: "abul", active: false }];
    expect(dropWhile({ array: users, predicateFn: isActive })).toEqual([
      {
        user: "pebbles",
        active: true
      },
      { user: "abul", active: false }
    ]);
  });

  test("Defaults to identity predicate when nothing is passed", () => {
    var randomArr =  [1, "string",0,false];
    expect(dropWhile({ array: randomArr })).toEqual([0, false]);
  });
});
