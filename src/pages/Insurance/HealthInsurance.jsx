import { useState } from "react";
import healthinsurance1 from '../../assets/sample/healthinsurance2.png';
import family from '../../assets/insurence/family.png';
import financial from '../../assets/insurence/financial-profit.png';
import mortarboard from '../../assets/insurence/mortarboard.png';
import pension from '../../assets/insurence/pension.png';
import hospital from '../../assets/insurence/hospital.png';
import currency from '../../assets/insurence/currency.png';
import insurance from '../../assets/insurence/insurance icon.png';
import familyHealth from '../../assets/insurence/family-health-insurance.avif';
import HealthInsurance1 from '../../assets/insurence/health-insurance-images1.avif';
import HealthInsurance2 from '../../assets/insurence/health-insurance-images2.avif';
import InsuracePartners from '../../components/InsurancePartners';
import ICICILOGO from '../../assets/insurence/icicilogo2.jpg';
import Carelogo from '../../assets/insurence/carelogo.svg';
import ApplyNowForm from '../../components/ApplyNowForm'

const HealthInsurance = () => {

    const partnersData = [
        { name: 'ICICI Lombard', logo: ICICILOGO },
        { name: 'Care Insurance', logo: Carelogo },
    ];

    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div>

            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Health Insurance
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">
                            <strong>Protecting Your Family's Health, Today and Tomorrow.</strong>{' '}
                            Safeguard your well-being and embrace life's moments with our comprehensive health insurance plans.
                        </p>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
                        >
                            Apply Now
                        </button>


                    </div>

                    <div className="flex justify-center">
                        <img
                            src={healthinsurance1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

                <ApplyNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} loanTypeLabel="Insurance" />
            </div>


             <div className="bg-[#fbfbfb] pl-12 py-3">
                <nav className="text-gray-600 text-sm flex items-center space-x-2">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">&gt;</span>
                    <span>Health Insurance</span>
                </nav>
            </div>
            
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
                <section className="mt-0">
                    <div className="text-center mt-10">
                        <h1 className="text-3xl font-bold leading-tight">
                            Let's find the right <br />
                            <span className="text-red-700">Insurance plan for you</span>
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        {[
                            { img: family, text: "Safe future for my family" },
                            { img: financial, text: "Get Market linked returns" },
                            { img: mortarboard, text: "Your child's\neducation" },
                            { img: pension, text: "Stress free\nRetirement" },
                            { img: hospital, text: "Cancer\nprotection" },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-md p-4 w-36"
                            >
                                <img src={item.img} alt="Icon" className="h-20" />
                                <p className="mt-2 text-center whitespace-pre-line text-sm text-gray-700">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-stretch mt-16 bg-white p-8 rounded-2xl shadow-md">
                        <div className="flex-1 pr-6 border-r border-gray-300">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Cancer Protection</h2>
                            <p className="text-gray-600 text-base mb-5 leading-relaxed">
                                Cancer Cover benefit of ICICI Pru Heart/Cancer Protect protects you from cancer treatment related
                                expenses. By paying a lump sum payout on diagnosis of any of the covered conditions, based on the severity
                                of the condition. It saves the policyholder from the heavy costs associated with recovery and treatment.
                            </p>
                            <div className="bg-yellow-100 text-[#0282ba] text-sm p-4 rounded-md leading-snug max-w-md">
                                Pro tip: Get 100% payout on major conditions and 25% minor conditions irrespective of actual medical cost
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
                            <div className="bg-[#0282ba] text-white rounded-xl p-6 w-72 shadow-lg flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4 leading-tight">
                                    Cancer <br /> Cover
                                </h3>
                                <p className="text-sm mb-4 leading-snug">
                                    Get a Cancer Cover of <span className="font-semibold">&#8377; 20 Lakh</span> (You can claim this amount
                                    on diagnosis)
                                </p>
                                <div className="border-t border-dashed border-white my-4"></div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm">You pay</p>
                                    <p className="text-3xl font-bold">&#8377; 249<span className="text-lg font-medium">/Month</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="mt-0 py-12">
                    <h1 className="text-center text-[#0283BB] text-[35px] font-bold mb-10 leading-tight">
                        Health Insurance Offers
                    </h1>

                    <div className="bg-[#fde6c6] mx-4 md:mx-20 p-8 rounded-lg flex flex-col md:flex-row justify-between items-stretch gap-8 shadow-md">

                        <div className="flex flex-col gap-6 w-full md:w-[48%]">
                            <label className="flex items-center border border-orange-400 bg-white rounded-md px-6 py-4 cursor-pointer gap-4">
                                <input
                                    type="radio"
                                    name="healthOption"
                                    className="h-5 w-3 text-orange-500"
                                />
                                <img
                                    src={hospital}
                                    alt="Hospital Icon"
                                    className="h-[25px] w-auto"
                                />
                                <span className="text-gray-800 text-lg font-medium">
                                    Health Insurance
                                </span>
                            </label>

                            <label className="flex items-center border border-orange-400 bg-white rounded-md px-6 py-4 cursor-pointer gap-4">
                                <input
                                    type="radio"
                                    name="healthOption"
                                    className="h-5 w-3 text-orange-500"
                                />
                                <img
                                    src={hospital}
                                    alt="Hospital Icon"
                                    className="h-[25px] w-auto"
                                />
                                <span className="text-gray-800 text-lg font-medium">
                                    Health Super Top-Up
                                </span>
                            </label>
                        </div>

                        <div className="w-full md:w-[48%]">
                            <ul className="list-disc pl-6 text-gray-700 text-[16px] leading-relaxed space-y-4">
                                <li>Covers the medical expenses of you and your loved ones</li>
                                <li>Ensures that you get access to best-in-class healthcare services</li>
                                <li>Only pay a nominal price</li>
                                <li>
                                    The policy takes care of:
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Pre- and post-hospitalization costs</li>
                                        <li>Day-care procedures</li>
                                        <li>Maternity and new-born coverage &amp; much more</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-[#0283BB] hover:bg-[#0270a0] text-white font-semibold text-lg px-12 py-3 rounded-md shadow-md transition duration-300">
                            GET STARTED
                        </button>
                    </div>
                </section>

                <section className="flex flex-col mt-0 bg-[#FFF8F0] py-8">
                    <div className="container">
                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            <div className="flex items-center bg-[#fde6c6] border-2 border-orange-400 rounded-xl p-4 w-full max-w-md bg-white">
                                <img
                                    src={family}
                                    alt="Family Protection"
                                    className="w-auto h-24"
                                />
                                <p className="ml-4">
                                    Ensure complete protection for yourself and your loved ones
                                </p>
                            </div>
                            <div className="flex items-center bg-[#fde6c6] border-2 border-orange-400 rounded-xl p-4 w-full max-w-md bg-white">
                                <img
                                    src={financial}
                                    alt="Financial Profit"
                                    className="w-auto h-24"
                                />
                                <p className="ml-4">
                                    In patient hospitalisation upto SI
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            <div className="flex items-center bg-[#fde6c6] border-2 border-orange-400 rounded-xl p-4 w-full max-w-md bg-white">
                                <img
                                    src={currency}
                                    alt="Currency"
                                    className="w-auto h-24"
                                />
                                <p className="ml-4">
                                    All day care procedures covered
                                </p>
                            </div>
                            <div className="flex items-center bg-[#fde6c6] border-2 border-orange-400 rounded-xl p-4 w-full max-w-md bg-white">
                                <img
                                    src={hospital}
                                    alt="Hospital"
                                    className="w-auto h-24"
                                />
                                <p className="ml-4">
                                    Cashless Facility at hospitals near you
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex items-center bg-[#fde6c6] border-2 border-orange-400 rounded-xl p-4 w-full max-w-md bg-white">
                                <img
                                    src={insurance}
                                    alt="Insurance Icon"
                                    className="w-auto h-24"
                                />
                                <p className="ml-4">
                                    Ensure complete protection for yourself and your loved ones
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-10">
                    <div className="container flex flex-col md:flex-row items-center">
                        <div className="md:w-7/12 w-full">
                            <h1 className="text-center text-[#0283BB] text-3xl font-extrabold mb-5">
                                Health Insurance
                            </h1>
                            <p className="text-gray-700 mb-4">
                                Health insurance is a security cover wherein the insurer bears the insured person's
                                healthcare costs in exchange for regular premium payments. You can opt for our best
                                health insurance plans on an individual or family floater basis.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                <li>Premium Discount on Multi Year Policy*</li>
                                <li>Tax savings upto 75000* under section 80D</li>
                                <li>Coverage for modern treatment like Robotic Surgery</li>
                                <li>Cashless benefit at 9747+ hospitals across the country</li>
                            </ul>

                            <div className="flex flex-col md:flex-row justify-around items-center mt-6 space-y-4 md:space-y-0">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-[#0283BB]">22900+</p>
                                    <p className="text-gray-600">Cashless Healthcare Providers</p>
                                </div>
                                <div className="hidden md:block h-16 w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-[#0283BB]">38 Lakh+</p>
                                    <p className="text-gray-600">Insurance Claims Settled*</p>
                                </div>
                                <div className="hidden md:block h-16 w-px bg-gray-300"></div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-[#0283BB]">24*7</p>
                                    <p className="text-gray-600">Claim and Customer Support</p>
                                </div>
                            </div>
                        </div>

                       <div className="md:w-5/12 w-full text-center mt-10 md:mt-0">
                            <img
                                src={familyHealth}
                                alt="Health Insurance Illustration"
                                className="rounded-2xl mx-auto"
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-0 py-10">
                    <div className="container">
                        {/* What is Health Insurance */}
                        <div className="bg-white rounded-2xl shadow-md p-8">
                            <h1 className="text-center text-[#0283BB] text-3xl font-bold mb-6">
                                What is Health Insurance?
                            </h1>
                            <p className="text-gray-700 leading-relaxed">
                                Health insurance is a type of insurance that pays for insured members' medical expenses due to accident, illness, or injury. It is an indemnity-based agreement under which the insurer promises to bear the hospitalisation costs, OPD charges, doctor's fees, medications, and other medical bills concerning the insured.
                            </p>
                            <hr className="my-6 border-gray-300" />
                            <p className="text-gray-700 leading-relaxed">
                                The importance of health insurance has shot up in the last few years due to the alarming spread of lifestyle diseases among people at all stages of life. Even a short trip to the hospital can quickly eat up your hard-earned savings in no time. In such a scenario, a health insurance policy can help you avoid a financial crisis.
                            </p>
                        </div>

                        {/* Types of Health Insurance Plans */}
                        <div className="mt-10">
                            <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-8">
                                Types of Health Insurance Plans
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <div className="bg-white rounded-2xl shadow-md p-6">
                                    <h5 className="text-lg font-semibold text-[#FF8800] mb-4">
                                        Indemnity-Based Health Insurance Plans
                                    </h5>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Indemnity-based health insurance is a type of insurance that pays for insured members' medical expenses due to accident, illness, or injury. In an indemnity-based agreement, the insurer promises to bear the hospitalization costs, OPD charges, doctor's fees, medications, and other medical bills concerning the insured.
                                    </p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white rounded-2xl shadow-md p-6">
                                    <h5 className="text-lg font-semibold text-[#FF8800] mb-4">
                                        Fixed-Benefit Health Insurance Plans
                                    </h5>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        A fixed-benefit health plan is one where a fixed benefit/sum insured is disbursed to the insured in case a pre-defined medical condition is diagnosed. Unlike other health plans where you raise a claim for medical cover, here you receive the sum insured upon diagnosis, and it depends on how you utilise it.
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* Compare Our Best Health Insurance Plans */}
                        <div className="mt-16">
                            <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-10">
                                Compare Our Best Health Insurance Plans in India
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Plan 1 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105">
                                    <div>
                                        <h5 className="text-lg font-semibold text-[#FF8800] mb-6">
                                            Family Health Insurance
                                        </h5>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Health Insurance that Covers your Loved Ones
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                                            <li>Annual Health Checkup & Save Tax</li>
                                            <li>Modern Treatments Coverage</li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <button
                                            type="button"
                                            className="inline-block bg-[#0283BB] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#026a97] transition"
                                        >
                                            BUY NOW
                                        </button>
                                    </div>
                                </div>

                                {/* Plan 2 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105">
                                    <div>
                                        <h5 className="text-lg font-semibold text-[#FF8800] mb-6">
                                            One Crore Health Plan
                                        </h5>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Health Insurance with Higher Sum Insured
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                                            <li>Upto 50% No Claim Bonus</li>
                                            <li>Individual or Floater Option</li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <button
                                            type="button"
                                            className="inline-block bg-[#0283BB] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#026a97] transition"
                                        >
                                            BUY NOW
                                        </button>
                                    </div>
                                </div>

                                {/* Plan 3 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105">
                                    <div>
                                        <h5 className="text-lg font-semibold text-[#FF8800] mb-4">
                                            Health Insurance For Senior Citizens
                                        </h5>
                                        <p className="text-gray-700 text-sm mb-4">
                                            Your Parents have always cared for you, Now it's your TURN
                                        </p>
                                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                                            <li>No Pre-policy medical check-up</li>
                                            <li>Annual Health check-up for all Insured persons</li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <button
                                            type="button"
                                            className="inline-block bg-[#0283BB] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#026a97] transition"
                                        >
                                            BUY NOW
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mt-5 mb-5">
                        <div className="flex justify-center">
                            <div className="w-full">
                                <div className="bg-white shadow-lg rounded-lg p-8">
                                    <h3 className="text-center text-[#0282ba] text-3xl font-extrabold mb-6">
                                        Benefits of a Medical Insurance Policy
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        With over an 8% year-on-year increase in medicine prices, medical tests, and hospital
                                        charges across India, families have realised the importance of affordable health
                                        insurance while facing a healthcare crisis.
                                    </p>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                        <li><strong>Financial Protection</strong> against Medical Inflation</li>
                                        <li><strong>Coverage</strong> for Hospitalisation Expenses</li>
                                        <li><strong>Coverage</strong> for Critical Illnesses</li>
                                        <li><strong>Protection</strong> above Corporate Health Insurance</li>
                                        <li><strong>Cashless Claim Benefit</strong></li>
                                        <li><strong>Customised Plans</strong> at Affordable Rates</li>
                                        <li><strong>Avail Tax Benefits</strong> under Section 80D</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="flex flex-col items-center">
                            <h2 className="text-center text-[#0282ba] text-3xl font-extrabold mb-6">
                                Which Type of Health Insurance Should You Buy?
                            </h2>
                            <p className="text-gray-600 mb-6 text-center">
                                You should determine the ideal health plan for yourself and your family by evaluating the
                                healthcare needs, age, and current health status of every member.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mt-4">
                                {/* Card 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img
                                        src={HealthInsurance1}
                                        className="w-full rounded-t-lg mt-8"
                                        alt="Family Insurance"
                                    />
                                    <div className="p-6">
                                        <h4 className="text-xl font-semibold mt-4">If You Have Dependent Family Members</h4>
                                        <p className="text-gray-600 mt-2">
                                            Comprehensive coverage with high sum insured options and customizable policy benefits.
                                        </p>
                                        <button
                                            className="w-full mx-auto mt-6 px-4 py-2 text-white rounded-lg bg-orange-500"
                                            style={{ backgroundColor: '#ff8800' }}
                                        >
                                            Family Floater Insurance Policy
                                        </button>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img
                                        src={HealthInsurance2}
                                        className="w-full rounded-t-lg"
                                        alt="Youth Insurance"
                                    />
                                    <div className="p-6">
                                        <h4 className="text-xl font-semibold mt-4">If You are Young and Need Complete Coverage</h4>
                                        <p className="text-gray-600 mt-2">
                                            Affordable plans with wellness programs and unlimited automatic recharge options.
                                        </p>
                                        <button
                                            className="w-full mx-auto mt-6 px-4 py-2 text-white rounded-lg bg-orange-500"
                                            style={{ backgroundColor: '#ff8800' }}
                                        >
                                            Youth Health Insurance Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#fafafb] p-10">
                    <div className="container">
                        <h2 className="text-center text-[#0282ba] text-3xl font-extrabold mb-6">
                            How Do Health Insurance Plans Work?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            A health insurance plan works like any other insurance policy wherein the insurer agrees
                            to pay the insured person’s hospitalisation cost up to the sum insured...
                        </p>

                        {/* First row: 5 cards */}
                        <div className="flex flex-wrap justify-center gap-6 mt-6">
                            {[
                                {
                                    img: family,
                                    key: 'choose-plan',
                                    text: <><strong>Choose</strong> a Suitable Health Insurance Plan</>
                                },
                                {
                                    img: financial,
                                    key: 'make-payments',
                                    text: <><strong>Make Regular</strong> Payments of the Premium</>
                                },
                                {
                                    img: pension,
                                    key: 'track-health',
                                    text: <><strong>Track</strong> Your Health with Yearly Health Check-ups</>
                                },
                                {
                                    img: family,
                                    key: 'earn-bonus',
                                    text: <><strong>Earn No Claim Bonus</strong> for Staying Healthy</>
                                },
                                {
                                    img: financial,
                                    key: 'dont-panic',
                                    text: <><strong>Don’t Panic,</strong> if a Medical Emergency Strikes</>
                                }
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center 
                 w-full sm:w-[45%] md:w-[200px] min-h-[200px]"
                                >
                                    <img src={item.img} className="w-16 h-16" alt={item.key} />
                                    <p className="mt-4 font-medium text-gray-800">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>


                        {/* Second row: 2 cards */}
                        <div className="flex flex-wrap justify-center gap-6 mt-6">
                            {[
                                {
                                    img: pension,
                                    key: 'settle-claim',
                                    text: <><strong>Settle Your Claim</strong> Through a Cashless or Reimbursement Facility</>
                                },
                                {
                                    img: family,
                                    key: 'stay-protected',
                                    text: <><strong>Stay Protected</strong> by Continuing Your Health Insurance</>
                                }
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center 
                 w-full sm:w-[45%] md:w-[200px] min-h-[200px]"
                                >
                                    <img src={item.img} className="w-16 h-16" alt={item.key} />
                                    <p className="mt-4 font-medium text-gray-800">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                <section className="bg-white py-10">
                    <div className="container">
                        <h2 className="text-center text-[#0283BB] text-3xl font-bold mb-6">
                            Types of Health Insurance Plans
                        </h2>

                        <p className="text-gray-700 mb-6">
                            With Care Insurance, you get some of India's best health insurance plans designed to meet our
                            customers' diverse medical needs. Below are all the types of health coverage that we offer:
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Individual Health Cover</h3>
                                <p className="text-gray-700 mt-2">
                                    As the name suggests, it is for individuals, primarily young-aged people with no medical condition to enjoy long-term healthcare security. This individual health insurance policy assures the sum insured solely for covering the insured individual's medical expenses. It also covers various other costs, including pre and post-hospitalization expenses, maternity benefits, and much more. These plans are often a little more expensive than family floater plans as there is no sharing of the sum insured; each individual has their own coverage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Family Floater Health Plans</h3>
                                <p className="text-gray-700 mt-2">
                                    Under family floater health insurance, you can cover a maximum of 6 family members on one policy against a single sum insured. This policy is to safeguard the health of your entire family. Also, you can add multiple nominees to this plan. The premium amount in family floater plans is comparatively lower than individual plans, as the sum insured is shared among all the members under the plan. It covers the medical expenses for hospitalization and treatment during an emergency or planned admission. </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Senior Citizen Health Cover</h3>
                                <p className="text-gray-700 mt-2">
                                    A common myth about health insurance is that there are not many options for seniors. This is absolutely incorrect. Senior citizen health insurance plans are aimed at offering specialized healthcare services suitable for individuals above 60 years of age. This kind of insurance offers financial assistance to ensure that seniors have a fixed amount for their senior citizen health insurance plan. They can also avail of cashless benefits, cashless hospitalization, home and day-care cover, AYUSH treatment, COVID care, etc. It is the best way to give your old parents a healthy and peaceful life after retirement.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Maternity Insurance Plans</h3>
                                <p className="text-gray-700 mt-2">
                                    Motherhood is the most crucial phase in a woman’s life. Although the journey is challenging, a sound medical policy ensures relaxed hospital coverage throughout pregnancy. If you are planning for a family, you must opt for maternity insurance. It covers various maternity and delivery expenses, including normal and C-section deliveries, cesarean, pre and postnatal post-delivery care, and vaccination. Maternity insurance ensures premium medical facilities at affordable rates for the mother and newborn. Buying at the right time will help you serve the waiting period and thus make the most out of the benefits.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Health Insurance Plans for Pre-existing Diseases</h3>
                                <p className="text-gray-700 mt-2">
                                    Pre-existing diseases are the illnesses one may suffer from before they purchase a health plan. With age, our elderly family members often suffer from specific medical conditions like diabetes, hypertension, or high BMI. At Care Health Insurance, we ensure that people with pre-existing diseases get coverage conditions with a reduced waiting period. These health plans come with special features like daycare treatments, home care, annual health check-ups, and more to care for people with diabetes, high BP, and heart problems.  </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Critical Illness Plans</h3>
                                <p className="text-gray-700 mt-2">
                                    Incidences of life-threatening diseases are increasing in India at an alarming rate. Critical illnesses such as cancer, stroke, heart ailments, and organ failure can eat away your savings in the blink of an eye. Insurance for critical conditions covers the treatment of all these diseases. It mitigates your hospitalization expenses along with post-hospitalization benefits. The critical illness plans are fixed benefit plans where a defined payout is made at the time of diagnosis of the listed diseases. The money can be used to pay for the treatment or for meeting any other financial requirements. </p>
                            </div>
                        </div>
                    </div>
                </section>



                <InsuracePartners
                    heading="Trusted Insurance Partners"
                    partners={partnersData}
                />
            </div>
        </div>

    );
};

export default HealthInsurance;
