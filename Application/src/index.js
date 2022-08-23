import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Deprecated, should use ReactDOM.createRoot
// see [here](https://github.com/facebook/react/blob/main/CHANGELOG.md#deprecations)
// -z
ReactDOM.render(<App />, document.getElementById("app"));

// Should also wrap your entire app with <React.StrictMode> to get development time warnings. -z
