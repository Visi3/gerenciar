export interface Transaction {
    id: string;
    amount: number;
    createdAt: Date;
  }
  
  export interface FirebaseContextType {
    income: Transaction[];
    expenses: Transaction[];
    addIncome: (amount: number) => Promise<void>;
    addExpense: (amount: number) => Promise<void>;
    editIncome: (id: string, amount: number) => Promise<void>;
    editExpense: (id: string, amount: number) => Promise<void>;
    deleteIncome: (id: string) => Promise<void>;
    deleteExpense: (id: string) => Promise<void>;
    totalIncome: number;
    totalExpenses: number;
    balance: number;
  }