(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

//Variables
var theImages = document.querySelectorAll('.data-ref');
const httpRequest = new XMLHttpRequest();

function changeCarData(){
  const url = './includes/functions.php?carModel=' + this.id;

  fetch(url)
  .then((resp) => resp.json())
  .then((data) => { processRequest(data); })
  .catch(function(error) {
      console.log(error);
  });
  //set up the AJAX call--> handle errors first
// if (!httpRequest){
//   alert('giving up, your browser sucks');
//   return false;
// }
//
// httpRequest.onreadystatechange = processRequest;
// httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
// httpRequest.send();
}

// function processRequest() {
//   let reqIndicator = document.querySelector('.request-state');
//   reqIndicator.textContent = httpRequest.readyState;
// // debugger;
//
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//     if (httpRequest.status === 200) { // 200 means everything is awesome
//       // debugger;
//       let data = JSON.parse(httpRequest.responseText);
//
//       processCarData(data);
//     } else {
//       alert('There was a problem with the request.');
//     }
//   }
// }

//Functions
function processCarData(data){
  const {modelName, pricing, modelDetails} = data;
var heading = document.querySelector('.modelName').textContent = modelName;
var price = document.querySelector('.priceInfo').innerHTML = pricing;
var desc = document.querySelector('.modelDetails').textContent = modelDetails;
  // appliedClass;

  // let objectIndex = carData[this.id];
  //
  // heading.firstChild.nodeValue = objectIndex.headline;
	// price.firstChild.nodeValue = objectIndex.price;
  // desc.firstChild.nodeValue = objectIndex.desc;
  theImages.forEach(function(element, index){
    element.classList.add('nonActive');
  })

  this.classList.remove('nonActive');
  }

  //Listners
  theImages.forEach(function(element, index){
  element.addEventListener('click', changeCarData, false)
})

})();
