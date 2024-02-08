'use client'
import { useState, useEffect } from "react";
export const useLocalStorage = (key, defaultValue) => {
  const getStorageValue = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : defaultValue;
    }
  };
  const [value, setValue] = useState(getStorageValue());
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isMounted]);
  return [value, setValue];
};
