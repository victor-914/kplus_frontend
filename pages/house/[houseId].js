import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import { SpecimenContext } from "../../context/contextProvider";

function PerHouse() {
  const [data, setData] = useState();
  const router = useRouter();
  const { land, house, setLand, setHouse } = useContext(SpecimenContext);
  useEffect(() => {
    const houseData = house.filter(
      (item) => item.id.toString() === router.query.houseId.toString()
    );
    setData(houseData);
    return () => {};
  }, []);

  return (
    <div>
      <PerPropertyView item={data} />
    </div>
  );
}

export default PerHouse;
