import ReusableCalculator from '../../components/ReusableCalculator';

const ssyRate = 0.082; 


const Inputs = [
    {
        name: 'yearlyInvestment',
        label: 'Yearly Investment',
        type: 'number',
        min: 250,
        max: 150000,
        defaultValue: 50000,
        prefix: '₹',
    },
    {
        name: 'startYear',
        label: 'Start Year',
        type: 'number',
        min: 2015,
        max: 2030,
        defaultValue: 2025,
    },
    {
        name: 'girlAge',
        label: "Girl's Age at Account Opening",
        type: 'number',
        min: 0,
        max: 10,
        defaultValue: 5,
        suffix: ' years',
    },
];

const calculateSSYResult = (values) => {
    const { yearlyInvestment, startYear, girlAge } = values;
    const maturityYear = parseInt(startYear) + (21 - parseInt(girlAge));
    let totalInvestment = 0;
    let balance = 0;

    for (let i = 0; i < Math.min(15, 21 - parseInt(girlAge)); i++) {
        totalInvestment += parseInt(yearlyInvestment);
        balance = (balance + parseInt(yearlyInvestment)) * (1 + ssyRate);
    }

    const totalInterest = balance - totalInvestment;
    const maturityValue = balance;

    return {
        main: maturityValue,
        breakdown: {
            'Total Investment': totalInvestment,
            'Total Interest': totalInterest,
            'Maturity Year': maturityYear,
        },
    };
};

const generateSSYScheduleData = (values) => {
    const { yearlyInvestment, startYear, girlAge } = values;
    const investmentYears = Math.min(15, 21 - girlAge);
    const totalYears = 21 - girlAge;
    let balance = 0;
    let totalInvested = 0;

    const schedule = [];

    for (let i = 0; i < totalYears; i++) {
        const year = parseInt(startYear) + i;
        const interest = balance * ssyRate;

        let principal = 0;
        if (i < investmentYears) {
            principal = yearlyInvestment;
            balance += yearlyInvestment;
            totalInvested += yearlyInvestment;
        }

        balance += interest;

        schedule.push({
            year: year,
            month: '-',
            principal: principal,
            interest: interest,
            emi: principal + interest,
            balance: balance,
            paidToDate: ((totalInvested / (investmentYears * yearlyInvestment)) * 100),
        });
    }

    return schedule;
};

const SukanyaCalculator = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Sukanya Samriddhi Yojana Calculator</h1>
                        <p className="text-lg leading-relaxed">Sukanya Samriddhi Yojana Calculator determines the total amount of money that you will receive under the Sukanya Samriddhi Yojana scheme created by the government of India in the year 2015. There are some basic requirements that you will need to keep in mind before Sukanya Samriddhi Account calculator, such as the age of the girl should be less than 10 years. The girl also needs to be an Indian resident to use the SSY calculator. The Sukanya Samriddhi scheme calculator asks for yearly investment, girl’s age and start period. Sukanya Yojana calculator can be used for free.</p>

                    </div>
                </section>

                <ReusableCalculator
                    title="SSY Calculator"
                    inputs={Inputs}
                    calculateResult={calculateSSYResult}
                    generateScheduleData={generateSSYScheduleData}
                    resultTitle = "Total Amount"
                    buttonchange = "Calculate Sukanya"

                />

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h3 className="font-bold text-2xl mb-2">SSY Calculator</h3>
                        <p className=" mb-6">
                            Sukanya Samriddhi Yojana (SSY) is a scheme initiated by the Government of India to help finance every daughter’s education and nurture. This savings account can be opened in any financial institution or government post office. A rate of interest of 7.6% is involved, which can create capital appreciation over time. Account holders of the Sukanya Samriddhi Yojana can estimate their total savings after the maturity period using the SSY Calculator. It is a great online tool that effectively calculates how much interest and principal amount will be receivable in the future.
                        </p>

                        <h3 className="font-bold text-2xl mb-2">What is Sukanya Samriddhi Yojana (SSY)?</h3>
                        <p className=" mb-6">
                            Every parent’s dream for their daughters is to have enough savings for their education and well-being. With various schemes and subsidies launched by the government, there is much-needed relief for parents. One such major scheme for girl children is the “Beti Bachao, Beti Padhao” initiative, which encourages parents to safeguard their daughter’s future and educate them against gender bias. Launched in 2015, Sukanya Samriddhi Yojana (SSY) is another welfare measure aimed at girl children. SSY encourages parents to open a savings account in their daughter’s name.
                        </p>

                        <h3 className="font-bold text-2xl mb-2">Sukanya Samriddhi Yojana Interest Rates</h3>
                        <p className=" mb-6">
                            Being a government-backed scheme, interest rates for SSY are monitored by authorities and are revised every financial year. The SSY interest rate has fluctuated over the years, with a slight dip noted for the current year. As of April 2022, the applicable interest rate is 7.6%. Additionally, contributions made to the SSY scheme are completely tax-exempt. Below is data showing the historical interest rates of the SSY scheme.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-center my-6">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Year</th>
                                        <th className="border border-gray-300 px-4 py-2">Interest Rate (%)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        { year: 2024, rate: 8.2 },
                                        { year: 2023, rate: 8.0 },
                                        { year: 2022, rate: 7.6 },
                                        { year: 2021, rate: 7.6 },
                                        { year: 2020, rate: 8.4 },
                                        { year: 2019, rate: 8.5 },
                                        { year: 2018, rate: 8.1 },
                                        { year: 2017, rate: 8.3 },
                                        { year: 2016, rate: 8.6 },
                                    ].map((item, index) => (
                                        <tr
                                            key={item.year}
                                            className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                        >
                                            <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3 className="font-bold text-2xl mb-2">What is Sukanya Samriddhi Yojana Calculator?</h3>
                        <p className=" mb-6">
                            The Sukanya Samriddhi Yojana Calculator is an easy-to-use online computation tool that visualizes and analyzes amount estimation based on SSY savings investments. This estimation aids in financial planning for education, marriage, and improving the standard of living. It eliminates the need for manual calculations by generating relevant data with simple input adjustments.
                        </p>

                        <h3 className="font-bold text-2xl mb-2">Benefits of using Sukanya Samriddhi Yojana calculator</h3>
                        <p className=" mb-4">
                            Understanding the SSY calculator’s benefits begins with the motivation for opening an SSY account. Many girl children still lack access to proper education due to conservative mindsets. SSY provides a government-backed means for parents to invest in their daughters’ futures.
                        </p>
                        <p className=" mb-4">
                            The SSY Calculator provides a holistic perspective, allowing guardians to visualize capital appreciation through compound interest. Benefits include:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Sukanya Samriddhi Yojana Calculator provides easy visualisation of the receivable figures</li>
                            <li>Helps reduce time</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-6">Eligibility Criteria for opening Sukanya Samriddhi Yojana Account</h3>
                        <p className=" mb-4">
                            Before applying for an SSY account, applicants must meet the following eligibility criteria:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>The girl should be a resident of India</li>
                            <li>The maximum age should not exceed 10 years and must be proven with valid documents</li>
                            <li>The account can only be opened in the name of the girl child, her guardian, or parents</li>
                            <li>Parents can open a maximum of two SSY accounts, with exceptions for twins or triplets</li>
                            <li>Indian citizenship must be retained until account maturity</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-6">Documents Required for Sukanya Samriddhi Yojana</h3>
                        <p className=" mb-4">
                            To open an SSY account, applicants must provide valid documents to verify identity and residence as per government norms. Required documents include:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Duly filled SSY application form</li>
                            <li>Birth certificate of the girl child</li>
                            <li>Proof of identity (e.g., Aadhaar Card or government attested ID)</li>
                            <li>Proof of residence (e.g., Aadhaar Card or government attested proof)</li>
                            <li>Passport-sized photographs of the applicant and her parents</li>
                        </ul>
                        <h3 className="font-bold text-2xl mb-2">Sukanya Samriddhi Yojana Calculation</h3>
                        <p className=" mb-6">
                            For calculating the monetary accumulation in a Sukanya Samriddhi Yojana (SSY) account after maturity, users can use the SSY calculator. It processes information such as yearly investment, the girl's age, and investment start year. These details are analyzed in real-time by the AI-powered tool to provide an accurate estimation. The calculator also returns the total investment amount, interest earned, maturity duration, and total receivable amount — while automatically considering interest rate fluctuations.
                        </p>

                        <h3 className="font-bold text-2xl mb-2">The Formula for Calculating SSY Maturity Amount</h3>
                        <p className=" mb-4">
                            With the SSY Calculator, estimations become effortless. Users simply input the yearly investment amount, the age of the girl child when the account is or will be opened, and the starting year of investment. This data is then used in the following mathematical formula:
                        </p>

                        <p className=" font-semibold mb-4">
                            Amount receivable = Principal investment × (1 + Rate of Interest / Number of compounding periods per year)<sup>Number of compounding periods × number of years</sup>
                        </p>

                        <p className=" mb-4 font-semibold">
                            Or, in short: <br />
                            A = P (1 + r / n)<sup>nt</sup>
                        </p>

                        <p className=" mb-6">
                            For example, if you invest a total of ₹30,000 per year for a girl child aged five years starting in 2018, your total maturity amount would be ₹12,73,031. The break-up for this example is provided below.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border border-gray-300 text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Yearly Investment</th>
                                        <th className="border border-gray-300 px-4 py-2">INR 30,000</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Age of the Girl</td>
                                        <td className="border border-gray-300 px-4 py-2">5 Years</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Subscription year</td>
                                        <td className="border border-gray-300 px-4 py-2">2018</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Total Investment deposited</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 4,50,000</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Total Interest earned</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 8,23,031</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">The Maturity Year</td>
                                        <td className="border border-gray-300 px-4 py-2">2039</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Total Amount receivable</td>
                                        <td className="border border-gray-300 px-4 py-2">INR 12,73,031</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SukanyaCalculator;
