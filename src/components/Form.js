import "../App.css";
import { useState } from "react";
import { makeId } from "../util";

function Form(props) {
  const { openForm, addTask } = props;
  const [formData, setFormData] = useState({
    name: "",
    status: true,
  });

  function handleSubmit(e) {
    e.preventDefault();

    let newTask = {
      id: makeId(),
      name: e.target[0].value,
      status: e.target[1].value,
    };
    addTask(newTask);
  }
  function handleResetForm() {
    console.log("reeeeeeeeeeeeeeeds");
    setFormData({ name: "", status: false });
  }
  function handleOpenform() {
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
            <form onSubmit={handleSubmit}>
              {" "}
              <div className="panel-heading ">
                <div className="form-group">
                  <label>
                    <b>Tên :</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <label>
                  <b>Trạng Thái :</b>
                </label>
                <select
                  className="form-control"
                  name="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                  <button
                    value="status"
                    className="btn btn-warning"
                    type="submit"
                  >
                    <span className="fa fa-plus mr-2"></span>Lưu Lại
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleResetForm}
                  >
                    <span className="fa fa-close mr-2"></span>Hủy Bỏ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
