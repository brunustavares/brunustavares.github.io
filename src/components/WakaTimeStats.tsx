//
// WakaTimeStats.tsx
// WakaTime stats component for github.io site
//
// @package    WakaTimeStats
// @category   component
// @author     Bruno Tavares <brunustavares@gmail.com>
// @link       https://www.linkedin.com/in/brunomastavares/
// @copyright  Copyright (C) 2025-present Bruno Tavares
// @license    GNU General Public License v3 or later
//             https://www.gnu.org/licenses/gpl-3.0.html
// @version    2025122211
// @date       2025-12-22
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//

import { useEffect, useState } from "react";
import axios from "axios";

interface WakaTimeStatsProps {
  wakatime?: {
    wkstatsUrl: string;
  };
}

const WakaTimeStats = ({ wakatime }: WakaTimeStatsProps) => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    if (!wakatime?.wkstatsUrl) return;

    axios
      .get(wakatime.wkstatsUrl)
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Failed to load WakaTime stats:", err));
  }, [wakatime]);

  if (!stats) return <div>Loading WakaTime stats...</div>;

  const latestDay = stats.data[stats.data.length - 1];
  const totalTime = latestDay?.grand_total?.digital || "0:00";

  return (
    <div className="waka-time-stats p-4 bg-base-200 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">WakaTime Stats</h2>
      <p>Latest coding time: {totalTime}</p>
    </div>
  );
};

export default WakaTimeStats;
