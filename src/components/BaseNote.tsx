import React from "react";
import { getInitialData } from "../utils/index";
import { AppendNote } from "./AppendNote";
import { ContentNote } from "./ContentNote";
import autoBind from "auto-bind";

interface Idata {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

class BaseNote extends React.Component<{}, { [key: string]: {} }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: getInitialData(),
      statusName: "note",
    };

    autoBind(this);
  }

  deleteNote(id: number) {
    const data = this.state.data as Array<Idata>;
    const note = data.filter((item: Idata) => item.id !== id);
    this.setState({ data: note });
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
            onDelete={this.deleteNote}
          />
        </div>
      </div>
    );
  }
}

export default BaseNote;
