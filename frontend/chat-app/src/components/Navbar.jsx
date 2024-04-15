import React, { useState } from "react";
import useLogout from "../useLogout";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const { loading, logout } = useLogout();
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div className="navbar w-full p-3 my-2 rounded-lg shadow-xl bg-cyan-200   ">
      <div className="flex-1 px-4">
        <h1 className="text-xl font-semibold text-center text-blue-700">
          Talk
          <span className="text-blue-900">Trove</span>
        </h1>
      </div>
      <div className="flex-none gap-2">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatar.iran.liara.run/public/boy?email=ej@gmail.com"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a disabled={loading} onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
