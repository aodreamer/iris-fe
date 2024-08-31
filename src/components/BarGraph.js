import React, { useState } from "react";

import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const [selectedBar, setSelectedBar] = useState(null);
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Buku",
        backgroundColor: "#86eea1",
        borderColor: "#86eea1",
        borderWidth: 1,
        data: [100, 200, 150, 200, 100], // Data untuk bar pertama
        barThickness: 15,
        maxBarThickness: 20,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
      },
      {
        label: "Pemustaka",
        backgroundColor: "#507484",
        borderColor: "#507484",
        borderWidth: 1,
        data: [150, 250, 200, 100, 150], // Data untuk bar kedua
        barThickness: 15,
        maxBarThickness: 20,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
      },
      {
        label: "Perpustakaan",
        backgroundColor: "#8fbb99",
        borderColor: "#8fbb99",
        borderWidth: 1,
        data: [200, 150, 250, 300, 200], // Data untuk bar ketiga
        barThickness: 15,
        maxBarThickness: 20,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
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
        stacked: false, // Jika Anda ingin bar diletakkan di atas satu sama lain
        categoryPercentage: 0.9, // Mengatur lebar kategori
        barPercentage: 0.9, // Mengatur lebar bar dalam kategori
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
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const element = elements[0];
        const datasetIndex = element.datasetIndex;
        const index = element.index;
        const datasetLabel = data.datasets[datasetIndex].label;
        const value = data.datasets[datasetIndex].data[index];
        const label = data.labels[index];

        setSelectedBar({
          category: label,
          dataset: datasetLabel,
          value: value,
        });
      } else {
        setSelectedBar(null);
      }
    },
  };

  const dataPie = {
    labels: ["Data Putus Sekolah", "Data Mengulang Sekolah"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["#9650ff", "#6e9aff"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const optionsPie = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, cur) => acc + cur, 0);
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
        color: "#000", // Warna teks
        font: {
          weight: "bold",
        },
      },
    },
  };

  const dataLine = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Rate Literasi",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Siswa Putus/Mengulang SD",
        data: [30, 28, 40, 45, 26],
        fill: false,
        borderColor: "rgba(200,75,192,1)",
        tension: 0.1,
      },
    ],
  };

  const optionsLine = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-iris-dark-grey bg-iris-grey content-center">KORELASI ANTARA PENDIDIKAN SEKOLAH DASAR DAN LITERASI DIGITAL</div>
      <div className="row-span-6 pt-2 rounded-lg">
        <div className="grid grid-cols-3 gap-6 px-4 h-full">
          <div className="rounded-md shadow-md  bg-gray-200 p-4">
            <Bar data={data} options={options} />
            {selectedBar && (
              <div className="mt-4 p-2 bg-gray-100 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Rincian Data</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Wilayah:</span> {selectedBar.category}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Jenis Data:</span> {selectedBar.dataset}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Nilai:</span> {selectedBar.value}
                </p>
              </div>
            )}
          </div>
          <div className="rounded-md shadow-md  bg-gray-200 p-4">
            <Pie data={dataPie} options={optionsPie} plugins={[ChartDataLabels]} />
          </div>
          <div className="rounded-md shadow-md  bg-gray-200 p-4">
            <Line data={dataLine} options={optionsLine} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
