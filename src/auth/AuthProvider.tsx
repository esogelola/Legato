import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext<User | null>(null);

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [user] = useAuth();

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
