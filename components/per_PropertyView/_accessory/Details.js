import React, { useEffect, useState } from "react";
import StyledDetails from "./Details.styles";
import { addCommasToNumber } from "../../../utils/helperFunction";
import { Button } from "@mui/material";
import { RiUserLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { Bed, Bath, MapPin, Home, Tag, Navigation, FileText } from 'lucide-react';

function Details({ detail, props }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  const [landSize, setLandSize] = useState();
  const router = useRouter();
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
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {details.map(({ icon: Icon, label, value, fullWidth }) => (
        <div 
          key={label} 
          className={`flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm ${
            fullWidth ? 'col-span-2 md:col-span-3' : ''
          }`}
        >
          <Icon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="font-semibold">{value}</p>
          </div>
        </div>
      ))}
    </div>
          {/* {data?.map((item) => (
            <li className="detailPerList" key={item.key}>
              <main className="detailTitle" key={item.key}>
                {item.k}
              </main>

              <aside className="detailValue">{item.v}</aside>
            </li>
          ))} */}

          
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

