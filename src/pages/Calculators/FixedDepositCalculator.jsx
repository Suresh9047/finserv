import { useState } from "react";
import ReusableCalculator from "../../components/ReusableCalculator";

const FixedDepositCalculator = () => {
    const [frequency, setFrequency] = useState("Quarterly");


    const inputs = [
        {
            name: "amount",
            label: "Fixed Deposit Amount",
            min: 1000,
            max: 1000000,
            step: 1000,
            defaultValue: 25000,
            prefix: "₹",
        },
        {
            name: "rate",
            label: "Interest Rate (% p.a.)",
            min: 1,
            max: 15,
            step: 0.1,
            defaultValue: 6.5,
            suffix: "%",
        },
        {
            name: "years",
            label: "Time Period (Years)",
            min: 1,
            max: 20,
            step: 1,
            defaultValue: 5,
        },
    ];

    const calculateResult = (values) => {
        const P = parseFloat(values.amount) || 0;
        const r = (parseFloat(values.rate) || 0) / 100;
        const t = parseInt(values.years) || 0;

        const freqMap = {
            Monthly: 12,
            Quarterly: 4,
            "Half-Yearly": 2,
            Yearly: 1,
        };
        const n = freqMap[frequency] || 1;

        if (P > 0 && r > 0 && t > 0) {
            const FV = P * Math.pow(1 + r / n, n * t);
            const interest = FV - P;

            return {
                main: FV,
                breakdown: {
                    "Principal Amount": P,
                    "Interest Earned": interest,
                    "Future Value": FV,
                },
            };
        }

        return {
            main: 0,
            breakdown: {
                "Principal Amount": 0,
                "Interest Earned": 0,
                "Future Value": 0,
            },
        };
    };

   const generateFDSchedule = (values) => {
    const P = parseFloat(values.amount) || 0;
    const r = (parseFloat(values.rate) || 0) / 100;
    const t = parseInt(values.years) || 0;
    const n = 12;

    let currentValue = P;
    const schedule = [];

    const startDate = new Date();
    const totalMonths = t * 12;

    for (let i = 0; i < totalMonths; i++) {
        const monthIndex = (startDate.getMonth() + i) % 12;
        const year = startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12);
        const month = new Date(year, monthIndex).toLocaleString("default", { month: "long" });

        const interest = currentValue * (r / n);
        currentValue += interest;

        const percentGrown = ((currentValue - P) / P) * 100;

        schedule.push({
            year,
            month,
            principal: P,
            interest,
            emi: interest,
            balance: currentValue,
            paidToDate: percentGrown,
        });
    }

    return schedule;
};

    const frequencyOptions = (
        <div className="flex flex-wrap gap-4 mt-4">
            {["Monthly", "Quarterly", "Half-Yearly", "Yearly"].map((type) => (
                <label key={type} className="flex items-center space-x-2 text-sm text-gray-700">
                    <input
                        type="radio"
                        name="frequency"
                        value={type}
                        checked={frequency === type}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="accent-orange-500"
                    />
                    <span>{type}</span>
                </label>
            ))}
        </div>
    );


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Fixed Deposit Calculator - FD Calculate Online</h1>
                        <p className="text-lg leading-relaxed">
                            Fixed Deposit calculator helps in calculating the maturity amount of the
                            Fixed Deposit instantly. Calculating the maturity amount of the FD is
                            indeed a complex process. However, this calculator makes calculating
                            the fixed deposit much easier and quicker.
                        </p>
                    </div>
                </section>


                {/* Calculator Section with frequency inside card */}
                <ReusableCalculator
                    title="Fixed Deposit Calculator"
                    inputs={inputs}
                    calculateResult={calculateResult}
                    generateScheduleData={(values) => generateFDSchedule(values)}
                    resultTitle = "Total Amount"
                    buttonchange = "Calculate FD"

                />

                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mb-2">What is a Fixed Deposit (FD) Calculator?</h2>
                        <p className="text-gray-600">
                            A fixed deposit is a secure investment tool provided by almost every bank in India. However, an awareness of only its features and benefits is not enough to gauge which one will be right for you. With easy UI and quick results, the OM Finserv Fixed Deposit Calculator helps you not only check your FD maturity amount but also compare and make an informed decision on how to go about it effectively.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Overview of Fixed Deposit Rates Calculator</h2>
                        <p className="text-gray-600">
                            Fixed Deposits are broadly classified into cumulative fixed deposits and non-cumulative fixed deposits.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Types of Fixed Deposits</h2>
                        <p className="text-gray-600">
                            The OM Finserv Fixed Deposit Calculator is an effective tool that assists you in calculating your matured FD amount. In a fixed deposit, you receive the matured amount at the end of an FD term. The matured amount is calculated by compounding the interest on a monthly, quarterly, half-yearly or annual basis. By considering minimal inputs, the FD calculator at OM Finserv helps you not only comprehend the compounded interest and matured amounts but also compare bank FD offerings so that you can select the right bank for your fixed deposit account.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Cumulative Fixed Deposits</h2>
                        <p className="text-gray-600">
                            If you opt for cumulative fixed deposits, the interest on the investment is compounded and paid during the maturity of the FD. Here, the interest incurred on your investment is reinvested, creating a compounding effect. Cumulative fixed deposits are preferred for long-term investments. The interest rates are higher than the non-cumulative fixed deposits. Cumulative FDs also offer tax-saving FDs for a five-year tenure.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Non-Cumulative Fixed Deposits</h2>
                        <p className="text-gray-600">
                            If you are looking for a regular income, non-cumulative fixed deposits are the best fit where you can opt for monthly, quarterly, half-yearly or annual interest payouts on the deposit. You can invest a larger amount of money and receive a larger payout periodically. The non-cumulative fixed deposits are taxable.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Components of Fixed Deposit Calculator</h2>
                        <p className="text-gray-600">
                            The quick and easy-to-use fixed deposit calculator of OM Finserv comprises the following components.
                        </p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Rate of interest</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Tenure of the fixed deposit</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The principal amount invested in the fixed deposit</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Number of compounding periods</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Type of fixed deposit (cumulative or non-cumulative)</li>
                        </ul>
                        <h2 className="font-bold text-2xl mb-2">How to Use the OM Finserv FD Rate Calculator?</h2>
                        <p className="text-gray-600">
                            Calculating the return on your investment manually can be a complicated process. The OM Finserv Fixed Deposit Calculator makes the task easy and swift. With a few inputs, you can get an estimated return on investment within seconds.
                        </p>
                        <p className="text-gray-600">
                            Follow the steps below to calculate your returns upon FD maturity:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Firstly, ensure that all the data required by the calculator is ready.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Enter the tenure and investment amount in the specified slots.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Select the type of FD you want to invest in.</li>
                        </ul>
                        <p className="text-gray-600">The calculator will display the estimated figure on your screen.</p>

                        <h2 className="font-bold text-2xl mb-2">Formula to Calculate the Fixed Deposit Maturity Amount</h2>
                        <p className="text-gray-600">
                            Fixed deposits can be calculated using the methods of simple interest and compound interest, as illustrated below.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Simple Interest</h2>
                        <p className="text-gray-600">
                            Simple interest is a method of calculating the interest and maturity amount for a predetermined rate of interest, principal and tenure.
                        </p>
                        <p className="font-bold text-gray-600">A = P + (P × R × T) / 100</p>
                        <p className="text-gray-600">Here,</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹A: Maturity amount</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹P: Principal invested</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹R: Rate of Interest</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹T: Tenure of FD</li>
                        </ul>
                        <p className="text-gray-600">For Example,</p>
                        <p className="text-gray-600">If the principal invested is INR 5,000, the rate of interest is 6%, and the tenure of the FD is 5 years, then:</p>
                        <p className="text-gray-600">A = 5015</p>
                        <p className="text-gray-600">= 5000 + 1500</p>
                        <p className="text-gray-600">= INR 6500</p>

                        <h2 className="font-bold text-2xl mb-2">Compound Interest</h2>
                        <p className="text-gray-600">
                            In compound interest, the interest is earned on both principal and interest.
                        </p>
                        <p className="font-bold text-gray-600">A = P (1 + r / n) ^ (n × t)</p>
                        <p className="text-gray-600">Here,</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹A: Maturity amount</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹P: Principal invested</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹r: Rate of Interest</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹t: Tenure of FD</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹n: number of compounding periods</li>
                        </ul>
                        <p className="text-gray-600">For Example,</p>
                        <p className="text-gray-600">If the principal invested is INR 50,000, the rate of interest is 6%, and the tenure of FD is 4 years, a half-yearly compounded calculation will be</p>
                        <p className="text-gray-600">A = 50,000 (1 + 0.06 / 2) ^ (2 × 4)</p>
                        <p className="text-gray-600">= 50,000 + 63,045</p>
                        <p className="text-gray-600">= INR 1,13,045</p>

                        <h2 className="font-bold text-2xl mb-2">Tables of FD Fixed Deposit Calculator with Example</h2>
                        <p className="text-gray-600">
                            An FD calculator has zero scope of error as it is an automatic system. The hassle-free tool is easy to use and gives an estimated result in seconds. With the examples illustrated in the following table, get to know what the figures might look like for an FD amount.
                        </p>
                        <p className="text-gray-600">
                            Let’s take the amount invested as INR 1,00,000 at a 6% rate of interest for 1 year compounded quarterly.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border border-gray-300 text-sm text-left">
                                <thead>
                                    <tr className="bg-[#0282ba] text-white">
                                        <th className="border border-gray-300 px-4 py-2">Months</th>
                                        <th className="border border-gray-300 px-4 py-2">Principal</th>
                                        <th className="border border-gray-300 px-4 py-2">Interest</th>
                                        <th className="border border-gray-300 px-4 py-2">Maturity</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">March</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,00,000</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,500</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,01,500</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">June</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,01,500</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,522.50</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,03,022.50</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">September</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,03,022.50</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,545.375</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,04,567.838</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">December</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,04,567.838</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,568.517</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 1,06,136.355</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="border border-gray-300 px-4 py-2 font-bold text-left text-center">
                                            Total
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">INR 6,136.35</td>
                                        <td className="border border-gray-300 px-4 py-2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-2xl mb-2">Advantages of FD Calculator</h2>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong> Accurate Estimates: </strong> A fixed deposit calculator helps you gauge the return on your FD investment. This, in turn, helps plan your finances for the future as you will know the returns beforehand.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong> Time Saver: </strong>Calculating the maturity amount and interest manually is a complicated process. An FD Calculator made the process easy and swift. With just a few inputs, like tenure, interest rates and the principal amount, it facilitates quick results showing your FD maturity amount.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong> Easy Comparisons:</strong> With the FD calculator, you can compare different rates of interest of different financial institutions and make an informed decision on where to open a fixed deposit.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FixedDepositCalculator;
