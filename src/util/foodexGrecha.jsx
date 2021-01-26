import rp from "request-promise";
import cheerio from "cheerio";

async function FoodexGrechkas() {
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
          
          fxGrechkas[count]['Price'] = price;
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
    return fxGrechkas;
    })
    .catch(function(err) {
      console.log(err +" crawl failed");
    });
};
export default FoodexGrechkas;
