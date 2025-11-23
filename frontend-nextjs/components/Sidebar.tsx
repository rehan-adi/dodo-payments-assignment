"use client";

import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { ChevronRight, ChevronsUpDown } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const mainNav = [
    { name: "Dashboard", icon: "/assets/icons/dashboard.svg" },
    { name: "My Cards", icon: "/assets/icons/bank-card-line.svg" },
    { name: "Transfer", icon: "/assets/icons/transfer.svg" },
    { name: "Transaction", icon: "/assets/icons/transaction.svg" },
    { name: "Payments", icon: "/assets/icons/payments.svg" },
    { name: "Exchange", icon: "/assets/icons/exchange.svg" },
  ];

  const otherNav = [
    { name: "Settings", icon: "/assets/icons/settings.svg" },
    { name: "Support", icon: "/assets/icons/headphone-line.svg" },
  ];

  const blueFilter =
    "brightness(0) saturate(100%) invert(32%) sepia(83%) saturate(3232%) hue-rotate(222deg) brightness(102%) contrast(96%)";

  function renderGroup(
    title:
      | string
      | number
      | bigint
      | boolean
      | ReactElement<unknown, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | Promise<
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | ReactElement<unknown, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined
        >
      | null
      | undefined,
    items: any[]
  ) {
    return (
      <div className="mt-4">
        <p className="text-sm font-medium text-[#99A0AE] mb-2 px-1 uppercase tracking-wide">
          {title}
        </p>

        <div className="flex flex-col mb-7 gap-2">
          {items.map((item) => {
            const isActive = active === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center cursor-pointer justify-between py-2 px-3 rounded-lg transition font-medium
                  ${
                    isActive
                      ? "bg-[#F5F7FA] text-[#0E121B]"
                      : "text-[#525866] hover:bg-[#F5F7FA]"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5"
                    style={{
                      filter: isActive ? blueFilter : "none",
                    }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>

                {isActive && <ChevronRight className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-[257px] h-screen fixed left-0 top-0 border-r border-gray-300 flex flex-col justify-between p-4">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center gap-3 mb-4">
          <div className="flex gap-3 items-center justify-center ">
            <img
              src="/assets/icons/logo.svg"
              className="w-10 h-10 rounded-full"
              alt="logo"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">Appex</span>
              <p className="text-xs text-[#525866] font-normal">
                Finance & Banking
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-[#E1E4EA] rounded-md w-6 h-6 bg-white">
            <ChevronsUpDown size={15}/>
          </div>
        </div>

        <div className="border-t border-gray-300 py-1 w-full"></div>

        {renderGroup("MAIN", mainNav)}
        {renderGroup("OTHER", otherNav)}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-gray-300 pt-4 mt-4">
        <div className="flex gap-2">
          <img
            src="/assets/icons/pfp.svg"
            className="w-10 h-10 rounded-full"
            alt="pfp"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm">Arthur Taylor</span>
              <img
                src="/assets/icons/verified-fill.svg"
                className="w-4 h-4"
                alt="verified"
              />
            </div>
            <p className="text-xs font-normal text-[#525866]">
              arthur@alignui.com
            </p>
          </div>
        </div>

        <ChevronRight size={17} />
      </div>
    </div>
  );
}
