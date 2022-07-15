import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: "Hello world"
};