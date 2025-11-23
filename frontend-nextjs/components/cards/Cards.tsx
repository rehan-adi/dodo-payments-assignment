import { Plus, ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

export default function Card() {
  return (
    <div
      className="w-[352px] p-4 bg-white h-[380px]
      border border-[#E1E4EA] rounded-2xl
      shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] space-y-4"
    >
      <div className="flex items-center mb-1 justify-between">
        <div className="flex items-center gap-2">
          <img
            src="assets/icons/bank-card-line.svg"
            className="w-6 h-6"
            alt=""
          />
          <p className="font-medium text-base">My Cards</p>
        </div>

        <button className="px-3 py-1.5 text-sm rounded-lg border border-[#E1E4EA] flex items-center gap-1.5">
          <Plus className="w-4 h-4" />
          Add Card
        </button>
      </div>

      <div className="space-y-3 mt-5">
        <div className="w-full border border-[#E1E4EA] rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full flex items-center justify-center">
                <img
                  src="assets/icons/logo.svg"
                  className="w-7 h-7"
                  alt="logo"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="assets/icons/wifi-line.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
              </div>
              <p className="flex items-start justify-start px-1 pr-2 py-1 text-xs border border-[#E1E4EA] rounded-md text-gray-600 gap-1">
                <img
                  src="/assets/icons/select-box-circle-fill.svg"
                  alt="icon"
                  className="w-4 h-4"
                />
                Active
              </p>
            </div>

            <img
              src="assets/icons/mastercard.svg"
              alt="mastercard"
              className="w-10"
            />
          </div>

          <div className="flex items-center mt-14 justify-between">
            <div>
              <p className="text-xs font-medium text-[#525866]">Savings Card</p>
              <p className="font-semibold text-3xl">$16,058.94</p>
            </div>

            <div className="flex mt-5">
              <button className="w-6 h-6 border border-[#E1E4EA] rounded-l-lg flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <button className="w-6 h-6 border border-[#E1E4EA] border-l-0 rounded-r-lg flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border border-[#E1E4EA] rounded-md overflow-hidden text-xs font-medium mt-2">
        <button className="flex-1 py-0.5 text-center text-gray-600">
          Daily
        </button>
        <button className="flex-1 py-0.5 border-x  border-[#E1E4EA] bg-[#F5F7FA] text-center flex items-center justify-center gap-1">
          Weekly
        </button>
        <button className="flex-1 py-0.5 text-center text-gray-600">
          Monthly
        </button>
      </div>

      <div className="flex justify-between items-center mt-7 gap-4">
        <div className="flex gap-3">
          <div
            className="w-12 h-12 rounded-full"
            style={{
              background:
                "conic-gradient(#335CFF 0deg 180deg, #E1E4EA 180deg 360deg)",
              WebkitMask: "radial-gradient(circle, transparent 45%, black 46%)",
              mask: "radial-gradient(circle, transparent 55%, black 56%)",
            }}
          ></div>

          <div className="text-center space-y-1">
            <p className="text-sm text-start font-normal text-[#525866]">
              Spending Limit
            </p>
            <p className="text-lg font-medium text-[#0E121B]">
              $1,500.00
              <span className="text-xs text-gray-500"> / week</span>
            </p>
          </div>
        </div>
        <div>
          <button className="w-7 h-7 border border-[#E1E4EA] rounded-lg flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
