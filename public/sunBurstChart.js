const SunBurstChart = function(countriesDetails){

  this.container  = countriesDetails.container
  this.countries  = countriesDetails.countries;

  this.regions    = countriesDetails.regions
  this.subregions = countriesDetails.subregions
  this.countriesBySubregion = countriesDetails.countriesBySubregion

  this.data = []
  this.populateData()

  this.details = { chart: {type: 'sunburst', renderTo: this.container},
                    title: {text: "World Population 2018"},
                    subtitle: {text: 'Source: <a href="https://restcountries.eu/" target="_blank">Rest Countries</a>'},
                    series: [{
                      allowDrillToNode: true,
                      data: this.data,
                      dataLabels: {
                        format: '{point.name}',
                        filter: {
                          property: 'innerArcLength',
                          operator: '>',
                          value: 16
                        }
                      },
                      levels: [{
                        level: 1,
                        levelIsConstant: false,
                        dataLabels: {
                            rotationMode: 'parallel',
                            filter: {
                                property: 'outerArcLength',
                                operator: '>',
                                value: 64
                            }
                        }
                      }, {
                        level: 2,
                        colorByPoint: true,
                        dataLabels: {
                            rotationMode: 'parallel'
                        }
                      },
                      {
                        level: 3,
                        colorVariation: {
                            key: 'brightness',
                            to: -0.5
                        }
                      }, {
                        level: 4,
                        colorVariation: {
                            key: 'brightness',
                            to: 0.5
                        }
                      }]
                    }]
                  }


  // Highcharts.getOptions().colors.splice(0, 0, 'transparent');
  new Highcharts.Chart(this.details)
}

SunBurstChart.prototype.populateData = function() {

  this.data.push({
    name:   'The World',
    id:     '0.0',
    parent: ''
  })

  this.populateRegions()
}

SunBurstChart.prototype.populateRegions = function() {
  let count = 0
  this.regions.forEach(function(region){
    this.data.push({
      name:   region,
      id:     `1.${count}`,
      parent: '0.0'
    })

    count++
  }.bind(this))

  this.populateSubregions()
}

SunBurstChart.prototype.populateSubregions = function() {
  let countRegion = 0
  let countSub    = 0
  this.regions.forEach(function(region){
    this.subregions[region].forEach(function(subregion){
      this.data.push({
        name:   subregion,
        id:     `2.${countSub}`,
        parent: `1.${countRegion}`
      })
      countSub++
    }.bind(this))

    countRegion++
  }.bind(this))

  this.populateCountries()
}

SunBurstChart.prototype.populateCountries = function() {
  let countSub      = 0
  let countCountry  = 0

  this.regions.forEach(function(region){
    this.subregions[region].forEach(function(subregion){
      this.countriesBySubregion[subregion].forEach(function(country){
        this.data.push({
          name:   country.name,
          id:     `3.${countCountry}`,
          parent: `2.${countSub}`,
          value:  country.population
        })
        countCountry++
      }.bind(this))
      countSub++
    }.bind(this))
  }.bind(this))

  console.log(this.data);
}
