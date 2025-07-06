import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const FlexiWealthAdvantagePlan = () => {
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
                            <span className="text-[#ff8c00]">Max Life Flexi Wealth Advantage Plan</span>
                        </h1>
                    </div>

                  </div>

            </div>

            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5">
                        What the Max Life Flexi Wealth Advantage Plan has in store for you
                    </h1>
                    <p className="text-gray-700">
                        Every individual's financial needs are different and with a host of features available under Max Life Flexi Wealth Advantage Plan, you can choose the ones you like and customize your Term Plan from the following options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="md:w-2/3">
                        <h3 className="text-[#ff8c00] text-2xl mb-3">
                            Max Life Flexi Wealth Advantage Plan
                        </h3>
                        <p className="text-[19px] text-gray-700">
                            A Unit Linked Insurance Plan that partners you in your journey of wealth creation and allows you to craft your plan as per the needs of your loved ones, because for them.
                        </p>
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
                <div className=" max-w-5xl mx-auto mb-8">
                    <h1 className="text-[#0282ba] text-center text-3xl mb-5">
                        Product variants
                    </h1>
                    <strong className="block text-gray-800">
                        The product can be taken with one of the following two variants:
                    </strong>
                    <p className="mt-2">1. Wealth Variant (Single Pay / Limited Pay / Regular Pay)</p>
                    <p>2. Whole Life Variant (Limited Pay)</p>
                    <p className="mt-2">
                        You can additionally opt for Waiver of Premium (WOP) benefit, if Policyholder and Life Insured are different individuals. The Waiver of Premium benefit shall be available at inception only for limited and regular pay Policies.
                    </p>
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

export default FlexiWealthAdvantagePlan;