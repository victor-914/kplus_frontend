import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import { useRouter } from 'next/router';
import useSWR from "swr";
import { fetcher } from '../../../utils/api';
const locations = [ "Lagos", "Abuja", "Kenya", "Enugu"];


export default function LocationProperties() {
  const [selectedLocation, setSelectedLocation] = useState("abuja");
  const [favorites, setFavorites] = useState([]);

 

  const router = useRouter()
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/houses?populate=*`,
    fetcher
  );

  const filteredProperties = data?.data?.filter(
    property => selectedLocation === 'abuja' || property?.attributes?.state?.toLowerCase() === selectedLocation?.toLocaleLowerCase()
  );


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
          {filteredProperties?.map((property) => (
            <a key={property.id}
            href={`/properties/${property.id}`}
            onClick={() => router.push(`/properties/${property.id}`)}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={property?.attributes?.image?.data?.attributes?.url} 
                  alt={property?.attributes?.title}
                  className="w-full h-64 object-cover"
                />
               
               
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {property?.attributes?.title}
                  </h3>
                  <p className="text-xl font-bold text-yellow-600">
                    {property?.attributes?.price}
                  </p>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property?.attributes?.location}</span>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <BedDouble className="w-4 h-4 mr-2" />
                    <span>{property?.attributes?.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="w-4 h-4 mr-2" />
                    <span>{property?.attributes?.baths} Baths</span>
                  </div>
                
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}