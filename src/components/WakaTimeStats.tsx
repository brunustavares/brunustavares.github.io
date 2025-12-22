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
  year: number;
  statsUrl: string;
  reportUrl?: string;
}

interface WakaTimeStatsProps {
  wakatime?: WakaTimeConfig;
}

interface WakaTimeData {
  data: {
    grand_total: {
      total_seconds: number;
      human_readable_total: string;
    };
    languages: Array<{
      name: string;
      percent: number;
      text: string;
    }>;
  };
}

const WakaTimeStats = ({ wakatime }: WakaTimeStatsProps) => {
  const [stats, setStats] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ HARD GUARANTEE FOR TS + RUNTIME
  if (!wakatime) {
    return null;
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get<WakaTimeData>(wakatime.statsUrl);
        setStats(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load WakaTime stats.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [wakatime.statsUrl]);

  if (loading) return <div>Loading WakaTime stats...</div>;
  if (error) return <div>{error}</div>;
  if (!stats) return null;

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <h2 className="text-xl font-bold mb-2">
        WakaTime Stats ({wakatime.year})
      </h2>

      <p>
        Total coding time:{' '}
        <strong>{stats.data.grand_total.human_readable_total}</strong>
      </p>

      <ul className="mt-2">
        {stats.data.languages.slice(0, 5).map((lang) => (
          <li key={lang.name}>
            {lang.name}: {lang.text} ({lang.percent.toFixed(1)}%)
          </li>
        ))}
      </ul>

      {wakatime.reportUrl && (
        <a
          href={wakatime.reportUrl}
          target="_blank"
          rel="noreferrer"
          className="link link-primary mt-2 inline-block"
        >
          View full report →
        </a>
      )}
    </div>
  );
};

export default WakaTimeStats;
