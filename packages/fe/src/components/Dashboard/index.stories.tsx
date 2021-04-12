import React from 'react';

import Dashboard from '.';

import theme from '../../theme';
import routerDecorator from '../../utils/storybook/decorators/routing';
import themeDecorator from '../../utils/storybook/decorators/theming';

export default {
  title: 'Dashboard',
  decorators: [routerDecorator, themeDecorator],
};

export function Cittadino(): React.ReactElement {
  return (
    <Dashboard />
  );
}

Cittadino.args = {
  url: '/cittadino',
  path: '/:type',
  theme
};

export function DecisionMaker(): React.ReactElement {
  return (
    <Dashboard />
  );
}

DecisionMaker.args = {
  url: '/decision-maker',
  path: '/:type',
  theme
};