import Calculator from '../../components/ReusableChartCalculator';


const SavingAcctCalculator = () => {
    const Inputs = [
        {
            name: 'loanAmount',
            label: 'My Saving Amount',
            defaultValue: 100000,
            min: 10000,
            max: 10000000,
            prefix: '₹ ',
            suffix: ''
        },
        {
            name: 'loanTerm',
            label: 'Tenure (Years)',
            defaultValue: 2,
            min: 1,
            max: 30,
            suffix: ' Years'
        },
        {
            name: 'interestRate',
            label: 'Rate Of Interest',
            defaultValue: 3,
            min: 1,
            max: 30,
            suffix: ' %'
        },
    ];
    const calculateSavings = ({ loanAmount, loanTerm, interestRate }) => {
  const p = Number(loanAmount) || 0;
  const t = Number(loanTerm) || 0;
  const r = Number(interestRate) || 0;

  const interest = (p * r * t) / 100;
  const total = p + interest;

  return {
    principal: Math.round(p),
    interest: Math.round(interest),
    total: Math.round(total),
    emi: Math.round(total),
  };
};


    const generateSavingsSchedule = ({ loanAmount, loanTerm, interestRate }) => {
        const p = parseInt(loanAmount, 10);
        const t = parseInt(loanTerm, 10);
        const r = parseFloat(interestRate);

        const totalInterest = (p * r * t) / 100;
        const yearlyInterest = totalInterest / t;
        const yearlyPrincipal = p / t;

        let cumulativeInterest = 0;
        let cumulativePrincipal = 0;
        const schedule = [];

        for (let year = 1; year <= t; year++) {
            cumulativeInterest += yearlyInterest;
            cumulativePrincipal += yearlyPrincipal;

            schedule.push({
                year,
                principal: Math.round(yearlyPrincipal),
                interest: Math.round(yearlyInterest),
                totalInterest: Math.round(cumulativeInterest),
                totalPrincipal: Math.round(cumulativePrincipal),
                totalValue: Math.round(cumulativePrincipal + cumulativeInterest),
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
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Savings Account Interest Calculator</h1>
                        <p className="text-lg leading-relaxed"> savings account interest calculator allows you to determine how much interest your savings can earn over time. Your prospective balance growth is displayed when you enter details like your initial deposit, interest rate, and term. This tool makes comparing and understanding various savings accounts simple. It helps you organise your finances more effectively and see how much money you can save. It also enables you to decide where to put your money.</p>
                    </div>
                </section>

                <Calculator title="Saving Account Interest Calculator" inputs={Inputs} calculate={calculateSavings} generateScheduleData={generateSavingsSchedule} resultTitle = "Total Amount" buttonchange = "Calculate Savings Account"/>

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h4 className="font-bold text-xl mt-6">What is a Savings Account Interest Calculator?</h4>
                        <p className="mt-2">
                            The savings interest rate calculator is software that helps individuals calculate the estimated interest they can earn on their savings. The process includes certain parameters, which usually include the deposit amount, the interest rate offered by the bank, and the frequency of interest compounding.
                        </p>

                        <h4 className="font-bold text-xl mt-6">Savings Account Interest Calculation</h4>
                        <p className="mt-2">
                            A few inputs from the user will be required to calculate savings account interest. The calculator then uses a formula to calculate the interest that can be earned on a savings balance over time. Here’s how it works:
                        </p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Initial Deposit/Principal Amount</li>
                            <li>Interest Rate</li>
                            <li>Compounding Frequency</li>
                            <li>Duration</li>
                        </ul>

                        <p className="mt-2">
                            Calculation Formula: Here, a savings interest calculator with compound interest will be used in the formula:
                        </p>
                        <strong className="block text-lg mt-2">A = P (1 + r/n)^(nt)</strong>

                        <p className="mt-2">
                            <strong>Where:</strong>
                        </p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>A = Total amount (including interest)</li>
                            <li>P = Principal amount (initial deposit)</li>
                            <li>r = Annual interest rate (in decimal form, e.g., 5% = 0.05)</li>
                            <li>n = Number of times the interest is compounded per year</li>
                            <li>t = Time (in years)</li>
                            <li><strong>Result:</strong> The calculator then gives the total balance (principal + interest) at the end of the specified period. Some calculators also show the interest earned separately from the total amount.</li>
                        </ul>
                        <h4 className="font-bold text-xl mt-6">What are Savings Account Interest Rates?</h4>
                        <p className="mt-2">Here are some savings account interest rates of different banks:</p>

                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Bank</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Interest Rate (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">HDFC Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">3.5</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300 text-center">ICICI Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">3.5</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">State Bank of India</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">2.7</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Axis Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">3</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Kotak Mahindra Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">3.5</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Yes Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">4</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">IDFC FIRST Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">4</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Punjab National Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">2.75</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Bank of Baroda</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">2.75</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300 text-center">Canara Bank</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">2.9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="font-bold text-xl mt-6">How a Savings Account Interest Calculator Works: Key Inputs Explained</h4>
                        <p className="mt-2">
                            Here’s an explanation of the savings account interest calculator’s mechanism and the input fields:
                        </p>

                        <h4 className="font-bold text-lg mt-6"><strong>Mechanism</strong></h4>
                        <p className="mt-2">
                            The savings interest calculator with compound interest uses the compound interest formula to compute the interest earned on your savings over time. The calculator takes specific inputs and applies the formula to show how the savings will grow. The calculation includes the principal amount and the accumulated interest over the specified period.
                        </p>

                        <h4 className="font-bold text-lg mt-6"><strong>Input Fields</strong></h4>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Principal/Initial Deposit: The starting amount of money you save in the account.</li>
                            <li>Interest Rate (%): The annual interest rate offered by the bank on the savings account. This should be entered as a percentage (e.g., 4%).</li>
                            <li>Compounding Frequency: This refers to how often the interest is added to the savings. Common options include:
                                <ul className="ml-6 space-y-1">
                                    <li>Daily</li>
                                    <li>Monthly</li>
                                    <li>Quarterly</li>
                                    <li>Annually</li>
                                </ul>
                            </li>
                            <li>Time Period: The length of time for which the interest will be calculated. For example, you may want to know how much interest you’ll earn after 1 year, 5 years, or longer.</li>
                            <li>Additional Contributions (Optional): Some calculators allow you to input additional contributions, showing how regularly adding more to your savings will affect the total balance over time.</li>
                        </ul>


                        <h4 className="font-bold text-lg mt-6">Step-by-step Guide to Using the Calculator</h4>

                        <p className="mt-2">
                            Here’s a step-by-step guide to using a Savings Account Interest Calculator:
                        </p>

                        <h5 className="font-bold text-md mt-4"><strong>Step 1: Input the Principal Amount</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Enter the initial deposit or the starting amount you want to save. This is the amount you’re putting in your savings account.</li>
                            <li>Example: ₹50,000.</li>
                        </ul>
                        <h5 className="font-bold text-lg mt-6"><strong>Step 2: Enter the Interest Rate</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Input the annual interest rate offered by the bank. This rate is usually expressed as a percentage.</li>
                            <li>Example: 4% (if your bank offers 4% per annum on savings accounts).</li>
                        </ul>

                        <h5 className="font-bold text-lg mt-6"><strong>Step 3: Choose the Compounding Frequency</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Select how often the interest is compounded. Banks in India usually offer quarterly or monthly compounding for savings accounts. The more frequent the compounding, the higher your returns.</li>
                            <li><strong>Savings Account Interest Calculator with Monthly Deposits:</strong></li>
                            <li>Monthly: 12 times a year.</li>
                            <li>Quarterly: 4 times a year.</li>
                            <li>Annually: 1 time a year.</li>
                        </ul>

                        <h5 className="font-bold text-lg mt-6"><strong>Step 4: Input the Time Period</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Enter the number of years you plan to leave your money in the account. This defines how long the interest will accumulate.</li>
                            <li>Example: If you plan to keep your savings for 5 years, input 5.</li>
                        </ul>

                        <h5 className="font-bold text-lg mt-6"><strong>Step 5: Additional Contributions (Optional)</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Some calculators have an option to add monthly or yearly contributions. If you plan to add more money to your account regularly, enter the contribution amount.</li>
                            <li>Example: ₹2,000 every month.</li>
                        </ul>

                        <h5 className="font-bold text-lg mt-6"><strong>Step 6: Review the Calculation</strong></h5>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Once you’ve entered all the inputs, press the “Calculate” or “Submit” button. The savings interest rate calculator for long-term savings will show:</li>
                            <li>The total amount at the end of the time period, which includes the principal and the interest.</li>
                            <li>Interest earned during the selected period.</li>
                        </ul>

                        <h4 className="font-bold text-lg mt-6"><strong>Benefits of Using the Savings Account Interest Calculator</strong></h4>
                        <p className="mt-2">
                            Here are the benefits of using the savings account interest calculator:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Quick and Easy Calculations: </strong>It simplifies the process of calculating interest, allowing you to get results quickly without needing to apply complex formulas manually.</li>
                            <li><strong>Accurate Projections:</strong>The calculator provides precise results based on the inputs you provide, helping you avoid errors in your calculations.</li>
                            <li><strong>Comparison of Different Accounts:</strong>You can easily compare various savings accounts to choose the best returns by inputting different interest rates and compounding frequencies.</li>
                            <li><strong>Helps in Planning:</strong> A savings account interest calculator for long-term savings enables better financial planning by allowing you to estimate future savings growth over specific periods. This helps in setting realistic savings goals.</li>
                            <li><strong>Customisable Inputs:</strong>The savings interest rate calculator allows you to adjust parameters like deposit amount, interest rate, and duration.</li>
                            <li><strong>Free and Convenient:</strong>Most calculators, such as the savings interest rate calculator for high-yield savings, are available online for free. These are accessible to anyone looking to gain more interest on saving.</li>
                        </ul>

                        <h4 className="font-bold text-lg mt-6"><strong>Tips to Increase Savings Account Interest</strong></h4>
                        <p className="mt-2">Here are some useful tips to help increase the interest earned on your savings account:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Choose High-Interest Accounts:</strong> Use a savings interest rate calculator for high-yield savings to research and select savings accounts that offer competitive interest rates. Banks and financial institutions may offer different rates, so compare them to find the best option.</li>
                            <li><strong>Maintain a Higher Balance:</strong>Some banks offer tiered interest rates, meaning the more you save, the higher the interest rate you might earn. Keeping a higher balance in your account can help you take advantage of this.</li>
                            <li><strong>Opt for Long-Term Savings Accounts: </strong>Certain savings accounts, like fixed deposits or long-term high-interest savings accounts, may offer better interest rates if you leave your money untouched for longer.</li>
                            <li><strong>Look for Special Promotions:</strong>Banks often run promotional offers with higher interest rates for new customers or specific accounts. Take advantage of these limited-time offers to boost your savings.</li>
                            <li><strong>Avoid Withdrawals:</strong>Some accounts offer better interest rates when no withdrawals are made. Minimising withdrawals helps ensure that your interest accrues on the highest possible balance.</li>
                            <li><strong>Automate Savings:</strong>Set up automatic transfers to your savings account from your current account. Regular deposits can help maintain or increase the account balance, increasing interest earnings. The savings account interest calculator with monthly deposits can help you see how regular contributions affect your savings.</li>
                        </ul>

                        <h4 className="font-bold text-lg mt-6"><strong>Tips for Maximizing Your Savings</strong></h4>
                        <p className="mt-2">Here are some practical tips to take your savings to maximum:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Create a Budget:</strong>Track your income and expenses to identify areas where you can cut back. Set clear savings goals and allocate a specific portion of your income towards monthly savings.</li>
                            <li><strong>Automate Your Savings:</strong>Set up automatic transfers from your current account to your savings account. This ensures consistent contributions without the temptation to spend the money.</li>
                            <li><strong>Build an Emergency Fund:</strong>Set aside savings for emergencies, ideally enough to cover 3-6 months of living expenses. This will protect your regular savings from unexpected costs.</li>
                            <li><strong>Take Advantage of High-Interest Accounts:</strong>Look for savings accounts offering the best interest rates. Consider options like fixed deposits, money market accounts, or online-only savings accounts that may offer better rates than traditional ones.</li>
                            <li><strong>Reduce Unnecessary Expenses:</strong>Review your spending and eliminate or reduce non-essential purchases, like subscriptions you don’t use or luxury items. Direct these savings into your account.</li>
                            <li><strong>Pay Yourself First:</strong>Treat savings as a non-negotiable expense. When you receive income, transfer a portion of it to your savings before spending it on anything else.</li>
                        </ul>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default SavingAcctCalculator;