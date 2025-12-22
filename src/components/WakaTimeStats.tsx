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

interface WakaTimeStatsProps {
  wakatime?: {
    wkyear?: number;
    wkstatsUrl?: string;
    wkreportUrl?: string;
  };
}

const WakaTimeStats = ({ wakatime }: WakaTimeStatsProps) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/wakatime.json')
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error('Failed to load WakaTime stats:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading WakaTime stats...</div>;
  if (!stats) return <div>WakaTime stats not available.</div>;

  // Example: show total coding time
  return (
    <div className="wakatime-stats">
      <h2>WakaTime Stats</h2>
      <p>Total Coding Time: {stats.data?.grand_total?.human_readable_total || 'N/A'}</p>
      <p>Languages:</p>
      <ul>
        {stats.data?.languages?.map((lang: any) => (
          <li key={lang.name}>
            {lang.name}: {lang.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WakaTimeStats;
