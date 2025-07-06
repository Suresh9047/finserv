import ReusableCalculator from '../../components/ReusableCalculator';

const SipCalculator = () => {


  const sipInputs = [
    {
      name: 'monthlyInvestment',
      label: 'Monthly Investment (₹)',
      min: 500,
      max: 100000,
      step: 500,
      defaultValue: 5000,
      prefix: '₹',
    },
    {
      name: 'years',
      label: 'Time Period (Years)',
      min: 1,
      max: 30,
      defaultValue: 10,
      suffix: ' yrs',
    },
    {
      name: 'roi',
      label: 'Expected ROI (%)',
      min: 1,
      max: 30,
      step: 0.5,
      defaultValue: 12,
      suffix: '%',
    },
  ];

  const calculateSip = ({ monthlyInvestment, years, roi }) => {
    const monthlyRate = roi / 100 / 12;
    let investedAmount = 0;
    let totalWealth = 0;
    const yearData = [];

    for (let year = 1; year <= years; year++) {
      const months = year * 12;
      const fv = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
      const invested = monthlyInvestment * months;
      const gained = fv - invested;

      yearData.push({
        Year: new Date().getFullYear() + year - 1,
        'Invested Amount (₹)': `₹${invested.toLocaleString()}`,
        'Wealth Gained (₹)': `₹${gained.toLocaleString()}`,
        'Expected Amount (₹)': `₹${fv.toLocaleString()}`,
      });

      investedAmount = invested;
      totalWealth = fv;
    }

    return {
      main: totalWealth,
      breakdown: {
        'Total Investment': investedAmount,
        'Estimated Profit': totalWealth - investedAmount,
      },
      yearlyReport: yearData
    };
  };

  const generateSIPSchedule = (values) => {
    const { monthlyInvestment, years, roi } = values;
    const tenure = years * 12;
    const rate = roi / 1200;
    const emi = (monthlyInvestment * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);

    let balance = monthlyInvestment;
    const schedule = [];
    const startDate = new Date();

    for (let i = 0; i < tenure; i++) {
      const interest = balance * rate;
      const principal = emi - interest;
      balance -= principal;

      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);

      schedule.push({
        year: date.getFullYear(),
        month: date.toLocaleString('default', { month: 'long' }),
        principal,
        interest,
        emi,
        balance: balance < 0 ? 0 : balance,
        paidToDate: ((monthlyInvestment * (i + 1) - balance) / (monthlyInvestment * tenure)) * 100,
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
            <h1 className="text-4xl font-bold text-[#0282ba] mb-4">SIP Calculator</h1>
            <p className="text-lg leading-relaxed">
              A SIP Calculator is a tool that helps investors calculate their estimated returns when investing in mutual funds through a Systematic Investment Plan (SIP). It can be used to determine how much an investor will earn by investing in mutual funds through a SIP over a certain period. The calculator considers factors such as the amount of money invested, the frequency of investments, and the expected annual returns. By using the SIP Calculator, investors can determine the amount of money they need to invest in getting the desired returns.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <ReusableCalculator
          title="SIP Calculator"
          inputs={sipInputs}
          calculateResult={calculateSip}
          generateScheduleData={generateSIPSchedule}
          resultTitle = "Total Amount"
          buttonchange = "Calculate SIP"
        />

        {/* Bottom Detailed Section */}
        <section className="pt-0 pb-0 m-0">
          <div className="container">
            <h2 className="font-bold text-2xl mb-2">What is a SIP Investment Return Calculator?</h2>
            <p className="para">
              Are you just getting started with your investment journey in Mutual Funds? Do you want to know how much return you can potentially gain based on your investment budget? Here you can find out how much money you can make in a few years with the help of a SIP Calculator. A SIP Calculator is an online tool that intakes variables including monthly investment capacity, investment duration, and expected rate of return.
            </p>

            <h2 className="font-bold text-2xl mt-6">How do SIP Investment Plan Calculator Work?</h2>
            <p className="para">
              The SIP Calculator’s primary function is to show you an estimation based on your inputs on your monthly funding proportion, number of years, and desired rate of interest. These calculations are computed in real-time and show varied results even when tinkering with the values.
            </p>

            <h4 className="font-bold text-xl mt-6">The input required for the calculation:</h4>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 Monthly Contribution</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 Number of months or years</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹 Expected rate of interest</li>
            </ul>



            <p className="mt-4">The calculation is run through a generic formula:</p>
            <p className="font-semibold">
              Amount A = P [ ( 1 + i ) ^ n : 1 ] * ( 1 + i ) / i
            </p>
            <p>Where,</p>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">🔹A is the Amount receivable</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹P is the principal amount you contribute</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹i is the rate of interest</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹n is the duration</li>
              <li className="border-b border-gray-300 py-2 last:border-none">🔹r is the expected rate of return</li>
            </ul>

            <p className="mt-4">
              Take an example where you invest INR 1,000 per month for 36 months. You expect a 12% annual rate of return (r). You get INR 43,508 at the expiration of the term.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="table-auto w-full border border-white text-center text-sm">
                <thead className="bg-[#0282ba] text-white">
                  <tr>
                    <th className="border border-white px-4 py-2">Monthly Investment</th>
                    <th className="border border-white px-4 py-2">Time Period</th>
                    <th className="border border-white px-4 py-2">Expected ROI</th>
                    <th className="border border-white px-4 py-2">Total Investment</th>
                    <th className="border border-white px-4 py-2">Current value of Investment</th>
                    <th className="border border-white px-4 py-2">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white px-4 py-2">Rs. 1000</td>
                    <td className="border border-white px-4 py-2">3 Years (36 months)</td>
                    <td className="border border-white px-4 py-2">12%</td>
                    <td className="border border-white px-4 py-2">Rs. 36000</td>
                    <td className="border border-white px-4 py-2">Rs. 43508</td>
                    <td className="border border-white px-4 py-2">Rs. 7508</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-xl mt-6">How can a Systematic Investment Plan Calculator help you?</h4>
            <p className="mt-2">
              Systematic Investment Plans (SIP) are a rewarding wager of a part of one’s income that allows them to pitch in a small number of their earnings into an investment such as mutual funds, trading, shares, and bonds only to get a relatively significant return out of it. The SIP Calculator will come in handy for the investor to determine various aspects of their contribution, including the right subscription amount, returns expected, risk tolerance and total earnable amount. The online tool is very user-friendly and makes the computation real-time. Additionally, this tool provides serious investors with the data required to assimilate their investment value.
            </p>

            <h4 className="font-bold text-xl mt-6">What is a SIP (Systematic Investment Plan)?</h4>
            <p className="mt-2">
              A SIP is a regular surrender of monetary assets put away on investments such as mutual funds, shares, trading accounts, or annuities, with the sole intention of making a more significant return towards the end of a specific period. This long-term, low-risk flutter has proven to be generally rewarding and ideal for an individual with a regular income. Unlike making large payments at once, SIPs can be done away with small contributions at regular intervals. Many financial institutions and agencies offer investors their platform and expertise to capitalize on systematic investment opportunities.
            </p>

            <h4 className="font-bold text-xl mt-6">What are the Types of SIP?</h4>
            <p className="mt-2">There are a few different variants of Systematic Investment Plans (SIPs). These include top-up SIPs, flexible SIPs, and perpetual SIPs.</p>

            <h4 className="font-bold text-lg mt-4">SIP Top-up</h4>
            <p className="mt-2">
              It is an incredible opportunity for individuals who have received an income raise and want to increase their investment for a particular month. The SIP top-up feature allows the investor to make an extra payment to reach their income goals faster. As more investment means more returns, this feature helps investors with additional income-earning opportunities. For example, if a user contributes INR 500 per month and wants to invest an additional INR 500 to top up the amount.
            </p>

            <h4 className="font-bold text-lg mt-4">Flexible SIP</h4>
            <p className="mt-2">
              Another great way to invest is for individuals who have a dynamic income. The Flexible SIP feature allows users to invest in different amounts every month. This can be helpful for entrepreneurs and self-employed people who want to invest but cannot fund the same amount every month. They can balance their investments in the long run by averaging their contributions.
            </p>

            <h4 className="font-bold text-lg mt-4">Perpetual SIP</h4>
            <p className="mt-2">
              Every investor is different with different goals. Some like smaller durations, whereas others do not so much. With a perpetual Systematic Investment Plan, users can subscribe to the plans for a more extended period. Once the subscriber is content with the return amount, they can redeem their earnings.
            </p>

            <h4 className="font-bold text-xl mt-6">How to invest in SIP?</h4>
            <p className="mt-2">Those pondering about how to start their investment journey in a Systematic Investment Plan can refer to the suggestions provided below:</p>
            <ul className="ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Locate the right investment option in Mutual Funds:</strong> Various entities offer mutual fund solutions in the market. Decide on a mutual fund that outlines your goals.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Make an application laying down your basic details:</strong> Complete your ‘Know Your Customer’ by submitting various government-approved documents and getting registered.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Select the term:</strong> You will need to select an investment period that can range from around six months to whenever you want to stop investing.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Assess the SIP type:</strong> Do you want to invest flexibly, or do you want to make a regular payment? Do you want to invest for a lifetime or a particular period? Decide what you want and apply accordingly.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Join the investing journey:</strong> Pick a date. Invest regularly.
              </li>
            </ul>
            <p className="mt-2">It is advisable to invest for the entirety of its tenure because SIPs are an easy and uncomplicated strategy to ensure long-term wealth.</p>

            <h4 className="font-bold text-xl mt-6">Benefits of Investing in SIP?</h4>
            <p className="mt-2">Investing through SIPs is a great way to create a reasonably ample amount of wealth that is usually risk-free and convenient. To enumerate a few of these benefits:</p>
            <ul className=" ml-6 mt-2 space-y-2">
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>SIPs apply value investment principle to regular investing:</strong> Investing through SIP can get your value to average out with the dynamic market price. One can invest as much when the market rates are plunging and limit when it’s ascending. This will majorly balance out the total contribution, which would be immune from market fluctuations. In this scenario, returns are still guaranteed.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Compounding aspect of the investment:</strong> The interesting process in which the returns on a principal amount are added to the computation of returns in the upcoming cycle. The income towards the end is exponentiated, allowing the investor to earn more.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>For instance:</strong> when you put away INR 1000 in a SIP with an interest rate of 10% per annum, you get back interest of INR 100 by year-end. From the second year onwards, the interest is not calculated on INR 1000 but on INR 1100. This, in turn, gives a return of INR 110 instead of INR 100. This increment over time becomes significantly large.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Easy and investor-friendly:</strong> Investing in a SIP plan is an easy process. Make use of the auto-debit option that most banks provide. Here, the amount that needs to be paid is generally given up by the bank, adding it to the investment pool. The invested amount can also be monitored by SIP-provided apps.
              </li>
              <li className="border-b border-gray-300 py-2 last:border-none">
                🔹 <strong>Perfect device for financial planning:</strong> Whatever your life goals may be, Systematic Investment Plans are a great way to secure your future financially. So start brainstorming your goals, and consult a financial expert who can guide you through the best schemes for investment plans that suit your requirements.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SipCalculator;
