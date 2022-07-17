import { IData } from "./IData";

export interface ICardNote {
  note: IData;
  onDelete: (id: number) => void;
  onChangeArchiveStatus: (id: number) => void;
  statusName: string;
}
