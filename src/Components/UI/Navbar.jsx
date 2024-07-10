import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // creating array for multiple menu values
  const AllMenuLinksArray = [
    "",
    "About us",
    "Use Cases",
    "Events",
    "Web App",
    "FAQ",
    "Contact us",
  ];
  // for toggle menu open / close
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="navbar_section flex-3 z-50 menu_link h-[91.5px] 
      gap-3 md:gap-6 lg:gap-14 w-full "
        style={{
          borderTop: "2px solid",
          borderBottom: "0px",
          borderImage:
            "linear-gradient(to right, black, #EE6127, #F9BC11, #EE6127, black) 1",
        }}
      >
        <Link className="hidden md:flex" to="#">
          About us
        </Link>
        <Link className="hidden md:flex" to="#">
          Use Cases
        </Link>
        <Link className="hidden md:flex" to="#">
          Events
        </Link>
        <div className="vector_box relative top-[0.2rem] md:top-[1.18rem] flex-3">
          <img
            className="h-[100px] w-[175px] md:h-[132.28px] md:w-[232.5px]"
            src="/images/HeroSection/Vector-1.png"
            alt="vector"
          />
          <img
            className="absolute w-[70px] h-[70px] md:w-[102px] md:h-[102px]"
            src="/images/HeroSection/Djfi-icon.png"
            alt="icon"
          />
        </div>
        <Link className="hidden md:flex" to="#">
          Web App
        </Link>
        <Link className="hidden md:flex" to="#">
          FAQ
        </Link>
        <Link className="hidden md:flex" to="#">
          Contact us
        </Link>

        {/* responsive navbar design */}
        <div className={`md:hidden flex`}>
          <div className="icon absolute top-28 sm:top-14 right-5">
            {showMenu ? (
              <i
                onClick={() => setShowMenu(false)}
                className={`ri-close-line cursor-pointer text-3xl`}
              ></i>
            ) : (
              <i
                onClick={() => setShowMenu(true)}
                className={`ri-menu-line cursor-pointer text-3xl`}
              ></i>
            )}
          </div>
          <div className="show_menu_container">
            <div
              className={`show_menu absolute h-screen top-0 ${showMenu ? "left-[0%]" : "left-[-100%]"} p-4 flex flex-col gap-4 bg-slate-900 w-[15rem] custom_transition`}
            >
              {AllMenuLinksArray.map((menu_link, index) => (
                <React.Fragment key={index}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    className="menu_link "
                    to="#"
                  >
                    {menu_link}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
