import creditcards1 from '../../assets/sample/creditcards1.png';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcCreditcardHomepage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-blue-100 to-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 mt-[30px] items-center">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Smarter Spending Starts Here, Get Your Card Today</h1>
                        <button
  className="bg-[#FF8800] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
  onClick={() => {
    window.open(
      'https://applyonline.hdfcbank.com/cards/credit-cards.html?utm_content=DGPI&Channel=DSA&DSACode=XSPG&SMCode=P23939&LGCode=DGPI&LCCode=XSPG&LC2=XSPG#nbb',
      '_blank'
    );
  }}
>
  Get Your Card
</button>

                    </div>
                    <div className="flex justify-center">
                        <img
                            src={creditcards1}
                            alt="Loan illustration"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#fbfbfb] py-3 px-4 sm:pl-8 sm:py-4">
                <nav className="text-gray-600 text-sm flex items-center space-x-2 justify-center sm:justify-start">
                    <a href="/" className="hover:underline text-[#0282ba]">Home</a>
                    <span className="text-gray-400">›</span>
                    <span>HDFC Bank Credit Card</span>
                </nav>
            </div>

            <HdfcSection />
        </div>
    );
};

export default HdfcCreditcardHomepage;
