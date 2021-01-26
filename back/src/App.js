import './App.css';
import React  from "react";
import Grechkas from './util/Grechkas'

function compare(a, b) {
  if (parseInt(a['Price'],10) < parseInt(b['Price'],10)) {
    return -1;
  }
  if (parseInt(a['Price'],10) > parseInt(b['Price'],10)) {
    return 1;
  }
  return 0;
}

function App() {
  let fozzyGrech = Grechkas.fozzyGrechkas();
  let epiGrech = Grechkas.epiGrechkas();
  let foodexGrech = Grechkas.foodexGrechkas();
  setTimeout(() => {
    const result = fozzyGrech.concat(epiGrech).concat(foodexGrech);
    result.sort(compare);
    console.log(result);
  }, 3000);
  

  return (
    <div>Hi</div>
  );
}
export default App;
