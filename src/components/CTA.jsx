const CTA = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-navy text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Elevate Your Business?
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Connect with MAK Consultant for trusted financial and business advisory services in Dubai.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="mailto:info@makconsultantuae.com"
            className="bg-white text-navy px-8 py-4 rounded-xl"
          >
            Send Email
          </a>

          <a
            href="https://wa.me/971000000000"
            className="border border-white px-8 py-4 rounded-xl"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;