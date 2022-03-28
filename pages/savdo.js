import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../container/header";
import { useRouter } from "next/router";
import { SavdoIndex } from "../styles/SavdoIndex";
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

const Savdo = () => {
  const state = useSelector((state) => state.reducer.savdoData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setopen] = useState(false);
  const [edited, setedited] = useState(-1);

  const delet = (i) => {
    const action = { type: "DELETE_TASK", payload: i };
    dispatch(action);
  };
  const edit = (i) => {
    setedited(i);
    setopen(true);
  };
  const see = (i) => {
    router.push(`/savdo/${i}`);
  };
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push(`/`);
    }
  });

  let naqt = 0;
  let terminal = 0;
  let tovar = 0;
  let rasxod = 0;
  for (let a of state) {
    naqt = naqt + Number(a.data_naqd);
    terminal = terminal + Number(a.data_terminal);
    tovar = tovar + Number(a.data_kelgan);
    rasxod = rasxod + Number(a.data_kunlik);
  }

  const dataSubmit = (e) => {
    e.preventDefault();
    if (edited >= 0) {
      const action = {
        type: "EDIT_TASK",
        payload: {
          val: {
            id: Date.now(),
            data_date: e.target.sana.value,
            data_name: e.target.name.value,
            data_naqd: e.target.naqtSavdo.value,
            data_terminal: e.target.terminalSavdo.value,
            data_kelgan: e.target.kelganTovar.value,
            data_kunlik: e.target.kunlikRasxod.value,
            data_comment: e.target.izoh.value,
          },
          index: edited,
        },
      };
      dispatch(action);
    } else {
      const action = {
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          data_date: e.target.sana.value,
          data_name: e.target.name.value,
          data_naqd: e.target.naqtSavdo.value,
          data_terminal: e.target.terminalSavdo.value,
          data_kelgan: e.target.kelganTovar.value,
          data_kunlik: e.target.kunlikRasxod.value,
          data_comment: e.target.izoh.value,
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
      <SavdoIndex>
        <div className="pul container">
          <div className="box">
            <h2>naqt:</h2>
            <h3>{naqt}</h3>
          </div>
          <div className="box">
            <h2>terminal:</h2>
            <h3>{terminal}</h3>
          </div>
          <div className="box">
            <h2>jami:</h2>
            <h3>{Number(naqt) + Number(terminal)}</h3>
          </div>
          <div className="box">
            <h2>tovar:</h2>
            <h3>{tovar}</h3>
          </div>
          <div className="box">
            <h2>rasxod:</h2>
            <h3>{rasxod}</h3>
          </div>
          <div className="box">
            <h2>kassa:</h2>
            <h3>{Number(naqt) + Number(terminal) - Number(rasxod)}</h3>
          </div>
        </div>
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
                    name="sana"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="work-name" className="col-form-label">
                    Ismingiz:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="work-name"
                    name="name"
                    placeholder="Ismingizni yozing"
                    required
                  />
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="naqd" className="col-form-label">
                    Naqd savdo:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="naqd"
                    name="naqtSavdo"
                    placeholder="Naqd savdoni kiriting"
                    required
                  />
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="terminal" className="col-form-label">
                    Terminal savdo:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="terminal"
                    name="terminalSavdo"
                    placeholder="Terminal savdoni kiriting"
                    required
                  />
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="tovar" className="col-form-label">
                    Kelgan tovar:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="tovar"
                    name="kelganTovar"
                    placeholder="Kelgan tovarni kiriting"
                    required
                  />
                </div>
                <div className="mb-1 col-6">
                  <label htmlFor="rasxod" className="col-form-label">
                    Kunlik rasxod:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rasxod"
                    name="kunlikRasxod"
                    placeholder="Rasxod bo'ldimi?(kiriting)"
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
                    placeholder="Qo'shimcha ma'lumotlar bo'lsa yozing (Rasxodingiz sabablari va boshqalar)"
                    name="izoh"
                  ></textarea>
                </div>
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
        </div>
        <div className="mb-5 d-flex justify-content-center">
          <Button
            onClick={() => setopen(true)}
            className="Button bg-warning"
            variant="outlined"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            savdo qo{"'"}shish
          </Button>
        </div>
        <div className="box_table">
          <table className="table table-hover table-bordered text-center">
            <thead>
              <tr>
                <th>№</th>
                <th>Sanasi</th>
                <th>Naqd savdo</th>
                <th>Terminal savdo</th>
                <th>Kunlik savdo</th>
                <th>Kelgan tovar</th>
                <th>Kunlik rasxod</th>
                <th>Kassa</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.map((e, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.data_date}</td>
                  <td>{e.data_naqd}</td>
                  <td>{e.data_terminal}</td>
                  <td>{Number(e.data_naqd) + Number(e.data_terminal)}</td>
                  <td>{e.data_kelgan}</td>
                  <td>{e.data_kunlik}</td>
                  <td>
                    {Number(e.data_naqd) +
                      Number(e.data_terminal) -
                      Number(e.data_kunlik)}
                  </td>
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
      </SavdoIndex>
    </div>
  );
};

export default Savdo;
