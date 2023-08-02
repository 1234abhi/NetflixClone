import useAuth from "@/hooks/useAuth";
import { Genre } from "@/typings";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  searchText?: string;
  setSearchText?: (text: string) => void;
}

function Header({ searchText, setSearchText }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
          <Link href="/people" className="headerLink">
            People
          </Link>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="w-[400px] p-1 border border-gray-300 rounded text-black "
            value={searchText}
            onChange={(e) => setSearchText?.(e.target.value)}
          />
        )}
        <SearchIcon
          className="hidden h-6 w-6 sm:inline"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <img
          onClick={logout}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  );
}

export default Header;
