import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      
      {/* <nav className="fixed z-50 flex justify-between items-center px-5 py-4"> */}
      <nav className="flex justify-between items-center px-4 py-2">
        <Link to="/" className="navbar-brand" onClick={closeDropdowns}>
          <img src={logo} alt="Logo" className="h-[80px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {renderMenuItems("desktop", activeDropdown, toggleDropdown, closeDropdowns)}
        </div>

        <button
  className="hidden md:block px-5 py-2 rounded-full invisible"
  aria-hidden="true"
>
  Placeholder
</button>


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-500 hover:text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-[#181d47] text-white px-5 py-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'}`}>
          {renderMenuItems("mobile", activeDropdown, toggleDropdown, closeDropdowns)}
          <button
              className="hidden md:block px-5 py-2 rounded-full invisible"
              aria-hidden="true"
            >
              Placeholder
            </button>

        </div>
      )}
    </header>
  );
};

const renderMenuItems = (
  type,
  activeDropdown,
  toggleDropdown,
  closeDropdowns
) => {
  const isMobile = type === "mobile";

  const menuData = [
    { label: "Home", href: "/" },
    {
      label: "Loans",
      items: [
        { label: "Personal Loan", href: "/personal-loan" },
        { label: "Home Loan", href: "/home-loan" },
        { label: "Business Loan", href: "/business-loan" },
        { label: "Doctor Loan", href: "/doctor-loan" },
        { label: "LRD Loan", href: "/lrd-loan" },
        { label: "LAP Loan", href: "/lap-loan" },
      ],
    },
    {
      label: "Credit Cards",
      items: [{ label: "HDFC Bank Credit Card", href: "/hdfc-credit-card-home-page" }],
    },
    {
      label: "Insurance",
      items: [
        { label: "Health Insurance", href: "/health-insurance" },
        { label: "Home Insurance", href: "/home-insurance" },
        { label: "Car Insurance", href: "/car-insurance" },
        { label: "SME Insurance", href: "/sme-insurance" },
      ],
    },
    {
      label: "Investments",
      items: [
        { label: "ICICI Pru Plans", href: "/icici-direct-plans" },
        { label: "HDFC Life", href: "/hdfc-life" },
        { label: "Max Life", href: "/max-life" },
      ],
    },
    {
      label: "EMI Calculators",
      items: [
        { label: "SIP Calculator", href: "/sip" },
        { label: "Loan EMI Calculator", href: "/loan-emi" },
        { label: "Income Tax Calculator", href: "/income-tax" },
        { label: "FD Calculator", href: "/fixed-deposit" },
        { label: "PPF Calculator", href: "/public-provident-fund" },
        { label: "Mutual Fund Calculator", href: "/mutual-fund" },
        { label: "RD Calculator", href: "/recurring-deposit" },
        { label: "GST Calculator", href: "/gst" },
        { label: "Lumpsum Calculator", href: "/Lumpsum" },
        { label: "Salary Calculator", href: "/salary" },
        { label: "HRA Calculator", href: "/hra" },
        { label: "TDS Calculator", href: "/tds" },
        { label: "Sukanya Samridhi Yojana Calculator", href: "/sukanya" },
        { label: "Amortization Calculator", href: "/amortization" },
        { label: "Flat vs Reducing Rate", href: "/flat-reducing-rate" },
        { label: "Foreclosure Calculator", href: "/foreclosure" },
        { label: "Savings Account Interest", href: "/saving-account-interest" },
        { label: "CAGR Calculator", href: "/cagr" },
        { label: "XIRR Calculator", href: "/xirr" },
        { label: "APR Calculator", href: "/apr" },
      ],
    },
    { label: "Credit Score", href: "/creditscore" },
    { label: "About Us", href: "/aboutus" },
  ];

  return menuData.map((menu) => {
    const isOpen = activeDropdown === menu.label;
    const commonLinkClass = isMobile
      ? "block py-2 px-3 text-base text-white hover:text-[#FF8800] relative group"
      : "relative px-3 py-2 font-medium text-black hover:text-[#FF8800] group";

    if (!menu.items) {
      return (
        <Link
          key={menu.label}
          to={menu.href}
          className={commonLinkClass}
          onClick={closeDropdowns}
        >
          {menu.label}
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#FF8800] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    }

    return (
      <div key={menu.label} className={`relative ${isMobile ? "" : "group"}`}>
        <button
          className={`${commonLinkClass} flex items-center w-full`}
          onClick={() => {
            toggleDropdown(menu.label);
          }}
        >
          {menu.label}
          <span className="ml-1">
            {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </span>
          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#FF8800] transition-all duration-300 group-hover:w-full"></span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            className={`${
              isMobile
                ? "ml-4 mt-1 space-y-1 max-h-[300px] overflow-y-auto"
                : "absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md z-50 w-56 max-h-[400px] overflow-y-auto"
            }`}
          >
            {menu.items.map((sub) => (
              <li key={sub.label}>
                <Link
                  to={sub.href}
                  className={`block px-4 py-2 ${isMobile ? "text-white" : "hover:bg-gray-100"}`}
                  onClick={closeDropdowns}
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });
};

export default Header;
