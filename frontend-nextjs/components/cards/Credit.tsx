export default function Expness() {
  const totalBars = 10;

  const activeBars = Math.round((710 / 1000) * totalBars);

  return (
    <div className="w-[352px] p-4 bg-white border border-[#E1E4EA] rounded-2xl shadow-[0px_1px_2px_rgba(10,13,20,0.03)] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/speed-up-line.svg"
            alt="icon"
            className="w-6 h-6"
          />
          <span className="text-base font-semibold text-[#0E121B]">
            Credit Score
          </span>
        </div>

        <button className="text-sm font-medium text-[#525866] border border-[#E1E4EA] py-1.5 px-2 cursor-pointer rounded-lg">
          Details
        </button>
      </div>

      <div className="w-full h-px bg-[#E1E4EA]"></div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-normal text-[#0E121B]">
            Your <span className="font-medium">credit score</span> is{" "}
            <span className="font-medium">710</span>
          </p>
          <p className="text-xs font-medium text-[#525866]">
            This score is considered to be Excellent.
          </p>
        </div>

        <img src="/assets/icons/emoji.svg" className="w-11 h-11" alt="icon" />
      </div>

      {/* Segmented bar */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "5px",
              height: "22px",
              borderRadius: "2px",
              backgroundColor:
                i < Math.round((710 / 1000) * 35) ? "#1FC16B" : "#E1E4EA",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
