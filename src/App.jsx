import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// lazy import — 해당 Route에 접근할 때만 컴포넌트 + CSS 로드
import RHome from "./components/RHome";
const RCounter = lazy(() => import("./components/RCounter"));
const TodoList = lazy(() => import("./components/TodoList"));
const NotFound = lazy(() => import("./components/NotFound"));
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<RHome />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/Counter" element={<RCounter />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
