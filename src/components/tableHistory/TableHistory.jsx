import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export const TableHistory = ({ data, deleteAll}) => {
  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Storico letture</span>
      <Button
        icon="pi pi-trash"
        rounded
        aria-label="Delete all"
        severity="danger"
        onClick= {deleteAll}
      />
    </div>
  );

  return (
    <DataTable
      value={data}
      header={header}
      tableStyle={{ minWidth: "60rem" }}
      emptyMessage="Nessuna scansione"
    >
      <Column field="type" header="Tipo barcode"></Column>
      <Column field="value" header="Valore"></Column>
      <Column field="date" header="Data scansione"></Column>
    </DataTable>
  );
};
