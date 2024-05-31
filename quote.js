function generate()
{
let quote=document.getElementById("quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");

console.log(quote.innerHTML);
console.log(author.innerHTML);
console.log(btn.innerHTML);

fetch('https://api.quotable.io/random', 
   )
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.content);
    console.log(data.author);
    quote.innerText=data.content;
    author.innerText= data.author;
      console.log('Form data submitted successfully:', data);
  })
  .catch(error => {
      console.log('Error submitting form data:', error);
  });
}


// async function generate()
// {
// let quote=document.getElementById("quote");
// let author=document.getElementById("author");
// let btn=document.getElementById("btn");

// console.log(quote.innerHTML);
// console.log(author.innerHTML);
// console.log(btn.innerHTML);

// try{

//     const data= await fetch('https://api.quotable.io/random')
//     const data2=await data.json();
//     console.log(data2.content);
//     console.log(data2.author);
//     quote.innerText=data2.content;
//     author.innerText= data2.author;
//       console.log('Form data submitted successfully:', data2);
// }

// catch (err) {
//     console.log(err.message);
//   }
// }