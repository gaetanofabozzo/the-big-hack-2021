import React from 'react';
import { createHistory, createMemorySource, LocationProvider, Router, RouteComponentProps } from '@reach/router';

interface RouterOptions {
  url: string;
  basePath?: string;
  path?: string;
}

export const Route = ({ story }: RouteComponentProps<{
      story: () => React.ReactElement;
    }>,
  ): React.ReactElement|null => {
    if (!story) return null;
    return story();
  };
  
const defaultOptions = {
  url: '/',
  basePath: '/',
  path: '/',
};

const routerDecorator = (story: () => React.ReactElement, context: any): React.ReactElement => {
  const { url, basePath, path }: RouterOptions = {
    ...defaultOptions,
    ...context.args,
  };
  const history = createHistory(createMemorySource(url));
  return (
    <>
      <LocationProvider history={history}>
        {({ location }): React.ReactElement => (
          <Router basepath={basePath}>
            <Route path={path} location={location} story={story} />
          </Router>
        )}
      </LocationProvider>
    </>
  );
};

export default routerDecorator;