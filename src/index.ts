function $contains<T>(value: T, ...possible: Array<T>) {
  return +["||", (possible: T) => value === possible];
}

const searchItem = "google";
console.log($contains!(searchItem, "erwin", "tj"));

interface StringKeywords {
  type: "string";
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
}

interface ValidatorTypeSchema {
  [key: string]: StringKeywords;
}

function stringValidator(property: string, a: Omit<StringKeywords, "type">) {
  return {
    [property]: {
      type: "string",
      ...a,
    },
  };
}

/*function buildIt(a: StringKeywords[]) {
  return a.reduce((prev, currentValue) => ({ ...prev, ...currentValue }), {});
}*/

const a = stringValidator("id", { minLength: 5 });
const b = stringValidator("firstName", { maxLength: 10 });
const b = stringValidator("lastName", { maxLength: 10 });
console.log(a);

// console.log(buildIt([a, b]));
function $buildEventSchema(validatorSchema: StringKeywords[]) {
  const t = validatorSchema;
  return t.reduce((prev, currentValue) => ({ ...prev, ...currentValue }), {});
}

console.log($buildEventSchema!([a, b]));
