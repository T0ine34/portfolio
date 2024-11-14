import { createContext } from 'react';

export const PageContext = createContext({ current: 'home', setCurrent: (value: string) => {} });