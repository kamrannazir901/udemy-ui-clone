import React, { useEffect, useRef, useState } from "react";
import { icons, images } from "../assets/Data";
import Button from "./Button";
import HoverBox from "./HoverBox";
import { NavLink } from "react-router-dom";

const menu = [
  {
    mainTitle: "Explore by Goals",
    items: [
      {
        title: "Learn AI",
        children: [
          {
            mainTitle: "Frontend Submenu",
            items: [{ title: "React" }, { title: "Angular" }],
          },
        ],
      },
      {
        title: "Launch a new career",
        children: [
          {
            mainTitle: "Backend Submenu",
            items: [{ title: "Node.js" }, { title: "Laravel" }],
          },
        ],
      },
      {
        title: "Certification prepartion",
        children: [
          {
            mainTitle: "Backend Submenu",
            items: [{ title: "Node.js" }, { title: "Laravel" }],
          },
        ],
      },
      {
        title: "Practice with role play",
      },
    ],
  },
  {
    mainTitle: "Categories",
    items: [
      {
        title: "Frontend",
        children: [
          {
            mainTitle: "Libraries",
            items: [{ title: "Vue" }, { title: "Svelte" }],
          },
        ],
      },
      {
        title: "Backend",
        children: [
          {
            mainTitle: "Frameworks",
            items: [{ title: "Django" }, { title: "Spring Boot" }],
          },
        ],
      },
    ],
  },
  {
    // mainTitle: "Categories",
    items: [
      {
        title: "Play",
        children: [
          {
            mainTitle: "Libraries",
            items: [{ title: "Vue" }, { title: "Svelte" }],
          },
          {
            mainTitle: "Libraries 2",
            items: [
              {
                title: "Vue",
                children: [
                  {
                    items: [{ title: "Vue" }, { title: "Svelte" }],
                  },
                ],
              },
              { title: "Svelte" },
            ],
          },
        ],
      },
      {
        title: "Dote",
        children: [
          {
            mainTitle: "Frameworks",
            items: [{ title: "Django" }, { title: "Spring Boot" }],
          },
        ],
      },
    ],
  },
];

const Navbar = ({ setFixedData, fixedData }) => {
  const [hoverPath, setHoverPath] = useState({});
  const [hoverMobilePath, setHoverMobilePath] = useState({
    0: 2,
    1: 0,
    2: 1,
    3: 0,
    4: 0,
  });
  const [show, setShow] = useState({});

  const [showMenu, setShowMenu] = useState(false);

  function renderMenu(items, level = 0) {
    const currentIndex = hoverPath[level];
    const nextItem = items?.[currentIndex];

    return (
      <>
        <div
          className={` min-w-[250px] py-2  ${
            level !== 0 ? "border-purple-300 border-l" : ""
          } min-h-[500px] `}
        >
          {items?.map((m, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <div
                  className={`bg-purple-200 mt-2 ${i !== 0 ? "h-[1px]" : ""} `}
                ></div>

                {m.mainTitle ? (
                  <span className="text-sm px-4 font-semibold">
                    {m.mainTitle}
                  </span>
                ) : (
                  ""
                )}
                <div>
                  {m?.items?.map((m, j) => {
                    return (
                      <div
                        onMouseEnter={() => {
                          setHoverPath((prev) => ({
                            ...prev,
                            [level]: i,
                            [level + 1]: j,
                          }));
                        }}
                        key={j}
                        className={`p-2 px-4 cursor-pointer ${
                          hoverPath[level + 1] === j && hoverPath[level] === i
                            ? "text-purple hover:bg-purple-100"
                            : ""
                        }`}
                      >
                        <div className="flex text-sm items-center justify-between">
                          <span> {m.title}</span>
                          <span className="text-[.6rem]">
                            {m.children ? icons.rightIcon : ""}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {nextItem?.items?.[hoverPath[level + 1]]?.children &&
          renderMenu(nextItem.items[hoverPath[level + 1]].children, level + 2)}
      </>
    );
  }

  function renderMobileMenu(items, level = 0) {
    const currentIndex = hoverMobilePath[level];
    const nextItem = items?.[currentIndex];
    return (
      <>
        <div
          style={{
            transform: show[level] ? "translateX(0)" : "translateX(100%)",
          }}
          className={`w-full absolute transition-all h-full bg-white pb-2
           `}
        >
          {level === 0 ? (
            <div className="py-3 border-b flex flex-col text-purple">
              <NavLink to="login" className="p-2 px-4 hover:bg-purple-100 link">
                Log in
              </NavLink>
              <NavLink
                to="signup"
                className="p-2 px-4 hover:bg-purple-100 link"
              >
                Sign up
              </NavLink>
            </div>
          ) : (
            <div>
              <div
                onClick={() => {
                  setShow((prev) => {
                    const updated = { ...prev, [level]: false };
                    return updated;
                  });
                }}
                className="flex items-center link bg-gray-200 px-4 py-3 gap-2"
              >
                <span className="text-[.6rem] rotate-180">
                  {icons.rightIcon}
                </span>
                <span>Menu</span>
              </div>
            </div>
          )}

          {items?.map((m, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <div
                  className={`bg-black mt-2 ${i !== 0 ? "h-[1px]" : ""} `}
                ></div>
                {m.mainTitle ? (
                  <span className="text-sm px-4 font-semibold">
                    {m.mainTitle}
                  </span>
                ) : (
                  ""
                )}
                <div>
                  {m?.items?.map((m, j) => {
                    return (
                      <div
                        onClick={() => {
                          setShow((prev) => ({
                            ...prev,
                            [level + 2]: true,
                          }));
                          setHoverMobilePath((prev) => ({
                            ...prev,
                            [level]: i,
                            [level + 1]: j,
                          }));
                        }}
                        key={j}
                        className={`p-2 px-4 cursor-pointer ${
                          hoverMobilePath[level + 1] === j &&
                          hoverMobilePath[level] === i
                            ? "text-purple hover:bg-purple-100"
                            : ""
                        }`}
                      >
                        <div className="flex text-sm items-center justify-between">
                          <span> {m.title}</span>
                          <span className="text-[.6rem]">
                            {m.children ? icons.rightIcon : ""}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {level === 0 && (
            <div className="ml-4">
              <div className="flex w-fit text-lg rounded items-center border border-purple hover:bg-purple-100 link text-purple mt-4 px-4 py-1 gap-2">
                <span>{icons.globeIcon}</span>
                <span>English</span>
              </div>
            </div>
          )}
        </div>
        {nextItem?.items?.[hoverMobilePath[level + 1]]?.children &&
          renderMobileMenu(
            nextItem.items[hoverMobilePath[level + 1]].children,
            level + 2
          )}
      </>
    );
  }

  const handleMobileMenu = () => {
    setFixedData(
      <div className="w-full h-full">
        <div className="absolute left-[65vw] rounded-full top-8">
          <span
            onClick={() => {
              setFixedData(null);
            }}
            className="w-10 h-10 text-xl flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="flex flex-col gap-4 relative overflow-y-auto overflow-x-hidden max-w-[60vw] h-full">
          <div className="flex">{renderMobileMenu(menu)}</div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (show[0]) {
      handleMobileMenu();
    }
  }, [show]);

  return (
    <div className="flex shadow-lg items-center justify-between gap-1 py-2 lg:py-0 md:px-8">
      <div
        onClick={() => {
          handleMobileMenu();
          setTimeout(() => {
            setShow({ 0: true });
          }, 100);
        }}
        className="text-sm lg:hidden text-[18px] hover:bg-lightpurpleHover p-3 rounded link"
      >
        {icons.menuIcon}
      </div>
      <NavLink to="/">
        <img
          src={images.logo}
          alt="udemy logo"
          className="min-w-[90px] mr-1 link"
        />
      </NavLink>

      {/* menu */}

      <div
        className="relative hidden lg:block"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <div className="text-sm hover:bg-lightpurpleHover p-3 rounded link">
          Explore
        </div>

        {showMenu && (
          <div
            className="absolute z-30 top-full left-0 rounded-xl border border-purple-300 
        bg-white transition-all duration-300 ease-in-out"
          >
            <div className="flex">{renderMenu(menu, 0)}</div>
          </div>
        )}
      </div>

      {/* menu end */}

      <div className="flex-1 mx-2 hidden lg:flex items-center gap-2 px-2 rounded-full border">
        <span className="text-gray-500 text-xl">{icons.searchIcon}</span>
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full px-2 py-3 outline-none"
        />
      </div>
      <HoverBox
        content={
          <>
            <h2 className="font-black text-lg text-center">
              Turn what you know into an opportunity and reach millions around
              the world.
            </h2>
            <Button type="dark" text="Learn more" />
          </>
        }
      >
        <NavLink
          to="/career"
          className="text-sm hidden xl:block hover:bg-lightpurpleHover p-3 rounded link"
        >
          Udemy Business
        </NavLink>
      </HoverBox>
      <HoverBox
        content={
          <>
            <h2 className="font-black text-lg text-center">
              Turn what you know into an opportunity and reach millions around
              the world.
            </h2>
            <Button type="dark" text="Learn more" />
          </>
        }
      >
        <NavLink
          to="/instructor/dashboard"
          className="text-sm hidden lg:block hover:bg-lightpurpleHover p-3 rounded link"
        >
          Teach on Udemy
        </NavLink>
      </HoverBox>

      <div className="flex">
        <div className="text-sm lg:hidden text-[18px] hover:bg-lightpurpleHover p-2.5 md:p-3 rounded link">
          {icons.searchIcon}
        </div>
        <div className="text-sm text-[18px] hover:bg-lightpurpleHover p-2.5 md:p-3 rounded link">
          {icons.cartIcon}
        </div>
      </div>

      <div className="lg:flex hidden items-center gap-2 ml-3">
        <NavLink to="login">
          <Button type="" text="Log in" className="!py-2 px-4" />
        </NavLink>
        <NavLink to="signup">
          <Button type="dark" text="Sign up" className="!py-2 px-4" />
        </NavLink>

        <div className="text-[18px]">
          <Button
            type=""
            text={icons.globeIcon}
            className="!p-[.6rem] !text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
