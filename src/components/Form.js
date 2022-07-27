import "../App.css";
import { GlobalText } from "../context/GlobalState";
import { useContext, useState } from "react";
import { makeId } from "../util";

function Form(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);

  const { openForm } = props;
  const { addTask } = useContext(GlobalText);
  // console.log("props", props);

  function handleSubmit() {
    let newTask = {
      id: makeId(),
      name: name,
      status: status,
    };
    if (name !== "") {
      addTask(newTask);
      setName("");
      setStatus(false);
    }
  }
  function handleOpenform() {
    // console.log("here");
    openForm();
  }
  return (
    <>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm Công Việc
            <span
              onClick={handleOpenform}
              className="fa fa-times-circle text-right"
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <div className="panel panel-default">
            <div className="panel-heading ">
              <div className="form-group">
                <label>
                  <b>Tên :</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label>
                <b>Trạng Thái :</b>
              </label>
              <select
                className="form-control"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button className="btn btn-warning" onClick={handleSubmit}>
                  <span className="fa fa-plus mr-2"></span>Lưu Lại
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleOpenform}
                >
                  <span className="fa fa-close mr-2"></span>Hủy Bỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
