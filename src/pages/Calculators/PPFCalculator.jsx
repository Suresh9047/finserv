import ReusableCalculator from '../../components/ReusableCalculator';



const PPFCalculator = () => {
    const inputs = [
        {
            name: 'investment',
            label: 'Yearly Investment',
            min: 500,
            max: 150000,
            step: 500,
            defaultValue: 100000,
            prefix: '₹',
        },
        {
            name: 'years',
            label: 'Time Period',
            min: 15,
            max: 50,
            defaultValue: 20,
            suffix: 'Year',
        },
        {
            name: 'roi',
            label: 'Rate of Interest (p.a.)',
            min: 1,
            max: 15,
            step: 0.1,
            defaultValue: 7.1,
            suffix: '%',
        },
    ];

    const calculatePPFResult = ({ investment, years, roi }) => {
        const P = parseFloat(investment) || 0;
        const r = (parseFloat(roi) || 0) / 100;
        const n = parseFloat(years) || 0;

        let FV = 0;
        for (let i = 0; i < n; i++) {
            FV = (FV + P) * (1 + r);
        }

        const totalInvestment = P * n;
        const profit = FV - totalInvestment;

        return {
            main: FV,
            breakdown: {
                'Total Investment': totalInvestment,
                'Wealth Gained': profit,
            },
        };
    };

   const generatePPFScheduleData = (values) => {
    const P = parseFloat(values.investment) || 0;
    const r = (parseFloat(values.roi) || 0) / 100;
    const n = parseInt(values.years) || 0;

    let balance = 0;
    let totalInterest = 0;
    const schedule = [];

    const startYear = new Date().getFullYear();

    for (let i = 0; i < n; i++) {
        const year = startYear + i;
        const interest = (balance + P) * r;
        totalInterest += interest;
        balance += P + interest;

        schedule.push({
            year,
            month: "March",
            principal: P,
            interest: interest,
            emi: interest,
            balance: balance,
            paidToDate: (totalInterest / (P * n)) * 100,
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
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">PPF Calculator</h1>
                        <p> A PPF Calculator is a tool used to calculate the amount of money an applicant can save in the Public Provident Fund (PPF) scheme. It considers the annual deposit, interest rate and term of the investment to determine how much money will be accumulated over an investment period. This calculator can help individuals assess their potential savings and plan their financial needs accordingly.</p>
                    </div>
                </section>

                <ReusableCalculator
                    title="PPF Calculator"
                    inputs={inputs}
                    calculateResult={calculatePPFResult}
                    generateScheduleData={generatePPFScheduleData}
                    resultTitle = "Total Amount"
                    buttonchange = "Calculate PPF"

                />

                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mb-2">What is a PPF Calculator?</h2>
                        <p className="para">
                            OM Finserv's PPF Calculator is an online tool to calculate the PPF maturity amount and the returns earned on it. The calculator will give an idea of how much returns you can earn on investing a specific amount in the PPF.
                        </p>
                        <p className="para">
                            Once you have planned the amount you can invest on a regular basis, the PPF calculator will consider 15 years of tenure and the prevailing interest rate to calculate the returns.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">PPF Interest Rates</h2>
                        <p className="para">
                            The current PPF interest rate remains unchanged and will stay the same for the second quarter of 2022 for various small schemes. Given below is the history of PPF interest rates:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse border border-gray-300 text-sm text-left text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300">Financial Year</th>
                                        <th className="px-4 py-2 border border-gray-300">Time Period</th>
                                        <th className="px-4 py-2 border border-gray-300">PPF Interest Rate (per annum)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2021-2022</td>
                                        <td className="px-4 py-2 border border-gray-300">January 2022 – March 2022</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2021-2022</td>
                                        <td className="px-4 py-2 border border-gray-300">October 2021 – December 2021</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2021-2022</td>
                                        <td className="px-4 py-2 border border-gray-300">July 2021 – September 2021</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2021-2022</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2021 – June 2021</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2020-2021</td>
                                        <td className="px-4 py-2 border border-gray-300">January 2021 – March 2021</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2020-2021</td>
                                        <td className="px-4 py-2 border border-gray-300">October 2020 – December 2020</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2020-2021</td>
                                        <td className="px-4 py-2 border border-gray-300">July 2020 – September 2020</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2020-2021</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2020 – June 2020</td>
                                        <td className="px-4 py-2 border border-gray-300">7.10%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2019-2020</td>
                                        <td className="px-4 py-2 border border-gray-300">January 2020 – March 2020</td>
                                        <td className="px-4 py-2 border border-gray-300">7.90%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2019-2020</td>
                                        <td className="px-4 py-2 border border-gray-300">October 2019 – December 2019</td>
                                        <td className="px-4 py-2 border border-gray-300">7.90%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2019-2020</td>
                                        <td className="px-4 py-2 border border-gray-300">July 2019 – September 2019</td>
                                        <td className="px-4 py-2 border border-gray-300">7.90%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2019-2020</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2019 – June 2019</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2018-2019</td>
                                        <td className="px-4 py-2 border border-gray-300">January 2019 – March 2019</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2018-2019</td>
                                        <td className="px-4 py-2 border border-gray-300">October 2018 – December 2018</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2018-2019</td>
                                        <td className="px-4 py-2 border border-gray-300">July 2018 – September 2018</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2018-2019</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2018 – June 2018</td>
                                        <td className="px-4 py-2 border border-gray-300">7.60%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2017-2018</td>
                                        <td className="px-4 py-2 border border-gray-300">January 2018 – March 2018</td>
                                        <td className="px-4 py-2 border border-gray-300">7.60%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2017-2018</td>
                                        <td className="px-4 py-2 border border-gray-300">October 2017 – December 2017</td>
                                        <td className="px-4 py-2 border border-gray-300">7.80%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2017-2018</td>
                                        <td className="px-4 py-2 border border-gray-300">July 2017 – September 2017</td>
                                        <td className="px-4 py-2 border border-gray-300">7.80%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2017-2018</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2017 – June 2017</td>
                                        <td className="px-4 py-2 border border-gray-300">7.90%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2015-2016</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2015 – March 2016</td>
                                        <td className="px-4 py-2 border border-gray-300">8.70%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2014-2015</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2014 – March 2015</td>
                                        <td className="px-4 py-2 border border-gray-300">8.70%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2013-2014</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2013 – March 2014</td>
                                        <td className="px-4 py-2 border border-gray-300">8.70%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2012-2013</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2012 – March 2013</td>
                                        <td className="px-4 py-2 border border-gray-300">8.80%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2011-2012</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2011 – November 2011</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2011-2012</td>
                                        <td className="px-4 py-2 border border-gray-300">December 2011 – March 2012</td>
                                        <td className="px-4 py-2 border border-gray-300">8.60%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2010-2011</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2010 – March 2011</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2009-2010</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2009 – March 2010</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2008-2009</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2008 – March 2009</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2007-2008</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2007 – March 2008</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2006-2007</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2006 – March 2007</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2005-2006</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2005 – March 2006</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="px-4 py-2 border border-gray-300">2004-2005</td>
                                        <td className="px-4 py-2 border border-gray-300">April 2004 – March 2005</td>
                                        <td className="px-4 py-2 border border-gray-300">8.00%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="font-bold text-2xl mb-2">PPF Calculation Formula</h2>
                        <p className="para">
                            Before you hop onto the PPF calculation formula, you must know that the interest on PPF is compounded annually.
                        </p>
                        <p className="para">
                            The formula for calculating the PPF can be expressed as follows:
                        </p>
                        <p className="font-semibold">
                            {`F = P[({(1 + i) ^ n}-1)/i]`}
                        </p>
                        <p className="para">Where,</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹F = Maturity amount PPF</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹P = Annual instalments</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹i = Rate of interest/100</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹n = Number of years</li>
                        </ul>
                        <p className="para">
                            For instance, if you pay ₹1,00,000 annually to your PPF account for 15 years continuously at an interest rate of 7.1%, your maturity will proceed at the end of 15 years. The PPF maturity amount would be ₹31,17,276.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Benefits of Using PPF Calculator</h2>
                        <p className="para">
                            If you are going to open a PPF account, you might want to know about the interest rate, return you would earn on an investment, etc. OM Finserv’s PPF calculator helps you resolve such queries. Given below are some of the benefits of using the PPF calculator:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The PPF interest rate calculator helps you figure out the monthly changes made in the rate of interest.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The tool provides an estimation of total investment in a financial year.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹PPF maturity calculator determines the maturity period of your investment.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The calculator saves you from paying a hefty tax.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The tool provides you with accurate results if you furnish the right deposited amount along with the type of deposit, i.e. fixed or variable.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹The PPF calculator allows users to determine the amount of interest they can earn with an investment of a certain amount of money.</li>
                        </ul>
                        <h4 className="font-bold text-xl mb-2">How to Use the PPF Calculator?</h4>
                        <p className="para">
                            OM Finserv's PPF calculator is easy to use. All you need to do is enter the right values in the required fields. Here is a step-by-step guide to making use of this free calculator:
                        </p>
                        <p className="para"><strong>Step 1:</strong> Click on the drop-down menu under the ‘Frequency of Investment’ field. You will find several options under that menu, such as monthly, quarterly, half-yearly and yearly.</p>
                        <p className="para"><strong>Step 2:</strong> Choose an option from the drop-down menu, depending on your convenience of how often you can deposit into the PPF account.</p>
                        <p className="para"><strong>Step 3:</strong> Enter the amount you can deposit in your PPF account over a financial year under the ‘Yearly Deposit Amount’ option.</p>
                        <p className="para"><strong>Note:</strong> The maximum amount you can deposit in the PPF account is ₹1.5 lakh every financial year.</p>
                        <p className="para"><strong>Step 4:</strong> The current interest rate will be provided by default, depending on the information you have furnished.</p>
                        <p className="para"><strong>Step 5:</strong> Click on the dot and drag the point to the right based on the number of years you want to invest in the PPF account. The default choice in the calculator is 15 years (the minimum investment period). You will be able to see the numeric value of your selection at the right end of the slide.</p>
                        <p className="para">
                            OM Finserv’s calculator will automatically calculate the maturity amount that you can expect from your PPF account, depending on the values you have furnished and the interest rate applicable at the current time.
                        </p>

                        <h4 className="font-bold text-xl mb-2">Benefits of Investing in PPF</h4>
                        <p className="para">Given below are the following benefits of investing in PPF:</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Compounded interest rate</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Risk-free returns as the returns on PPF are independent of market volatility</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Long-term investment for 15 years</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Tax deduction as per Section 80C of the Income Tax Act</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Low investment amount of ₹500</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Loans and advances against PPF balance</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹From the seventh financial year, you get a partial withdrawal facility</li>
                        </ul>

                        <h4 className="font-bold text-xl mb-2">Tax Benefits of PPF Account</h4>
                        <p className="para">
                            Public Provident Fund is an investment vehicle that falls under the category of EEE (Exempt-Exempt-Exempt). In other terms, this means that every deposit in the PPF is deductible under Section 80C of the Income Tax.
                        </p>
                        <p className="para">
                            Nevertheless, it must be noted that the maximum contribution in PPF should not exceed ₹1.5 lakh in one financial year. Moreover, the accumulated amount and interest are also exempted from tax during the withdrawal period.
                        </p>
                        <p className="para font-semibold">
                            Note: You cannot close your PPF account before the maturity date.
                        </p>
                        <p className="para">
                            However, you can transfer your PPF account from one point of designation to another. In case you are a nominee and wish to close the PPF account prematurely, it will be only in the case of the account holder’s demise. As a nominee, you can file for the closure of the account.
                        </p>

                        <h4 className="font-bold text-xl mb-2">Eligibility Criteria for PPF Account</h4>
                        <p className="para">If you want to open a PPF account, you must satisfy the following criteria:</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹You should be an Indian citizen</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Should hold only one PPF account, unless the second one is in the name of a minor</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹NRIs and HUFs cannot open a PPF account. However, if you already have an existing PPF account, it must stay active until its date of maturity. Your account cannot be extended for five years, as in the case of an Indian citizen.</li>
                        </ul>

                        <h4 className="font-bold text-xl mb-2">Documents Required for Opening a PPF Account</h4>
                        <p className="para">You would require the below-given documents to open a PPF account are as follows:</p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Duly filled account opening application form</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹KYC documents, including your PAN Card, Aadhaar Card, Driving Licence, Voters ID, etc.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Passport size photograph</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Residential address proof</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹A nominee declaration form</li>
                        </ul>
                        <p className="para">
                            Once you have submitted these documents, you have to deposit the prescribed amount towards the opening of the account.
                        </p>

                        <h4 className="font-bold text-xl mb-2">How to Open a PPF Account in a Post Office?</h4>
                        <p className="para">
                            You can open a PPF account at your nearest post office following the steps mentioned below:
                        </p>
                        <p className="para"><strong>Step 1:</strong> Visit your nearest post office and get an application form for opening a PPF account.</p>
                        <p className="para"><strong>Step 2:</strong> Fill out the application form and submit it with all required KYC documents along with a passport size photograph.</p>
                        <p className="para"><strong>Step 3:</strong> Submit an initial deposit amount required to open a PPF account at the post office. The amount can vary from ₹500 up to ₹1.5 lakh every financial year.</p>
                        <p className="para"><strong>Step 4:</strong> After the successful processing of your application, you will receive a passbook for the PPF account opened.</p>



                    </div>
                </section>
            </div>
        </div>
    );
};

export default PPFCalculator;
