
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-between items-center">
        <button
          className="px-4 py-2 text-sm text-gray-500"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 text-sm text-gray-500"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  

  export default Pagination;