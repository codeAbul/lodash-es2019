const ERROR_MSG = `Start index is less than the index to be filled till. 
                   Make sure "end" is greater than "start"`;

function fill<T, U>({
  array,
  value,
  start = 0,
  end = array.length
}: IFill<T, U>): (U | T)[] {
  if (start >= end) {
    throw new Error(ERROR_MSG);
  } else {
    return array.fill(value as any, start, end);
  }
}

interface IFill<T, U> {
  array: T[];
  value: U;
  start?: number;
  end?: number;
}

export default fill;
