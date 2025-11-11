import React from "react";
import Chart from "react-apexcharts";

function BarChart({ data }) {
  const series = [
    {
      name: "Transactions",
      data: [40, 90, 390, 450, 59, 60, 33]
    }
  ];

  const options = {
    colors: ["#F6F8FA"], // default bar color
    chart: {
      height: 290,
      type: "bar",
      toolbar: { show: false }
    },
    grid: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        // columnWidth: "45%",
        // borderRadius: 8, // rounded corners
        borderRadiusApplication: "end", // only round top (for vertical bars)
        distributed: false // all bars same color
        // colors: {
        //   ranges: [],
        //   backgroundBarColors: []
        // }
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      show: false
    },
    xaxis: {
      categories: [
        "March 1",
        "March 2",
        "March 3",
        "March 4",
        "March 5",
        "March 6",
        "March 7"
      ],
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 500,
      labels: { show: true }
    },
    fill: {
      colors: ["#aef16e"],
      opacity: 1
    },
    // states: {
    //   normal: { filter: { type: "none" } },
    //   hover: {
    //     filter: { type: "none" },
    //     color: "#36394A" // ✅ hover color
    //   },
    //   active: {
    //     filter: { type: "none" },
    //     color: "#36394A"
    //   }
    // },
    tooltip: {
      enabled: true,
      theme: "light",
      style: {
        fontSize: "13px",
        color: "#000000"
      }
    },
    legend: { show: false }
  };

  return <Chart options={options} series={series} type="bar" height={190} />;
}

export default BarChart;
