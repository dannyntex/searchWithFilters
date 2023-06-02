export type resultTypeObj = { Country: string; Version: string; Text: string }[];

export type Item = { Country: string; Version: string; Text: string };
export type resultType = Item[];
export interface BoxResultProps {
  searchResult: resultType;
}
export interface SelectProps {
    data: BoxResultProps;
    selectValue: string[];
}