const PieChart = function(){
  const container = document.querySelector('#pie-chart');

  const chartDetails = {
    chart: {
      type: 'pie',
      renderTo: container
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
        color: "yellow"
    }]
    }]
  }

  const chart     = new Highcharts.Chart(chartDetails)
}
