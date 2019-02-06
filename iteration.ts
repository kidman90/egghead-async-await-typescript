import { magic } from './server';

(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for('Symbol.asyncIterator');

async function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    // index++;
    index = await magic(index);
    if (index > 10) {
      break;
    }
  }
}

async function main() {
  // for (const num of numbers()) {
  //   console.log(num);
  // }
  for await (const num of numbers()) {
    console.log(num);
  }
}

main();
