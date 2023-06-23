'use client';

import React, { useEffect, useState } from 'react';

const LightTheme = React.lazy(() => import('./light-theme'));
const DarkTheme = React.lazy(() => import('./dark-theme'));

export function ThemeSelector() {
  const [isDark, setIsDark] = useState<boolean | undefined>();

  useEffect(() => {
    const funny = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (evt: MediaQueryListEvent) => setIsDark(evt.matches);
    setIsDark(funny.matches);
    funny.addEventListener('change', onChange);

    return () => funny.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      {isDark === true && <DarkTheme />}
      {isDark === false && <LightTheme />}
    </>
  );
}
