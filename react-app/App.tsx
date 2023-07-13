import React from "react";
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      简单一个layout
      <div>
        <div>
          <Link to={"/test"}>test</Link>
        </div>
        <div>
          <Link to={"/test1"}>test1</Link>
        </div>
        <div>
          <Link to={"/test2"}>test2</Link>
        </div>
        <div>
          <Link to={"/test3"}>test3</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
