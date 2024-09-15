import { useState } from "react";
import { User } from "lucide-react";
import clsx from "clsx";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";
function Header() {
  const [show, setShow] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: "",
    },
    {
      label: "About Us",
      href: "/",
      icon: "",
    },
    {
      label: "Blog",
      href: "/",
      icon: "",
    },
    {
      label: "Log in",
      href: "/",
      icon: <User />,
      class: "px-4 py-2 bg-zinc-100 rounded-lg",
    },
  ];
  return (
    <div className="flex justify-between px-10 lg:justify-around my-5 font-extrabold  items-center">
      <div className="text-3xl">Growth</div>
      <div className="hidden lg:flex gap-10  ">
        {menuItems.map((item) => (
          <p
            key={item.label}
            className={clsx(
              "hover:text-blue-500 transition-colors duration-300 cursor-pointer flex flex-row-reverse gap-2 items-center",
              item.class && item.class
            )}>
            {item.label}
            {item.icon}
          </p>
        ))}
      </div>
      <div onClick={() => setShow(!show)} className="relative lg:hidden">
        <Hamburger show={show} />
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { type: "spring" } }}
            className="absolute glass top-10 select-none w-[200px] bg-white/80  shadow drop-shadow-lg py-10 text-lg px-10 items-center right-0 rounded-lg flex gap-5 flex-col">
            {menuItems.map((item) => (
              <p
                className={clsx(
                  "hover:text-blue-500 transition-colors duration-300 cursor-pointer flex  gap-2 items-center",
                  item.class && item.class
                )}>
                {item.icon && item.icon}
                {item.label}
              </p>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Header;
