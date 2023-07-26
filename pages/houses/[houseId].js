import { useRouter } from "next/router";
import React from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import api from "../../utils/api";

function PerHouse(props) {
  return (
    <div>
      {" "}
      <PerPropertyView item={props} />
    </div>
  );
}

export default PerHouse;

export async function getStaticPaths() {
  const res = await api.get(`/houses?populate=*`);
  const paths = res?.data.data?.map((item) => ({
    params: { houseId: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await api.get(`/houses?populate=*`);
  let data = res.data.data;
  data = data.filter(
    (item) => item.id.toString() === params.houseId.toString()
  );
  return { props: { data } };
}
