"use client";



import { useRouter } from "next/router";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from "swr";
import { fetcher } from '../../utils/api';
const categories = [
  { id: 'all', name: 'All Properties'},
  { id: 'shortlet', name: 'Shortlet'},
  { id: 'apartments', name: 'Apartments',},
  { id: 'sales', name: 'Direct Sales', },
  { id: 'rentals', name: 'Rentals', },
  { id: 'offices', name: 'Offices',},
  { id: 'featured', name: 'Featured' },
  { id: 'villas', name: 'Villas',},
];



export default function PropertyTabs() {

    const [pageIndex, setPageIndex] = useState(1);
  const [houses, setHouses] = useState([]);
  const router = useRouter();
 


  const [activeTab, setActiveTab] = useState('all');
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/houses?populate=*`,
    fetcher
  );

  const filteredProperties = data?.data?.filter(
    property => activeTab === 'all' || property?.attributes?.catergory?.toLowerCase() === activeTab?.toLocaleLowerCase()
  );

  

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of properties across different categories
          </p>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide mb-12">
          <div className="flex space-x-2 mx-auto">
            {categories.map(category => {
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
                    activeTab === category.id
                      ? 'bg-[#ba9b0e] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProperties?.map(property => (
              <a
                href={`/properties/${property.id}`}
                key={property.id}
                onClick={() => router.push(`/properties/${property.id}`)}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                <img
                    src={property?.attributes?.image?.data?.attributes?.url}
                    alt={property?.attributes?.title}
                    className="w-full h-full object-cover"
                  /> 
                  <div className="absolute top-4 right-4 px-4 py-2 bg-[#ba9b0e] text-white rounded-full">
                  &#8358; {property?.attributes?.price?.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property?.attributes?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between text-gray-600">
                    <span>{property?.attributes?.bedroom} Beds</span>
                    <span>{property?.attributes?.bathroom} Baths</span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


export const getStaticProps = async () => {
  try {
    const resHouse = await api.get(
      `/houses?populate=*&pagination[page]=1&pagination[pageSize]=5`
    );
    let housesProps = resHouse.data;

    return { props: { housesProps }, revalidate: 60 };
  } catch (error) {
    return {};
  }
};

export async function getStaticPaths() {
  const res = await api.get(
    `/houses?&pagination[page]=1&pagination[pageSize]=5`
  );
  const paths = res?.data?.data?.map((item) => ({
    params: { houseId: item.id.toString() },
  }));
  return { paths, fallback: true };
}

