import Card2 from '../../assets/credit_cards/card2.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcMarriott = () => {
    const features = [
        '1 Free Night Award at hotels participating in Marriott Bonvoy (up to a value of 15,000 Marriott Bonvoy Points)',
        'Marriott Bonvoy® Silver Elite Status & 10 Elite Night Credits',
        'Earn 8 Marriott Bonvoy Points per Rs. 150 spent at hotels participating in Marriott Bonvoy',
        'Earn 4 Marriott Bonvoy Points per Rs. 150 spent on travel, dining & entertainment',
        'Earn 2 Marriott Bonvoy Points per Rs. 150 spent on all other applicable purchases'
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs,',
        'Income: Net Monthly Income > ₹1 Lakhs per month',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs,',
        'Income: ITR > ₹15 Lakhs per annum'
    ];

    const fees = [
        'Details about fees and charges can be checked on the official website.'
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="Marriott Bonvoy HDFC Bank Credit Card"
                cardImage={Card2}
                content="Unmatched Luxuary, Ready For You..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    );
};

export default HdfcMarriott;
