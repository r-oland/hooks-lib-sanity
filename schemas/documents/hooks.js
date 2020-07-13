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
      name: "arguments",
      type: "args",
    },
  ],
};
