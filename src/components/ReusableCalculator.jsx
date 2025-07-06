import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ReusableCalculator = ({ title, inputs, calculateResult, generateScheduleData, resultTitle,buttonchange }) => {
  const [values, setValues] = useState(
    inputs.reduce((acc, input) => {
      acc[input.name] = input.defaultValue || 0;
      return acc;
    }, {})
  );

  const [schedule, setSchedule] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);
    const [result, setResult] = useState(() => calculateResult(values)); 

  const handleChange = (name, newValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: newValue === '' ? '' : Number(newValue)
      
    }));
    setShowSchedule(false);
  };
  useEffect(() => {
    const newResult = calculateResult(values);
    setResult(newResult);
  }, [values, calculateResult]);

  const generateSchedule = () => {
    const scheduleData = generateScheduleData(values);
    setSchedule(scheduleData);
    setShowSchedule(true);
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 justify-between">
          {/* Input Panel */}
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            {inputs.map((input) => (
              <div key={input.name} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-600">{input.label}</label>
                <input
                  type="number"
                  value={values[input.name] ?? ''}
                  onChange={(e) => handleChange(input.name, e.target.value)}
                  className="w-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  min={input.min}
                  max={input.max}
                  step={input.step || 1}
                />
                <input
                  type="range"
                  className="w-full accent-orange-500"
                  value={values[input.name] ?? ''}
                  onChange={(e) => handleChange(input.name, e.target.value)}
                  min={input.min}
                  max={input.max}
                  step={input.step || 1}
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{input.prefix || ''}{input.min}{input.suffix || ''}</span>
                  <span>{input.prefix || ''}{input.max}{input.suffix || ''}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Result Panel */}
          <div className="w-full lg:w-[400px] bg-orange-50 rounded-3xl shadow-inner p-8 flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="text-xl font-bold text-orange-600">{resultTitle}</h3>

            <div className="text-4xl font-extrabold text-gray-800 tracking-wide">
              ₹ {result.main.toFixed(2)}
            </div>
            {result.breakdown && (
              <div className="flex flex-col space-y-2 w-full py-10">
                {Object.entries(result.breakdown).map(([label, value]) => (
                  <div key={label} className="flex justify-between px-2">
                    <p className="text-gray-500 text-sm">{label}</p>
                    <p className="text-green-700 font-semibold text-sm">
                        ₹ {typeof value === 'number' && !isNaN(value) ? value.toFixed(2) : '0.00'}
                      </p>
                  </div>
                ))}
              </div>
            )}
            <button
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition"
              onClick={generateSchedule}
            >
              {buttonchange}
            </button>
          </div>
        </div>

        {/* Schedule Table */}
        {showSchedule && schedule.length > 0 && (
          <div className="overflow-x-auto border rounded-lg p-4 bg-white shadow-md mt-10">
            <h4 className="text-lg font-bold mb-6 text-orange-700 text-center">Loan Payment Schedule</h4>
            <table className="w-full text-sm text-gray-700 border-collapse">
              <thead className="bg-orange-100 text-gray-700 font-semibold text-left border-b border-orange-200">
                <tr>
                  <th className="p-3">Year</th>
                  <th className="p-3">Month</th>
                  <th className="p-3">Principal (a)</th>
                  <th className="p-3">Interest (b)</th>
                  <th className="p-3">EMI (a + b)</th>
                  <th className="p-3">Balance</th>
                  <th className="p-3">Loan % Paid to Date</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr
                    key={`${row.year}-${row.month}`}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}
                  >
                    <td className="p-3">{row.year}</td>
                    <td className="p-3">{row.month}</td>
                    <td className="p-3">₹ {row.principal.toFixed(2)}</td>
                    <td className="p-3">₹ {row.interest.toFixed(2)}</td>
                    <td className="p-3">₹ {row.emi.toFixed(2)}</td>
                    <td className="p-3">₹ {row.balance.toFixed(2)}</td>
                    <td className="p-3">{row.paidToDate.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

ReusableCalculator.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      defaultValue: PropTypes.number,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      step: PropTypes.number,
      prefix: PropTypes.string,
      suffix: PropTypes.string,
    })
  ).isRequired,
  calculateResult: PropTypes.func.isRequired,
  generateScheduleData: PropTypes.func.isRequired,
  resultTitle: PropTypes.string,
  buttonchange: PropTypes.string,
};

export default ReusableCalculator;
