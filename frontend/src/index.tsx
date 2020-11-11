import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { VideoForm } from "./components/videos/VideoForm";
import { VideoList } from "./components/videos/VideoList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer/>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
