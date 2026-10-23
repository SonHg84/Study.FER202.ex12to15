import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
export default function Theme() {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="p-4 rounded"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <p>Theme: {themeName}</p>
      <button
        className="btn border border-dark"
        onClick={toggleTheme}
        style={{ background: theme.background, color: theme.foreground }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
