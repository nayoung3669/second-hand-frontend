import { css, styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import theme from "../lib/styles/Theme";

const Select = ({
  w,
  value,
  options,
  openSelect,
  placeholder,
  onToggleHandler,
  onClickHandler,
}) => {
  return (
    <SelectStyle openSelect={openSelect} w={w}>
      <li className="selected" onClick={onToggleHandler}>
        <span className={value ? "" : "placeholder-text"}>
          {value || placeholder}
        </span>
        <span>
          <FaChevronDown />
        </span>
      </li>
      <div className={openSelect ? "optionBox" : ""}>
        {openSelect &&
          options.map((option, idx) => (
            <li
              className="unselected"
              key={idx}
              onClick={() => onClickHandler(idx)}
            >
              {option}
            </li>
          ))}
      </div>
    </SelectStyle>
  );
};

export default Select;

export const SelectStyle = styled.div`
  width: ${(props) => props.w || "80%"};
  min-width: 80px;
  max-height: 50px;
  z-index: 10;

  .placeholder-text {
    color: ${theme.mediumGrayColor};
  }

  .selected {
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 30px;
    color: ${(props) =>
      props.value ? `${theme.lightGrayColor}` : `${theme.darkColor}`};
  }
  .unselected {
    border-radius: 30px;

    height: 50px;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: ${theme.lightGrayColor};
    }
  }

  span {
    font-size: 1rem;
  }

  .optionBox {
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 25px;
    margin-top: 10px;
    padding: 10px;

    background-color: white;
    ${({ openSelect }) =>
      !openSelect &&
      css`
        border: none;
      `}
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    height: 50px;
    cursor: pointer;
  }
`;
