import { Route, Routes } from "react-router-dom";
import { IRoute } from "./types/route.types";
import { AuthPage } from "./components/pages/auth";

const componentsPage: IRoute[] = [{ path: "signin", component: AuthPage }];

export default function App() {
  return (
    <Routes>
      {componentsPage.map((page) => (
        <Route
          key={`page${page.path}`}
          path={page.path}
          Component={page.component}
        />
      ))}
    </Routes>
  );
}
