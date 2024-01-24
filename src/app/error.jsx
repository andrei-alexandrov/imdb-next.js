"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <p>Something went wrong, please try again later.</p>
      <button className="hover: text-amber-600" onClick={() => reset()}>Try again</button>
    </div>
  );
}
