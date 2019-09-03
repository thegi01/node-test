function helper(x) {
  console.log(x);
}

function cube(x) {
  return x * x * x;
}

function handleButton(event) {
  this.disabled = true;
  this.textContent = "clicked";
}
export { helper, cube, handleButton };
