import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const CartPage = () => {
    const { items, totalAmount, totalQuantity } = useSelector((state) => state.cart);

    const handleCheckout = () => {
        alert('Checkout functionality coming soon.');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-12 flex-grow">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                            <ShoppingBag className="text-primary-600" size={32} />
                            Your Shopping Cart
                        </h2>
                        <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-bold">
                            {totalQuantity} {totalQuantity === 1 ? 'Item' : 'Items'}
                        </div>
                    </div>

                    {items.length === 0 ? (
                        <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100 space-y-6">
                            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-gray-300">
                                <ShoppingBag size={48} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">Your cart is empty</h3>
                                <p className="text-gray-500 mt-2">Looks like you haven't added any plants to your paradise yet.</p>
                            </div>
                            <Link
                                to="/products"
                                className="btn-primary flex items-center gap-2 mx-auto justify-center w-max"
                            >
                                <ArrowLeft size={20} />
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Items List */}
                            <div className="lg:col-span-2 space-y-4">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b">Order Summary</h3>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>${totalAmount}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping</span>
                                            <span className="text-primary-600 font-semibold uppercase text-xs mt-1">Free</span>
                                        </div>
                                        <div className="pt-4 border-t flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">Total</span>
                                            <span className="text-2xl font-bold text-primary-700">${totalAmount}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <button
                                            onClick={handleCheckout}
                                            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-900/10 active:scale-95"
                                        >
                                            <CreditCard size={20} />
                                            Checkout Now
                                        </button>

                                        <Link
                                            to="/products"
                                            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                                        >
                                            <ArrowLeft size={20} />
                                            Continue Shopping
                                        </Link>
                                    </div>

                                    <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-widest font-bold">
                                        Secure Checkout Guaranteed
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CartPage;
