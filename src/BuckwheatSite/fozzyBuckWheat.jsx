import { Component } from "react";


const cheerio = require("cheerio");
const request = require("request-promise");

const fozzy = async () => {

    const options = {
        uri: "https://cors-anywhere.herokuapp.com/fozzyshop.ua/ru/300143-krupa-grechnevaya",
        transform: function(body) {
          return cheerio.load(body);
        }
      };

    const grechkas = [];

    try {
        
        const $ = await request(options);
        var count = 0
        $(".product-title a").each(function(i, element) {
          let name = $(this)
            .prepend()
            .text();
          grechkas.push({Name: name});        
        });
        count = 0
        $(".product-price").each(function(i, element) {
          let name = $(this)
            .prepend()
            .attr('content');
          grechkas[count]['Price'] =name;
          count +=1;
        });
        count = 0
        $(".product-title a").each(function(i, element) {
          let name = $(this)
            .prepend()
            .attr('href');
            grechkas[count]['Link'] = name;
            count +=1;
        });
     
    }
      catch(err) {
        console.log("crawl failed");
      };
      return grechkas;
  };

  export default fozzy;
