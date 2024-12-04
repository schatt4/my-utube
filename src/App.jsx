import { useState } from "react";

import Header from "./assets/components/Header";
import Body from "./assets/components/Body";
import { Provider } from "react-redux";
import appStore from "./assets/store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./assets/components/MainContainer";
import Watch from "./assets/components/Watch";

function App() {
  const [count, setCount] = useState(0);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <Watch /> },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />

        {/* 
      -Header
      -logo
      -search
      -Sidebar
      -menu items
      -maincontainer
      -buttonList
      -videoContainer
      -videocard
      */}
      </div>
    </Provider>
  );
}

export default App;
