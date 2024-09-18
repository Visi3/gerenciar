import React, { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';

const Income = () => {
  const { addIncome } = useFirebase();
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addIncome(amount);
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Receita</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Income;