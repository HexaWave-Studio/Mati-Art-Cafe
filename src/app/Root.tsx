import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import LoadingScreen from "./components/LoadingScreen";
import CursorFollow from "./components/CursorFollow";
import ScrollProgress from "./components/ScrollProgress";
import { useState, useEffect } from "react";

export default function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <CursorFollow />
      <ScrollProgress />
      <Navigation />
      <Outlet />
    </div>
  );
}
