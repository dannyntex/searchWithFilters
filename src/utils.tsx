import { resultTypeObj } from './shared/types';

export const filterData = (
  data: any[],
  textSearch: string,
  selectValue: string[]
) :resultTypeObj => {
  const searchItemsSelectedLower: string[] =
    selectValue.length !== 0
      ? selectValue.map((item) => {
          return item.toLocaleLowerCase();
        })
      : [];

  const inputWords = textSearch
    .toLowerCase()
    .split(' ')
    .filter((word) => word.length > 0);
  const result = data.filter((item) => {
    const itemValues = Object.values(item);
    const itemValuesString = itemValues.join(' ').toLowerCase();

    const sis = searchItemsSelectedLower.find((item) => {
      return itemValuesString.includes(item);
    });
    if (inputWords.length === 0 && !sis) {
      return false;
    }
    const sisCheck = sis ? itemValuesString.includes(sis) : false;

    const resultFinal =
      searchItemsSelectedLower.length > 0
        ? inputWords.every((word) => itemValuesString.includes(word)) &&
          sisCheck
        : inputWords.every((word) => itemValuesString.includes(word));
    return resultFinal;
  });

  const isResultOk = result.length > 0 ? result : [];
  return isResultOk;
};
