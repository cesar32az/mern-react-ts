import { Container } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { VideoForm } from "./components/videos/VideoForm";
import { VideoList } from "./components/videos/VideoList";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/new-video" component={VideoForm} />
          <Route path="/" component={VideoList} />
        </Switch>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
