import "../App.css";
import { useContext } from "react";
import { GlobalText } from "../context/GlobalState";

function ItemTable(props) {
  const { item, index } = props;
  const { deleteTask } = useContext(GlobalText);
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
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-2"></span>Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteTask(item.id)}
          >
            <span className="fa fa-trash mr-2"></span>Xóa
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemTable;
