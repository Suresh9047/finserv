import ReusableCalculator from '../../components/ReusableCalculator';


const Inputs = [
  {
    name: 'principal',
    label: 'Total Investment',
    min: 500,
    max: 10000000,
    defaultValue: 25000,
    prefix: '₹ ',
  },
  {
    name: 'years',
    label: 'Time Period',
    min: 1,
    max: 30,
    defaultValue: 10,
    suffix: ' Years',
  },
  {
    name: 'rate',
    label: 'Expected ROI',
    min: 1,
    max: 30,
    defaultValue: 12,
    suffix: ' %',
  },
];

const calculateLumpsumResult = (values) => {
  const { principal, years, rate } = values;
  const r = rate / 100;
  const n = years;
  const futureValue = principal * Math.pow(1 + r, n);
  const profit = futureValue - principal;

  return {
    main: futureValue,
    breakdown: {
      'Total Investment': principal,
      'Profit': profit,
    },
  };
};

const generateLumpsumSchedule = (values) => {
  const { principal, years, rate } = values;
  const r = rate / 100 / 12;
  const totalMonths = years * 12;
  const schedule = [];

  let balance = principal;
  const maturityValue = principal * Math.pow(1 + r, totalMonths);

  const startDate = new Date(2025, 5);

  for (let i = 0; i < totalMonths; i++) {
    const monthDate = new Date(startDate);
    monthDate.setMonth(startDate.getMonth() + i);
    const year = monthDate.getFullYear();
    const month = monthDate.toLocaleString('default', { month: 'long' });

    const newBalance = principal * Math.pow(1 + r, i + 1);
    const interest = newBalance - balance;
    const paidPercent = ((newBalance - principal) / (maturityValue - principal)) * 100;

    schedule.push({
      year,
      month,
      principal: principal / totalMonths,
      interest,
      emi: interest + (principal / totalMonths),
      balance: newBalance,
      paidToDate: paidPercent,
    });

    balance = newBalance;
  }

  return schedule;
};



const LumpsumCalculator = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">

        {/* Top Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Lumpsum Calculator</h1>
            <p> The Lumpsum Calculator is a hassle-free tool to calculate the estimated returns on Lumpsum investments. The Calculator is handy for any experienced investor or beginner. Investors must be familiar with all types of returns in detail so they can avail the maximum benefits from their investment. Therefore, it is a valuable tool for calculating the estimated return. The Calculator is especially beneficial in determining which investment plan will yield the highest profits.</p>
          </div>
        </section>

        <ReusableCalculator
          title="Lumpsum Calculator"
          inputs={Inputs}
          calculateResult={calculateLumpsumResult}
          generateScheduleData={generateLumpsumSchedule}
          resultTitle = "Total Amount"
          buttonchange = "Calculate Lumpsum"

        />

        <section className="pt-0 pb-0 m-0">
          <div className="container">
            <h2 className="font-bold text-2xl mb-2">What is Lumpsum Investment? </h2>
            <p className="para"> When an entity (individual or organisation) invests the entire principal amount in any type of mutual fund in one go, it is known as a lumpsum investment. High Net Worth Individuals (HNIs) or big-shot investors who have a substantial sum of money to invest or individuals with long-term investment ambitions sometimes adopt the lumpsum investment approach. However, to make a lumpsum investment in mutual funds, you must first do a thorough examination of the present market conditions.</p>
            <h2 className="font-bold text-2xl mb-2">What is a Lumpsum Calculator?</h2>
            <p className="para mb-4">
              A lumpsum calculator is a cutting-edge tool that allows investors determine their ROIs when making a lump sum investment in the mutual fund. The Om Finserv Lumpsum Investment Calculator caters to the computation of the maturity amount for a specified lumpsum investment. It depicts the probable wealth that the individual will gain in a particular time frame for the said amount invested initially.
            </p>

            <h2 className="font-bold text-2xl mb-2">How Does a Mutual Fund Lumpsum Calculator Help You?</h2>
            <p className="para mb-2">
              The Om Finserv Lumpsum Calculator can be used by investors to assess the expected returns on their lumpsum investments and whether a certain investment option will help them achieve their financial objectives or not.
            </p>
            <p className="para mb-4">
              A mutual fund lumpsum calculator can be helpful in the following ways:
            </p>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 It calculates the expected return over the full investment tenure. To get a precise approximation, you will require specific details, including the investment amount, estimated rate of return and investment tenure in years.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 Once the investors have a projected concept of the maturity value of their investments, the lumpsum calculator allows them to put forward better planning and management of finances.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 Using a lumpsum investment calculator saves time and helps eliminate human errors.</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 A lumpsum return calculator is a simple and convenient tool to use, even for inexperienced investors.</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 It’s important to keep in mind that because mutual fund investments are susceptible to market risks, exact returns cannot be predicted.</li>
            </ul>
            <h2 className="font-bold text-2xl mb-2">How Does a Lumpsum Calculator Work?</h2>
            <p className="para mb-4">
              A mutual fund lumpsum calculator is a handy yet automated tool, which carries out all typical mathematical computations on your behalf. To compute values with utmost ease, be prepared with specific values, including:
            </p>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">🔹The investment quantum</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹The term for which the amount will be invested</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹The estimated rate of return that the individual predicts to earn through mutual fund investment</li>
            </ul>
            <p className="para mb-4">
              Once you enter the above-mentioned inputs into the lumpsum calculator, you will get your investment’s maturity value easily.
            </p>

            <h2 className="font-bold text-2xl mb-2">Lumpsum Calculator Formula to Calculate Mutual Fund Returns</h2>
            <p className="para mb-2">
              A lumpsum calculator works on a compound interest formula for computing the estimated investment returns wherein one variable represents the number of times the levied interest rate is compounded annually.
            </p>
            <p className="para mb-4"><b>A = P (1 + r/n) ^ nt</b></p>
            <p className="para mb-4">Where,</p>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">🔹A represents the estimated returns</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹P represents the current investment value</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹r denotes the estimated rate of return</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹t is the time frame for which the investment is made</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹n denotes the number of annual compound interests</li>
            </ul>
            <p className="para mb-4">For better understanding let’s go through an example</p>
            <p className="para mb-4">
              Ravi invests INR 15 lakh as a lumpsum investment in a mutual fund scheme with average returns rate of 12 percent per annum and compounds in the interval of six months for the term of 5 years.
            </p>
            <p className="para mb-4">The case-specific estimated returns would be</p>
            <p className="para mb-4">
              <b>A = 15,00,000 (1 + 12/2) ^ 2/5</b>
            </p>
            <p className="para mb-4">
              This accounts to be a complex equation that would be difficult to grasp for a major percentage of novice investors. That’s exactly where a lumpsum calculator will come into play to compute the values in a fraction of a second.
            </p>
            <p className="para mb-4">
              When computed through the formula, the estimated returns at the end of investment tenure would be INR 26,43,513.
            </p>

            <h2 className="font-bold text-2xl mb-2">Difference Between Lumpsum and SIP</h2>
            <p className="para mb-4">
              Although SIP and lumpsum investments are both part of mutual funds, they differ on various parameters.
            </p>
            <div className="overflow-x-auto p-4">
              <table className="min-w-full table-auto border-collapse text-center border border-gray-300">
                <thead className="bg-[#0282ba] text-white">
                  <tr>
                    <th className="px-4 py-2 font-bold border border-gray-300">Parameter</th>
                    <th className="px-4 py-2 font-bold border border-gray-300">Lumpsum Investment</th>
                    <th className="px-4 py-2 font-bold border border-gray-300">SIP Investment</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border border-gray-300">Number of Investments</td>
                    <td className="px-4 py-2 border border-gray-300">Once in the investment tenure</td>
                    <td className="px-4 py-2 border border-gray-300">Regular investments, fixed or variable</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-white">
                    <td className="px-4 py-2 border border-gray-300">Time Frame of Investment</td>
                    <td className="px-4 py-2 border border-gray-300">The term is subject to individuals' investment goals along with the market volatility</td>
                    <td className="px-4 py-2 border border-gray-300">The investment term is subject to the investment objectives but is immune to fluctuating market conditions</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">Investment Cost</td>
                    <td className="px-4 py-2 border border-gray-300">Investment cost is high and requires a notable one-time investment</td>
                    <td className="px-4 py-2 border border-gray-300">Investment cost is low and allows the investor to invest an amount as low as INR 500</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-white">
                    <td className="px-4 py-2 border border-gray-300">Average Costs</td>
                    <td className="px-4 py-2 border border-gray-300">Investor does not enjoy benefits of rupee cost averaging</td>
                    <td className="px-4 py-2 border border-gray-300">In SIP investment, investors enjoy the convenience of rupee cost averaging. This is because the investor purchases the mutual fund units at varying market cycles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-2xl mb-2">Why Should You Count on a Lumpsum Calculator?</h2>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹The Lumpsum Calculator allows you to access the overall returns on a lump-sum investment in split seconds
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹You get the chance to determine whether you will accomplish your financial obligations at the end of the investment period or not.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹It is an easy-to-use cutting-edge tool to figure out lump-sum investment returns.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹A lumpsum investment calculator allows you to plan and manage your finances in a better way by giving you an estimate on investment returns.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹It offers the utmost convenience to novice investors for computing the return on their investments as they don’t have to count on any tricky mathematical formulas anymore.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹You get the flexibility of choosing investments that offer return beyond inflation for achieving investment goals over an extended time frame.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LumpsumCalculator;
