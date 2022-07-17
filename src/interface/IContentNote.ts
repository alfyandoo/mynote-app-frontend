import { IData } from "./IData";

export interface IContentNote {
  data: Array<IData>;
  statusName: string;
  onDelete: (id: number) => void;
  onChangeArchiveStatus: (id: number) => void;
  onChangeStatusName: (newStatusName: string) => void;
  search: string;
  onSearch: (value: string) => void;
}
