import "./App.css";
import Form from "./components/Form";
import Find from "./components/Find";
import Sort from "./components/Sort";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState();

  function handleShowForm(value) {
    setShow(value);
    setIsEdit(false);
  }
  // function truyền xuống để hứng data truyền lên
  function addData(newData) {
    //6 hứng data từ form
    //7 set lại data mới
    setIsEdit(false);
    setData([...data, newData]);
    setIsLoaded(true);
  }

  function editData(newData) {
    const indexEdit = data.findIndex((item) => item.id === newData.id);
    const newDataRender = [...data];
    newDataRender[indexEdit] = newData;
    setData(newDataRender);
    setIsLoaded(true);
  }

  function removeItem(id) {
    const newData = [];
    data.forEach((item) => {
      if (item.id !== id) newData.push(item);
    });
    setData(newData);
  }

  function editItem(item) {
    setIsEdit(true);
    setItemEdit(item);
    setShow(true);
  }
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="head">Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={show ? "col-4" : "d-none"}>
            <Form
              handleShowForm={handleShowForm}
              addData={addData}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              itemEdit={itemEdit}
              editData={editData}
            />
          </div>
          <div className={show ? "col-8" : "col-12"}>
            <button
              onClick={() => handleShowForm(true)}
              // onClick={handleShowForm}
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-2"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Find />
              <Sort />
            </div>
            <Table
              data={data}
              setIsLoaded={setIsLoaded}
              removeItem={removeItem}
              editItem={editItem}
              isLoaded={isLoaded}
              editData={editData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
