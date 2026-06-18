import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

// Hub page removed. /services redirects to the first industry landing page.
export const Route = createFileRoute("/services")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/services") {
      throw redirect({ to: "/services/$slug", params: { slug: "hvac" } });
    }
  },
  component: () => <Outlet />,
});
