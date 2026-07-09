import React from 'react';
import clsx from 'clsx';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import {ThemeClassNames, useColorMode} from '@docusaurus/theme-common';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';


function NavbarMobileSidebarPanel({children, inert}: {children: React.ReactNode; inert: boolean}) {
  return (
    <div
      className={clsx(ThemeClassNames.layout.navbar.mobileSidebar.panel, 'navbar-sidebar__item menu')}
      inert={inert}>
      {children}
    </div>
  );
}

const socialLinks = [
  {
    href: 'https://discord.gg/evyyCMYPnw',
    label: 'Discord',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.056c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/PineStake',
    label: 'X (Twitter)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Pine-Stake',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    ),
  },
];

function MobileDrawerFooter() {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <div className="navbar-sidebar__footer-row">
      <div className="navbar-sidebar__footer-social">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label={item.label}>
            {item.icon}
          </a>
        ))}
      </div>
      <button
        type="button"
        className="clean-btn navbar-icon-link"
        aria-label="Switch between dark and light mode"
        onClick={() => setColorMode(isDark ? 'light' : 'dark')}>
        {isDark ? (
          <IconLightMode width={20} height={20} />
        ) : (
          <IconDarkMode width={20} height={20} />
        )}
      </button>
    </div>
  );
}

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: {
  header: React.ReactNode;
  primaryMenu: React.ReactNode;
  secondaryMenu: React.ReactNode;
}) {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <div className={clsx(ThemeClassNames.layout.navbar.mobileSidebar.container, 'navbar-sidebar')}>
      {header}
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <NavbarMobileSidebarPanel inert={secondaryMenuShown}>{primaryMenu}</NavbarMobileSidebarPanel>
        <NavbarMobileSidebarPanel inert={!secondaryMenuShown}>{secondaryMenu}</NavbarMobileSidebarPanel>
      </div>
      <MobileDrawerFooter />
    </div>
  );
}
