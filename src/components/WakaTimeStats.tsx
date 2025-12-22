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

// src/components/WakaTimeStats.tsx
import React, { useEffect, useState } from "react";

interface WakaTimeData {
  languages: { name: string; percent: number }[];
  editors: { name: string; percent: number }[];
  total_seconds: number;
  human_readable_total: string;
}

const WakaTimeStats: React.FC = () => {
  const [data, setData] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://brunustavares.github.io/wakatime.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load WakaTime stats.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading WakaTime stats...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h2>My WakaTime Stats</h2>
      <p>Total coding time: {data.human_readable_total}</p>

      <h3>Top Languages</h3>
      <ul>
        {data.languages.map((lang) => (
          <li key={lang.name}>
            {lang.name}: {lang.percent}%
          </li>
        ))}
      </ul>

      <h3>Top Editors</h3>
      <ul>
        {data.editors.map((editor) => (
          <li key={editor.name}>
            {editor.name}: {editor.percent}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WakaTimeStats;
