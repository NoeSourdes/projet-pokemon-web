import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    createNow: boolean;
  }
  interface Session {
    user: User & {
      id: string;
      createNow: boolean;
    };
    token: {
      id: string;
      createNow: boolean;
    };
  }
}
