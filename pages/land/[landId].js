import React, { useContext, useEffect, useState } from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import { SpecimenContext } from "../../context/contextProvider";

function PerLand() {
  const { land, house, setLand, setHouse } = useContext(SpecimenContext);
  const [data, setData] = useState();
  useEffect(() => {
    const landData = land.filter(
      (item) => item.id.toString() === router.query.houseId.toString()
    );
    setData(landData);
    return () => {};
  }, []);

  return (
    <div>
      <PerPropertyView item={data} />
    </div>
  );
}

export default PerLand;
