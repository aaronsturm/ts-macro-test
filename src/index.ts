import _ from "lodash";
import { $$ident, $$ts, Save, Var } from "ts-macros";

function $contains<T>(value: T, ...possible: Array<T>) {
  return +["||", (possible: T) => value === possible];
}

/*function $num(name: string | number, variable?: Var<string | number>): string {
  if (
    $$kindof!(name) === SyntaxKind.StringLiteral ||
    $$kindof!(name) === SyntaxKind.Identifier
  )
    variable = "Hi";
  else variable = 10;
  return name + (variable as string);
}*/
interface TypeTest {
  id: string;

}

// TODO rename cheese before push :)
function $temp(cheese: Save<Record<string, string>>) {
  const abc = cheese;
  console.log("cheese", typeof abc);
  // console.log($$ident!("cheese"));
  // console.log(typeof cheese);
  /*if (typeof cheese === "object") {
                                                                      console.log("Cheese is object");
                                                                    } else {
                                                                      console.log("Cheese is NOT and object");
                                                                    }*/
  // const eventSchema = {
  //   // test: $$typeToString!<Record<string, string>>(),
  //   // type: "object",
  //   properties: {
  //     body: {
  //       type: "object",
  //       properties: {
  //         id: { type: "string" },
  //         lastName: { type: "string" },
  //       },
  //       required: ["id", "lastName"], // Insert here all required event properties
  //     },
  //   },
  // };
  // return eventSchema;
}

const searchItem = "google";
console.log($contains!(searchItem, "erwin", "tj"));
const output = _.map(["6", "8", "10"], parseInt);
console.log(output);
const testObj = {
  firstName: "John",
  lastName: "Doe",
};
console.log("TEMP MACRO", $temp!(testObj));

// console.log(typeof testObj);
