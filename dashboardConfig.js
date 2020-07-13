import env from "./netlify";

export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "Netlify",
        sites: [
          {
            title: "componentsrb",
            apiId: env.id,
            buildHookId: env.hook,
            name: "componentsrb",
          },
        ],
      },
    },
  ],
};
