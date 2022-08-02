import "../App.css";

function ItemTable(props) {
  const { item, index, removeItem, editItem, editData } = props;
  function removeItemComponent() {
    removeItem(item.id);
  }

  function editItemComponent() {
    editItem(item);
  }
  function handleChangeStatus() {
    const newData = { ...item, status: !item.status };
    editData(newData);
  }

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span
            className={
              item.status
                ? "btn btn-primary text-light py-1 px-3"
                : "btn btn-danger text-light py-1 px-3"
            }
            onClick={() => handleChangeStatus(item.id)}
          >
            {item.status ? "Kích Hoạt" : "Ẩn"}
          </span>

          {/* <div onClick={() => handleChangeStatus(item.id)}>
            {item.status === "1" ? (
              <button className="btn btn-primary text-light py-1 px-3">
                Kích hoạt
              </button>
            ) : (
              <button className="btn btn-danger text-light py-1 px-3">
                Ẩn
              </button>
            )}
          </div> */}
        </td>

        <td className="text-center">
          <button
            onClick={editItemComponent}
            type="button"
            className="btn btn-warning"
          >
            <span className="fa fa-pencil mr-2"></span>Sửa
          </button>
          &nbsp;
          <button
            onClick={removeItemComponent}
            type="button"
            className="btn btn-danger"
          >
            <span className="fa fa-trash mr-2"></span>Xóa
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemTable;
