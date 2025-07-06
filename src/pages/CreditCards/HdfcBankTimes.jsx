import Card14 from '../../assets/credit_cards/card14.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcBankTimes = () => {
    const features = [
        'Complimentary Times Prime Annual Membership worth Rs. 999',
        'Up to 20% discount offers on travel and shopping on www.hdfcbank.timescard.com',
        '25 % discount on Movies on Book My show',
        '2 Reward points for every Rs.150 spent on the card',
        '5 Reward points per Rs 150 on weekday Dining',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income> ₹25,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: Annual Income should be Rs 6,00,000 & above',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes (Festive Season Offer!!!)',
        'Spend ₹25,000 or more in an annual year, before your Credit Card renewal date and get your renewal fee waived off from 2nd year onwards'
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="HDFC Bank Times Credit Card"
                cardImage={Card14}
                content="Great Times. Ready For You..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    )
}

export default HdfcBankTimes;