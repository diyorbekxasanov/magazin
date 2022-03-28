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
  const state = useSelector((state) => state.reducer.savdoData);
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
          sana: <strong>{user?.data_date}</strong>
        </p>
        <p>
          Ismi: <strong>{user?.data_name}</strong>
        </p>
        <p>
          Naqd savdo: <strong>{user?.data_naqd}</strong> so{"'"}m
        </p>
        <p>
          Terminal savdo: <strong>{user?.data_terminal}</strong> so{"'"}m
        </p>
        <p>
          Jami savdo:
          <strong>
            {Number(user?.data_naqd) + Number(user?.data_terminal)}
          </strong>
          so{"'"}m
        </p>
        <p>
          Kelgan tovar: <strong>{user?.data_kelgan}</strong> so{"'"}m
        </p>
        <p>
          Kunlik rasxod: <strong>{user?.data_kunlik}</strong> so{"'"}m
        </p>
        <p>
          kassa:
          <strong>
            {Number(user?.data_naqd) +
              Number(user?.data_terminal) -
              Number(user?.data_kunlik)}
          </strong>{" "}
          so{"'"}m
        </p>
        <p>
          Izoh: <strong>{user?.data_comment}</strong>
        </p>

        <Button
          type="button"
          variant="outlined"
          className="me-3"
          onClick={() => router.push(`/savdo`)}
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
      </div>
    </Id>
  );
};

export default Info;
