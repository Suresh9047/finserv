import { useState, useEffect } from 'react';

const TDSCalculator = () => {
  const [paymentSection, setPaymentSection] = useState('');
  const [profTax, setProfTax] = useState('');
  const [isMetro, setIsMetro] = useState('metro');
  const [payerType, setPayerType] = useState('');
  const [rentType, setRentType] = useState('');
  const [feeType, setFeeType] = useState('');
  const [tdsAmount, setTdsAmount] = useState('0.00');
  const [tdsRule, setTdsRule] = useState('');

  const sectionRates = {
    "192A": { rate: 10, threshold: 50000, rule: "If premature PF withdrawal exceeds Rs. 50,000, TDS is applicable @ 10%." },
    "193": { rate: 10, threshold: 0, rule: "TDS is applicable @ 10% on interest on securities." },
    "194K": { rate: 10, threshold: 0, rule: "TDS is applicable @ 10% on dividends on company shares & mutual funds." },
    "194A": { rate: 10, threshold: 40000, rule: "If interest exceeds Rs. 40,000, TDS is applicable @ 10%." },
    "194A_Bank": { rate: 10, threshold: 40000, rule: "If interest from banks exceeds Rs. 40,000, TDS is applicable @ 10%." },
    "194B": { rate: 30, threshold: 0, rule: "TDS is applicable @ 30% on winnings from lotteries." },
    "194BB": { rate: 30, threshold: 0, rule: "TDS is applicable @ 30% on winnings from horse races." },
    "194C": { rate: 1, threshold: 30000, individualRate: 1, otherRate: 2, rule: "If payment to contractors exceeds Rs. 30,000, TDS is applicable @ 1% (individual/HUF) or 2% (others)." },
    "194D": { rate: 5, threshold: 0, rule: "TDS is applicable @ 5% on insurance commission." },
    "194DA": { rate: 5, threshold: 100000, rule: "If life insurance payouts exceed Rs. 100,000, TDS is applicable @ 5%." },
    "194H": { rate: 5, threshold: 15000, rule: "If brokerage or commission exceeds Rs. 15,000, TDS is applicable @ 5%." },
    "194I": { rate: 2, threshold: 240000, machineryRate: 2, buildingRate: 10, rule: "If gross payment to the party during the F.Y. exceeds Rs. 2,40,000 then TDS will be applicable @ 2% in case of Plant& machinery and 10 % in case of land & building or furniture & fitting." },
    "194IA": { rate: 1, threshold: 5000000, rule: "If property transfer (non-agri) exceeds Rs. 5,000,000, TDS is applicable @ 1%." },
    "194IB": { rate: 5, threshold: 50000, rule: "If monthly rent exceeds Rs. 50,000, TDS is applicable @ 5%." },
    "194J": { rate: 10, threshold: 30000, professionalRate: 10, technicalRate: 2, rule: "If professional/royalty fees exceed Rs. 30,000, TDS is applicable @ 10% (professional) or 2% (technical)." },
    "194J_Tech": { rate: 2, threshold: 30000, rule: "If technical services/call center payments exceed Rs. 30,000, TDS is applicable @ 2%." },
    "194O": { rate: 1, threshold: 5000000, rule: "If e-commerce participant payments exceed Rs. 5,000,000, TDS is applicable @ 1%." },
  };

  const calculateTDS = () => {
    const amount = parseFloat(profTax);

    if (!paymentSection || isNaN(amount) || amount <= 0) {
      setTdsAmount("0.00");
      setTdsRule("");
      console.log("Invalid input");
      return;
    }

    let rate = sectionRates[paymentSection]?.rate || 0;
    const threshold = sectionRates[paymentSection]?.threshold || 0;

    if (paymentSection === "194C" && payerType) {
      rate = payerType === "individual" ? sectionRates[paymentSection].individualRate : sectionRates[paymentSection].otherRate;
    } else if (paymentSection === "194I" && rentType) {
      rate = rentType === "machinery" ? sectionRates[paymentSection].machineryRate : sectionRates[paymentSection].buildingRate;
    } else if (paymentSection === "194J" && feeType) {
      rate = feeType === "professional" ? sectionRates[paymentSection].professionalRate : sectionRates[paymentSection].technicalRate;
    }

    const tds = amount > threshold ? (amount * rate) / 100 : 0;

    setTdsAmount(tds.toFixed(2));
    setTdsRule(sectionRates[paymentSection]?.rule || "");
    console.log("TDS Calculated:", tds);
  };

  useEffect(() => {
    calculateTDS();
  }, [paymentSection, profTax, isMetro, payerType, rentType, feeType]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
        {/* Top Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <h1 className="text-4xl font-bold text-[#0282ba] mb-4">TDS Calculator</h1>
            <p className="text-lg leading-relaxed"> TDS calculator is a free, online tool that can help you
              determine whether you must deduct TDS and, if so, will
              display the appropriate deduction amount. TDS Interest
              calculator asks information about the recipient, payment
              and the nature of payment. This will help you to get
              information about TDS calculation on salary. Also, the
              online TDS calculator helps to check the TDS deduction
              very easily.
            </p>
          </div>
        </section>
        {/* calculator section */}
        <section className="py-8">
          <div className="container mx-auto">
            <div className="bg-white rounded-md shadow-md overflow-hidden calculator">
              <div className="flex md:flex-row flex-col">
                <div className="p-5 md:w-1/2">
                  <div className="mb-3">
                    <label htmlFor="isMetro" className="block text-gray-700 text-sm font-bold mb-1">PAN of recipient is available</label>
                    <select
                      className="form-control ismetro w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                      id="isMetro"
                      value={isMetro}
                      onChange={(e) => setIsMetro(e.target.value)}
                    >
                      <option value="metro">Yes</option>
                      <option value="non-metro">No</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="paymentSection" className="block text-gray-700 text-sm font-bold mb-1">No Of Payments</label>
                    <select
                      name="sectionId"
                      id="paymentSection"
                      value={paymentSection}
                      onChange={(e) => {
                        setPaymentSection(e.target.value);
                        setPayerType('');
                        setRentType('');
                        setFeeType('');
                      }}
                      className="form-control tdc-select w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                      required
                    >
                      <option value="" disabled selected>
                        -- Select --
                      </option>
                      <option value="192A">Section 192A - Premature PF withdrawal</option>
                      <option value="193">Section 193 - Interest on Securities</option>
                      <option value="194K">Section 194K - Dividends on Company Shares & Mutual Funds</option>
                      <option value="194A">Section 194A - Interest (Fixed Deposit)</option>
                      <option value="194A_Bank">Section 194A - Interest from Banks</option>
                      <option value="194B">Section 194B - Winnings from Lotteries</option>
                      <option value="194BB">Section 194BB - Winnings from Horse Races</option>
                      <option value="194C">Section 194C - Payment to Contractors</option>
                      <option value="194D">Section 194D - Insurance Commission</option>
                      <option value="194DA">Section 194DA - Life Insurance Payouts</option>
                      <option value="194H">Section 194H - Brokerage or Commission</option>
                      <option value="194I">Section 194I - Rent on Plant & Machinery</option>
                      <option value="194IA">Section 194IA - Property Transfer (non-agri)</option>
                      <option value="194IB">Section 194IB - Rent above ₹50,000/month</option>
                      <option value="194J">Section 194J - Professional/Royalty Fees</option>
                      <option value="194J_Tech">Section 194J - Technical Services, Call Centers</option>
                      <option value="194O">Section 194O - E-commerce Participants</option>
                    </select>
                  </div>
                  {paymentSection === "194C" && (
                    <div className="mb-3">
                      <label htmlFor="payerType" className="block text-gray-700 text-sm font-bold mb-1">Payer Type</label>
                      <select
                        className="form-control w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                        value={payerType}
                        onChange={(e) => setPayerType(e.target.value)}
                        id="payerType"
                      >
                        <option value="">-- Select --</option>
                        <option value="individual">Individual/HUF</option>
                        <option value="other">Others</option>
                      </select>
                    </div>
                  )}
                  {paymentSection === "194I" && (
                    <div className="mb-3">
                      <label htmlFor="rentType" className="block text-gray-700 text-sm font-bold mb-1">Rent Type</label>
                      <select
                        className="form-control w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                        value={rentType}
                        onChange={(e) => setRentType(e.target.value)}
                        id="rentType"
                      >
                        <option value="">-- Select --</option>
                        <option value="machinery">Plant & Machinery</option>
                        <option value="building">Land & Building or Furniture & Fitting</option>
                      </select>
                    </div>
                  )}
                  {paymentSection === "194J" && (
                    <div className="mb-3">
                      <label htmlFor="feeType" className="block text-gray-700 text-sm font-bold mb-1">Fee Type</label>
                      <select
                        className="form-control w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                        value={feeType}
                        onChange={(e) => setFeeType(e.target.value)}
                        id="feeType"
                      >
                        <option value="">-- Select --</option>
                        <option value="professional">Professional</option>
                        <option value="technical">Technical</option>
                      </select>
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="profTax" className="block text-gray-700 text-sm font-bold mb-1">Amount of payment</label>
                    <input
                      type="number"
                      className="form-control w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                      id="profTax"
                      placeholder="Amount of payment"
                      value={profTax}
                      onChange={(e) => setProfTax(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-3 md:w-1/2 flex flex-col justify-center items-center sum-container">
                  <div className="text-center sum-inside-container">
                    <p className="font-bold text-2xl">Total TDS</p>
                    <strong>
                      <p style={{ color: "#ff8800" }} className="text-xl" id="tdsAmount">
                        {tdsAmount}
                      </p>
                    </strong>
                    <p id="tdsRule">{tdsRule}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Detailed Section */}
        <section className="pt-0 pb-0 m-0">
          <div className="container">
            <h3 className="font-bold text-2xl mt-6 mb-2">Introduction to a TDS Calculator</h3>
            <p className="para">
              A TDS (Tax Deduction at Source) Calculator is an online tool designed to help individuals and businesses in India calculate the tax to be deducted at the source of income. This tool can determine the TDS liability on different types of incomes, including salary, interest, rent, and others. The calculator considers various deductions and exemptions under the Income Tax Act of 1961 and provides an estimate of the TDS to be deducted. With its user-friendly interface and easy-to-understand results, a TDS calculator is an essential tool for taxpayers who want to ensure they are paying the right amount of tax. In this guide, read about how to use a TDS amount calculator effectively and efficiently.
            </p>

            <h3 className="font-bold text-2xl mt-6 mb-2">Importance of TDS Calculator for Tax Planning</h3>
            <p className="para">
              TDS (Tax Deducted at Source) Calculator is an important tool for tax planning as it helps individuals and businesses estimate their tax liabilities and plan their finances accordingly. The following are some of the reasons why the TDS Calculator is important for tax planning:
            </p>

            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li>
                <strong>Accurate Tax Liability Calculation:</strong> TDS Calculator estimates the tax liability based on the current tax laws and rates. This helps determine the accurate amount of tax to be paid and avoids any penalties for underpayment or late payment of taxes.
              </li>
              <li>
                <strong>Easy Budgeting:</strong> TDS Calculator helps plan the tax budget by providing an estimate of the tax liability for the current financial year. This makes it easier for individuals and businesses to allocate funds for taxes and avoid any last-minute rush for arranging funds.
              </li>
              <li>
                <strong>Maximising Tax Savings:</strong> TDS Calculator estimates the taxes to be deducted, which can be compared with the available tax-saving investments and deductions. This helps in maximising tax savings and reducing tax liability.
              </li>
              <li>
                <strong>Tax Planning:</strong> TDS Calculator estimates the tax liability based on the current financial status. This helps individuals and businesses plan their finances and investments in a way that reduces their tax liability and increases their tax savings.
              </li>
            </ul>
            <h3 className="font-bold text-2xl mt-6 mb-2">Features and Benefits of Using the TDS Calculator</h3>
            <p className="para">
              The features and benefits of using the TDS Calculator are as follows:
            </p>

            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li>Easy calculation of TDS (Tax Deducted at Source) amount</li>
              <li>Instant and accurate results</li>
              <li>User-friendly interface</li>
              <li>Easy to use and understand</li>
              <li>Provides a detailed break-up of TDS calculation</li>
              <li>Option to download and save the TDS calculation</li>
              <li>Option to print the TDS calculation</li>
            </ul>

            <p className="para mt-4">
              With these features, one can access the full range of benefits offered by a TDS Calculator, which are explored below:
            </p>

            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li>Saves time and effort</li>
              <li>It avoids manual calculation errors</li>
              <li>Provides an accurate picture of the TDS amount</li>
              <li>It helps to plan taxes better</li>
              <li>Facilitates easy compliance with tax regulations</li>
              <li>It makes tax calculations simple and convenient</li>
              <li>Enables better tax planning and management</li>
            </ul>
            <h3 className="font-bold text-2xl mt-6 mb-2">How to Use TDS Amount Calculator</h3>
            <p className="para">
              Using a TDS Amount Calculator is a simple and straightforward task. While enabling a user to clearly understand their taxes, a TDS calculator can give them control of their taxes. Although it is advised to consult a Chartered Accountant, being aware of one’s tax details can also allow one to be independent.
            </p>
            <p className="para mt-2">
              Below are some general steps involved in using a TDS amount calculator:
            </p>

            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li>
                <strong>Gather all the necessary information:</strong> To use a TDS amount calculator, you will need information about your income, tax slab, and any exemptions or deductions you may be eligible for.
              </li>
              <li>
                <strong>Enter the information:</strong> Once you have all the information, enter it into the TDS amount calculator. You may need to provide details such as your salary, bonus, rent income, interest income, etc.
              </li>
              <li>
                <strong>Calculate TDS:</strong> The calculator will then use the information you provided to calculate the TDS you need to pay.
              </li>
              <li>
                <strong>Check the results:</strong> After calculating the TDS, check the results and ensure they are accurate.
              </li>
              <li>
                <strong>Use the results:</strong> The TDS amount that the calculator calculates can help you plan your finances and budget. You can also use the results to check if you have paid the correct amount of TDS.
              </li>
            </ul>
            <h3 className="font-bold text-2xl mt-6 mb-2">Understanding TDS Amount Deduction</h3>
            <p className="para">
              TDS stands for Tax Deducted at Source and refers to the amount of tax deducted by the employer or any other person responsible for paying income to an individual or a company. The TDS amount is calculated based on the income received and the tax slab applicable to the recipient. The amount deducted as TDS is then credited to the government’s account and is considered an advance payment toward the recipient’s tax liability.
            </p>

            <h3 className="font-bold text-2xl mt-6 mb-2">How to Calculate TDS Amount?</h3>
            <p className="para">
              Steps to calculate TDS (Tax Deducted at Source) amount are as follows:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>Determine your taxable income:</strong> Your salary, interest income, capital gains, rent, etc.</li>
              <li><strong>Determine the applicable TDS rate:</strong> The TDS rate is different for different types of income and is specified by the Indian Income Tax Act.</li>
              <li><strong>Calculate TDS amount:</strong> To calculate TDS, multiply the taxable income by the applicable TDS rate. For example, if your taxable income is INR 100,000 and the TDS rate is 10%, then the TDS amount would be INR 10,000.</li>
            </ul>

            <p className="para mt-2">
              <strong>Note:</strong> TDS is deducted at the source of income and is a form of advance tax payment. The TDS amount can be claimed as credit while filing your tax returns.
            </p>

            <h3 className="font-bold text-2xl mt-6 mb-2">How To Calculate TDS On Salary?</h3>
            <p className="para">
              The process for TDS calculation on salary is explained below:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>Determine the taxable salary:</strong> The taxable salary is the total salary minus exemptions, deductions, and exemptions under section 80C of the Income Tax Act.</li>
              <li><strong>Check the tax slab:</strong> The taxable salary is taxed based on the slab rate that applies to you. The slab rate changes based on the taxable salary.</li>
              <li><strong>Calculate TDS:</strong> TDS is calculated on the taxable salary by multiplying the taxable salary with the slab rate. The employer deducts the TDS monthly.</li>
              <li><strong>Check the TDS certificate:</strong> The TDS certificate is a statement that shows the TDS deducted by the employer. The TDS certificate is also known as Form 16.</li>
            </ul>
            <h3 className="font-bold text-2xl mt-6 mb-2">Nature of Payments You Can Calculate TDS Amount</h3>
            <p className="para">
              TDS (Tax Deducted at Source) applies to the following nature of payments:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li>Salary</li>
              <li>Commission</li>
              <li>Rent</li>
              <li>Professional Fees</li>
              <li>Interest on Securities</li>
              <li>Interest on Debentures</li>
              <li>Commission or Brokerage</li>
              <li>Royalty</li>
              <li>Non-compete fees</li>
              <li>Remuneration to a Director of a Company</li>
              <li>Any other income chargeable under the head “Income from other sources”</li>
            </ul>

            <h3 className="font-bold text-2xl mt-6 mb-2">Understanding Tax Deducted at Source (TDS)</h3>
            <p className="para">
              Tax Deducted at Source (TDS) is a system of collecting tax from the source of income by the person making the payment.
              The person responsible for making the payment is known as the deductor, and the person receiving the payment is known
              as the deductee. The main objective of TDS is to ensure that the government receives a regular income stream without
              waiting for the end of the financial year. This is because TDS ensures that the tax is collected regularly, reducing
              the burden of paying a large amount at the end of the year.
            </p>
            <h3 className="font-bold text-2xl mt-6 mb-2">How Can The TDS Calculator Help You in Claiming a Refund?</h3>
            <p className="para">
              A TDS calculator can help you in claiming a refund in the following ways:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>Calculating TDS:</strong> The TDS calculator helps you to calculate the tax deducted at source (TDS) accurately, thus reducing the chances of errors.</li>
              <li><strong>Checking Eligibility:</strong> The calculator also helps you to check if you are eligible for a TDS refund by considering factors like the amount of tax paid, tax slab, and other relevant information.</li>
              <li><strong>Maximising Refund:</strong> The calculator helps you maximise your TDS refund by calculating the amount of TDS deducted and the eligible refund amount.</li>
              <li><strong>Document Preparation:</strong> The TDS calculator provides the information required to prepare the documents for claiming the TDS refund.</li>
              <li><strong>Time-saving:</strong> Using a TDS calculator saves you time and effort, as you don’t have to calculate the TDS and check your eligibility manually.</li>
            </ul>

            <h3 className="font-bold text-2xl mt-6 mb-2">Incomes Where TDS Deduction is Applicable</h3>
            <p className="para">
              There are a few income sources where TDS Deduction is applicable. These are listed below:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>TDS on Salary:</strong> It is deducted by an employer from the salary of an employee and deposited with the government.</li>
              <li><strong>TDS on Interest:</strong> It is deducted by banks and financial institutions from the interest earned on fixed deposits, recurring deposits, etc.</li>
              <li><strong>TDS on Rent:</strong> It is deducted by a tenant from the rent payable to the landlord and deposited with the government.</li>
              <li><strong>TDS on Commission:</strong> It is deducted by a company from the commission payable to its agents, brokers, etc.</li>
              <li><strong>TDS on Professional Fees:</strong> It is deducted by an individual or a company from the professional fees payable to a consultant, lawyer, architect, etc.</li>
              <li><strong>TDS on Contract Payments:</strong> It is deducted by an individual or a company from payments made to contractors for services or goods.</li>
              <li><strong>TDS on Commission or Brokerage:</strong> It is deducted by a company from the commission or brokerage payable to its agents, brokers, etc.</li>
              <li><strong>TDS on Dividends:</strong> It is deducted by a company from the dividends payable to its shareholders.</li>
              <li><strong>TDS on Prize Money:</strong> It is deducted by an individual or a company from prize money payable to winners of contests or games.</li>
              <li>TDS on Winnings from Lotteries, Horse Races, etc. It is deducted by an individual or a company from winnings payable to winners of lotteries, horse races, etc.</li>
            </ul>
            <h3 className="font-bold text-2xl mt-6 mb-2">How Can You Calculate TDS Manually?</h3>
            <p className="para">
              To calculate TDS (Tax Deducted at Source) manually, follow the steps below:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>Determine the taxable amount:</strong> Calculate the total income from all sources, including salary, rental income, and other sources.</li>
              <li><strong>Calculate the TDS rate:</strong> TDS rate is determined based on the type of income and the tax slab that you fall under. It can range from 0% to 30%. You can find the TDS rates for different types of income on the income tax department’s website.</li>
              <li><strong>Multiply the taxable amount by the TDS rate:</strong> To calculate the TDS amount, multiply the taxable amount by the TDS rate. For example, if the taxable amount is Rs. 1,00,000 and the TDS rate is 10%, the TDS amount would be Rs. 10,000 (1,00,000 x 0.10).</li>
              <li><strong>Deduct TDS from the taxable amount:</strong> Subtract the TDS amount from the taxable amount to get the net taxable amount.</li>
              <li><strong>Claim TDS credit:</strong> If TDS has been deducted from your income, you can claim credit for the TDS amount while filing your income tax return. The TDS credit can be claimed against the tax liability for that particular financial year.</li>
            </ul>

            <h3 className="font-bold text-2xl mt-6 mb-2">Advantages of Using TDS Calculator Over Manual Calculation</h3>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba]">
              <li><strong>Accuracy:</strong> TDS calculators are equipped with in-built formulas and calculations to provide accurate results, which is impossible manually as human errors are possible.</li>
              <li><strong>Time-saving:</strong> TDS calculators save much more time than manual calculation, as manual calculation requires more time and attention. TDS calculators are fast and efficient in providing results.</li>
              <li><strong>Ease of Use:</strong> TDS calculators are user-friendly and do not require any technical knowledge. They are easy to use and provide results in a matter of seconds.</li>
              <li><strong>Convenient:</strong> TDS calculators can be used from anywhere and at any time. They can be used on computers, laptops, smartphones, and other electronic devices, making them more convenient than manual calculation.</li>
              <li><strong>Consistency:</strong> TDS calculators provide consistent results, which is not possible in manual calculation. This ensures that the results are reliable and trustworthy.</li>
              <li><strong>Compliance:</strong> TDS calculators follow the guidelines set by the government and ensure compliance with tax laws, which is impossible manually.</li>
              <li><strong>Error-free:</strong> TDS calculators are free from errors and provide results that are free from errors. This helps to avoid mistakes and ensure that the results are accurate and reliable.</li>
            </ul>

          </div>
        </section>
      </div>
    </div>
  );
};

export default TDSCalculator;