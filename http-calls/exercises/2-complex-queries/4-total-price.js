/**
 * Fill in the blanks to create a script 
 * that prints the total cost if someone would buy one of every item 
 * (ignoring whether it is in stock or not and not applying any discount)
 */

 import "./qs.js";
 async function ex4() {
   const query = qs.stringify(
   {
       filieds: ['price']
   }, 
   {
     encodeValuesOnly: true,
   });
   console.log("The query string", query);
 
   // call the matching endpoint and include the querystring after the ?
   const baseUrl = "http://localhost:1337/api/products";
   const response = await fetch(`${baseUrl}?${query}`);
   const result = await response.json();
   console.log(result.data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.attributes.price,
    0
  ));
 }
 ex4();