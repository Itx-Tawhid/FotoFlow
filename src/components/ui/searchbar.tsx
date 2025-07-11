import React from "react";
import Link from "next/link.js";
import { useState } from "react";
import { Icon } from "@iconify/react";

export const Searchbar = () => {
  const [isMediya, setMediya] = useState<boolean>(true);
  const [MediyaDisply, setMediyaDisplay] = useState<boolean>(false);
  return (
    <div className="flex w-full items-center justify-between gap-2 border border-amber-400 rounded-sm ">
      <div
        className="relative px-2 py-2"
        onMouseEnter={() => setMediyaDisplay(true)}
        onMouseLeave={() => setMediyaDisplay(false)}
      >
        <button type="button" className="fx-row gap-2">
          <Icon
            icon={isMediya ? "mage:image-fill" : "icon-park-solid:video"}
            width={26}
            height={26}
            color="#99a1af"
            className="cursor-pointer"
          />
          <span>{isMediya ? "Photos" : "Videos"}</span>
        </button>

        <button
          type="button"
          className={`fx-row gap-2 absolute -bottom-[2.8rem] left-0 rounded-sm bg-gray-200 px-4 py-2 text-gray-500 transition-all ease-in ${
            MediyaDisply ? "block opacity-100" : "opacity-0 hidden"
          } `}
          onClick={() => setMediya(!isMediya)}
        >
          <Icon
            icon={isMediya ? "icon-park-solid:video" : "mage:image-fill"}
            width={24}
            height={24}
          />
          {isMediya ? "Videos" : "Photos"}
        </button>
      </div>
      <input
        type="text"
        name="search"
        placeholder={`Search for free ${isMediya ? "Photos" : "Videos"}`}
        autoComplete="off"
        className="border-none outline-none focus:outline-none w-full h-full"
      />
      <Link href="/" className="px-4 py-2">
        <Icon
          icon="icon-park-twotone:search"
          width={24}
          height={24}
          color="#99a1af"
        />
      </Link>
    </div>
  );
};
