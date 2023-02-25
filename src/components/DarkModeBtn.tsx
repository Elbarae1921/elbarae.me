import React, { useEffect, useState } from 'react';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';

export const DarkModeBtn = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('darkmode', isDark);
  }, [isDark]);

  useEffect(() => {
    const isDarkModeOn = localStorage.getItem('darkmode') === 'true';
    setDark(isDarkModeOn);
  }, []);

  const toggleDarkMode = () => {
    setDark(!isDark);
    localStorage.setItem('darkmode', !isDark ? 'true' : 'false');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={'toggle-dark-mode' + (isDark ? ' dark' : '')}
    >
      <div className="btn-wrapper d-flex align-items-center">
        <div className="btn-text"></div>
        <div className="icon">
          <IoMoonSharp />
          <IoSunnySharp />
        </div>
      </div>
    </button>
  );
};
