var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function(){
    console.log("5.Print the following details name, capital, flag using forEach function");
    var data = JSON.parse(this.response);
    data.forEach((ele)=>{
        console.log("Country Name : "+ele.name);
        console.log("Country Capital : "+ele.capital);
        console.log("Country Flag : ");
        console.log('%c ', 'font-size:large; background-size: contain; background:url('+ele.flag+') no-repeat;');
    });
    console.log("---------------------------------------------------------------------");
}