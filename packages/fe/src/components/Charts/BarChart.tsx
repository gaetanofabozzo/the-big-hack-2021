import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { colors } from '../../theme/palette';

export default ({ data, dataKey }: { data: any, dataKey: any }) => (
  <ResponsiveContainer height={300}>
    <BarChart height={300} data={data}>
      <XAxis dataKey="place" stroke={colors.primaryLight} />
      <YAxis />
      <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey={dataKey} fill={colors.primaryLight} barSize={30} />
    </BarChart>
  </ResponsiveContainer>
);
