import { ChevronRight } from "lucide-react";

export default function Transaction() {
  const transactions = [
    {
      title: "Salary Deposit",
      subtitle: "Monthly salary from Apex Finance",
      amount: "$3,500.00",
      date: "Sep 18",
      icon: "assets/icons/bank-line.svg",
    },
    {
      title: "Stock Dividend",
      subtitle: "Payment from stock investments",
      amount: "$846.14",
      date: "Sep 18",
      icon: "assets/icons/line-chart-line.svg",
    },
    {
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Dudley.",
      amount: "$100.00",
      date: "Sep 17",
      icon: "assets/icons/home-smile-fill.svg",
    },
    {
      title: "Refund from Amazon",
      subtitle: "Refund of Order No #124235",
      amount: "$36.24",
      date: "Sep 15",
      icon: "assets/icons/amazon.svg",
    },
  ];

  return (
    <div
      className="w-[352px] h-[380px] p-4 gap-4 bg-white 
         border border-[#E1E4EA] rounded-2xl
         shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]"
    >
      <div className="flex items-center mb-4 justify-between">
        <div className="flex items-center gap-2">
          <img
            src="assets/icons/refund-2-line.svg"
            className="w-6 h-6"
            alt=""
          />
          <p className="font-medium text-base">Recent Transactions</p>
        </div>

        <button className="px-3 py-1.5 text-sm rounded-lg border border-[#E1E4EA]">
          See All
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4 bg-[#F5F7FA] p-1 rounded-xl">
        <button className="flex-1 py-1.5 text-sm rounded-md shadow bg-white font-medium">
          Incoming
        </button>
        <button className="flex-1 py-1.5 text-sm rounded-md font-medium text-gray-600">
          Outgoing
        </button>
        <button className="flex-1 py-1.5 text-sm rounded-md font-medium text-gray-600">
          Pending
        </button>
      </div>

      <div className="space-y-5">
        {transactions.map((t, i) => (
          <div key={i} className="flex items-center cursor-pointer justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-[#E1E4EA] flex items-center justify-center">
                <img src={t.icon} className="w-5 h-5" alt="" />
              </div>

              <div>
                <p className="font-medium text-sm">{t.title}</p>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className="flex items-end flex-col">
                <p className="font-semibold text-sm">{t.amount}</p>
                <p className="text-xs text-gray-500">{t.date}</p>
              </div>

              <ChevronRight className="w-4 h-4 text-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
