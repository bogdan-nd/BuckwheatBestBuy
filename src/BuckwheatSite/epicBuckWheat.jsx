import { Component } from "react";


const cheerio = require("cheerio");
const request = require("request-promise");

const epic = async () => {
    const options = {
        uri: "https://cors-anywhere.herokuapp.com/epicentrk.ua/ua/shop/krupy-i-makaronnye-izdeliya/fs/vid-krupa-grechnevaya/",
        transform: function(body) {
          return cheerio.load(body);
        }
      };

    const epiGrechkas = [];

    try {
        const $ = await request(options);
      var count = 0
      $(".columns .listbody-inside .card__name a b").each(function(i, element) {
        let name = $(this)
        .prepend()
        .text();
        epiGrechkas.push({Name: name});
          count +=1;        
      });
      count = 0
      $(".columns .listbody-inside .card__price-sum").each(function(i, element) {
        let price = $(this)
          .prepend()
          .text();
          let re = /.+?(?=грн)/;
        let ans = re.exec(price);
          epiGrechkas[count]['Price'] = ans[0];
        count +=1;
      });
      count = 0
      $(".columns .listbody-inside .card__photo").each(function(i, element) {
        let link = $(this)
        .prepend()
        .attr('href');
        epiGrechkas[count]['Link'] = link;  
        count +=1     
      });
    }
    catch(err) {
      console.log(err +" crawl failed");
    };
    return epiGrechkas;
};

export default epic;