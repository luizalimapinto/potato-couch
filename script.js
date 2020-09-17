//fetch data
fetch("https://spreadsheets.google.com/feeds/cells/1MMJzzShrpagE7OWDcyHWPO1bMSKmJOI2AhX3ks-POyg/1/public/full?alt=json")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {

        dataReceived(data);
    })

function dataReceived(series) {
    //loop through products
    series.forEach(showSerie)
}
//executed once for each serie
function showSerie(mySerie) {
    console.log(mySerie) 
    //finding the template
const temp = document.querrySelector("#seriesTemplate").content;
    //clone the template
    const myCopy = temp.cloneNode(true);

    //fill out the template
    
myCopy.querySelector(".data_name")






//append
const parentElem = document.querySelector("section#sci-fi");
parentElem.appendChild(myCopy)
}