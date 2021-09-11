import React from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/styles";
import { TransactionsTable } from "./components/TransactionsTable";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
