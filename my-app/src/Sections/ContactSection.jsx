import { ScrollAnimation } from "../animations/ScrollAnimation";

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0d1425] py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation animationType="fade-in">
        <h2 className="text-5xl md:text-7xl text-white header font-extrabold text-center">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-400 extra text-center max-w-2xl mx-auto mb-12">
          Have questions or want to learn more about Warrior Gym? Fill out the
          form below and we’ll get back to you as soon as possible.
        </p>
        </ScrollAnimation>
        <ScrollAnimation animationType="fade-in">
        <form className="max-w-3xl mx-auto bg-[#111827] p-8 rounded-2xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2 header  text-lg font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Sujal Shah"
                required
                className="w-full p-3 rounded-lg extra bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300  header  text-lg mb-2  font-medium">Email</label>
              <input
                type="text"
                placeholder="sujal892@gmail.com"
                className="w-full p-3 rounded-lg extra bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 mb-2  header  text-lg font-medium">Subject</label>
            <input
              className="w-full p-3 rounded-lg extra bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
              type="text"
              placeholder="Membership Inquiry"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2  header  text-lg font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg extra bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit"  className="px-6 py-3 rounded-lg extra hover:cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition">Send Message</button>
          </div>
        </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
