import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider, Theme } from '@material-ui/core';
import { Story as IStory } from '@storybook/react';

const defaultOptions = {
  theme: createMuiTheme({}),
};

export default (Story: IStory, context: any): React.ReactElement => {
  const { theme }: { theme: Theme } = {
    ...defaultOptions,
    ...context.args,
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
}
