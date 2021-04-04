var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    console.log("3.Get all the countries with population of less than 2 lacs using Filter function");
    var data = JSON.parse(this.response);
    var countries = data.filter((ele)=>{
       return ele.population < 200000;
    }).map((ele)=>{
        return ele.name;
    });
    console.log("The Countries with less than 2Lakh population are "+countries);
    console.log("---------------------------------------------------------------------");
}