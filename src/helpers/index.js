import { getGQL } from "./getGQL"
import {createMemoryHistory, createBrowserHistory} from 'history';
import { createBrowserRouter } from 'react-router-dom';
import { useMemo } from "react";

export const history     = createBrowserHistory();

