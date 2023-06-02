import React from 'react';


type BoxProps = {
    selectValue: string[];
    handleClick: (item: string | null) => void;
}

const Chip:React.FC<BoxProps> = ({selectValue,handleClick})=>{
    return (
        <div>
        {selectValue &&
          selectValue.map((item, index) => (
            <div key={index} className='chip'>
              {item}
              <span onClick={() => handleClick(item)} className='closebtn'>
                &times;
              </span>
            </div>
          ))}
      </div>
    )
}
export default Chip;