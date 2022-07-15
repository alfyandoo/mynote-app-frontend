import React from 'react';
import { getInitialData } from '../utils/index';
import { AppendNote } from './AppendNote';
import { ContentNote } from './ContentNote';
const autoBind = require('auto-bind');

class BaseNote extends React.Component<{}, { [key: string]: {} }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: getInitialData(),
      statusName: "note",
    };
    
    autoBind(this);
  }

  deleteNote() {
    return null;
  }

  render() {
    return (
      <div className="m-10">
        <h1 className="text-center">My Note App</h1>
        <div className="min-w-full flex justify-center bg-blue-300">
          <AppendNote />
        </div>

        <div className="">
          <ContentNote
            data={this.state.data}
            statusName={this.state.statusName}
          />
        </div>
      </div>
    );
  }
}

export default BaseNote;
