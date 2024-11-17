import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2575&ixlib=rb-4.0.3",
    title: "Modern Villa with Pool",
    price: "$1,250,000",
    location: "Beverly Hills",
    beds: 4,
    baths: 3,
    sqft: 2800,
    tag: "For Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2570&ixlib=rb-4.0.3",
    title: "Luxury Penthouse",
    price: "$890,000",
    location: "Downtown",
    beds: 3,
    baths: 2,
    sqft: 1950,
    tag: "For Sale"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2570&ixlib=rb-4.0.3",
    title: "Cozy Family Home",
    price: "$675,000",
    location: "Westwood",
    beds: 4,
    baths: 2,
    sqft: 2200,
    tag: "For Sale"
  }
];

const locations = ["All Locations", "Lagos", "Abuja", "Kenya", "Enugu"];

export default function LocationProperties() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Properties in Your Area
          </h2>
          <div className="w-20 h-1 bg-[#ba9b0e] mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedLocation === location
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-yellow-50'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {property.tag}
                </span>
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-200"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-xl font-bold text-yellow-600">
                    {property.price}
                  </p>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <BedDouble className="w-4 h-4 mr-2" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="w-4 h-4 mr-2" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Square className="w-4 h-4 mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}