import { Component } from "react";


const cheerio = require("cheerio");
const request = require("request-promise");

const foodex = async () => {
    const options = {
        uri: "https://cors-anywhere.herokuapp.com/foodex24.com/category/grechnevaya-krupa",
        transform: function(body) {
          return cheerio.load(body);
        }
      };

    const fxGrechkas = [];

    try {
        const $ = await request(options);
      var count = 0
      $(".item-card-title a").each(function(i, element) {
        let name = $(this)
        .prepend()
        .text();
        fxGrechkas.push({Name: name});
          count +=1;        
      });
      count = 0
      $(".product-price__current").each(function(i, element) {
        let price = $(this)
          .prepend()
          .text();
          
          fxGrechkas[count]['Price'] = price.substring(0,5);
        count +=1;
      });
      count = 0
      $(".item-card-title a").each(function(i, element) {
        let link = $(this)
        .prepend()
        .attr('href');
        fxGrechkas[count]['Link'] = link;  
        count +=1;     
      });    
    }
    catch(err) {
      console.log(err +" crawl failed");
    };
    return fxGrechkas;
};

export default foodex;
