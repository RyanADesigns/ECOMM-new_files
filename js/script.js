function capture(){
 console.log(document.filterform.filter.value);
 event.preventDefault();
}

var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  },
  {
    "name": "Grey Shredd",
    "price": 29.99,
    "description": "The Who What Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "grey_shredd.jpg"
  }
]

for (var i=0; i<products.length; i++) {
  console.log(products[i].name);
  console.log(products[i].description);
  console.log(products[i].price);
}

function AddPrices(cartProducts) {
  var total = 0;
  
	for(var i=0; i<cartProducts.length; i++) {
      total = total + cartProducts[i].price;
	}
 
  /*print total as html to site next to cart icon while user is shopping*/
  console.log(total);
}

function sort(){
  console.log("It WOrks");
  console.log(document.filterform.filter.value);
  event.preventDefault();
}
var container = document.getElementsByClassName("item-container")


/*
future capabilitities to generate product description on pageload 
*/
/*function product_doc(){
for (var i = 0; i<products.length; i++) {
  
  var description = document.createElement("p");
  
  description.setAttribute("description", products[i][description]);
  
  item-container.appendChild(container);
  
  console.log('YOOOOO');
}
  return product_doc;
  }*/


/*Toggle function Add or Remove*/
var cart = [];

function giveOrTakeItem(name){
  
  var index = cart.indexOf(name);
  
if (index >= 0) {
  cart.splice(index, 1);
} else {
  cart.push(name);
}
  console.log(cart); 
}

/*trying to find out how to get splice or slice to work*/
/*sorting function based on price*/
function topSort(){ 
  var pSort = products.sort(function (a, b) {
  
  return a.price - b.price;
  });
  console.log(pSort);
}
  console.log(topSort);


/*trying to reverse order the array*/
function sortCopy(arr) { 
  return arr.slice(0).sort();
}

/*took initial products array objects and copied them with products.slice(0)so I could manipulate the order of the sorted array with out using the global products object.*/
  var pRevSort = products.slice(0).sort(function (a, b) {  

return b.price - a.price;
    
});

console.log(pRevSort);



