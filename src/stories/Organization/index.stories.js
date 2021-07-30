import React from "react";
import { MemoryRouter } from "react-router";
import Organization from "../../components/Organization/index";
import ProviderWrapper from "../../helpers/providerWrapper";

export default {
  title: "Organization/Organization",
  component: Organization,
  argTypes: {
    backgroundcolor: {
      control: "color",
    },
    textcolor: {
      control: "color",
    },
  },
};

const Template = (args) => (
  <ProviderWrapper>
    <MemoryRouter>
      under construction
      {/* <Organization {...args} /> */}
    </MemoryRouter>
  </ProviderWrapper>
);

export const Default = Template.bind({});
