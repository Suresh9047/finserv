import Card11 from '../../assets/credit_cards/card21.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcTataNeuPlus = () => {
    const features = [
        '2% back as NeuCoins on Tata Neu and partner Tata Brand Spends',
        'Additional 5% back as NeuCoins on Tata Neu Spends, post registering for Tata NeuPass',
        '1% back as NeuCoins on other spends',
        '1 NeuCoin = ₹1, redeemable on Tata Neu App',
        '4 Complimentary International Airport Lounge Access',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income > ₹ 25,000 per month',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > Rs 6 Lakhs per annum for self-employed customers',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes',
        'Spend ₹50,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off',
    ];

    return (
       <div className='mt-[160px]'>
         <Card
            title="Smarter Spending Starts Here, Get Your Card Today"
            cardName="Tata Neu Plus HDFC Bank Credit Card"
            cardImage={Card11}
            content="Extraordinary Rewards. Ready for You..."
            features={features}
            eligibility={eligibility}
            fees={fees}
        />

        <HdfcSection />
        
       </div>
    )
}

export default HdfcTataNeuPlus