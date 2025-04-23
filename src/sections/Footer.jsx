import React from "react";

const Footer = () => {
  return (
    <section className="w-full c-space pt-7 pb-3 border-t border-black-300 relative">
      <div className="flex justify-between items-center">
        <div className="text-white-500 gap-2">
          <p>Terms & Conditions | Privacy Policy</p>
        </div>

        

        <div className="text-white-500">
          <p>&copy; 2024 Joel Bawuah</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="social-icon flex items-center justify-center">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
