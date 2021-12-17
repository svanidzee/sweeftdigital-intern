import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { FriendNavigationProvider } from "./utils/FriendNavigation/FriendNavigation";

ReactDOM.render(
  <FriendNavigationProvider>
    <App />
  </FriendNavigationProvider>,
  document.getElementById("root")
);
