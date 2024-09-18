import React, { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';

const Expenses = () => {
  const { addExpense } = useFirebase();
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExpense(amount);
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Despesa</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Expenses;