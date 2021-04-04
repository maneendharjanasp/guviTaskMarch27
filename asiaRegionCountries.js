var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    console.log("4.Get all the countries from Asia continent /region using Filter function");
    var data = JSON.parse(this.response);
    var countries = data.filter((ele)=>{
       return ele.region === "Asia";
    }).map((ele)=>{
        return ele.name;
    });
    console.log("The Countries from Asia continent /region are "+countries);
    console.log("---------------------------------------------------------------------");
}