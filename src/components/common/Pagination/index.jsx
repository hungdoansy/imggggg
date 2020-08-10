import React from "react";
import { Pagination } from "@gotitinc/design-system";
import { v4 as newId } from "uuid";

export const BE_ELLIPSIS = -10;

const MyItem = ({ baseUrl, page, currentPage }) => {
  return (
    <Pagination.Item
      active={page === currentPage ? true : false}
      href={`${baseUrl}${page}`}
    >
      {page}
    </Pagination.Item>
  );
};

// To decide if an ellipsis should be displayed
export const pageNumbersCreator = (currentPage, totalNumberOfPages) => {
  if (totalNumberOfPages <= 7) {
    return Array(totalNumberOfPages)
      .fill(0)
      .map((_, i) => i + 1);
  } else {
    const currentIndex = currentPage - 1;
    const pageIndices = Array(totalNumberOfPages)
      .fill(0)
      .map((_, i) => i);

    if (currentIndex + 2 <= totalNumberOfPages - 1 - 2) {
      const from = Math.max(currentIndex + 3, 6);
      const count = totalNumberOfPages - 1 - 1 - from + 1;
      pageIndices.splice(from, count, BE_ELLIPSIS);
    }

    if (currentIndex - 2 >= 2) {
      const from = 1;
      const count =
        Math.min(currentIndex - 2 - 1, totalNumberOfPages - 1 - 6) - from + 1;
      pageIndices.splice(from, count, BE_ELLIPSIS);
    }

    return pageIndices.map((i) => (i === BE_ELLIPSIS ? BE_ELLIPSIS : i + 1));
  }
};

const itemsCreator = (currentPage, totalNumberOfPages, baseUrl) => {
  const pageNumbers = pageNumbersCreator(currentPage, totalNumberOfPages);

  return pageNumbers.map((n) => {
    if (n !== BE_ELLIPSIS) {
      return (
        <MyItem
          key={newId()}
          page={n}
          currentPage={currentPage}
          baseUrl={baseUrl}
        />
      );
    } else {
      return <Pagination.Ellipsis key={newId()} />;
    }
  });
};

const MyPagination = ({ currentPage, totalNumberOfPages, baseUrl }) => {
  return (
    <Pagination>
      <Pagination.Prev href={`${baseUrl}${Math.max(1, currentPage - 1)}`} />
      {itemsCreator(currentPage, totalNumberOfPages, baseUrl)}
      <Pagination.Next
        href={`${baseUrl}${Math.min(totalNumberOfPages, currentPage + 1)}`}
      />
    </Pagination>
  );
};

export default MyPagination;
