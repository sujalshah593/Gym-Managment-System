export default function BookSection() {
  return (
    <section className="bg-gradient-to-b from-[#0d1425] to-black py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl header font-bold mb-2">
          Ready to <span className="text-orange-500">Transform </span>
        </h2>
        <p className="text-gray-300 mb-7 extra">
          Join the elite. Start your journey to peak performance today.
        </p>
        <button className="bg-orange-500 extra hover:bg-orange-600 hover:scale-105 hover:text-white hover:cursor-pointer text-black font-semibold px-6 py-2 rounded-md transition">
          Book Your Free Consultation
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-sm">
          <div>
            <h3 className="text-orange-500 text-xl font-semibold mb-2 header">Location</h3>
            <p className="text-gray-300 extra">123 Strength Street</p>
            <p className="text-gray-300 extra">Fitness District, FD 12345</p>
          </div>
          <div>
            <h3 className="text-orange-500 text-xl header font-semibold mb-2">Hours</h3>
            <p className="text-gray-300 extra">24/7 Access</p>
            <p className="text-gray-300 extra">Staffed 5AM - 11PM</p>
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold text-xl header mb-2">Conatct</h3>
            <p className="text-gray-300 extra">+91 1234567890</p>
<p className="text-gray-300 extra">info@warriorgym.com</p>

          </div>
        </div>
      </div>
    </section>
  );
}
