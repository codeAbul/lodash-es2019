function difference({
                        array1,
                        array2
                    }: { array1: Array<any>, array2: Array<any> }): Array<any> {
    return array1.reduce(composeTheDifference, []);

    function composeTheDifference(diff: Array<any>, val: any) {
        if (array2.includes(val)) {
            return diff;
        } else {
            return [...diff, val];
        }
    }

}

export default difference;