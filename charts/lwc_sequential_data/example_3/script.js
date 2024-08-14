const chart = LightweightCharts.createChart(document.body, { width: 1000, height: 500, timeScale: {timeVisible: true, secondsVisible: true} });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { id: -50,  pca1: 80.01 },
    { id: -45, pca1: 96.63 },
    { id: -40, pca1: 76.64 },
    { id: -35, pca1: 81.89 },
    { id: -30, pca1: 74.43 },
    { id: -25, pca1: 80.01 },
    { id: -20, pca1: 96.63 },
    { id: -10, pca1: 76.64 },
    { id: -5, pca1: 81.89 },
    { id: 0, pca1: 82.23 },
    { id: 5, pca1: 78.9 },
    { id: 10, pca1: 45.26 },
    { id: 15, pca1: 31.25 },
    { id: 20, pca1: 28.3 },
], "pca1", "id"); //handles negative indexes
