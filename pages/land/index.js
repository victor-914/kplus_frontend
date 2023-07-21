import React from "react";
import api from "../../utils/api";
import LandModel from "../../components/perModel/landModel";
function LandListing(props) {
  return (
    <section>
      {props.data.data.map((item) => (
        <LandModel data={item} />
      ))}
    </section>
  );
}

export default LandListing;

export const getStaticProps = async () => {
  const resLand = await api.get(`/lands?populate=*`);
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
