import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        backgroundColor: "#535c6d",
        borderColor: "#92a4c6",
        borderWidth: 1,
        data: [100, 300, 100, 200, 300, 100, 150],
        barThickness: 20,
        maxBarThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          color: "#1e40af",
        },
        ticks: {
          color: "#535c6d",
        },
      },
    },
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-iris-dark-grey bg-iris-grey content-center">KORELASI ANTARA PENDIDIKAN SEKOLAH DASAR DAN LITERASI DIGITAL</div>
      <div className="row-span-1 rounded-lg"></div>
      <div className="row-span-5 rounded-lg">
        <div className="mx-auto min-w-full">
          <Bar data={data} options={options} className="mx-auto min-h-52 content-end" />
        </div>
      </div>
      <div className="row-span-1 rounded-lg">
        <div className="flex justify-between text-iris-dark-grey">
          <div>
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-sm bg-green-400">+22% than last week</p>
          </div>
          <div className="flex space-x-4">
            <div>
              <p className="text-xs">Users</p>
              <p className="text-lg font-bold">32,984</p>
            </div>
            <div>
              <p className="text-xs">Clicks</p>
              <p className="text-lg font-bold">2.42m</p>
            </div>
            <div>
              <p className="text-xs">Sales</p>
              <p className="text-lg font-bold">2,400$</p>
            </div>
            <div>
              <p className="text-xs">Items</p>
              <p className="text-lg font-bold">320</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
