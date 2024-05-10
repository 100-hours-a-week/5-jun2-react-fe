import { useEffect, useRef, useState } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  function handleOutsideClick(e) {
    const { target } = e;
    if (isOpen && dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsOpen(false);
    }
  }

  useEffect(
    function clickProfileImg() {
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    },
    [isOpen, handleOutsideClick],
  );

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return { isOpen, dropdownRef, toggleDropdown };
};

export default useDropdown;
