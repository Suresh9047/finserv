import { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const InsuranceChartSection = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Gross Written Premium", "Count of Policies Issued", "Count of Claims Settled"],
        datasets: [
          {
            data: [80, 18, 2],
            backgroundColor: ["#f38f3b", "#0283BB", "#d64727"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4 text-center">
      <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-6">Why choose ICICI Lombard</h2>
      <p className="text-gray-600 mt-2">
        ICICI Lombard is one of the Leading General Insurance Companies in the Private Sector. Financial Highlights FY 2020
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        {/* Chart */}
        <div className="w-64 h-64 relative justify-center items-center">
          <canvas ref={chartRef} className="w-full h-full" />
        </div>

        {/* Legend */}
        <div className="mt-6 md:mt-0 md:ml-12 text-left space-y-4">
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2" style={{ backgroundColor: "#f38f3b" }}></span>
            <span className="text-gray-700">Gross Written Premium</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2" style={{ backgroundColor: "#0283BB" }}></span>
            <span className="text-gray-700">Count of Policies Issued</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2" style={{ backgroundColor: "#d64727" }}></span>
            <span className="text-gray-700">Count of Claims Settled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceChartSection;
