import React from 'react';
import {render} from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import UserAPIProvider from "./API/UserAPI";
import App from "./App";



render(
    <UserAPIProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserAPIProvider>,
  document.getElementById("root")
);
