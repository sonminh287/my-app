import "../App.css";

function Form(props) {
  const { openForm } = props;
  // console.log("props", props);
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
                <input type="text" className="form-control" name="name" />
              </div>
              <label>
                <b>Trạng Thái :</b>
              </label>
              <select className="form-control" name="status">
                <option value="true">Kích Hoạt</option>
                <option value="false">Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button className="btn btn-warning">
                  <span className="fa fa-plus mr-2"></span>Lưu Lại
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
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
