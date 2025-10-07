"use client";
import React from "react";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  
  return (
    <>
      <header className="bg-[#9ECAD6] text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F828C] mb-4">
          Get in Touch with Sheer Mithaas
        </h1>
        <p className="text-lg md:text-xl text-[#0F828C] max-w-3xl mx-auto">
          Whether you're planning a celebration or just craving sweetness —
          we're always here to assist you!
        </p>
      </header>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F828C] mb-6">
            We'd love to hear from you!
          </h2>
          <p className="text-[#0F828C] mb-8">
            Have questions about your order? Want to collaborate? Just say
             hello — our team is happy to help.
          </p>

          <div className="bg-[#0F828C] p-8 rounded-lg shadow-md text-left space-y-4">
            <p className="text-[#F2FBFC]">
              📧 <strong>Email:</strong> <a href="mailto:hello@sheermithaas.pk" 
            >hello@sheermithaas.pk</a>
            </p>
            <p className="text-[#F2FBFC]">
              📞 <strong>Phone:</strong> <a href="tel:+923011234567" 
             >+92 301 1234567</a>
            </p>
            <p className="text-[#F2FBFC]">
              📍 <strong>Location:</strong> Karachi, Pakistan
            </p>
            <p className="text-[#F2FBFC]">
              ⏰ <strong>Business Hours:</strong> Mon-Sat | 9:00 AM - 10:00 PM
            </p>
          </div>
        </div>
      </section>

<section className="bg-white py-20 px-6 -mt-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#0F828C] mb-8 -mt-4">
      What People Are Saying 💖
    </h2>
    <div className="space-y-6 md:flex md:space-y-0 md:space-x-6">
      <div className="bg-[#9ECAD6] p-6 rounded-lg shadow-md flex-1">
        <p className="text-[#0F828C] italic">
  “Tasted just like the halwa my grandma used to make — felt like home in every bite!”
</p>
<p className="font-bold text-[#0F828C] mt-4">Wajeeha , Karachi</p>

      </div>
      <div className="bg-[#9ECAD6] p-6 rounded-lg shadow-md flex-1">
      <p className="text-[#0F828C] italic">
  “Exceptional presentation and even more impressive flavor — truly a premium experience.”
</p>

  <p className="font-bold text-[#0F828C] mt-4">Ataullah , Islamabad</p>
      </div>
      <div className="bg-[#9ECAD6] p-6 rounded-lg shadow-md flex-1">
   <p className="text-[#0F828C] italic">
  “Prompt delivery and exceptional quality — Sheer Mithaas has become my top choice for sweets.”
</p>

 <p className="font-bold text-[#0F828C] mt-4">Rabia Rizvi , Karachi</p>
      </div>
    </div>
  </div>
</section>


<section className="bg-white py-10 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-10 pt-5">
      Got Questions? 🤔
    </h2>

    <div className="space-y-6">
      <div className="bg-[#0F828C] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[white]">How long does delivery take?</h3>
        <p className="text-sm text-[white] mt-2">
          We typically deliver within 1-3 working days across Pakistan.
        </p>
      </div>

      <div className="bg-[#0F828C] p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-[white]">Do you offer custom gift boxes?</h3>
        <p className="text-sm text-[white] mt-2">
          Yes! We offer personalized packaging and handwritten notes for special occasions.
        </p>
      </div>

      <div className="bg-[#0F828C] p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-[white]">Is your mithai freshly made?</h3>
        <p className="text-sm text-[white] mt-2">
          Absolutely! All sweets are handmade fresh using premium ingredients.
        </p>
      </div>
    </div>
  </div>
</section>



<section className="bg-[#9ECAD6] py-20 px-6">
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-10">
    <h2 className="text-3xl font-bold text-[#0F828C] mb-4 text-center">
      Drop Us a Message 📩
    </h2>
    <p className="text-[#0F828C] mb-8 text-center">
      Have something sweet to say? Fill out the form and we’ll get back to you shortly.
    </p>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[#0F828C] font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-[#9ECAD6] rounded-md bg-[#F9FDFD] focus:outline-none focus:ring-2 focus:ring-[#0F828C]"
          required
        />
      </div>

      <div>
        <label className="block text-[#0F828C] font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-[#9ECAD6] rounded-md bg-[#F9FDFD] focus:outline-none focus:ring-2 focus:ring-[#0F828C]"
          required
        />
      </div>

      <div>
        <label className="block text-[#0F828C] font-semibold mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className="w-full px-4 py-2 border border-[#9ECAD6] rounded-md bg-[#F9FDFD] focus:outline-none focus:ring-2 focus:ring-[#0F828C]"
          required
        ></textarea>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-white text-[#0F828C] px-8 py-3 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-white hover:text-white transition duration-300 w-full sm:w-1/2 md:w-1/3"
        >
          Send!
        </button>
      </div>
    </form>
  </div>
</section>



    </>
  );
}

export default Contact;
