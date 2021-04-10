import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { colors } from '../../theme/palette';

export default ({ data, lines }: any) => (
  <ResponsiveContainer height={300}>
    <LineChart
      // width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines.map(({ dataKey, stroke, name }: any) => (
        <Line type="monotone" dataKey={dataKey} name={name} stroke={stroke} activeDot={{ r: 8 }} />
      ))}
    </LineChart>
  </ResponsiveContainer>
);