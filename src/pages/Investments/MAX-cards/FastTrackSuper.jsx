import max1 from '../../../assets/sample/max1.png';
import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const FastTrackSuper = () => {
    const partnersData = [
        { name: 'ICICI direct plans', logo: ICICILogo },
        { name: 'HDFC Life', logo: HDFCLogo },
        { name: 'MAX Life', logo: MAXLogo },
    ];
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Max Life Insurance<br />
                            <span className="text-[#ff8c00]">Max Life Fast Track Super</span>
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={max1}
                            alt="Loan illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>

            </div>


            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Fast Track Super Plan has in store for you
                    </h1>
                    <p className="text-gray-700">
                        A plan which helps you achieve your goals by providing you with multiple investment options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Max Life Fast Track Super Plan Offers You
                        </h3>
                        <p className="text-[19px] text-gray-700">
                            Growth For Your Fund

                            This plan offers you an opportunity to grow your Fund to meet your goals.

                            Options Of Premium Payment Term And Policy Term To Cater To Your Need

                            Choose Single Pay or 5 Pay for 10 years Policy Term or Regular Pay for 20 years Policy Term as per your need </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="rounded-lg shadow-lg p-2 border border-blue-200">
                            <img
                                src={Lifeinsurance}
                                alt="Life Insurance"
                                className="w-60 h-40 rounded-md"
                            />
                            <p className="text-center text-sm font-medium text-[#0283BB] mt-2">Life Insurance</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className=" p-4 md:p-8">
                <div className="max-w-5xl mx-auto mb-10">
                    <h1 className="text-[#0283BB] text-3xl font-bold mb-5">Product variants</h1>

                    <div className="space-y-6">
                        <div>
                            <strong className="block text-lg">Growth For Your Fund</strong>
                            <p className="mt-2 text-gray-700">
                                This plan offers you an opportunity to grow your Fund to meet your goals
                            </p>
                        </div>
                        <div>
                            <strong className="block text-lg">Options Of Premium Payment Term And Policy Term To Cater To Your Need</strong>
                            <p className="mt-2 text-gray-700">
                                Choose Single Pay or 5 Pay for 10 years Policy Term or Regular Pay for 20 years Policy Term as per your need
                            </p>
                        </div>
                        <div>
                            <strong className="block text-lg">Financial Security For Your Family</strong>
                            <p className="mt-2 text-gray-700">
                                The plan offers a Maturity Value equal to Fund Value, Death Benefit equal to higher of (Fund Value, Sum Assured, 105% of all Premiums Paid) and also provides Partial Withdrawal Flexibility
                            </p>
                        </div>
                        <div>
                            <strong className="block text-lg">Investment Flexibility To Choose From 6 Fund Options</strong>
                            <p className="mt-2 text-gray-700">
                                The plan offers you 6 Fund Options that you can choose from, basis your risk appetite
                            </p>
                        </div>
                        <div>
                            <strong className="block text-lg">
                                Safeguarding Your Fund Against Market Volatilities With Systematic Transfer Plan And Dynamic Fund Allocation
                            </strong>
                            <p className="mt-2 text-gray-700">
                                Choose from the 2 investment strategies to protect your Fund against market volatilities
                            </p>
                        </div>
                    </div>
                </div>

                <div>


                    <div className=" max-w-5xl mx-auto space-y-4 text-gray-700 rounded-md shadow p-5">
                        <h1 className="text-[#0282ba] text-center text-3xl mb-5">
                            Max Life Flexi Wealth Advantage Plan offers the following rich features and benefits:
                        </h1>
                        <div>
                            <strong className="block">Return of all charges</strong>
                            <p className="mt-2">
                                You are eligible for a refund of all or some part of the ULIP charges deducted in your policy, which are added back to your fund value
                            </p>
                        </div>

                        <div>
                            <strong className="block">Guaranteed Loyalty Additions to boost up your fund value</strong>
                            <p className="mt-2">
                                Enjoy Guaranteed Loyalty Additions to further enhance your Fund Value from 8th year onwards
                            </p>
                        </div>

                        <div>
                            <strong className="block">Auto Debit Booster</strong>
                            <p className="mt-2">
                                Enjoy an additional booster at the end of 5 Policy Years, on paying any of your first five Premiums (excluding the first Premium) through auto debit (ECS, DD etc.) mode.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Choose from flexible plan options.</strong>
                            <p className="mt-2">
                                Choose from 2 plan variants (Wealth / Whole Life) and multiple Premium Payment Term and Policy Term options to suit your investment tenure. You can further choose from 5 investment strategies and 14 funds to suit your investment style.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Option of Whole Life Cover and wealth acceleration</strong>
                            <p className="mt-2">
                                The Whole Life Plan variant starting with 5 years of Premium Payment Term allows you to shield your loved ones for the whole of your life, and lets your wealth grow till 100 years of age.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Option to choose your Sum Assured Cover Multiple</strong>
                            <p className="mt-2">
                                You can choose your Life Cover from multiple options of 1.25, 7, 10 and 15 times the Premium depending upon your Premium Payment Term and age at entry.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Option to avail regular systematic money withdrawals as per your desire: Smart Withdrawals</strong>
                            <p className="mt-2">
                                The Whole Life variant lets you enjoy a secondary income stream by withdrawing money regularly from your Policy. You may choose this option of ‘Smart Withdrawals’ at inception or anytime during the Policy Term.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Unlimited free switches and premium redirections</strong>
                            <p className="mt-2">
                                Basis your change in investment style, you may avail unlimited switches and premium redirections, absolutely free of any cost
                            </p>
                        </div>

                        <div>
                            <strong className="block">Tax Benefits</strong>
                            <p className="mt-2">
                                Tax benefits may be applicable on premiums paid and benefits received as per prevailing tax laws.
                            </p>
                        </div>

                        <div>
                            <strong className="block">Optional waiver of premium cover</strong>
                            <p className="mt-2">
                                This option ensures that, in case of unfortunate demise of the policyholder provided the risk cover under the Policy is in-force, WOP has been chosen at incept ion and WOP cover is active on the date of death of the policyholder, the Company will fund all future outstanding premiums of the base policy only (Not additional riders chosen) as and when due under the policy, keeping all the promised benefits under the policy intact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />
        </div>
    )
}

export default FastTrackSuper;