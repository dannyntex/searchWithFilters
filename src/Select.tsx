import  { ChangeEvent } from 'react';
import { filterableFields } from './db/data';

type SelectProps = {
  data: object[];
  selectValue: string[];
  setSelectValue: (value: string[]) => void;
  handleClick: (item: string | null) => void;
};
type FieldType = {
    [key: string]: any; 
}

const SelectComponent = ({
  data,
  selectValue,
  setSelectValue,
  handleClick
}: SelectProps) => {
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    if (name === 'Country') {
      itemFilterChoosed(value);
    } else {
      itemFilterChoosed(value);
    }
  }

  function itemFilterChoosed(value: string) {
    setSelectValue((prevItems)=> [...prevItems, value]);
  }
  return (
    <>
      <label htmlFor=''>Filters </label>
      <div className='selectGroud'>
        {filterableFields.map((fields) => {
          return (
            <>
              <select
                key={fields}
                name='fields'
                defaultValue='fields'
                className='select'
                onChange={handleSelect}
              >
                <option value='fields' disabled>
                  {fields}
                </option>
                {data.map((result:FieldType) => {
                  const value = result[fields];

                  let itemDisabled = false;
                  const item = selectValue.find((item) => item === value);
                  if (item) {
                    itemDisabled = true;
                  }
                  return (
                    <option key={value} value={value} disabled={itemDisabled}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </>
          );
        })}
        {selectValue.length > 0 && (
          <button onClick={() => handleClick(null)} className='clear'>
            Clear all filters
          </button>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
