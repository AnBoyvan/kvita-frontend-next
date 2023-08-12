import { useTheme } from 'next-themes';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={styles.switcher}>
      <input
        type="checkbox"
        id="switcher"
        checked={theme === 'dark'}
        className={styles.switcherInput}
        onChange={toggleTheme}
      />
      <label
        htmlFor="switcher"
        className={styles.switcherLabel}
      ></label>
    </div>
  );
};

export default ThemeSwitcher;
