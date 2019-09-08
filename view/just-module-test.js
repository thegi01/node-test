const assert = require("assert");

const justModule = require("./just-module");
assert(justModule.returnFalse() === false);
