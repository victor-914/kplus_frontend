import React, { useContext, useEffect, useState } from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import api from "../../utils/api";
function PerLand(props) {
  return (
    <div>
      <PerPropertyView item={props} />
    </div>
  );
}

export default PerLand;

export async function getStaticPaths() {
  const res = await api.get(`/lands?populate=*`);
  const paths = res?.data.data?.map((item) => ({
    params: { landId: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await api.get(`/lands?populate=*`);
  let data = res.data.data;
  data = data.filter((item) => item.id.toString() === params.landId.toString());
  return { props: { data } };
}
