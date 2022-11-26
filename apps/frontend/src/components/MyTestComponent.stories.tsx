import type { Meta, Story } from "@storybook/react";
import MyTestComponent from "./MyTestComponent";

export default {
  component: MyTestComponent,
  title: "MyTestComponent",
} as Meta;

const Template: Story = (args) => <MyTestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
