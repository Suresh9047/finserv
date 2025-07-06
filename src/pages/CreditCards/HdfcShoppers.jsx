import Card13 from '../../assets/credit_cards/card13.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcShoppers = () => {
    const features = [
        'Life Time free card',
        'Welcome Voucher worth ₹500',
        'Earn 6 Shoppers Shop Points on Shoppers Stop private label brands',
        'Earn 2 Shoppers Shop Points on all other Shoppers Stop brands & other category spends',
        'Earn additional 2,000 Shoppers Shop Points annually',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income> ₹20,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > Rs 6 Lakhs per annum',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes',
        'Spend ₹50,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off',
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="Shoppers Stop HDFC Bank Credit Card"
                cardImage={Card13}
                content="Rewarding Style. Ready for You..."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />

            <HdfcSection />
        </div>
    )
}

export default HdfcShoppers