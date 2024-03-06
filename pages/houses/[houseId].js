import React from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import api from "../../utils/api";

function PerHouse({ data }) {
  return (
    <div>
      {" "}
      <PerPropertyView item={data} />
    </div>
  );
}

export default PerHouse;

export async function getStaticPaths() {
  const res = await api.get(
    `/houses?&pagination[page]=1&pagination[pageSize]=5`
  );
  const paths = res?.data?.data?.map((item) => ({
    params: { houseId: item.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let data = await api.get(`/houses/${params.houseId.toString()}?populate=*`);
  data = data?.data;
  return { props: { data }, revalidate: 60 };
}
