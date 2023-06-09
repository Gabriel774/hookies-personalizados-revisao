import { useState } from "react";

/*
Hooks personalizados permitem a reutilização de lógicas que
necessitam de outros hooks sem necessariamente 
precisar de um componente React
*/

export default function useTableOrForm(initial: "table" | "form") {
  const [visible, setVisible] = useState<"table" | "form">(initial);

  return {
    tableVisible: visible === "table",
    formVisible: visible === "form",
    showTable: () => setVisible("table"),
    showForm: () => setVisible("form"),
  };
}
