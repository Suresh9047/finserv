import Calculator from '../../components/ReusableChartCalculator';


const CarLoanCalculator = () => {
  const inputs = [
    {
      name: 'loanAmount',
      label: 'Loan Amount',
      min: 100000,
      max: 10000000,
      step: 5000,
      defaultValue: 1000000,
      prefix: '₹',
    },
    {
      name: 'interestRate',
      label: 'Interest Rate (%)',
      min: 5,
      max: 30,
      step: 0.5,
      defaultValue: 6.5,
      suffix: '%',
    },
    {
      name: 'loanTerm',
      label: 'Loan Tenure (Years)',
      min: 1,
      max: 30,
      step: 1,
      defaultValue: 5,
    },
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

  const generateCarLoanSchedule = (values) => {
    const P = parseFloat(values.loanAmount) || 0;
    const r = (parseFloat(values.interestRate) || 0) / 100;
    const t = parseInt(values.loanTerm) || 0;
    const n = 12; 

    const monthlyRate = r / n;
    const totalMonths = t * 12;
    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    let balance = P;
    const schedule = [];
    const startDate = new Date();

    for (let i = 0; i < totalMonths; i++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;

      const monthIndex = (startDate.getMonth() + i) % 12;
      const year = startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12);
      const month = new Date(year, monthIndex).toLocaleString("default", { month: "long" });

      const percentPaid = ((P - balance) / P) * 100;

      schedule.push({
        year,
        month,
        principal: principalPayment,
        interest: interest,
        emi,
        balance: balance < 0 ? 0 : balance,
        paidToDate: percentPaid,
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
            <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Loan EMI Calculator</h1>
            <p className="text-lg leading-relaxed">
              A Loan EMI Calculator is a simple tool that helps you estimate your monthly loan payments. Enter the loan amount, interest rate, and tenure to quickly see your EMIs. This helps you plan your finances and choose the best loan option for your purchase.
            </p>
          </div>
        </section>
        <Calculator title="Loan EMI Calculator" inputs={inputs} calculate={calculate} generateScheduleData={generateCarLoanSchedule} resultTitle = "EMI Amount"  buttonchange = "Calculate loan"/>

        <section className="pt-0 mt-0">
          <div className="container">
            <h4 className="font-bold text-lg mb-2">Understanding Loan EMI Calculator</h4>
            <p className="text-muted">
              Buying a car is everyone’s dream at some point in their life. Well, here, you can make this dream come true. Our Loan EMI Calculator is designed to give you a detailed understanding of your monthly loan payments. By simply entering the loan amount, interest rate, and repayment tenure into the calculator, you’ll receive an immediate estimate of your monthly instalments. This tool allows you to plan your budget efficiently, explore different financing options, and ensure the loan terms fit within your financial constraints. Utilise our calculator to navigate your car financing options accurately and confidently, making well-informed decisions aligning with your financial goals as you move closer to purchasing your vehicle.
            </p>
            <h4 className="font-bold text-lg mt-8 mb-2">How to Use OM Finserv Loan EMI Calculator?</h4>
            <p>Using OM Finserv Loan EMI Calculator is simple and straightforward. Follow these steps to estimate your monthly loan payments:</p>
            <ul className="list-none space-y-2">
              {[
                ["Enter the Loan Amount", "Input the total amount you wish to borrow for your loan."],
                ["Specify the Interest Rate", "Provide the annual interest rate offered by the lender."],
                ["Choose the Loan Tenure", "Select the period over which you plan to repay the loan, typically ranging from 1 to 7 years."],
                ["Calculate EMI", "Click on the 'Calculate' button to instantly see your monthly EMI amount."],
              ].map(([title, desc]) => (
                <li key={title} className="bg-white border-b p-2">
                  🔹 <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>
            <p>OM Finserv Loan EMI Calculator provides an easy and efficient way to plan your loan repayment, helping you make informed financial decisions.</p>

            <h4 className="font-bold text-lg mt-8 mb-2">Benefits of Using a Loan EMI Calculator</h4>
            <p>Using a loan EMI calculator provides several benefits that can help you make well-informed decisions about financing your vehicle. Here are some of the key advantages:</p>
            <ul className="list-none space-y-2">
              {[
                ["Financial Planning", "The calculator helps you determine the exact amount of your monthly EMI in advance, which aids in more effectively planning your monthly budget and expenditures."],
                ["Instant Results", "You can quickly get an idea of your repayment amounts, tenure, and interest rate. This saves time compared to manually calculating EMIs."],
                ["Compare Different Scenarios", "A loan EMI calculator allows you to easily adjust the variables  (loan amount, interest rate, tenure) to see how changes affect your monthly payments. This can be crucial in choosing the right loan offer that doesn’t sit too tight on your budget."],
                ["Helps in Assessing Affordability", "By experimenting with various combinations  of loan amounts and tenures, you can find out what amount of loan you can comfortably afford without straining your finances."],
                ["Avoids Calculation Errors", " Using an EMI calculator ensures accuracy that might not be possible with manual calculations, thereby preventing errors that could affect your financial planning."],
                ["Facilitates Better Negotiations", "Knowing your EMIs and the total interest  to be paid can put you in a better position to negotiate with lenders. It equips you with the necessary information to discuss potential interest rates and down payment options."],
                ["Educational Tool", "For those unfamiliar with how loans work, a loan EMI calculator is an educational tool  illustrating how interest rates and loan tenures affect monthly payments and the total interest paid."]
              ].map(([title, desc]) => (
                <li key={title} className="bg-white border-b p-2">
                  🔹 <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-lg mt-8 mb-2">Factors Affecting Loan EMI</h4>
            <p className="mb-4">When considering a loan, it’s important to understand the various factors that can influence your Equated Monthly Installment (EMI). Here are the key elements that affect loan EMIs:</p>
            <ul className="list-none space-y-2">
              {[
                ["Loan Amount", "The principal amount you borrow has a direct impact on your EMI.Higher loan amounts will result in higher EMIs."],
                ["Interest Rate", "This is one of the most critical factors affecting your EMI. Higher interest rates increase the EMI and the overall cost of the loan, while lower rates make the loan more affordable."],
                ["Loan Tenure", "The duration over which you choose to repay the loan also affects your EMI.Longer loan terms mean lower EMIs but higher total interest paid, while shorter terms increase monthly payments but decrease the total interest burden."],
                ["Down Payment", "A larger down payment reduces the principal amount  you need to borrow, which can significantly lower your EMI."],
                ["Credit Score", "Your credit score can influence the interest rate lenders offer. A higher credit score may help you secure a lower interest rate, thus reducing the EMI."],
                ["Type of Interest Rate (Fixed vs. Floating)", "Fixed rates mean the EMI remains constant throughout the tenure, providing predictability in budgeting. Floating rates can vary with market conditions, potentially affecting the EMI during the loan period."],
                ["Loan Scheme and Terms", "Specific loan schemes may offer different terms, including interest rate discounts or waivers for certain customer segments (e.g., women or existing bank customers), which can affect the EMI."],
                ["Prepayments", "Making prepayments on your loan can reduce the principal  amount and either decrease the EMI or shorten the loan tenure, depending on the terms agreed with the lender."]
              ].map(([title, desc]) => (
                <li key={title} className="bg-white border-b p-2">
                  🔹 <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-lg mt-8 mb-2">Amortisation Schedule</h4>
            <p className="mb-4">Here is an example of an amortisation schedule for a loan of Rs 50 lakhs  for 15 years with a 9% interest rate. This table is just to help you understand the process of connecting real numbers to our experts:</p>
            <div className="overflow-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#0074cc] text-white font-semibold text-center">
                    <th className="p-3 border border-gray-300">Year</th>
                    <th className="p-3 border border-gray-300">Beginning Balance ({"\u20B9"})</th>
                    <th className="p-3 border border-gray-300">Annual Payment ({"\u20B9"})</th>
                    <th className="p-3 border border-gray-300">Interest Paid ({"\u20B9"})</th>
                    <th className="p-3 border border-gray-300">Principal Paid ({"\u20B9"})</th>
                    <th className="p-3 border border-gray-300">Ending Balance ({"\u20B9"})</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-center">
                  {[
                    [1, "5,000,000", "722,976", "450,000", "272,976", "4,727,024"],
                    [2, "4,727,024", "722,976", "425,432", "297,544", "4,429,480"],
                    [3, "4,429,480", "722,976", "400,673", "322,303", "4,107,177"],
                    [4, "4,107,177", "722,976", "375,646", "347,330", "3,759,847"],
                    [5, "3,759,847", "722,976", "350,376", "372,600", "3,387,247"],
                  ].map((row) => (
                    <tr key={row[0]} className="odd:bg-white even:bg-gray-100">
                      {row.map((cell) => (
                        <td key={cell} className="p-3 border border-gray-300">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <h4 className="font-bold text-lg mt-8 mb-2">Online Loan EMI Calculators: A Comparison</h4>
            <p className="mb-4">Here’s a detailed comparison of loan options from various leading banks,showing each bank’s standout features and benefits:</p>
            <ul className="list-none space-y-2">
              {[
                ["HDFC Bank Loans", "Catering to high-end vehicle enthusiasts, HDFC provides loans for luxury cars with an effective interest rate of 9.40% p.a. With financing available up to Rs. 10 crores, these loans are perfect for purchasing premium vehicles."],
                ["State Bank of India Loan EMI Cal", "SBI’s unique offering is designed for professionals and agriculturalists who may not have traditional proof of income. Starting at an effective interest rate of 8.75% p.a., these loans accommodate the needs of diverse professional backgrounds."],
                ["Axis Bank Monthly EMI Calculator Loan", "Ideal for those seeking smaller loan amounts, Axis Bank offers loans starting from Rs. 1 lakh with an effective interest rate beginning at 9.30% p.a. This makes it accessible for buyers looking for modest financing options."],
                ["Federal Bank Loan EMI", "This bank enhances its loan package with free personal accident insurance, appealing to borrowers who value-added security. With interest rates starting at 8.85% p.a. and no requirement for income documentation, Federal Bank simplifies the borrowing process."],
                ["Canara Bank Loan Eligibility Calculator", "Known for competitive interest rates, Canara Bank offers loans for both used and new cars starting at an interest rate of 8.70% p.a. They also provide preferential rates for women, supporting female car ownership."],
                ["ICICI Bank Loan EMI", "Featuring long repayment tenures of up to 7 years and starting interest rates of 9.10% p.a., ICICI Bank’s loans are designed for those who prefer spreading their payments over an extended period, making monthly outgo more manageable."]
              ].map(([title, desc]) => (
                <li key={title} className="bg-white border-b p-2">
                  🔹 <strong>{title}:</strong> {desc}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
};

export default CarLoanCalculator;
