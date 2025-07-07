/**
 * 상품 목록 관련 이벤트 리스너를 연결합니다.
 * @param {Function} onLimitChange - 페이지당 상품 수 변경 시 호출될 함수
 * @param {Function} onSortChange - 정렬 변경 시 호출될 함수
 * @param {Function} onSearchSubmit - 검색 제출 시 호출될 함수
 */
export function attachProductListEvents(onLimitChange, onSortChange, onSearchSubmit) {
  const limitSelect = document.querySelector("#limit-select");
  if (limitSelect && !limitSelect.hasAttribute("data-events-attached")) {
    limitSelect.addEventListener("change", (e) => {
      onLimitChange(parseInt(e.target.value));
    });
    limitSelect.setAttribute("data-events-attached", "true");
  }

  const sortSelect = document.querySelector("#sort-select");
  if (sortSelect && !sortSelect.hasAttribute("data-events-attached")) {
    sortSelect.addEventListener("change", (e) => {
      onSortChange(e.target.value);
    });
    sortSelect.setAttribute("data-events-attached", "true");
  }

  const searchInput = document.querySelector("#search-input");
  if (searchInput && !searchInput.hasAttribute("data-events-attached")) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        onSearchSubmit(e.target.value);
      }
    });
    searchInput.setAttribute("data-events-attached", "true");
  }
}
