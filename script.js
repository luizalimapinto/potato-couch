//fetch data
getData ()

function getData() {
	fetch("movies-data.json")
	.then(response => response.json())
	.then(data => dataReceived(data));
}

function dataReceived(series) {
    //loop through products
    series.forEach(showSerie)
}
//executed once for each serie
function showSerie(mySerie) {
    console.log(mySerie) 
    //finding the template
const temp = document.querySelector("#seriesTemplate").content;
    //clone the template
    const myCopy = temp.cloneNode(true);

    //fill out the template
 mySerie   
myCopy.querySelector(".data_name").textContet = mySerie.name 


 



//append
const parentElem = document.querySelector("section#sci-fi");
parentElem.appendChild(myCopy)
}