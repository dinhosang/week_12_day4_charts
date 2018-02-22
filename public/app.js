const app = function(){
  const pieContainer    = document.querySelector("#pie-chart");
  const columnContainer = document.querySelector('#column-chart');
  const chartDetails    = new ChartDetails(pieContainer, columnContainer);

  new PieChart(chartDetails.pie);
  new ColumnChart(chartDetails.column);
}


document.addEventListener('DOMContentLoaded', app);
