//Sending to favorites tab
const heartIconContainer = document.querySelectorAll(".card-container");

heartIconContainer.forEach((item) => {
  item.addEventListener('click', () => {
    const isHearted = item.children[0].children[0].classList[2] === 'hearted';  
    const heartParams = isHearted ? ['hearts', 'hearted'] : ['hearted', 'hearts'];
    
    item.children[0].children[0].classList.add(heartParams[0]);
    item.children[0].children[0].classList.remove(heartParams[1]);
  })
})

//
// function childFunction2(){
// //  -   The heart that is clicked, get the data and send to the favorites tab.
// //  -   if the data has isHearted = false, change to true.
// //  -   if the data has isHearted = true, change to false.
//     console.log('child two is working.')
// }
