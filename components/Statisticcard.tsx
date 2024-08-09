import React from "react";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
      {icon && <div className="text-3xl text-blue-500 mr-4">{icon}</div>}
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
