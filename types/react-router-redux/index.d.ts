// Type definitions for react-router-redux 5.0
// Project: https://github.com/reactjs/react-router-redux
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
//                 Shoya Tanaka <https://github.com/8398a7>
//                 Mykolas <https://github.com/mykolas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { History, Location, LocationDescriptor, LocationState, Path } from "history";
import * as React from "react";
import { match } from "react-router";
import { Dispatch, Middleware, Reducer, Store } from "redux";

export interface ConnectedRouterProps<State> {
    children?: React.ReactNode;
    store?: Store<State> | undefined;
    history: History;
}
export class ConnectedRouter<State> extends React.Component<ConnectedRouterProps<State>> {}

export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE";

export interface RouterState {
    location: Location | null;
}

export const routerReducer: Reducer<RouterState>;

export const CALL_HISTORY_METHOD = "@@router/CALL_HISTORY_METHOD";

export function push(location: LocationDescriptor, state?: LocationState): RouterAction;
export function replace(location: LocationDescriptor, state?: LocationState): RouterAction;
export function go(n: number): RouterAction;
export function goBack(): RouterAction;
export function goForward(): RouterAction;

export const routerActions: {
    push: typeof push;
    replace: typeof replace;
    go: typeof go;
    goBack: typeof goBack;
    goForward: typeof goForward;
};

export interface LocationActionPayload {
    method: string;
    args?: any[] | undefined;
}

export interface RouterAction {
    type: typeof CALL_HISTORY_METHOD;
    payload: LocationActionPayload;
}

export interface LocationChangeAction {
    type: typeof LOCATION_CHANGE;
    payload: Location & {
        props?: {
            match: {
                path: string;
                url: string;
                params: any;
                isExact: boolean;
            };
            location: Location;
            history: History;
        } | undefined;
    };
}

export function routerMiddleware(history: History): Middleware;

export function createMatchSelector(path: string): (state: { router: RouterState }) => match | null;
