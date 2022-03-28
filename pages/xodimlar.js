import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../container/header";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { QarzIndex } from "../styles/QarzIndex";

const Xodimlar = () => {
  const state = useSelector((state) => state.xodim.qarzData);
  const state2 = useSelector((state) => state.xodim.odamData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [edited, setedited] = useState(-1);

  const delet = (i) => {
    const action = { type: "DELETE_TASK_3", payload: i };
    dispatch(action);
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push(`/`);
    }
  });
  const edit = (i) => {
    setedited(i);
    setopen(true);
  };
  const see = (i) => {
    router.push(`/xodimlar/${i}`);
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push(`/`);
    }
  });
  const [filterstate, setfilterstate] = useState([]);
  const activeBut = (i, e) => {
    const action = { type: "ACTIVE_TASK_3", payload: i };
    dispatch(action);
    setfilterstate(e);
  };
  let filters = state.filter((i) => i.select == filterstate);

  let uqarz = 0;
  let uberildi = 0;
  for (let a of state) {
    uqarz = uqarz + Number(a.olingan);
    uberildi = uberildi + Number(a.berilgan);
  }

  let uqarz1 = 0;
  let uberildi1 = 0;
  for (let a of filters) {
    uqarz1 = uqarz1 + Number(a.olingan);
    uberildi1 = uberildi1 + Number(a.berilgan);
  }

  const dataSubmitodam = (e) => {
    e.preventDefault();
    const action = {
      type: "ADD_TASK_3",
      payload: {
        id: Date.now(),
        text: e.target.menu.value,
        act: false,
      },
    };
    dispatch(action);
    setopen2(false);
    e.target.reset();
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    if (edited >= 0) {
      const action = {
        type: "EDIT_TASK_3",
        payload: {
          val: {
            id: Date.now(),
            data: e.target.data.value,
            select: e.target.select.value,
            olingan: e.target.olingan.value,
            berilgan: e.target.berilgan.value,
            izoh: e.target.izoh.value,
          },
          index: edited,
        },
      };
      dispatch(action);
    } else {
      const action = {
        type: "ADD_TASK_3_QARZ",
        payload: {
          id: Date.now(),
          data: e.target.data.value,
          select: e.target.select.value,
          olingan: e.target.olingan.value,
          berilgan: e.target.berilgan.value,
          izoh: e.target.izoh.value,
        },
      };
      dispatch(action);
    }

    setopen(false);
    e.target.reset();
    setedited(-1);
  };

  return (
    <div>
      <Header />
      <QarzIndex>
        <div>
          <Modal isOpen={open}>
            <ModalBody>
              <form className="row" onSubmit={dataSubmit}>
                <div className="mb-1">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Sana:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="recipient-name"
                    name="data"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="work-name" className="col-form-label">
                    Kimga yozamiz:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="select"
                    required
                  >
                    {state2?.map((e, i) => (
                      <option key={i} value={e.text}>
                        {e.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="naqd" className="col-form-label">
                    Olingan qarz:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="naqd"
                    name="olingan"
                    placeholder="Qancha qarz oldingiz"
                    required
                  />
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="terminal" className="col-form-label">
                    Berilgan qarz:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="terminal"
                    name="berilgan"
                    placeholder="Qancha berildi"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Izoh:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="izoh"
                    placeholder="Qo'shimcha ma'lumotlar bo'lsa yozing"
                  ></textarea>
                </div>
                <h6 className="text-danger">
                  Diqqat! Qarz berilmasa yoki olinmasa 0 qo{"'"}ying
                </h6>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setopen(false);
                      setedited(-1);
                    }}
                  >
                    Orqaga
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Saqlash
                  </button>
                </div>
              </form>
            </ModalBody>
          </Modal>
          <Modal isOpen={open2}>
            <ModalBody>
              <form className="row" onSubmit={dataSubmitodam}>
                <div className="mb-1">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Menu nomini kiriting
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="menu"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setopen2(false);
                      setedited(-1);
                    }}
                  >
                    Orqaga
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Saqlash
                  </button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
        <div className="mb-5 d-flex button_2 justify-content-center">
          <Button
            onClick={() => setopen2(true)}
            className="Button m-2 bg-warning"
            variant="outlined"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            xodim qo{"'"}shish
          </Button>
          <Button
            onClick={() => setopen(true)}
            className="Button bg-warning m-2"
            variant="outlined"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            ish haqi qo{"'"}shish
          </Button>
        </div>
        <div className="box_qarz">
          <ul className="list-group">
            {state2?.map((e, i) => (
              <li
                key={i}
                className={e.act ? "list-group-item act" : "list-group-item"}
                onClick={() => activeBut(i, e.text)}
              >
                {e.text}
              </li>
            ))}
          </ul>
          <div className="box_table">
            <div className="pul container">
              <div className="box">
                <h4>summasi:</h4>
                <h5>{uqarz1}</h5>
              </div>
              <div className="box">
                <h4>berildi:</h4>
                <h5>{uberildi1}</h5>
              </div>
              <div className="box">
                <h4>qoldi:</h4>
                <h5>{Number(uqarz1) - Number(uberildi1)}</h5>
              </div>
            </div>
            <table className="table table-hover table-bordered text-center">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Sanasi</th>
                  <th>Summa</th>
                  <th>Berildi</th>
                  <th>Qoldi</th>
                  <th>Izoh</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filters?.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.data}</td>
                    <td>{e.olingan}</td>
                    <td>{e.berilgan}</td>
                    <td>{Number(e.olingan) - Number(e.berilgan)}</td>
                    <td>{e.izoh}</td>
                    <td>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                          <FontAwesomeIcon icon={faAlignJustify} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => see(e.id)}
                            className="bg-info text-white"
                          >
                            <FontAwesomeIcon icon={faEye} /> See
                          </DropdownItem>
                          <DropdownItem
                            className="bg-success text-white"
                            onClick={() => edit(i)}
                          >
                            <FontAwesomeIcon icon={faEdit} /> Edite
                          </DropdownItem>
                          <DropdownItem
                            className="Button bg-danger text-white"
                            onClick={() => delet(i)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </QarzIndex>
    </div>
  );
};

export default Xodimlar;
