// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Search from "./components/Search";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "./app/features/showFormSlice";
function App() {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.showForm.value);

  const handleClickOpen = () => {
    if (showForm.status && showForm.action === "update") {
      dispatch(setShowForm({ status: true, action: "add" }));
    } else {
      dispatch(setShowForm({ status: !showForm.status, action: "add" }));
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <div className="row ">
            {showForm.status && <Form action={showForm.action} />}
            <div
              className={
                showForm.status
                  ? // ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                    // : "col-xs-12 col-sm-12 col-md-12 col-lg-8"
                    "col-8"
                  : "col-8"
              }
            >
              <button
                onClick={handleClickOpen}
                type="button"
                className=" btn btn-primary mb-4 mt-3 canchinh"
              >
                <i className="fa fa-plus mr-2 "></i> Thêm Công Việc
              </button>
              <div className="row mr-4 ">
                <Search />
                <Filter />
              </div>

              <div className="mt-4">
                <Table />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
