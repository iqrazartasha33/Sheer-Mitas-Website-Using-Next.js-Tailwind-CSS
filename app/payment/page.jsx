'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Payment() {
  const [cart, setCart] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    method: "",
    screenshot: null
  });

  const handleProceed = () => setShowOptions(true);

  const handleScreenshotUpload = (event) => {
    const file = event.target.files[0];
    setScreenshot(file);
    console.log("Uploaded screenshot:", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const fakeResponse = {
        data: {
          success: true,
          message: "Payment submitted successfully!",
          formData,
        },
      };

      console.log("Simulated Response:", fakeResponse.data);
      alert("Payment submitted successfully!");

      setUserPhone("");
      setSelectedMethod("");
      setScreenshot(null);
      setFormData({
        phone: "",
        method: "",
        screenshot: null,
      });
    } catch (error) {
      console.error("Fake API error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setFormData({
      phone: userPhone,
      method: selectedMethod,
      screenshot: screenshot,
    });
  }, [userPhone, selectedMethod, screenshot]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-100 py-10 px-4 !bg-gray-100">
        <div className="max-w-2xl mx-auto bg-white dark:bg-white text-gray-800 rounded-2xl shadow-lg p-8 transition-all">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
            🧾 Order Summary
          </h1>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 flex justify-between items-start hover:shadow transition-all bg-white"
                >
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Quantity: <span className="font-medium">{item.quantity}</span>
                    </p>
                  </div>
                  <p className="font-semibold text-lg text-green-700">
                    Rs. {item.total}
                  </p>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <>
              <div className="mt-8">
                <p className="text-xl font-bold text-right text-gray-800 border-t pt-4">
                  Total Amount:{" "}
                  <span className="text-green-600">Rs. {totalAmount}</span>
                </p>
              </div>

              <div className="flex justify-between mt-6 gap-4">
                <button
                  onClick={() => {
                    localStorage.removeItem("cart");
                    setCart([]);
                  }}
                  className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  🗑️ Clear Cart
                </button>

                <button
                  onClick={handleProceed}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  💳 Proceed to Payment
                </button>
              </div>

              {showOptions && (
                <div className="mt-6 bg-gray-100 p-4 rounded shadow-md !bg-gray-100 dark:bg-gray-100">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    Choose Payment Method
                  </h2>

                  <div className="space-y-3">
                    <button
                      className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      onClick={() => setSelectedMethod("cod")}
                    >
                      💸 Cash on Delivery
                    </button>

                    <button
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                      onClick={() => setSelectedMethod("easypaisa")}
                    >
                      📱 Easypaisa / JazzCash
                    </button>

                    <button
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => setSelectedMethod("bank")}
                    >
                      🏦 Bank Transfer
                    </button>
                  </div>

                  {selectedMethod === "cod" && (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                      <div>
                        <label className="block mb-1 font-medium">
                          Your Mobile Number:
                        </label>
                        <input
                          type="tel"
                          placeholder="03xx-xxxxxxx"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        📦 Confirm COD Order
                      </button>
                    </form>
                  )}

                  {selectedMethod === "easypaisa" && (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                      <p className="text-sm text-gray-600">
                        Send payment to <strong>0345-XXXXXXX</strong>
                      </p>

                      <div>
                        <label className="block mb-1 font-medium">
                          Your Mobile Number:
                        </label>
                        <input
                          type="tel"
                          placeholder="03xx-xxxxxxx"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Upload Screenshot:
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleScreenshotUpload}
                          className="w-full"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        {isLoading ? "Loading..." : "Pay Now"}
                      </button>
                    </form>
                  )}

                  {selectedMethod === "bank" && (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                      <p className="text-sm text-gray-600">
                        Transfer to Bank:{" "}
                        <strong>1234567890123</strong> (ABC Bank)
                      </p>

                      <div>
                        <label className="block mb-1 font-medium">
                          Your Mobile Number:
                        </label>
                        <input
                          type="tel"
                          placeholder="03xx-xxxxxxx"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}
                          maxLength={11}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Upload Screenshot:
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleScreenshotUpload}
                          className="w-full"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        🏦 Submit Bank Transfer Details
                      </button>
                    </form>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}