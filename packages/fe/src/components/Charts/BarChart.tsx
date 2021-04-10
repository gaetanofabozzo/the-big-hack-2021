import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { colors } from '../../theme/palette';

export default ({ data, xDataKey, bars }: any) => (
  <ResponsiveContainer height={300}>
    <BarChart height={300} data={data}>
      <XAxis dataKey={xDataKey} stroke={colors.primaryLight} />
      <YAxis />
      <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
      <Legend />
      {/* <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" /> */}
      <CartesianGrid strokeDasharray="3 3" />
      {bars.map(({ dataKey, barSize, fill }: any) => (
        <Bar dataKey={dataKey} fill={fill} barSize={barSize || 30} />
      ))}
    </BarChart>
  </ResponsiveContainer>
);
