//fetch data
fetch("https://docs.google.com/spreadsheets/d/1MMJzzShrpagE7OWDcyHWPO1bMSKmJOI2AhX3ks-POyg/edit#gid=0")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        dataReceived(data);
    })

function dataReceived(series) {
     console.log(series)
}

//loop through products

//finding the template

//clone the template

//fill out the template

//append


