import React, { useState } from "react";
import { Card } from "primereact/card";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { formatDate } from "../../utils/dateFormatter";

const Barcode = ({ setData }) => {
  const [lastRead, setLastRead] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <Card title="Ultima lettura">
      <div className="flex flex-column justify-content-center align-items-center">
        <div className="my-3">
          {lastRead
            ? "È stato letto il valore: " + lastRead
            : ""}
        </div>

        <Button
          className="max-w-18rem"
          label="Leggi barcode"
          icon="pi pi-barcode"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="Lettura barcode"
          visible={visible}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <Scanner
            onScan={(result) => {
              if (result.length > 0) {
                let history = [];
                if (localStorage.getItem("scanHistory")) {
                  history = JSON.parse(localStorage.getItem("scanHistory"));
                }
                const barcodeInfo = result[0];
                setVisible(false);
                setLastRead(barcodeInfo.rawValue);
                let historyRecord = {
                  type: barcodeInfo.format,
                  value: barcodeInfo.rawValue,
                  date: formatDate(new Date()),
                };
                history.push(historyRecord);
                localStorage.setItem("scanHistory", JSON.stringify(history));
                setData(history);
              }
            }}
            formats={[
              "aztec",
              "code_128",
              "code_39",
              "code_93",
              "codabar",
              "databar",
              "databar_expanded",
              "data_matrix",
              "dx_film_edge",
              "ean_13",
              "ean_8",
              "itf",
              "maxi_code",
              "micro_qr_code",
              "pdf417",
              "qr_code",
              "rm_qr_code",
              "upc_a",
              "upc_e",
              "linear_codes",
              "matrix_codes",
              "unknown",
            ]}
            allowMultiple={true}
            styles={{ container: { width: "300px" } }}
          />
        </Dialog>
      </div>
    </Card>
  );
};

export default Barcode;
