import { helper, cube, handleButton, obj } from "./helper.js";

helper("This works!");

cubeEl.textContent = cube(3);

buttonEl.onclick = handleButton;

console.log("obj fn1", obj.fn1());
