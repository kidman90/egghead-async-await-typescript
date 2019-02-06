import { getUserDetails } from './getUserDetails';

async function main() {
  const handles = [
    'basarat',
    'eggheadio',
    'joelhooks'
  ];

  //   for (const handle of handles) {
  //     const item = await getUserDetails(handle);
  //     console.log(`
  // Name: ${item.name}
  // Location: ${item.location}
  //     `);
  //   }

  const allPromises = handles.map(getUserDetails);

  //   const combinedPromise = Promise.all(allPromises);
  //   const details = await combinedPromise;
  //   for (const item of details) {
  //     console.log(`
  // Name: ${item.name}
  // Location: ${item.location}
  //     `);
  //   }

  const resultOfPromiseThatWins = Promise.race(allPromises);
  const item = await resultOfPromiseThatWins;
  console.log(`
Name: ${item.name}
Location: ${item.location}
  `);
}

main();
