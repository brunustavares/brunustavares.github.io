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
import { WakaTimeConfig } from "../interfaces/sanitized-config";

interface Language {
  name: string;
  percent: number;
}

interface WakaTimeResponse {
  data: {
    human_readable_total: string;
    languages: Language[];
  };
}

const WakaTimeStats = ({ wakatime }: { wakatime?: WakaTimeConfig }) => {
  const [data, setData] = useState<WakaTimeResponse | null>(null);

  useEffect(() => {
    if (!wakatime) return;

    fetch(wakatime.statsUrl)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [wakatime]);

  if (!wakatime || !data) return null;

  return (
    <section className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          WakaTime · Coding Activity ({wakatime.year})
        </h2>

        <p className="text-base-content/80">
          Total coding time:{" "}
          <strong>{data.data.human_readable_total}</strong>
        </p>

        <ul className="mt-2 space-y-2">
          {data.data.languages.slice(0, 5).map((lang) => (
            <li
              key={lang.name}
              className="flex justify-between bg-base-200 rounded px-3 py-2"
            >
              <span>{lang.name}</span>
              <span>{lang.percent.toFixed(1)}%</span>
            </li>
          ))}
        </ul>

        <a
          href={wakatime.reportUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-primary"
        >
          View full {wakatime.year} report →
        </a>
      </div>
    </section>
  );
};

export default WakaTimeStats;
