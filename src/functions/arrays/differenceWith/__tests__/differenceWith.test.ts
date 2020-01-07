import differenceWith from "../differenceWith";

test("Difference With compares values based on comparator fn", () => {

    //Comparator function checks for coercive equality between strings and numbers
    // Note that this doesn't account for anamolies of NaN, "", 0, -0 etc

    function comparator(val1: any, val2: any) {
        if ((typeof val1 == "number" && typeof val2 == "string") || (typeof val2 == "number" && typeof val1 == "string")) {
            return val1 == val2;
        }
        else if(typeof val1 == typeof val2){
            return val1 === val2;
        }
        return false;
    }

    const array = ['1', 2, '3'];
    expect(differenceWith({array, values: [1, 3], comparator})).toEqual([2]);
});