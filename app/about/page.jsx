"use client";
import React from "react";

function About() {
  return (
    <>
      <header className="bg-[#9ECAD6] text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F828C] mb-4">
          About Sheer Mithaas
        </h1>
        <p className="text-lg md:text-xl text-[#0F828C] max-w-3xl mx-auto">
          Blending tradition with taste — your destination for handcrafted sweets made with love.
        </p>
      </header>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F828C] mb-6 text-center">
            Our Story
          </h2>
          <p className="text-[#0F828C] text-sm md:text-base leading-relaxed">
            Sheer Mithaas began with one simple idea — to bring the magic of traditional mithai back to life.
            <br /><br />
            Inspired by age-old recipes and fueled by a passion for sweetness, we started our journey in Karachi,
            handcrafting sweets using pure ingredients, time-tested methods, and a sprinkle of love.
            <br /><br />
            Whether it's celebrating festivals, birthdays, weddings, or simply sharing joy with loved ones — we
            believe every moment deserves a sweet memory. Today, Sheer Mithaas is trusted by thousands across Pakistan,
            delivering not just desserts, but happiness in every bite.
          </p>
        </div>
      </section>

      <section className="bg-[#9ECAD6] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#0F828C] mb-6">Our Mission</h2>
    <p className="text-[#0F828C] text-base leading-relaxed">
      To revive the cultural heritage of mithai with a modern twist — ensuring every sweet we deliver brings joy, tradition, and quality into your home.
    </p>

    <h2 className="text-3xl font-bold text-[#0F828C] mt-12 mb-6">Our Vision</h2>
    <p className="text-[#0F828C] text-base leading-relaxed">
      To become Pakistan’s most loved mithai brand by delivering sweetness wrapped in love to every corner of the country and beyond.
    </p>
  </div>
</section>


<section className="bg-white py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-10">
      Meet the Makers 👩‍🍳
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
      
      <div className="bg-[#9ECAD6] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img
          src="/founder.jpg"
          alt="Zara Fatima"
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#0F828C]"
        />
        <h3 className="text-xl font-semibold text-[#0F828C]">Zara Fatima</h3>
        <p className="text-sm text-gray-600">Founder & Head Mithai Artist</p>
        <p className="mt-2 text-xs text-gray-500 italic">
          “Every sweet I make is a piece of my heart.”
        </p>
      </div>

      <div className="bg-[#9ECAD6] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img
          src="/cheif.jpg"
          alt="Chief Chef"
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#0F828C]"
        />
        <h3 className="text-xl font-semibold text-[#0F828C]">Ali Rehman</h3>
        <p className="text-sm text-gray-600">Chief Dessert Chef</p>
        <p className="mt-2 text-xs text-gray-500 italic">
          “Bringing passion and perfection to every mithai.”
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#9ECAD6] py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#0F828C] mb-10">What Our Customers Say 💬</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-[#0F828C] italic">“I ordered mithai for my sister's wedding and everyone LOVED it! Fresh, flavorful, and beautifully packed.”</p>
        <p className="mt-4 text-sm text-gray-500">— Ayesha Khan, Lahore</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-[#0F828C] italic">“Best online mithai experience ever! Quick delivery and premium taste. Will definitely order again.”</p>
        <p className="mt-4 text-sm text-gray-500">— Hamza Qureshi, Islamabad</p>
      </div>

    </div>
  </div>
</section>


<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#0F828C] mb-10">Behind The Scenes 📸</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <img src="/making.jpg" alt="Making Biscuits" className="rounded-lg shadow-md object-cover h-60 w-full" />
      <img src="/pack.webp" alt="Packaging" className="rounded-lg shadow-md object-cover h-60 w-full" />
      <img src="/cheifworking.jpg" alt="Team Working" className="rounded-lg shadow-md object-cover h-60 w-full" />
    </div>
  </div>
</section>


    </>
  );
}

export default About;
