import { useContext } from 'react';
import {FirebaseContext} from '../context/FirebaseContext'; 


import { FirebaseContextType } from '../firebase/types'; 


export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};


export {};