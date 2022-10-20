import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const PaginationItem = styled.button`
  height: 6.0625rem;
  width: 6.0625rem;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.34375rem;
  color: ${(props) => (props.actived ? "white" : "#212121")};
  background-color: ${(props) => (props.actived ? "#DD1A1A" : "transparent")};
  border-radius: 0.375rem;

  .icon {
    font-size: 1.5rem;
  }

  &:disabled {
    background-color: #e3e3e3;
    color: inherit;
    opacity: 0.5;
    cursor: default;
  }
`;

export function Pagination({
  page,
  pagesOnView,
  rowsPerPage,
  count,
  onPageChange,
}) {
  const [navigation, setNavigation] = useState(0);

  const handleNext = () => {
    setNavigation(navigation + 1);
  };

  const handlePrev = () => {
    setNavigation(navigation - 1);
  };

  const pages = useMemo(() => {
    const size = Math.ceil(count / rowsPerPage);
    const pages = [];

    for (let i = 1; i <= size; i++) {
      pages.push(i);
    }

    return pages;
  }, [count, rowsPerPage]);

  return (
    <PaginationContainer>
      <PaginationItem
        disabled={navigation == 0}
        onClick={handlePrev}
        className="pagination-item"
        actived
      >
        <FontAwesomeIcon icon={faAnglesLeft} className="icon" />
      </PaginationItem>

      {pages
        .slice(navigation * pagesOnView, navigation * pagesOnView + pagesOnView)
        .map((n) => (
          <PaginationItem
            key={n}
            disabled={n == page}
            onClick={() => onPageChange(n)}
            actived={n == page}
          >
            {n}
          </PaginationItem>
        ))}

      <PaginationItem
        disabled={navigation * pagesOnView + 2 == pages.length}
        onClick={handleNext}
        actived
      >
        <FontAwesomeIcon icon={faAnglesRight} className="icon" />
      </PaginationItem>
    </PaginationContainer>
  );
}
