//
// WakaTimeStats
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

// import React from "react";
import config from "../../gitprofile.config";

export default function WakaTimeStats() {
  if (!config.WakaTimeStats?.enabled) return null;

  return (
    <section id="wakatime-stats" style={{ marginBottom: "3rem" }}>
      <h2>My Coding Year in Review</h2>

      <iframe
        src={config.WakaTimeStats.url}
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "8px",
          overflow: "hidden"
        }}
        loading="lazy"
      />
    </section>
  );
}
