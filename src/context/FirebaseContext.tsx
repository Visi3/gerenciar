import React, { createContext, useContext, ReactNode } from 'react';
import useTransactions from '../hooks/useTransactions';
import { FirebaseContextType } from '../firebase/types';

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const {
    income,
    expenses,
    addIncome,
    addExpense,
    editIncome,
    editExpense,
    deleteIncome,
    deleteExpense,
    totalIncome,
    totalExpenses,
    balance
  } = useTransactions();

  return (
    <FirebaseContext.Provider value={{
      income,
      expenses,
      addIncome,
      addExpense,
      editIncome,
      editExpense,
      deleteIncome,
      deleteExpense,
      totalIncome,
      totalExpenses,
      balance
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext };