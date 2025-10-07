"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from 'react-hot-toast';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

import { ArrowLeft } from "lucide-react"; // Lucide icon (you can also use Heroicons or any SVG)

// 🍬 Mithai Items
const mithaiItems = [
  {
    name: "Rasgulla",
    description: "Soft & juicy milk balls soaked in sweet syrup.",
    price: "Rs. 450 / 500g",
    image: "/Rasgulla.jpg",
    category: "mithai",
      inStock: true, 

  },
  {
    name: "Gulab Jamun",
    description: "Golden fried balls dipped in aromatic rose syrup.",
    price: "Rs. 480 / 500g",
    image: "/Gulab Jamun.png",
    category: "mithai",
     inStock: true, 

  },
  {
    name: "Barfi",
    description: "Classic milk barfi with cardamom flavor and silver foil.",
    price: "Rs. 420 / 500g",
    image: "/barfi.webp",
    category: "mithai",
    inStock: true, 

  },
  {
    name: "Laddoo",
    description: "Gram flour laddoos with pure desi ghee and dry fruits.",
    price: "Rs. 800 / 500g",
    image: "/ladu.webp",
    category: "mithai",
     inStock: true, 

  },
  {
    name: "Kaju Katli",
    description: "Smooth cashew diamond-shaped delight, rich in taste & tradition.",
    price: "Rs. 850 / 500g",
    image: "/kaju.jpg",
    category: "mithai",
    inStock: true, 

  },
  {
    name: "Soan Papdi",
    description: "Flaky, melt-in-mouth sweet that’s loved across generations.",
    price: "Rs. 650 / 500g",
    image: "/Soan Papdi.webp",
    category: "mithai",
       inStock: false, 

  },
  {
    name: "Kalakand",
    description: "Creamy and crumbly, made from slow-cooked milk — a milky masterpiece.",
    price: "Rs. 750 / 500g",
    image: "/Kalakand.webp",
    category: "mithai",  
      inStock: true, 

  },
  {
    name: "Milk Peda",
    description: "Soft, skin-toned and milky — a nostalgic delight in every bite.",
    price: "Rs. 700 / 500g",
    image: "/milk-peda.jpg",
    category: "mithai",
        inStock: true, 

  },
];

// 🎂 Cake Items
const cakeItems = [
  {
    name: "Chocolate Fudge Cake",
    description: "Rich, moist & layered with gooey chocolate frosting.",
    price: "Rs. 1200 / 1kg",
    image: "/Chocolate Fudge Cake.jpg",
    category: "cake",
        inStock: true, 

  },
  {
    name: "Red Velvet Cake",
    description: "Velvety texture with cream cheese frosting perfection.",
    price: "Rs. 1400 / 1kg",
    image: "/Red Velvet Cake.jpg",
    category: "cake",
        inStock: false, 

  },
  {
    name: "Pineapple Cream Cake",
    description: "Soft vanilla sponge with juicy pineapple & whipped cream.",
    price: "Rs. 1100 / 1kg",
    image: "/Pineapple Cream Cake.png",
    category: "cake",
      inStock: true, 

  },
  {
    name: "Three Milk Cake",
    description: "Sponge soaked in 3 types of milk, topped with whipped cream.",
    price: "Rs. 1300 / 1kg",
    image: "/Three Milk Cake.jpg",
    category: "cake",
     inStock: true, 

  },
  {
    name: "Strawberry Delight",
    description: "Fluffy sponge layered with fresh strawberry cream & jam.",
    price: "Rs. 1250 / 1kg",
    image: "/Strawberry Delight.png",
    category: "cake",
        inStock: true, 

  },
  {
    name: "Vanilla Classic",
    description: "Timeless vanilla sponge with silky whipped cream topping.",
    price: "Rs. 1050 / 1kg",
    image: "/Vanilla Classic.jpg",
    category: "cake",
        inStock: true, 

  },
  {
    name: "Caramel Crunch",
    description: "Sticky caramel layers with crunchy toffee bits — a rich treat!",
    price: "Rs. 1350 / 1kg",
    image: "/Caramel Crunch.png",
    category: "cake",
        inStock: false, 

  },
  {
    name: "Fruit Mix Cake",
    description: "Fresh seasonal fruits layered over fluffy whipped cream base.",
    price: "Rs. 1450 / 1kg",
    image: "/Fruit Mix Cake.png",
    category: "cake",
        inStock: true, 

  },
  
];
// 🍪🧁 Biscuit & Cupcake Items
const biscuitItems = [
  {
    name: "Naan Khatai",
    description: "Crispy, buttery delight with traditional desi flavor.",
    price: "Rs. 300 / 250g",
    image: "/nankhatai.jpg",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Chocolate Chip",
    description: "Crunchy edges with gooey chocolate chips inside.",
    price: "Rs. 350 / 250g",
    image: "/ChocolateChip.jpg",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Zeera Biscuits",
    description: "Savory cumin flavor with a crunchy bite.",
    price: "Rs. 280 / 250g",
    image: "/Zeera Biscuits.webp",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Butter Cookies",
    description: "Melt-in-mouth buttery cookies, perfect with tea.",
    price: "Rs. 300 / 250g",
    image: "/ButterCookies.png",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Chocolate Fudge",
    description: "Rich, moist cupcake with fudgy center & frosting.",
    price: "Rs. 200 each",
    image: "/Chocolate Fudge.webp",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Vanilla Cupcake",
    description: "Classic vanilla sponge with creamy frosting.",
    price: "Rs. 180 each",
    image: "/Vanilla.png",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Red Velvet",
    description: "Velvety smooth cupcake with signature cream cheese top.",
    price: "Rs. 220 each",
    image: "/Red Velvet.webp",
    category: "biscuit",
        inStock: true, 

  },
  {
    name: "Strawberry Swirl",
    description: "Fruity burst of strawberry in every swirl & bite.",
    price: "Rs. 200 each",
    image: "/Strawberry Swirl.jpg",
    category: "biscuit",
        inStock: false, 

  },
];
// 👑 Royal Dessert Items
const royalItems = [
  {
    name: "Rasmalai",
    description: "Soft cottage cheese discs soaked in saffron milk.",
    price: "Rs. 750 / 500g",
    image: "/Rasmalai.png",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Kheer",
    description: "Traditional rice pudding topped with pistachios & almonds.",
    price: "Rs. 600 / 500g",
    image: "/Kheer.jpg",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Shahi Tukray",
    description: "Fried bread soaked in sweet rabri and garnished with silver foil.",
    price: "Rs. 700 / 500g",
    image: "/ShahiTukray.webp",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Gajar ka Halwa",
    description: "Carrot halwa with khoya, dry fruits and desi ghee richness.",
    price: "Rs. 650 / 500g",
    image: "/Gajar ka Halwaa.jpg",
    category: "royal",
        inStock: false, 

  },
  {
    name: "Kulfi",
    description: "Traditional frozen dairy dessert with a rich, creamy texture.",
    price: "Rs. 500 / 4 pieces",
    image: "/Kulfi.png",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Sooji Halwa",
    description: "Ghee-roasted semolina halwa topped with almonds.",
    price: "Rs. 400 / 500g",
    image: "/Sooji Halwa.jpg",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Zarda",
    description: "Saffron-infused sweet rice with raisins & dry fruits.",
    price: "Rs. 600 / 500g",
    image: "/Zarda.jpg",
    category: "royal",
        inStock: true, 

  },
  {
    name: "Anday ka Halwa",
    description: "Rich and unique egg-based halwa for bold dessert lovers.",
    price: "Rs. 700 / 500g",
    image: "/Anday ka Halwa.jpg",
    category: "royal",
        inStock: true, 

  },
];


// ✅ Combine both
const allItems = [...mithaiItems, ...cakeItems, ...biscuitItems, ...royalItems];

export default function Product({ params }) {
  const { slug } = useParams(); // ✅ correct hook
  const item = allItems.find(
    (item) => item.name.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!item) {
    return (
      <div className="text-center mt-10 text-red-600 text-xl">Product not found</div>
    );
  }

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

 const handleAddToCart = () => {
  const cartItem = {
    ...item,
    quantity,
    total: totalPrice,
  };

  // Get existing cart
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Overwrite same item if exists
  const updatedCart = existingCart.filter((i) => i.name !== item.name);
  updatedCart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setAddedToCart(true);
};

//

  const numericPrice = parseInt(item.price.match(/\d+/)[0]); // Get number only
  const totalPrice = numericPrice * quantity;

const [wishlist, setWishlist] = useState([]);
const [isWishlisted, setIsWishlisted] = useState(false);
useEffect(() => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    const parsed = JSON.parse(storedWishlist);
    setWishlist(parsed);
    setIsWishlisted(parsed.some((i) => i.name === item.name));
  }
}, [item.name]);
const toggleWishlist = () => {
  let updated;
  if (isWishlisted) {
    updated = wishlist.filter((i) => i.name !== item.name);
    toast("Removed from Wishlist 💔");
  } else {
    updated = [...wishlist, item];
    toast.success("Added to Wishlist 💖");
  }
  setWishlist(updated);
  setIsWishlisted(!isWishlisted);
  localStorage.setItem("wishlist", JSON.stringify(updated));
};
  const router = useRouter();

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-md w-full bg-[#0F828C] text-white rounded-2xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
        <Image
          src={item.image}
          alt={item.name}
          width={200}
          height={200}
          className="mx-auto rounded-full object-cover mb-6 w-32 h-32"
        />
        <h1 className="text-3xl font-bold mb-3">{item.name}</h1>
        <p className="text-sm mb-2">{item.description}</p>
        <p className="text-lg font-semibold mb-6">{item.price}</p>
{/* Stock Status */}
<p
  className={`text-sm font-semibold mb-2 ${
    item.inStock ? "text-green-300" : "text-red-300"
  }`}
>
  {item.inStock ? "In Stock ✅" : "Out of Stock ❌"}
</p>

        {/* Quantity Control */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={handleSubtract}
            className="bg-white text-[#0F828C] px-4 py-1 text-xl rounded-full font-bold"
          >
            −
          </button>
          <span className="text-xl font-bold">{quantity}</span>
          <button
            onClick={handleAdd}
            className="bg-white text-[#0F828C] px-4 py-1 text-xl rounded-full font-bold"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className="text-md font-semibold mb-6">
          Total: Rs. {totalPrice} / {quantity > 1 ? `${quantity} x 500g` : "500g"}
        </p>

<button
  onClick={() => {
    if (item.inStock) {
      handleAddToCart();
      toast.success("Your Order Placed successfully!");
          setTimeout(() => {
      router.push("/payment"); // ✅ Replace with your payment/checkout route
    }, 1500);
    } else {
      toast.error("Item is out of stock!");
    }
  }}
  disabled={!item.inStock}
  className={`w-full px-6 py-2 rounded mt-2 border transition ${
    item.inStock
      ? "bg-white text-[#0F828C] border-[#0F828C] hover:scale-105"
      : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
  }`}
>
  {addedToCart ? "Update Cart" : "Add to Cart"}
</button>

<br/>
<button
  onClick={toggleWishlist}
  className={`mt-4 px-6 py-2 rounded-full border ${
    isWishlisted
      ? "bg-red-100 text-red-600 border-red-400"
      : "bg-white text-[#0F828C] border-white"
  } hover:scale-105 transition`}
>
  {isWishlisted ? "💔 Remove from Wishlist" : "🤍 Add to Wishlist"}

    </button>
    <br/>

 <div className="flex justify-center">
  <button
    onClick={() => router.back()}
    className={`mt-4 px-6 py-2 rounded-full border flex items-center gap-2 hover:scale-105 transition`}
  >
    <ArrowLeft className="w-5 h-5" />
    <span>Go Back</span>
  </button>
</div>

      </div>
    </div>
  );
}