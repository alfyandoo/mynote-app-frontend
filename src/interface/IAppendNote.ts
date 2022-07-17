export interface IAppendNote {
  newData: { [key: string]: string };
  maxLengthTitle: number;
  maxLengthBody: number;
  onTitleChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onSubmitNote: (event: { preventDefault: () => void }) => void;
}
