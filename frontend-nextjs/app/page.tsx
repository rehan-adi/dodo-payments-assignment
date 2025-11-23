"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/cards/Cards";
import Credit from "@/components/cards/Credit";
import Summary from "@/components/cards/Summary";
import Expness from "@/components/cards/Expness";
import Exchange from "@/components/cards/Exchange";
import Transactions from "@/components/cards/Transactions";
import Subscription from "@/components/cards/Subscription";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>
        </div>
      )}

      <div
        className={`md:hidden fixed left-1 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ${
          isSidebarOpen ? "-translate-x-16" : "translate-x-0"
        }`}
      >
        <button
          className="p-2 rounded-lg shadow-md border border-[#E1E4EA]"
          style={{ backgroundColor: "#335CFF" }}
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={17} className="text-white" />
        </button>
      </div>

      <div className="flex-1 md:ml-[257px]">
        <Navbar />

        <main className="px-6 flex flex-wrap mt-3 gap-4 pb-6">
          <div className="grid grid-cols-2 [@media(max-width:1015px)]:grid-cols-1 gap-4">
            <Card />
            <Summary />
            <Transactions />
            <Subscription />
          </div>
          <div className="flex flex-col gap-4">
            <Expness />
            <Exchange />
            <Credit />
          </div>
        </main>
      </div>
    </div>
  );
}
