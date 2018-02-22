const app = function(){

  const pieContainer    = document.querySelector("#pie-chart");
  const columnContainer = document.querySelector('#column-chart');
  const chartDetails    = new ChartDetails(pieContainer, columnContainer);

  new PieChart(chartDetails.pie);
  new ColumnChart(chartDetails.column);

  makeRequest("https://restcountries.eu/rest/v2/all");


}

makeRequest = function(url){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', convertJSONToCountries);
  request.send();
  console.log(request);

}

convertJSONToCountries = function(){
  if(this.status !== 200) return;
  const countries = JSON.parse(this.responseText);
  new SunBurstChart(countries);

}

document.addEventListener('DOMContentLoaded', app);
