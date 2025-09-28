import React, {useState, useEffect} from 'react';
import { SWIGGY_RESTAURANT_LIST_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useOnlineStatus from '../utils/useOnlinestatus';
import RestaurantCard from './RestaurantCard';
import { ShimmerCard } from './ShimmerCard';

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`

const RestaurantsComponent = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState(''); // bind with input value, so it should be updated with text we are trying to write.

    const debounce = (callbackFn, delay) => {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callbackFn.apply(this, args);
            }, delay);
        }
    };
    const handleSearchDebouncing = (event) => {
        setSearchText(event.target.value)
    };
    const handleSearch = debounce(handleSearchDebouncing, 200);
    const handleSearchClick = () => {
          const filteredList = list.filter(value => value.info.name.toLowerCase().includes(searchText.toLowerCase()));  
          setFilteredList(filteredList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_RESTAURANT_LIST_URL); 
        const result = await data.json();
        const mappedResponse = result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

        setList(mappedResponse);
        setFilteredList(mappedResponse);
       // console.log('mappedResponse' , mappedResponse);
     };

    const searchTopRatedRes = () => {
        setFilteredList(prevList => prevList.filter(res => res.info.avgRating > 4.5));
    }
    const handleClearFilter = () => {
        setFilteredList(list);
        setSearchText('');
    }

    const onlineStatus = useOnlineStatus();
   // console.log('Onlilne status', onlineStatus);
    if(!onlineStatus) {
        return <h1> Looks like You are offline. Please check the internet</h1>
    }

    return (
        <div className='body-component px-2 py-2'>
            <div className='filter flex m-2 items-center'>
                <input type='text' placeholder='search here' 
                    data-testid='searchBox'
                    className='border-1 p-1 rounded-md' 
                    value={searchText} 
                    onChange={(event) => setSearchText(event.target.value)}
                ></input>
                <div className='m4 px-2'>
                    <button className='border bg-gray-100 rounded-2xl px-4' onClick={handleSearchClick}>search</button>
                </div>
                <div className='m4 px-2'>
                    <button className='border bg-gray-100 rounded-2xl px-4' onClick={searchTopRatedRes}>Top Rated Restaurants</button>
                </div>
                <div className='m4 px-2'>
                    <button className='border bg-gray-100 rounded-2xl px-4' onClick={handleClearFilter}>Clear Filter</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-between'>
                {list.length === 0 ? (<ShimmerCard />) : 
                    (filteredList.map(rs =>
                        <StyledLink to={`/foodApp/restaurantMenu/${rs.info.id}`} key={rs.info.id}>
                            <RestaurantCard info={rs.info} key={rs.info.id}/>
                        </StyledLink>)
                )}
            </div>
        </div>
    )};

export default RestaurantsComponent;