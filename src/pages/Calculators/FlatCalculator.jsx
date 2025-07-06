import { useEffect } from 'react';

const FlatCalculator = () => {
    useEffect(() => {
        calculateEMI();
    }, []);

    const calculateEMI = () => {
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const tenure = parseInt(document.getElementById('tenure').value) * 12;
        const rate = parseFloat(document.getElementById('rate').value) / 1200;

        const emiReducing = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        const totalReducing = emiReducing * tenure;
        const interestReducing = totalReducing - loanAmount;

        const totalFlat = loanAmount + (loanAmount * (parseFloat(document.getElementById('rate').value) / 100) * (tenure / 12));
        const emiFlat = totalFlat / tenure;
        const interestFlat = totalFlat - loanAmount;

        document.getElementById('emiFlat').textContent = Math.round(emiFlat).toLocaleString('en-IN');
        document.getElementById('totalFlat').textContent = Math.round(totalFlat).toLocaleString('en-IN');
        document.getElementById('interestFlat').textContent = Math.round(interestFlat).toLocaleString('en-IN');

        document.getElementById('emiReducing').textContent = Math.round(emiReducing).toLocaleString('en-IN');
        document.getElementById('totalReducing').textContent = Math.round(totalReducing).toLocaleString('en-IN');
        document.getElementById('interestReducing').textContent = Math.round(interestReducing).toLocaleString('en-IN');
    };

    const syncSlider = (id) => {
        document.getElementById(id).value = document.getElementById(id + 'Input').value;
        calculateEMI();
    };

    const syncInput = (id) => {
        document.getElementById(id + 'Input').value = document.getElementById(id).value;
        calculateEMI();
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Flat vs Reducing Rate Calculator</h1>
                        <p className="text-lg leading-relaxed">The flat and reducing rate calculator in India helps compare two common methods of loan interest calculation: flat interest and reducing balance interest. Fixed EMIs result from a flat rate, which computes the loan amount's interest. A decreasing rate, on the other hand, computes interest on the remaining loan balance and reduces it when repayments are made. This calculator makes the most affordable loan choice easy, allowing users to enter loan details like principal, tenure, and interest rate to see how each approach affects the total interest payable and EMIs. It is a simple method to compare flat and reducing interest rates to clearly understand both and choose one wisely.</p>

                    </div>
                </section>

                {/* calculator section */}
                <section className="p-6 bg-white rounded-lg shadow-lg max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                        {/* Left Section */}
                        <div className="w-full md:w-1/2 space-y-6 pr-4 md:pr-10 border-r border-gray-300">
                            {/* Loan Amount */}
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <label htmlFor='loanamount' className="font-semibold w-48">Loan Amount: ₹</label>
                                    <input
                                        type="number"
                                        id="loanAmountInput"
                                        min="100000"
                                        max="10000000"
                                        step="5000"
                                        defaultValue="100000"
                                        className="border px-3 py-2 w-32"
                                        onInput={() => syncSlider('loanAmount')}
                                    />
                                </div>
                                <input
                                    type="range"
                                    id="loanAmount"
                                    min="100000"
                                    max="10000000"
                                    step="5000"
                                    defaultValue="100000"
                                    className="w-full accent-orange-500 mb-1"
                                    onInput={() => syncInput('loanAmount')}
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>₹ 1 Lac</span>
                                    <span>₹ 10 Cr</span>
                                </div>
                            </div>

                            {/* Loan Tenure */}
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <label htmlFor='loantenure' className="font-semibold w-48">Loan Tenure (Years):</label>
                                    <input
                                        type="number"
                                        id="tenureInput"
                                        min="1"
                                        max="30"
                                        defaultValue="1"
                                        className="border px-3 py-2 w-32"
                                        onInput={() => syncSlider('tenure')}
                                    />
                                </div>
                                <input
                                    type="range"
                                    id="tenure"
                                    min="1"
                                    max="30"
                                    defaultValue="1"
                                    className="w-full accent-orange-500 mb-1"
                                    onInput={() => syncInput('tenure')}
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>1</span>
                                    <span>30</span>
                                </div>
                            </div>

                            {/* Interest Rate */}
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <label htmlFor='interest' className="font-semibold w-48">Interest Rate (%):</label>
                                    <input
                                        type="number"
                                        id="rateInput"
                                        min="5"
                                        max="30"
                                        step="0.5"
                                        defaultValue="12"
                                        className="border px-3 py-2 w-32"
                                        onInput={() => syncSlider('rate')}
                                    />
                                </div>
                                <input
                                    type="range"
                                    id="rate"
                                    min="5"
                                    max="30"
                                    step="0.5"
                                    defaultValue="12"
                                    className="w-full accent-orange-500 mb-1"
                                    onInput={() => syncInput('rate')}
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>5</span>
                                    <span>30</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-10">
                            <div className="text-center">
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Labels Column */}
                                    <div>
                                        <p className="font-bold mb-4 capitalize">Breakup</p>
                                        <p className="mb-2">Monthly EMI</p>
                                        <p className="mb-2">Total Amount</p>
                                        <p className="mb-2">Total Interest</p>
                                    </div>

                                    {/* Flat Interest Column */}
                                    <div>
                                        <p className="font-bold mb-4">Flat Interest Rate</p>
                                        <p id="emiFlat" className="font-semibold text-gray-700 mb-2">₹ 0</p>
                                        <p id="totalFlat" className="font-semibold text-gray-700 mb-2">₹ 0</p>
                                        <p id="interestFlat" className="font-semibold text-gray-700 mb-2">₹ 0</p>
                                    </div>

                                    {/* Reducing Balance Column */}
                                    <div>
                                        <p className="font-bold mb-4">Reducing Balance</p>
                                        <p id="emiReducing" className="text-gray-700 mb-2">₹ 0</p>
                                        <p id="totalReducing" className="text-gray-700 mb-2">₹ 0</p>
                                        <p id="interestReducing" className="text-gray-700 mb-2">₹ 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h3 className="font-bold text-2xl mb-2">
                            Key Differences: Flat vs Reducing Interest Rates
                        </h3>
                        <p className="para mb-6">
                            Here is the loan interest rate comparison between flat and reducing interest rates:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="table-auto w-full border-separate border border-gray-300">
                                <thead className="bg-[#0282ba] text-white">
                                    <tr>
                                        <th className="px-4 py-2">Criteria</th>
                                        <th className="px-4 py-2">Flat Interest Rate</th>
                                        <th className="px-4 py-2">Reducing Interest Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Interest Calculation</td>
                                        <td className="px-4 py-2">Calculated on the entire loan amount for the full tenure.</td>
                                        <td className="px-4 py-2">Calculated the outstanding principal after each EMI payment.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">EMI</td>
                                        <td className="px-4 py-2">EMI remains the same throughout the loan tenure.</td>
                                        <td className="px-4 py-2">EMI decreases over time as interest is calculated on a reducing balance.</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Total Interest Paid</td>
                                        <td className="px-4 py-2">Higher total interest paid compared to reducing interest.</td>
                                        <td className="px-4 py-2">Lower total interest paid since interest decreases with the principal.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Loan Cost</td>
                                        <td className="px-4 py-2">Generally more expensive over the full tenure.</td>
                                        <td className="px-4 py-2">More cost-effective, especially for longer loan periods.</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Calculation Complexity</td>
                                        <td className="px-4 py-2">Simple to calculate and understand.</td>
                                        <td className="px-4 py-2">More complex calculations as interest is recalculated every month.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-2">Common Uses</td>
                                        <td className="px-4 py-2">Typically used for auto loans and smaller loans.</td>
                                        <td className="px-4 py-2">Commonly used for home loans, personal loans, and longer-term loans.</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="px-4 py-2">Monthly Payments (EMIs)</td>
                                        <td className="px-4 py-2">Fixed EMIs throughout the loan period.</td>
                                        <td className="px-4 py-2">EMIs reduce over time as the principal reduces.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-2xl mb-2">
                            Flat Interest Rate
                        </h2>
                        <p className="para">
                            When interest is computed on the loan amount throughout the loan, this is known as a flat interest rate. This kind of interest rate is suitable for <strong>flat-interest rate loans</strong>. The loan sum that decreases when you repay is not considered. Since the interest rate remains constant during the loan, this results in fixed monthly instalments (EMIs). The overall cost of the loan may be greater than that of other approaches, such as lower interest rate loans.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">
                            Examples
                        </h2>

                        <h2 className="font-bold text-2xl mb-2">
                            Example 1:
                        </h2>
                        <p className="para">Loan Amount (Principal): ₹1,00,000</p>
                        <p className="para">Interest Rate: 10% per annum</p>
                        <p className="para">Loan Tenure: 3 years</p>
                        <p className="para">Using the flat interest rate formula:</p>
                        <p className="para">Total Interest = (P × I × T) / 100</p>
                        <p className="para">= (₹1,00,000 × 10% × 3) / 100</p>
                        <p className="para">= ₹30,000</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Total Amount to be Repaid = Principal + Total Interest
                        </h2>
                        <p className="para">= ₹1,00,000 + ₹30,000</p>
                        <p className="para">= ₹1,30,000</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Monthly EMI = (Principal + Total Interest) / (Tenure × 12)
                        </h2>
                        <p className="para">= ₹1,30,000 / (3 × 12)</p>
                        <p className="para">= ₹3,611.11</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Thus, the borrower will pay ₹3,611.11 each month for 3 years.
                        </h2>

                        <h2 className="font-bold text-2xl mb-2">
                            Example 2:
                        </h2>
                        <p className="para">Loan Amount (Principal): ₹50,000</p>
                        <p className="para">Interest Rate: 8% per annum</p>
                        <p className="para">Loan Tenure: 2 years</p>
                        <p className="para">Using the flat interest rate formula:</p>
                        <p className="para">Total Interest = (P × I × T) / 100</p>
                        <p className="para">= (₹50,000 × 8% × 2) / 100</p>
                        <p className="para">= ₹8,000</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Total Amount to be Repaid = Principal + Total Interest
                        </h2>
                        <p className="para">= ₹50,000 + ₹8,000</p>
                        <p className="para">= ₹58,000</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Monthly EMI = (Principal + Total Interest) / (Tenure × 12)
                        </h2>
                        <p className="para">= ₹58,000 / (2 × 12)</p>
                        <p className="para">= ₹2,416.67</p>

                        <h2 className="font-bold text-2xl mb-2">
                            Thus, the borrower will pay ₹2,416.67 each month for 2 years.
                        </h2>

                        <h2 className="font-bold text-2xl mb-2">
                            Flat Interest rate Pros and cons
                        </h2>
                        <p className="para">
                            Here are the pros and cons of using a flat interest rate for loans:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border border-gray-300 my-6">
                                <thead className="bg-[#0282ba] text-white text-center">
                                    <tr>
                                        <th className="p-3 border border-gray-300">Pros</th>
                                        <th className="p-3 border border-gray-300">Cons</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="p-3 border border-gray-300">
                                            <strong>Easy to Calculate</strong>: The flat interest rate method involves simple calculations, making it easier for borrowers to understand and plan repayments.
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Higher Interest Costs</strong>: Since interest is calculated on the entire principal amount for the full tenure, borrowers pay more than reducing balance methods, where interest decreases as the loan is repaid.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">
                                            <strong>Fixed EMIs</strong>: Since the interest is calculated on the entire loan amount, the monthly instalments (EMIs) remain fixed throughout the loan tenure. This offers predictability and makes budgeting easier.
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Not Reflective of Actual Loan Reduction</strong>: Unlike reducing interest rates, the flat rate method doesn’t account for the reduction in the outstanding loan amount as EMIs are paid. This means borrowers are charged interest as if the entire loan amount is unpaid.
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-3 border border-gray-300">
                                            <strong>Clarity in Repayments</strong>: Borrowers know what they will pay monthly and the total repayment amount, making financial planning straightforward.
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Less Cost-Efficient</strong>: While the flat rate is easy to calculate, it is generally more expensive over time, particularly for longer-tenure loans, as borrowers pay more interest.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300">
                                            <strong>Used in Specific Loans</strong>: Flat interest rates are commonly used in vehicle and small personal loans, making it easier for borrowers to obtain loans for shorter periods without complex calculations.
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Misleading Interest Rate Comparison</strong>: The nominal flat interest rate can appear lower than reducing balance interest rates, but the overall interest paid can be significantly higher. If both are presented with an effective interest rate, it can be easier to compare loans effectively.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-2xl mb-2">
                            How is the Flat Rate Calculated?
                        </h2>
                        <p className="para">
                            To calculate a flat interest rate loan, the interest is applied to the entire loan amount for the full tenure and remains constant throughout the loan period. The formula for calculating the total interest is multiplying the principal amount, the annual interest rate, and the loan tenure, then dividing by 100. Once the total interest is calculated, it is added to the principal amount to determine the total repayment amount. To find the monthly EMI, the total repayment is divided by the total number of months, which is the loan tenure in years multiplied by 12. This method results in equal monthly payments (EMIs) throughout the loan tenure, with the same amount being paid each month.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">
                            Reducing Interest Rate
                        </h2>
                        <p className="para">
                            A reducing interest rate loan follows the interest that is charged only on the outstanding principal amount. As the loan is repaid through EMIs, the principal reduces, and consequently, the interest is calculated on the reduced balance for the remaining tenure. This results in lower interest payments over time than a flat interest rate, as the interest decreases with each repayment.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Examples</h2>

                        <h2 className="font-bold text-2xl mb-2">Example 1:</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Loan Amount (Principal): ₹1,00,000</li>
                            <li>Annual Interest Rate: 12%</li>
                            <li>Loan Tenure: 3 years (36 months)</li>
                        </ul>
                        <p className="para mt-2">
                            This loan’s interest is calculated on the remaining balance after each EMI payment. The EMI will be higher in the first few months because the interest is applied to the full loan amount. As the loan is repaid and the principal reduces, the interest portion decreases, lowering the overall interest paid over time. In this example, the monthly EMI will be around ₹3,321.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">Example 2:</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Loan Amount (Principal): ₹2,00,000</li>
                            <li>Annual Interest Rate: 10%</li>
                            <li>Loan Tenure: 5 years (60 months)</li>
                        </ul>
                        <p className="para mt-2">
                            The interest will be recalculated monthly based on the outstanding principal after each EMI payment. The borrower starts by paying more interest in the initial months, but as the principal reduces, the interest also decreases. The monthly EMI for this loan will be around ₹4,248, with the total interest paid over the tenure being lower than it would be under a flat interest rate.
                        </p>
                        <h2 className="font-bold text-2xl mb-2">
                            Reducing Interest Rate Pros and Cons
                        </h2>
                        <p className="para">
                            Here are the pros and cons of using a reduced interest rate for loans:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full table-auto border border-gray-300">
                                <thead className="bg-[#0282ba] text-white text-center">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Pros</th>
                                        <th className="border border-gray-300 px-4 py-2">Cons</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Lower Total Interest</strong>: Since interest is calculated on the outstanding principal, the interest portion decreases as the loan is repaid, resulting in lower overall interest costs than flat interest rates.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Higher Early EMIs</strong>: In the initial months or years of the loan, the EMIs may seem higher because the interest is calculated on the larger outstanding balance.
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>More Cost-Effective</strong>: Borrowers pay less interest over time, making it a more economical option, especially for long-term loans.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Complex Calculations</strong>: The reducing balance method involves more complex calculations than the flat interest rate, making it harder for borrowers to understand how much they are paying in interest.
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Reflects Actual Loan Balance</strong>: The reducing interest rate considers the decreasing principal, giving a more accurate representation of the borrower’s actual loan liability.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Variable EMIs</strong>: In some cases, EMIs may not be fixed and can vary if the interest rate changes during the loan tenure, making them less predictable than flat-rate loans.
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Better for Long-Term Loans</strong>: The reducing interest method offers significant savings on interest for long-term loans, such as home loans or education loans.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Higher Monthly Commitment Initially</strong>: Since the EMIs are larger at the beginning of the loan tenure, this can strain monthly budgets early on, particularly for long-tenure loans.
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">
                                            <strong>Encourages Faster Repayment</strong>: Borrowers are incentivized to pay off the loan sooner since the interest reduces with each repayment, lowering the total interest paid.
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-2xl mb-2">How is the Reducing Rate Calculated?</h2>
                        <p className="para">
                            The reduced interest rate is calculated based on the outstanding principal amount, which is reduced with each EMI payment. The formula for calculating the EMI (Equated Monthly Instalment) using the reducing balance method is:
                        </p>
                        <p className="para font-medium mt-2">EMI = [P × I × (1 + I)<sup>T</sup>] / [(1 + I)<sup>T</sup> − 1]</p>
                        <p className="para mt-2">Where:</p>
                        <p className="para">P = Principal loan amount</p>
                        <p className="para">I = Monthly interest rate (calculated by dividing the annual interest rate by 12 and 100)</p>
                        <p className="para">T = Loan tenure in months (years multiplied by 12)</p>
                        <p className="para">This formula helps you determine the total interest paid over the loan tenure.</p>

                        <h2 className="font-bold text-2xl mt-6 mb-2">Flat vs Reducing Rate Calculator: How to Use?</h2>
                        <p className="para">
                            Here’s a simple guide on how to use a Flat vs Reducing Rate Calculator:
                        </p>

                        <p className="para font-semibold mt-4">Step 1: Enter the Loan Details:</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li><strong>Principal Amount (P):</strong> Enter the total loan amount you borrow.</li>
                            <li><strong>Interest Rate (I):</strong> Input the annual interest rate for both the flat and reducing methods.</li>
                            <li><strong>Tenure (T):</strong> Enter the loan tenure (in years or months, as required).</li>
                        </ul>

                        <p className="para font-semibold mt-4">
                            Step 2: Select the Interest Rate Type:<span className="font-normal">Choose whether you want to calculate using the Flat Interest Rate or the Reducing Interest Rate.</span>
                        </p>

                        <p className="para font-semibold mt-4">
                            Step 3: Click on ‘Calculate’:<span className="font-normal"> The calculator will instantly display the results, including:</span>
                        </p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
                            <li>Monthly EMI for both flat and reducing interest rate methods.</li>
                            <li>Total Interest Payable over the loan period.</li>
                            <li>Total Amount Repayable (Principal + Interest) for each method.</li>
                        </ul>
                        <p className="para mt-4">
                            <strong>Step 4: Compare the Results:</strong> Review the total interest and repayment amount for the flat and reducing interest rate options to see which method is more cost-effective.
                        </p>

                        <h2 className="font-bold text-2xl mt-6 mb-2">
                            Flat vs Reducing Rate Calculator: Which is Better for Your Loan?
                        </h2>
                        <p className="para">
                            This loan interest rate calculator of flat rate and reducing rate helps borrowers make an informed decision by comparing the total interest and monthly EMIs for both flat and reducing interest rate methods. The calculator instantly shows the differences in total repayment amounts and interest costs by inputting the loan amount, tenure, and interest rate. This allows borrowers to see how much more they would pay with a flat rate versus a reduced rate, helping them understand which option is more cost-effective based on their financial situation. It also simplifies complex calculations, making assessing the impact of both interest structures easier and enabling borrowers to choose the loan type that best fits their budget and long-term financial goals.
                        </p>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default FlatCalculator;
