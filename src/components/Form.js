import { useRef, useEffect } from "react";
import "../App.css";
import { makeId } from "../util";
function Form(props) {
  const { handleShowForm, addData, isEdit, itemEdit, setIsEdit, editData } =
    props;

  const name = useRef();
  const status = useRef();
  // const id = useRef();

  useEffect(() => {
    if (isEdit) {
      name.current.value = itemEdit.name;
      status.current.value = itemEdit.status ? 1 : 0;
    } else {
      name.current.value = "";
      status.current.value = 1;
    }
  }, [isEdit, itemEdit]);
  function closedForm() {
    handleShowForm(false);
  }
  function clearForm() {
    // set value mặc định
    name.current.value = "";
    status.current.value = 1;
    handleShowForm(false);
    closedForm();
  }
  function handleSubmit(event) {
    //1 chặn load lại form
    event.preventDefault();
    //2 lấy data từ input name
    // dùng event
    // const status = event.target[1].value;
    // dùng ref
    //3 kiểm tra name có value mới thực thi
    if (name.current.value !== "") {
      //4 tạo item mới
      const newData =
        isEdit === false
          ? {
              id: makeId(),
              name: name.current.value,
              status: status.current.value === "1" ? true : false,
            }
          : {
              id: itemEdit.id,
              name: name.current.value,
              status: status.current.value === "1" ? true : false,
            };
      //5 truyền lên app
      if (isEdit) {
        editData(newData);
        setIsEdit(false);
      } else {
        addData(newData);
      }
      // clear data
      clearForm();
    }
  }
  return (
    <>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {isEdit === false ? "Thêm công việc" : "Cập nhật công việc"}
            <span
              onClick={closedForm}
              className="fa fa-times-circle text-right"
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                ref={name}
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <label>Trạng Thái :</label>
            <select ref={status} className="form-control" name="status">
              <option value={1}>Kích Hoạt</option>
              <option value={0}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-2"></span>Lưu Lại
              </button>
              &nbsp;
              <button
                onClick={clearForm}
                type="button"
                className="btn btn-danger"
              >
                <span className="fa fa-close mr-2"></span>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
