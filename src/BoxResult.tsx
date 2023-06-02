import React from 'react';
import { Item,BoxResultProps } from './shared/types';


const BoxResult: React.FC<BoxResultProps> = ({ searchResult }) => {
  return (
    <div className='result'>
      {searchResult.length > 0 ? (
        searchResult.map((item: Item) => {
          return (
            <section className='panel'>
              <header className='panel__header'>
                <h4 className='panel__title'>{item.Version }</h4>
              </header>
              <div className='panel__content'>{item.Text}</div>
            </section>
          );
        })
      ) : (
        <h4>No results</h4>
      )}
    </div>
  );
};

export default BoxResult;
