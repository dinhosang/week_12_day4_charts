const ChartDetails = function(pieContainer, columnContainer) {

  this.pie = {  chart: {
                    type: 'pie',
                    renderTo: pieContainer
                    },
            title: {
                    text: "Pokemon types I've caught"
                    },
            series: [{
                      name: "Type of Pokemon",
                      data: [
                              {
                                name: "Fire",
                                y: 50,
                                color: "#ffac33"
                              },
                              {
                                name: "Water",
                                y: 50,
                                color: "#73b7ff"
                              },
                              {
                                name: "Rock",
                                y: 50,
                                color: "grey"
                              },
                              {
                                name: "Grass",
                                y: 25,
                                color: "#00ba2f",
                                sliced: true
                              },
                              {
                                name: "Electric",
                                y: 25,
                                color: "yellow"}
                            ]
                  }]
                },

  this.column = {
    chart: {
      type: 'column',
      renderTo: columnContainer
    },
    title: {
      text: "Our Favourite Programming Languages"
    },
    series: [{
      name: "Cohort 7",
      data: [8, 12, 3, 1]
    },
    {
      name: "Cohort 18",
      data: [7, 11, 1, 1]
    }],
    xAxis: {
      categories: ["Javascript", "Java", "Ruby", "Other"]
    }
  }
}
