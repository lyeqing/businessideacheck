'use client';
import React, { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount((count) => count + 1)}>Header{count}</div>;
};

export default Header;
