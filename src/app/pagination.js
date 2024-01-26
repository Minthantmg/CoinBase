import React from 'react';

const Pagination = ({
                        currentPage,
                        onPageChange,
                    }) => {
    const totalItems = 40
    const pageCount = Math.ceil(totalItems / 10);

    const handlePrevClick = () => onPageChange(currentPage - 1);
    const handleNextClick = () => onPageChange(currentPage + 1);

    return (
        <div className="flex justify-center items-center sm:mt-10">
            <div className="join">
                <button className="join-item btn bg-blue-800" onClick={handlePrevClick}
                        disabled={currentPage === 1}>«
                </button>
                <button className="join-item btn text-white bg-purple-600 font-bold cursor-pointer bg-gradient-to-r from-blue-800 to-purple-500 rounded-full">Page {currentPage}</button>
                <button className="join-item btn bg-purple-500" onClick={handleNextClick}
                        disabled={currentPage === pageCount}>»
                </button>
            </div>
        </div>
    );
};

export default Pagination;