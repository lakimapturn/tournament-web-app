import { Nav, NavItem, NavLink } from "reactstrap";

const Tabbar = (props) => {
  return (
    <Nav tabs justified>
      {props.tabs.map((tab) => {
        return (
          <NavItem key={tab.id}>
            <NavLink
              active={props.activeTabId === tab.id}
              onClick={() => props.onTabChange(tab.id)}
            >
              {tab.name}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default Tabbar;
