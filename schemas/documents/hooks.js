import Hook from "../../assets/Hook";

export default {
  name: "hooks",
  title: "hooks",
  icon: Hook,
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      rows: 4,
    },
    {
      name: "values",
      type: "values",
    },
    {
      name: "arguments",
      type: "args",
    },
    {
      name: "sandbox",
      type: "string",
    },
  ],
};
