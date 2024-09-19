import React, { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';

const IncomeList = () => {
  const { income, editIncome, deleteIncome } = useFirebase();
  const [editMode, setEditMode] = useState<string | null>(null);
  const [newAmount, setNewAmount] = useState<number>(0);

  const handleEdit = (id: string, amount: number) => {
    setEditMode(id);
    setNewAmount(amount);
  };

  const handleSave = async (id: string) => {
    await editIncome(id, newAmount);
    setEditMode(null);
  };

  return (
    <div>
      <h2>Receitas</h2>
      <ul>
        {income.map((transaction) => (
          <li key={transaction.id}>
            {editMode === transaction.id ? (
              <input
                type="number"
                value={newAmount}
                onChange={(e) => setNewAmount(Number(e.target.value))}
              />
            ) : (
              <span>{transaction.amount}</span>
            )}
            <button onClick={() => handleEdit(transaction.id, transaction.amount)}>Editar</button>
            <button onClick={() => deleteIncome(transaction.id)}>Excluir</button>
            {editMode === transaction.id && (
              <button onClick={() => handleSave(transaction.id)}>Salvar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;