import Lifeinsurance from '../../../assets/investments/life-insurance-corporate.jpg';
import InsuracePartners from '../../../components/InsurancePartners';
import ICICILogo from '../../../assets/investments/icici-direct-logo.png';
import HDFCLogo from '../../../assets/investments/hdfcLife-Logo.jpg';
import MAXLogo from '../../../assets/investments/max-life-logo.png';

const GuaranteedLifeTimeIncomePlan = () => {
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
                            <span className="text-[#ff8c00]">Guaranteed LifeTime Income Plan</span>
                        </h1>
                    </div>

                </div>

            </div>


            <div className="container mx-auto px-4 py-4">
                <div className="mb-8 max-w-6xl mx-auto">
                    <h1 className="text-[#0282ba] text-4xl mb-5 text-center">
                        What the Max Life Guaranteed LifeTime Income Plan has in store for you
                    </h1>
                    <p className="text-gray-700">
                        A plan which helps you achieve your goals by providing you with multiple investment options.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row mt-10 gap-6">
                    <div className="mt-10 max-w-3xl mx-auto px-4">
                        <h3 className="text-[#ffb21a] text-2xl font-semibold mb-2">
                            Live Limitless With Our Guaranteed LifeTime Income Plan
                        </h3>
                        <p className="text-lg font-bold text-gray-800">
                            LIVE LIMITLESS WITH OUR GUARANTEED LIFETIME INCOME PLAN
                        </p>

                        <div className="mt-4">
                            <strong className="block text-gray-900 mb-2">Because Dreams Never Retire.</strong>
                            <p className="text-[19px] text-gray-700 max-w-xl">
                                Plan early for <span className="font-semibold">*</span>Guaranteed Income and live a happy life with your loved ones, because for them.
                            </p>
                        </div>
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

            <section className="py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-[#0282ba] text-3xl mb-6">
                    Max Life Guaranteed LifeTime Income Plan Offers You
                </h1>

                <div className="space-y-4 text-gray-800">
                    <strong className="block">
                        Option to choose between Immediate and Deferred Annuity that ensures <span className="font-semibold">*</span>guaranteed income for life
                    </strong>

                    <strong className="block">
                        Joint Life feature to ensure income for you and your loved one
                    </strong>

                    <strong className="block">
                        Legacy for your family, in case of an eventuality
                    </strong>

                    <p className="mt-2 text-gray-700">
                        Get a Life Insurance Cover of 10 times the Annualized Premium (for Limited and Regular Pay options) from base policy.
                        You can also opt for an additional Life Cover, with Max Life Partner Care Rider (UIN: 104A023V02)
                    </p>
                </div>
            </section>
            <InsuracePartners
                heading="Trusted Investment Partners"
                partners={partnersData}
            />

        </div>
    )
}

export default GuaranteedLifeTimeIncomePlan;