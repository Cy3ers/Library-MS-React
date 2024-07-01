import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import { BookContext } from "../contexts/BookContext";
import AddBook from "../components/AddBook";

const AddBookContainer: React.FC = () => {
  const { dispatch } = useContext(BookContext)!;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "author") {
      setAuthor(value);
    }
    setIsDisabled(title.trim() === "" || author.trim() === "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <AddBook
      title={title}
      author={author}
      isDisabled={isDisabled}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddBookContainer;
