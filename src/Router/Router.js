import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Parent } from "../son-father/son-father";
import ShowTime from "../show-time/show-time";
const PrimaryLayout = () =>
  <div className="primary-layout">
    <header>测试</header>
    <ul>
      <li>
        <Link to="/">Time</Link>
      </li>
      <li>
        <Link to="/User">Parent</Link>
      </li>
    </ul>
    <main>
      <Route path="/" exact component={ShowTime} />
      <Route path="/user" component={Parent} />
    </main>
  </div>

const RouteDemo = () =>
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>;

  export default RouteDemo;