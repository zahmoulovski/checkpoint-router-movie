import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className="Darkmode-toggle">
      <button className='sun' type="button" onClick={darkMode.disable}>
      ☀️
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className='star' type="button" onClick={darkMode.enable}>
      ✨
      </button>
    </div>
  );
};

export default DarkModeToggle;