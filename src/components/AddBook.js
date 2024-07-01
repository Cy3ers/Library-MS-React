// ./components/AddBook.js

import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { BiSolidBookAdd } from "react-icons/bi";

const AddBook = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (e) => {
    const newTitle = e.target.name === "title" ? e.target.value : title;
    const newAuthor = e.target.name === "author" ? e.target.value : author;
    setTitle(newTitle);
    setAuthor(newAuthor);
    setIsDisabled(newTitle.trim() === "" || newAuthor.trim() === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      return;
    }
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
    setIsDisabled(true);
  };

  return (
    <div>
      <h2 className='input-header'>Add Books:</h2>
      <form>
        <input
          type='text'
          placeholder='Book Title'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='Author Name'
          name='author'
          value={author}
          onChange={handleInputChange}
          required
        />
        <BiSolidBookAdd
          className={`add-button${isDisabled ? " disabled" : ""}`}
          onClick={handleSubmit}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default AddBook;
