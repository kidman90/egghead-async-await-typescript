async function test() {
  console.log('Waiting 5 seconds');
  await new Promise(res => setTimeout(res, 5000));
  console.log('Done');
}

test();
