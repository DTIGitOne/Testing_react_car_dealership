
export const defaultCarImage = "https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg";

//regex
export const onlyNumberRegex = /^\d{1,7}$/;
export const moneyRegex = /^\d{1,8}$/;
export const imageUrlRegex = /^https:\/\/.*\.(jpg|png)(\?.*)?$/;

//add vehilce to LocalStorage
export function addObjectToStorage(newObject) {
   const storedData = localStorage.getItem('carData');
   let dataArray = [];

   if (storedData) {
       dataArray = JSON.parse(storedData);
   }

   newObject.id = Date.now();

   dataArray.push(newObject);

   localStorage.setItem('carData', JSON.stringify(dataArray));
}

//random hexcode color generator


// make 3 diffrent varients of color to randomly choose from every time

const Theme1 = {
  main: "#5e5661",
  second: "#d9d9d9"
};

const Theme2 = {
  main: "#93A5CF",
  second: "#E4EfE9"
};

const Theme3 = {
  main: "#4d4d4d",
  second: "#000000"
};

const ThemesArray = [Theme1 , Theme2 , Theme3];

//random theme generator
function getRandomTheme() {
  const randomIndex = Math.floor(Math.random() * ThemesArray.length);
  return ThemesArray[randomIndex];
}
 
 export const randomTheme = getRandomTheme();

