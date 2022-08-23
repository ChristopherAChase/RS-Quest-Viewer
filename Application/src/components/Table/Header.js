// Why isn't this file `Header.jsx`, it's just `.js`
import React from "react";

// Better name might be TableHeader.
// You have 2 files/components called `Header` right now. -z
const Header = () => (
  <thead>
    <tr>
      <th>Quest Name</th>
      <th>Difficulty</th>
      <th>Length</th>
      <th>Quest Points</th>
      <th>Is Members?</th>
    </tr>
  </thead>
);

export default Header;
