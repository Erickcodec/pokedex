import { useAuth } from "@/hooks/useAuth";
import { LoadingPage } from "@/pages/Loading";
import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { children } = props;
  const { isAuthenticated, loading } = useAuth();

  if (loading == undefined || loading) {
    return <LoadingPage show={loading} />;
  }

  return (
    <>{isAuthenticated ? <>{children}</> : <Navigate to="home" replace />}</>
  );
};
