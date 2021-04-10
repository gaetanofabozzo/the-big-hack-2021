import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="positiviSuVaccini" stroke="#8884d8" fill="#8884d8" name="positivi/vaccinati" />
        </AreaChart>
      </ResponsiveContainer>
);
