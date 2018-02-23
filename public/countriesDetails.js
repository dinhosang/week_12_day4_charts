const CountriesDetails = function(countries, container){
  this.countries  = countries;
  this.regions    = [];
  this.subregions = {};
  this.countriesBySubregion = {}
  this.container  = container

  this.getRegions();
  this.getSubRegions();
  this.getCountriesBySubregion();

  console.log(this);
}
// all below need refactoring to prevent so much looping of this.countries
// and binding
CountriesDetails.prototype.getRegions = function(){
  this.countries.forEach(function(country){
    if(!this.regions.includes(country.region) && country.region !== ""){
      this.regions.push(country.region);
    }
  }.bind(this))
}

CountriesDetails.prototype.getSubRegions = function(){
  this.regions.forEach(function(region){
    this.findSubRegionsForRegion(region)
  }.bind(this))
}

CountriesDetails.prototype.findSubRegionsForRegion = function(region){
  this.subregions[region] = []
  this.countries.forEach(function(country){
    if(country.region === region && !this.subregions[region].includes(country.subregion) && country.subregion !== ""){
      this.subregions[region].push(country.subregion)
    }
  }.bind(this))
}

CountriesDetails.prototype.getCountriesBySubregion = function() {
  this.regions.forEach(function(region){
    this.subregions[region].forEach(function(subregion){
      this.findCountry(subregion)
    }.bind(this))
  }.bind(this))
}

CountriesDetails.prototype.findCountry = function(subregion) {
  this.countriesBySubregion[subregion] = []
  this.countries.forEach(function(country){
    if(country.subregion === subregion){
      this.countriesBySubregion[subregion].push(country)
    }
  }.bind(this))
}
