import { useState } from 'react';
import { ThemeContext, themes } from './ThemeContext';
export default function ThemeProvider({ children }) {
  // 1. State: Provider giữ tên theme và cung cấp theme/toggleTheme cho consumer.
  const [themeName, setThemeName] = useState('light');

  // 2. Handler: Toggle đổi light ↔ dark bằng functional update.
  function toggleTheme() {
    setThemeName((previous) => (previous === 'light' ? 'dark' : 'light'));
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <ThemeContext.Provider value={{ themeName, theme: themes[themeName], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
