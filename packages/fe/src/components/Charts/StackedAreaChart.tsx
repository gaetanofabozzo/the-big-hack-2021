import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import { colors } from '../../theme/palette';

export default ({ data }: { data: any }) => (
  <ResponsiveContainer height={300}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="sesso_maschile" stackId="1" stroke="#c94f7c" fill="#ff80ab" />
      <Area type="monotone" dataKey="sesso_femminile" stackId="1" stroke="#1e88e5" fill="#005cb2" />
    </AreaChart>
  </ResponsiveContainer>
);
