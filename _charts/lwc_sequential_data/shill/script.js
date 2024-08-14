// script.js
fetch('./assets/pca_results.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    //console.log(data); 
    
    const chart = LightweightCharts.createChart(document.getElementById("chart"), { width: 800, height: 420, timeScale: {timeVisible: true, secondsVisible: true} });
	const lineSeries = chart.addLineSeries({color: 'blue', lineWidth: 2});
	lineSeries.setData(data, "PC1", "sample_index");
	
	
	const lineSeries2 = chart.addLineSeries({color: 'green', lineWidth: 2});
	lineSeries2.setData(data, "PC2", "sample_index");
	
	const lineSeries3 = chart.addLineSeries({color: 'black', lineWidth: 2});
	lineSeries3.setData(data, "PC3", "sample_index");
	
	const lineSeries4 = chart.addLineSeries({color: 'red', lineWidth: 2});
	lineSeries4.setData(data, "PC4", "sample_index");
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
  
