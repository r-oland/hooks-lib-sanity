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
            title: "hooks-lib",
            apiId: env.id,
            buildHookId: env.hook,
            name: "hooks-lib",
          },
        ],
      },
    },
  ],
};
