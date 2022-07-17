import React from "react";
import { getInitialData } from "../utils/index";
import { AppendNote } from "./AppendNote";
import { ContentNote } from "./ContentNote";
import autoBind from "auto-bind";
import { IData } from "../interface/IData"

export class BaseNote extends React.Component<{}, { [key: string]: {} }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: getInitialData(),
      statusName: "note",
      search: "",
      newData: {
        title: "",
        body: "",
      },
      maxLengthTitle: 50,
      maxLengthBody: 200,
    };

    autoBind(this);
  }

  deleteNote(id: number) {
    const data = this.state.data as Array<IData>;
    const note = data.filter((item: IData) => item.id !== id);
    this.setState({ data: note });
  }

  changeArchiveStatus(id: number) {
    this.setState((prevData) => {
      const data = prevData.data as Array<IData>;
      return {
        data: data.map((item: IData) => item.id === id ? { ...item, archived: !item.archived } : item),
      }
    });
  }

  changeStatusName(newStatusName: string) {
    this.setState({ statusName: newStatusName });
  }

  searchNote(value: string) {
    this.setState((prevData) => {
      return {
        ...prevData,
        search: value,
      }
    });
  }

  onTitleChange(value: string) {
    this.setState((prevData) => {
      return {
        maxLengthTitle: 50 - value.slice(0, 50).length,
        newData: {
          ...prevData.newData,
          title: value.length < 50 ? value : value.slice(0, 50),
        },
      };
    });
  }

  onBodyChange(value: string) {
    this.setState((prevData) => {
      return {
        maxLengthBody: 200 - value.slice(0, 200).length,
        newData: {
          ...prevData.newData,
          body: value.length < 200 ? value : value.slice(0, 200),
        },
      };
    });
  }

  onSubmitNote(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const data = this.state.data as Array<IData>;
    const newData = this.state.newData as { title: string; body: string; };
    const title = newData.title as string;
    const body = newData.body as string;

    this.setState({
      data: [
        ...data,
        {
          id: +new Date(),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date().toISOString(),
        }
      ]
    });

    this.setState((prevData) => {
      return {
        newData: {
          ...prevData.newData,
          title: "",
          body: "",
        }
      }
    });
  }

  render() {
    return (
      <div className="m-10">
        <h1 className="text-3xl my-10 text-center font-extrabold text-violet-600">My Note App</h1>
        <div className="min-w-full flex justify-center rounded-xl bg-violet-200">
          <AppendNote
            newData={this.state.newData as { title: string; body: string; }}
            maxLengthTitle={this.state.maxLengthTitle as number}
            maxLengthBody={this.state.maxLengthBody as number}
            onTitleChange={this.onTitleChange as (value: string) => void}
            onBodyChange={this.onBodyChange as (value: string) => void}
            onSubmitNote={this.onSubmitNote as (event: { preventDefault: () => void; }) => void}
          />
        </div>

        <div>
          <ContentNote
            data={this.state.data as Array<IData>}
            statusName={this.state.statusName as string}
            onDelete={this.deleteNote as (id: number) => void}
            onChangeArchiveStatus={this.changeArchiveStatus as (id: number) => void}
            onChangeStatusName={this.changeStatusName as (newStatusName: string) => void}
            search={this.state.search as string}
            onSearch={this.searchNote as (value: string) => void}
          />
        </div>
      </div>
    );
  }
}

export default BaseNote;
