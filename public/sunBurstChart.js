const SunBurstChart = function(countries){
  this.countries = countries;
  this.regions = [];
  this.subregions = {};
  this.countriesBySubregion = {}
  this.getRegions();
  this.getSubRegions();

  console.log(this.subregions);
}

SunBurstChart.prototype.getRegions = function(){
  this.countries.forEach(function(country){
    if(!this.regions.includes(country.region) && country.region !== ""){
      this.regions.push(country.region);
    }
  }.bind(this))
}

SunBurstChart.prototype.getSubRegions = function(){
  this.regions.forEach(function(region){
    this.findSubRegionsForRegion(region)
  }.bind(this))
}

SunBurstChart.prototype.findSubRegionsForRegion = function(region){
  this.subregions[region] = []
  this.countries.forEach(function(country){
    if(country.region === region && !this.subregions[region].includes(country.subregion) && country.subregion !== ""){
      this.subregions[region].push(country.subregion)
    }
  }.bind(this))
}
