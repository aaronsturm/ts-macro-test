import _ from "lodash";

function $contains<T>(value: T, ...possible: Array<T>) {
  return +["||", (possible: T) => value === possible];
}

const searchItem = "google";
console.log($contains!(searchItem, "erwin", "tj"));
const output = _.map(["6", "8", "10"], parseInt);
console.log(output);
