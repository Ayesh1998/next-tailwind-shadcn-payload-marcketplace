import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "http://localhost";
  }),
});

export type AppRouter = typeof appRouter;