import { useState } from 'react';

const IncomeTaxCalculator = () => {
    const [form, setForm] = useState({
        gender: '',
        dob: '',
        grossIncome: '',
        basicPay: '',
        hra: '',
        city: '',
        investment80C: '',
        investment80CCD: '',
        medical80D: '',
        houseRent: '',
    });

    const [summary, setSummary] = useState({
        totalIncome: 0,
        totalInvestment: 0,
        hraExemption: 0,
        oldTaxPayable: 0,
        newTaxPayable: 0,
        bestRegime: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setTimeout(calculateTax, 0);
    };

    const calculateHRAExemption = (basicPay, hra, houseRent, city) => {
        const hra50 = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'].includes(city)
            ? basicPay * 0.5
            : basicPay * 0.4;
        const calculated = Math.min(hra, houseRent - (basicPay * 0.1), hra50);
        return calculated > 0 ? calculated : 0;
    };

    const calculateOldTaxRegime = (income) => {
        let tax = 0;
        if (income > 250000) {
            if (income <= 500000) tax = (income - 250000) * 0.05;
            else if (income <= 1000000) tax = (250000 * 0.05) + (income - 500000) * 0.2;
            else tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
        }
        return tax;
    };

    const calculateNewTaxRegime = (income) => {
        let tax = 0;
        if (income > 250000) {
            if (income <= 500000) tax = (income - 250000) * 0.05;
            else if (income <= 750000) tax = (250000 * 0.05) + (income - 500000) * 0.1;
            else if (income <= 1000000) tax = (250000 * 0.05) + (250000 * 0.1) + (income - 750000) * 0.15;
            else if (income <= 1250000) tax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (income - 1000000) * 0.2;
            else if (income <= 1500000) tax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (250000 * 0.2) + (income - 1250000) * 0.25;
            else tax = (250000 * 0.05) + (250000 * 0.1) + (250000 * 0.15) + (250000 * 0.2) + (250000 * 0.25) + (income - 1500000) * 0.3;
        }
        return tax;
    };

    const calculateTax = () => {
        const grossIncome = parseFloat(form.grossIncome) || 0;
        const basicPay = parseFloat(form.basicPay) || 0;
        const hra = parseFloat(form.hra) || 0;
        const houseRent = parseFloat(form.houseRent) || 0;
        const city = form.city;
        const investment80C = Math.min(parseFloat(form.investment80C) || 0, 150000);
        const investment80CCD = parseFloat(form.investment80CCD) || 0;
        const medical80D = parseFloat(form.medical80D) || 0;

        const hraExemption = calculateHRAExemption(basicPay, hra, houseRent, city);
        const totalInvestment = investment80C + investment80CCD + medical80D;

        const taxableIncomeOld = Math.max(grossIncome - (totalInvestment + hraExemption + 50000), 0);
        const oldTax = calculateOldTaxRegime(taxableIncomeOld);

        const taxableIncomeNew = Math.max(grossIncome - 50000, 0);
        const newTax = calculateNewTaxRegime(taxableIncomeNew);

        const bestRegime = oldTax < newTax ? "Old Regime" : "New Regime";

        setSummary({
            totalIncome: grossIncome,
            totalInvestment,
            hraExemption,
            oldTaxPayable: oldTax,
            newTaxPayable: newTax,
            bestRegime,
        });
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white mt-[100px] mb-10">

                <section className="py-5 bg-white">
                    <div className="container">
                        <h1 className="text-4xl font-bold text-[#0282ba] mb-4">Income and Tax Calculator - FY 2024-2025</h1>
                        <p className="text-lg leading-relaxed">
                            An income tax calculator is an online tool that assists individuals in estimating their tax liability by inputting their income, deductions, exemptions, and other relevant details. It saves time, provides accurate estimations, and aids in tax planning by considering various factors and tax laws.</p>
                    </div>
                </section>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Panel - Form */}
                        <div className="bg-white rounded-2xl shadow p-6 w-full md:w-1/2">
                            <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

                            {/* Gender */}
                            <div className="mb-4">
                                <label htmlFor="gender-male" className="block mb-2 font-medium">Gender:</label>
                                <div className="flex gap-6">
                                    <label htmlFor="gender-male">
                                        <input id="gender-male" type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                                    </label>
                                    <label htmlFor="gender-female">
                                        <input id="gender-female" type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                                    </label>
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="date" name="dob" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                                <input type="number" name="grossIncome" placeholder="Gross Income (Annual)" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="number" name="basicPay" placeholder="Basic Pay (Annual)" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                                <input type="number" name="hra" placeholder="HRA (Annual)" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                            </div>

                            {/* City */}
                            <div className="mb-4">
                                <select name="city" className="form-select w-full border border-gray-300 rounded px-3 py-2" onChange={handleChange}>
                                    <option value="">Select City</option>
                                    {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'].map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Investment Details */}
                            <h2 className="text-xl font-semibold mt-6 mb-4">Investment Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="number" name="investment80C" placeholder="Investments u/s 80C of Income Tax Act" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                                <input type="number" name="investment80CCD" placeholder="Investments u/s 80CCD" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <input type="number" name="medical80D" placeholder="Medical Insurance (80D)" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                                <input type="number" name="houseRent" placeholder="House Rent (Monthly)" className="form-input border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
                            </div>
                        </div>


                        {/* Right Panel - Summary */}
                        <div className="bg-[#f4f4fe] rounded-2xl shadow p-6 w-full md:w-1/2">
                            <h2 className="text-xl font-semibold text-center mb-4">Summary of your Investment</h2>
                            <div className="bg-white p-4 rounded-xl shadow text-center mb-6">
                                <p className="text-lg font-medium">Total Income:</p>
                                <p className="text-xl font-bold text-gray-700">₹ {summary.totalIncome}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl shadow text-center">
                                    <p className="text-sm">Total Investment:</p>
                                    <p className="text-lg font-semibold">₹ {summary.totalInvestment.toFixed(2)}</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow text-center">
                                    <p className="text-sm">HRA Exemption:</p>
                                    <p className="text-lg font-semibold">₹ {summary.hraExemption.toFixed(2)}</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow text-center">
                                    <p className="text-sm">Old Tax Regime:</p>
                                    <p className="text-lg font-semibold">₹ {summary.oldTaxPayable.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <p className="text-sm">New Tax Regime:</p>
                                <p className="text-lg font-semibold">₹ {summary.newTaxPayable.toFixed(2)}</p>
                                <p className="mt-2 text-green-600 font-bold">{summary.bestRegime}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pt-0 mt-0">
                    <div className="container">
                        <h4 className="font-bold text-lg md:text-xl mb-4">How is Income Tax Calculated?</h4>
                        <p className="para mb-4">
                            Income tax is calculated after computing the total gross income under section 14 of the Income Tax Act,1961. It is the aggregate of income computed under the five heads of income after allowing the set-off of losses according to the provisions of the tax laws. The five heads of income include:
                        </p>

                        <h4 className="font-bold text-lg md:text-xl mt-6 mb-2">Income from Salary</h4>
                        <p className="para mb-4">
                            As a result of an express or implied agreement, salary is compensation received periodically by or accruing to an individual for services rendered. In simple words, salary is paid by the employer to an employee in consideration of the service rendered by them to the organisation. It includes the monetary or non-monetary value of benefits and facilities provided by the employee. Any amount received other than from the employer cannot be termed as salary. Taxable income from salary is the difference between the gross salary and the deductions u/s 16.
                        </p>

                        <h4 className="font-bold text-lg md:text-xl mt-6 mb-2">Income from House Property</h4>
                        <p className="para mb-2">
                            According to section 22, any building or land appurtenant to a building owned by the assessee is subject to income tax under the head, Income from House Property. House properties are classified into self-occupied house properties, let out house properties and inherited house properties.
                        </p>
                        <p className="para mb-4">
                            The taxable income from house property is calculated after deducting standard deductions and interest from a net annual value on home loans.
                        </p>

                        <h4 className="font-bold text-lg md:text-xl mt-6 mb-2">Income from Capital Gains</h4>
                        <p className="para mb-4">
                            The gain on the transfer of a capital asset in the previous year is referred to as capital gains. Capital gains are broadly classified into short-term and long-term gains. Short-term and long-term gains are taxed at 10% and 15%, respectively. According to the act, capital gains are not taxable if an individual inherits the property and has no sale clause. Conversely, if the individual decides to sell the inherited property, it will be taxable under Income from Capital Gains.
                        </p>

                        <h4 className="font-bold text-lg md:text-xl mt-6 mb-2">Income from Business and Profession</h4>
                        <p className="para mb-4">
                            Business and professional income refers to any income derived from business operations. The income earned by freelancers falls into this category. Simply put, it is the net profit or loss of a business.
                        </p>

                        <h4 className="font-bold text-lg md:text-xl mt-6 mb-2">Income from Other Sources</h4>
                        <p className="para">
                            Any source of income that doesn’t fall under any of the other heads of income is chargeable to tax under the head income from other sources. For example:
                        </p>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Fee, commission, and remuneration received by an employee other than their employer.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Salary or pension received by an MLA, MP and MLC</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Income from guest lectures</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Remuneration received from universities for examination work by a non-employee</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Director’s fee</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Interest from foreign securities</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Income from undisclosed sources</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Composite rent received for letting building along with plant and machinery and furniture</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Rent from letting a vacant plot</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹Dividends from mutual funds, companies</li>
                        </ul>
                        <h2 className="font-bold mt-4 text-xl">Benefits of Filing Income Tax Online</h2>
                        <p>
                            Every assessee whose taxable income exceeds the exemption limit must file income tax returns in accordance to the specified slab rates.
                            Individuals whose taxable income falls below the exemption limit are absolved from paying income tax. An assessee can file taxes manually or by e-filing intermediaries.
                            By opting for e-filing, you can avail the following benefits:-
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Convenience</h4>
                        <p>
                            As India embraces the digital world, filing taxes has become hassle-free. By opting for e-filing of income taxes, you can file your income tax return in the comfort of your home.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">E-Verification</h4>
                        <p>
                            Before e-filing, income tax returns were sent to the Central Public Sector Commission in Bengaluru for verification.
                            With the advent of the e-filing facility, Income Tax Returns can now be verified online via an electronic verification facility.
                            The assessee must have an Aadhaar card and a verified mobile number for OTP verification to opt for this facility.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Minimising Errors</h4>
                        <p>
                            As humans, we are prone to make errors. Tax computation is a complicated process involving computations and manual calculations that might lead to errors.
                            With the electronic-based filing, the possibility of errors is erased.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Confidentiality</h4>
                        <p>
                            Data breach has become a common practice in the digital world. E-filing scraps the possibility of a data breach.
                            The data entered by an individual taxpayer is protected with high-security validations and passwords.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Cost-Efficient</h4>
                        <p>
                            Previously individuals had to hire professionals to file their returns and pay them a significant amount.
                            With an e-filing system, an assessee can easily file their taxes through the income tax portal.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">E-Payments</h4>
                        <p>
                            E-filing made the process of filing ITR returns hassle-free. Now, an assessee can link their bank account with the ITR profile and ensure direct deposit for a refund and direct debit for tax payments.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Timely Returns</h4>
                        <p>
                            In the traditional e-filing system, the taxpayers had zero clue about the status of their refunds.
                            With an e-filing system, you can track your returns. Compared to the manual system, returns are processed faster in the e-filing system.
                        </p>

                        <h4 className="font-bold mt-4 text-lg">Storage of Records</h4>
                        <p>
                            Before e-filing, the documentation process was complex.
                            In an e-filing process, most of the data is auto-filled with hyperlinks, making it much easier for tax filers to file prospective returns.
                        </p>

                        <h2 className="font-bold mt-4 text-xl">Documents Required for E-filing of Income Tax Returns</h2>
                        <p>
                            The electronic filing system has made filing of income tax returns a hassle-free process. For filing ITR, the assessee should have the following documents:-
                        </p>
                        <div className="overflow-x-auto mt-6">
                            <table className="min-w-full border border-gray-300 text-sm text-left">
                                <thead>
                                    <tr className="bg-[#0282ba] text-white">
                                        <th className="px-4 py-2 border border-gray-300 font-semibold">Document</th>
                                        <th className="px-4 py-2 border border-gray-300 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Aadhaar Card</td>
                                        <td className="border border-gray-300 px-4 py-2">The Aadhaar card makes the verification process simpler by providing the Aadhaar number and verified mobile number.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">PAN Card</td>
                                        <td className="border border-gray-300 px-4 py-2">The Permanent Account Number (PAN) is the most important document. It acts as an identity proof of the assessee.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Form 16</td>
                                        <td className="border border-gray-300 px-4 py-2">Form 16 is also known as a TDS certificate. It is provided by your current employer stating the details of taxes paid on your behalf. Your salary, deductions, and allowances are taken into consideration.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Form 16A</td>
                                        <td className="border border-gray-300 px-4 py-2">Form 16A contains records of TDS details by deductors other than the employer. It is usually collected by banks and other financial institutions for interest and commission purposes.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Form 26A</td>
                                        <td className="border border-gray-300 px-4 py-2">Form 26A contains the tax deducted from your income and paid on your behalf. It can be downloaded from the official website of the Income Tax Department.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Capital Gain Tax</td>
                                        <td className="border border-gray-300 px-4 py-2">If you have invested in shares or mutual funds, you need to submit the capital gains statement issued by the broker. It reflects details of your short-term capital gains to be paid if you have exited certain shares before the tenure of 1 year.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Property related documents</td>
                                        <td className="border border-gray-300 px-4 py-2">You are required to submit the documents of any property bought or sold in the financial year. Ownership, sale, purchase, and rental income documents are required to be submitted. If the property is disposed of, the short term and long term gains earned from the same is to be provided.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Self-assessment tax</td>
                                        <td className="border border-gray-300 px-4 py-2">In case you have done a self assessment and paid any amount of tax in advance, you are required to fill in the respective details in the given forms.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Bank statement details</td>
                                        <td className="border border-gray-300 px-4 py-2">The assessee is required to submit details of their saving accounts. The interest earned from savings accounts and fixed deposit accounts are stated under the head ‘income from other sources.’ You can claim deductions u/s 80TTA after submitting the above mentioned documents.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Home loan statements</td>
                                        <td className="border border-gray-300 px-4 py-2">If you have taken a home loan, you are required to submit the documents for the same. You can claim principal deductions u/s 80C and interest deductions u/s 24.</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">Proof of tax saving</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <p>You can claim deductions on investment and expenditure u/s 80C, 80CCC, and 80CCD(1). You are required to submit the following documents:</p>
                                            <ul className="ml-6 mt-2 space-y-2">
                                                <li>🔹 Fee, commission, and remuneration received by an employee other than their employer.</li>
                                                <li>🔹 Salary or pension received by an MLA, MP, and MLC.</li>
                                                <li>🔹 Income from guest lectures.</li>
                                                <li>🔹 Remuneration received from universities for examination work by a non-employee.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="font-bold text-lg mt-4">Tax Exemptions Available for Salaried Individuals</h2>

                        <h4 className="font-bold mt-4">Allowance/perquisites to Government employee outside India u/s 10(7)</h4>
                        <p>
                            In accordance with section 10(7), any allowance paid to government employees rendering services outside India is exempt from taxation.
                            The exemption applies only to Indian citizens who have received appropriations by their government for services rendered abroad.
                        </p>

                        <h4 className="font-bold mt-4">Tax on perquisites paid by the employer u/s 10(10CC)</h4>
                        <p>
                            Section 10(10CC) exempts non-monetary perquisites. In simpler words, it exempts the income tax paid by the employer on behalf of his employee
                            on the non-monetary benefits provided to his employee.
                        </p>

                        <h4 className="font-bold mt-4">Gratuity u/s 10(10)</h4>
                        <p>
                            Under the Payments of Gratuity Act, 1972, gratuity is the amount paid to employees by their employers as a token of appreciation.
                            An individual is entitled to receive gratuity if he has worked for an employer for a minimum of five years.
                        </p>
                        <p>
                            As a result of the provisions of Section 10(10), gratuity received by a government employee upon retirement or death is tax-free,
                            regardless of its amount. Conversely, an employee working in the private sector can take advantage of a partial exemption on their
                            gratuity subject to a maximum ceiling of INR 20 lakhs.
                        </p>

                        <h4 className="font-bold mt-4">Remuneration to Indian Citizens Working outside India u/s 10(6)</h4>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 According to Section 10(6)(ii), NRIs earning income as embassy employees, high commission, or legislative bodies are fully exempt
                                from taxation in India as long as they hold a public office. It is only applicable if an Indian individual resides in a foreign country
                                where the same exceptions apply.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 Relative to section 10(6)(vi), the remuneration received by a foreign national while he is working for a foreign entity is tax-free
                                only if the foreign entity is not conducting any business in India and he is not staying longer than 90 days in India during the current year.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 A foreign trainee is exempted from tax under Section 10(6)(xi) of the Income Tax Act in connection with training in a government
                                establishment while in India as a foreign government employee.
                            </li>
                        </ul>

                        <h4 className="font-bold mt-4">Leave Travel Allowance u/s 10(5)</h4>
                        <p>
                            A leave travel allowance is an exemption the employer provides to their employees when travelling. This allowance is fully exempted and tax-free.
                            The exemption doesn’t cover the costs incurred during the entire trip. It can be claimed only for two trips in four years.
                            If an individual doesn’t take advantage of the allowance during this block, it can be carried forward to the next block.
                            The exemption is available for only two children.
                        </p>

                        <h4 className="font-bold mt-4">Allowance/perquisites to Government Employee outside India u/s 10(7)</h4>
                        <p>
                            According to section 10(7) of the Income Tax Act, 1961, any compensation paid to government employees for services rendered outside India is tax-free.
                        </p>

                        <h4 className="font-bold mt-4">Life Insurance Policy u/s 10 (10D)</h4>
                        <p>
                            A claimant of a life insurance policy is eligible to receive exemptions under section 10(10D) based on the sum assured and accrued interest.
                            Such exemptions also apply to ULIP returns. Such claims are not subject to any upper limits.
                        </p>

                        <h4 className="font-bold mt-4">Provident Fund u/s 10(11)/(12)</h4>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 The provision u/s 10(11) exempts all payments derived from statutory provident funds.
                                In addition, the amount received from any other provident fund set up and notified by the Central Government is exempt.
                            </li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 A participant in a Recognized Provident Fund is exempt from paying the accumulated balance under section 10(12).
                            </li>
                        </ul>

                        <h4 className="font-bold mt-4">House Rent Allowances u/s 10(13A)</h4>
                        <p>
                            House rent allowance (HRA) is granted to an employee by the employer towards paying the rent of the residence.
                            HRA is partly or fully exempted. It is fully taxable if an assessee resides in his own house.
                            HRA granted to an employee is exempt at the least of the following:
                        </p>

                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full text-left border border-gray-300 text-sm">
                                <thead className="bg-[#0282ba] text-white text-center">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300">For Metro Cities</th>
                                        <th className="px-4 py-2 border border-gray-300">For Other Cities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-center">
                                        <td className="border border-gray-300 px-4 py-2">Total HRA received from your employer</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            The Aadhaar card makes the verification process simpler by providing the Aadhaar number and verified mobile number.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50 text-center">
                                        <td className="border border-gray-300 px-4 py-2">Rent paid (-10%) of salary for the relevant period</td>
                                        <td className="border border-gray-300 px-4 py-2">Rent paid (-10%) of salary for the relevant period</td>
                                    </tr>
                                    <tr className="bg-white text-center">
                                        <td className="border border-gray-300 px-4 py-2">50% of the salary for the relevant period</td>
                                        <td className="border border-gray-300 px-4 py-2">40% of the salary for the relevant period</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="font-bold mt-4">Note:</h4>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li className="border-b border-gray-300 py-2 last:border-none">🔹 Salary refers to basic salary + dearness allowance.</li>
                            <li className="border-b border-gray-300 py-2 last:border-none">
                                🔹 A participant in a Recognized Provident Fund is exempt from paying the accumulated balance under section 10(12).
                                The relevant period is when the assessee occupied the said accommodation during the previous year.
                            </li>
                        </ul>
                    </div>

                </section >
            </div>
        </div >
    );
};

export default IncomeTaxCalculator;
