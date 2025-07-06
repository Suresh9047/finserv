import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CarLoanCalculator from "./pages/Calculators/CarLoanCalulator";
import SipCalculator from "./pages/Calculators/SipCalculator"
import IncomeTaxCalculator from "./pages/Calculators/IncomeTaxCalculator";
import FixedDepositCalculator from "./pages/Calculators/FixedDepositCalculator";
import PPFCalculator from "./pages/Calculators/PPFCalculator";
import MutualFundCalculator from "./pages/Calculators/MutualFundCalculator";
import RDCalculator from "./pages/Calculators/RDCalculator";
import GSTCalculator from "./pages/Calculators/GSTCalculator";
import LumpsumCalculator from "./pages/Calculators/LumpsumCalculator";
import SalaryCalculator from "./pages/Calculators/SalaryCalculator";
import HRACalculator from "./pages/Calculators/HRACalculator";
import TDSCalculator from "./pages/Calculators/TDSCalculator";
import SukanyaCalculator from "./pages/Calculators/SukanyaCalculator";
import AmortizationCalculator from "./pages/Calculators/AmortizationCalculator";
import FlatCalculator from "./pages/Calculators/FlatCalculator";
import ForeclosureCalculator from "./pages/Calculators/ForeclosureCalculator";
import SavingAcctCalculator from "./pages/Calculators/SavingAcctCalculator";
import CAGRCalculator from "./pages/Calculators/CAGRCalculator";
import XIRRCalculator from "./pages/Calculators/XIRRCalculator";
import APRCalculator from "./pages/Calculators/APRCalculator";
import HdfcCreditcardHomepage from "./pages/CreditCards/HdfcCreditcardHomepage";
import HdfcDinnerClub from "./pages/CreditCards/HdfcDinnerClub";
import HdfcMarriott from "./pages/CreditCards/HdfcMarriott";
import HdfcSwiggy from "./pages/CreditCards/HdfcSwiggy";
import HdfcRegaliaGold from "./pages/CreditCards/HdfcRegaliaGold";
import HdfcRupay from "./pages/CreditCards/HdfcRupay";
import HdfcMoneyBack from "./pages/CreditCards/HdfcMoneyBack";
import HdfcMillennia from "./pages/CreditCards/HdfcMillennia";
import HdfcFreedom from "./pages/CreditCards/HdfcFreedom";
import HdfcIndianOil from "./pages/CreditCards/HdfcIndianOil";
import HdfcTataNeu from "./pages/CreditCards/HdfcTataNeu";
import HdfcTataNeuPlus from "./pages/CreditCards/HdfcTataNeuPlus";
import HdfcIRCTC from "./pages/CreditCards/HdfcIRCTC";
import HdfcShoppers from "./pages/CreditCards/HdfcShoppers";
import HdfcBankTimes from "./pages/CreditCards/HdfcBankTimes";
import HealthInsurance from "./pages/Insurance/HealthInsurance";
import HomeInsurance from "./pages/Insurance/HomeInsurance";
import CarInsurance from "./pages/Insurance/CarInsurance";
import SMEInsurance from "./pages/Insurance/SMEInsurance";
import PersonalLoan from "./pages/Loans/PersonalLoan";
import HomeLoan from "./pages/Loans/HomeLoan";
import BusinessLoan from "./pages/Loans/BusinessLoan";
import DoctorLoan from "./pages/Loans/DoctorLoan";
import LRDLoan from "./pages/Loans/LRDLoan";
import LAPLoan from "./pages/Loans/LAPLoan";
import ICICIDirectPlans from "./pages/Investments/ICICIDirectPlans";
import HDFCLife from "./pages/Investments/HDFCLife";
import MAXLife from "./pages/Investments/MAXLife";
import SmartSecurePlusPlan from "./pages/Investments/MAX-cards/SmartSecurePlusPlan";
import { SmartWealthPlanSolution } from "./pages/Investments/MAX-cards/SmartWealthPlanSolution";
import SmartWealthAdvantage from "./pages/Investments/MAX-cards/SmartWealthAdvantage";
import SmartWealthIncomePlan from "./pages/Investments/MAX-cards/SmartWealthIncomePlan";
import FutureGeniusEducationPlan from "./pages/Investments/MAX-cards/FutureGeniusEducationPlan";
import FlexiWealthAdvantagePlan from "./pages/Investments/MAX-cards/FlexiWealthAdvantagePlan";
import FastTrackSuper from "./pages/Investments/MAX-cards/FastTrackSuper";
import PlatinumWealthPlanPlus from "./pages/Investments/MAX-cards/PlatinumWealthPlanPlus";
import GuaranteedLifeTimeIncomePlan from "./pages/Investments/MAX-cards/GuaranteedLifeTimeIncomePlan";
import HdfcProtectLife from "./pages/Investments/HDFC-Cards/HdfcProtectLife";
import HdfcLifeProtectSuper from "./pages/Investments/HDFC-Cards/HdfcLifeProtectSuper";
import HdfclifeSancharyPlus from "./pages/Investments/HDFC-Cards/HdfclifeSancharyPlus";
import SancharyFixedMaturityPlan from "./pages/Investments/HDFC-Cards/SancharyFixedMaturityPlan";
import GuaranteedIncomeInsurancePlan from "./pages/Investments/HDFC-Cards/GuaranteedIncomeInsurancePlan";
import SancharyParAdvantage from "./pages/Investments/HDFC-Cards/SancharyParAdvantage";
import SmartPtotectPlan from "./pages/Investments/HDFC-Cards/SmartPtotectPlan";
import LifeInvestULIP from "./pages/Investments/HDFC-Cards/LifeInvestULIP";
import LifeWealth from "./pages/Investments/HDFC-Cards/LifeWealth";
import SLProGrowthFlexi from "./pages/Investments/HDFC-Cards/SLProGrowthFlexi";
import SmartWomenPlan from "./pages/Investments/HDFC-Cards/SmartWomenPlan";
import SystematicRetirementPlan from "./pages/Investments/HDFC-Cards/SystematicRetirementPlan";
import PensionGuaranteedPlan from "./pages/Investments/HDFC-Cards/PensionGuaranteedPlan";
import PruiProtectSmart from "./pages/Investments/ICICI-Cards/PruiProtectSmart";
import PruiProtectReturnofPremium from "./pages/Investments/ICICI-Cards/PruiProtectReturnofPremium";
import PruProtectNGain from "./pages/Investments/ICICI-Cards/PruProtectNGain";
import PruGuaranteedIncomeForTomorrow from "./pages/Investments/ICICI-Cards/PruGuaranteedIncomeForTomorrow";
import PruGiftPro from "./pages/Investments/ICICI-Cards/PruGiftPro";
import PruSignature from "./pages/Investments/ICICI-Cards/PruSignature";
import PruGold from "./pages/Investments/ICICI-Cards/PruGold";
import PruLifeTimeClassic from "./pages/Investments/ICICI-Cards/PruLifeTimeClassic";
import PruSmartLife from "./pages/Investments/ICICI-Cards/PruSmartLife";
import PruGuaranteedPensionPlan from "./pages/Investments/ICICI-Cards/PruGuaranteedPensionPlan";
import PruGuaranteedPensionPlanFlexi from "./pages/Investments/ICICI-Cards/PruGuaranteedPensionPlanFlexi";
import CreditScore from "./pages/CreditScore/CreditScore";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
// import Dashboard  from "./pages/dasbboard";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sip" element={<SipCalculator />} />
        <Route path="/loan-emi" element={<CarLoanCalculator />} />
        <Route path="/income-tax" element={<IncomeTaxCalculator />} />
        <Route path="/fixed-deposit" element={<FixedDepositCalculator />} />
        <Route path="/public-provident-fund" element={<PPFCalculator />} />
        <Route path="/mutual-fund" element={<MutualFundCalculator />} />
        <Route path="/recurring-deposit" element={<RDCalculator />} />
        <Route path="/gst" element={<GSTCalculator />} />
        <Route path="/lumpsum" element={<LumpsumCalculator />} />
        <Route path="/salary" element={<SalaryCalculator />} />
        <Route path="/hra" element={<HRACalculator />} />
        <Route path="/tds" element={<TDSCalculator />} />
        <Route path="/sukanya" element={<SukanyaCalculator />} />
        <Route path="/amortization" element={<AmortizationCalculator />} />
        <Route path="/flat-reducing-rate" element={<FlatCalculator />} />
        <Route path="/foreclosure" element={<ForeclosureCalculator />} />
        <Route path="/saving-account-interest" element={<SavingAcctCalculator />} />
        <Route path="/cagr" element={<CAGRCalculator />} />
        <Route path="/xirr" element={<XIRRCalculator />} />
        <Route path="/apr" element={<APRCalculator />} />

        <Route path="/hdfc-credit-card-home-page" element={<HdfcCreditcardHomepage />} />
        <Route path="/hdfcdinnerclub" element={<HdfcDinnerClub />} />
        <Route path="/hdfcmarriott" element={<HdfcMarriott />} />
        <Route path="/hdfcswiggy" element={<HdfcSwiggy />} />
        <Route path="/hdfcregaliagold" element={<HdfcRegaliaGold />} />
        <Route path="/hdfcrupay" element={<HdfcRupay />} />
        <Route path="/hdfcmoneyback" element={<HdfcMoneyBack />} />
        <Route path="/hdfcmillennia" element={<HdfcMillennia />} />
        <Route path="/hdfcfreedom" element={<HdfcFreedom />} />
        <Route path="/hdfcindianoil" element={<HdfcIndianOil />} />
        <Route path="/hdfctataneu" element={<HdfcTataNeu />} />
        <Route path="/hdfctataneuplus" element={<HdfcTataNeuPlus />} />
        <Route path="/hdfcirctc" element={<HdfcIRCTC />} />
        <Route path="/hdfcshoppers" element={<HdfcShoppers />} />
        <Route path="/hdfcbanktimes" element={<HdfcBankTimes />} />

        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/home-insurance" element={<HomeInsurance />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/sme-insurance" element={<SMEInsurance />} />

        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/home-loan" element={<HomeLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/doctor-loan" element={<DoctorLoan />} />
        <Route path="/lrd-loan" element={<LRDLoan />} />
        <Route path="/lap-loan" element={<LAPLoan />} />

        <Route path="/icici-direct-plans" element={<ICICIDirectPlans />} />
        <Route path="/hdfc-life" element={<HDFCLife />} />
        <Route path="/max-life" element={<MAXLife />} />

        <Route path="/MAX-SmartSecurePlusPlan" element={<SmartSecurePlusPlan />} />
        <Route path="/MAX-SmartWealthPlanSolution" element={<SmartWealthPlanSolution />} />
        <Route path="/MAX-SmartWealthAdvantage" element={<SmartWealthAdvantage />} />
        <Route path="/MAX-SmartWealthIncomePlan" element={<SmartWealthIncomePlan />} />
        <Route path="/MAX-FutureGeniusEducationPlan" element={<FutureGeniusEducationPlan />} />
        <Route path="/MAX-FlexiWealthAdvantagePlan" element={<FlexiWealthAdvantagePlan />} />
        <Route path="/MAX-FastTrackSuper" element={<FastTrackSuper />} />
        <Route path="/MAX-PlatinumWealthPlanPlus" element={<PlatinumWealthPlanPlus />} />
        <Route path="/MAX-GuaranteedLifeTimeIncomePlan" element={<GuaranteedLifeTimeIncomePlan />} />

        <Route path="/HDFC-HdfcProtectLife" element={<HdfcProtectLife />} />
        <Route path="/HDFC-HdfcLifeProtectSuper" element={<HdfcLifeProtectSuper />} />
        <Route path="/HDFC-HdfclifeSancharyPlus" element={<HdfclifeSancharyPlus />} />
        <Route path="/HDFC-SancharyFixedMaturityPlan" element={<SancharyFixedMaturityPlan />} />
        <Route path="/HDFC-GuaranteedIncomeInsurancePlan" element={<GuaranteedIncomeInsurancePlan />} />
        <Route path="/HDFC-SancharyParAdvantage" element={<SancharyParAdvantage />} />
        <Route path="/HDFC-SmartPtotectPlan" element={<SmartPtotectPlan />} />
        <Route path="/HDFC-LifeInvestULIP" element={<LifeInvestULIP />} />
        <Route path="/HDFC-LifeWealth" element={<LifeWealth />} />
        <Route path="/HDFC-SLProGrowthFlexi" element={<SLProGrowthFlexi />} />
        <Route path="/HDFC-SmartWomenPlan" element={<SmartWomenPlan />} />
        <Route path="/HDFC-SystematicRetirementPlan" element={<SystematicRetirementPlan />} />
        <Route path="/HDFC-PensionGuaranteedPlan" element={<PensionGuaranteedPlan />} />

        <Route path="/ICICI-PruiProtectSmart" element={<PruiProtectSmart />} />
        <Route path="/ICICI-PruiProtectReturnofPremium" element={<PruiProtectReturnofPremium />} />
        <Route path="/ICICI-PruProtectNGain" element={<PruProtectNGain />} />
        <Route path="/ICICI-PruGuaranteedIncomeForTomorrow" element={<PruGuaranteedIncomeForTomorrow />} />
        <Route path="/ICICI-PruGiftPro" element={<PruGiftPro />} />
        <Route path="/ICICI-PruSignature" element={<PruSignature />} />
        <Route path="/ICICI-PruGold" element={<PruGold />} />
        <Route path="/ICICI-PruLifeTimeClassic" element={<PruLifeTimeClassic />} />
        <Route path="/ICICI-PruSmartLife" element={<PruSmartLife />} />
        <Route path="/ICICI-PruGuaranteedPensionPlan" element={<PruGuaranteedPensionPlan />} />
        <Route path="/ICICI-PruGuaranteedPensionPlanFlexi" element={<PruGuaranteedPensionPlanFlexi />} />
       
        <Route path="/creditscore" element={<CreditScore />} />
        {/* <Route path="/dasbboard" element={<Dashboards />} /> */}
        <Route path="/aboutus" element={<AboutUs />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
