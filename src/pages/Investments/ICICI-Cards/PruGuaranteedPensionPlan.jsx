import { useState } from "react";
import Prugold from '../../../assets/investments/Plan for Life Gold.jpeg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';
import icicicard2 from '../../../assets/sample/icicicard2.png';

const PruGuaranteedPensionPlan = () => {
    const [openId, setOpenId] = useState(null);

    const toggleContent = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            ICICI Pru Guaranteed Pension Plan<br />
                            <span className="text-white">Retirement Plans</span>
                        </h1>
                    </div>
                    {/* Right Image or SVG Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={icicicard2}
                            alt="Loan illustration"
                            className="max-w-full h-[400px]"
                        />
                    </div>
                </div>

            </div>


            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8'>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="w-full">
                        <h3 className="text-[#97291e] text-2xl font-semibold">
                            Guaranteed Pension Plan
                        </h3>
                        <p className="text-[19px] text-gray-700 mt-4">
                            Your retirement is a milestone worth celebrating. After all, it is something you have been looking forward to. You can go on that long-awaited world tour, follow new hobbies, spend more time with family and friends, or pursue your dreams - all at your own pace. You can power all of these when you have the surety of a regular income that will continue for the rest of your life. We understand how important this is for you. That’s why, we bring to you ICICI Pru Guaranteed Pension Plan that gives you all you need to live a worry-free life even after retirement.
                        </p>

                    </div>
                    <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                        <img src={Prugold} alt="Insurance Care" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain mx-auto md:mx-0" />
                    </div>
                </div>

                <div className="container py-8">
                    <section className="grid gap-6">
                        {[
                            {
                                id: "income",
                                title: "✔️ Guaranteed Regular Income",
                                content:
                                    "You can fulfil all your dreams and commitments while maintaining the same standard of living. With ICICI Pru Guaranteed Pension Plan, you just need to invest once and decide when you want to start receiving your income. Then, just sit back and relax. You will receive your regular income as per your choice - every month, quarter, six months or year - for the rest of your life.",
                            },
                            {
                                id: "customized",
                                title: "✔️ Customized for Your Needs",
                                content:
                                    "Every retirement is unique. You may want to go after your dreams like travelling the world or spending time with friends and family. You may wish to finance your child’s higher education or plan for their marriage. There may be multiple ways you want to spend your retirement days. You can also plan exactly when you want your regular income to start - immediately or after a period of up to 10 years. You can also choose the frequency at which you want to receive your income - monthly, quarterly, half-yearly or yearly.",
                            },
                            {
                                id: "safe",
                                title: "✔️ 100% Safe Investment",
                                content:
                                    "When you buy ICICI Pru Guaranteed Pension Plan, your money is safe from any kind of market volatility. You do not have to worry about market fluctuations. You will also know exactly how much regular income you will receive monthly, quarterly, half-yearly or yearly. Rest assured, your income is guaranteed for life.",
                            },
                            {
                                id: "return",
                                title: "✔️ Get Your Investment Back",
                                content:
                                    "ICICI Pru Guaranteed Pension Plan is a first-of-its-kind annuity plan that gives you your money back during your lifetime. You can choose the ‘Return of Purchase Price’ option and get back the initial amount you invested.",
                            },
                            {
                                id: "extra",
                                title: "✔️ Extra Benefits",
                                content: (
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>Invest more to benefit more.</li>
                                        <li>Top-up options to increase your income.</li>
                                        <li>Online, loyalty boosters*</li>
                                        <li>NPS benefit*</li>
                                    </ul>
                                ),
                            },
                        ].map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white shadow-md p-4 rounded-lg  
                                      hover:shadow-lg transform hover:scale-105 
                                      transition duration-300"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleContent(feature.id)}
                                    className="text-lg font-semibold cursor-pointer text-[#97291e] bg-transparent border-none p-0 text-left w-full focus:outline-none"
                                    aria-expanded={openId === feature.id}
                                    aria-controls={`feature-content-${feature.id}`}
                                >
                                    {feature.title}
                                </button>
                                {openId === feature.id && (
                                    <div className="mt-2 text-gray-700 ">
                                        {feature.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
                </div>
                <InsuracePartners
                    heading="Trusted Investment Partners"
                    partners={partnersData}
                />
            </div>
        </div>
    )
}

export default PruGuaranteedPensionPlan;