import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cities from "./pages/Cities";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Payment from "./pages/Payment";
import Screens from "./pages/Screens";
import SelectSeat from "./pages/SelectSeat";
import MyTickets from "./pages/MyTickets";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Cities">
            <Cities />
          </Route>
          <Route path="/Screens">
            <Screens />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/SelectSeat">
            <SelectSeat />
          </Route>
          <Route path="/Payment">
            <Payment />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/me">
            <MyTickets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
