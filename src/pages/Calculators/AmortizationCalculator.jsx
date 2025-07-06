import Calculator from '../../components/ReusableChartCalculator';


const AmortizationCalculator = () => {
    const Inputs = [
        {
            name: 'loanAmount',
            label: 'Loan Amount',
            min: 10000,
            max: 10000000,
            defaultValue: 10000,
            step: 10000,
            prefix: '₹ '
        },
        {
            name: 'loanTerm',
            label: 'Tenure (Years)',
            min: 1,
            max: 30,
            defaultValue: 5,
            step: 1,
            suffix: ' Years'
        },
        {
            name: 'interestRate',
            label: 'Interest Rate (%)',
            min: 1,
            max: 20,
            defaultValue: 6.5,
            step: 0.1,
            suffix: ' %'
        }
    ];

    const calculateAmortization = ({ loanAmount, loanTerm, interestRate }) => {
        if (!loanAmount || !loanTerm || !interestRate) {
            return { emi: 0, interest: 0, principal: 0, total: 0 };
        }

        const n = loanTerm * 12; 
        const r = interestRate / 1200;

        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const total = emi * n;
        const interest = total - loanAmount;

        return {
            emi: Math.round(emi),
            interest: Math.round(interest),
            principal: loanAmount,
            total: Math.round(total)
        };
    };

    const generateAmortizationSchedule = (values) => {
        const loanAmount = parseFloat(values.loanAmount) || 0;
        const loanTerm = parseFloat(values.loanTerm) || 0;
        const interestRate = parseFloat(values.interestRate) || 0;

        const n = loanTerm * 12;
        const r = interestRate / 1200;

        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        let balance = loanAmount;
        const schedule = [];

        for (let month = 1; month <= n; month++) {
            const interestPayment = balance * r;
            const principalPayment = emi - interestPayment;
            balance -= principalPayment;

            schedule.push({
                month,
                emi: emi.toFixed(2),
                principal: principalPayment.toFixed(2),
                interest: interestPayment.toFixed(2),
                balance: balance > 0 ? balance.toFixed(2) : "0.00",
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
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Amortization Calculator</h1>
                        <p className="text-lg leading-relaxed">An Amortisation
                            Calculator is a financial tool that helps calculate
                            the monthly EMI payments required to repay a loan.
                            It breaks down each payment into interest and
                            principal components, showing how the loan balance
                            reduces over time. The calculator generates an
                            amortisation schedule by inputting key details such
                            as loan amount, interest rate, and tenure, helping
                            borrowers manage their finances and understand how
                            additional payments can lower the overall loan
                            cost.
                        </p>
                    </div>
                </section>
                <Calculator
                    title="Amortization Calculator"
                    inputs={Inputs}
                    calculate={calculateAmortization}
                    generateScheduleData={generateAmortizationSchedule}
                    resultTitle = "EMI Amount"
                     buttonchange = "Calculate Amortization"
                />

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0 ">
                    <div className="container">
                        <p className="text-gray-600 mb-4">
                            Whenever a borrower takes a loan from a bank or financial institution, the lender has to create a repayment schedule for the debt. This means spreading loan payments over the set loan tenure according to the agreed-upon terms and conditions. This payment includes the principal loan amount and the interest rate to be received by the lender every month. Banks calculate this schedule through the amortization Calculator, which considers every metric of the respective loan.
                        </p>
                        <p className="text-gray-600 mb-4">
                            The Amortization Calculator helps reduce the loan’s current balance through monthly instalments, ending the owed amount at the maturity date. Usually, an amortization schedule focuses on the initial interest payments rather than the principal amount owed, and later on, a higher percentage goes towards the loan’s principal.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Using the Amortization Calculator, banks allow borrowers to handle their finances better and budget their income well enough to save money. Some calculators will also help you make accelerated payments by comparing the various ways you can apply to handle your debt. An example is making an INR 50,000 prepayment after using the Amortization Calculator and realizing that it can significantly reduce your monthly payments or increase the loan tenure by five years to reach the same impact.
                        </p>
                        <p className="text-gray-600 mb-4">
                            The Amortization Calculator significantly impacts the loan repayment schedule by accurately describing the EMI instalments over different loan tenures and with different rates of interest set according to the borrower’s credit score.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Types of Amortization Calculators</h3>
                        <div className="overflow-x-auto mb-5">
                            <table className="min-w-full table-auto border text-center">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="py-3 px-4 border-r border-b border-gray-300">For Property/Land Purchases</th>
                                        <th className="py-3 px-4 border-b border-gray-300">For Corporates/Businesses</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-100">
                                    <tr className="bg-white ">
                                        <td className="py-3 px-4 border-r border-b border-gray-300">
                                            <strong>Full Amortization:</strong>
                                            <span> Making fixed, regular payments monthly to close the loan by the maturity date</span>
                                        </td>
                                        <td className="py-3 px-4 border-b border-gray-300">
                                            <strong>Straight Line:</strong>
                                            <span> In such loans, the interest rate is kept the same monthly over the loan’s tenure.</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="py-3 px-4 border-r border-b border-gray-300">
                                            <strong>Partial Amortization:</strong>
                                            <span> Your loan is repaid monthly by the end of the maturity date, with the outstanding balance remaining, which you can pay after some time.</span>
                                        </td>
                                        <td className="py-3 px-4 border-b border-gray-300">
                                            <strong>Annuity:</strong>
                                            <span> The borrower has to pay equal payments according to set equal time durations.</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="py-3 px-4 border-r border-b border-gray-300">
                                            <strong>Interest Only:</strong>
                                            <span> The borrower only makes interest payments throughout the loan tenure and pays off the initial loan principal amount in a lump sum after the maturity date.</span>
                                        </td>
                                        <td className="py-3 px-4 border-b border-gray-300">
                                            <strong>Declining Balance:</strong>
                                            <span> Each EMI payment focuses on paying off the interest initially and then the balance principal amount.</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <td className="py-3 px-4 border-r border-b border-gray-300">
                                            <strong>Negative Amortization:</strong>
                                            <span> The borrower pays a slightly lower interest rate every month, which means the loan is not fully paid off by maturity.</span>
                                        </td>
                                        <td className="py-3 px-4 border-b border-gray-300">
                                            <strong>Bullet:</strong>
                                            <span> The borrower pays only the interest throughout the loan tenure and makes one lump sum payment at the end.</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-2xl">
                            Amortization Calculator and Schedule Breakdown
                        </h2>
                        <p className="text-gray-600 mt-2">
                            An Amortization schedule helps businesses and individuals understand and forecast their monthly budgets. It also helps break down the deductible interest payments on tax liabilities. Businesses often use the same calculator to amortise the expenses incurred in the said accounting period according to the set accounting principles.
                        </p>
                        <p className="text-gray-600 mt-2">
                            A borrower usually has to put in all the information regarding their respective loan, from period to interest rate to initial loan amount, to get accurate monthly information on the amount to be repaid. It ensures that the borrower does not pay back more than what is owed and that the lender does not receive less than the agreed amount in a much more flexible manner. Borrowers can also negotiate the terms and conditions of the loan and make the respective changes on the Amortization calculator to receive a new schedule.
                        </p>
                        <p className="text-gray-600 mt-2">The formula for the same is:</p>
                        <p className="font-bold mt-2">Loan Amount * [i * (1+i)n / (1+i)n – 1]</p>
                        <p className="text-gray-600 mt-2">Where</p>
                        <p className="text-gray-600 mt-2">I = Interest payment</p>
                        <p className="text-gray-600 mt-2">N = number of payments to be made over the loan tenure</p>

                        <h2 className="font-bold text-2xl mt-6">Explanation of the amortization schedule and its components</h2>
                        <p className="text-gray-600 mt-2">
                            Here are some of the important components of the amortization Calendar, which helps determine the estimated EMI amounts and budget the borrower’s finances:
                        </p>

                        <h2 className="font-bold text-2xl mt-4">Time Period</h2>
                        <p className="text-gray-600 mt-2">
                            The time period in an Amortization calendar represents the specific timing of each loan payment. Depending on the loan agreement terms, this can be bi-weekly, quarterly, or annually. The amortization table allows both the borrower and lender to track the breakdown of each payment over time. The period also helps evaluate the impact of each monthly payment and whether the interest is on a daily reducing basis. This structure provides a clear picture of how long it will take to repay the loan.
                        </p>
                        <p className="text-gray-600 mt-2">
                            An extended period can significantly reduce the EMI cost over time but will increase the interest payment.
                        </p>
                        <h3 className="font-bold text-2xl mt-6">Beginning Loan Balance</h3>
                        <p className="text-gray-600 mt-2">
                            The beginning loan balance is the actual amount of debt the borrower owes at the start of the loan tenure. The Amortization calculator helps evaluate the debt reduction over time, indicating how much principal was paid down in the previous payment. The beginning loan balance decreases each time the loan keeps on decreasing. This decline directly impacts the interest calculation, as interest is charged based on the outstanding loan balance, meaning that less interest will accrue over time, and more of the payment will go toward reducing the principal.
                        </p>
                        <p className="text-gray-600 mt-2">
                            This amount depends on the borrower’s ask and the lender’s maximum cap.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Payment</h3>
                        <p className="text-gray-600 mt-2">
                            The loan’s payment column indicates the amount the borrower must pay each period. It is usually fixed for life in a standard amortization schedule but can vary from time to time based on variable interest rates. In most cases, the overall payment remains the same, but the proportion of interest and principal changes over time. With a reduction in the principal amount, a larger portion of the payment goes toward interest. This helps accelerate the debt reduction in the later stages of loan repayment.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Interest Rate</h3>
                        <p className="text-gray-600 mt-2">
                            Interest rate refers to the amount of money the lender charges for borrowing the loan balance during a given period according to a set percentage. The interest calculation is particularly significant in the early stages of the loan, where a larger portion of the payment goes toward covering the interest expense rather than paying down the principal. The interest rate for each month can be calculated by dividing the total interest rate by 12 months. It is set according to the borrower’s credit score and the bank’s rules and regulations, which are later on negotiable.
                        </p>
                        <p className="text-gray-600 mt-2">
                            A higher interest rate implies higher EMI costs monthly.
                        </p>
                        <h3 className="font-bold text-2xl mt-6">Principal</h3>
                        <p className="text-gray-600 mt-2">
                            The principal amount is the total funds the borrower receives at the initial stage of loan allotment. This amount is meant to be paid off regularly, along with a set percentage of interest rates. Initially, the borrower pays off huge chunks of money for the interest payment but relatively less for the principal loan amount. This changes later on, which is why the loan is completely paid off by the end of the maturity period. The principal is the critical factor that reduces the loan balance, and understanding its role helps borrowers track how quickly they’re paying off their debt.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Ending Loan Balance</h3>
                        <p className="text-gray-600 mt-2">
                            The ending loan balance is the remaining debt owed by the borrower at the end of each period. The ending balance for one period becomes the beginning balance for the next period. It is calculated by subtracting the old balance from the new total amount payable. When the borrower starts paying off more principal than the interest amount, this balance reduces significantly. At the end of the loan tenure, this amount reaches zero. It implies that the payment has been made completely.
                        </p>
                        <p className="text-gray-600 mt-2">
                            After understanding these elements, one can easily understand the importance of an amortization schedule.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">How to Use Amortization Calculator</h3>
                        <p className="text-gray-600 mt-2">
                            Om Finserv provides various amortization calculators for different types of debts and loans, such as home and car loans. It will help you better understand the total interest payable over the loan tenure and the amount you will be overpaying for your principal loan amount.
                        </p>
                        <p className="text-gray-600 mt-2">
                            Here is a step-by-step guide to finding out your interest payable using the Om Finserv amortization Calculator:
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Open the Om Finserv application or website.</li>
                            <li>Select the Calculator subhead given on the top right side of the screen.</li>
                            <li>Click on which type of loan you have opted for, for example, the Car Loan calculator.</li>
                            <li>Select the loan tenure, amount of loan and interest rate received by the bank.</li>
                            <li>You will see the actual monthly payment in bold, along with a pictorial representation of the interest rate and the principal amount.</li>
                            <li>Click on the View EMI Schedule option to view the complete amortization schedule for the said time frame.</li>
                        </ul>
                        <h3 className="font-bold text-2xl mt-6">How Inflation and Interest Rate Changes Affect Amortization</h3>
                        <p className="text-gray-600 mt-2">
                            For loans with variable interest rates, the amortization schedule changes significantly based on the present interest rates and inflation levels. The old borrowers don’t have to worry about fixed interest rates, but new loan applicants will face higher interest payments.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Inflation</h3>
                        <p className="text-gray-600 mt-2">
                            Inflation erodes the purchasing power of money over time, so applicants will have to ask for a principal amount to purchase their desired product. For people with pre-existing loans and set monthly payments, the value of the fixed amount they are giving erodes with time; hence, EMIs become more manageable. Lenders may raise interest rates to compensate for inflationary pressures for borrowers with variable interest rates.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Interest Rates</h3>
                        <p className="text-gray-600 mt-2">
                            Changes in market interest rates will not directly impact repayment schedules for people with fixed interest rates. However, if interest rates drop significantly, borrowers might negotiate the loan terms to save money. For variable or adjustable-rate loans, changes in interest rates directly affect amortization. An increased interest rate will lead to a higher overall cost of borrowing and vice versa.
                        </p>

                        <h3 className="font-bold text-2xl mt-6">Conclusion</h3>
                        <p className="text-gray-600 mt-2">
                            In conclusion, an amortization calculator is a valuable tool for anyone applying for a loan. This calculator provides clear insights into repayment structures and allows borrowers to manage their finances more efficiently. Whether looking at home, car, or personal loans, an amortization calculator simplifies complex calculations, allowing you to visualise the long-term financial impact. So, it is necessary to use an amortization calculator for financial management. You can also analyse how a prepayment or an extendable loan tenure might affect your amortization schedule in the future.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AmortizationCalculator;
