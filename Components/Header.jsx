   "use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert("Item added to cart! 🛒");
  };

  return (
    <>
      <header className="bg-[#9ECAD6] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F828C] mb-4 ">
          Welcome to Sheer Mithaas <br />
          A Taste of Pure Joy
        </h1>
        <p className="text-lg md:text-xl mb-6">
          At Sheer Mithaas, we believe that every bite
          <br />
          should bring a smile to your face and warmth to your heart.
          <br />
          From delicate cakes to rich, traditional desserts, each recipe
          <br />
          is crafted with love, care, and a sprinkle of sweetness.
          <br />
          Whether you're baking for celebration or comfort, you've come
          <br />
          to the right place.
        </p>

        <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300">
          Shop Now!
        </button>
      </header>

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-12">
          Shop by Category
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
 
     <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
       <Image
         src="/Strawberry Delight.png"
         alt="Strawberry Cake"
         width={128}
         height={128}
         className="w-38 h-38 mx-auto mb-4 rounded-full object-cover"
       />
       <h3 className="text-xl font-semibold mb-2">Strawberry Delight</h3>
       <p className="text-sm mb-2">Fluffy sponge layered with fresh strawberry cream & jam.</p>
       <p className="text-sm font-semibold mb-4">Rs. 1250 / 1kg</p>
       <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
         Add to Cart
       </button>
     </div>
           <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
             <Image
               src="/Gulab Jamun.png"
               alt="Gulab Jamun"
               width={128}
               height={128}
               className="w-38 h-38 mx-auto mb-4 rounded-full object-cover"
             />
             <h3 className="text-xl font-semibold mb-2">Gulab Jamun</h3>
             <p className="text-sm mb-2">Golden fried balls dipped in aromatic rose syrup.</p>
             <p className="text-sm font-semibold mb-4">Rs. 480 / 500g</p>
             <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:border-white hover:text-white transition duration-300">
               Add to Cart
             </button>
           </div>

          <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/Pineapple Cream Cake.png"
              alt="Pineapple Cake"
              width={128}
              height={128}
              className="w-38 h-38 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Pineapple Cream Cake</h3>
            <p className="text-sm mb-2">Soft vanilla sponge with juicy pineapple & whipped cream.</p>
            <p className="text-sm font-semibold mb-4">Rs. 1100 / 1kg</p>
            <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
              Add to Cart
            </button>
          </div>
    <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
      <img src="/Rasmalai.png" alt="Rasmalai" className="w-38 h-38 mx-auto mb-4 rounded-full object-cover" />
      <h3 className="text-xl font-semibold mb-2">Rasmalai</h3>
      <p className="text-sm mb-2">Soft cottage cheese discs soaked in saffron milk.</p>
      <p className="text-sm font-semibold mb-4">Rs. 750 / 500g</p>
      <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-white hover:bg-[#0F828C] hover:text-white transition duration-300">
        Add to Cart
      </button>
    </div>

        </div>
      </section>


<section className="bg-white pt-5 pb-16 px-6">
  <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-12">
    Explore More Delights
  </h2>

  <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">

    <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
      <Image
        src="/boxes.webp"
        alt="Festive Specials"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Festive Specials</h3>
      <p className="text-sm mb-4">
        Celebrate Eid, Diwali, and special moments with seasonal sweets & boxes.
      </p>
   <button
  onClick={handleAddToCart}
  className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300"
>
  Add to Cart
</button>

    </div>

    <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
      <Image
        src="/sugarfree.avif"
        alt="Sugar-Free Treats"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Sugar-Free Treats</h3>
      <p className="text-sm mb-4">
        Guilt-free sweets for diabetics and health-conscious dessert lovers.
      </p>
 
     <button
  onClick={handleAddToCart}
  className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300"
>
  Add to Cart
</button>
    </div>

    <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
      <Image
        src="/milk.webp"
        alt="Traditional Drinks"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Traditional Drinks</h3>
      <p className="text-sm mb-4">
        From thandai to badam doodh – sip on nostalgia with every glass.
      </p>
       <button
  onClick={handleAddToCart}
  className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300"
>
  Add to Cart
</button>

    </div>

    <div className="p-6 rounded-lg shadow-md bg-[#0F828C] text-white hover:scale-105 transition-transform duration-300">
      <Image
        src="/cupcake.jpg"
        alt="Kids Favorites"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Kids' Favorites</h3>
      <p className="text-sm mb-4">
        Colorful cupcakes, chocolate modaks & fun-shaped sweets little ones love!
      </p>
      <button
  onClick={handleAddToCart}
  className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300"
>
  Add to Cart
</button>

    </div>

  </div>
</section>


<section className="bg-[#9ECAD6] py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-4">
    Customer Favorites 💖
  </h2>

  <p className="text-center text-[#0F828C] mb-12 text-2xl md:text-base">
    What our happy customers say about their favorite treats!
  </p>

  <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">

    <div className="bg-white p-6 rounded-lg shadow-md border border-[#D9EAF0] hover:scale-105 transition-transform duration-300">
      <Image
        src="/Rasmalai.JPG"
        alt="Customer 1"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-[#0F828C] mb-1">Ayesha Khan</h3>
      <p className="text-sm text-gray-600 mb-2">Ordered: <strong>Rasmalai Magic</strong></p>
      <div className="flex justify-center text-yellow-400 text-lg mb-2">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />     
   </div>
      <p className="text-sm text-gray-700 italic">
        “The best rasmalai I’ve ever had! It was so soft and flavorful, just like homemade.”
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md border border-[#D9EAF0] hover:scale-105 transition-transform duration-300">
      <Image
        src="/Kaju.jpg"
        alt="Customer 2"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-[#0F828C] mb-1">Hasnain</h3>
      <p className="text-sm text-gray-600 mb-2">Ordered: <strong>Kaju Katli Bliss</strong></p>
      <div className="flex justify-center text-yellow-400 text-lg mb-2">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStarHalfAlt />
        </div>
      <p className="text-sm text-gray-700 italic">
        “Loved the kaju katli! Smooth texture and perfect sweetness. Will order again.”
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md border border-[#D9EAF0] hover:scale-105 transition-transform duration-300">
      <Image
        src="/MoongDal.jpg"
        alt="Customer 3"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-lg font-semibold text-[#0F828C] mb-1">Jannat Nadeem</h3>
      <p className="text-sm text-gray-600 mb-2">Ordered: <strong>Moong Dal Halwa</strong></p>
      <div className="flex justify-center text-yellow-400 text-lg mb-2">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
      </div>
      <p className="text-sm text-gray-700 italic">
        “Absolutely delicious! The moong dal halwa reminded me of my nani’s recipe.”
      </p>
    </div>

  </div>
</section>




<section className="bg-white py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-[#0F828C] mb-12">
    Limited Time Offers 🎁
  </h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="relative p-6 bg-white rounded-lg shadow-md border border-[#FFD6B3] hover:scale-105 transition-transform duration-300">
      <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        25% OFF
      </div>

      <Image
        src="/Rasgulla.jpg"
        alt="Rasgulla Box Offer"
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h3 className="text-2xl font-semibold text-[#0F828C] mb-2">Rasgulla Celebration Box</h3>
      <p className="text-sm text-gray-600 mb-4">
        Soft, spongy rasgullas packed with festive joy. Perfect for gifts and celebrations!
      </p>

      <div className="flex items-center justify-between">
        <span className="text-gray-500 line-through text-sm">Rs. 800</span>
        <span className="text-xl font-bold text-[#FF6B6B]">Rs. 600</span>
      </div>

          <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300">
          Grab Deal Now!
        </button>
    </div>

    <div className="relative p-6 bg-white rounded-lg shadow-md border border-[#FFD6B3] hover:scale-105 transition-transform duration-300">
      <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        25% OFF
      </div>

      <Image
        src="/barfi.webp"
        alt="Chocolate Barfi Offer"
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h3 className="text-2xl font-semibold text-[#0F828C] mb-2">Chocolate Barfi Delight</h3>
      <p className="text-sm text-gray-600 mb-4">
        A fusion favorite! Chocolate meets tradition. Limited-time pricing!
      </p>

      <div className="flex items-center justify-between">
        <span className="text-gray-500 line-through text-sm">Rs. 1,200</span>
        <span className="text-xl font-bold text-[#FF6B6B]">Rs. 900</span>
      </div>

       <button className="bg-white text-[#0F828C] px-6 py-2 rounded-full font-semibold border border-[#0F828C] hover:bg-[#0F828C] hover:border-3 hover:border-white hover:text-white transition duration-300">
          Grab Deal Now!
        </button>
    </div>

  </div>
</section>

<section className="bg-white">
<section className="bg-[#9ECAD6] py-9 px-6 text-center mb-20">
  <h2 className="text-3xl font-bold text-[#0F828C] mb-10">Why Choose Sheer Mithaas?</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <Image src="/Fresh Ingredients.png" alt="Fresh" width={160} height={160} className="mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-[#0F828C]">Fresh Ingredients</h3>
      <p className="text-sm text-gray-600">Daily-prepared sweets with pure & healthy ingredients.</p>
    </div>
    <div>
      <Image src="/BeautifulPackaging.jpg" alt="Packaging" width={160} height={160} className="mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-[#0F828C]">Beautiful Packaging</h3>
      <p className="text-sm text-gray-600">Perfect for gifts, parties & celebrations.</p>
    </div>
    <div>
      <Image src="/Nationwide Delivery.webp" alt="Delivery" width={160} height={160} className="mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-[#0F828C]">Nationwide Delivery</h3>
      <p className="text-sm text-gray-600">Delivering sweetness to all corners of Pakistan.</p>
    </div>
    <div>
      <Image src="/Trusted by 5000+ Customers.jpg"
    alt="Trust" width={160} height={160} className="mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-[#0F828C]">Trusted by 5000+ Customers</h3>
      <p className="text-sm text-gray-600">Real reviews. Real smiles. Real mithaas.</p>
    </div>
  </div>
</section>
</section>

      </>
  );
}

export default Header;