import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Leaf } from 'lucide-react';

const Navbar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <nav className="bg-primary-700 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="bg-white p-1.5 rounded-full text-primary-700 group-hover:bg-primary-50 transition-colors">
                        <Leaf size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-none">Paradise Nursery</h1>
                        <p className="text-[10px] uppercase tracking-widest opacity-80">Where Green Meets Serenity</p>
                    </div>
                </Link>

                {/* Navigation / Cart */}
                <div className="flex items-center space-x-6">
                    <Link to="/products" className="hover:text-primary-200 transition-colors font-medium">
                        Plants
                    </Link>
                    <Link to="/cart" className="relative group p-2">
                        <ShoppingCart className="group-hover:text-primary-200 transition-colors" size={28} />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-pulse">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
