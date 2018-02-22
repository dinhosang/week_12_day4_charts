const SunBurstChart = function(countries){
  this.countries = countries;
  this.regions = [];
  this.getRegions();

}

SunBurstChart.prototype.getRegions = function(){
  this.countries.forEach(function(country){
    if(!this.regions.includes(country.region) && country.region !== ""){
      this.regions.push(country.region);
    }
      
  })
}
