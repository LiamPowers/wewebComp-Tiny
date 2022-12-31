export default {
  editor: {
    label: {
      en: "My__Section",
    },
  },
  properties: {
    textFromTiny: {
      label: {
        en: "text",
      },
      type: "text",
      defaultValue: "Insert your text here",
      bindable: true,
    },
    labelComponent: {
      type: "ww-text",
      defaultValue: {
        isWwObject: true,
      },
    },
  },
};
