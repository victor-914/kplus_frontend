import React, { useContext, useEffect } from "react";
import PerPropertyView from "../../components/per_PropertyView/PerPropertyView";
import { SpecimenContext } from "../../context/contextProvider";

function PerLand() {
  const { land, house, setLand, setHouse } = useContext(SpecimenContext);

  useEffect(() => {
    if (props.data.data) {
      setLand(props.data.data);
    }
    return () => {};
  }, []);
  return (
    <div>
      <PerPropertyView />
    </div>
  );
}

export default PerLand;
