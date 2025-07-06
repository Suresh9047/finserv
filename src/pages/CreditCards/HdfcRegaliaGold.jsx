import Card4 from '../../assets/credit_cards/card4.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcRegaliaGold = () => {
    const features = [
        'Complimentary Club Vistara Silver Tier and MMT Black Elite membership as Welcome benefits',
        '₹ 1, 500 worth vouchers on quarterly spends of Rs. 1.5 lakh',
        '₹ 5,000 worth flight vouchers on annual spends of Rs. 5 lakh and Rs. 7.5 lakhs.',
        '5X Reward Points on spends at Marks & Spencer, Myntra, Nykaa & Reliance Digital!',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income> Rs 1,00,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > ₹12 Lakhs per annum',
    ];

    const fees = [
        'Details about fees and charges can be checked on the official website.'
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="Regalia Gold Credit Card"
                cardImage={Card4}
                content="Experience the Golden Side Of Life..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    );
};

export default HdfcRegaliaGold;
