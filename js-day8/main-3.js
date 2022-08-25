const main = document.querySelector("main");// element
const main1 = document.getElementById("m-news");
const main2 = document.getElementsByTagName("main");
const main3 = document.getElementsByName("main");
const main4 = document.getElementsByClassName("mc-news");
const main5 = document.querySelector(".mc-news");// class
const main6 = document.querySelector("#m-news");// id

main.addEventListener('click', (e) => {
  console.log(`${e.target}, ${e.currentTarget}`);
});
main1.addEventListener('click', (e) => {
  console.log(`${e.target}, ${e.currentTarget}`);
});
main5.addEventListener('click', (e) => {
  console.log(`maint5 - ${e.target}, ${e.currentTarget}`);
});
main6.addEventListener('click', (e) => {
  console.log(`maint6 - ${e.target}, ${e.currentTarget}`);
});

$("#m-news > span").on("click", function(){
  $(this).css("background", "yellowgreen");
})

// main2.addEventListener('click', (e) => {
//   console.log(`${e.target}, ${e.currentTarget}`);
// });

/* main3.addEventListener('click', (e) => {
  console.log(`${e.target}, ${e.currentTarget}`);
}); */

// main4.addEventListener('click', (e) => {
//   console.log(`${e.target}, ${e.currentTarget}`);
// });