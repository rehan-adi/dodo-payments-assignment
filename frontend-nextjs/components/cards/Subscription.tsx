export default function Subscription() {
  return (
    <div
      className="w-[352px] h-[385px] p-4 bg-white 
      border border-[#E1E4EA] rounded-2xl space-y-4"
    >
      <div className="flex items-center mb-4 justify-between">
        <div className="flex items-center gap-2">
          <img
            src="assets/icons/file-list-line.svg"
            className="w-6 h-6"
            alt=""
          />
          <p className="font-medium text-base">My Subscriptions</p>
        </div>

        <button className="px-3 py-1.5 text-sm rounded-lg border border-[#E1E4EA]">
          See All
        </button>
      </div>

      <div className="w-full h-28 rounded-xl mt-6 mb-6 flex items-center justify-center">
        <img src="assets/icons/promotional.svg" alt="" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#E1E4EA] rounded-full flex items-center justify-center">
              <img src="assets/icons/spotify.svg" alt="" />
            </div>

            <div>
              <p className="text-xs font-normal text-[#525866]">
                Salary Deposit
              </p>
              <p className="font-medium text-sm">
                $7.99 <span className="text-[#99A0AE]">/month</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full bg-[#E0FAEC] text-[#1FC16B] text-xs font-medium">
              Paid
            </span>

            <img src="assets/icons/three-dot.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#E1E4EA] rounded-full flex items-center justify-center">
              <img src="assets/icons/yt.svg" alt="" />
            </div>

            <div>
              <p className="text-xs text-gray-500">YouTube Music</p>
              <p className="font-medium text-sm">
                $79.99 <span className="text-[#99A0AE]">/year</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full bg-[#F2F5F8] text-[#717784] text-xs font-medium">
              Expiring
            </span>

            <img src="assets/icons/three-dot.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#E1E4EA] rounded-full flex items-center justify-center">
              <img src="assets/icons/prime.svg" alt="" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Prime Video</p>
              <p className="font-medium text-sm">
                $9.99 <span className="text-[#99A0AE]">/month</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full bg-[#FFF1EB] text-[#FF8447] text-xs font-medium">
              Paused
            </span>

            <img src="assets/icons/three-dot.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
