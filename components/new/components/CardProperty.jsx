import React from 'react'
import {Bed, Bath,MapPin} from "lucide-react"
import { useRouter } from 'next/router';
function CardProperty({property}) {
  const router = useRouter()

  return (
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
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <span>{property?.attributes?.city} </span>
        </div>
        <div className="flex justify-between text-gray-600">
        
        </div>
      </div>
      <div className="flex justify-around items-center py-4 border-t border-gray-100">
        <div className="flex items-center">
          <Bed className="w-5 h-5 text-gray-400 mr-2" />
          <span>{property?.attributes?.bedroom} Beds</span>
        </div>
        <div className="flex items-center">
          <Bath className="w-5 h-5 text-gray-400 mr-2" />
          <span>{property?.attributes?.bathroom} Baths</span>
        </div>
        
      </div>
    </a>
  )
}

export default CardProperty