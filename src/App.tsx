import React, { useEffect, useState } from 'react';
import { data } from './db/data';
import SelectComponent from './Select';
import BoxResult from './BoxResult';
import Chip from './Chip';
import { filterData } from './utils';
import { resultTypeObj } from './shared/types';
import './App.css';


const App: React.FC = () => {
  const [textSearch, setTextSearch] = useState('');
  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<resultTypeObj>([]);

  useEffect(() => {

    const isResultOk = filterData(data, textSearch, selectValue);
    setSearchResult(isResultOk);
  }, [textSearch, selectValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setTextSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  function handleClick(item: string | null) {
    if (item) {
      const newItems = selectValue.filter((i) => i !== item);
      setSelectValue(newItems);
    } else {
      setSelectValue([]);
    }
  }

  return (
    <>
      <main>
        <div className='App'>
          {SelectComponent({ data, selectValue, setSelectValue, handleClick })}
          {Chip({ selectValue, handleClick })}
          <label>
            Search
            <input
              type='text'
              className='input'
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </label>
        </div>
        {BoxResult({ searchResult })}
      </main>
    </>
  );
};

export default App;
