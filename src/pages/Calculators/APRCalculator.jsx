import ReusableCalculator from '../../components/ReusableCalculator';


const Inputs = [
    {
        name: 'loanAmount',
        label: 'Monthly Investment (₹)',
        min: 40000,
        max: 150000000,
        step: 500,
        defaultValue: 5000,
        prefix: '₹',
    },
    {
        name: 'tenure',
        label: 'Time Period (Years)',
        min: 1,
        max: 30,
        defaultValue: 10,
        suffix: ' yrs',
    },
    {
        name: 'interestRate',
        label: 'Expected ROI (%)',
        min: 1,
        max: 30,
        step: 0.5,
        defaultValue: 12,
        suffix: '%',
    },
];

const calculateResult = ({ loanAmount, fees, tenure, interestRate }) => {
    const principal = parseFloat(loanAmount) || 0;
    const feeAmount = parseFloat(fees) || 0;
    const months = parseFloat(tenure) || 1;
    const rate = parseFloat(interestRate) || 0;

    if (principal <= 0 || months <= 0) {
        return {
            main: 0,
            breakdown: {
                'Error': 0
            }
        };
    }

    const totalInterest = principal * (rate / 100) * (months / 12);
    const totalCost = principal + totalInterest + feeAmount;
    const apr = ((totalCost - principal) / principal) * (12 / months) * 100;

    return {
        main: apr,
        breakdown: {
            'Investment': totalCost,
            'Profit': totalInterest,
        }
    };
};

const generateScheduleData = (values) => {
    const principal = parseFloat(values.loanAmount) || 0;
    const annualRate = parseFloat(values.interestRate) || 0;
    const years = parseFloat(values.tenure) || 0;

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    if (principal <= 0 || monthlyRate <= 0 || months <= 0) return [];

    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);

    let balance = principal;
    const schedule = [];
    const startDate = new Date();

    for (let i = 0; i < months; i++) {
        const interest = balance * monthlyRate;
        const principalPaid = emi - interest;
        balance -= principalPaid;

        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth() + i);
        const year = currentDate.getFullYear();
        const month = currentDate.toLocaleString('default', { month: 'long' });

        const paidToDate = ((principal - balance) / principal) * 100;

        schedule.push({
            year,
            month,
            principal: principalPaid,
            interest,
            emi,
            balance: balance > 0 ? balance : 0,
            paidToDate: paidToDate > 100 ? 100 : paidToDate,
        });
    }

    return schedule;
};




const APRCalculator = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">APR Calculator</h1>
                        <p className="text-lg leading-relaxed">
                            Annual Percentage Rate (APR) is the total cost of borrowing money, expressed as a yearly
                            percentage. It includes the interest rate plus any additional fees or charges, such as loan
                            origination fees, closing costs, and other lender fees.
                        </p>
                    </div>
                </section>

                <ReusableCalculator
                    title="APR Calculator"
                    inputs={Inputs}
                    calculateResult={calculateResult}
                    generateScheduleData={generateScheduleData}
                    resultTitle = "Total Amount"
                    buttonchange = "Calculate APR"


                />

                {/* Bottom Detailed Section */}
                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mt-6">What is an Annual Percentage Rate (APR) Calculator?</h2>
                        <p className="mt-2">
                            The APR is an all-inclusive, annualized cost indicator of a loan. It includes interest as well as
                            fees and other charges that borrowers will have to pay.
                        </p>
                        <p className="mt-2">
                            Borrowers often confuse APR with the interest rate. The interest rate is the amount of compensation
                            per period for borrowing money and includes the cost of principal only.
                        </p>
                        <p className="mt-2">
                            While valid, interest rates do not offer the accuracy needed to determine which rate from which
                            lender amounts to the best deal. Since the APR includes both interest and fees, it addresses this
                            challenge by factoring into the interest rate and other additional costs associated with the loan.
                        </p>

                        <h2 className="font-bold text-2xl mt-6">Limitations of the APR</h2>
                        <p className="mt-2">
                            While the APR serves as an excellent indicator for loan comparisons, the listed fee structure
                            presumes that the loan will run its course. For any borrower planning to pay their loan off more
                            quickly, the APR will tend to underestimate the impact of the upfront costs.
                        </p>
                        <p className="mt-2">
                            For example, upfront fees appear significantly cheaper spread out over a 30-year mortgage compared
                            with a more accelerated 10-year repayment plan. In the U.S., borrowers usually pay off 30-year
                            mortgages early due to reasons such as home sales, refinancing, and pre-payments. Therefore, when
                            comparing loans with the same APR, the loan with lower upfront fees is more favorable to borrowers
                            intending to pay off a mortgage early.
                        </p>
                        <div>
                            <h2 className="font-bold text-2xl mt-6">Types of APRs</h2>
                            <p className="mt-2">
                                Lenders should also understand the two different types of APR loans. Banks offer both fixed and
                                variable APR loans, and each loan type comes with pros and cons.
                            </p>

                            <h2 className="font-bold text-2xl mt-6">Fixed APRs</h2>
                            <p className="mt-2">
                                Loans with fixed APRs offer steady rates for the duration of the loan. For this reason, borrowers
                                receiving an attractive fixed rate should consider locking it in during a period of relatively low
                                market interest rates due to the likelihood that rates will rise later. Fixed rates are generally
                                higher than variable rates at the time of loan origination.
                            </p>

                            <h2 className="font-bold text-2xl mt-6">Variable APRs</h2>
                            <p className="mt-2">
                                Loans with variable APRs include rates that may change with time. These rates tend to rise and fall
                                with an index such as the Federal Funds Rate. For instance, if the market interest rates rise,
                                variable APRs tied to that index will probably also increase.
                            </p>
                            <p className="mt-2">
                                Borrowers should also be aware of another component to variable APRs called a credit-based margin.
                                Lenders create credit-based margins, which use creditworthiness rather than the market index to
                                determine a portion of the APR. Including the credit-based margin for each individual can prevent
                                borrowers with poor credit scores from obtaining a lower variable rate assuming the lender will
                                grant them the loan at all.
                            </p>
                            <p className="mt-2">
                                Nonetheless, borrowers should consider variable rates under some circumstances. Suppose a borrower
                                takes out a loan during a time of relatively high market rates when analysts forecast rate declines.
                                In that case, variable rates will probably lead to lower overall interest payments. Historical data
                                has shown that borrowers generally paid less interest with a variable rate than a fixed-rate loan.
                            </p>
                            <p className="mt-2">
                                Additionally, borrowers should consider the duration of the loan. Generally, the longer the loan
                                term, the greater the impact of rate fluctuations. This means that movements in interest rates can
                                more deeply impact a 30-year loan than a loan with a 10 or 15-year term.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default APRCalculator;
