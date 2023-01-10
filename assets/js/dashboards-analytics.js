/**
 * Dashboard Analytics
 */


// function ab(){
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

//  fetch("https://etsy-seo-test.herokuapp.com/getSingleListing/788417814", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }
// console.log(response)




// WARNING: For GET requests, body is set to null by browsers.

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://etsy-seo-test.herokuapp.com//getUser?email=etsytool%40gmail%2Ecom");

// xhr.send();


// api url




// 'use strict';

// function get_jsondata(){
//   getJSON('https://etsy-seo-test.herokuapp.com/getListing/ps4%20custom%20controller',
// function(err, data) {
//   if (err !== null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });
// }
// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET', url, true);

//     xhr.responseType = 'json';
    
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:80');
//     xhr.send();
// };
// import data from 'G:/xampp/htdocs/SEO projet/doxs/response.json' assert { type: 'JSON' };
//   console.log(data);

// const api_url = "https://etsy-seo-test.herokuapp.com/getListing/ps4";
  
// // // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     // graphs(data);
// }
// // Calling that async function
  

//   getapi(api_url); //parse JSON
//   function graphs(json_data){

//         // $("#").append('')
//         console.log(json_data);  
//         $("#popular_tags tr").remove(); 

//          historical_metrices_data = json_data['historical_metrices']['trends'];
//         for (let x in historical_metrices_data)
//         {
//           month_arr[x] = historical_metrices_data[x].month + " " + historical_metrices_data[x].year;
//           value_arr[x] = historical_metrices_data[x].value;
//         }

//         // popular tagssssss
//         popular_tags_data = json_data['popular_tags'];
//         max_xount = 0;
        
//         for (let x in popular_tags_data)
//         {
//           popular_tags_names[x] = popular_tags_data[x][0]
//           popular_tags_names_data[x] = popular_tags_data[x][1]
//           if (popular_tags_names_data[x].count > max_xount)
//           {
//               max_xount = popular_tags_names_data[x].count
//           }
          
//         }
        
      
//          for (let x in popular_tags_names)
//             {
//               temp=2;
//               $("#popular_tags").append('<tr><td>'+popular_tags_names[x]+'</td><td><div class="progress" style="height: 20px; width:250px;"><div class="progress-bar" role="progressbar" style="width: '+(popular_tags_names_data[x].count*100)/max_xount+'%" aria-valuenow="'+popular_tags_names_data[x].count+'" aria-valuemin="0" aria-valuemax="'+max_xount+'">'+popular_tags_names_data[x].count+'</div></div>'+'</td><td>'+temp+'</td><td>'+popular_tags_names_data[x].photos+'</td><td>'+(popular_tags_names_data[x].price/popular_tags_names_data[x].photos).toFixed(2)+'</td></tr>');
//             }

//             //long taillllllllllllllll
//         long_tail_keyword = json_data['long_tail_keyword'];
//         if (long_tail_keyword == true)
//         {
//            $("#cross").hide();
//            $("#tick").show();

//         }
//         else
//         {
//            $("#cross").show();
//            $("#tick").hide();
//         }

// //Priing --------------------------------------
//         pricing_data = json_data['item_pricing'];
//          for (let x in pricing_data)
//         {
//           pricing_data_item[x] = pricing_data[x][1];
//           pricing_data_amount[x] = pricing_data[x][0]/100;
//         }


//         //items data-------------------------

//         items_data = json_data['items'];
//         for (let x in items_data)
//         {
//           items_data_title[x] = items_data[x].title;
//           items_data_images_count[x] = items_data[x]['images'].length;
//           items_data_tags[x] = items_data[x]['tags'];
//           items_data_price[x] = (items_data[x].price.amount/items_data[x].price.divisor).toFixed(2);
//           items_data_links[x] =items_data[x].url;
//           items_data_images[x] = items_data[x]['images'][0].url_75x75;
//           $("#sample_listing").append('<tr><td class = "mytd"><a href="'+items_data_links[x]+'">'+items_data_title[x]+'</a></td><td>'+'dummy'+'</td><td>'+'temp'+'</td><td>'+items_data_images_count[x]+'</td><td class = "mytd">'+items_data_tags[x]+'</td><td>'+items_data_price[x]+'</td></tr>');
            
//           $("#imgs").append('<a href="'+items_data_links[x]+'"><img src="'+items_data_images[x]+'"></a>');
            
//         }




 
$("#Calculator_main").show();
  $("#calculator_spinner_loading").hide();

function calculator(){
  $("#Calculator_main").hide();
  $("#calculator_spinner_loading").show();
  var Price = document.getElementById("Price").value;
  var Shipping_P = document.getElementById("Shipping_P").value;
  var Discount = document.getElementById("Discount").value;
  var Labour_C = document.getElementById("Labour_C").value;
  var Material_C = document.getElementById("Material_C").value;
  var Shipping_C = document.getElementById("Shipping_C").value;
  var Esty_Ads = document.getElementById("Esty_Ads").value;
  var Renewing = document.getElementById("Renewing").value;
  var checkedValue = document.querySelector('.form-check-input:checked').value;
  
  var url = "http://eprimedata.com/api/v1/calculateProfit?";
  var data_str = "cust_price="+Price+"&cust_shipping_price="+Shipping_P+"&cust_coupon="+Discount+"&labor_cost="+Labour_C+"&material_cost="+Material_C+"&shipping_cost="+Shipping_C+"&etsy_ads="+Esty_Ads+"&renewing="+Renewing+"&offside_ads_fee_per="+checkedValue ;
  var final_url = url+data_str;
  console.log(final_url);

   async function postData(url = '', data = {}) {
  // Default options are marked with *
    const response = await fetch(url, {
       method: 'GET',
    redirect: 'follow',
    // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }


   postData(final_url, { answer: 42 })
      .then((data) => {
        console.log(data);
        json_data = data;

        $("#cust_price").empty();
        cust_price = json_data['cust_price'];
        $("#cust_price").append("Price (incl. Shipping) $"+cust_price.toFixed(2));

        $("#discounted_price").empty();
        discounted_price = json_data['discounted_price'];
        $("#discounted_price").append("After discount: $"+discounted_price.toFixed(2));

        $("#total_cost").empty();
        total_cost = json_data['total_cost'];
        $("#total_cost").append("Price (incl. Shipping) $"+total_cost.toFixed(2));

        $("#transaction_fee").empty();
        transaction_fee = json_data['transaction_fee'];
        $("#transaction_fee").append("$"+transaction_fee.toFixed(2));

        $("#total_fees").empty();
        total_fees = json_data['total_fees'];
        $("#total_fees").append("Total Fees: $"+total_fees.toFixed(2));

        $("#total_cost_1").empty();
        total_cost_1 = json_data['total_cost'];
        $("#total_cost_1").append("$"+total_cost_1.toFixed(2));

        $("#total_fees_1").empty();
        total_fees_1 = json_data['total_fees'];
        $("#total_fees_1").append("$"+total_fees_1.toFixed(2));

        $("#estimated_profit").empty();
        estimated_profit = json_data['estimated_profit'];
        $("#estimated_profit").append("$"+estimated_profit.toFixed(2));


        $("#estimated_margin").empty();
        estimated_margin = json_data['estimated_margin'];
        $("#estimated_margin").append("Estimated Margin: "+estimated_margin.toFixed(0)+"%");

        $("#payment_processing_fee").empty();
        payment_processing_fee = json_data['payment_processing_fee'];
        $("#payment_processing_fee").append("$"+payment_processing_fee.toFixed(2));

        $("#pirce_include_s").empty();
        pirce_include_s = json_data['cust_price'];
        $("#pirce_include_s").append("$"+pirce_include_s.toFixed(2));

        
        $("#Calculator_main").show();
  $("#calculator_spinner_loading").hide();
      });


  

}


// ----------------------------------------------------------------------------------------------------------
$("#spinner_loading").hide();
$("#search_data").hide();
$("#footer_").hide();

$("#single_listing_spinner_loading").hide();
$("#single_listing_search_data").hide();
$("#footer_single_listing").hide();



function single_listing_jsondata(){
  document.getElementById("single_listing_btn").disabled = true;

  $("#single_listing_spinner_loading").show();
  $("#single_listing_search_data").hide();
  $("#footer_single_listing").hide();


  $("#s_listing_disc").empty();
  $("#s_listing_title_characters").empty();
  $("#s_listing_words").empty();

  $("#s_listing_des_characters").empty();
  $("#s_listing_images").empty();
  $("#s_listing_quantity").empty();
  $("#s_listing_views").empty();
  $("#s_listing_m_views").empty();
  $("#s_listing_likes").empty();
  $("#s_listing_created").empty();
  $("#s_listing_last_m").empty();
  $("#s_listing_expires").empty();
  $("#s_listing_age").empty();
  $("#s_listing_price").empty();
  $("#single_listing_imgs").empty();
  $("#s_listing_heading").empty();
  $("#s_listing_category").empty();
  $("#avatar_single_listing").empty();
  // $("#min_days").empty();
  // $("#min_days").empty();
  // $("#min_days").empty();
  // $("#min_days").empty();
  // $("#min_days").empty();


  $("#tags tr>td").remove(); 
  $('#tags').DataTable().clear().destroy();
  var Searched_single_f = "";

  var Searched_single = document.getElementById("Search_text_single_listing").value;
  if (Searched_single.includes("http") == true) 
  {
    var Searched_single_f = Searched_single.split("/");
    Searched_single_f = Searched_single_f[4];
  }
  else
  {
    var Searched_single_f = Searched_single;
  }
  
  console.log(Searched_single_f);

  // function readTextFile(file, callback) {
  //     var rawFile = new XMLHttpRequest();
  //     rawFile.overrideMimeType("application/json");
  //     rawFile.open("GET", file, true);
  //     rawFile.onreadystatechange = function() {
  //         if (rawFile.readyState === 4 && rawFile.status == "200") {
  //             callback(rawFile.responseText);
  //         }
  //     }
  //     rawFile.send(null);
  //     }
  async function postData(url = '', data = {}) {
  // Default options are marked with *
    const response = await fetch(url, {
       method: 'GET',
    redirect: 'follow',
    // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }


  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
       console.log("http://eprimedata.com/api/v1/getSingleListing/"+Searched_single_f)

        // calling above function(
        url = "http://eprimedata.com/api/v1/getSingleListing/"+Searched_single_f
        // readTextFile(url, function(text){
        postData("http://eprimedata.com/api/v1/getSingleListing/"+Searched_single_f, { answer: 42 })
        .then((data) => {
        json_data = data; 
        //parse JSON
        // var json_data = text;
        // console.log(text);  
        console.log(data);  

        dis_json = json_data['item_data'].description;
        $("#s_listing_disc").append('<p id="truncate_1" class="truncate">'+dis_json+'</p> <span><a onclick=read_more_fun() id="read_more">Read More..</a><a id="read_less" onclick=read_less_fun()>Read Less..</a></span><br>');


        $("#read_less").hide();

        heading_json = json_data['item_data']['title'];
        $("#s_listing_heading").append(heading_json);


        category_json = json_data['item_data']['category'];
        category_json_data = ""
        for (let x in category_json)
        { 
          if (x == 0)
          {
            category_json_data = category_json[x];
          }
          else
          {
            category_json_data = category_json_data + "/" + category_json[x];
          }
          
        }
        $("#s_listing_category").append(category_json_data);

        title_characters = json_data['item_data']['title_characters'];
        $("#s_listing_title_characters").append(title_characters);

        words_in_title = json_data['item_data']['words_in_title'];
        $("#s_listing_words").append(words_in_title);

        descripiton_characters = json_data['item_data']['descripiton_characters'];
        $("#s_listing_des_characters").append(descripiton_characters);

        images_len = json_data['item_data']['images'].length;
        $("#s_listing_images").append(images_len + " / 10");


        quantity = json_data['item_data']['quantity'];
        $("#s_listing_quantity").append(quantity);

        views = json_data['item_data']['views'];
        $("#s_listing_views").append(views);

        monthly_views = json_data['item_data']['monthly_views'];
        $("#s_listing_m_views").append(monthly_views.toFixed(0));

        num_favorers = json_data['item_data']['num_favorers'];
        $("#s_listing_likes").append(num_favorers);

        creation_time = json_data['item_data']['creation_time'];
        creation_time_date = new Date(creation_time*1000).toDateString();
        $("#s_listing_created").append(creation_time_date);

        last_modified = json_data['item_data']['last_modified'];
        last_modified_date = new Date(last_modified*1000).toDateString();
        $("#s_listing_last_m").append(last_modified_date);

        expires_on = json_data['item_data']['expires_on'];
        expires_on_date = new Date(expires_on*1000).toDateString();
        $("#s_listing_expires").append(expires_on_date);

        age = json_data['item_data']['age'];
        $("#s_listing_age").append(age.toFixed(0) + " Days");

        price = json_data['item_data']['price'];
        $("#s_listing_price").append("$"+price);

        tags_data = json_data['item_data']['tags_data'];
        
        for (let x in tags_data)
        {
          if (tags_data[x].long_tail = true)
          {
              img_long = "assets/img/icons/tick.png";
          }
          else
          {
              img_long = "assets/img/icons/cross.png";
          }

          if (tags_data[x].is_in_description = true)
          {
              img_des = "assets/img/icons/tick.png";
          }
          else
          {
              img_des = "assets/img/icons/cross.png";
          }

          if (tags_data[x].is_in_title = true)
          {
              img_title = "assets/img/icons/tick.png";
          }
          else
          {
              img_title = "assets/img/icons/cross.png";
          }

          if (tags_data[x].average_price = "null")
          {
              avg_price_tbl = tags_data[x].average_price;
          }
          else
          {
              console.log(tags_data[x].average_price); 
              avg_price_tbl = tags_data[x].average_price.toFixed(0);
          }

          $("#tags").append('<tr><td>'+tags_data[x].name+'</td><td>'+tags_data[x].searches+'</td><td>'+tags_data[x].favourites+'</td><td>'+avg_price_tbl+'</td><td>'+'<img src='+img_long+' style="width: 20px; height: 20px;">' +'</td><td>'+'<img src='+img_title+' style="width: 20px; height: 20px;">' +'</td><td>'+'<img src='+img_des+' style="width: 20px; height: 20px;">' +'</td></tr>');
                
        }

        

        images_data = json_data['item_data']['images'];
        
        for (let x in images_data)
        {
          $("#single_listing_imgs").append('<a href="'+json_data['item_data']['url']+'" target="_blank"><img style="padding: 12px;"  src="'+images_data[x].url_75x75+'"></a>');
        }

         $("#avatar_single_listing").append('<img src="' + images_data[0].url_75x75  + '" alt class="w-px-50 h-px-50 rounded-circle" />');
        
        

        $("#tags").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]});
              
        $("#single_listing_spinner_loading").hide();
      $("#single_listing_search_data").show();
      $("#footer_single_listing").show();

      document.getElementById("single_listing_btn").disabled = false;
      });

  
}

function get_jsondata_main_search() {


document.getElementById("search_btn").disabled = true;
  $("#min_pricche").empty();
  $("#avg_price").empty();
  $("#max_price").empty();

  $("#max_days").empty();
  $("#avg_days").empty();
  $("#min_days").empty();

  $("#searches").empty();
  $("#competition").empty();
  $("#engagement").empty();
  $("#avg_searches_s").empty();
  $("#avg_price_s").empty();
  $("#favorites_s").empty();


  $("#searches tr>td").remove(); 
  $("#sample_listing tr>td").remove(); 
  $('#popular_tags').DataTable().clear().destroy();
  $('#sample_listing').DataTable().clear().destroy();
  $('#shopper_search').DataTable().clear().destroy();
  $('#long_tail_alter').DataTable().clear().destroy();
  document.getElementById("imgs").innerHTML = "";

  var Searched_value = document.getElementById("Search_text").value;

  $("#footer_").show();

  $("#spinner_loading").show();
  $("#search_data").hide();

  let cardColor, headingColor, axisColor, shadeColor, borderColor;
  let historical_metrices_data,popular_tags_data,temp,max_xount,long_tail_keyword, pricing_data;
  let items_data,shipping_price_data, shipping_days_price, avg_days, avg_price, max_days, max_price, min_days, min_price;
  let long_tail_alternative_data, shopper_search_data;

  var month_arr = [], value_arr = [], popular_tags_names = [], popular_tags_names_data = [];
  var pricing_data_item = [], pricing_data_amount = [], items_data_title = [], items_data_images_count = [];
  var items_data_tags = [], items_data_price = [], items_data_links = [], items_data_images = [], items_data_days_to_ship = [];
  var shiping_price_data_item = [], shiping_price_amount = [];
  var engagement_1;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;






    function readTextFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
              callback(rawFile.responseText);
          }
      }
      rawFile.send(null);
      }

    // calling above function(
    url = "http://eprimedata.com/api/v1/getListing/" + Searched_value
    readTextFile(url, function(text){
        var json_data = JSON.parse(text); //parse JSON
        console.log(json_data);  
        //------------------------------------------------------HTMLLL
        // $("#search_data").append('<div class="container-xxl flex-grow-1 container-p-y">   <div class="row"> <!-- Order Statistics --> <div class="col-md-12 col-lg-12 order-0 mb-4"> <div class="card h-100"> <div class="card-header d-flex align-items-center justify-content-between pb-0"> <div class="card-title mb-0"> <h5 class="m-0 me-2">Searches</h5> <!-- <small class="text-muted">42.82k Total Sales</small> --> </div> <div class="dropdown"> <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <i class="bx bx-question-mark"></i> </button> <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics" style="background: #7d7d7d"> <a class="dropdown-item" href="javascript:void(0);" style="color: #ffffff"> Etsy suggests using as many long tail keywords as possible to<br> target your best potential customers. Marmalead uses<br> machine learning behind the scenes studying keywords to decide<br> if they are a long tail keyword or not. <br>Long tail keywords are more descriptive for shoppers and ultimately put your<br> listings in a good spot for being found and sold.</a> </div> </div> </div> <div class="card-body"> <div class="row"> <div class="col-4"></div> <div class=" col-4"> <div class="row"> <div id="cross" class=" col-3"><img src="../assets/img/icons/cross.png" style="width: 50px; height: 50px;"></div> <div id="tick" class=" col-3"><img src="../assets/img/icons/tick.png" style="width: 50px; height: 50px;"></div> <div class=" col-9"><h1>Long Tail</h1></div> </div> </div> </div> <div class="col-4"></div> </div> </div> </div>  </div>   <div class="row"> <!-- Order Statistics --> <div class="col-md-6 col-lg-4 order-0 mb-4"> <div class="card h-100"> <div class="card-header d-flex align-items-center justify-content-between pb-0"> <div class="card-title mb-0"> <h5 class="m-0 me-2">Searches</h5> <!-- <small class="text-muted">42.82k Total Sales</small> --> </div> <div class="dropdown"> <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <i class="bx bx-question-mark"></i> </button> <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics" style="background: #7d7d7d"> <a class="dropdown-item" href="javascript:void(0);" style="color: #ffffff">The number of unique searches this keyword<br> is expected to generate in the next 30 days.<br>While everyone else is using old data to make guesses, <br>you have access to forecasting based on actual shopper<br> search volume. The bar meter you’re seeing is<br> calibrated based on millions of searches<br> from real shoppers. The more bars the better!</a> </div> </div> </div> <div class="card-body"> <div class="row"> <div class="col-2"></div> <div class=" col-8 signal-bars mt-1 sizing-box good four-bars"> <div class="first-bar bar"></div> <div class="second-bar bar"></div> <div class="third-bar bar"></div> <div class="fourth-bar bar"></div> <div class="fifth-bar bar"></div> </div> </div> <div class="col-2"></div> </div> </div> </div> <!--/ Order Statistics -->  <!-- Expense Overview --> <div class="col-md-6 col-lg-4 order-1 mb-4"> <div class="card h-100"> <div class="card-header d-flex align-items-center justify-content-between pb-0"> <div class="card-title mb-0"> <h5 class="m-0 me-2">Competition</h5> <!-- <small class="text-muted">42.82k Total Sales</small> --> </div> <div class="dropdown"> <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <i class="bx bx-question-mark"></i> </button> <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics" style="background: #7d7d7d"> <a class="dropdown-item" href="javascript:void(0);" style="color: #ffffff"> The sweet spots for competition levels are gauged on the Competition meter.<br> Too many competing listings and your products risk getting lost in the mix.<br> Too few and you risk shoppers leaving in favor of another search<br> that returns more products.</a> </div> </div> </div> <div class="card-body"> <div class="row"> <div class="col-2"></div> <div class=" col-8 signal-bars mt-1 sizing-box ok three-bars"> <div class="first-bar bar"></div> <div class="second-bar bar"></div> <div class="third-bar bar"></div> <div class="fourth-bar bar"></div> <div class="fifth-bar bar"></div> </div> </div> <div class="col-2"></div> </div> </div> </div> <!--/ Expense Overview -->  <!-- Transactions --> <div class="col-md-6 col-lg-4 order-2 mb-4"> <div class="card h-100"> <div class="card-header d-flex align-items-center justify-content-between pb-0"> <div class="card-title mb-0"> <h5 class="m-0 me-2">Engagement</h5> <!-- <small class="text-muted">42.82k Total Sales</small> --> </div> <div class="dropdown"> <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > <i class="bx bx-question-mark"></i> </button> <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics" style="background: #7d7d7d"> <a class="dropdown-item" href="javascript:void(0);" style="color: #ffffff"> The number of unique visits this keyword is expected to generate in<br> the next 30 days. The number is based on THIS specific keyword.<br> Were even looking at listing visits where those listings may<br>  not even exist anymore or their tags may have changed since the last visit.</a> </div> </div> </div> <div class="card-body"> <div class="row"> <div class="col-2"></div> <div class=" col-8 signal-bars mt-1 sizing-box bad one-bar"> <div class="first-bar bar"></div> <div class="second-bar bar"></div> <div class="third-bar bar"></div> <div class="fourth-bar bar"></div> <div class="fifth-bar bar"></div> </div> </div> <div class="col-2"></div> </div> </div> </div> <!--/ Transactions --> </div>     <div class="row"> <div class=" col-lg-12 order-0  mb-4"> <div class="card"> <div class="row row-bordered g-0"> <div class="col-md-12"> <h5 class="card-header m-0 me-2 pb-3">Engagement Over Time</h5> <div id="totalRevenueChart" class="px-2"></div> </div> </div> </div> </div> </div>     <!-- Basic Bootstrap Table --> <div class="row"> <div class=" col-lg-12 col-md-12 mb-4"> <div class="card"> <div class="card-header me-2"> <h3 class="card-title">Popular Tags</h3> </div> <!-- /.card-header --> <div class="card-body"> <table id="popular_tags" class="table table-bordered table-striped "> <thead> <tr> <th>Tag</th> <th>Count</th> <th>Days to Ship</th> <th>Photos</th> <th>Avg Price</th> </tr> </thead> <tbody> </tbody> <tfoot> </tfoot> </table> </div> <!-- /.card-body --> </div> </div> </div> <!--/ Basic Bootstrap Table -->   <div class="row"> <div class=" col-lg-12 order-0  mb-4"> <div class="card"> <div class="row row-bordered g-0"> <div class="col-md-12" > <h5 class="card-header m-0 me-2 pb-3">Pricing</h5> <div id="price_charts" class="px-2"></div> </div> </div> </div> </div> </div>    <!-- Basic Bootstrap Table --> <div class="row"> <div class=" col-lg-12 col-md-12 mb-4"> <div class="card"> <div class="card-header me-2"> <h3 class="card-title">Sample Listing</h3> </div> <!-- /.card-header --> <div class="card-body"> <table id="sample_listing" class="table table-bordered table-striped "> <thead> <tr> <th>Title</th> <th>Photo Score</th> <th>Days to Ship</th> <th>Photos</th> <th>Tags</th> <th>Price</th> </tr> </thead> <tbody> </tbody> <tfoot> </tfoot> </table> </div> <!-- /.card-body --> </div> </div> </div> <!--/ Basic Bootstrap Table -->  <div class="row"> <div class=" col-lg-12 order-0  mb-4"> <div class="card"> <div class="row row-bordered g-0"> <div class="col-md-12"> <h5 class="card-header m-0 me-2 pb-3">Images</h5> <div id="imgs" class="px-2"></div> </div> </div> </div> </div> </div>   </div>');
                
          //--------------------------------------------------------------------------------------------------
        historical_metrices_data = json_data['historical_metrices']['trends'];
        for (let x in historical_metrices_data)
        {
          month_arr[x] = historical_metrices_data[x].month + " " + historical_metrices_data[x].year;
          value_arr[x] = historical_metrices_data[x].value;
          engagement_1 = historical_metrices_data[x].value;
        }

        // popular tagssssss
        popular_tags_data = json_data['popular_tags'];
        max_xount = 0;
        
        for (let x in popular_tags_data)
        {
          popular_tags_names[x] = popular_tags_data[x][0]
          popular_tags_names_data[x] = popular_tags_data[x][1]
          if (popular_tags_names_data[x].count > max_xount)
          {
              max_xount = popular_tags_names_data[x].count
          }
          
        }
        
      
         for (let x in popular_tags_names)
            {
              temp=2;
              $("#popular_tags").append('<tr><td>'+popular_tags_names[x]+'</td><td><div class="progress" style="height: 20px; width:250px;"><div class="progress-bar" role="progressbar" style="width: '+(popular_tags_names_data[x].count*100)/max_xount+'%" aria-valuenow="'+popular_tags_names_data[x].count+'" aria-valuemin="0" aria-valuemax="'+max_xount+'">'+popular_tags_names_data[x].count+'</div></div>'+'</td><td>'+popular_tags_names_data[x].days_to_ship+'</td><td>'+popular_tags_names_data[x].photos+'</td><td>'+(popular_tags_names_data[x].price/popular_tags_names_data[x].photos).toFixed(2)+'</td></tr>');
            }

            //long taillllllllllllllll
        long_tail_keyword = json_data['long_tail_keyword'];
        if (long_tail_keyword == true)
        {
           $("#cross").hide();
           $("#tick").show();

        }
        else
        {
           $("#cross").show();
           $("#tick").hide();
        }

//Priing --------------------------------------
        pricing_data = json_data['item_pricing'];
        pricing_data = pricing_data.sort();
        temp = 0;
         for (let x in pricing_data)
        {
          if (pricing_data[x][1] != 1)
          {
            if (temp < 20)
            {
              pricing_data_item[temp] = pricing_data[x][1];
              pricing_data_amount[temp] = pricing_data[x][0];
              temp = temp+1;
            }
          }
          
        }
          

        //items data-------------------------

        items_data = json_data['items'];
        for (let x in items_data)
        {
          items_data_title[x] = items_data[x].title;
          items_data_images_count[x] = items_data[x]['images'].length;
          items_data_tags[x] = items_data[x]['tags'];
          // items_data_price[x] = (items_data[x].price.amount/items_data[x].price.divisor).toFixed(2);
          items_data_price[x] = items_data[x].price;
          items_data_links[x] =items_data[x].url;
          items_data_images[x] = items_data[x]['images'][0].url_75x75;
          items_data_days_to_ship[x] = items_data[x].days_to_ship;
          $("#sample_listing").append('<tr><td class = "mytd"><a href="'+items_data_links[x]+'" target="_blank">'+items_data_title[x]+'</a></td><td>'+'dummy'+'</td><td>'+items_data_days_to_ship[x]+'</td><td>'+items_data_images_count[x]+'</td><td class = "mytd">'+items_data_tags[x]+'</td><td>'+items_data_price[x]+'</td></tr>');
            
          $("#imgs").append('<a href="'+items_data_links[x]+'" target="_blank"><img style="padding: 12px;"  src="'+items_data_images[x]+'"></a>');
            
        }

        //Shipping prie dataaa

        shipping_price_data = json_data['shipping_prices'];
        shipping_price_data =  shipping_price_data.map(function (obj) {
            return [parseInt(obj[0]),obj[1]];
        });

        shipping_price_data = shipping_price_data.sort();
        temp = 0;
         for (let x in shipping_price_data)
        {
          if (shipping_price_data[x][1] != 1)
          {
            if (temp < 20)
            {
              shiping_price_data_item[temp] = shipping_price_data[x][1];
              shiping_price_amount[temp] = shipping_price_data[x][0];
              temp = temp+1;
            }
           }
          // if (x == 20)
          // {
          //   break;
          // }
        }
        temp = 0;
        shipping_price_data_1 = [];
        for (let x in shipping_price_data)
        {
           if (shipping_price_data[x][1] != 1)
          {
            shipping_price_data_1[temp] = shipping_price_data[x];
             temp = temp+1;
          }

        }
        // console.log(shiping_price_amount);  
        // shipping_day pries
        // , , , , , , 
        shipping_days_price = json_data['shipping_day_prices'];
        avg_days = shipping_days_price['average_days'];
        avg_price = shipping_days_price['average_price'];
        max_days = shipping_days_price['maximum_days'];
        max_price = shipping_days_price['maximum_price'];
        min_days = shipping_days_price['minimum_days'];
        min_price = shipping_days_price['minimum_price'];
        
        $("#min_price").append(min_price.toFixed(1));
        $("#avg_price").append(avg_price.toFixed(1));
        $("#max_price").append(max_price.toFixed(1));

        $("#max_days").append(max_days.toFixed(0));
        $("#avg_days").append(avg_days.toFixed(0));
        $("#min_days").append(min_days.toFixed(0));


        //long tail alternatives

        long_tail_alternative_data = json_data['long_tail_alternatives'];

        for (let x in long_tail_alternative_data)
        {
          $("#long_tail_alter").append('<tr><td>'+long_tail_alternative_data[x][0]+'</td><td>'+long_tail_alternative_data[x][1].views+'</td><td>'+long_tail_alternative_data[x][1].price.toFixed(2)+'</td><td>'+long_tail_alternative_data[x][1].photos+'</td></tr>');
                
        }

        //end

        //SHopper searh

        shopper_search_data = json_data['similar_shopper_searches'];

        for (let x in shopper_search_data)
        {
          if (shopper_search_data[x][1].long_tail = true)
          {
              img = "assets/img/icons/tick.png";
          }
          else
          {
              img = "assets/img/icons/cross.png";
          }

          $("#shopper_search").append('<tr><td>'+shopper_search_data[x][0]+'</td><td>'+'<img src='+img+' style="width: 20px; height: 20px;">' +'</td><td>'+shopper_search_data[x][1].views+'</td><td>'+shopper_search_data[x][1].price.toFixed(2)+'</td><td>'+shopper_search_data[x][1].photos+'</td></tr>');
                
        }

        
        //FIRST THREE TABS
        searches_all = json_data['searches'];
        $("#searches").append(searches_all);

        competition_all = json_data['competition'];
        $("#competition").append(competition_all);

        console.log(engagement_1);
        $("#engagement").append(engagement_1);

        avg_searches_s = json_data['avg_searches'];
        $("#avg_searches_s").append(avg_searches_s.toFixed(0));

        avg_price_s = json_data['average_price'];
        $("#avg_price_s").append(avg_price_s.toFixed(0));

        favorites_s = json_data['favourites'];
        $("#favorites_s").append(favorites_s);
        //end

              // $("#popular_tags").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]}).buttons().container().appendTo('#popular_tags .col-md-6:eq(0)');
              // $("#long_tail_alter").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]}).buttons().container().appendTo('#popular_tags .col-md-6:eq(0)');
              // $("#shopper_search").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]}).buttons().container().appendTo('#popular_tags .col-md-6:eq(0)');
              // $("#sample_listing").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']], "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]}).buttons().container().appendTo('#sample_listing .col-md-6:eq(0)');
              $("#popular_tags").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]});
              $("#long_tail_alter").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]});
              $("#shopper_search").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']],"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]});
              $("#sample_listing").DataTable({"Responsive": true, "lengthChange": false, "autoWidth": false,"order": [[1, 'desc']], "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]});
              
              $('#example2').DataTable({

                "paging": true,
                "lengthChange": false,
                "searching": false,
                // "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
              });
            


          var element = document.querySelectorAll(".mytd");

          for (i = 0; i < element.length; ++i)
          {
          element[i].addEventListener("click", function() {
            this.classList.toggle("mytd");
          })
          }




//searches pie chart
const searches_pie = document.querySelector('#searches_pie'),
     pie_options = {
          series: [44],
          chart: {
          // width: 250,
          type: 'donut',
        },
        plotOptions: {
          // pie: {
          //   startAngle: -90,
          //   endAngle: 270
          // }
        },
        dataLabels: {
          enabled: true
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        title: {
          text: ''
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        
        if (typeof searches_pie !== undefined && searches_pie !== null) {
          var chart = new ApexCharts(searches_pie, pie_options);
          chart.render();
        }

//sattered chart
const shipping_price_chartsS = document.querySelector('#shipping_price_chart'),
  shipping_price_chartsOptionsS = {
          series: [{
          name: "Listing",
          data: shipping_price_data
        }],
          chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 15,
          labels: {
            formatter: function(val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
        };

        if (typeof shipping_price_chartsS !== undefined && shipping_price_chartsS !== null) {
    const shipping_price_charts = new ApexCharts(shipping_price_chartsS, shipping_price_chartsOptionsS);
    shipping_price_charts.render();
  }
        // var chart = new ApexCharts(document.querySelector("#chart"), options);
        // chart.render();

   // shipping price_charts
  // --------------------------------------------------------------------
  // const shipping_price_chartsEl = document.querySelector('#shipping_price_chart'),
  //   shipping_price_chartsOptions = {
  //     series: [
  //       {
  //         name: 'Listings',
  //         data: shiping_price_data_item
  //       }
  //     ],
  //     chart: {
  //       height: 300,
  //       stacked: false,
  //       type: 'bar',
  //       toolbar: { show: false }
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: '44%',
  //         borderRadius: 3,
  //         startingShape: 'rounded',
  //         endingShape: 'rounded'
  //       }
  //     },
  //     colors: [config.colors.warning, config.colors.info],
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //       width: 6,
  //       lineCap: 'round',
  //       colors: [cardColor]
  //     },
  //     legend: {
  //       show: true,
  //       horizontalAlign: 'left',
  //       position: 'top',
  //       markers: {
  //         height: 8,
  //         width: 8,
  //         radius: 12,
  //         offsetX: -3
  //       },
  //       labels: {
  //         colors: axisColor
  //       },
  //       itemMargin: {
  //         horizontal: 10
  //       }
  //     },
  //     grid: {
  //       borderColor: borderColor,
  //       padding: {
  //         top: 0,
  //         bottom: -8,
  //         left: 20,
  //         right: 20
  //       }
  //     },
  //     xaxis: {
  //       name: '$',
  //       categories: shiping_price_amount,
  //       labels: {
  //         style: {
  //           fontSize: '13px',
  //           colors: axisColor
  //         }
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       axisBorder: {
  //         show: false
  //       },
  //        title: {
  //         text: 'Price(in $)',
  //         offsetX: 0,
  //         offsetY: -7,
  //         style: {
  //             color: '#808080',
  //             fontSize: '14px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             fontWeight: 600,
  //             cssClass: 'apexcharts-xaxis-title',
  //         }
  //       }
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           fontSize: '13px',
  //           colors: axisColor
  //         }
  //       },
  //       title: {
  //         text: 'Listings',
  //         offsetX: 0,
  //         offsetY: 0,
  //         style: {
  //             color: '#808080',
  //             fontSize: '14px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             fontWeight: 600,
  //             cssClass: 'apexcharts-xaxis-title',
  //         },
  //       }
  //     },
      
  //     states: {
  //       hover: {
  //         filter: {
  //           type: 'none'
  //         }
  //       },
  //       active: {
  //         filter: {
  //           type: 'none'
  //         }
  //       }
  //     }
  //   };
  // if (typeof shipping_price_chartsEl !== undefined && shipping_price_chartsEl !== null) {
  //   const shipping_price_charts = new ApexCharts(shipping_price_chartsEl, shipping_price_chartsOptions);
  //   shipping_price_charts.render();
  // }

//--------------------end-----------------------------------------
      

// price_charts
  // --------------------------------------------------------------------

    const price_chartsEl = document.querySelector('#price_charts'),
    price_chartsOptions = {
      series: [
        {
          name: 'Listings',
          data: pricing_data_item
        }
      ],
      chart: {
        height: 300,
        stacked: false,
        type: 'bar',
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '44%',
          borderRadius: 3,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.secondary, config.colors.info],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: true,
        horizontalAlign: 'left',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 20,
          right: 20
        }
      },
      xaxis: {
        categories: pricing_data_amount,
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
         title: {
          text: 'Price(in $)',
          offsetX: 0,
          offsetY: -7,
          style: {
              color: '#808080',
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        title: {
          text: 'Listings',
          offsetX: 0,
          offsetY: 0,
          style: {
              color: '#808080',
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
          },
        }
      },
      
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof price_chartsEl !== undefined && price_chartsEl !== null) {
    const price_charts = new ApexCharts(price_chartsEl, price_chartsOptions);
    price_charts.render();
  }


  // const price_chartsEl = document.querySelector('#price_charts'),
  //   price_chartsOptions = {
  //     series: [
  //       {
  //         name: '',
  //         data: pricing_data_item
  //       }
  //     ],
  //     chart: {
  //       height: 300,
  //       stacked: false,
  //       type: 'bar',
  //       toolbar: { show: false }
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: '44%',
  //         borderRadius: 3,
  //         startingShape: 'rounded',
  //         endingShape: 'rounded'
  //       }
  //     },
  //     colors: [config.colors.warning, config.colors.primary],
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       curve: 'smooth',
  //       width: 2,
  //       lineCap: 'round',
  //       colors: [cardColor]
  //     },
  //     dataLabels: {
  //   enabled: true,
  //   enabledOnSeries: [1]
  // },
  //     legend: {
  //       show: true,
  //       horizontalAlign: 'left',
  //       position: 'top',
  //       markers: {
  //         height: 8,
  //         width: 5,
  //         radius: 12,
  //         offsetX: -3
  //       },
  //       labels: {
  //         colors: axisColor
  //       },
  //       itemMargin: {
  //         horizontal: 10
  //       }
  //     },
  //     grid: {
  //       borderColor: borderColor,
  //       padding: {
  //         top: 0,
  //         bottom: -8,
  //         left: 20,
  //         right: 20
  //       }
  //     },
  //     xaxis: {

  //       data: pricing_data_amount,
  //       labels: {
  //         style: {
  //           fontSize: '13px',
  //           colors: axisColor,
            
  //         },
  //         type:'numeric'
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       axisBorder: {
  //         show: false
  //       },
  //        title: {
  //         text: 'Price(in $)',
  //         offsetX: 0,
  //         offsetY: -7,
  //         style: {
  //             color: '#808080',
  //             fontSize: '14px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             fontWeight: 600,
  //             cssClass: 'apexcharts-xaxis-title',
  //         },
        
  //     },
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           fontSize: '13px',
  //           colors: axisColor
  //         }
  //       },
  //       title: {
  //         text: 'Listings',
  //         offsetX: 0,
  //         offsetY: 0,
  //         style: {
  //             color: '#808080',
  //             fontSize: '14px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             fontWeight: 600,
  //             cssClass: 'apexcharts-xaxis-title',
  //         },
  //     },
  //     },
      
  //     states: {
  //       hover: {
  //         filter: {
  //           type: 'none'
  //         }
  //       },
  //       active: {
  //         filter: {
  //           type: 'none'
  //         }
  //       }
  //     }
  //   };
  // if (typeof price_chartsEl !== undefined && price_chartsEl !== null) {
  //   const price_charts = new ApexCharts(price_chartsEl, price_chartsOptions);
  //   price_charts.render();
  // }
  

  // Engagement Over Time Bar Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartOptions = {
      series: [
        {
          name: '',
          data: value_arr
        }
      ],
      chart: {
        height: 300,
        stacked: false,
        type: 'bar',
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '44%',
          borderRadius: 12,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.warning, config.colors.info],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: [cardColor]
      },
      legend: {
        show: true,
        horizontalAlign: 'left',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 20,
          right: 20
        }
      },
      xaxis: {
        categories: month_arr,
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
    totalRevenueChart.render();
  }

$("#spinner_loading").hide();
  $("#search_data").show();
  document.getElementById("search_btn").disabled = false;
// }
});


  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------
  const growthChartEl = document.querySelector('#growthChart'),
    growthChartOptions = {
      series: [78],
      labels: ['Growth'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '55%'
          },
          track: {
            background: cardColor,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: headingColor,
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Public Sans'
            },
            value: {
              offsetY: -25,
              color: headingColor,
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 5
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof growthChartEl !== undefined && growthChartEl !== null) {
    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
    growthChart.render();
  }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      chart: {
        height: 80,
        // width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Order Statistics Chart
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
      labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
      series: [85, 15, 50, 50],
      colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
      stroke: {
        width: 5,
        colors: cardColor
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.8125rem',
                color: axisColor,
                label: 'Weekly',
                formatter: function (w) {
                  return '38%';
                }
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }

  // Income Chart - Area chart
  // --------------------------------------------------------------------
  const incomeChartEl = document.querySelector('#incomeChart'),
    incomeChartConfig = {
      series: [
        {
          data: [24, 21, 30, 22, 42, 26, 35, 29]
        }
      ],
      chart: {
        height: 215,
        parentHeightOffset: 0,
        parentWidthOffset: 0,
        toolbar: {
          show: false
        },
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      legend: {
        show: false
      },
      markers: {
        size: 6,
        colors: 'transparent',
        strokeColors: 'transparent',
        strokeWidth: 4,
        discrete: [
          {
            fillColor: config.colors.white,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: config.colors.primary,
            strokeWidth: 2,
            size: 6,
            radius: 8
          }
        ],
        hover: {
          size: 7
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: shadeColor,
          shadeIntensity: 0.6,
          opacityFrom: 0.5,
          opacityTo: 0.25,
          stops: [0, 95, 100]
        }
      },
      grid: {
        borderColor: borderColor,
        strokeDashArray: 3,
        padding: {
          top: -20,
          bottom: -8,
          left: -10,
          right: 8
        }
      },
      xaxis: {
        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        },
        min: 10,
        max: 50,
        tickAmount: 4
      }
    };
  if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
    const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
    incomeChart.render();
  }

  // Expenses Mini Chart - Radial Chart
  // --------------------------------------------------------------------
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
    weeklyExpensesConfig = {
      series: [65],
      chart: {
        width: 60,
        height: 60,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          strokeWidth: '8',
          hollow: {
            margin: 2,
            size: '45%'
          },
          track: {
            strokeWidth: '50%',
            background: borderColor
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return '$' + parseInt(val);
              },
              offsetY: 5,
              color: '#697a8d',
              fontSize: '13px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors: config.colors.primary
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          top: -10,
          bottom: -15,
          left: -10,
          right: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
    const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
    weeklyExpenses.render();
  }
};
