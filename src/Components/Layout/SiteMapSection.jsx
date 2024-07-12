import { Link } from "react-router-dom";

const LinkRoutesArray = [
  "About",
  "Use Cases",
  "Events",
  "Web Apps",
  "Usage Video",
  "Gallery",
  "Clients Testimonials",
  "FAQ",
  "Contact Us",
];

const SiteMapSection = () => {
  return (
    <section
      style={{
        borderTop: "2px solid",
        borderBottom: "0px",
        borderImage:
          "linear-gradient(to right, black, #EE6127, #F9BC11, #EE6127, black) 1",
      }}
      className="sitemap_container bg-gray-900 text-white py-10"
    >
      <div className="container font-montserrat mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* first box of footer */}
        <div className="flex flex-col space-y-4">
          <div className="header_part flex items-center gap-3">
            <img
              className="h-14 w-14"
              src="/images/HeroSection/Djfi-icon.png"
              alt=""
            />
            <h1 className="text-2xl font-bold">DJFY</h1>
          </div>
          <p className="text-sm leading-5 font-normal">
            Connecting DJs and music enthusiasts for seamless event experiences
            and vibrant community engagement.
          </p>
          <div className="flex items-center flex-wrap gap-4">
            <button className="custom_button text-sm font-semibold">
              Sign Up as User
            </button>
            <button className="custom_button text-sm font-semibold">
              Sign Up as DJ
            </button>
          </div>
        </div>
        {/* second box of footer */}
        <div className="flex flex-col space-y-1 links_container">
          <h2 className="text-lg font-bold">Under the Hood</h2>
          {LinkRoutesArray.map((route, index) => (
            <Link className="font-normal text-sm leading-7" key={index} to="#">
              {route}
            </Link>
          ))}
        </div>

        {/* third box of footer */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">HelpDesk</h2>

          {/* whatsapp and email contact box */}
          <div className="contact_container flex flex-col md:flex-row items-center gap-1 xl:gap-5 flex-wrap">
            <div className="flex items-center space-x-2">
              <i className="ri-whatsapp-line text-xl"></i>
              <span className="text-sm font-normal leading-7">
                +91 1234 5678 90
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line te xt-xl"></i>
              <span className="text-sm font-normal leading-7">
                team@djfyapp.com
              </span>
            </div>
          </div>

          {/* small form in footer 3rd box */}
          <div className="border border-gray-400 bg_custom_gradient p-4 md:p-5 md:px-6 rounded-lg w-full md:w-96 h-auto">
            <h2 className="text-white text-sm leading-5 font-medium mb-4">
              Send Us your Message
            </h2>
            <form action="#" method="post" className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="name_input flex flex-col gap-1">
                  <span className="text-xs font-normal">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full md:w-[9.8rem] h-8 px-2 py-1 rounded-md bg-gray-600 placeholder-gray-300 text-xs focus:outline-none"
                  />
                </div>
                <div className="email_input flex flex-col gap-1">
                  <span className="text-xs font-normal">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full md:w-[9.8rem] h-8 px-2 py-1 rounded-md bg-gray-600 placeholder-gray-300 text-xs focus:outline-none"
                  />
                </div>
              </div>
              <textarea
                name="message"
                placeholder="Write message"
                className="w-full px-4 py-2 bg-gray-600 rounded-md placeholder-gray-300 text-xs focus:outline-none"
              ></textarea>
              {/* submit button and clicked robot box */}
              <div className="submit_container flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 flex-wrap flex-3 gap-3">
                <div className="flex items-center space-x-2">
                  <img
                    className="h-9"
                    src="/images/notRobot.png"
                    alt="notRobot"
                  />
                </div>
                <button type="submit" className="custom_button px-1">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMapSection;
