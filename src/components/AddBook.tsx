import React from "react";
import { BiSolidBookAdd } from "react-icons/bi";

type AddBookProps = {
  title: string;
  author: string;
  isDisabled: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddBook: React.FC<AddBookProps> = ({ title, author, isDisabled, handleInputChange, handleSubmit }) => {
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
          onClick={handleSubmit as any}
          style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        />
      </form>
    </div>
  );
};

export default AddBook;
