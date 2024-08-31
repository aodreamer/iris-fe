import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Buku",
        backgroundColor: "#535c6d",
        borderColor: "#92a4c6",
        borderWidth: 1,
        data: [100, 200, 150, 200, 100], // Data untuk bar pertama
        barThickness: 15,
        maxBarThickness: 20,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
      },
      {
        label: "Pemustaka",
        backgroundColor: "#6c7a8a",
        borderColor: "#a0b0c0",
        borderWidth: 1,
        data: [150, 250, 200, 100, 150], // Data untuk bar kedua
        barThickness: 15,
        maxBarThickness: 20,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
      },
      {
        label: "Perpustakaan",
        backgroundColor: "#8a9baf",
        borderColor: "#b0c0d0",
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
  };

  const dataPie = {
    labels: ["Data Putus Sekolah", "Data Mengulang Sekolah"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
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
      <div className="row-span-1 rounded-lg"></div>
      <div className="row-span-5 rounded-lg">
        <div className="grid grid-cols-3 gap-5">
          <div className="mx-auto rounded-md">
            <Bar data={data} options={options} className="mx-auto min-h-52 content-end" />
          </div>
          <div className="mx-auto rounded-md">
            <Pie data={dataPie} options={optionsPie} plugins={[ChartDataLabels]} />
          </div>
          <div className="mx-auto rounded-md">
            <Line data={dataLine} options={optionsLine} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
