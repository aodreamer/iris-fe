import React, { useState } from "react";

import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const [selectedBar, setSelectedBar] = useState(null);
  const [clickedData, setClickedData] = useState(null);

  const data = {
    labels: ["Kab. Bogor", "Kab. Sukabumi", "Kab. Cianjur", "Kab. Bandung", "Kab. Garut"],
    datasets: [
      {
        label: "Buku",
        backgroundColor: "#86eea1",
        borderColor: "#86eea1",
        borderWidth: 1,
        data: [1203, 443, 1309, 2612, 1363], // Data untuk bar pertama
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
        data: [27292, 51351, 16246, 16778, 38069], // Data untuk bar kedua
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
        data: [2, 2, 2, 2, 2], // Data untuk bar ketiga
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
        stacked: true, // Jika Anda ingin bar diletakkan di atas satu sama lain
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
        const index = element.index;
        const label = data.labels[index];
        const books = data.datasets[0].data[index];
        const readers = data.datasets[1].data[index];
        const libraries = data.datasets[2].data[index];

        setSelectedBar({
          category: label,
          books,
          readers,
          libraries,
        });
      } else {
        setSelectedBar(null);
      }
    },
  };

  const dataPie = {
    labels: ["Data Putus Sekolah", "Data Mengulang Sekolah", "Data Lulus Sekolah"],
    datasets: [
      {
        label: "#",
        data: [16352, 6233, 4465676],
        backgroundColor: ["#9650ff", "#6e9aff", "#1ddd92"],
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
    labels: ["Kab. Bogor", "Kab. Sukabumi", "Kab. Cianjur", "Kab. Bandung", "Kab. Garut"],
    datasets: [
      {
        label: "Indeks Literasi",
        data: [23.8, 23.5, 20.4, 18.9, 19.3],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
      {
        label: "Indeks Prestasi",
        data: [99.1, 99.7, 99.7, 99.5, 99.3],
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
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const datasetIndex = elements[0].datasetIndex;
        const index = elements[0].index;
        const label = dataLine.labels[index];
        const value = dataLine.datasets[datasetIndex].data[index];
        const datasetLabel = dataLine.datasets[datasetIndex].label;

        setClickedData({ label, datasetLabel, value });
      }
    },
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center">KORELASI ANTARA PENDIDIKAN SEKOLAH DASAR DAN LITERASI DIGITAL</div>
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
                  <span className="font-semibold">Jumlah Buku:</span> {selectedBar.books}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Jumlah Pemustaka:</span> {selectedBar.readers}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Jumlah Perpustakaan:</span> {selectedBar.libraries}
                </p>
              </div>
            )}
          </div>
          <div className="rounded-md shadow-md  bg-gray-200 p-4">
            <Pie data={dataPie} options={optionsPie} plugins={[ChartDataLabels]} />
          </div>
          <div className="rounded-md shadow-md  bg-gray-200 p-4">
            <Line data={dataLine} options={optionsLine} />
            {clickedData && (
              <div className="mt-4 p-2 bg-gray-100 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Rincian Data</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Wilayah:</span> {clickedData.label}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Jenis Data:</span> {clickedData.datasetLabel}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Nilai:</span> {clickedData.value}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
