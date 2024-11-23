import React, { useEffect, useState } from "react";
import StyledDetails from "./Details.styles";
import { addCommasToNumber } from "../../../utils/helperFunction";
import { Button } from "@mui/material";
import { RiUserLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { Bed, Bath, MapPin, Home, Tag, Navigation, FileText, Heart } from 'lucide-react';
import { toggleFavorite } from "../../../utils/favoriteStore";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import Cookies from "js-cookie";


const HeartButton = ({ property }) => {
  const [token, setToken] = useState();


  useEffect(() => {
    const tok = Cookies.get("user_jwt");
    setToken(tok);
  });
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((fav) => fav.id === property.id);


  const handleToggleFavorite = () => {
    if (!token) {
      toast.error("You must be logged in to add to favorites!");
      return;
    }
    dispatch(toggleFavorite(property));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
       <button
        className={`transition-transform transform ${!isFavorite ? 'text-red-500' : 'text-gray-400'} hover:scale-125 focus:outline-none`}
        onClick={handleToggleFavorite}
        aria-label={!isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        ❤️
      </button>
      
      <button
        onClick={handleToggleFavorite}
        className={`w-80 py-2 px-4 rounded-md text-white ${!isFavorite ? 'bg-red-500' : 'bg-gray-400'} text-lg font-semibold transition-all transform hover:scale-105 focus:outline-none`}
        aria-label={!isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {!isFavorite ? 'Add to Favorites' : 'Remove from Favourites'}
      </button>

     
    </div>
  );
};




function Details({ detail, props }) {
  console.log("🚀 ~ Details ~ props:", props)
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  const [landSize, setLandSize] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const filteredData = detail.filter(
      (item) =>
        item.k !== "createdAt" &&
        item.k !== "updatedAt" &&
        item.k !== "publishedAt" &&
        item.k !== "image" &&
        item.k !== "video" &&
        item.k !== "latitude" &&
        item.k !== "longititude" &&
        item.k !== "price" &&
        item.k !== "title" &&
        item.k !== "CofO" &&
        item.k !== "landSize" &&
        item.k !== "videoUrl" &&
        item.k !== "titleDocument" &&
        item.k !== "cloudinary_image"
    );
    setData(filteredData);
    setLandSize(props?.data?.attributes?.landSize);
    setPrice(props?.data?.attributes?.price);

    return () => {
      setData(null);
      setPrice(null);
      setLandSize(null);
    };
  }, [detail, props]);

  const details  = [
    { icon: Tag, label: 'Price', value: '₦ 1,000,000' },
    { icon: Home, label: 'Status', value: 'FOR SALE' },
    { icon: MapPin, label: 'State', value: 'ABUJA' },
    { icon: MapPin, label: 'LGA', value: 'NPOKITI' },
    { icon: Navigation, label: 'Landmark', value: 'ABUJA' },
    { icon: Bed, label: 'Bedroom', value: '5' },
    { icon: Bath, label: 'Bathroom', value: '6' },
    { icon: MapPin, label: 'City', value: 'ABUJA' },
    { icon: Home, label: 'Category', value: 'RENTALS' },
    { 
      icon: FileText, 
      label: 'Description', 
      value: 'NEWLY BUILT 7 BEDROOM DUPLEX { ADVANCE CARCASS 70% DONE }',
      fullWidth: true 
    },
  ];

  const message = `Hello Kplus Reliable properties, I would like to enquire more on this property:(https://kplus-property.com${router.asPath})`;
  const favorites = useSelector(state => state.favorites.favorites);
   console.log("🚀 ~ Details ~ favorites:", favorites)
   

const combinedDetails = data?.map((item,x) => {

  return ({
    k:item.k,
    v:item.v,
    i:details[x].icon
  })

});

  return (
    <StyledDetails>
      {
        <main className="detailsContainer">
         
          {landSize && (
            <li className="detailPerList">
              <main className="detailTitle">Size</main>

              <aside className="detailValue">
                {addCommasToNumber(parseInt(landSize))} SqFt
              </aside>
            </li>
          )}
          {props?.data?.attributes?.titleDocument && (
            <li className="detailPerList">
              <main className="detailTitle">Title of Document</main>

              <aside className="detailValue">
                {props?.data?.attributes?.titleDocument}
              </aside>
            </li>
          )}
           
                  <HeartButton property={props.data} />
          
        
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {combinedDetails?.map((item) => (
      <div
        key={item.k}
        className={`flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm ${item.k === "description" ? "col-span-2" : "md:col-span-1"}`}
      >
        <item.i className="w-6 h-6 text-yellow-600 flex-shrink-0" />
        <div>
          <p className="text-sm text-gray-600">{item.k}</p>
          <p className="font-semibold">{item.v}</p>
        </div>
      </div>
    ))}
  </div>
          
        </main>
      }

      

      <div className="realtorButton">
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="contained"
        >
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://api.whatsapp.com/send?phone=+2348155273175&text=${message}`}
            target="_blank"
          >
            Talk with a Realtor{" "}
            <span className="icon">
              {" "}
              <RiUserLine />
            </span>
          </a>
        </Button>
      </div>
    </StyledDetails>
  );
}

export default Details;

