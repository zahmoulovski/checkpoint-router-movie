import useDarkMode from 'use-dark-mode';

const DarkModeStatus = () => {
  const { value } = useDarkMode(true);

  return value ? 'Darkmode' : 'Lightmode';
};

export default DarkModeStatus;