import {useState, useEffect} from 'react';
const useRestaurantsMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

        useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const result = await data.json();

            setResInfo(result?.data);
        }
        fetchData();
    }, []);

    return resInfo;
}

export default useRestaurantsMenu;