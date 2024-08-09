import React from "react";
import dynamic from "next/dynamic";
import StatisticsCard from "../components/Statisticcard";
import { FaChartLine, FaChartBar, FaUsers } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

// Dynamically import Chart and Table components
const Chart = dynamic(() => import("../components/Chart"), { ssr: false });
const Table = dynamic(() => import("../components/Table"), { ssr: false });

const Dashboard: React.FC = () => {
  const { lineChartData, barChartData, tableData } = useAppContext();

  const lineChartOptions = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: lineChartData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const barChartOptions = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: barChartData,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const tableHeaders = ["Name", "Age", "Role"];

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatisticsCard
          title="Total Sales"
          value="$10,000"
          icon={<FaChartLine />}
        />
        <StatisticsCard title="New Users" value="1,200" icon={<FaUsers />} />
        <StatisticsCard
          title="Monthly Revenue"
          value="$25,000"
          icon={<FaChartBar />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart type="line" data={lineChartOptions} />
        <Chart type="bar" data={barChartOptions} />
      </div>

      {/* Table */}
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default Dashboard;
