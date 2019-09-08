export function helper(x) {
  console.log(x);
}

export function cube(x) {
  return x * x * x;
}

export function handleButton() {
  this.disabled = true;
  this.textContent = "clicked";
}

// export { helper, cube, handleButton };

export const obj = {
  fn1: function() {
    return true;
  },
  fn2: []
};
