import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleSidebar = useSelector((store) => store.app.toggleSidebar);

  if (!toggleSidebar) return null; //early return patter

  return (
    <section className="col-span-2 pl-4 py-2 m-2 shadow-lg w-52">
      <div className="mb-2">
        <ul className="font-semibold">
          <li>
            <Link to="/" className="hover:text-bold hover:shadow-sm">
              Home
            </Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div className="mb-2">
        {" "}
        <h1 className="font-bold">You</h1>
        <ul className="pl-4">
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
          <li>Watch Later</li>
          <li>Like videos</li>
        </ul>
      </div>

      <div className="mb-2">
        {" "}
        <h1 className="font-bold">Subscription</h1>
        <ul className="pl-4">
          <li>India Tv</li>
          <li>KBS</li>
          <li>Akshaysaini</li>
        </ul>
      </div>

      <div className="mb-2">
        {" "}
        <h1 className="font-bold">Explore</h1>
        <ul className="pl-4">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
