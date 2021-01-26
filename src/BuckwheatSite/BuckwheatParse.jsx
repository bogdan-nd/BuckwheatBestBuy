import { Component } from "react";
import fozzy from './fozzyBuckWheat';
import epic from './epicBuckWheat';
import foodex from './foodExBuckWheat';


function compare(a, b) {
    if (parseInt(a['Price'],10) < parseInt(b['Price'],10)) {
      return -1;
    }
    if (parseInt(a['Price'],10) > parseInt(b['Price'],10)) {
      return 1;
    }
    return 0;
  }

async function sorted_array() {

    let f = await fozzy();
    let e = await epic();
    let fd = await foodex();

    const result = f.concat(e).concat(fd);
        result.sort(compare);
        //console.log(result);
        return result;
    
}


export default sorted_array;
