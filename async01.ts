async function foo() {
  return 123;
}

// console.log(foo());
foo().then(value => {
  console.log(value);
});
