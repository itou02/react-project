import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/GlobalLayout";


// 要建新頁面就來這邊做
function Router() {
  return (
    <BrowserRouter>
    {/* 新版叫做routes 舊版叫做switch */}
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="login" element={<Login />} />  {/* 前面是路徑 後面是頁面 */}
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;