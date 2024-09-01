import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarGraph = () => {
  const data = {
    labels: ["Happiness", "Love", "Pride", "Sadness", "Anger", "Shame", "Surprise", "Worry", "Contentment"],
    datasets: [
      {
        label: "Emotion Scores",
        data: [1, 0.8, 0.7, 0.5, 0.6, 0.4, 0.3, 0.7, 0.9],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#4f46e5",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4f46e5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#1e40af",
        },
        grid: {
          color: "#1e40af",
        },
        ticks: {
          color: "#ffffff",
          backdropColor: "transparent",
        },
        pointLabels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center">SENTIMENT PROPORTION & PERCEPTION RADAR</div>
      <div className="row-span-7 rounded-lg p-2">
        <div className="mx-auto min-w-full">
          <Radar data={data} options={options} className="mx-auto min-h-40 content-end" />
        </div>
      </div>
    </>
  );
};

export default RadarGraph;
