import React, { useMemo, useState } from 'react'

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

const SearchList = () => {
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);

  const filterSearch = useMemo(() => {
    console.log('Here it is');
    return users.filter((user) => user.name.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase()));
  }, [users, searchText]);

  // const filterSearch = users.filter((user) => 
  //           user.name.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase())
  // );

  console.log('Filtering users...');

  return (
    <div className='m-1'>
      <div className='flex m-1 items-center'>
        <h2 className='p-1'>Search Here: </h2>
        <input 
          type='text' 
          value={searchText} 
          placeholder="Search by name..."
          onChange={(event) => setSearchText(event.target.value) }
          className='border border-gray-700 rounded-lg p-1'/>
      </div>

      <ul>
        {filterSearch.map((user) => 
          <li key={user.id}>{user.id} - {user.name} </li>
        )}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment - {count}</button>

    </div>
  )
}

export default SearchList