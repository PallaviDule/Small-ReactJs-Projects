import React, { useMemo, useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

const SearchList = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [count, setCount] = useState(0);

  const filterSearch = useMemo(() => {
    // For learning: see when filtering runs
    // console.log('Filtering users...');
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
  }, [users, searchText]);

  const handleEdit = (user) => {
    setEditId(user.id);
    setEditName(user.name);
  };

  const handleEditSave = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, name: editName } : user
      )
    );
    setEditId(null);
    setEditName('');
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    if (editId === id) {
      setEditId(null);
      setEditName('');
    }
  };

  return (
    <>
      {/* App Card */}
      <div className="max-w-lg mx-auto mt-10 rounded-xl shadow-lg bg-white overflow-hidden">
        {/* Gradient Header */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-6 px-4 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
            Smart Search & Edit
          </h1>
          <p className="text-blue-100 mt-1 text-sm font-medium">
            Search, edit, or delete users below
          </p>
        </div>
        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-blue-700">Search:</h2>
            <input
              type="text"
              value={searchText}
              placeholder="Search by name..."
              onChange={(event) => setSearchText(event.target.value)}
              className="border border-blue-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 transition w-full max-w-xs"
            />
          </div>

          <ul className="divide-y divide-blue-100 mb-4">
            {filterSearch.length === 0 && (
              <li className="py-2 text-gray-400 italic">No users found.</li>
            )}
            {filterSearch.map((user) => (
              <li key={user.id} className="flex items-center justify-between py-2">
                <span className="text-gray-700 w-10">{user.id}</span>
                {editId === user.id ? (
                  <>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border border-blue-400 rounded-lg px-2 py-1 mr-2 flex-1"
                      autoFocus
                    />
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700 transition"
                      onClick={() => handleEditSave(user.id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 text-gray-900">{user.name}</span>
                    <button
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg mr-2 hover:bg-blue-200 transition"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200 transition"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Increment - {count}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-lg mx-auto flex items-center my-8">
        <div className="flex-grow border-t border-blue-200"></div>
        <span className="mx-4 text-blue-400 font-bold text-xs tracking-widest">LEARNING</span>
        <div className="flex-grow border-t border-blue-200"></div>
      </div>

      {/* Learning Section */}
      <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-inner text-gray-700 mb-10">
        <h3 className="font-semibold text-lg mb-2">💡 React State & useMemo</h3>
        <div className="mt-3 text-xs text-blue-500 bg-blue-50 rounded p-2">
          <strong>Why is the counter here?</strong> <br />
          The increment button lets you test how React re-renders work and how <code>useMemo</code> prevents unnecessary recalculations. Changing the counter updates the component, but the filtered user list only recalculates if <code>users</code> or <code>searchText</code> changes.
        </div>
      </div>
    </>
  );
};

export default SearchList;