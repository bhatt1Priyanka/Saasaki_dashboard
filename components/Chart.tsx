import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  type: "line" | "bar";
  data: any;
  options?: any;
}

const Chart: React.FC<ChartProps> = ({ type, data, options }) => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow-md">
      {type === "line" ? (
        <Line data={data} options={options} />
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

export default Chart;
