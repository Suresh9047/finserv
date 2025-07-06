import { useState, useEffect } from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';


const SalaryCalculator = () => {
    const [annualCTC, setAnnualCTC] = useState('');
    const [bonus, setBonus] = useState('');
    const [profTax, setProfTax] = useState('');
    const [employerPF, setEmployerPF] = useState('');
    const [employeePF, setEmployeePF] = useState('');
    const [additionalDeduction, setAdditionalDeduction] = useState('');
    const [otherDeductions, setOtherDeductions] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);

    const [totalMonthlyDeductions, setTotalMonthlyDeductions] = useState(0);
    const [totalAnnualDeductions, setTotalAnnualDeductions] = useState(0);
    const [netAnnualIncome, setNetAnnualIncome] = useState(0);
    const [netMonthlyIncome, setNetMonthlyIncome] = useState(0);

    useEffect(() => {
        const calculateSalary = () => {
            const parseVal = (val) => parseFloat(val.replace(/,/g, '')) || 0;

            const totalIncome = parseVal(annualCTC) + parseVal(bonus);
            const totalMonthly = parseVal(profTax) + parseVal(employerPF) + parseVal(employeePF) + parseVal(additionalDeduction) + parseVal(otherDeductions);
            const totalAnnual = totalMonthly * 12;
            const netAnnual = totalIncome - totalAnnual;
            const netMonthly = netAnnual / 12;

            setTotalMonthlyDeductions(totalMonthly);
            setTotalAnnualDeductions(totalAnnual);
            setNetAnnualIncome(netAnnual);
            setNetMonthlyIncome(netMonthly);
        };

        calculateSalary();
    }, [annualCTC, bonus, profTax, employerPF, employeePF, additionalDeduction, otherDeductions]);

    const formatCurrency = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(value);

    const handleIncrement = (value, setValue) => {
        setValue(String((parseFloat(value) || 0) + 1));
    };

    const handleDecrement = (value, setValue) => {
        setValue(String(Math.max((parseFloat(value) || 0) - 1, 0)));
    };

    const renderInput = (label, value, setValue, id) => (
        <div className="mb-4">
            <div className="flex rounded-md shadow-sm border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden">
                <input
                    type="text"
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 px-3 py-2 outline-none focus:ring-0"
                    placeholder={label}
                    onFocus={() => setFocusedInput(id)}
                    onBlur={() => setFocusedInput(null)}
                />
                <div className={`flex flex-col transition-opacity duration-200 ${focusedInput === id ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        type="button"
                        onClick={() => handleIncrement(value, setValue)}
                        className="px-2 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <FaCaretUp />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDecrement(value, setValue)}
                        className="px-2 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <FaCaretDown />
                    </button>
                </div>
            </div>
        </div>
    );


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">

                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Salary Calculator</h1>
                        <p className="text-lg leading-relaxed">
                            A salary calculator is a very easy tool to use which helps in determining the total annual deductions, take-home annual salary, and total monthly deductions of an individual. This inhand salary calculator uses some basic components such as the  basic salary, House Rent Allowance, Leave Travel Allowance, Professional Tax, Bonus, Special Allowance, Employee contribution to provident fund etc to calculate the salary.
                        </p>
                    </div>
                </section >

                {/* calculator section */}
                <div className="max-w-7xl mx-auto p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md">
                        {/* Input Section */}
                        <div className="flex-1">
                            {renderInput('Annual CTC', annualCTC, setAnnualCTC, 'annualCTC')}
                            {renderInput('Bonus (₹)', bonus, setBonus, 'bonus')}
                            {renderInput('Monthly Professional Tax', profTax, setProfTax, 'profTax')}
                            {renderInput('Monthly Employer PF', employerPF, setEmployerPF, 'employerPF')}
                            {renderInput('Monthly Employee PF', employeePF, setEmployeePF, 'employeePF')}
                            {renderInput('Monthly Additional Deduction', additionalDeduction, setAdditionalDeduction, 'additionalDeduction')}
                            {renderInput('Other Deductions', otherDeductions, setOtherDeductions, 'otherDeductions')}
                        </div>

                        {/* Salary Breakdown */}
                        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
                                Salary Breakdown
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-100 p-4 rounded border text-center">
                                    <p className="text-gray-500 text-sm">Total Monthly Deductions</p>
                                    <h3 className="text-green-600 text-lg">{formatCurrency(totalMonthlyDeductions)}</h3>
                                </div>
                                <div className="bg-gray-100 p-4 rounded border text-center">
                                    <p className="text-gray-500 text-sm">Total Annual Deductions</p>
                                    <h3 className="text-green-600 text-lg">{formatCurrency(totalAnnualDeductions)}</h3>
                                </div>
                                <div className="bg-gray-100 p-4 rounded border text-center">
                                    <p className="text-[#0282ba] text-sm">Take Home Annual Salary</p>
                                    <h3 className="text-[#0282ba] text-lg">{formatCurrency(netAnnualIncome)}</h3>
                                </div>
                                <div className="bg-gray-100 p-4 rounded border text-center">
                                    <p className="text-[#0282ba] text-sm">Take Home Monthly Salary</p>
                                    <h3 className="text-[#0282ba] text-lg">{formatCurrency(netMonthlyIncome)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>



                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h2 className="font-bold text-2xl mb-2">What is Salary, and What are the Components of a Salary Structure?</h2>
                        <p className="para"> A salary is a form of payment to an employee, typically paid regularly, such as monthly or bi-weekly, for the services they provide to their employer. Salaries are typically calculated as a fixed amount rather than based on the number of days worked or the amount of work completed. Some employees may receive additional benefits and incentives, such as health insurance, retirement plans, or stock options, in addition to their salary. The amount of a salary can vary greatly depending on the type of job, the industry, the location, and an individual’s experience and education level.</p>
                        <p className="para">The major components of a salary are given below:</p>

                        <h2 className="font-bold text-2xl mb-2">Basic Salary</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Fundamental component forming the core of the pay structure.</li>
                            <li>Provides a foundational amount for the overall salary.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">House Rent Allowance (HRA):</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Allocated to cover accommodation expenses.</li>
                            <li>Varied based on the employee’s rental situation and location.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">Dearness Allowance (DA):</h2>
                        <p className="para">
                            Dearness Allowance (DA) is an extra amount added to a salary to help employees cope with the
                            rising cost of living and inflation. It ensures that their purchasing power remains stable by
                            periodically adjusting based on changes in living expenses. Essentially, DA is a way to account
                            for economic conditions and maintain the real value of an employee’s salary.
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Adjusts for changes in inflation and the cost of living.</li>
                            <li>Ensures that the salary keeps pace with economic fluctuations.</li>
                        </ul>
                        <h2 className="font-bold text-2xl mb-2">Travel Allowance (TA):</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Provided for work-related travel expenses.</li>
                            <li>Aims to ease the financial burden associated with business trips.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">Medical Allowance:</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Addresses health-related costs.</li>
                            <li>Covers medical expenses and promotes the well-being of employees.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">Special Allowance:</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Flexible component that may vary based on job role or company policies.</li>
                            <li>Tailored to accommodate specific needs or responsibilities.</li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">Provident Fund (PF):</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Retirement savings scheme.</li>
                            <li>A portion of the salary is contributed to the PF for financial security post-employment.</li>
                        </ul>
                        <h2 className="font-bold text-2xl mb-2">Gratuity:</h2>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Lump sum payment by the employer.</li>
                            <li>
                                Given as a token of appreciation for long-term service, typically upon retirement or resignation.
                            </li>
                        </ul>

                        <h2 className="font-bold text-2xl mb-2">What is a Salary Calculator?</h2>
                        <p className="para">
                            A salary calculator is a tool that allows individuals to calculate their estimated annual or
                            monthly salary based on the information they input, such as the number of days worked, the rate
                            of pay, and any bonuses or deductions. It can also factor in taxes and benefits to provide a
                            more accurate net pay estimate. Salary calculators can be found online, and some employers use
                            them to determine an employee’s compensation package.
                        </p>

                        <h2 className="font-bold text-2xl mb-2">How Does Inhand Salary Calculator Work?</h2>
                        <p className="para">
                            The salary calculator considers various factors such as basic salary, house rent allowance
                            (HRA), conveyance allowance, medical allowance, and other deductions such as tax and Provident
                            Fund (PF). Here’s an example of how the salary calculator works:
                        </p>
                        <p className="para">Suppose an individual earns a basic salary of INR 30,000 per month.</p>
                        <p className="para">
                            <strong>Step 1:</strong> Calculate HRA – If the HRA received is 50% of the basic salary, then the
                            HRA would be 30,000 x 50% = INR 15,000.
                        </p>
                        <p className="para">
                            <strong>Step 2:</strong> Calculate Conveyance Allowance – If the conveyance allowance received is
                            INR 2,000, then the total conveyance allowance would be INR 2,000.
                        </p>
                        <p className="para">
                            <strong>Step 3:</strong> Calculate Medical Allowance – If the medical allowance received is INR
                            2,000, then the total medical allowance would be INR 2,000.
                        </p>
                        <p className="para">
                            <strong>Step 4:</strong> Add up all the allowances – Adding up the basic salary, HRA,
                            conveyance allowance, and medical allowance, the gross salary would be 30,000 + 15,000 + 2,000 +
                            2,000 = INR 49,000
                        </p>
                        <p className="para">
                            <strong>Step 5:</strong> Calculate Deductions – The next step is to calculate the deductions such
                            as tax and PF.
                        </p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>
                                Tax Deduction: If the tax rate is 10%, then the tax would be 49,000 x 10% = INR 4,900
                            </li>
                            <li>
                                Provident Fund (PF) Deduction: If the PF rate is 12%, then the PF would be 49,000 x 12% = INR
                                5,880
                            </li>
                        </ul>
                        <p className="para">
                            <strong>Step 6:</strong> Calculate Net Salary – Finally, subtracting the total deductions from
                            the gross salary, the net salary would be 49,000 – 4,900 – 5,880 = INR 38,220
                        </p>

                        <h2 className="font-bold text-2xl mb-2">
                            What is the Difference Between CTC & Take Home / Inhand Salary?
                        </h2>
                        <p className="para">
                            The table below shows the major difference between a CTC and a take-home salary:
                        </p>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full border border-gray-300 text-left text-sm">
                                <thead>
                                    <tr className="text-center">
                                        <th className="font-bold px-4 py-2 border border-gray-300">CTC</th>
                                        <th className="font-bold px-4 py-2 border border-gray-300">Take-Home / Inhand Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            CTC stands for Cost to Company, the total amount an organisation pays for an employee’s
                                            salary.
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            Take-Home or Inhand Salary, on the other hand, is the amount an employee receives after
                                            deducting all the taxes and other deductions from the CTC.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            It includes all costs the employer pays the employees, including base salary, bonuses,
                                            provident fund, medical insurance, gratuity, and other benefits.
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            It is the amount that the employee can use for personal expenses, savings, and
                                            investments.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            CTC is the total cost incurred by the company to employ a person.
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300 para">
                                            Take Home Salary is the amount an employee receives after all the deductions.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="font-bold text-2xl mb-2">What is the Formula for Salary Calculation?</h3>
                        <p className="para">The formula for calculating salary in India is as follows:</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Gross Salary = Basic Salary + House Rent Allowance (HRA) + Dearness Allowance (DA) + Other Allowances</li>
                            <li>Net Salary = Gross Salary – (Professional Tax + Income Tax + Other Deductions)</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-4">Factors Affecting The Formula For Calculating Salaries</h3>
                        <p className="para">The following factors affect the formula for calculating salaries:</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li><strong>Experience:</strong> Years of experience in the field can also affect an employee’s salary. Those with more experience and greater expertise in their field may be compensated with higher wages.</li>
                            <li><strong>Industry:</strong> The industry an employee is working in can significantly impact their salary. Different sectors may offer different wages depending on the skills and experience required.</li>
                            <li><strong>Location:</strong> Location also plays a role in salary calculations. Employees in certain cities or regions may be paid more due to the cost of living or availability of certain jobs.</li>
                            <li><strong>Company Size:</strong> The organisational size can also affect an employee’s salary. Larger companies typically have more resources and may be able to offer higher salaries.</li>
                            <li><strong>Job Title:</strong> The title of an employee’s job can also affect their salary. Those with higher levels of responsibility may be compensated with a higher salary.</li>
                            <li><strong>Benefits:</strong> Health insurance, vacation time, and other perks can also affect an employee’s salary. Companies may offer additional compensation in exchange for these benefits.</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-4">Benefits of Salary Calculators</h3>
                        <p className="para">Salary calculators can offer several benefits, including:</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li><strong>Accurate Salary Estimates:</strong> Salary calculators use complex algorithms and current market data to provide employees and job seekers with accurate salary estimates for a given job or occupation.</li>
                            <li><strong>Time-Saving:</strong> Rather than spending hours researching salary information, salary calculators allow users to quickly and easily determine what they can expect to earn in a particular job or industry.</li>
                            <li><strong>Customisable:</strong> Many salary calculators allow users to input specific details about their education, experience, location, and other factors that can impact their earnings. This provides a more customised and accurate estimate.</li>
                            <li><strong>Easy Comparison:</strong> With salary calculators, users can compare the salaries of different jobs and industries, allowing them to make informed decisions about their career choices.</li>
                            <li><strong>Negotiating Tool:</strong> By providing employees and job seekers with accurate salary information, salary calculators can be valuable when negotiating salary during the job search or performance review process.</li>
                            <li><strong>Up-to-date Information:</strong> Salary calculators use real-time data, ensuring that the information they provide is up-to-date and relevant.</li>
                            <li><strong>Accessibility:</strong> Salary calculators are widely available online and often free to use, making it easy for anyone to determine their earning potential.</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2">Calculating Gross & In-hand Salary</h3>
                        <p className="para">To compute Gross and In-hand Salary, you can rely on Om Finserv’s Inhand Salary Calculator. However, to calculate the values manually, utilise the given formula.</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li><strong>Gross Salary:</strong> Gross salary is the total amount of money an employee receives before any deductions are made. It includes wages, bonuses, and any other sources of income. To calculate gross salary, employers must add any bonuses or commissions to the regular wages for the employee.</li>
                            <li><strong>Formula:</strong> Gross Salary = Basic Salary + Dearness Allowance + House Rent Allowance + Any Other Allowances.</li>
                        </ul>

                        <h4 className="font-semibold text-xl mt-4 mb-2">Example:</h4>
                        <p className="para">Suppose an employee’s basic salary is INR 20,000 per month, and he receives a dearness allowance of INR 5,000 per month, a house rent allowance of INR 3,000 per month, and a medical allowance of INR 2,000 per month.</p>
                        <p className="para">Gross Salary = INR 20,000 + INR 5,000 + INR 3,000 + INR 2,000</p>
                        <p className="para">Gross Salary = INR 30,000 per month</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li><strong>In-hand Salary:</strong> Inhand salary is the amount of money an employee receives after all the deductions, such as income tax, provident fund, professional tax, etc., have been made.</li>
                            <li><strong>Formula:</strong> In-hand Salary = Gross Salary – Deductions</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-4">Example:</h3>
                        <p className="para">Suppose an employee’s gross salary is INR 30,000 per month, they pay a professional tax of INR 200 per month, and his contribution to the provident fund is 12% of his basic salary.</p>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>In-hand Salary = INR 30,000 – INR 200 – (12% of INR 20,000)</li>
                            <li>In-hand Salary = INR 26,800 per month</li>
                        </ul>

                        <h3 className="font-bold text-2xl mb-2 mt-4">Few Salary Terminologies You Need to Know</h3>
                        <p className="para">To understand the basic salary structure, get acquainted with the following salary terminologies:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li><strong>Gross Salary:</strong> Total salary before deductions such as taxes, insurance, etc.</li>
                            <li><strong>Basic Salary:</strong> Fixed component of salary which is exempt from deductions.</li>
                            <li><strong>CTC (Cost to Company):</strong> The total amount an employer spends on an employee, including salary, benefits, and other costs.</li>
                            <li><strong>Incentives:</strong> Additional monetary rewards for meeting performance targets or exhibiting exemplary behaviour.</li>
                            <li><strong>Provident Fund (PF):</strong> A mandatory retirement savings scheme where employees and employers contribute a certain percentage of the employee’s salary towards a fund.</li>
                            <li><strong>Gratuity:</strong> A lump sum benefit paid to an employee upon retirement or termination.</li>
                            <li><strong>Reimbursements:</strong> Payment made by the employer to cover expenses incurred by the employee during work-related activities.</li>
                            <li><strong>HRA (House Rent Allowance):</strong> This is an allowance to help employees pay their rent. It is a percentage of the employee’s salary and is tax-exempt.</li>
                            <li><strong>Special Allowance:</strong> These are additional payments made to employees for specific purposes, such as travel or medical expenses. They are not part of the basic salary and are taxable.</li>
                            <li><strong>Bonus:</strong> This is an additional payment made to employees for meeting specific goals or achieving certain targets. It is usually a percentage of the employee’s salary and is taxable.</li>
                        </ul>

                    </div>
                </section>
            </div>
        </div >
    );
};

export default SalaryCalculator;