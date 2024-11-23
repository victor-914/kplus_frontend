import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';
export default function Hero() {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const router = useRouter();
  const [search, setSearch] = useState();
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the perfect property from our extensive collection of premium listings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Price Range</option>
                <option value="0-250000">0 - 250,000</option>
                <option value="250000-500000">250,000 - 500,000</option>
                <option value="500000-750000">500,000 - 750,000</option>
                <option value="750000-1000000">750,000 - 1,000,000</option>
                <option value="1000000+">1,000,000+</option>
              </select>
            </div>

            <div className="relative">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
              </select>
            </div>
          </div>

          <button
            onClick={() =>
              location &&
              router.push({ pathname: "/search", query: { keyword: location } })
            }
           className="w-full mt-4 bg-[#ba9b0e] hover:bg-[#000] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2">
            <Search size={20} />
            Search Properties
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-8 text-white"
        >
          <div className="text-center">
            <p className="text-4xl font-bold">200+</p>
            <p className="text-gray-300">Properties sold</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">5+</p>
            <p className="text-gray-300">Expert Agents</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}