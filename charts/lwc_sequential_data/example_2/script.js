const chart = LightweightCharts.createChart(document.body, { width: 1000, height: 500, timeScale: {timeVisible: true, secondsVisible: true} });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { pca1: 5 },
    { pca1: 30 },
    { pca1: 35 },
    { pca1: 36.2 },
    { pca1: 20.45 },
    { pca1: 41 },
    { pca1: 63 },
    { pca1: 76.64 },
    { pca1: 55.8 },
    { pca1: 82.23 },
], "pca1"); //no xAxisCol defined, will plot 1,2,3,... on x axis as indexes
