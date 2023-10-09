import { DevRouter, HomeRouter } from "../routers";

export const APPS = [
  {
    subdomain: "www",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "dev",
    app: DevRouter,
    main: false,
  },
];
