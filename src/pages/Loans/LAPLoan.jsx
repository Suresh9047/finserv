import React, { useState } from "react";
import laploan1 from '../../assets/loan_section/laploan1.png';
import Lapabout from '../../assets/loan_section/lap-about.jpg';
import Calculator from '../../components/ReusableChartCalculator';
import FeatureIcon1 from '../../assets/loan_section/feature-icon1.png';
import FeatureIcon2 from '../../assets/loan_section/feature-icon2.png';
import FeatureIcon3 from '../../assets/loan_section/feature-icon3.png';
import FeatureIcon4 from '../../assets/loan_section/feature-icon4.png';
import FeatureIcon5 from '../../assets/loan_section/feature-icon5.png';
import ApplyNowForm from '../../components/ApplyNowForm';

const LAPLoan = () => {

    const lapInputs = [
        {
            name: 'loanAmount',
            label: 'Loan Amount',
            min: 100000,
            max: 10000000,
            defaultValue: 500000,
            prefix: '₹',
            step: 10000,
        },
        {
            name: 'interestRate',
            label: 'Interest Rate (%)',
            min: 1,
            max: 15,
            defaultValue: 7.5,
            step: 0.1,
            suffix: '%',
        },
        {
            name: 'loanTerm',
            label: 'Loan Term (Years)',
            min: 1,
            max: 8,
            defaultValue: 1,
        },
    ];

    const calculateLAPLoan = ({ loanAmount, interestRate, loanTerm }) => {
        const monthlyInterest = interestRate / 1200;
        const months = loanTerm * 12;

        const emi =
            monthlyInterest === 0
                ? 0
                : (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
                (Math.pow(1 + monthlyInterest, months) - 1);

        const total = emi * months;
        const interest = total - loanAmount;

        return {
            principal: loanAmount,
            interest,
            emi,
            total,
        };
    };

    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Loan Against Property</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Get tailor-made property loans from a wide range of loan options. Mortgage your residential or commercial real estate to avail a loan against the property
                        </p>
                        <button
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                            onClick={() => setIsFormOpen(true)}
                        >
                            Apply Now
                        </button>

                        {/* Reusable Modal Form */}
                        <ApplyNowForm
                            isOpen={isFormOpen}
                            onClose={() => setIsFormOpen(false)}
                            loanTypeLabel="Loan"
                        />

                    </div>
                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={laploan1}
                            alt="Loan illustration"
                            className="max-w-full h-[500px]"
                        />
                    </div>
                </div>
            </div>


            {/* Breadcrumb */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>LAP Loan</span>
                </nav>
            </div>

            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"> */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <section className="py-8 bg-white">
                    <div className="row">
                        <h2 className="text-4xl font-bold text-[#0282ba] mb-4">Introduction</h2>
                        <div className="text-gray-700">
                            <p>
                                Get tailor-made property loans from a wide range of loan options. Mortgage your
                                residential or commercial real estate to avail a loan against the property.
                            </p>
                            <p>
                                The loan value may vary depending on whether the mortgaged property is residential
                                (60% of property value) or commercial (50% of property value).
                            </p>
                            <p>
                                Customers can be salaried or self-employed individuals between 25 to 65 years of age (or
                                retirement age, whichever is earlier) to be eligible for such loans.
                            </p>
                            <p>
                                A loan of ₹10 lakh to ₹5 crore can be taken, with a tenure of up to 15 years.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-12 bg-white">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={Lapabout}
                                alt="Loan Against Property"
                                className="rounded-lg shadow-md w-full"
                            />
                        </div>

                        {/* Text */}
                        <div className="md:w-1/2 w-full">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0282ba] mb-4">
                                ABOUT LOAN AGAINST PROPERTY
                            </h2>
                            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                <p>
                                    Investing in a property is always advantageous whether it’s your house or a
                                    commercial space. Your property’s value appreciates over time, giving you a chance to
                                    earn good capital gains whenever you choose to sell your property. It allows you to
                                    avail significant line of credit as well. You can apply for a Loan Against Property
                                    and meet your various financial requirements.
                                </p>
                                <p>
                                    The maximum loan amount offered differs for every bank, your personal financial
                                    profile, and the property value. Furthermore, as you pledge your property as
                                    collateral, it becomes a secured line of credit. You can repay the loan amount in
                                    Equated Monthly Installments (EMI) as per your affordability.
                                </p>
                                <p>
                                    The loan value may also vary depending on the type of mortgage property — residential
                                    or commercial. Any salaried and self-employed individuals between 25 years to 65 years
                                    of age (or age, whichever is earlier) are eligible for Loan Against Property.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}

                <Calculator
                    title="EMI Calculator"
                    inputs={lapInputs}
                    calculate={calculateLAPLoan}
                    resultTitle="EMI Amount"
                    buttonchange = "Calculate Loan"
                />

                <section className="py-16 bg-[#f8f9fa]">
                    <div className="container max-w-6xl mx-auto rounded-lg shadow-md px-4 sm:px-6 lg:px-8 py-6">
                        <h2 className="text-3xl font-bold text-center text-[#0282ba] mb-10">
                            FEATURES & BENEFITS
                        </h2>

                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {/* Card Group */}
                            {[
                                { icon: FeatureIcon1, text: "Affordable High-Value Loans" },
                                { icon: FeatureIcon2, text: "Swift Processing" },
                                { icon: FeatureIcon3, text: "Quick Loan Approval" },
                                { icon: FeatureIcon4, text: "Flexible Loan Tenures" },
                                { icon: FeatureIcon5, text: "Minimal Charges" },
                            ].map((item, idx, arr) => (
                                <React.Fragment key={item.text}>
                                    <div className="feature-card flex flex-col sm:flex-row items-center gap-4 p-4 border-l-2 border-[#0282ba] rounded-lg shadow-md w-full sm:w-[280px] max-w-full bg-white">
                                        <img src={item.icon} alt="Feature" className="w-12 h-12 shrink-0" />
                                        <p className="text-lg font-semibold text-gray-700 text-center sm:text-left break-words">{item.text}</p>
                                    </div>
                                    {idx < arr.length - 1 && (
                                        <div className="hidden lg:block text-3xl text-[#FF8800]">&#x27A1;</div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="bg-white">
                    <div className="container mx-auto py-10">
                        <h2 className="text-center text-3xl text-[#0282ba]">
                            PROPERTY TYPES FOR LOAN AGAINST PROPERTY
                        </h2>

                        <div className="mt-8 space-y-6">
                            {/* Property Item 01 */}
                            <div className="flex gap-4 items-start">
                                <div className="text-xl font-bold text-[#0282ba]">01</div>
                                <div>
                                    <span className="font-semibold text-[#FF8800]">
                                        Residential property -
                                    </span>{" "}
                                    As the name suggests, residential properties are the housing
                                    properties you reside in. It can be an apartment, building, villa,
                                    or plot. As long as you hold ownership of the property you can
                                    pledge it, whether the property is self-occupied, let out, or
                                    vacant. It is the most common type of property pledged for loan
                                    availment.
                                </div>
                            </div>

                            {/* Property Item 02 */}
                            <div className="flex gap-4 items-start">
                                <div className="text-xl font-bold text-[#0282ba]">02</div>
                                <div>
                                    <span className="font-semibold text-[#FF8800]">
                                        Commercial property -
                                    </span>{" "}
                                    Commercial properties are used for business activities and
                                    generating income. This includes retail stores, gyms, saloons,
                                    schools, medical centres, and warehouses. It can be self-occupied,
                                    let out, or vacant. The property should be free for any legal
                                    disputes to be eligible to be as collateral.
                                </div>
                            </div>

                            {/* Property Item 03 */}
                            <div className="flex gap-4 items-start">
                                <div className="text-xl font-bold text-[#0282ba]">03</div>
                                <div>
                                    <span className="font-semibold text-[#FF8800]">
                                        Co-owned property -
                                    </span>{" "}
                                    You can also pledge a co-owned property as collateral. The
                                    property could be residential or commercial. You can either apply
                                    for a joint loan or as an individual applicant. In the first case,
                                    the documents and agreement of both owners are necessary for the
                                    loan application. Generally, if you are applying for a loan as an
                                    individual applicant, the co-owner has to provide the bank with a
                                    No-Objection Certificate (NOC).
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-6 bg-[#0283bb22]">
                    <div className="max-w-4xl bg-white mx-auto p-6 rounded-lg shadow-md">
                        <h3 className="mb-6 text-center text-2xl font-bold text-[#0282ba]">
                            DOCUMENTS REQUIRED FOR LOAN AGAINST PROPERTY
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border border-gray-100">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2 ">Category</th>
                                        <th className="border border-gray-300 px-4 py-2">Documents Required</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                                            SALARIED CUSTOMERS
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Application Form with photograph</li>
                                                <li>Identity and Residence proof</li>
                                                <li>Last 6 months bank statements</li>
                                                <li>Processing fee cheque</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                                            BUSINESSMEN – PROFESSIONALS
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <ul className="list-disc list-inside space-y-1">
                                                <li>Application form with photograph</li>
                                                <li>Identity and Residence proof</li>
                                                <li>Last 6 months bank statements</li>
                                                <li>Processing fee cheque</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default LAPLoan;