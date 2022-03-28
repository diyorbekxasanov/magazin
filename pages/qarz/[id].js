import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Id = styled.div`
  width: 300px;
  margin: 150px auto 0 auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Info = () => {
  const router = useRouter();
  const i = router.query.id;
  const state = useSelector((state) => state.qarz.qarzData);
  let user = state.find((item) => item.id == i);
  const yuklash = () => {
    document.getElementById("download").addEventListener("click", () => {
      const invoice = document.getElementById("invoice");
      var opt = {
        margin: 1,
        filename: "qarz.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(invoice).set(opt).save();
    });
  };
  return (
    <Id>
      <div id="invoice">
        <p>
          sana: <strong>{user?.data}</strong>
        </p>
        <p>
          Ismi: <strong>{user?.select}</strong>
        </p>
        <p>
          Olingan: <strong>{user?.olingan}</strong> so{"'"}m
        </p>
        <p>
          Berilgan: <strong>{user?.berilgan}</strong> so{"'"}m
        </p>
        <p>
          Qoldi:
          <strong>{user?.olingan - user?.berilgan}</strong> so{"'"}m
        </p>
        <p>
          Izoh: <strong>{user?.izoh}</strong>
        </p>
      </div>
      <Button
        type="button"
        variant="outlined"
        className="me-3"
        onClick={() => router.push(`/qarzlar`)}
      >
        Orqaga
      </Button>
      <Button
        type="button"
        variant="outlined"
        id="download"
        onClick={yuklash}
        className="ms-2"
      >
        chopetish
      </Button>
    </Id>
  );
};

export default Info;
