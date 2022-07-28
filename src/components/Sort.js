/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";

function Sort() {
  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary "
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-2"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="" role="button" className="sort_selected">
                <span className="fa fa-sort-alpha-asc ">Tên A-Z</span>
              </a>
            </li>
            <li>
              <a role="button" className="">
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <hr className="mt-3 mb-3" />
            <li>
              <a role="button" className="">
                Trạng Thái Kích Hoạt
              </a>
            </li>
            <li>
              <a role="button" className="">
                Trạng Thái Ẩn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sort;