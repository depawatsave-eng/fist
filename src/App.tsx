import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function App() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [300, 450, 500, 700, 900, 500, 400, 900, 506, 400, 500, 200],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // แดง
          "rgba(54, 162, 235, 0.6)", // น้ำเงิน
          "rgba(255, 206, 86, 0.6)", // เหลือง
          "rgba(75, 192, 192, 0.6)", // เขียว
          "rgba(153, 102, 255, 0.6)", // ม่วง
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Website แสดงกราฟ</h1>
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <Bar data={data} />
      </div>
    </div>
  );
}
