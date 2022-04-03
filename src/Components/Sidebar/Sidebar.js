import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <nav id="sidebar" className={`${props.isSidebarCollapsed && "active"}`}>
      <div className="sidebar-header">
        <h3>Categories</h3>
        <strong>CG</strong>
      </div>

      <ul className="list-unstyled components">
        {props.categories.map((category) => {
          return (
            <li
              className={category.id === props.selectedCategory?.id && "active"}
            >
              <a onClick={() => props.onSelectCategory(category)}>
                U-{`${category.age}`}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
