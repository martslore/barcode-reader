import "./App.css";

import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import "primereact/resources/themes/saga-orange/theme.css";
import Topbar from "./components/topbar/Topbar";
import Barcode from "./components/barcode/Barcode";
import { TableHistory } from "./components/tableHistory/TableHistory";
import { useState } from "react";

function App() {
  const [data, setData] = useState(
    localStorage.getItem("scanHistory")
      ? JSON.parse(localStorage.getItem("scanHistory"))
      : []
  );

  const deleteAll = () =>{
    debugger
    localStorage.setItem("scanHistory", JSON.stringify([]));
    setData([]);
  }

  return (
    <div className="flex flex-column h-screen">
      <header>
        <Topbar />
      </header>
      <main className="mt-3">
        <Barcode setData={setData} />
        <TableHistory data={data} deleteAll={deleteAll} />
      </main>
    </div>
  );
}

export default App;
