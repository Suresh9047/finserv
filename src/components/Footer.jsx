import Money from "../assets/home-page/trail2.png"
import Facebook from "../assets/home-page/facebook.png"
import linkedin from "../assets/home-page/linkedin.png"
import whatsapp from "../assets/home-page/whatsapp.png"
import Instagram from "../assets/home-page/instagram.png"
import { Link } from 'react-router-dom';
import { useState } from "react";
import emailjs from 'emailjs-com';
import { style } from "framer-motion/client"

export default function Footer() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const socialMedia = [
    { name: 'instagram', src: Instagram, alt: 'Instagram', href: 'https://www.instagram.com/omfinservsocial/' },
    { name: 'facebook', src: Facebook, alt: 'Facebook', href: 'https://www.facebook.com/OmfinservOMSPS' },
    { name: 'linkedin', src: linkedin, alt: 'linkedin', href: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHEHhJZFXM3bAAAAZeIffqYaLG6kyVLMCVoVqaTpmfD16uMbWxIAbQ_ZOrgaJWRpouznBX11tCYpPUsPMttCCPDh8DcDBD3CjIr8lG3zPVYPmZLr1d3miI-bn4WIi8W2N8PIyk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F90552486' },
    { name: 'whatsapp', src: whatsapp, alt: 'YouTube', href: 'https://api.whatsapp.com/send?phone=918049754410' },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "info@omfinserv.com",
    subject: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // disable the button
  
    emailjs.send(
      'service_gzsp0hn',
      'template_ej5l875',
      formData,
      '4BBPBy-ScTAvxx_mr'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setIsSuccess(true);
  
      setFormData({
        from: "",
        to: "info@omfinserv.com",
        subject: "",
        message: "",
      });
  
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setIsSending(false); // re-enable for next time
      }, 2000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setIsSending(false); // allow resubmission on failure
    });
  };
  
  
  
  
  return (
    
    <footer className="bg-[#0F124B] text-white px-4 py-10 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Email Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Start using OM Finserv today.</h2>
          <div className="flex items-center bg-[#1C1C1C] rounded-md overflow-hidden w-full max-w-sm">
          <input
              type="email"
              placeholder="Click to Contact"
              readOnly
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-transparent text-white placeholder:text-white px-4 py-2 w-full focus:outline-none"
            />

            <button className="bg-transparent px-4">
              <span className="text-white text-xl font-bold">➤</span>
            </button>
          </div>
          <p className="mt-3 text-sm text-white/70">Make the right data-driven decisions that move your business.</p>
        </div>

        {/* Quick Links */}

        <div className="flex flex-col gap-2">
          {[
            { name: 'Loans', path: '/personal-loan' },
            { name: 'Investments', path: '/icici-direct-plans' },
            { name: 'Credit cards', path: '/hdfc-credit-card-home-page' },
            { name: 'Insurance', path: '/health-insurance' },
            { name: 'Credit Score', path: '/creditscore' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white/80 hover:text-white text-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {[
            { name: 'About', path: '/aboutus' },
            { name: 'Terms & Conditions', path: '#' },
            { name: 'Privacy Policy', path: '#' },
            { name: 'Cookie Policy', path: '#' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white/80 hover:text-white text-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {name}
            </Link>
          ))}
        </div>


        {/* Contact Section */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <img src={Money} alt="Logo" className="w-10 h-10 mr-2" />
            <h3 className="text-xl font-bold">Let's chat!</h3>
          </div>
<a href="mailto:info@omfinserv.com" className="text-white/80 mb-4 block">
  info@omfinserv.com
</a>
        
          <div className="flex justify-center lg:justify-start gap-3">
            {socialMedia.map(({ name, src, alt, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 md:w-7 md:h-7 hover:scale-110 transition-transform duration-200"
              >
                <img src={src} alt={alt} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-white/60">
      © 2025 OMSPS Global Tech Pvt Ltd
      </div>

      {/* Email Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition duration-300 ease-in-out">
    <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-md relative animate-fadeIn">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-red-500 transition duration-200"
      >
        &times;
      </button>

      <h2 className="text-2xl font-semibold mb-5 text-center">📧 Send a Message</h2>

      {/* ✅ Success Message */}
      {isSuccess && (
  <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-3 rounded-md mb-4 text-center font-medium shadow animate-fadeIn">
    ✅ Your message was sent successfully!
  </div>
)}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">From:</label>
          <input
            name="from"
            value={formData.from}
            onChange={handleChange}  // Make sure the change handler is active
            required
            className="w-full border px-3 py-2 rounded"
          />

        </div>
        <input
  type="hidden"
  name="to"
  value={formData.to}
/>


        <div>
          <label className="block text-sm font-medium">Subject:</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message:</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded resize-none"
          />
        </div>
        <button
  type="submit"
  disabled={isSending}
  className={`w-full py-2 rounded transition ${
    isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0F124B] hover:bg-[#1c1f5c] text-white'
  }`}
>
  {isSending ? 'Sending...' : 'Send Message'}
</button>

      </form>
    </div>
  </div>
)}


    </footer>
  );
}


