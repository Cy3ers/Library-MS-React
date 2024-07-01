// ./reducers/bookReducer.js

import { v4 as uuid } from 'uuid';

export const bookReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          checkedOut: false,
          isbn: uuid(),
        },
      ];
    case 'ISSUE_BOOK':
      return state.map((book) =>
        book.isbn === action.isbn ? { ...book, checkedOut: true } : book
      );
    case 'RETURN_BOOK':
      return state.map((book) => 
        book.isbn === action.isbn ? { ...book, checkedOut: false} : book
      )
    case 'REMOVE_BOOK':
      return state.filter((book) => book.isbn !== action.isbn);
    default:
      return state;
    }
}