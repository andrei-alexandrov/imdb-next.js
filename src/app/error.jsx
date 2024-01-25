"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <p>Something went wrong, please try again later.</p>
      <button
        className="bg-amber-100 text-gray-800  font-semibold 
        py-2 px-4 mt-6 dark:bg-gray-600 dark:text-white hover:text-amber-600
        dark:hover:text-amber-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
