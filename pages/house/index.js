import React from "react";
import HouseModel from "../../components/perModel/houseModel";
import api from "../../utils/api";

function HouseListing(props) {
  console.log(props, "@house");
  return (
    <section>
      {props.data.data.map((item) => (
        <HouseModel data={item} />
      ))}
    </section>
  );
}

export default HouseListing;

export const getStaticProps = async () => {
  const resLand = await api.get(`/houses?populate=*`);
  let data = resLand.data;
  return { props: { data } };
};

// export const getStaticPaths = async () => {
//   const paths = specimens.map((model) => ({
//     params: { catergory: model.catergory, modelId: model._id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
