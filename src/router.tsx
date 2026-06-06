import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// 1. Define router context type (IMPORTANT)
export interface RouterContext {
  queryClient: QueryClient;
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,

    // 2. Provide context
    context: {
      queryClient,
    },

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};