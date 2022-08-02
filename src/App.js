import "./App.css";
import Form from "./components/Form";
import Find from "./components/Find";
import Sort from "./components/Sort";
import Table from "./components/Table";
import { useState } from "react";
function App() {
  const defaultValue = JSON.parse(localStorage.getItem("data"));
  const [show, setShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(defaultValue || []);
  const [isEdit, setIsEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState();
  const [valueSort, setValueSort] = useState();

  function handleShowForm(value) {
    setShow(value);
    setIsEdit(false);
  }
  // function truyền xuống để hứng data truyền lên
  // function addData(newData) {
  //   //6 hứng data từ form
  //   // console.log("newData", data);
  //   //7 set lại data mới
  //   setIsEdit(false);
  //   setData([...data, newData]);
  //   setIsLoaded(true);
  // }
  function handleData(newData, type) {
    //6 hứng data từ form
    //7 set lại data mới
    setData([...data, newData]);
    if (type) {
      const newDataResult = [];
      data.forEach((item) => {
        if (item.id !== newData.id) newDataResult.push(item);
        else {
          newDataResult.push(newData);
        }
      });
      setData(newDataResult);
      localStorage.setItem("data", JSON.stringify(newDataResult));
    } else {
      setData([...data, newData]);
      localStorage.setItem("data", JSON.stringify([...data, newData]));
    }
  }
  function removeItem(id) {
    const newData = [];
    data.forEach((item) => {
      if (item.id !== id) newData.push(item);
    });
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  function editItem(item) {
    setIsEdit(true);
    setItemEdit(item);
    setShow(true);
  }

  function editData(newData) {
    const dataEdit = [...data];
    const indexEdit = data.findIndex((item) => item.id === newData.id);
    dataEdit[indexEdit] = newData;
    setData(dataEdit);
    localStorage.setItem("data", JSON.stringify(dataEdit));

    // setIsLoaded(true);
  }

  function findItemName(value) {
    const oldData = JSON.parse(localStorage.getItem("data"));
    // console.log(value);
    if (value !== "") {
      const newData = oldData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setData(newData);
    } else {
      setData(oldData);
    }
  }

  function sortItem(value) {
    let newData;
    if (value === "sortAlphaAsc") {
      newData = data.sort((a, b) => a.name.localeCompare(b.name));
      setData([...newData]);
    } else if (value === "sortAlphaDesc") {
      newData = data.sort((a, b) => b.name.localeCompare(a.name));
      setData([...newData]);
    } else if (value === "sortStatusActive") {
      const statusActive = data.filter((item) => item.status === true);
      const statusHidden = data.filter((item) => item.status === false);
      newData = [...statusActive, ...statusHidden];
      setData(newData);
    } else if (value === "sortStatusHidden") {
      const statusActive = data.filter((item) => item.status === true);
      const statusHidden = data.filter((item) => item.status === false);
      newData = [...statusHidden, ...statusActive];
      setData(newData);
    }
  }

  function findItemStatus(value) {
    const oldData = JSON.parse(localStorage.getItem("data"));
    if (value !== "-1") {
      const valueStatus = value === "1" ? true : false;
      const newData = oldData.filter((item) => item.status === valueStatus);
      setData(newData);
    } else {
      setData(oldData);
    }
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
              // addData={addData}
              handleData={handleData}
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
              <Find
                findItemName={findItemName}
                // findItemStatus={findItemStatus}
              />
              <Sort
                sortItem={sortItem}
                valueSort={valueSort}
                setValueSort={setValueSort}
              />
            </div>
            <Table
              data={data}
              setIsLoaded={setIsLoaded}
              removeItem={removeItem}
              editItem={editItem}
              findItemName={findItemName}
              findItemStatus={findItemStatus}
              valueSort={valueSort}
              sortItem={sortItem}
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
