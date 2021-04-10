import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default ({ data, dataKey, areas }: any) => (
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      {areas.map(({ dataKey: areaKey, stroke, fill }: any) => (
        <Area type="monotone" dataKey={areaKey} stroke={stroke} fill={fill} name="positivi/vaccinati" />
      ))}
    </AreaChart>
  </ResponsiveContainer>
);
