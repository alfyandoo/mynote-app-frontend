import React from 'react';
import { getInitialData } from '../utils/index';
import { AppendNote } from './AppendNote';
import { ContentNote } from './ContentNote';

class BaseNote extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: getInitialData(),
    };
  }

  render() {
    return (
      <div className="m-10">
        <h1 className="text-center">My Note App</h1>
        <div className="min-w-full flex justify-center bg-blue-300">
          <AppendNote />
        </div>

        <div>
          <ContentNote />
        </div>
      </div>
    );
  }
}

export default BaseNote;
