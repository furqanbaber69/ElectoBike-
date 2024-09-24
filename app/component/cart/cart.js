"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CartSidebar = ({ isOpen, onClose }) => {
  // Example static cart items, you can fetch your cart state from context or redux
  const cartItems = [
    {
      id: 1,
      title: "E-Bike 1",
      price: 599.99,
      quantity: 1,
      image: "/images/bike1.png",
    },
    {
      id: 2,
      title: "E-Bike 2",
      price: 699.99,
      quantity: 2,
      image: "/images/bike2.png",
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-lg font-bold">
          &times;
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-md">{item.title}</h3>
                <p className="text-sm">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
              <button className="">&times;</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="absolute bottom-5 mx-auto w-full px-4">
        <Link href="/checkout">
          <button className="bg-primary text-white px-3 py-2 rounded w-full">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
