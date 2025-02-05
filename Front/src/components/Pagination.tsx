
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export default function Pagination ({ totalPages, currentPage, handlePageChange }: PaginationProps) {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center mt-4 mr-[12%]">
      <div className="flex justify-center mt-2 w-full overflow-x-auto scrollbar-hide">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative block rounded bg-[#F87777] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 dark:text-white dark:hover:bg-neutral-400 dark:hover:text-white"
              >
                Précédent
              </button>
            </li>

            {/* Page Numbers */}
            {pageNumbers.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  onClick={() => handlePageChange(pageNumber)}
                  className={`relative block rounded px-3 py-1.5 text-sm ${
                    currentPage === pageNumber
                      ? "bg-[#5C9967] text-white"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  }`}
                >
                  {pageNumber}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative block rounded bg-[#F87777] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 dark:text-white dark:hover:bg-neutral-400 dark:hover:text-white"
              >
                Suivant
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

