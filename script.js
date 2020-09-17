//fetch data
getData()

function getData() {
	fetch("database.json")
		.then(response => response.json())
		.then(data => dataReceived(data));
}

function dataReceived(series) {
	//loop through products
	series.forEach(showSerie)
}

function categoriesReceived(cats) {
	createSections(cats);
	fetchSeries();
}

function createSections(categories) {
	categories.forEach(category => {
		const section = document.createElement("section");
		const h2 = document.createElement("h2");
		h2.textContent = category;
		section.appendChild(h2);
		document.querySelector(".seriesList").appendChild(section);
	})
}
//executed once for each serie
function showSerie(mySerie) {
	console.log(mySerie)
	//finding the template
	const temp = document.querySelector("#seriesTemplate").content;
	//clone the template
	const myCopy = temp.cloneNode(true);

	//fill out the template

	myCopy.querySelector(".data_name").textContent = mySerie.name;
	myCopy.querySelector(".data_description").textContent = mySerie.description;

	//setup classes for filtering
	//1. find the elem
	const article = myCopy.querySelector("article");
	console.log("article");

	//2. add classes
	

	//append
	const parentElem = document.querySelector("section#sci-fi");
	parentElem.appendChild(myCopy)
}
