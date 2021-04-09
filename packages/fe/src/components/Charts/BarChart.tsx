import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { colors } from '../../theme/palette';

export default ({ data }: { data: any }) => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="place" stroke={colors.primaryLight} />
    <YAxis />
    <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="numberOfVaccines" fill={colors.primaryLight} barSize={30} />
  </BarChart>
);
