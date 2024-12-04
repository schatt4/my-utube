import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { changeToggleSidebar } from "../store/appSlice";

import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebarClick = () => {
    dispatch(changeToggleSidebar());
  };

  return (
    <header className="grid grid-flow-col p-4 shadow-lg">
      <div className="col-span-1 flex">
        <img
          onClick={handleSidebarClick}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC"
          alt="hamburger-logo"
        />
        {/* <a href="/"> */}
        <img
          className="h-8 mx-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube-logo"
        />
        {/* </a> */}
      </div>
      <div className="col-span-10 text-center ">
        <Search />
      </div>
      <div className="col-span-1">
        <img
          className="h-11 cursor-pointer"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user"
        />
      </div>
    </header>
  );
};

export default Header;
