import React from 'react';
import ButtonPageControl from '../Pagination/PaginationButton/PaginationButton';
import currentPageInfo from '../WhichPage/WhichPage';

const Pagination = ({
  currentPage,
  isLoading,
  pages,
  handleCurrentPage,
}) => {
  const prevPage = () => {
    handleCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    handleCurrentPage(currentPage + 1);
  };
  const testForPrevButton = currentPage > 1 && !isLoading;
  const testForNextButton =
    pages >= 1 && currentPage !== pages && !isLoading;
  return (
    <section className="paginations">
      {currentPageInfo}
      <div className="pag-buttons">
        {testForPrevButton ? (
          <ButtonPageControl
            buttonText={'Prev Page'}
            pageSwitcher={prevPage}
          />
        ) : null}
        {testForNextButton ? (
          <ButtonPageControl
            buttonText={'Next Page'}
            pageSwitcher={nextPage}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Pagination;
