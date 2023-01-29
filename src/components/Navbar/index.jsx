import { Container, DropdownStyles } from "./styles";
import { DropdownOption } from "../DropdownOption";

function Navbar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li className="dropdown-option">
            <DropdownOption name="Produtos" content={() => <h1>Produtos</h1>} />
          </li>
          <li className="dropdown-option">
            <DropdownOption
              name="Desenvolvedores"
              content={() => <h1>Desenvolvedores</h1>}
            />
          </li>
          <li className="dropdown-option">
            <DropdownOption name="Empresa" content={() => <h1>Empresa</h1>} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default Navbar;
