import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "regular"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: true,
    label: "Button Label",
    icon: true,
    size: "large",
    type: "primary",
    state: "hover",
    className: {},
    divClassName: {},
  },
};
