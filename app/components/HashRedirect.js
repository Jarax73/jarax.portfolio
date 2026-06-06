"use client";

import { useEffect } from "react";

export default function HashRedirect({ hash }) {
  useEffect(() => {
    window.location.replace(`/${hash}`);
  }, [hash]);

  return null;
}
