import Link from "next/link";
import React from "react";

const DemoStore2 = () => {
  return (
    <div className="px-16 py-36 flex items-center justify-center">
      <Link href="/lobby">
        <button className="border rounded-lg px-4 py-2 bg-orange-400 text-white hover:bg-orange-500 hover:shadow-lg hover:px-10 transition-all">
          Play Game
        </button>
      </Link>
    </div>
  );
};

export default DemoStore2;
