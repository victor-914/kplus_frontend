import React, { useEffect, useState } from "react";
import { propertyDetails } from "../../../utils/propertyDetails.array";
import StyledDetails from "./Details.styles";

function Details({ detail }) {
  const [data, setData] = useState();
  // useEffect(() => {
  //   if (detail) {
  //     setData(data);
  //     const dataArray = Object.entries(data?.attributes);
  //     setData(dataArray);
  //     console.log(dataArray, "dataArray");
  //   }
  // }, [detail]);

  console.log(detail, "detail");
  return (
    <StyledDetails>
      {
        <main className="detailsContainer">
          {propertyDetails.map((item) => (
            <li className="detailPerList">
              <main className="detailTitle" key={item._key}>
                {item.title}
              </main>
              <aside className="detailValue">
                {Array.isArray(item.value)
                  ? item.value.map((item) => (
                      <div className="subArrayItem" key={item._key2}>
                        {item}
                      </div>
                    ))
                  : item.value}
              </aside>
            </li>
          ))}
        </main>
      }
    </StyledDetails>
  );
}

export default Details;

// {propertyDetails.map((item) => (
//   <li className="detailPerList">
//     <main className="detailTitle" key={item._key}>
//       {item.title}
//     </main>
//     <aside className="detailValue">
//       {Array.isArray(item.value)
//         ? item.value.map((item) => (
//             <div className="subArrayItem" key={item._key2}>
//               {item}
//             </div>
//           ))
//         : item.value}
//     </aside>
//   </li>
// ))}
