import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #6096b4;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;

const CloseIcon = styled(FaTimes)``;
const DropdownWrraper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({ toggole, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggole}>
      <Icon onClick={toggole}>
        <CloseIcon />
      </Icon>
      <DropdownWrraper>
        <DropdownMenu>
          {MenuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact US
          </Button>
        </BtnWrap>
      </DropdownWrraper>
    </DropdownContainer>
  );
};

export default Dropdown;
