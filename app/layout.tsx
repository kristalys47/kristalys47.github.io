"use client";
import "./global.css";
import { useState, useEffect } from "react";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Ensures the component is mounted before rendering interactive elements
  }, []);

  if (!hasMounted) {
    return null}

  return (
    <html lang="en">
      <body>
          <main>
            {children}
          </main>

      </body>
    </html>
  )
}
