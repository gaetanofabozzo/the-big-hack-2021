import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Dashboard: React.FC<RouteComponentProps> = (props) => {
    console.info(props);
    return (<div>Dashboard</div>)
};

export default Dashboard;