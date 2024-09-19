import React from 'react';
import { useFirebase } from '../context/FirebaseContext';
import IncomeList from '../components/Incomelist';
import ExpenseList from '../components/Expenseslist';

const Dashboard = () => {
  const { totalIncome, totalExpenses, balance } = useFirebase();

  return (
    <div>
      <h2>Resumo Financeiro</h2>
      <p>Renda Total: R$ {totalIncome}</p>
      <p>Despesas Totais: R$ {totalExpenses}</p>
      <p>Saldo Restante: R$ {balance}</p>
      <br/>
      <br/>
      <IncomeList/>
      <ExpenseList/>
    </div>
  );
};

export default Dashboard;