
import React, { useState } from 'react';

const test = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(10);
  const [roi, setRoi] = useState(12);

  const totalInvestment = monthlyInvestment * 12 * years;

  const futureValue = () => {
    const monthlyRate = roi / 100 / 12;
    const months = years * 12;
    return (
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    ).toFixed(2);
  };

  const profit = (futureValue() - totalInvestment).toFixed(2);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 justify-between">
          {/* Input Panel */}
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">SIP Calculator</h2>

            {/* Monthly Investment */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-600">Monthly Investment (₹)</label>
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                min={500}
                max={100000}
                step={500}
              />
              <input
                type="range"
                className="w-full accent-orange-500"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Investment Duration */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-600">Time Period (Years)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-20 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                min={1}
                max={30}
              />
              <input
                type="range"
                className="w-full accent-orange-500"
                min={1}
                max={30}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>

            {/* ROI */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-600">Expected ROI (%)</label>
              <input
                type="number"
                value={roi}
                onChange={(e) => setRoi(Number(e.target.value))}
                className="w-20 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                min={1}
                max={30}
                step={0.5}
              />
              <input
                type="range"
                className="w-full accent-orange-500"
                min={1}
                max={30}
                step={0.5}
                value={roi}
                onChange={(e) => setRoi(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="w-full lg:w-[400px] bg-orange-50 rounded-3xl shadow-inner p-8 flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="text-xl font-bold text-orange-600">Estimated Returns</h3>

            <div className="text-4xl font-extrabold text-gray-800 tracking-wide">
              ₹ {futureValue()}
            </div>

            <div className="flex justify-between w-full text-sm font-medium">
              <div className="w-1/2 text-left">
                <p className="text-gray-500">Total Investment</p>
                <p className="text-green-700 font-semibold">₹ {totalInvestment.toFixed(2)}</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="text-gray-500">Estimated Profit</p>
                <p className="text-emerald-600 font-semibold">₹ {profit}</p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-400 rounded-full transition-all duration-500"
                  style={{
                    width: `${(totalInvestment / futureValue()) * 100}%`,
                  }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">Investment vs Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default test;

