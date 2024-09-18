import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { Transaction } from '../firebase/types';

const useTransactions = () => {
  const [income, setIncome] = useState<Transaction[]>([]);
  const [expenses, setExpenses] = useState<Transaction[]>([]);

  useEffect(() => {
    const unsubscribeIncome = onSnapshot(collection(db, 'income'), (snapshot) => {
      const incomeData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Transaction));
      setIncome(incomeData);
    });

    const unsubscribeExpenses = onSnapshot(collection(db, 'expenses'), (snapshot) => {
      const expensesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Transaction));
      setExpenses(expensesData);
    });

    return () => {
      unsubscribeIncome();
      unsubscribeExpenses();
    };
  }, []);

  const addIncome = async (amount: number) => {
    await addDoc(collection(db, 'income'), { amount, createdAt: new Date() });
  };

  const addExpense = async (amount: number) => {
    await addDoc(collection(db, 'expenses'), { amount, createdAt: new Date() });
  };

  const editIncome = async (id: string, amount: number) => {
    const incomeRef = doc(db, 'income', id);
    await updateDoc(incomeRef, { amount });
  };

  const editExpense = async (id: string, amount: number) => {
    const expenseRef = doc(db, 'expenses', id);
    await updateDoc(expenseRef, { amount });
  };

  const deleteIncome = async (id: string) => {
    const incomeRef = doc(db, 'income', id);
    await deleteDoc(incomeRef);
  };

  const deleteExpense = async (id: string) => {
    const expenseRef = doc(db, 'expenses', id);
    await deleteDoc(expenseRef);
  };

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpenses;

  return {
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
  };
};

export default useTransactions;