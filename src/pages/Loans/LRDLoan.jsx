import { useState } from "react";
import lrdloan1 from '../../assets/loan_section/lrdloan1.png';
import BusinessImg from '../../assets/loan_section/Premium Photo _ Finance and wealth banner with human hand.jpg';
import Calculator from '../../components/ReusableChartCalculator';
import Lrdicon1 from '../../assets/loan_section/lrd-icon1.png';
import Lrdicon2 from '../../assets/loan_section/lrd-icon2.png';
import Lrdicon3 from '../../assets/loan_section/lrd-icon3.png';
import Lrdicon4 from '../../assets/loan_section/lrd-icon4.png';
import Lrdicon5 from '../../assets/loan_section/lrd-icon5.png';
import Lrdicon6 from '../../assets/loan_section/lrd-icon6.png';
import ApplyNowForm from '../../components/ApplyNowForm';

const LRDLoan = () => {
    const inputs = [
        {
            name: 'loanAmount',
            label: 'Loan Amount',
            min: 100000,
            max: 10000000,
            step: 10000,
            defaultValue: 500000,
            prefix: '₹ ',
        },
        {
            name: 'interestRate',
            label: 'Interest Rate (per annum)',
            min: 1,
            max: 20,
            step: 0.1,
            defaultValue: 10,
            suffix: ' %',
        },
        {
            name: 'loanTerm',
            label: 'loanTerm (in years)',
            min: 1,
            max: 8,
            step: 1,
            defaultValue: 5,
            suffix: ' years',
        },
    ];

    const calculate = ({ loanAmount, interestRate, loanTerm }) => {
        const monthlyRate = interestRate / 12 / 100;
        const tenureInMonths = loanTerm * 12;

        const emi =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
            (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

        const total = emi * tenureInMonths;
        const interest = total - loanAmount;

        return {
            principal: loanAmount,
            interest,
            emi,
            total,
        };
    };


    const [index, setIndex] = useState(0);

    const totalSlides = 3;

    const prev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    const next = () => setIndex((prev) => (prev + 1) % totalSlides);

    const [activeTab, setActiveTab] = useState("eligibility");

    const [isFormOpen, setIsFormOpen] = useState(false);


    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Lease Rental Discounting</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Get the Best Loans on Rent Receivables for your Commercial Property.
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
                            src={lrdloan1}
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
                    <span>LRD Loan</span>
                </nav>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <section className="py-8 bg-white">
                    <div className="row">
                        <h2 className="font-bold text-4xl text-[#0282ba] mb-4">Introduction</h2>
                        <p className="text mb-2">
                            Get the Best Loans on Rent Receivables for your Commercial Property.
                        </p>
                        <p className="text mb-2">
                            If you have freehold commercial property which you have rented out, you can secure a loan of
                            up to 50% of property value or 85% net monthly rent receivable would be considered for monthly EMI.
                        </p>
                        <p className="text">
                            This financial instrument provides liquidity without disturbing your existing tenancy agreements.
                            Benefit from longer repayment tenures, allowing for manageable monthly installments. The loan approval
                            process is streamlined, focusing on the stability of your rental income. Utilize these funds for business
                            expansion, debt consolidation, or other strategic investments. Secure your financial future by leveraging
                            the consistent income stream from your commercial property.
                        </p>
                    </div>
                </section>

                <section className="py-10 bg-gray-50">
                    <div className="row">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Image Section */}
                            <div className="md:w-1/2">
                                <img
                                    src={BusinessImg}
                                    alt="Business Loan"
                                    className="w-50 h-auto rounded shadow"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="md:w-1/2">
                                <h2 className="font-bold text-4xl text-[#0282ba] mb-4">ABOUT LEASE RENTAL DISCOUNTING</h2>
                                <p className="text mb-3">
                                    Investing in a commercial property can prove to be advantageous in innumerable ways. You can always
                                    offer it on lease and earn a decent rental income every month. Moreover, you can monetize these rental
                                    receipts to avail a significant line of credit. Lease rental discounting is a term loan you avail by
                                    pledging rental receipts as collateral.
                                </p>
                                <p className="text mb-3">
                                    This allows you to access substantial funds without selling the property, preserving your asset.
                                    The loan amount is typically based on the discounted present value of the future rental income,
                                    providing a predictable and stable financing solution. It's a strategic tool for businesses seeking
                                    to leverage their existing real estate portfolio for expansion or other financial needs.
                                </p>
                                <p className="text mb-3">
                                    As you are providing collateral for receiving loan, it becomes a secured line of credit. You can easily
                                    repay the loan amount in Equated Monthly Instalments (EMIs) as per your affordability. This makes the
                                    financing option simple and flexible.
                                </p>
                                <p className="text">
                                    There is no end-use restriction. Whether you plan to upscale your production or require financing to
                                    set up a new retail store or wish to pay off existing debt, you can do it all by applying for Lease
                                    Rental Discounting.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}

                <Calculator title="EMI Calculator" inputs={inputs} calculate={calculate} resultTitle = "EMI Amount" buttonchange = "Calculate Loan"/>

                <section className="bg-[#fff7ee] py-10 overflow-hidden">
                    <div className="container">
                        <h2 className="text-2xl font-bold text-[#0077b6] uppercase mb-8">
                            Features & Benefits of Loan on Rental Income
                        </h2>

                        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${index * 100}%)` }}
                            >
                                {/* Slide 1 */}
                                <div className="flex-shrink-0 w-full flex justify-center gap-6">
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon1} alt="Loan Tenure" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">Longer loan repayment tenure</p>
                                    </div>
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon2} alt="Secure Loan" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">Secure loan at attractive interest rates</p>
                                    </div>
                                </div>

                                {/* Slide 2 */}
                                <div className="flex-shrink-0 w-full flex justify-center gap-6">
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon3} alt="Speedy Disbursal" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">Speedy disbursal of loan amount</p>
                                    </div>
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon4} alt="Doorstep Service" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">Doorstep service is available</p>
                                    </div>
                                </div>

                                {/* Slide 3 */}
                                <div className="flex-shrink-0 w-full flex justify-center gap-6">
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon5} alt="Easy Documentation" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">Minimal and easy documentation</p>
                                    </div>
                                    <div className="w-64 h-56 bg-white hover:bg-[#0282ba] hover:text-white transition-colors duration-300 rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
                                        <img src={Lrdicon6} alt="Loan Factors" className="h-12 mb-4" />
                                        <p className="font-semibold text-center">
                                            Loan amount depends on net rentals & agreements
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prev}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        prev();
                                    }
                                }}
                                aria-label="Previous Slide"
                                tabIndex={0}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-800"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={next}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        next();
                                    }
                                }}
                                aria-label="Next Slide"
                                tabIndex={0}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-800"
                            >
                                &#8250;
                            </button>
                        </div>
                    </div>
                </section>

                <section className="document">
                    <div className="container mt-4 mb-5">
                        <h2 className="text-center text-4xl text-[#0282ba] font-bold">Eligibility & Documents</h2>

                        {/* Loan Menu */}
                        <div className="flex max-w-7xl mx-auto mt-4 space-x-4">
                            <div
                                role="tab"
                                tabIndex={0}
                                aria-selected={activeTab === "eligibility"}
                                className={`cursor-pointer px-4 py-2 border-b-2 ${activeTab === "eligibility"
                                    ? "border-[#0282ba] text-[#0282ba] font-semibold"
                                    : "border-transparent"
                                    }`}
                                onClick={() => setActiveTab("eligibility")}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveTab("eligibility");
                                    }
                                }}
                            >
                                Eligibility Criteria
                            </div>
                            <div
                                role="tab"
                                tabIndex={0}
                                aria-selected={activeTab === "documents"}
                                className={`cursor-pointer px-4 py-2 border-b-2 ${activeTab === "documents"
                                    ? "border-[#0282ba] text-[#0282ba] font-semibold"
                                    : "border-transparent"
                                    }`}
                                onClick={() => setActiveTab("documents")}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveTab("documents");
                                    }
                                }}
                            >
                                Required Documents
                            </div>
                        </div>

                        {/* Eligibility Criteria */}
                        {activeTab === "eligibility" && (
                            <div className="mt-6 ">
                                <table className="w-full table-auto border border-gray-300">
                                    <thead className="bg-[#0282ba] text-white">
                                        <tr>
                                            <th className="p-3 border border-gray-300 text-left">Eligibility Criteria</th>
                                            <th className="p-3 border border-gray-300 text-left">Properties</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="p-3 border border-gray-300 font-semibold">
                                                Agreement between three parties
                                            </td>
                                            <td className="p-3 border border-gray-300">
                                                Note, that Lease Rental Discounting is a loan offering against the expected rental cash flow and not the property. Hence, it’s an agreement between three parties – you, the tenant, and the bank. On signing the agreement, the tenant agrees to make rental payments directly to the bank for loan repayment.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300 font-semibold">
                                                Tenant’s financial standing
                                            </td>
                                            <td className="p-3 border border-gray-300">
                                                Since the rental payments are entirely dependent on the tenant’s financial standing, the bank considers it for loan approval. If the tenant has a solid financial standing, they will be able to make rental payments without defaults. This facilitates hassle-free loan approval and a significant offering. If the tenant has poor financial standing, there is a high possibility they will struggle to make timely rental payments. This could hinder your loan approval.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300 font-semibold">
                                                Lease term
                                            </td>
                                            <td className="p-3 border border-gray-300">
                                                Lease term is the time period for which the property lease is in force. The minimum and maximum lease terms are different for every property type and state. Banks consider the lease term for loan approval, as it indicates the continuing rental cash flow. Based on the lease term banks offer a suitable loan amount for an appropriate repayment tenure. Generally, most banks look for a longer lease term for loan approval as it translates to a stable repayment capacity for a longer period.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Required Documents */}
                        {activeTab === "documents" && (
                            <div className="mt-6 ">
                                <table className="w-full table-auto border border-gray-300">
                                    <thead className="bg-[#0282ba] text-white">
                                        <tr>
                                            <th className="p-3 border border-gray-300 text-left">Document Type</th>
                                            <th className="p-3 border border-gray-300 text-left">Required Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3 border border-gray-300 font-semibold" rowSpan={2}>
                                                PROPERTY DOCUMENTS
                                            </td>
                                            <td className="p-3 border border-gray-300">
                                                Leave &amp; License agreement copy
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300">
                                                12 months bank statement showing rental credits
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300 font-semibold" rowSpan={4}>
                                                BUSINESSMEN – PROFESSIONALS
                                            </td>
                                            <td className="p-3 border border-gray-300">Application form with photograph</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300">Identity and residence proof</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300">Last 6 months bank statements</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-gray-300">Processing fee cheque</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default LRDLoan;