import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import args from "./schemas/arrays/args";
import values from "./schemas/arrays/values";
import hooks from "./schemas/documents/hooks";
import argument from "./schemas/objects/argument";
import value from "./schemas/objects/value";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([hooks, args, argument, values, value]),
});
