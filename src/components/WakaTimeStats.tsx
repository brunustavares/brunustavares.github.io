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

import { useEffect, useState } from 'react';
import axios from 'axios';

interface WakaTimeConfig {
  wkyear?: number;
  wkstatsUrl?: string;
  wkreportUrl?: string;
}

interface WakaTimeStatsProps {
  wakatime?: WakaTimeConfig;
}

interface WakaTimeData {
  categories: Array<{
    name: string;
    total_seconds: number;
    percent: number;
    color: string;
  }>;
  grand_total: {
    total_seconds: number;
  };
}

const WakaTimeStats = ({ wakatime }: WakaTimeStatsProps) => {
  const [stats, setStats] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWakaTime = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = wakatime?.wkstatsUrl || '/wakatime.json';
        const response = await axios.get<WakaTimeData>(url);
        setStats(response.data);
      } catch (err) {
        setError('Failed to load WakaTime stats.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTime();
  }, [wakatime]);

  if (loading) return <div>Loading WakaTime stats...</div>;
  if (error) return <div>{error}</div>;
  if (!stats) return null;

  const totalHours = (stats.grand_total.total_seconds / 3600).toFixed(1);

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <h2 className="text-xl font-bold mb-2">WakaTime Stats ({wakatime?.wkyear || 'Year'})</h2>
      <p>Total coding time: {totalHours} hrs</p>
      <ul className="mt-2">
        {stats.categories.map((cat) => (
          <li key={cat.name}>
            <span
              className="inline-block w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: cat.color }}
            ></span>
            {cat.name}: {cat.percent.toFixed(1)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WakaTimeStats;
