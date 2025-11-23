import { ChevronDown, AlertCircle } from "lucide-react";

export default function SpendingSummary() {
  return (
    <div
      className="w-[352px] h-[380px] p-4 gap-4 bg-white 
         border border-[#E1E4EA] rounded-2xl
         shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
    >
      <div className="flex items-center mb-4 justify-between">
        <div className="flex items-center gap-2">
          <img
            src="assets/icons/pie-chart-line.svg"
            className="w-6 h-6"
            alt=""
          />
          <p className="font-medium text-base">Spending Summary</p>
        </div>

        <button className="px-3 py-1.5 text-sm rounded-lg border border-[#E1E4EA] flex items-center gap-1.5">
          Last Week
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="w-full border-b border-[#E1E4EA] mb-5 mt-1"></div>

      <div className="flex items-center justify-center mb-4">
        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-24">
            <div
              className="w-full h-full rounded-t-full"
              style={{
                background:
                  "conic-gradient(from 180deg, #3B5BFF 0deg 180deg, #4DD4FF 190deg 265deg, #E5E7EB 170deg 180deg)",
                WebkitMask:
                  "radial-gradient(circle at 50% 100%, transparent 55%, black 56%)",
                mask: "radial-gradient(circle at 50% 100%, transparent 55%, black 56%)",
              }}
            ></div>

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
              <div className="text-xs text-[#525866] font-medium tracking-wide mb-1">
                SPEND
              </div>
              <div className="text-2xl font-medium text-[#0E121B]">
                $1,800.00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-[#E1E4EA] mb-5"></div>

      <div className="grid grid-cols-3 text-center mb-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col bg-[#EBF1FF] h-8 w-8 rounded-full items-center justify-center mb-2">
            <img
              src="/assets/icons/shopping-bag-3-line.svg"
              className="w-5 h-5"
            />
          </div>
          <p className="text-xs text-[#525866] mb-1">Shopping</p>
          <p className="font-medium text-sm">$900.00</p>
        </div>

        <div className="border-x border-[#E1E4EA] flex flex-col justify-center items-center px-4">
          <div className="flex flex-col bg-[#EBF8FF] h-8 w-8 rounded-full items-center justify-center mb-2">
            <img
              src="/assets/icons/file-list-line-blue.svg"
              className="w-5 h-5"
            />
          </div>
          <p className="text-xs text-[#525866] mb-1">Utilities</p>
          <p className="font-medium text-sm">$600.00</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-[#F2F5F8] h-8 w-8 rounded-full items-center justify-center mb-2">
            <img
              src="/assets/icons/money-dollar-circle-line.svg"
              className="w-5 h-5"
            />
          </div>
          <p className="text-xs text-gray-600 mb-1">Others</p>
          <p className="font-medium text-sm">$200.00</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 py-1 px-2 mt-8 border border-[#E1E4EA] rounded-lg">
        <p className="text-xs text-[#525866]">
          Your weekly spending limit is{" "}
          <span className="font-medium">$2000.</span>
        </p>
        <img src="assets/icons/info-custom-fill.svg" className="w-4 h-4" alt="" />
      </div>
    </div>
  );
}
