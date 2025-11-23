export default function Expness() {
  return (
    <div
      className="w-[352px] h-[178px] p-5 bg-white 
      border border-[#E1E4EA] rounded-2xl
      shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]
      flex flex-col justify-between"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="17" y1="7" x2="7" y2="17" />
            <polyline points="17 17 7 17 7 7" />
          </svg>
        </div>

        <img src="assets/icons/chart.svg" alt="" className="mt-1" />
      </div>

      <div>
        <p className="text-sm text-[#525866] font-normal">Total Expenses</p>

        <div className="flex items-center gap-2">
          <p className="text-[32px] font-medium">$6,240.28</p>

          <span className="text-xs font-medium px-2 py-0.5 bg-[#FFC0C5] text-[#681219] rounded-xl">
            -2%
          </span>
        </div>
      </div>
    </div>
  );
}
