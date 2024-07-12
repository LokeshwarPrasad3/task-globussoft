import React, { useState } from "react";

const Navbar = () => {
  // creating array for multiple menu values
  const AllMenuLinksArray = [
    { name: "", route: "#" },
    { name: "About us", route: "#about-us" },
    { name: "Use Cases", route: "use-cases" },
    { name: "Events", route: "#events" },
    { name: "Web App", route: "#web-apps" },
    { name: "FAQ", route: "#faq" },
    { name: "Contact us", route: "#contact-us" },
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
        {/* links for medium to bigger size devices */}
        <a className="hidden md:flex" href="#about-us">
          About us
        </a>
        <a className="hidden md:flex" href="#use-cases">
          Use Cases
        </a>
        <a className="hidden md:flex" href="#events">
          Events
        </a>
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
        <a className="hidden md:flex" href="#web-apps">
          Web App
        </a>
        <a className="hidden md:flex" href="#faq">
          FAQ
        </a>
        <a className="hidden md:flex" href="#contact-us">
          Contact us
        </a>

        {/* responsive smaller navbar design */}
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
              {AllMenuLinksArray.map((routes, index) => (
                <React.Fragment key={index}>
                  <a
                    onClick={() => setShowMenu(false)}
                    className="menu_link "
                    href={routes.route}
                  >
                    {routes.name}
                  </a>
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
