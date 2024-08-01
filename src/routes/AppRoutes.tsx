import { useTranslation } from "react-i18next";
import { AppRoute } from "../types";
import { lazy, Suspense, useMemo } from "react";
import { Home, PageNotFound } from "../pages";
import {
  DIAGRAM_PATH,
  DIRECTORY_PATH,
  NOT_FOUND_PATH,
  ROOT_PATH,
} from "./urlPaths";
import { LoadingMsg } from "../components";

const DirectoryLazy = lazy(() => import("../pages/Directory"));
const DiagramLazy = lazy(() => import("../pages/Diagram"));

const AppRoutes = (): AppRoute[] => {
  const { t } = useTranslation();

  const appRoutes = useMemo(
    () => [
      {
        path: ROOT_PATH,
        element: <Home />,
      },
      {
        path: DIRECTORY_PATH,
        name: t("pages.directory.routeName"),
        element: (
          <Suspense fallback={<LoadingMsg />}>
            <DirectoryLazy />
          </Suspense>
        ),
      },
      {
        path: DIAGRAM_PATH,
        name: t("pages.diagram.routeName"),
        element: (
          <Suspense fallback={<LoadingMsg />}>
            <DiagramLazy />
          </Suspense>
        ),
      },
      {
        path: NOT_FOUND_PATH,
        element: <PageNotFound />,
      },
    ],
    [t]
  );

  return appRoutes;
};

export default AppRoutes;
