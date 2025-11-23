import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between md:px-6 px-4">
      <div className="flex items-center gap-3">
        {/* PFP */}
        <img
          src="/assets/icons/pfp.svg"
          className="md:w-10 w-8 md:h-10 h-8 rounded-full object-cover"
          alt="profile"
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm">Arthur Taylor</span>
            <img
              src="/assets/icons/verified-fill.svg"
              className="md:w-5 w-4 md:h-5 h-4"
              alt="verified"
            />
          </div>
          <p className="text-xs hidden md:flex font-normal text-[#525866]">
            Welcome back to Apex 👋🏻
          </p>
        </div>
      </div>

      <div className="flex items-center md:gap-6 gap-4">
        <img
          src="/assets/icons/search.svg"
          className="w-4 h-4 cursor-pointer"
          alt="search"
        />

        <img
          src="/assets/icons/notification.svg"
          className="w-5 h-5 cursor-pointer"
          alt="notifications"
        />

        <button
          className="md:px-4 py-2 px-3 rounded-xl text-white cursor-pointer text-sm font-medium"
          style={{ backgroundColor: "#335CFF" }}
        >
          Move Money <ArrowUpRight size={17} className="inline-block"/>
        </button>
      </div>
    </div>
  );
}
