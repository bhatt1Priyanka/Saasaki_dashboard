import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of your context's data
interface AppContextType {
  lineChartData: number[];
  setLineChartData: React.Dispatch<React.SetStateAction<number[]>>;
  barChartData: number[];
  setBarChartData: React.Dispatch<React.SetStateAction<number[]>>;
  tableData: string[][];
  setTableData: React.Dispatch<React.SetStateAction<string[][]>>;
}

// Create the context with an initial value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component that wraps your app and makes the context available globally
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lineChartData, setLineChartData] = useState<number[]>([
    65, 59, 80, 81, 56, 55,
  ]);
  const [barChartData, setBarChartData] = useState<number[]>([
    12, 19, 3, 5, 2, 3,
  ]);
  const [tableData, setTableData] = useState<string[][]>([
    ["Priyanka Bhatt", "23", "Web Developer"],
    ["Shiwani Soni", "25", "Wordpress Developer"],
    ["Tulsi Singh", "24", "Doctor"],
  ]);

  return (
    <AppContext.Provider
      value={{
        lineChartData,
        setLineChartData,
        barChartData,
        setBarChartData,
        tableData,
        setTableData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
