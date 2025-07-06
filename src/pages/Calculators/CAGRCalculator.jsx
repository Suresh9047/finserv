import Calculator from '../../components/ReusableChartCalculator';


const CAGRCalculator = () => {
    const inputs = [
        {
            name: 'loanAmount',
            label: 'Total Investment',
            min: 1000,
            max: 150000000,
            step: 1000,
            prefix: '₹',
            defaultValue: 5000
        },
        {
            name: 'interestRate',
            label: 'Final Maturity Value',
            min: 1000,
            max: 5000000,
            step: 1000,
            prefix: '₹',
            defaultValue: 50000
        },
        {
            name: 'loanTerm',
            label: 'Loan Tenure (Years)',
            min: 1,
            max: 30,
            step: 1,
            suffix: ' Years',
            defaultValue: 5
        }
    ];
    const calculateCAGR = ({ loanAmount, interestRate, loanTerm }) => {
        let cagr = 0;
        if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
            cagr = (Math.pow(interestRate / loanAmount, 1 / loanTerm) - 1) * 100;
        }

        return {
            principal: loanAmount || 0,
            interest: (interestRate - loanAmount) || 0,
            emi: isFinite(cagr) ? cagr : 0,
            total: interestRate || 0
        };
    };

    const generateCAGRSchedule = ({ loanAmount, interestRate, loanTerm }) => {
        const r = interestRate / 1200;
        const n = loanTerm * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        let balance = loanAmount;
        const schedule = [];
        let totalPaid = 0;

        for (let i = 0; i < n; i++) {
            const interest = balance * r;
            const principal = emi - interest;
            balance -= principal;
            totalPaid += principal;

            schedule.push({
                Year: 2025 + Math.floor(i / 12),
                Month: new Date(0, i).toLocaleString('default', { month: 'long' }),
                'Principal (a)': `₹${principal.toFixed(2)}`,
                'Interest (b)': `₹${interest.toFixed(2)}`,
                'EMI (a + b)': `₹${emi.toFixed(2)}`,
                Balance: `₹${Math.max(balance, 0).toFixed(2)}`,
                'Loan % Paid to Date': `${((totalPaid / loanAmount) * 100).toFixed(2)}%`
            });
        }

        return schedule;
    };




    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">CAGR Calculator</h1>
                        <p className="text-lg leading-relaxed">
                            A Compound Annual Growth Rate calculator (CAGR)
                            helps determine an investment's average yearly
                            growth rate over a specific period. It shows how
                            much an investment has grown, assuming a steady
                            annual growth rate. To use a CAGR calculator, simply
                            input the starting value, end value, and investment
                            period. This tool provides a percentage representing
                            the growth rate, making it easier for investors to
                            compare different investments. A CAGR calculator
                            helps make informed decisions by providing a simple
                            way to understand long-term investment growth.
                        </p>
                    </div>
                </section>


                <Calculator title="CAGR Calculator" inputs={inputs} calculate={calculateCAGR} generateScheduleData={generateCAGRSchedule} resultTitle = "Total Amount"  buttonchange = "Calculate CAGR"/>

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h4 className="font-bold text-lg mt-6">How to Use the CAGR Calculator?</h4>
                        <p className="mt-2">
                            Using the CAGR calculator is a simple process. You can follow the below-mentioned steps to calculate the CAGR value:
                        </p>
                        <p className="mt-2">
                            <strong>Step 1: </strong>Visit the official website of Finserv Money.
                        </p>
                        <p className="mt-2">
                            <strong>Step 2: </strong>Go to the ‘Calculators’ section from the list on the top.
                        </p>
                        <p className="mt-2">
                            <strong>Step 3: </strong>From the list of multiple calculators, select the ‘CAGR Calculator.’
                        </p>
                        <p className="mt-2">
                            <strong>Step 4: </strong>Fill in the required information to get the calculated results.
                        </p>
                        <p className="mt-2">
                            <strong>Note: </strong>You can also manually calculate the cumulative annual growth rate with this formula.
                        </p>
                        <p className="font-bold mt-2">
                            <strong>CAGR = (FV / PV) ^ (1 / n) – 1</strong>
                        </p>

                        <h4 className="font-bold text-lg mt-6">Benefits of Using a CAGR Calculator</h4>
                        <p className="mt-2">Some of the benefits of using a CAGR calculator include:</p>

                        <h4 className="font-bold text-lg mt-6">Estimates Average Growth Rate</h4>
                        <p className="mt-2">
                            A CAGR calculator helps estimate an investment’s average yearly growth, showing how much it has grown over a set period. This is useful for assessing performance.
                        </p>
                        <h4 className="font-bold text-lg mt-6">Easy Investment Comparison</h4>
                        <p className="mt-2">
                            The Compound Annual Growth Rate calculator makes it easy to compare different investments by providing their yearly growth rates in a standard format, which aids in deciding between options.
                        </p>

                        <h4 className="font-bold text-lg mt-6">Clear Long-Term Growth View</h4>
                        <p className="mt-2">
                            The cumulative annual growth rate calculator provides a clear picture of an investment’s long-term growth, ignoring short-term fluctuations. This helps in understanding the overall trend.
                        </p>

                        <h4 className="font-bold text-lg mt-6">Simple Data Input</h4>
                        <p className="mt-2">
                            A CAGR calculation calculator requires only basic information, such as the initial value, final value, and investment period, making it straightforward.
                        </p>

                        <h4 className="font-bold text-lg mt-6">Saves Time</h4>
                        <p className="mt-2">
                            This calculator saves time by giving quick results without requiring manual or complex calculations, allowing investors to focus on strategy.
                        </p>

                        <h4 className="font-bold text-lg mt-6">Useful for Planning</h4>
                        <p className="mt-2">
                            The compound growth rate calculator is valuable for planning future investments. It helps understand past growth trends and makes future growth predictions more reliable.
                        </p>

                        <h4 className="font-bold text-lg mt-6">Informed Financial Decisions</h4>
                        <p className="mt-2">
                            Using a CAGR growth rate calculator, investors can make informed financial decisions, knowing the consistent growth rates and comparing them to other investments.
                        </p>
                        <h4 className="font-bold text-lg mt-6">Understanding CAGR in Investments</h4>
                        <p className="mt-2">
                            AGR, or compound annual growth rate, measures how much an investment grows yearly. It shows the average annual growth, assuming that profits are reinvested yearly. This makes it useful for comparing different investments over the same time frame.
                        </p>
                        <p className="mt-2">
                            For example, if you invest a certain amount of money, CAGR will help you understand how much it grows yearly, on average, over time. It is especially helpful when you want to know an investment’s long-term performance while ignoring short-term ups and downs.
                        </p>
                        <p className="mt-2">
                            CAGR doesn’t reflect actual yearly returns but provides a steady rate, representing growth as if it occurred evenly each year. This makes it a good tool for understanding and comparing investments. A compound annual rate calculator can help simplify these calculations, providing a clear percentage summarizing the overall growth.
                        </p>

                        <h4 className="font-bold text-lg mt-6">CAGR vs. Other Financial Metrics</h4>
                        <p className="mt-2">
                            Let’s understand how CAGR is different from other financial metrics –
                        </p>

                        <h4 className="font-bold text-lg mt-6">CAGR vs. Average Growth Rate</h4>
                        <p className="mt-2">
                            The difference between CAGR and Average Growth Rate is given in the table below –
                        </p>
                        <div className="overflow-x-auto mb-4 mt-4">
                            <table className="table-auto w-full border-separate border border-gray-300 text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Factor</th>
                                        <th className="px-4 py-2">CAGR</th>
                                        <th className="px-4 py-2">Average Growth Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Definition</td>
                                        <td className="px-4 py-2">Shows consistent yearly growth of an investment</td>
                                        <td className="px-4 py-2">Adds up all annual growth rates and divides by the years</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Calculation Method</td>
                                        <td className="px-4 py-2">Considers compounding</td>
                                        <td className="px-4 py-2">Simple average of yearly growth rates</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Reliability</td>
                                        <td className="px-4 py-2">More reliable for assessing
                                            growth</td>
                                        <td className="px-4 py-2">It is less reliable as it doesn’t
                                            account for compounding</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Best for</td>
                                        <td className="px-4 py-2">Long-term growth indication</td>
                                        <td className="px-4 py-2">Short-term or varied growth
                                            assessment</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <h4 className="text-xl font-semibold">CAGR vs. IRR (Internal Rate of Return)</h4>
                        <p className="text-gray-600 mt-2">The difference between CAGR and Internal Rate of Return (IRR) is given in the table below –</p>

                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="min-w-full table-auto border-separate border border-gray-300 text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Factor</th>
                                        <th className="px-4 py-2">CAGR</th>
                                        <th className="px-4 py-2">IRR (Internal Rate of Return)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Definition</td>
                                        <td className="px-4 py-2">Measures consistent growth over a period</td>
                                        <td className="px-4 py-2">Measures growth with multiple cash flows over time</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Calculation Method</td>
                                        <td className="px-4 py-2">It uses start value, end value, and period</td>
                                        <td className="px-4 py-2">Considers every cash inflow and outflow</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Complexity</td>
                                        <td className="px-4 py-2">Simpler calculation</td>
                                        <td className="px-4 py-2">Handles more complex cash flow situations</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Best for</td>
                                        <td className="px-4 py-2">Investments with consistent growth</td>
                                        <td className="px-4 py-2">Investments with irregular or multiple payments</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Detail Level</td>
                                        <td className="px-4 py-2">Less detailed, assumes uniform growth</td>
                                        <td className="px-4 py-2">More detailed, accounts for varying cash flows</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="text-xl font-semibold">CAGR vs. XIRR (Extended Internal Rate of Return)</h4>
                        <p className="text-gray-600 mt-2">The difference between CAGR and XIRR is given in the table below –</p>

                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="min-w-full table-auto border-separate border border-gray-300 text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Factor</th>
                                        <th className="px-4 py-2">CAGR</th>
                                        <th className="px-4 py-2">XIRR (Extended Internal Rate of Return)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Definition</td>
                                        <td className="px-4 py-2">Ideal for single investments over a set period</td>
                                        <td className="px-4 py-2">Suitable for multiple cash flows at irregular intervals</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Calculation Method</td>
                                        <td className="px-4 py-2">Assumes a steady investment period</td>
                                        <td className="px-4 py-2">Considers the timing of each cash movement</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Precision</td>
                                        <td className="px-4 py-2">Provides a general growth rate</td>
                                        <td className="px-4 py-2">Offers more precise rate, accounting for irregular cash flows</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Best for</td>
                                        <td className="px-4 py-2">Single, long-term investments</td>
                                        <td className="px-4 py-2">Complex investments with multiple, irregular cash flows</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="text-xl font-semibold">CAGR vs. Absolute Return</h4>
                        <p className="text-gray-600 mt-2">The difference between CAGR and Absolute Return is given in the table below –</p>

                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full table-auto border-separate border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Factor</th>
                                        <th className="px-4 py-2">CAGR</th>
                                        <th className="px-4 py-2">Absolute Return</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Definition</td>
                                        <td className="px-4 py-2">Represents average yearly growth</td>
                                        <td className="px-4 py-2">Shows total percentage gain/loss from the initial investment</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Time Consideration</td>
                                        <td className="px-4 py-2">Accounts for the time factor (compounding)</td>
                                        <td className="px-4 py-2">It does not consider the time factor</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Calculation Method</td>
                                        <td className="px-4 py-2">Calculates annualised growth rate over multiple years</td>
                                        <td className="px-4 py-2">Simple percentage change from the initial investment</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Best for</td>
                                        <td className="px-4 py-2">Understanding long-term performance</td>
                                        <td className="px-4 py-2">Assessing short-term gains or losses</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-semibold mt-8">CAGR vs. ROI (Return on Investment)</h4>
                        <p className="text-gray-600 mt-2">The difference between CAGR and ROI is given in the table below –</p>

                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="min-w-full table-auto border-separate border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Factor</th>
                                        <th className="px-4 py-2">CAGR</th>
                                        <th className="px-4 py-2">ROI (Return on Investment)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Definition</td>
                                        <td className="px-4 py-2">Measures annual growth with compounding over time</td>
                                        <td className="px-4 py-2">Calculates percentage gain or loss based on the initial cost</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Time Consideration</td>
                                        <td className="px-4 py-2">Accounts for the length of the investment</td>
                                        <td className="px-4 py-2">It does not consider the time of the investment</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Compounding Effect</td>
                                        <td className="px-4 py-2">Includes the effect of compounding</td>
                                        <td className="px-4 py-2">It does not factor in compounding</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Best for</td>
                                        <td className="px-4 py-2">Long-term investment analysis</td>
                                        <td className="px-4 py-2">Short-term profitability assessment</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Calculation Focus</td>
                                        <td className="px-4 py-2">Focuses on consistent yearly growth</td>
                                        <td className="px-4 py-2">Focuses on total gain or loss relative to the initial cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="text-xl font-semibold">Common Applications of CAGR</h4>
                        <p className="text-gray-600 mt-2">Here are some applications of CAGR:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Investors use a CAGR calculator to check the average growth rate of investments over time.</li>
                            <li>The CAGR calculator helps compare the growth rates of different financial products.</li>
                            <li>Businesses use the cumulative annual growth rate calculator to measure sales, revenue, or profit growth.</li>
                            <li>The CAGR growth rate calculator aids in planning future investment goals by estimating yearly growth.</li>
                            <li>The compound growth rate calculator predicts future values based on past performance.</li>
                            <li>The CAGR rate calculator helps compare growth with industry peers to evaluate performance.</li>
                        </ul>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default CAGRCalculator;
