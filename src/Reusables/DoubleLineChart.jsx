import Chart from "react-apexcharts";

function DoubleLineChart({ data = [], data2 = [] }) {
  const daysOfWeek = [
    "March 1",
    "March 2",
    "March 3",
    "March 4",
    "March 5",
    "March 6",
    "March 7"
  ];

  const series = [
    {
      name: "Series 1",
      data: data.length
        ? data.map((item) => item.amount ?? 0)
        : [100, 300, 305, 30, 205, 35, 40]
    },
    {
      name: "Series 2",
      data: data2.length
        ? data2.map((item) => item.amount ?? 0)
        : [59, 405, 10, 290, 195, 257, 30]
    }
  ];

  const options = {
    colors: ["#4082de", "#0da32d"],
    chart: {
      type: "area",
      toolbar: { show: false },
      offsetX: 5
    },
    grid: { show: true },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
      dashArray: 0 // dashed lines
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.4
      }
    },
    xaxis: {
      categories: daysOfWeek,
      labels: {
        style: { fontSize: "13px" }
      },
      tickPlacement: "between",
      rangePadding: "padding",
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tickAmount: 100,
      forceNiceScale: true,
      min: undefined,
      max: undefined
    },
    tooltip: {
      x: {
        formatter: (value) => `Day: ${value}`
      }
    },
    legend: { show: false },
    markers: {
      size: 0 // 👈 removes dots
    }
  };

  return <Chart options={options} series={series} type="area" height={190} />;
}

export default DoubleLineChart;
