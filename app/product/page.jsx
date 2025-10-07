"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

const allProducts = [
  {
    name: "Rasgulla",
    description: "Soft & juicy milk balls soaked in sweet syrup.",
    price: "Rs. 450 / 500g",
    image: "/Rasgulla.jpg",
    category: "mithai",
  },
  {
    name: "Gulab Jamun",
    description: "Golden fried balls dipped in aromatic rose syrup.",
    price: "Rs. 480 / 500g",
    image: "/Gulab Jamun.png",
    category: "mithai",
  },
  {
    name: "Barfi",
    description: "Classic milk barfi with cardamom flavor and silver foil.",
    price: "Rs. 420 / 500g",
    image: "/barfi.webp",
    category: "mithai",
  },
  {
    name: "Laddoo",
    description: "Gram flour laddoos with pure desi ghee and dry fruits.",
    price: "Rs. 800 / 500g",
    image: "/ladu.webp",
    category: "mithai",
  },
  {
    name: "Kaju Katli",
    description: "Smooth cashew diamond-shaped delight, rich in taste & tradition.",
    price: "Rs. 850 / 500g",
    image: "/kaju.jpg",
    category: "mithai",
  },
  {
    name: "Soan Papdi",
    description: "Flaky, melt-in-mouth sweet that’s loved across generations.",
    price: "Rs. 650 / 500g",
    image: "/Soan Papdi.webp",
    category: "mithai",
  },
  {
    name: "Kalakand",
    description: "Creamy and crumbly, made from slow-cooked milk — a milky masterpiece.",
    price: "Rs. 750 / 500g",
    image: "/Kalakand.webp",
    category: "mithai",
  },
  {
    name: "Milk Peda",
    description: "Soft, skin-toned and milky — a nostalgic delight in every bite.",
    price: "Rs. 700 / 500g",
    image: "/milk-peda.jpg",
    category: "mithai",
  },

  {
    name: "Chocolate Fudge Cake",
    description: "Rich, moist & layered with gooey chocolate frosting.",
    price: "Rs. 1200 / 1kg",
    image: "/Chocolate Fudge Cake.jpg",
    category: "cake",
  },
  {
    name: "Red Velvet Cake",
    description: "Velvety texture with cream cheese frosting perfection.",
    price: "Rs. 1400 / 1kg",
    image: "/Red Velvet Cake.jpg",
    category: "cake",
  },
  {
    name: "Pineapple Cream Cake",
    description: "Soft vanilla sponge with juicy pineapple & whipped cream.",
    price: "Rs. 1100 / 1kg",
    image: "/Pineapple Cream Cake.png",
    category: "cake",
  },
  {
    name: "Three Milk Cake",
    description: "Sponge soaked in 3 types of milk, topped with whipped cream.",
    price: "Rs. 1300 / 1kg",
    image: "/Three Milk Cake.jpg",
    category: "cake",
  },
  {
    name: "Strawberry Delight",
    description: "Fluffy sponge layered with fresh strawberry cream & jam.",
    price: "Rs. 1250 / 1kg",
    image: "/Strawberry Delight.png",
    category: "cake",
  },
  {
    name: "Vanilla Classic",
    description: "Timeless vanilla sponge with silky whipped cream topping.",
    price: "Rs. 1050 / 1kg",
    image: "/Vanilla Classic.jpg",
    category: "cake",
  },
  {
    name: "Caramel Crunch",
    description: "Sticky caramel layers with crunchy toffee bits — a rich treat!",
    price: "Rs. 1350 / 1kg",
    image: "/Caramel Crunch.png",
    category: "cake",
  },
  {
    name: "Fruit Mix Cake",
    description: "Fresh seasonal fruits layered over fluffy whipped cream base.",
    price: "Rs. 1450 / 1kg",
    image: "/Fruit Mix Cake.png",
    category: "cake",
  },
{
  name: "Naan Khatai",
  description: "Crispy, buttery delight with traditional desi flavor.",
  price: "Rs. 300 / 250g",
  image: "/nankhatai.jpg",
  category: "biscuit",
},
{
  name: "Chocolate Chip",
  description: "Crunchy edges with gooey chocolate chips inside.",
  price: "Rs. 350 / 250g",
  image: "/ChocolateChip.jpg",
  category: "biscuit",
},
{
  name: "Zeera Biscuits",
  description: "Savory cumin flavor with a crunchy bite.",
  price: "Rs. 280 / 250g",
  image: "/Zeera Biscuits.webp",
  category: "biscuit",
},
{
  name: "Butter Cookies",
  description: "Melt-in-mouth buttery cookies, perfect with tea.",
  price: "Rs. 300 / 250g",
  image: "/ButterCookies.png",
  category: "biscuit",
},
{
  name: "Chocolate Fudge",
  description: "Rich, moist cupcake with fudgy center & frosting.",
  price: "Rs. 200 each",
  image: "/Chocolate Fudge.webp",
  category: "biscuit",
},
{
  name: "Vanilla Cupcake",
  description: "Classic vanilla sponge with creamy frosting.",
  price: "Rs. 180 each",
  image: "/Vanilla.png",
  category: "biscuit",
},
{
  name: "Red Velvet",
  description: "Velvety smooth cupcake with signature cream cheese top.",
  price: "Rs. 220 each",
  image: "/Red Velvet.webp",
  category: "biscuit",
},
{
  name: "Strawberry Swirl",
  description: "Fruity burst of strawberry in every swirl & bite.",
  price: "Rs. 200 each",
  image: "/Strawberry Swirl.jpg",
  category: "biscuit",
},
{
  name: "Rasmalai",
  description: "Soft cottage cheese discs soaked in saffron milk.",
  price: "Rs. 750 / 500g",
  image: "/Rasmalai.png",
  category: "royal",
},
{
  name: "Kheer",
  description: "Traditional rice pudding topped with pistachios & almonds.",
  price: "Rs. 600 / 500g",
  image: "/Kheer.jpg",
  category: "royal",
},
{
  name: "Shahi Tukray",
  description: "Fried bread soaked in sweet rabri and garnished with silver foil.",
  price: "Rs. 700 / 500g",
  image: "/ShahiTukray.webp",
  category: "royal",
},
{
  name: "Gajar ka Halwa",
  description: "Carrot halwa with khoya, dry fruits and desi ghee richness.",
  price: "Rs. 650 / 500g",
  image: "/Gajar ka Halwaa.jpg",
  category: "royal",
},
{
  name: "Kulfi",
  description: "Traditional frozen dairy dessert with a rich, creamy texture.",
  price: "Rs. 500 / 4 pieces",
  image: "/Kulfi.png",
  category: "royal",
},
{
  name: "Sooji Halwa",
  description: "Ghee-roasted semolina halwa topped with almonds.",
  price: "Rs. 400 / 500g",
  image: "/Sooji Halwa.jpg",
  category: "royal",
},
{
  name: "Zarda",
  description: "Saffron-infused sweet rice with raisins & dry fruits.",
  price: "Rs. 600 / 500g",
  image: "/Zarda.jpg",
  category: "royal",
},
{
  name: "Anday ka Halwa",
  description: "Rich and unique egg-based halwa for bold dessert lovers.",
  price: "Rs. 700 / 500g",
  image: "/Anday ka Halwa.jpg",
  category: "royal",
},

];
 function Product() {
  const [search, setSearch] = useState("");

  const filtered = allProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const mithaiItems = filtered.filter((item) => item.category === "mithai");
  const cakeItems = filtered.filter((item) => item.category === "cake");
  const biscuitItems = filtered.filter((item) => item.category === "biscuit");
  const royalItems = filtered.filter((item) => item.category === "royal");

const handleVoiceSearch = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Sorry, your browser doesn't support voice recognition.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const voiceText = event.results[0][0].transcript;
    setSearch(voiceText); 
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };
};

  return (
  <>
    <section className="bg-white py-16 px-6">
  <div className="flex justify-center mb-10">
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search (e.g. Gulab Jamun, Chocolate Cake...)"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 border border-[#0F828C] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F828C] pr-12"
    />
  <button
  onClick={handleVoiceSearch}
  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0F828C] text-2xl"
  aria-label="Search by voice"
>
  🎤
</button>

  </div>
</div>



<h2 className="text-3xl font-bold text-center text-[#0F828C] mb-6">Traditional Mithai</h2>
<div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center mb-16">
  {mithaiItems.length > 0 ? (
    mithaiItems.map((item, index) => (
      <Link key={index} href={`/product/${encodeURIComponent(item.name)}`}>
        <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Image
            src={item.image}
            alt={item.name}
            width={128}
            height={128}
            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-sm mb-2">{item.description}</p>
          <p className="text-sm font-semibold mb-4">{item.price}</p>
          <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
            Add to Cart
          </button>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-center col-span-full text-[#0F828C] font-medium">
      No royal desserts found for "{search}"
    </p>
  )}
</div>

   
      <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-6">Cake Selection</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
        {cakeItems.length > 0 ? (
          cakeItems.map((item, index) => (
                 <Link key={index} href={`/product/${encodeURIComponent(item.name)}`}>
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm mb-2">{item.description}</p>
              <p className="text-sm font-semibold mb-4">{item.price}</p>
              <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
                Add to Cart
              </button>
            </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-[#0F828C] font-medium">
            No cakes found for "{search}"
          </p>
        )}
      </div>

<h2 className="text-3xl font-bold text-center text-[#0F828C] mb-6 mt-10">Biscuits & Cupcakes 🍪🧁</h2>
<div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center mb-16">
  {biscuitItems.length > 0 ? (
    biscuitItems.map((item, index) => (
      <Link key={index} href={`/product/${encodeURIComponent(item.name)}`}>
        <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Image
            src={item.image}
            alt={item.name}
            width={128}
            height={128}
            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-sm mb-2">{item.description}</p>
          <p className="text-sm font-semibold mb-4">{item.price}</p>
          <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
            Add to Cart
          </button>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-center col-span-full text-[#0F828C] font-medium">
      No biscuits or cupcakes found for "{search}"
    </p>
  )}
</div>

<h2 className="text-3xl font-bold text-center text-[#0F828C] mb-10 mt-12">Royal Desserts 👑</h2>
<div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
  {royalItems.length > 0 ? (
    royalItems.map((item, index) => (
      <Link key={index} href={`/product/${encodeURIComponent(item.name)}`}>
        <div
          className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={112}
            height={112}
            className="w-28 h-28 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-sm mb-2">{item.description}</p>
          <p className="text-sm font-semibold mb-4">{item.price}</p>
          <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
            Add to Cart
          </button>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-center col-span-full text-[#0F828C] font-medium">
      No royal desserts found for "{search}"
    </p>
  )}
</div>

    </section>
</>

    )
}
export default Product;