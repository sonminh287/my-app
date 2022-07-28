import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Search from "./components/Search";
import Sort from "./components/Sort";
import { useState } from "react";
import { makeId } from "./util";

const dataRender = [
  {
    id: makeId(),
    name: "tung",
    status: true,
  },
  {
    id: makeId(),
    name: "huyen",
    status: false,
  },
  {
    id: makeId(),
    name: "vinh",
    status: true,
  },
  {
    id: makeId(),
    name: "giang",
    status: true,
  },
  {
    id: makeId(),
    name: "Minh Son",
    status: true,
  },
];

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(dataRender);
  function openForm() {
    setShow(!show);
  }
  function addTask(newTask) {
    setData([...data, newTask]);
  }
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="heading">Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={show ? "col-4" : "d-none"}>
          <Form openForm={openForm} addTask={addTask} />
        </div>
        <div className={show ? "col-8" : "col-12"}>
          <button onClick={openForm} type="button" className="btn btn-primary">
            <span className="fa fa-plus mr-2"></span>Thêm Công Việc
          </button>
          <div className="row mt-15">
            <Search />
            <Sort />
          </div>
          <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Table dataRender={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
