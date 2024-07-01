// ./types/index.ts

export interface Book {
  title: string;
  author: string;
  checkedOut: boolean;
  isbn: string;
}

export type Action =
  | { type: "ADD_BOOK"; book: { title: string; author: string } }
  | { type: "ISSUE_BOOK"; isbn: string }
  | { type: "RETURN_BOOK"; isbn: string }
  | { type: "REMOVE_BOOK"; isbn: string };
