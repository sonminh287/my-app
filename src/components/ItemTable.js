import "../App.css";

function ItemTable(props) {
  const { item, index, removeItem, editItem } = props;
  function removeItemComponent() {
    removeItem(item.id);
  }

  function editItemComponent() {
    editItem(item);
  }

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span className="label label-info">
            {item.status ? "Kích Hoạt" : "Ẩn"}
          </span>
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
