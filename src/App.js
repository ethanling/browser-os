import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppsDataProvider } from "./context/AppsDataContext";
import LoadingView from "./components/LoadingView";
import Desktop from "./components/Desktop";

// Apps as Pages
const Blank = lazy(() => import("./apps/Blank/index.js"));
const About = lazy(() => import("./apps/About/index.js"));
const Twitter = lazy(() => import("./apps/Twitter/index.js"));
const Github = lazy(() => import("./apps/Github/index.js"));
const Photos = lazy(() => import("./apps/Photos/index.js"));
const Spotify = lazy(() => import("./apps/Spotify/index.js"));
const Settings = lazy(() => import("./apps/Settings/index.js"));

export default function App() {
    return (
        <Router>
            <AppsDataProvider>
                <Desktop>
                    <Suspense fallback={<LoadingView />}>
                        <Switch>
                            <Route exact path="/" component={Blank} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/twitter" component={Twitter} />
                            <Route exact path="/github" component={Github} />
                            <Route exact path="/photos" component={Photos} />
                            <Route exact path="/spotify" component={Spotify} />
                            <Route
                                exact
                                path="/settings"
                                component={Settings}
                            />
                        </Switch>
                    </Suspense>
                </Desktop>
            </AppsDataProvider>
        </Router>
    );
}
