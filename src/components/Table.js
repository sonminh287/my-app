import "../App.css";
import ItemTable from "./ItemTable";

function Table({ dataRender }) {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" name="filterName" />
            </td>
            <td>
              <select className="form-control" name="filterStatus">
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {dataRender &&
            dataRender.map((item, index) => {
              return <ItemTable key={index} item={item} index={index} />;
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
