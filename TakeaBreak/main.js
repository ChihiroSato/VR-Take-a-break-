const element = document.querySelector("#pnnext span:nth-child(2)");
var items = ['https://www.youtube.com/results?search_query=%E3%81%AB%E3%81%98%E3%81%95%E3%82%93%E3%81%98',
 'https://www.youtube.com/results?search_query=%E7%84%9A%E3%81%8D%E7%81%AB',
 'https://www.youtube.com/channel/UCZ9DY_FlqUYh45R0uSmOIgA',

 ];
var random = Math.floor( Math.random() * items.length );
element.style.setProperty("transform", "scale(16)");
element.style.setProperty("transform-origin", "left bottom");
target = document.getElementById("hdtb-msb-vis");
target.innerHTML = "こんにちは";
setTimeout(function(){
    alert('研究のしすぎです。\n休憩しましょう');
    window.location.href = items[random]
    },
    3*1000);
/*var searchURL;
var id = setInterval(function(){
        var searchURL=location.href;
        function(){
            console.log(searchURL);
          }
        }, 10000);
*/

   
