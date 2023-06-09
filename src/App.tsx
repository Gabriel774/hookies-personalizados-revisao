import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import useTableOrForm from "./hooks/useTableOrForm";

function App() {
  const { formVisible, showForm, showTable, tableVisible } =
    useTableOrForm("table");

  return (
    <div className="App">
      {tableVisible && <Table setVisible={showForm} />}
      {formVisible && <Form setVisible={showTable} />}
    </div>
  );
}

export default App;
