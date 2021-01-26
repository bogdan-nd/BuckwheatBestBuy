import { Component } from "react";
import rp from "request-promise";
import cheerio from "cheerio";


class Grechkas extends Component {

  static fozzyGrechkas() {
      let grechkas = [];
    rp("https://fozzyshop.ua/ru/300143-krupa-grechnevaya")
      .then(html => {
        
        let $ = cheerio.load(html);
    
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

      // console.log(grechkas);
     
      })
      .catch(function(err) {
        console.log("crawl failed");
      });
      return grechkas;
  };

static epiGrechkas() {
    let epiGrechkas = [];
  rp("https://epicentrk.ua/ua/shop/krupy-i-makaronnye-izdeliya/fs/vid-krupa-grechnevaya/")
    .then(html => {
      
      let $ = cheerio.load(html);
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

     //console.log(epiGrechkas);
    
    })
    .catch(function(err) {
      console.log(err +" crawl failed");
    });
    return epiGrechkas;
};

static foodexGrechkas() {
    let fxGrechkas = [];
  rp("https://foodex24.com/category/grechnevaya-krupa")
    .then(html => {
      
      let $ = cheerio.load(html);
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

     //console.log(fxGrechkas);
    
    })
    .catch(function(err) {
      console.log(err +" crawl failed");
    });
    return fxGrechkas;
};

}

export default Grechkas;