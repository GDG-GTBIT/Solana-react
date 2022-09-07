import Dropdown from "react-bootstrap/Dropdown";

function Sort() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Spooky</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Winter</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Extra</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sort;
