import Card3 from '../../assets/credit_cards/card3.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcSwiggy = () => {
    const features = [
        '10 % Cashback on Swiggy application(Food ordering, Instamart, Dineout & Genie).',
        '5 % Cashback on online spends across top brands.For list of eligible MCC',
        '1 % Cashback on other categories.For list of exclusions & capping',
        'Complimentary Swiggy One Membership for 3 months on card activation as per latest RBI guidelines',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income > Rs 15,000',
        'For Self - Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > ₹6 Lakhs per annum',
    ];

    const fees = [
        'Details about fees and charges can be checked on the official website.'
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="Swiggy HDFC Bank Credit Card"
                cardImage={Card3}
                content="Delightful Rewards. Ready For You..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />

        </div>
    );
};

export default HdfcSwiggy;
