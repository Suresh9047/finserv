import { useState } from 'react';
import doctorloan1 from '../../assets/loan_section/doctorloan1.png';
import Doctor0 from '../../assets/loan_section/doctor0.png';
import Doctor3 from '../../assets/loan_section/doctor3.png';
import Doctor4 from '../../assets/loan_section/doctor4.png';
import Calculator from '../../components/ReusableChartCalculator';
import ApplyNowForm from '../../components/ApplyNowForm';

const faqs = [
    {
        question: 'What is a Professional Loan?',
        answer:
            'A Professional loan is a collateral-free loan offered to self-employed professionals such as doctors, chartered accountants, architects, etc. for the purpose of upgrading their skills, expanding their practice, purchasing equipment, etc.',
    },
    {
        question: 'What is a doctor loan?',
        answer:
            'A doctor loan is a financial product that is specifically designed to help medical professionals access financing to help them start or expand their practice. These loans usually offer lower interest rates and more flexible repayment terms than other types of loans.',
    },
    {
        question: 'What is the Flexi Term Loan facility?',
        answer:
            'The Flexi Term Loan facility is a unique financial offering that lets you withdraw and prepay funds from your loan limit as per your requirement. In Flexi Hybrid Loans, you are charged interest only on the amount you utilize, and you have the option to reduce your EMIs during the initial tenure.',
    },
    {
        question: 'Which profiles are eligible for a Professional Loan from Bank?',
        answer: (
            <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Graduate Allopathic Doctors</li>
                <li>Post Graduate Allopathic Doctors</li>
                <li>BDS/ MDS</li>
                <li>Veterinary Doctor</li>
                <li>Physiotherapists</li>
                <li>BAMS, BHMS</li>
                <li>CA, CS, Architects</li>
                <li>Consulting Engineers</li>
            </ul>
        ),
    },
    {
        question:
            'What is the range of loan amounts, minimum and maximum, that I can apply for?',
        answer: 'The minimum loan amount one can avail of is ₹5 Lakhs and up to a maximum of ₹1 Crore',
    },
    {
        question: 'What is the minimum and maximum Professional loan tenure offered?',
        answer:
            'Being one of the leading banks in the Professional loan segment, we are currently offering our customers a loan tenure from a minimum of 12 months up to a maximum of 84 months.',
    },
    {
        question: 'What are the benefits of availing a Professional Loan from Bank?',
        answer: (
            <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Collateral-free loan up to ₹1 Crore with an extended tenure of 96 months</li>
                <li>Attractive interest rates</li>
                <li>Quick loan up to ₹30 Lakhs with minimum documentation based on your professional qualifications</li>
                <li>Loan based on bank statements or basis your ITR documents</li>
                <li>Funding also available for salaried professionals</li>
                <li>Superior customer experience with easy documentation and a hassle-free digitized process.</li>
            </ul>
        ),
    },
    {
        question: 'What are the different types of loans offered under Professional Loan?',
        answer:
            'Professional Loan can be availed in the form of a term loan or a dropline overdraft facility.',
    },
];

const DoctorLoan = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const calculateDoctorLoanEMI = ({ loanAmount, loanTerm, interestRate }) => {
        const principal = loanAmount;
        const tenure = loanTerm * 12;
        const rate = interestRate / 1200;

        const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        const total = emi * tenure;
        const interest = total - principal;

        return { emi, principal, interest, total };
    };

    const inputs = [
        {
            name: 'loanAmount',
            label: 'Loan Amount (₹)',
            min: 50000,
            max: 5000000,
            step: 10000,
            defaultValue: 1000000,
            prefix: '₹',
        },
        {
            name: 'interestRate',
            label: 'Interest Rate (p.a.)',
            min: 7,
            max: 18,
            step: 0.1,
            defaultValue: 10.5,
            suffix: '%',
        },
        {
            name: 'loanTerm',
            label: 'Loan Term (in years)',
            min: 1,
            max: 8,
            step: 1,
            defaultValue: 5,
        },
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);


    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Doctor Loan</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            No Collateral | Loan up to 1 Crore | Tenure up to 96 months
                        </p>
                        <button
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                            onClick={() => setIsFormOpen(true)} // 👉 show the form on click
                        >
                            Apply Now
                        </button>

                        <ApplyNowForm
                            isOpen={isFormOpen}
                            onClose={() => setIsFormOpen(false)}
                            loanTypeLabel="Loan"
                        />

                    </div>
                    <div className="flex justify-center">
                        <img
                            src={doctorloan1}
                            alt="Loan illustration"
                            className="w-[650px] h-[500px] object-contain"
                        />


                    </div>
                </div>
            </div>



            {/* Breadcrumb */}
            <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>Doctor Loan</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <section className="about py-10">
                    <div className="container">
                        <div className="flex flex-col md:flex-row items-center w-full space-y-8">

                            <div className="flex-shrink-0 w-full md:w-1/2">
                                <img
                                    src={Doctor0}
                                    alt="Doctor Loan"
                                    className="w-full rounded-lg max-h-[500px] object-contain"
                                />
                            </div>

                            <div className="md:w-1/2 w-full">
                                <h2 className="text-4xl font-semibold text-[#0282ba] mb-4">
                                    A Smart Financial Solution for Medical Professionals
                                </h2>
                                <p className="text mb-4">
                                    As a medical professional, you may need financial support at various stages of your career—whether it’s setting up a new clinic, upgrading medical equipment, expanding your practice, or managing operational expenses. A Doctor Loan helps you meet these financial needs with ease, offering a reliable source of funds tailored to your profession.
                                </p>
                                <p className="text mb-4">
                                    With competitive interest rates and flexible repayment options, a Doctor Loan ensures that financial constraints do not hinder your growth and success. You can use the loan amount for multiple purposes, such as leasing clinic space, hiring staff, investing in technology, or even consolidating existing debts.
                                </p>
                                <p className="text mb-4">
                                    There are different types of Doctor Loans you can apply for, including Term Loans, Working Capital Loans, Machinery Loans, Overdraft Facilities, and more. Additionally, several government-backed loan schemes are available specifically for medical professionals. Based on your eligibility and requirement, you can choose the most suitable option to support your practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container business py-10 bg-gray-50">
                    <div className="row">
                        <h3 className="text-4xl font-bold text-[#0282ba] mb-6">
                            How can a Professional Loan help you?
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h5 className="text-lg font-semibold text-[#FF8800] mb-1">
                                    EXPAND YOUR PRACTICE
                                </h5>
                                <p className="text">
                                    You can improve your services and reach a broader audience by investing
                                    in new equipment, hiring additional staff, or expanding your office
                                    space.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold text-[#FF8800] mb-1">
                                    IMPROVE YOUR CASH FLOW
                                </h5>
                                <p className="text">
                                    Meet unexpected expenses, manage seasonal fluctuations, or invest in
                                    marketing and promotion by bridging gaps in your cash flow.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold text-[#FF8800] mb-1">
                                    MANAGE DEBT
                                </h5>
                                <p className="text">
                                    Streamline debt repayment by consolidating high-interest debts into a
                                    single loan with a lower interest rate.
                                </p>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold text-[#FF8800] mb-1">
                                    SEIZE OPPORTUNITIES
                                </h5>
                                <p className="text">
                                    Take advantage of new business opportunities, such as acquiring a new
                                    client or launching a new service, by having the necessary funds readily
                                    available.
                                </p>
                            </div>

                            <p className="text">
                                Get easy, collateral-free loans to boost your business plans.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container pt-0 mt-0 bg-white py-8">
                    <div className="row">
                        <table className="min-w-full table-auto border border-gray-300 text-center">
                            <thead className="bg-[#0282ba] text-white">
                                <tr>
                                    <th className="px-4 py-2 border">Loan Variant</th>
                                    <th className="px-4 py-2 border">What is it</th>
                                    <th className="px-4 py-2 border">Flexibility</th>
                                    <th className="px-4 py-2 border">Withdrawals</th>
                                    <th className="px-4 py-2 border">EMIs</th>
                                    <th className="px-4 py-2 border">Part-prepayment Charges</th>
                                    <th className="px-4 py-2 border">Flexi Facility charges</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-800">
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="px-4 py-3 border font-semibold">Flexi Hybrid Loan</td>
                                    <td className="px-4 py-3 border">
                                        Allows flexibility in borrowing and repaying within a specified loan limit. You can withdraw and repay multiple times within the approved limit. Interest-only EMI is charged during the Initial Tenure, only on the amount utilised.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Easily withdraw funds from the sanctioned limit and prepay effortlessly with our most flexible loan variant.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Get unrestricted access to funds with multiple withdrawals from the approved loan limit.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Interest-only EMIs for the initial part of the loan tenure. EMI applicable only on the withdrawn amount.
                                    </td>
                                    <td className="px-4 py-3 border">No part-prepayment charges</td>
                                    <td className="px-4 py-3 border">Nominal* Flexi Facility charges applicable.</td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="px-4 py-3 border font-semibold">Flexi Term Loan</td>
                                    <td className="px-4 py-3 border">
                                        Offers flexibility in borrowing and repaying within a specified loan limit. Your EMIs cover both the principal and interest for the withdrawn sum over the entire duration.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Easily withdraw funds from the sanctioned limit and prepay effortlessly. More flexible than our regular term loan.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Get unrestricted access to funds with multiple withdrawals from the approved loan limit.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Fixed EMIs only on the withdrawn amount.
                                    </td>
                                    <td className="px-4 py-3 border">No part-prepayment charges.</td>
                                    <td className="px-4 py-3 border">Nominal* Flexi Facility charges applicable.</td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="px-4 py-3 border font-semibold">Term Loan</td>
                                    <td className="px-4 py-3 border">
                                        There is no pre-assigned limit. Involves borrowing a fixed amount for a specified term. Repayments are made through regular EMIs, comprising both principal and interest.
                                    </td>
                                    <td className="px-4 py-3 border">
                                        Fixed loan structure and repayment schedule. Less flexible than our flexi term or flexi hybrid loans.
                                    </td>
                                    <td className="px-4 py-3 border">Single disbursement of the loan amount.</td>
                                    <td className="px-4 py-3 border">Fixed EMIs on the disbursed amount.</td>
                                    <td className="px-4 py-3 border">Nominal* part-prepayment charges applicable.</td>
                                    <td className="px-4 py-3 border">No Flexi Facility charges.</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-4 text-sm italic text-gray-600">
                            *Please refer to the Interest Rates, Fees and Charges section for more details on Flexi Facility charges and annual maintenance charges.
                        </p>
                    </div>
                </section>


                <section className="container py-10 bg-white">
                    <div className="row">
                        <h2 className="text-4xl font-semibold text-[#0282ba]">
                            <span>Features of Applying </span>
                            <span className="font-bold">for a Doctor Loan</span>
                        </h2>

                        <div className="mt-8 flex flex-col md:flex-row md:justify-between md:gap-10">
                            <div className="flex-1 space-y-4">
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Loan Amount:</span> Up to ₹1 Crore based on credit history.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">EMIs:</span> Convenient repayment options.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Tenure:</span> 12 to 96 months.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Processing & Approval:</span> Quick process with minimal documentation.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Balance Transfer:</span> Reduce EMIs by transferring the balance.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Insurance:</span> Credit Protect Plan for financial security.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Pricing:</span> Interest rates from 10.5% to 20.0%, processing fee up to 2.5%.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Digital Process:</span> End-to-end online application.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Loan for Professionals:</span> Available for doctors, engineers, architects, etc.
                                </div>
                                <div className="bg">
                                    <span className="font-semibold text-[#FF8800]">Documentation Required:</span>
                                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                                        <li>Qualification proof of the highest degree.</li>
                                        <li>MCI Registration Proof.</li>
                                        <li>Identity & Address proof (Aadhaar, Passport, etc.).</li>
                                        <li>Last 6 months’ bank statement.</li>
                                        <li>CIBIL Score 650+.</li>
                                        <li>Applicant should be 22 to 75 years old and Indian.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 md:mt-0 md:w-5/12">
                                <img
                                    src={Doctor3}
                                    alt="Doctor Loan"
                                    className="rounded-lg w-full max-h-[600px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Calculator Section */}

                <Calculator title="EMI Calculator" inputs={inputs} calculate={calculateDoctorLoanEMI} resultTitle = "EMI Amount" buttonchange = "Calculate Loan"/>

                <section className="py-8">
                    <div className="container flex flex-col md:flex-row gap-8">
                        {/* Form Section */}
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl font-bold text-[#0282ba] mb-6">Loan Form</h1>
                            <form id="loanForm" className="space-y-6">
                                {/* Full Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='fullname' className="block font-bold mb-1">Full Name</label>
                                        <input type="text" id="fullName" required placeholder="e.g. Naveen Kumar"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className="block font-bold mb-1">Email</label>
                                        <input type="email" id="email" required placeholder="e.g. example@gmail.com"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                </div>

                                {/* Mobile & DOB */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='mobile' className="block font-bold mb-1">Mobile Number</label>
                                        <input type="text" id="mobile" required placeholder="e.g. 9876543210"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label htmlFor='dob' className="block font-bold mb-1">Date of Birth</label>
                                        <input type="date" id="dob" required
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                </div>

                                {/* Qualification & Registration Year */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='qualification' className="block font-bold mb-1">Qualification</label>
                                        <input type="text" id="qualification" required placeholder="e.g. MBBS, BDS"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label htmlFor='year' className="block font-bold mb-1">Year Of Medical Council Registration</label>
                                        <select id="registrationYear" required
                                            className="form-select w-full border border-gray-300 rounded px-3 py-2">
                                            <option disabled value="">--Select Year--</option>
                                            {[...Array(66)].map((_, i) => {
                                                const year = 2025 - i;
                                                return <option key={year} value={year}>{year}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>

                                {/* Experience & Employment Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='experience' className="block font-bold mb-1">Work Experience (Years)</label>
                                        <select id="experience" required
                                            className="form-select w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                            <option disabled value="">--Select Year--</option>
                                            {Array.from({ length: 50 }, (_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor='emptype' className="block font-bold mb-1">Employment Type</label>
                                        <select id="employment" required
                                            className="form-select w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                            <option disabled value="">--Select Employment--</option>
                                            <option value="Self Employed">Self Employed</option>
                                            <option value="Salaried">Salaried</option>
                                            <option value="Professional">Professional</option>
                                        </select>
                                    </div>
                                </div>

                                {/* PAN & Loan Amount */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='pan' className="block font-bold mb-1">PAN Number</label>
                                        <input type="text" id="pan" required placeholder="e.g. ABCDE1234F"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label htmlFor='loanamount' className="block font-bold mb-1">Loan Amount Required</label>
                                        <input type="number" id="loanAmount" required placeholder="e.g. 600000"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                </div>

                                {/* Pincode & City */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor='pincode' className="block font-bold mb-1">Pincode</label>
                                        <input type="text" id="pincode" required placeholder="e.g. 654321"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label htmlFor='city' className="block font-bold mb-1">City</label>
                                        <input type="text" id="city" required placeholder="e.g. Chennai"
                                            className="form-input w-full border border-gray-300 rounded px-3 py-2" />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button type="submit"
                                        className="bg-[#5a9b5a] w-full text-white px-6 py-2 rounded transition">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/3 flex justify-center items-start">
                            <img src={Doctor4} alt="Doctor" className="rounded-lg w-100 h-100" />
                        </div>
                    </div>
                </section>

                <section className="py-10">
                    <h1 className="text-4xl font-bold text-[#0282ba] mb-8">FAQ</h1>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={faq.question} className="border rounded-lg">
                                <button
                                    className="w-full flex justify-between items-center px-4 py-6 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    {faq.question}
                                    <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                                </button>
                                {activeIndex === index && (
                                    <div className="px-4 py-3 text-gray-700 bg-white border-l-4 border-[#0282ba]">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </div>

        </div>
    )
}

export default DoctorLoan;