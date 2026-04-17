import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

const SplashPage = lazy(() => import("./pages/Splash"));
const OnboardingPage = lazy(() => import("./pages/Onboarding"));
const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));
const ReelsPage = lazy(() => import("./pages/Reels"));
const FriendsPage = lazy(() => import("./pages/Friends"));
const ChatPage = lazy(() => import("./pages/Chat"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const NotificationsPage = lazy(() => import("./pages/Notifications"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

const splashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: SplashPage,
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  component: OnboardingPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// Layout-wrapped routes
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/home",
  component: HomePage,
});

const reelsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/reels",
  component: ReelsPage,
});

const friendsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/friends",
  component: FriendsPage,
});

const chatRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/chat",
  component: ChatPage,
});

const profileRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/profile",
  component: ProfilePage,
});

const notificationsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/notifications",
  component: NotificationsPage,
});

const routeTree = rootRoute.addChildren([
  splashRoute,
  onboardingRoute,
  loginRoute,
  layoutRoute.addChildren([
    homeRoute,
    reelsRoute,
    friendsRoute,
    chatRoute,
    profileRoute,
    notificationsRoute,
  ]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
