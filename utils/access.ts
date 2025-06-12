import type { AuthSession } from "../auth";

type AccessControlParams = {
  session?: AuthSession;
  // item: any;
  // listKey: string;
  // context: any;
};

export function allowAuthenticated({ session }: AccessControlParams) {
  return !!session;
}

export function allowAdmin({ session }: AccessControlParams) {
  return allowAuthenticated({ session }) && session?.data.role === "admin";
}

export function allowCR({ session }: AccessControlParams) {
  return allowAuthenticated({ session }) && session?.data.role === "CR";
}

export function allowAuthorized({ session }: AccessControlParams) {
  return (
    allowAuthenticated({ session }) &&
    (session?.data.role === "CR" || session?.data.role === "admin")
  );
}

export function allowCreator({ session }: AccessControlParams) {
  if (!allowAuthorized({ session })) return false;

  return true;
}
