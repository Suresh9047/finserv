import ReusableCalculator from '../../components/ReusableCalculator';


const inputs = [
    {
        label: 'Monthly Investment (₹)',
        name: 'investment',
        min: 500,
        max: 100000,
        step: 500,
        defaultValue: 5000,
    },
    {
        label: 'Expected Return Rate (p.a %)',
        name: 'roi',
        min: 1,
        max: 30,
        step: 0.1,
        defaultValue: 12,
    },
    {
        label: 'Time Period (Years)',
        name: 'years',
        min: 1,
        max: 30,
        step: 1,
        defaultValue: 10,
    },
];

const calculateMF = (values) => {
  const P = values.investment;
  const r = values.roi / 100 / 12;
  const n = values.years * 12;

  if (P > 0 && r > 0 && n > 0) {
    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const profit = FV - totalInvestment;

    return {
      main: FV,
      breakdown: {
        'Total Investment': totalInvestment,
        'Estimated Returns': profit,
        'Maturity Value': FV,
      },
    };
  }

  return {
    main: 0,
    breakdown: {
      'Total Investment': 0,
      'Estimated Returns': 0,
      'Maturity Value': 0,
    },
  };
};

// Schedule generator logic
const generateMFSchedule = (values) => {
  const monthlyInvestment = parseFloat(values.investment) || 0;
  const annualRate = parseFloat(values.roi) || 0;
  const years = parseInt(values.years) || 0;

  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  let balance = 0;
  let totalInvested = 0;

  const schedule = [];
  const currentDate = new Date();

  for (let month = 1; month <= totalMonths; month++) {
    const interest = balance * monthlyRate;
    balance += interest + monthlyInvestment;
    totalInvested += monthlyInvestment;

    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + month - 1);
    const year = date.getFullYear();
    const monthName = date.toLocaleString('default', { month: 'long' });

    schedule.push({
      year,
      month: monthName,
      principal: monthlyInvestment,
      interest: interest,
      emi: monthlyInvestment + interest,
      balance: balance,
      paidToDate: (totalInvested / (monthlyInvestment * totalMonths)) * 100,
    });
  }

  return schedule;
};



const MutualFundCalculator = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">

                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Mutual Fund Calculator</h1>
                        <p> Mutual fund calculator helps investors to determine the future value and returns from mutual fund investment. The Mutual Fund Return Calculator requires you to select between SIP facilities or lump sum facilities. After that, the MF calculator requires you to put the amount you want to invest. You can choose between Mutual Fund Lumpsum calculator and Mutual Fund Investment calculator as per your preference.</p>
                    </div>
                </section>


                <ReusableCalculator
                    title="Mutual Fund Calculator"
                    inputs={inputs}
                    calculateResult={calculateMF}
                    generateScheduleData={generateMFSchedule}
                    resultTitle = "Total Amount"
                    buttonchange = "Calculate MF"

                />

                <section className="pt-0 pb-0 m-0">
                    <div className="container">

                        <h2 className="font-bold text-xl mb-2">What is a Mutual Fund?</h2>
                        <p className="para">
                            Mutual Funds are diversified funds coming in from various sources of investors that are pooled up for the purpose of capital appreciation.
                            The funds are used in financial-gain instruments such as stocks, shares, bonds, and various other securities. These securities are expected
                            to give greater returns in additional market value calculated over the securities price as per the date invested in. The difference is generally
                            the added earning for an investor in excess of their investment. Even though mutual funds are dodgy instruments, they are still considered to be
                            relatively lower in risk than their counterparts. This makes them an attractive candidate for experienced and beginner investors alike.
                        </p>

                        <h2 className="font-bold text-xl mb-2">Risk Management</h2>
                        <p className="para">
                            Of the several benefits of investing in a mutual fund, the one benefit that stands out is its Risk Management. The funds being managed by
                            Asset Management Companies that comprise hedge fund managers and mutual fund portfolio managers, the risks are pre-calculated based on the
                            market performance of the companies’ shares and stocks that is in question. The historical share prices are studied and forecasts are derived
                            beforehand, and these fund managers use the pooled money to distribute amongst these handpicked securities.
                        </p>
                        <h2 className="font-bold text-xl mb-2">Withdrawal Flexibility</h2>
                        <p className="para">
                            Another great reason to consider mutual funds is their Withdrawal Flexibility. The highly liquid mutual funds offer their investors the
                            flexibility to redeem their money whenever they require. Although it is highly advised to keep the money invested for the long term to
                            maximise the profit margin, it is still possible that someone may need the money for emergency reasons.
                        </p>

                        <h2 className="font-bold text-xl mb-2">Diversity</h2>
                        <p className="para">
                            Mutual funds are invested in such a manner that the rates balance out the market price fluctuations by being diversified. It means that the
                            mutual fund contributions are ventured into several different company shares which helps out with the dynamics. When one share price is down,
                            there could be other ones that are high. Eventually balancing out the whole in general.
                        </p>
                        <h2 className="font-bold text-xl mb-2">Small Investments</h2>
                        <p className="para">
                            Asset Management Companies allow customers to invest in small amounts as well. This paves the way for novice and inexperienced investors to
                            give the financial vehicle a chance. A minimal amount can also yield a fairly decent return over time. Another great option that involves a
                            lesser investment amount is the Systematic Investment Plan (SIP).
                        </p>

                        <h2 className="font-bold text-xl mb-2">Accessibility</h2>
                        <p className="para">
                            There is an added advantage of accessibility when it comes to mutual funds. There are various agencies and companies all around that help in
                            investing in mutual funds. The brokers, registrars, Asset Management Companies, banks, financial institutions, online websites, etc. are to
                            name a few. With easy availability, customers also get the opportunity to be aware of this tool better.
                        </p>
                        <h2 className="font-bold text-xl mb-2">Suitable for Many Goals</h2>
                        <p className="para">
                            Mutual Funds allow users to be free with goals and choose the investment amount they are comfortable in. One can dream of a house, an easy
                            retirement, a car, a bike, or something short-term. Whatever the case may be, mutual funds are a great tool that can be flexible as per the goals.
                        </p>

                        <h2 className="font-bold text-xl mb-2">Color-Coding as per Risk</h2>
                        <p className="para">
                            Soon after the Securities Exchange Board of India (SEBI) recognised mutual funds, they revamped some policies related to it. Specific colors
                            were assigned to the mutual funds based on their risk factor. For example, the blue colour indicates low risk, yellow indicates medium risk,
                            and brown indicates high risk.
                        </p>

                        <h2 className="font-bold text-xl mb-2">Tax Benefits</h2>
                        <p className="para">
                            The government of India has recognised mutual fund investments as an expense that can be claimed while filing tax returns. Under section 80C
                            of the income tax act, users can claim up to INR 1.5 Lakhs.
                        </p>
                        <h2 className="font-bold text-xl mb-2">Types of Mutual Funds</h2>
                        <p className="para">
                            There are various types of mutual funds and that can get overwhelming. Investors have quite a job to do in terms of understanding what works best for them.
                            It should be mostly the personal goals that should direct investors’ hunt for the ideal mutual fund. Furthermore, it also helps to understand the personal financial
                            situation so as to assess the amount that can be supplied consistently.
                        </p>
                        <p className="para">
                            Mutual funds are distinguished among a few categories including composition, capital, investment, specialty, and risk. These categories cater to various subtypes as well.
                            Some of the most common and popular kinds of mutual funds include equity mutual funds, money market funds, debt funds, and index funds.
                        </p>

                        <h2 className="font-bold text-xl mb-2">Mutual Funds Based on Capital</h2>
                        <p className="para">
                            Some of the mutual funds based on asset groups include the following:
                        </p>
                        <ul className="pl-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Equity Funds:</strong> These are some of the highly sought-after mutual funds that are viewed as high-risk high-return mutual funds. The monetary resources are allocated to the equity shares and bonds of a company.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Debt Funds:</strong> A safe tool that ensures a fixed income. Debt Funds are mutual funds that are invested in fixed finance generating securities such as commercial papers, corporate bonds, T-bills, and government securities. The investor is liable to pay taxes for fund generation above INR 10,000 as there is no tax deducted at the source for this type of scheme.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Balanced Hybrid Funds:</strong> A mutual fund scheme where the capital is allocated in two ways. Some ratios of the funds go towards debts and some towards equity. Together, these are known as balanced funds or hybrid funds. The main motive of the investor is to diversify their portfolio and by doing so can immune themselves from the market price fluctuations.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Money Market Funds:</strong> These are generally invested for short-terms with low to moderate returns pooled with low securities. The money market mutual fund schemes are usually allocated to the government debts such as treasury bills and municipal bonds to name a few.</li>
                        </ul>
                        <h2 className="font-bold text-xl mb-2">Mutual Funds based on Investments</h2>
                        <p className="para">
                            Some interesting mutual funds based on investments are as follows:
                        </p>
                        <ul className="pl-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Growth funds:</strong>   Risky investment options with high returns is usually the case with growth mutual funds. Investors use their funds to supply capital on equity stocks. Fund managers primarily look to exponentiate the capital value rather quickly. </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>ELSS:</strong>ELSS or Equity Linked Savings Scheme is a type of mutual fund that offers tax benefits under the Income Tax Act. Through ELSS, investments are made in equity shares and based on the market performance of the funds, these schemes also offer higher returns.  </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Pension Funds:</strong> These are long-term funds that supplement a retirement income. The pension funds are invested in diverse portfolios to manage the market dynamics and cater to provide balanced returns overall. The returns can be taken out in part or in lump sum as well.   </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Fixed Maturity Funds:</strong>These are duration-specific funds that are invested in debts and government bonds. The returns can be collected after the maturity period is over, and in some cases, before the date as well.  </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Income Funds:</strong>A stable source for safe investing has to be Income funds. They are generally allocated on fixed income schemes such as bonds. Even though the risk and returns are relatively lower, the income funds assure value protection.  </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹<strong>Capital Protection Funds:</strong>The funds that are to be invested are bifurcated among fixed-income funds and equity bonds. The principal amount gets protection from the market rates in a way that ensures the originally invested capital returns to the owner. The part where equity is involved creates further gains.  </li>
                        </ul>
                        <p className="para">
                            Furthermore, there are certain specialty-based mutual funds that are highly instrumental in creating wealth over time. Some of these mutual funds include sector funds, index funds, funds of funds, emerging market funds, international funds, global funds, and real estate funds.
                        </p>

                        <h2 className="font-bold text-xl mb-2">What is a Mutual Fund Calculator? </h2>
                        <p className="para">
                            A mutual fund calculator is an online computing tool that intakes investment values and related numbers to generate an anticipated return amount. Although the tool is only meant to provide an idea-based figure, it is still imperative to use the calculator for planning ahead. The tool works efficiently and offers a chance to anticipate and work in advance with the financial allocations. Users will have an in-depth understanding of where they stand in terms of their monetary capacity and can construct decisions based on the same.
                        </p>

                        <h2 className="font-bold text-xl mb-2">How Does a Mutual Fund Calculator Help You?</h2>
                        <p className="para">
                            Are you confused about how much capital to invest? Do you have a tight budget? Are you a salaried person or a businessman who’s income is dynamic? What are your life goals? These are some of the questions that generally perplex a person while trying to decide on an investment step. A mutual fund calculator can help you decide on exactly that. How? Let’s say you want to explore a few different options of budgets with varied interest rates and maturity periods. You can make use of the Mutual Fund Calculator to incorporate all these possibilities and the tool will generate the data based on your figures.
                        </p>
                        <p className="para">
                            The data will show how much you will invest and how much gain you will receive at the end of the maturity period. This can give a larger picture of what your financial planning can look like. Consider your income and future expenses before beginning with the investment. Mutual funds do offer the flexibility required to adjust personal expenses.
                        </p>
                        <h2 className="font-bold text-xl mb-2">Mutual Fund Return Calculation with Example</h2>
                        <p className="para">
                            There is a general formula that is used for calculating investment return based on the inputs provided by a mutual fund calculator user. The calculator can be adjusted for users who want to invest regularly with a small amount of money or who want to invest a lump sum straight away. Since the market prices are fluctuating and future prices are only assumed, the values generated from the mutual fund calculator are for references only. The formula for both lump sum and regular contribution is as follows:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-center my-6">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Investment Type</th>
                                        <th className="border border-gray-300 px-4 py-2">Formula</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-gray-100 even:bg-white border border-gray-300">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Lumpsum investment</td>
                                        <td className="border border-gray-300 px-4 py-2">A = P (1 + R/100) ^ T</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white border border-gray-300">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">Systematic Investment</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            A = S [ (1 + I) ^ t - 1] × (1 + I) / I
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="para">Here, <strong>A</strong> is the Total Amount after maturity</p>
                        <p className="para"><strong>P</strong> is the Principal Amount</p>
                        <p className="para"><strong>R</strong> is the anticipated rate of interest</p>
                        <p className="para"><strong>T</strong> is the Time or duration in years</p>
                        <p className="para">In the second formula,</p>
                        <p className="para"><strong>A</strong> is the Total Amount after maturity</p>
                        <p className="para"><strong>S</strong> is the Systematic Contributions</p>
                        <p className="para"><strong>I</strong> is the rate of interest</p>
                        <p className="para"><strong>T</strong> is the time or duration in months</p>
                        <p className="para">
                            For example, if one invests a monthly amount of INR 2000, for a period of 10 years with the expected rate of return at <strong>12%</strong>. <strong>The Principal Amount</strong> will be INR 2,40,000 and the total amount after maturity will be INR 4,64,678. The year-wise breakdown is as shown below.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-center my-6">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Year</th>
                                        <th className="border border-gray-300 px-4 py-2">Principal Amount in INR</th>
                                        <th className="border border-gray-300 px-4 py-2">Returns in INR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["1st Year", "2000*12 = 24,000", "1,619"],
                                        ["2nd Year", "48,000", "6,486"],
                                        ["3rd Year", "72,000", "15,015"],
                                        ["4th Year", "96,000", "27,670"],
                                        ["5th Year", "1,20,000", "44,973"],
                                        ["6th Year", "1,44,000", "67,514"],
                                        ["7th Year", "1,68,000", "95,958"],
                                        ["8th Year", "1,92,000", "1,31,053"],
                                        ["9th Year", "2,16,000", "1,73,643"],
                                        ["10th Year", "2,40,000", "2,24,678"],
                                    ].map(([year, principal, returns], index) => (
                                        <tr
                                            key={year}
                                            className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                                        >
                                            <td className="border border-gray-300 px-4 py-2">{year}</td>
                                            <td className="border border-gray-300 px-4 py-2">{principal}</td>
                                            <td className="border border-gray-300 px-4 py-2">{returns}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default MutualFundCalculator;
