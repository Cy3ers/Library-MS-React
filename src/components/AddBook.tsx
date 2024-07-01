import React, { useContext, useState, ChangeEvent, FormEvent, MouseEventHandler } from "react";
import { BookContext } from "../contexts/BookContext";
import { BiSolidBookAdd } from "react-icons/bi";

const AddBook: React.FC = () => {
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

  const handleIconClick: MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      handleSubmit(e as any); // TypeScript workaround due to type mismatch
    }
  };

  return (
    <div>
      <h2 className='input-header'>Add Books:</h2>
      <form onSubmit={handleSubmit}>
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
          onClick={handleIconClick}
          style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        />
      </form>
    </div>
  );
};

export default AddBook;
