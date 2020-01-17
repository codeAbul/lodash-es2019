interface DropRightWhileArgs<T> {
  array: T[];
  predicateFn?: (x: T, index?:number, array?:T[]) => boolean;
}

/**
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * var users = [
 { 'user': 'barney',  'active': true },
 { 'user': 'fred',    'active': false },
 { 'user': 'pebbles', 'active': false }
 ];
 dropRightWhile({array:users, predicate: function(o) { return !o.active; }));
 // => objects for ['barney']

 *
 * @param array
 * @param predicateFn
 */


function dropRightWhile<T>({
  array,
  // The Default predicate function is an identity function ( simply coerces the value to boolean
  // truthy or falsy
  predicateFn = (x: T) => Boolean(x)
}: DropRightWhileArgs<T>) {
  if (array.length == 0) {
    throw new Error(
      "The array is empty. Nothing to drop. Please check your arguments"
    );
  } else {
    return array.reduceRight(composeArray, []);
  }
  function composeArray(finArr: T[], elem: T) {
    // All the elem satisfied the predicate fn till now
    if (finArr.length == 0) {
      if (predicateFn(elem)) {
        return finArr;
      } else {
        return [elem];
      }
    }
    // Add every elem to finArr from now as the predicate has already returned a falsy value previously
    // [0,5,2,1,3] say predicateFn returns true for odd numbers
    // we should stop dropping elem once we reach 2 , add every elem from there
    else {
      // append elements from the top as we are iterating the array in reverse
      return [elem, ...finArr];
    }
  }
}

export default dropRightWhile;
