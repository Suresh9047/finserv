import { useState, useEffect } from 'react';

const HRACalculator = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [hraReceived, setHraReceived] = useState('');
    const [rentPaid, setRentPaid] = useState('');
    const [dearnessAllowance, setDearnessAllowance] = useState('');
    const [isMetro, setIsMetro] = useState('');
    const [hraExempted, setHraExempted] = useState(0);
    const [hraTaxable, setHraTaxable] = useState(0);

    const calculateHRA = () => {
        const basicSalaryValue = parseFloat(basicSalary) || 0;
        const hraReceivedValue = parseFloat(hraReceived) || 0;
        const rentPaidValue = parseFloat(rentPaid) || 0;
        const dearnessAllowanceValue = parseFloat(dearnessAllowance) || 0;

        const basicPlusDA = basicSalaryValue + dearnessAllowanceValue;
        let exemptedAmount = Math.min(
            hraReceivedValue,
            isMetro === 'metro' ? 0.5 * basicPlusDA : 0.4 * basicPlusDA,
            rentPaidValue - 0.1 * basicPlusDA
        );
        exemptedAmount = Math.max(exemptedAmount, 0);
        const taxableAmount = hraReceivedValue - exemptedAmount;

        setHraExempted(exemptedAmount);
        setHraTaxable(taxableAmount);
    };

    useEffect(() => {
        calculateHRA();
    }, [basicSalary, hraReceived, rentPaid, dearnessAllowance, isMetro]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case 'basicSalary':
                setBasicSalary(value);
                break;
            case 'hraReceived':
                setHraReceived(value);
                break;
            case 'rentPaid':
                setRentPaid(value);
                break;
            case 'dearnessAllowance':
                setDearnessAllowance(value);
                break;
            case 'isMetro':
                setIsMetro(value);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">
                {/* Top Section */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">HRA Calculator</h1>
                        <p className="text-lg leading-relaxed">
                            HRA calculator helps individuals to calculate the amount of tax exemption that he will get for house rent. HRA calculations require very basic information such as basic salary received, Dearness Allowance, HRA received. The HRA exemption calculator also requires information about the total amount of rent paid. The HRA calculator online is highly effective and HRA deduction calculation can be used for free. These are available online and are very easy to use.</p>
                    </div>
                </section>
                {/* calculator section */}
                <section className="py-8">
                    <div className="container mx-auto">
                        <div className="bg-white rounded-md shadow-md overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-12">
                                <div className="col-span-12 md:col-span-8 p-5">
                                    <h5 className="text-lg font-semibold mb-5">Calculate HRA Tax Exemption</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                        <input
                                            type="number"
                                            className="form-control border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                            id="basicSalary"
                                            placeholder="Basic Salary"
                                            onInput={handleInputChange}
                                        />
                                        <input
                                            type="number"
                                            className="form-control border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                            id="hraReceived"
                                            placeholder="HRA Received"
                                            onInput={handleInputChange}
                                        />
                                        <input
                                            type="number"
                                            className="form-control border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                            id="rentPaid"
                                            placeholder="Total Rent Paid"
                                            onInput={handleInputChange}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                        <input
                                            type="number"
                                            className="form-control border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                            id="dearnessAllowance"
                                            placeholder="Dearness Allowance"
                                            onInput={handleInputChange}
                                        />
                                        <div></div> 
                                        <select
                                            className="form-control border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0282ba]"
                                            id="isMetro"
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select City</option>
                                            <option value="metro">Metro City</option>
                                            <option value="non-metro">Non-Metro City</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-4 p-3 bg-gray-100">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm para">HRA taxable</p>
                                            <p className="text-lg font-bold text-red-500" id="hraTaxable">
                                                ₹ {hraTaxable.toLocaleString('en-IN')}
                                            </p>
                                        </div>
                                        <hr className="border-gray-300" />
                                        <div>
                                            <p className="text-sm para">HRA exempted</p>
                                            <p className="text-lg font-bold text-[#0282ba]" id="hraExempted">
                                                ₹ {hraExempted.toLocaleString('en-IN')}
                                            </p>
                                            {hraReceived === '0' && (
                                                <span className="text-xs text-gray-500">
                                                    If you don't receive HRA, you can still claim upto ₹60,000 deduction U/S 80GG
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0 pb-0 m-0">
                    <div className="container">
                        <h3 className="font-bold text-2xl mb-2">What is an HRA Calculator?</h3>
                        <p className="para">House rent allowance (HRA) is one of the most important parts of anyone’s salary. All employers are obligated to include a house rent allowance in order to compensate for the employees’ living expenses. However, a little known fact about HRA is that you can actually use it as a tax-saving instrument. The amount of HRA is determined by taking into account several factors, like the employee’s city, salary structure, salary, etc. If you are a salaried individual residing in rented accommodation, you can use the Om Finserv HRA calculator to calculate your tax liability.</p>

                        <h3 className="font-bold text-2xl mt-4 mb-2">HRA in New Tax Regime</h3>
                        <p className="para">According to the new tax regime, even if HRA is not a part of the employee’s salary, they can claim a tax deduction on the rent. In order to claim this benefit, the taxpayer is not required to have their own house in the city where they are living on rent.</p>
                        <p className="para">Further, if the taxpayer was employed for part of the year, and for the other part they have received HRA as part of the salary, the taxpayer has the right to claim a more beneficial deduction. The taxpayer will be required to choose between the 80GG exemption or HRA exemption. However, the authorities reserve the right to contest this decision.</p>

                        <h3 className="font-bold text-2xl mt-4 mb-2">Tax Benefits of HRA</h3>
                        <p className="para">The House Rent Allowance received by an employee can be used to offset the total tax liability for the year. This tax benefit is only applicable if the taxpayer is living in rented accommodation. If the taxpayer resides in their own home, then the HRA amount is completely taxable.</p>
                        <p className="para">If you are a self-employed professional or businessman, then you are not eligible to claim this benefit. Only salaried employees who live in a rented accommodation and receive HRA as part of their salary are eligible to claim this deduction.</p>

                        <h3 className="font-bold text-2xl mt-4 mb-2">How to Calculate Exemption on HRA</h3>
                        <p className="para">Let us take a look at the standard HRA exemption formula used to calculate the amount of HRA payable. While calculating the HRA component, salary is considered to be the sum of the basic amount plus Dearness Allowance, and other variable factors.</p>
                        <p className="para">In order to calculate HRA, the lowest of the below given amounts is considered to be eligible for deduction:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>Actual HRA offered by the employer</li>
                            <li>For people living in metropolitan cities: 50% of (Dearness Allowance + Basic Salary)</li>
                            <li>For people living in non-metropolitan cities: 40% of (Dearness Allowance + Basic Salary)</li>
                            <li>Any rent paid exceeding 10% of the annual salary</li>
                        </ul>

                        <p className="para mt-4">For instance, if a person living in a metro city gets a salary of Rs. 5 lakhs per annum, with the HRA component being Rs. 90,000 per annum. Let’s assume the actual rent paid for the year was Rs 1.2 lakhs, then the HRA benefit would be the lowest of:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>HRA received: Rs. 90,000</li>
                            <li>50% of (Dearness Allowance + Basic Salary): Rs 2.5 lakhs</li>
                            <li>Any rent paid exceeding 10% of the annual salary: Rs 1.2 lakhs – 50,000 = Rs 70,000</li>
                        </ul>
                        <p className="para mt-4">So in this case, the HRA amount eligible for exemption would be Rs. 70,000.</p>

                        <h3 className="font-bold text-2xl mt-6 mb-2">Documents Required to Claim Tax Exemptions on HRA</h3>
                        <p className="para">In order to claim the HRA tax exemption, the taxpayer is required to submit the rent receipts or rent agreement provided by the landlord. If the annual rent paid amounts to over Rs. 1 lakh, you will be required to submit a copy of the property owner’s PAN card.</p>
                        <p className="para">In a bid to tackle the problem of people claiming exemptions with fake rent receipts/rent agreements, the Income Tax authorities have passed new rules and regulations. According to the last Budget announcement, any HRA benefit of over Rs. 50,000 a month will be subject to TDS at the rate of 5%.</p>

                        <h3 className="font-bold text-2xl mt-6 mb-2">How to use the HRA Calculator?</h3>
                        <p className="para">The Om Finserv HRA Calculator is actually pretty easy to use. You can use our calculator by following the below given steps:</p>
                        <p className="para"><strong>Step 1:</strong> Enter your salary and HRA as per your salary slip.</p>
                        <p className="para"><strong>Step 2:</strong> Enter the rent paid during the financial year and state whether you live in a metro or non-metro city.</p>

                        <h3 className="font-bold text-2xl mt-6 mb-2">Benefits of Using the Om Finserv HRA Calculator</h3>
                        <p className="para">Using the Om Finserv HRA calculator saves you the trouble of having to manually calculate your HRA tax exemption. Given below are some of the benefits of using our powerful AI-backed HRA calculator:</p>

                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2 marker:text-[#0282ba] ">
                            <li>The calculator is absolutely free to use and always provides accurate results.</li>
                            <li>You can easily compute your eligible HRA tax deductions.</li>
                            <li>Finally, our clever calculator takes into account various different variables in the HRA computation.</li>
                        </ul>


                    </div>
                </section>
            </div>
        </div>
    );
};

export default HRACalculator;