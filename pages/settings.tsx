import React from "react";
import { useAppContext } from "../context/AppContext";

const Settings: React.FC = () => {
  const {
    lineChartData,
    setLineChartData,
    barChartData,
    setBarChartData,
    tableData,
    setTableData,
  } = useAppContext();

  const handleLineChartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newData = [...lineChartData];
    newData[index] = parseInt(event.target.value, 10) || 0;
    setLineChartData(newData);
  };

  const handleBarChartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newData = [...barChartData];
    newData[index] = parseInt(event.target.value, 10) || 0;
    setBarChartData(newData);
  };

  const handleTableChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = event.target.value;
    setTableData(newData);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">Dashboard Settings</h2>

      {/* Line Chart Settings */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Line Chart Data</h3>
        {lineChartData.map((value, index) => (
          <div key={index} className="mb-2">
            <label className="mr-4">Month {index + 1}:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => handleLineChartChange(e, index)}
              className="border p-1 rounded"
            />
          </div>
        ))}
      </div>

      {/* Bar Chart Settings */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Bar Chart Data</h3>
        {barChartData.map((value, index) => (
          <div key={index} className="mb-2">
            <label className="mr-4">Category {index + 1}:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => handleBarChartChange(e, index)}
              className="border p-1 rounded"
            />
          </div>
        ))}
      </div>

      {/* Table Data Settings */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Table Data</h3>
        {tableData.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-2 flex flex-wrap gap-2">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={cell}
                onChange={(e) => handleTableChange(e, rowIndex, colIndex)}
                className="border p-1 rounded"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
