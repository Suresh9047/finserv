import Calculator from '../../components/ReusableChartCalculator';


const ForeclosureCalculator = () => {

    const inputs = [
        { name: 'loanAmount', label: 'Loan Amount (₹)', min: 1000, max: 1000000, defaultValue: 1000000, step: 1000 },
        { name: 'loanTerm', label: 'Tenure (Years)', min: 1, max: 30, defaultValue: 10, step: 1 },
        { name: 'interestRate', label: 'Annual Interest Rate (%)', min: 1, max: 20, defaultValue: 8, step: 0.1 }
    ];

    const calculate = ({ loanAmount, interestRate, loanTerm }) => {
        const months = loanTerm * 12;
        const monthlyRate = interestRate / 12 / 100;

        const emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

        const total = emi * months;
        const interest = total - loanAmount;

        return {
            principal: loanAmount,
            emi: Math.round(emi),
            interest: Math.round(interest),
            total: Math.round(total),
        };
    };


    const generateForeclosureSchedule = (values) => {
        const loanAmount = values.loanAmount;
        const loanTerm = values.loanTerm * 12;
        const monthlyRate = values.interestRate / 1200;

        const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);

        let balance = loanAmount;
        let cumulativeInterest = 0;
        const schedule = [];

        for (let month = 1; month <= loanTerm; month++) {
            const interest = balance * monthlyRate;
            const principal = emi - interest;
            balance -= principal;
            cumulativeInterest += interest;

            schedule.push({
                month,
                emi: emi,
                principal: principal,
                interest: interest,
                totalInterest: cumulativeInterest,
                balance: balance > 0 ? balance : 0
            });

            if (balance <= 0) break;
        }

        return schedule;
    };




    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Loan Foreclosure Calculator</h1>
                        <p className="text-lg leading-relaxed">A loan foreclosure calculator is a valuable tool for anyone with a loan. It helps you to understand the costs and benefits of paying off your loan early. Thus, you can determine whether it makes sense to pay off your loan sooner rather than later. To help you make a more informed decision,OM Finserv presents a detailed overview of the foreclosure calculator. We primarily explain what a loan foreclosure calculator is, how the calculator works, the key factors to consider during loan foreclosure, and certain tips to maximise your savings. Let’s scroll down to learn more.</p>
                    </div>
                </section>

                <Calculator title="Foreclosure Calculator" inputs={inputs} calculate={calculate} generateScheduleData={generateForeclosureSchedule} resultTitle = "EMI Amount"  buttonchange = "Calculate Foreclosure" />

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mt-6">Step-By-Step Guide to Using the Calculator</h2>
                        <p className="mt-2">
                            Here’s a step-by-step guide to using the loan foreclosure calculator in India:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Locate the Calculator:</strong> Visit the Finserv website and select the ‘Foreclosure Calculator’ from the loan calculator section.</li>
                            <li><strong>Enter Loan Amount:</strong> Input the total loan amount (principal) you borrowed from the bank or financial institution.</li>
                            <li><strong>Enter Loan Tenure:</strong> Provide the total duration of the loan (in months or years), as agreed during loan disbursement.</li>
                            <li><strong>Interest Rate:</strong> Input the interest rate applicable to your loan, as mentioned in your loan agreement.</li>
                            <li><strong>EMI Paid So Far:</strong> Enter the total number of EMIs (Equated Monthly Installments) you’ve already paid towards your loan.</li>
                            <li><strong>Prepayment Penalty:</strong> Provide the prepayment fee (if applicable), as some lenders may charge additional fees for loan foreclosure.</li>
                            <li><strong>Click ‘Calculate’:</strong> Once all fields are filled, click the ‘Calculate’ button to process the results.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mt-6">Explanation of Input Fields and Output Results</h2>
                        <p className="mt-2">Here is the explanation of Input Fields and Output Results:</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Loan Amount:</strong> The initial sum of money borrowed from the lender.</li>
                            <li><strong>Interest Rate:</strong> The rate of interest applied annually to the loan amount.</li>
                            <li><strong>Tenure:</strong> The total time period you’ve agreed upon to repay the loan.</li>
                            <li><strong>Number of EMI Paid:</strong> The total monthly instalments you’ve paid.</li>
                            <li><strong>Pre-payment Penalty:</strong> A fee the lender charges for repaying the loan before the agreed tenure ends.</li>
                        </ul>
                        <p className="mt-4 font-semibold">
                            The output results will typically show as follows:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Foreclosure Amount:</strong> The total amount you must pay to close the loan completely.</li>
                            <li><strong>Monthly EMI:</strong> The fixed amount you pay each month to repay the loan.</li>
                            <li><strong>Interest Paid:</strong> The total interest you’ve already paid on the loan up to the foreclosure date.</li>
                            <li><strong>Interest Saved:</strong> The interest you avoid paying as you foreclose the loan early.</li>
                            <li><strong>Interest before Foreclosure:</strong> The total interest you would pay over the entire loan term if you don’t foreclose.</li>
                        </ul>
                        <div>
                            <h2 className="font-bold text-2xl mt-6">Loan Foreclosure Calculation Formula</h2>
                            <p className="mt-2">
                                The Loan Foreclosure Calculation Formula helps you estimate how much you will save by foreclosing your loan early. The formula considers the principal amount, interest rate, already paid instalments, and any penalties for closing the loan ahead of schedule.
                            </p>
                            <p className="mt-2">
                                Here’s a breakdown of the components involved in loan foreclosure calculation:
                            </p>

                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                                <li>
                                    <strong>Outstanding Balance:</strong> This is the amount still unpaid at the time of foreclosure. It can be calculated using:
                                    <br />
                                    Outstanding Balance = Loan Amount − Principal Paid Till Date
                                </li>
                                <li>
                                    <strong>Interest Savings:</strong> One of the main benefits of foreclosing a loan is saving on future interest payments. The savings can be calculated as:
                                </li>
                            </ul>

                            <p className="mt-2">
                                Interest Savings = Future Interest Payable − Prepaid Interest (if any)
                            </p>

                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                                <li>
                                    <strong>Penalty Charges:</strong> Lenders often charge a penalty for foreclosing a loan early, which is typically a percentage of the outstanding balance. It can be calculated as:
                                </li>
                            </ul>

                            <p className="mt-2">
                                Penalty Charges = Outstanding Balance × Penalty Rate
                            </p>

                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                                <li>
                                    <strong>Total Payable Amount:</strong> This is the total amount you will need to pay to foreclose the loan, including any penalties. It is calculated as:
                                </li>
                            </ul>

                            <p className="mt-2">
                                Total Payable Amount = Outstanding Balance + Penalty Charges.
                            </p>

                            <h2 className="font-bold text-2xl mt-6">What Is the Foreclosure Month?</h2>
                            <p className="mt-2">
                                The foreclosure month refers to the specific point in your loan tenure when you close the loan before the scheduled tenure ends. Choosing the right foreclosure month is important because foreclosing earlier in the loan period lets you save more on interest payments. I.e., the sooner you act, the greater the savings. However, lenders may apply penalties for closing the loan early, which can impact the overall savings. Using a loan foreclosure calculator helps you identify the optimal time within your loan tenure to foreclose, allowing you to maximise savings while keeping penalties to a minimum.
                            </p>

                            <h2 className="font-bold text-2xl mt-6">Charges for Foreclosing a Loan?</h2>
                            <p className="mt-2">
                                When you foreclose a loan, many lenders charge a penalty. This penalty is usually a small percentage of the remaining loan amount or a fixed fee. The penalty rate can differ based on several factors as follows:
                            </p>
                        </div>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>
                                <strong>Type of loan:</strong> The penalty for foreclosing a loan varies by type. For example, home loans often have lower foreclosure charges than personal or car loans. Understanding your loan type helps you estimate potential penalties accurately.
                            </li>
                            <li>
                                <strong>Lender’s policy:</strong> Each lender has unique rules regarding foreclosure charges. Some may charge a fixed fee, while others apply a percentage of the remaining loan amount. It’s important to review your lender’s specific foreclosure policies to avoid unexpected costs.
                            </li>
                            <li>
                                <strong>Remaining loan tenure:</strong> The penalty can also depend on how much time is left on your loan. In certain cases, lenders reduce the foreclosure penalty if the loan is almost paid off. The shorter the remaining tenures, the lower the penalty fees might be.
                            </li>
                        </ul>

                        <p className="mt-2">
                            Understanding these charges is important because they can reduce the money you save by foreclosing. A Loan Foreclosure Calculator with a Prepayment Option can help you estimate these costs and decide whether foreclosure is a good option for you.
                        </p>

                        <h2 className="font-bold text-2xl mt-6">Home Loan Foreclosure Fees & Charges of Banks</h2>
                        <p className="mt-2">
                            Find the detailed fees and charges for foreclosing home loans from different banks listed below.
                        </p>
                        <div className="overflow-x-auto mt-4 mb-4 text-center">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-center border border-gray-300">Bank Name</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Preclosure Charges</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Prepayment Charges</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">HDFC LTD.</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Indiabulls</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Axis Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">DBS Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Aditya Birla Housing Finance Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">No charges for individual borrowers; 2% of the outstanding principal for non-individual borrowers.</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Kotak Mahindra Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Yes Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil for floating rates; 4% of outstanding principal for fixed rates</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil for floating rates; 4% of outstanding principal for fixed rates</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">South Indian Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Karur Vysya Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Tamilnad Mercantile Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Dhanlaxmi Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">As per the terms of the bank</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Federal Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil to 3% of the outstanding balance</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil to 3% of the outstanding balance</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Jammu &amp; Kashmir Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="font-bold text-xl mb-4">Top Public Banks Preclosure Charges</h4>

                        <div className="overflow-x-auto mb-4 text-center">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-center border border-gray-300">Bank Name</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Preclosure Charges</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Prepayment Charges</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">PNB Housing Finance Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">No charges for individual borrowers; 2% of the outstanding principal for non-individual borrowers.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Oriental Bank of Commerce</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">State Bank of India</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Andhra Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Bank of Baroda</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Bank of India</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Bank of Maharashtra</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Canara Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Dena Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">IDBI Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Indian Overseas Bank</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Central Bank of India</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className="font-bold text-xl mb-4">NBFC Banks Preclosure Charges & Fee</h4>

                        <div className="overflow-x-auto text-center mb-4">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-center border border-gray-300">Bank Name</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Preclosure Charges</th>
                                        <th className="px-4 py-2 text-center border border-gray-300">Prepayment Charges</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">Sundaram Home Finance Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">DHFL</td>
                                        <td className="px-4 py-2 border border-gray-300">No charges for individual borrowers; 3% of the outstanding principal for non-individual borrowers.</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil for individual borrowers.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">LIC Housing Finance Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil to 2% of the prepaid loan amount</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil to 2% of the prepaid loan amount</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">India Shelter Finance Corporation</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">AAVAS Financiers Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 border border-gray-300">Reliance Home Finance Limited</td>
                                        <td className="px-4 py-2 border border-gray-300">2% to 5% of the outstanding principal</td>
                                        <td className="px-4 py-2 border border-gray-300">2% to 5% of the outstanding principal</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2 border border-gray-300">TATA Capital</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil when paid off using own funds</td>
                                        <td className="px-4 py-2 border border-gray-300">Nil when paid off using own funds</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Following are the several factors that can influence your loan foreclosure decision:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Interest Rate:</strong>Loans with higher interest rates can offer greater savings when foreclosed early. The higher the interest, the more money you save by cutting off future interest payments. Closing high-interest loans sooner reduces the total cost of borrowing, making foreclosure an attractive option in such cases.</li>
                            <li><strong>Penalty Charges:</strong>Foreclosing a loan may come with penalty charges, which can vary by lender. These charges could be a percentage of the outstanding loan or a fixed amount. If the penalty is too high, it might reduce or even eliminate the benefits of foreclosure, so it’s crucial to calculate beforehand.</li>
                            <li><strong>Prepayment:</strong>Some loans allow prepayments before foreclosure, which lets you pay part of the principal early. This ideally reduces the outstanding loan amount and lowers your future interest payments. This strategy can help you save on interest and make foreclosing the loan more financially beneficial.</li>
                            <li><strong>Remaining Tenure:</strong>The longer your loan’s remaining tenure, the more interest you can save by foreclosing early. Interest payments are generally higher in the initial years of the loan. Foreclosing a loan with a longer tenure can significantly reduce the total interest paid over time, maximising your savings.</li>
                            <li><strong>Type of Loan:</strong>The type of loan plays a major role in foreclosure conditions. For example, home loans may have more favourable foreclosure terms than personal or car loans. Some lenders impose stricter penalties for certain loan types, so it’s essential to understand the specific terms of your loan.</li>
                        </ul>
                        <h4 className="font-bold text-xl mt-4 mb-4">Tips for Maximising Savings Through Loan Foreclosure</h4>
                        <p>To ensure you get the most out of foreclosing your loan, follow the tips given below:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Foreclose Early in the Loan Tenure:</strong> The earlier you foreclose a loan, the more interest you save. This is because most loans have front-loaded interest payments, which means you pay more interest in the initial years. Foreclosing early cuts off future interest, allowing you to maximise your savings significantly.</li>
                            <li><strong>Check Penalty Clauses:</strong> Before foreclosing, carefully review your loan agreement for penalty clauses. Lenders often charge a fee for early loan closure, and these penalties can vary. Understanding these charges upfront will help you make an informed decision and avoid unexpected fees that might reduce your savings.</li>
                            <li><strong>Use a Foreclosure Calculator:</strong> A loan foreclosure calculator gives you a clear estimate of your potential savings and the financial impact of closing your loan early. This <strong>loan calculator</strong> helps you understand how much interest you’ll save and whether the benefits outweigh the penalties, ensuring a well-calculated decision.</li>
                            <li><strong>Consider Partial Prepayments:</strong> Making partial prepayments before foreclosing your loan reduces the outstanding principal amount. This, in turn, lowers the interest you pay on the remaining balance. Prepaying is an effective strategy to reduce interest payments and make foreclosure more financially beneficial in the long run.</li>
                            <li><strong>Consult Your Lender:</strong> It’s always a good idea to consult your lender before proceeding with foreclosure. Discuss the terms, penalties, and any prepayment options available. Some lenders may offer better terms or waive penalties, helping you save more and making the foreclosure process smoother and more cost-effective.</li>
                        </ul>

                        <h4 className="font-bold text-xl mt-4 mb-4">Common Mistakes to Avoid in Loan Foreclosure</h4>
                        <p>Let’s examine certain common pitfalls to avoid when you make a loan foreclosure:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Ignoring Penalty Charges:</strong> One common mistake is overlooking the penalty fees for loan foreclosure. Some lenders charge a percentage of the outstanding loan as a penalty. If you fail to factor in these charges, the savings from foreclosing might be minimal, or you could even lose money.</li>
                            <li><strong>Foreclosing Too Late:</strong> Foreclosing your loan too late in its tenure can result in reduced savings. Since interest is front-loaded, most interest payments occur early in the loan period. Closing a loan near its end offers little benefit because most interest has already been paid.</li>
                            <li><strong>Not Using a Loan Calculator:</strong> Failing to use a loan foreclosure calculator can lead to inaccurate assumptions about your savings. The calculator helps you evaluate the financial impact of foreclosure by considering factors like penalties, interest savings, and remaining tenure. Skipping this tool could cause you to miscalculate the benefits.</li>
                            <li><strong>Not Considering Prepayment Options:</strong> Another common error is overlooking the option to make partial prepayments. Prepaying part of the loan reduces the principal amount and lowers future interest payments. If you skip prepayments, you may miss out on additional savings before deciding to foreclose on the loan.</li>
                        </ul>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default ForeclosureCalculator;
