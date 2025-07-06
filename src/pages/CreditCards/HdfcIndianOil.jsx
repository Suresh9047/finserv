import Card9 from '../../assets/credit_cards/card9.webp';
import Card from '../../components/HdfcReuse';
import HdfcSection from '../../components/HdfcSectionReuse';

const HdfcIndianOil = () => {
    const features = [
        'Earn up to 50 Liters of Free fuel annually',
        '> Earn 5 % of your spends as Fuel Points at IndianOil outlets, Groceries and Bill Payments.',
        '> Earn 1 Fuel Point for every Rs. 150 spent on all other purchases',
        '> Enjoy 1 % Fuel Surcharge waiver',
    ];

    const eligibility = [
        'For Salaried Indian national:',
        'Age: Min 21 yrs & Max 60 yrs',
        'Income: Net Monthly Income> Rs 10,000',
        'For Self-Employed Indian national:',
        'Age: Min 21 yrs & Max 65 yrs',
        'Income: ITR > ₹6 Lakhs per annum',
    ];

    const fees = [
        'Joining/Renewal Membership Fee – ₹500/- + Applicable Taxes',
        'Spend ₹50,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off',
    ];

    return (
        <div className='mt-[160px]'>
            <Card
                title="Smarter Spending Starts Here, Get Your Card Today"
                cardName="IndianOil HDFC Credit Card"
                cardImage={Card9}
                content="Fuel Benefits. Ready For You...."
                features={features}
                eligibility={eligibility}
                fees={fees}
            />
            <HdfcSection />
        </div>
    )
}

export default HdfcIndianOil