import React, { useState } from 'react';
import './Style.css';

interface Props {
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}
export default function Search({ setSearchResult }: Props) {
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSubmit = () => {
    setSearchResult(searchText);
  };

  return (
    <div>
      <input
        type='text'
        value={searchText}
        onChange={onChangeHandler}
        className='Search'
      ></input>
      <button onClick={onSubmit} className='Button'>
        Search
      </button>
    </div>
  );
}
