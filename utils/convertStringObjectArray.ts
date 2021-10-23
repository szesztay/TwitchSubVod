export interface IConvertStringObjectArray {
  name?: string;
  image?: string;
}

export const convertStringObjectArray = (
  data: string,
): IConvertStringObjectArray[] => {
  const dataArray = data.split('|');

  let returnedArray: IConvertStringObjectArray[] = [];

  for (let i = 0; i < dataArray.length; i += 3) {
    returnedArray.push({
      name: dataArray[i],
      image: dataArray[i + 2],
    });
  }
  return returnedArray;
};
