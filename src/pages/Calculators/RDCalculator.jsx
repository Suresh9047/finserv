import Calculator from '../../components/ReusableChartCalculator';


const Inputs = [
    {
        name: 'loanAmount',
        label: 'Monthly Deposit Amount',
        defaultValue: 50000,
        min: 100,
        max: 100000,
        prefix: '₹ ',
    },
    {
        name: 'interestRate',
        label: 'Rate of Interest (p.a.)',
        defaultValue: 6.5,
        min: 3.5,
        max: 15,
        suffix: ' %',
    },
    {
        name: 'loanTerm',
        label: 'Time Period',
        defaultValue: 3,
        min: 1,
        max: 10,
        suffix: ' Years',
    },
];
const calculateRD = ({ loanAmount, interestRate, loanTerm }) => {
    const deposit = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100 / 12;
    const months = (parseInt(loanTerm) || 0) * 12;

    const principal = deposit * months;
    const maturity = deposit * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    const interest = maturity - principal;

    return {
        principal: Math.round(principal),
        interest: Math.round(interest),
        emi: Math.round(maturity),
        total: Math.round(maturity),
    };
};


const generateRDSchedule = (values) => {
    const loanAmount = parseFloat(values.loanAmount) || 0;
    const annualRate = parseFloat(values.interestRate) || 0;
    const years = parseInt(values.loanTerm) || 0;

    const r = annualRate / 100 / 12;
    const totalMonths = years * 12;
    const schedule = [];

    let maturityAmount = 0;
    const startDate = new Date();

    for (let i = 0; i < totalMonths; i++) {
        const compoundFactor = Math.pow(1 + r, totalMonths - i);
        const interest = loanAmount * (compoundFactor - 1);
        maturityAmount += loanAmount + interest;

        const monthIndex = (startDate.getMonth() + i) % 12;
        const year = startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12);
        const month = new Date(year, monthIndex).toLocaleString("default", { month: "long" });

        const percentPaid = ((maturityAmount - (loanAmount * (i + 1))) / (loanAmount * (i + 1))) * 100;

        schedule.push({
            year,
            month,
            principal: loanAmount,
            interest: interest,
            emi: loanAmount + interest,
            balance: maturityAmount,
            paidToDate: percentPaid,
        });
    }

    return schedule;
};


const RDCalculator = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">RD Calculator</h1>
                        <p>An RD Calculator is an online tool that allows users to calculate the maturity amount of a recurring deposit. Users need to input the deposit amount, duration of the deposit, interest rate and the compounding frequency.  Onces these inputs are made, the RD calculator will present the amount upon maturity. The TDS deduction is the only thing that an investor must perform manually. According to the new RBI regulations, RDs are also subject to TDS deduction; however, because there is no standardisation in its application across financial institutions, RD return calculators do not account for it.</p>
                    </div>
                </section >
                <Calculator title="Recurring Deposit Calculator" inputs={Inputs} calculate={calculateRD}
                    generateScheduleData={generateRDSchedule} resultTitle = "Total Amount"  buttonchange = "Calculate RD" />

                <section className="pt-0 pb-0 m-0">
                    <div className="container">

                        <h2 className="font-bold text-2xl mb-2">Features of Recurring Deposits</h2>
                        <p className="para">
                            Usually, recurring deposits offer a fixed interest rate on the amount invested for a pre-specified period or till maturity. At the end of the investment period, you receive the total investment amount and the total interest accrued. Below are some of the features of a recurring deposit:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Recurring deposits help create a saving mentality among the general public</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Even though the minimum investment amount varies from bank to bank, you can start investing with as low as INR 10</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Flexible investment tenure ranging from 6 months to 10 years.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 It offers the same interest rate as that of a fixed deposit scheme, which means that it provides higher returns than any other savings scheme.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 RD also provides the additional feature of availing loans against the savings account. You can avail a loan of up to 90% of the deposit amount, according to the lender’s discretion.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 The RD account can be funded periodically via standing instructions, and these are the instructions given by the customers about crediting the RD every month from their savings account.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">Benefits of Recurring Deposit Investment</h2>
                        <p className="para">
                            Below is some of the benefits of investing in a recurring deposit scheme:
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">Small Installments</h3>
                        <p className="para">
                            Recurring deposits are one of the best ways to save without causing a dent in your monthly expenses. Most banks offer meagre amounts as monthly instalments.
                        </p>
                        <p className="para">
                            Further, many banks also provide RD investment schemes with quarterly or half-yearly payment frequency. This means that people with low income or savings can easily invest in these schemes.
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">Goal-Based Savings</h3>
                        <p className="para">
                            One of the advantages of investing in an RD is that it helps you build a goal-based savings portfolio. Your monthly contributions earn interest and aid in creating a short term investment corpus. Further, you can even plan your instalments so that you build up the desired amount for future use. To check the expected sum for an investment, you can always use the Om Finserv RD calculator. Through this calculator, you can plan your monthly instalments in a way that it builds up to your desired maturity amount.
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">High-Interest Rate</h3>
                        <p className="para">
                            Recurring deposits offer the same rate of interest as fixed deposit schemes, which means that they can be used as an efficient tool for savings and generating wealth. The amount you have invested is subject to compounding interest every quarter. Upon maturity, the investor gets the original principal amount and the compound interest it has accrued. Senior citizens also get a higher interest rate on their recurring deposit investments.
                        </p>
                        <h3 className="font-bold text-xl mt-6 mb-2">Investment Discipline</h3>
                        <p className="para">
                            A recurring deposit is one of the best ways to introduce discipline to your investment activities. Since you will be required to make instalment payments on the same day of every month, the investor is usually led to put aside that amount every month. This helps inculcate a sense of disciplined saving up to the extent of the investment amount.
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">Loan Facility</h3>
                        <p className="para">
                            Most banks offer the provision of availing a loan against their recurring deposit accounts. This loan can be availed up to 95% of the investment amount and can be used to meet all kinds of end-use purposes.
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">Nomination Facility</h3>
                        <p className="para">
                            Most recurring deposit investment schemes offer a nomination facility. This implies that in case of the policyholder’s death, the investment amount will be paid out to the nominee. Setting up the nominee details is easy and can be done only during the opening process.
                        </p>

                        <h3 className="font-bold text-xl mt-6 mb-2">Deduction on Interest Accrued</h3>
                        <p className="para">
                            While the returns gained from RD are subject to income tax. The interest earned on the investment is exempt from income tax up to a limit of INR 50,000 in accordance with Section 80TTB. This provision ensures that the investor gets a higher income upon the maturity of the recurring deposit.
                        </p>
                        <h3 className="font-bold text-xl mt-6 mb-2">How to Use Om Finserv RD Calculator</h3>
                        <p className="para mb-4">
                            When narrowing down which RD to go for, it is essential to know which combination of instalment, rate of interest, and deposit tenure shall lead to better returns.
                        </p>
                        <p className="para mb-4">The RD Calculator on this page targets exactly that.</p>
                        <p className="para mb-4">There are three fields to be filled to ascertain one’s potential earnings when investing in a recurring deposit, viz.:</p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 <strong>Monthly Deposit Amount:</strong> The amount that is to be deposited every month</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 <strong>Rate of Interest:</strong> Interest that the respective provider shall provide</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 <strong>Deposit Tenure:</strong> Duration for which deposits are to be made</li>
                        </ul>

                        <h3 className="font-bold text-xl mt-6 mb-2">Advantages of Using Om Finserv RD Calculator</h3>
                        <p className="para mb-4">
                            The Om Finserv Online RD calculator can be easily used to determine how you should plan your recurring deposit investment. You can know how much you need to invest monthly to reach the desired corpus upon retirement. Below are some of the advantages of using the online RD calculator:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 The smart AI-powered calculator takes a number of different factors and considerations to provide quick and accurate results.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 This calculator is very easy to use and saves time as it avoids the hassle of manual calculations.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 It is only natural that you might want to plan your finances in the long run, this calculator helps you determine what amount you will have to invest every month. This way you can plan your monthly expenses accordingly while also setting money aside for investment purposes.</li>
                        </ul>
                        <h3 className="font-bold text-xl mt-6 mb-2">How is RD Interest Calculated?</h3>
                        <p className="para mb-4">
                            The amount of money invested in recurring deposits is usually compounded on a quarterly basis. Given below is the formula used by banks to calculate and determine what the interest component of an RD will look like upon maturity of the scheme:
                        </p>
                        <p className="para mb-4">M = R[(1 + i)ⁿ - 1] / (1 - (1 + i)^(-1/3))</p>
                        <p className="para mb-4">Here,</p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 M = Maturity amount</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 R = Monthly instalment amount credited to RD</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 n = number of quarters</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 i = Interest rate / 400</li>
                        </ul>

                        <h3 className="font-bold text-xl mt-6 mb-2">Factors Affecting Recurring Deposit Interest Rates</h3>
                        <p className="para mb-4">
                            While determining the interest rate for any recurring deposit, the bank takes into account several different factors. Some of the crucial factors that affect the interest rate are as given below:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 <strong>Tenure:</strong> This is basically the duration for which the amount is invested in this scheme. This is one of the key factors determining the interest rate for an RD. The rate of interest varies for the scheme across various tenures.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 <strong>Age of the Applicant:</strong> Banks and other financial institutions usually offer a higher interest rate for senior citizens. The additional interest rate may vary from 0.50% to 0.75% on the regular deposit interest rates.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 <strong>Current Economic Environment:</strong> The interest rates offered by banks and other financial institutions are subject to change depending on the prevailing socio-economic environment.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 <strong>Banks & Financial Institutions:</strong> This is one factor that greatly affects the amount that one might get upon maturity. The RD schemes offered by banks are generally considered a safer investment option. A potential investor can also invest in a company-rated RD, but you should always check the credit ratings on the RD provided. Companies providing RD schemes with ‘FAA’ or ‘FAAA’ ratings are considered more reliable than other company fixed deposits.
                            </li>
                        </ul>
                        <h3 className="font-bold text-xl mt-6 mb-2">Eligibility Criteria for Recurring Deposit</h3>
                        <p className="para mb-4">
                            Given below are the eligibility criteria for investing in a recurring deposit scheme:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Any individual, government agency, company, partnership firm, or proprietorship is eligible to invest in an RD scheme.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Any minor above the age of 10 qualifies for an RD scheme if they provide name proof.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Any minor equal to or below the age of 10 years needs to be represented by a legal or natural guardian.</li>
                        </ul>

                        <h3 className="font-bold text-xl mt-6 mb-2">Documents Required for Recurring Deposit</h3>
                        <p className="para mb-4">
                            Given below are some of the documents that you will be required to submit when applying for a recurring deposit scheme:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2 mb-4">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 An application form that can be acquired from the nearest bank branch you choose to open your account with.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 2 Passport size photographs.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Identification and Address proof documents of the applicant.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 KYC documents should be kept in handy just in case the bank requests them.</li>
                        </ul>

                        <h3 className="font-bold text-xl mb-2">Things to Consider Before Opening an RD Account</h3>
                        <p className="para mb-4">
                            A recurring deposit is the ideal investment option for those who are looking to multiply their investment without any considerable risk. It requires an investment of a specific amount for a pre-defined period of time. However, there are a few things that you should consider before you decide to invest in an RD scheme:
                        </p>

                        <h4 className="font-bold text-lg mb-2">Interest Rate</h4>
                        <p className="para mb-4">
                            Usually, the interest rate offered for RD accounts varies from bank to bank. Generally, the interest rate offered on these investment products ranges from 3.5% to 8.5%. It is important to note that the interest rate will change according to the duration of your investment. If you choose to opt for an RD on a long-term basis, the interest rate will be slightly higher than short-term investment options.
                        </p>

                        <h4 className="font-bold text-lg mb-2">Deposit Tenure</h4>
                        <p className="para mb-4">
                            The RD investment tenure is typically bifurcated into three categories: short-term, which is active for 6 to 8 months in a year. The second type is a medium-term investment, which usually applies for 5 to 10 years. The third type of RD account is a long-term investment, which generally lasts for more than ten years. So it is essential to assess your needs and choose an investment tenure accordingly. The best way to gain superior returns on your investment is to select a provider that offers higher interest rates in the shortest term possible.
                        </p>

                        <h4 className="font-bold text-lg mb-2">Premature Withdrawal</h4>
                        <p className="para mb-4">
                            All investment providers in India also give customers the option of withdrawing their investment before the stipulated time. The interest and returns applicable in such cases depend on how long you have held the investment. Some financial institutions also charge an amount for premature withdrawal. Therefore, while investing in an RD account, choosing a provider that charges nominal fees on early withdrawal is essential.
                        </p>

                        <h4 className="font-bold text-lg mb-2">Difference Between Recurring Deposits and Fixed Deposits</h4>
                        <p className="para mb-4">
                            The table given below shows some of the main differences between a fixed deposit and a recurring deposit account:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border border-gray-300 border-collapse text-center">
                                <thead className="bg-[#0282ba] text-white border border-[#0282ba]">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300">Parameters</th>
                                        <th className="px-4 py-2 border border-gray-300">Fixed Deposits</th>
                                        <th className="px-4 py-2 border border-gray-300">Recurring Deposits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300"><strong>Purpose</strong></td>
                                        <td className="border-b px-4 py-2 border-gray-300">Allows investors to liquidate idle savings and earn returns at a higher interest rate than regular savings account.</td>
                                        <td className="border-b px-4 py-2 border-gray-300">This helps in inculcating a sense of saving and investing among the general public.</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300"><strong>Duration</strong></td>
                                        <td className="border-b px-4 py-2 border-gray-300">Minimum: 7 days<br />Maximum: 10 years</td>
                                        <td className="border-b px-4 py-2 border-gray-300">Minimum: 6 months<br />Maximum: 10 years</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300"><strong>Eligibility</strong></td>
                                        <td className="border-b px-4 py-2 border-gray-300">All Indian residents and Hindu Undivided Families are eligible for this scheme.</td>
                                        <td className="border-b px-4 py-2 border-gray-300">All Indian residents and Hindu Undivided Families are eligible for this scheme.</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300"><strong>Compound Interest and Impact of Compounding Frequency</strong></td>
                                        <td className="border-b px-4 py-2 border-gray-300">Any interest gained on your FD investment compounds and earns interest on the new balance post each compounding.</td>
                                        <td className="border-b px-4 py-2 border-gray-300">Most financial institutions offer RD accounts that compound interest every quarter. The compound interest is added to the principal amount so that the extra interest added also accrues interest.</td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300"><strong>Renewals and withdrawals of Fixed Deposit Accounts</strong></td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5">
                                                <li>FD accounts offer the rolling over of deposits to a different term in which the tenure may differ.</li>
                                                <li>Auto Renewal: In this feature, the term of the deposit automatically renews upon maturity.</li>
                                                <li>The deposit amounts can be readily cashed upon maturity.</li>
                                                <li>Premature withdrawals are subject to fees and charges.</li>
                                                <li>Any leaves over INR 20,000 have to be transferred to the depositors’ savings account.</li>
                                                <li>Amounts below INR 20,000 can be readily withdrawn and taken in cash.</li>
                                                <li>For Flexi-deposits and sweep-in facilities, withdrawals are allowed for the interest gained, the balance will then be treated as a new deposit.</li>
                                                <li>In case of tax-saving fixed deposits, no withdrawals are permitted for a minimum of 5 years.</li>
                                            </ul>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5">
                                                <li>In case of premature closing of an RD account, the interest will be paid to the investor without any penalties.</li>
                                                <li>If the account holder does not continue with the bank after early withdrawal, the applicable interest rate will be the actual interest rate minus 1%</li>
                                                <li>RDs have no provision for partial withdrawals, but certain financial institutions offer the option to avail a loan against the deposit, where the RD must be provided as collateral</li>
                                                <li>RDs provide the investor with the option of premature withdrawal, but the applicable interest rate would be lower than the base rate</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <strong>Nominations under Fixed Deposit Schemes</strong>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>In an FD scheme, a nominee is a person who will receive the funds in case of death of the account holder.</li>
                                                <li>You will have to provide specific nominee details like name, age, address, etc.</li>
                                                <li>Only one nominee is allowed per account.</li>
                                                <li>In order to claim the funds, you will have to submit proof of death of the account holder.</li>
                                            </ul>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>In an RD Account, a nominee means the person who will get the funds in case of death of the account holder.</li>
                                                <li>You will have to provide specific nominee details like name, age, address, etc.</li>
                                                <li>Only one nominee is allowed per account.</li>
                                                <li>In order to claim the funds, you will have to submit proof of death of the account holder.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <strong>Loan Facility</strong>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Account holders can avail a loan against their FD accounts</li>
                                                <li>Auto Renewal: In this feature, the term of the deposit automatically renews upon maturity. These loans are granted to individuals who need additional funds but do not wish to prematurely dissolve their deposit</li>
                                                <li>You can acquire a loan of up to 70% to 90% of your deposit amount</li>
                                            </ul>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>You can avail a personal loan by using your RD account as collateral</li>
                                                <li>Banks offer up to 90% of the deposit amount</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-gray-100 even:bg-white">
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <strong>Income Tax</strong>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Income from fixed deposit accounts are taxed according to the depositor’s taxable slab</li>
                                                <li>Interest of FD is accumulated on an annual basis, but it is taxed on the basis of accrual</li>
                                            </ul>
                                        </td>
                                        <td className="border-b px-4 py-2 border-gray-300">
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Income from fixed deposit accounts are taxed according to the depositor’s taxable slab</li>
                                                <li>There is no TDS on income from RDs, but the investor needs to include the interest earned while filing the year’s ITR</li>
                                            </ul>
                                        </td>
                                    </tr>




                                </tbody>
                            </table>
                        </div>


                    </div>
                </section>
            </div>
        </div >
    );
};

export default RDCalculator;
