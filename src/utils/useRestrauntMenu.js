import { useEffect, useState } from "react";
import { MENU_API } from "./constants.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId, {
        headers: {
        'x-cors-api-key': 'temp_1d79a2e0b912b90be4f82bff0d3eb792'
        }
      });
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;