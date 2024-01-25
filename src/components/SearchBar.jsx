"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div className="mt-6">
      <form
        className="flex justify-center px-5 max-w-6xl mx-auto"
        onSubmit={handlesubmit}
      >
        <div className="relative mt-1">
          <input
            className="h-14 pl-3 pr-16 rounded-md placeholder-white-500 outline-none"
            type="text"
            placeholder="Search keywords here..."
            value={search}
            onChange={getInput}
          />
          <button
            className="absolute inset-y-0 right-0 px-4 text-amber-600 disabled:text-gray-400 bg-gray-600 rounded-r-md"
            disabled={search === ""}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
