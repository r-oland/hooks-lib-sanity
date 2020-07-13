import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import args from "./schemas/arrays/args";
import hooks from "./schemas/documents/hooks";
import argument from "./schemas/objects/argument";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([hooks, args, argument]),
});
