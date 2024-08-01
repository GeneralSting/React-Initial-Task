export type TableHeader = {
  id:
    | "rowNumber"
    | "image"
    | "name"
    | "lastname"
    | "email"
    | "position"
    | "actionDetails";
  label: string;
  cellWidth?: number;
};
