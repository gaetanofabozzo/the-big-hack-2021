import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { colors } from '../../theme/palette';

export default ({ data }: { data: any }) => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke={colors.primaryLight} />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill={colors.primaryLight} barSize={30} />
  </BarChart>
);
