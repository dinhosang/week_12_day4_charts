const ColumnChart = function(){
  const container = document.querySelector("#column-chart");
  const columnDetails = {
    chart: {
      type: 'column',
      renderTo: container
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
  const chart = new Highcharts.Chart(columnDetails);
}
