import React, { FC, useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { PageNum, PagesContainer } from './pagenation.styles';

interface IPagenationProps {
  itemsQuantity: number;
  limit: number;
  currentPage: number;
  chosePage: (page: number) => void;
}

const Pagenation: FC<IPagenationProps> = ({
  itemsQuantity,
  limit,
  chosePage,
  currentPage,
}) => {
  const pages = Array(Math.round(itemsQuantity / limit))
    .fill(1)
    .map((n, i) => n + i);

  const pageFilter = (page: number): boolean => {
    if (currentPage - 2 <= 0) return page <= 5;
    if (currentPage + 2 >= pages.length) return page > pages.length - 4;
    return page >= currentPage - 1 && page < currentPage + 3;
  };

  const changePageHandler = (page: number): void => {
    chosePage(page);
  };

  const prevPageHandler = (): void => {
    chosePage(currentPage - 1);
  };

  const nextPageHandler = (): void => {
    chosePage(currentPage + 1);
  };

  return (
    <PagesContainer>
      <CustomButton onClick={prevPageHandler} disabled={currentPage === 1}>
        prev
      </CustomButton>
      <PageNum
        key={1}
        onClick={() => changePageHandler(1)}
        className={(1 === currentPage && ' work') || ''}
      >
        {1}
      </PageNum>
      {currentPage > 3 && <span>...</span>}
      {pages
        .filter((page) => pageFilter(page))
        .map((pageNum) => {
          if (pageNum === 1) return null;
          return (
            <PageNum
              key={pageNum}
              onClick={() => changePageHandler(pageNum)}
              className={(pageNum === currentPage && 'work') || ''}
            >
              {pageNum}
            </PageNum>
          );
        })}
      <CustomButton
        onClick={nextPageHandler}
        disabled={currentPage === pages.length}
      >
        next
      </CustomButton>
    </PagesContainer>
  );
};

export default Pagenation;
