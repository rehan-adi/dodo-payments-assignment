import { ChevronDown } from "lucide-react";

export default function Exchange() {
  return (
    <div className="w-[352px] h-[380px] bg-white rounded-2xl border border-[#E1E4EA] p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="assets/icons/refresh-line.svg" alt="" className="h-6 w-6" />
          <p className="text-base font-medium">Exchange</p>
        </div>

        <button className="px-3 py-1.5 text-sm border border-[#E1E4EA] rounded-lg">
          Currencies
        </button>
      </div>

      <div className="border border-[#E1E4EA] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between py-2 px-4 border-b border-[#E1E4EA]">
          <div className="flex items-center gap-2">
            <img
              src="assets/icons/UnitedStates.svg"
              alt=""
              className="h-4 w-4"
            />
            <p className="text-sm font-medium text-[#0E121B]">USD</p>
            <div className="border rounded-full p-1 border-[#E1E4EA]">
              <ChevronDown
                size={12}
                className="text-gray-600"
                strokeWidth={2}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="px-4 border-x border-[#E1E4EA]">
              <img src="/assets/icons/transfer.svg" alt="" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src="assets/icons/european.svg" alt="" className="h-4 w-4" />
            <p className="text-sm font-medium text-[#0E121B]">EUR</p>
            <div className="border rounded-full p-1 border-[#E1E4EA]">
              <ChevronDown
                size={12}
                className="text-gray-600"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-1 px-4 py-3">
          <p className="text-[32px] font-medium">$100.00</p>
          <p className="text-sm font-medium text-[#525866]">
            Available : <span className="text-[#0E121B]">$16,058.94</span>
          </p>
        </div>

        <div className="border-t border-[#E1E4EA] bg-[#F5F7FA] p-1 text-xs font-normal text-[#525866] text-center">
          1 USD = <span className="font-medium">0.94 EUR</span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#525866] font-normal">Tax (2%)</p>
          <p className="font-medium text-[#0E121B] text-xs">$2.00</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-[#525866] font-normal">
            Exchange Fee (1%)
          </p>
          <p className="font-medium text-[#0E121B] text-xs">$1.00</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-[#525866] font-normal">Total Amount</p>
          <p className="font-medium text-[#0E121B] text-xs">€90.7</p>
        </div>
      </div>

      <button className="w-full py-2 rounded-lg flex justify-center items-center gap-3 text-sm font-medium border border-[#E1E4EA] text-black bg-white">
        <img
          src="assets/icons/refresh-line.svg"
          alt=""
          className="inline-block h-5 w-5"
        />{" "}
        Exchange
      </button>
    </div>
  );
}
