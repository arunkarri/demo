let request = new XMLHttpRequest();


request.open("GET", "http://restcountries.eu/rest/v2/all", true);
request.send();

request.onload = function(){
    let countries = JSON.parse(this.response);

    for(let i in countries){
        console.log(countries[i].flag);
    }
}