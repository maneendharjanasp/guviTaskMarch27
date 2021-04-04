var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    console.log("2.Print the country which use US Dollars as currency");
    var data = JSON.parse(this.response);
    var countries = data.filter((ele)=>{
        if(ele.currencies && ele.currencies[0]){
            return ele.currencies[0].code === "USD";
        }
        return false;
    }).map((ele)=>{
        return ele.name;
    });
    console.log("The Countries using US Dollars are "+countries);
    console.log("---------------------------------------------------------------------");
}