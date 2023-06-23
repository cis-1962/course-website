/**
 * This is an insane hack to get syntax highlighting color themes to respect
 * light/dark mode. It uses React lazy loading to only load a stylesheet if the
 * client's color scheme matches.
 */

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
