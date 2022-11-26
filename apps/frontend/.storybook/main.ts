import type { Options, StorybookConfig } from "@storybook/core-common";
import path from "path";
import { rootMain } from "../../../.storybook/main";

const config: StorybookConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: "webpack5" },

  stories: [
    ...rootMain.stories,
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    ...(rootMain.addons || []),
    "@nrwl/react/plugins/storybook",

    "storybook-addon-swc",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      },
    },
  ],
  webpackFinal: async (webpackConfig, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      webpackConfig = await rootMain.webpackFinal(webpackConfig, {
        configType,
      } as Options);
    }

    // add your own webpack tweaks if needed

    return webpackConfig;
  },
};

module.exports = config;
