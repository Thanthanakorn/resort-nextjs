'use client';

import { useEffect, useState, ReactNode } from 'react';

interface NoSSRProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Alternative: Suppress hydration warnings for specific components
export function suppressHydrationWarning(Component: any) {
  return function WrappedComponent(props: any) {
    return <Component {...props} suppressHydrationWarning />;
  };
}