import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// 1160

const List = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.318125rem;
  color: #0f0f2d;
  background-color: white;
  min-width: 29.4275rem;
`;

const Button = styled.button`
  padding: 1.1875rem 1.88625rem 1.1875rem 1.101875rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  font-size: 1.125rem;
  text-transform: capitalize;
  width: 100%;
  height: 100%;

  .icon {
    color: #9f9f9f;
  }
`;

const OutContainer = styled.div`
  position: relative;
  max-height: 100px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.125rem;
  background-color: white;
  position: absolute;
  inset: 0;
  z-index: 50;
  text-transform: capitalize;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
`;

const ListItem = styled.div`
  color: ${(props) => (props.active ? "white" : "inherit")};
  background-color: ${(props) => (props.active ? "#ED8F8F" : "inherit")};
  padding: 0.69875rem 1.0225rem 0.645rem;
  cursor: pointer;
`;

export const ListBox = ({ current, items, onSelect, placeholder }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    onSelect(item);
    setOpen(!open);
  };

  const handleUnselect = () => {
    setOpen(false);
    onSelect(undefined);
  };

  return (
    <List>
      <Button onClick={toggleOpen}>
        {current || placeholder}

        {current ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="icon"
            onClick={handleUnselect}
          />
        ) : (
          <FontAwesomeIcon
            icon={open ? faAngleUp : faAngleDown}
            className="icon"
          />
        )}
      </Button>

      {open && (
        <OutContainer>
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleSelect(item)}
                active={item == current}
              >
                {item}
              </ListItem>
            ))}
          </ListContainer>
        </OutContainer>
      )}
    </List>
  );
};
