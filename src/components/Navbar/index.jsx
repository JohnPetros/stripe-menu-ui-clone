import { Container, DropdownStyles } from "./styles";
import { DropdownOption } from "../DropdownOption";
import { Products } from "../Content";
import { Developers } from "../Content";
import { Company } from "../Content";

function Navbar() {
  return (
    <DropdownStyles>
      <Container>
        <ul>
          <li className="dropdown-option">
            <DropdownOption name="Produtos" content={<Products />} />
          </li>
          <li className="dropdown-option">
            <DropdownOption name="Desenvolvedores" content={<Developers />} />
          </li>
          <li className="dropdown-option">
            <DropdownOption name="Empresa" content={<Company />} />
          </li>
        </ul>
      </Container>
    </DropdownStyles>
  );
}

export default Navbar;
