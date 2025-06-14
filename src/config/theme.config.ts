export const themeConfig = {
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['IBM Plex Mono', 'monospace'],
  },
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    dark: {
      background: '#0a0a0a',
      card: '#1a1a1a',
      border: '#2a2a2a',
    },
    light: {
      background: '#fafafa',
      card: '#ffffff',
      border: '#e5e5e5',
    },
  },
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
}
