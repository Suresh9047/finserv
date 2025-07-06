import Card1 from '../assets/credit_cards/card1.webp';
import Card2 from '../assets/credit_cards/card2.webp';
import Card3 from '../assets/credit_cards/card3.webp';
import Card4 from '../assets/credit_cards/card4.webp';
import Card5 from '../assets/credit_cards/card5.webp';
import Card6 from '../assets/credit_cards/card6.png';
import Card7 from '../assets/credit_cards/card7.webp';
import Card8 from '../assets/credit_cards/card8.webp';
import Card9 from '../assets/credit_cards/card9.webp';
import Card10 from '../assets/credit_cards/card10.png';
import Card11 from '../assets/credit_cards/card11.png';
import Card12 from '../assets/credit_cards/card12.png';
import Card13 from '../assets/credit_cards/card13.webp';
import Card14 from '../assets/credit_cards/card14.webp';


const HdfcSectionReuse = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-8">
            <div className='mb-10'>
                <section style={{ backgroundColor: '#f8f9fa', marginTop: '0px' }}>
                    <h1 style={{ textAlign: 'center', color: '#0283BB', fontSize: '35px', marginBottom: '20px', fontWeight: 'bolder' }}>
                        Explore Our Credit Card Options
                    </h1>
                    <h2 className="mb-4 fw-bold text-center" style={{ color: '#FC8001' }}>
                        HDFC Credit Cards
                    </h2>
                </section>

                <div className="credit-card-container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card1} alt="Credit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Diners Club Black Metal Edition Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                ICICI Bank offers a selection of cards to perfectly complement your lifestyle needs.
                            </p>
                            <a
  href="../HdfcDinnerClub"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcDinnerClub"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>



                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card2} alt="Debit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Marriott Bonvoy HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Experience the convenience of cashless shopping with enhanced security and rewards.
                            </p>
                            <a
  href="../HdfcMarriott"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcMarriott"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>


                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card3} alt="Prepaid Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Swiggy HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Enjoy smart payment solutions for convenient and secure transactions anytime, anywhere.
                            </p>
                            <a
                                href="../HdfcSwiggy"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcSwiggy"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card4} alt="Travel Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xle">Regalia Gold Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Hassle-free international payments with a forex card pre-loaded in multiple currencies.
                            </p>

                                <a
                                href="../HdfcRegaliaGold"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcRegaliaGold"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card5} alt="Credit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">HDFC Bank UPI RuPay Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                ICICI Bank offers a selection of cards to perfectly complement your lifestyle needs.
                            </p>

                                <a
                                href="../HdfcRupay"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcRupay"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card6} alt="Debit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">MoneyBack+ Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Experience the convenience of cashless shopping with enhanced security and rewards.
                            </p>

                                <a
                                href="../HdfcMoneyBack"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcMoneyBack"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card7} alt="Prepaid Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Millennia Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Enjoy smart payment solutions for convenient and secure transactions anytime, anywhere.
                            </p>

                                <a
                                href="../HdfcMillennia"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcMillennia"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card8} alt="Travel Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Freedom Credit Card</h4>
                            <p className="text-xs sm:text-sm">
                                Hassle-free international payments with a forex card pre-loaded in multiple currencies.
                            </p>

                                <a
                                href="../HdfcFreedom"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcFreedom"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card9} alt="Credit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">IndianOil HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">ICICI Bank offers a selection of cards to perfectly complement your lifestyle needs.</p>


                                <a
                                href="../HdfcIndianOil"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcIndianOil"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card10} alt="Travel Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Tata Neu Infinity HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">Hassle-free international payments with a forex card pre-loaded in multiple currencies.</p>

                                <a
                                href="../HdfcTataNeu"
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation (optional, see note below)
    window.location.href = "../HdfcTataNeu"; // Internal navigation
  }}
  className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
>
  KNOW MORE
</a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card11} alt="Credit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Tata Neu Plus HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">ICICI Bank offers a selection of cards to perfectly complement your lifestyle needs.</p>

                                <a
                                href="../HdfcTataNeuPlus"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation (optional, see note below)
                                window.location.href = "../HdfcTataNeuPlus"; // Internal navigation
                            }}
                            className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
                            >
                            KNOW MORE
                            </a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card12} alt="Debit Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">IRCTC HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">Experience the convenience of cashless shopping with enhanced security and rewards.</p>

                                <a
                                href="../HdfcIRCTC"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation (optional, see note below)
                                window.location.href = "../HdfcIRCTC"; // Internal navigation
                            }}
                            className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
                            >
                            KNOW MORE
                            </a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card13} alt="Prepaid Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">Shoppers Stop HDFC Bank Credit Card</h4>
                            <p className="text-xs sm:text-sm">Enjoy smart payment solutions for convenient and secure transactions anytime, anywhere.</p>

                                <a
                                href="../HdfcShoppers"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation (optional, see note below)
                                window.location.href = "../HdfcShoppers"; // Internal navigation
                            }}
                            className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
                            >
                            KNOW MORE
                            </a>
                        </div>
                    </div>

                    <div className="credit-card flex flex-col sm:flex-row gap-4 p-4 border rounded-xl shadow">
                        <img src={Card14} alt="Travel Cards" className="w-40 sm:w-28 h-20 mx-auto mb-4 sm:mb-0" />
                        <div className="credit-card-content flex flex-col justify-between">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">HDFC Bank Times Card Credit</h4>
                            <p className="text-xs sm:text-sm">Hassle-free international payments with a forex card pre-loaded in multiple currencies.</p>
 
                                <a
                                href="../HdfcBankTimes"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default navigation (optional, see note below)
                                window.location.href = "../HdfcBankTimes"; // Internal navigation
                            }}
                            className="credit-card-btn bg-[#FC8001] p-1 text-white rounded-full text-center text-sm sm:text-base w-full sm:w-auto lg:w-1/3"
                            >
                            KNOW MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HdfcSectionReuse;
