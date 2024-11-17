import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';
import { fetcher } from '../../../utils/api';
import useSWR from "swr";






export default function FeaturedProperties() {
  // const { toggleFavorite, isFavorite } = useFavorites();
  const [activeImage, setActiveImage] = useState({});
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/houses?populate=*`,
    fetcher
  );
  
  const filteredProperties = data?.data?.filter(
    property => property?.attributes?.catergory?.toLowerCase() !== "featured"
  );
  
 

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties?.map((property, index) => (
            <motion.div
              key={property?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={property?.attributes?.image?.data?.attributes?.url}
                  alt={property?.attributes?.title}
                  className="w-full h-full object-cover"
                  onClick={() => nextImage(property?.id)}
                />
                {/* <button
                  // onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow-lg transition-colors duration-200"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`}
                  />
                </button> */}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {property?.attributes?.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property?.attributes?.location}</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-yellow-600">
                    ${property?.attributes?.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{property?.attributes?.bedroom} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 text-gray-400 mr-2" />
                    <span>{property?.attributes?.bathroom} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 text-gray-400 mr-2" />
                    {/* <span>{property.sqft.toLocaleString()} sqft</span> */}
                  </div>
                </div>

                {/* <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <img
                      src={property.agent.photo}
                      alt={property.agent.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{property.agent.name}</p>
                      <p className="text-sm text-gray-600">{property.agent.title}</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}