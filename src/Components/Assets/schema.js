export const schema = {
  type: "object",
  properties: {
    nom: {
      type: "string",
    },
    paysVisites: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/paysVisites",
    },
  ],
};
