type Bid = {
  user: string;
  bid: string;
  time: string;
};

interface BidHistoryProps {
  bids: Bid[];
}

const BidHistory = ({ bids }: BidHistoryProps) => {
  return (
    <div className="bg-white/5 dark:bg-black/10 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Bid History
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700/30">
            <tr>
              <th className="px-6 py-3" scope="col">
                User
              </th>
              <th className="px-6 py-3" scope="col">
                Bid
              </th>
              <th className="px-6 py-3 text-right" scope="col">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  {bid.user}
                </th>
                <td className="px-6 py-4">{bid.bid}</td>
                <td className="px-6 py-4 text-right">{bid.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidHistory;
