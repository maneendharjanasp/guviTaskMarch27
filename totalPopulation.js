var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    console.log("1.Print the total population of countries using reduce function");
    var data = JSON.parse(this.response);
    var totalPopulation = data.reduce((acc, ele)=>{
        return acc+ele.population;
    }, 0);
    console.log("The Total population is "+totalPopulation);
    console.log("---------------------------------------------------------------------");
}