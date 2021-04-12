import React from 'react';

import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import SingleAreaChart from './SingleAreaChart';

import theme from '../../theme';
import themeDecorator from '../../utils/storybook/decorators/theming';

export default {
  title: 'Charts',
  decorators: [themeDecorator],
};

const mockData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function Bar(): React.ReactElement {
  return (
    <BarChart data={mockData} xDataKey="name" bars={[
      { dataKey: "uv", fill: theme.palette.primary.light},
      { dataKey: "pv", fill: theme.palette.primary.dark },
    ]} />
  );
}

Bar.args = { theme };

export function Line(): React.ReactElement {
  return (
    <LineChart data={mockData} xDataKey="name" lines={[
      { dataKey: "uv", stroke: theme.palette.primary.light },
      { dataKey: "pv", stroke: theme.palette.primary.dark },
    ]} />
  );
}

Line.args = { theme };

export function SingleArea(): React.ReactElement {
  return (
    <SingleAreaChart data={mockData} xDataKey="name" areas={[
      { dataKey: "uv", stroke: theme.palette.primary.light, fill: theme.palette.primary.light },
      { dataKey: "pv", stroke: theme.palette.primary.dark, fill: theme.palette.primary.dark },
    ]} />
  );
}

SingleArea.args = { theme };

export function Pie(): React.ReactElement {
  return (
    <PieChart data={mockData} dataKey={"pv"} />
  );
}

Pie.args = { theme };

