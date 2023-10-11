const ActionDropdown = () => {
  return (
    <>
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 show"
        data-kt-menu="true"
        style={{
          zIndex: 107,
          position: "fixed",
          inset: "0px 0px auto auto",
          margin: 0,
          transform: "translate3d(-17.6px, 296.8px, 0px)",
        }}
        data-popper-placement="bottom-end"
      >
        <div className="menu-item px-3">
          <a
            href="/metronic8/demo34/../demo34/apps/user-management/users/view.html"
            className="menu-link px-3"
          >
            Edit
          </a>
        </div>
        <div className="menu-item px-3">
          <a
            href="#"
            className="menu-link px-3"
            data-kt-users-table-filter="delete_row"
          >
            Delete
          </a>
        </div>
      </div>


      
    </>
  );
};
export default ActionDropdown;
