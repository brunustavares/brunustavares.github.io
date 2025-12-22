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

interface WakaTimeData {
  data: {
    total_seconds: number;
    languages: {
      name: string;
      percent: number;
    }[];
  };
}

const WakaTimeStats = () => {
  const [stats, setStats] = useState<WakaTimeData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/wakatime.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load wakatime.json");
        return res.json();
      })
      .then(setStats)
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (!stats) return <div>Loading WakaTime stats...</div>;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">WakaTime (Last Year)</h2>

        <ul className="space-y-1">
          {stats.data.languages.map((lang) => (
            <li key={lang.name}>
              {lang.name}: {lang.percent.toFixed(1)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WakaTimeStats;
