import { createProductItem } from "../components/product-item.js";

/**
 * 상품 목록을 렌더링합니다.
 * @param {Array} products - 상품 배열
 */
export function renderProducts(products) {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid) return;

  productsGrid.innerHTML = products.map((product) => createProductItem(product)).join("");
}

/**
 * 필터 상태를 업데이트합니다.
 * @param {Object} filters - 현재 필터 상태
 */
export function updateFilterStates(filters) {
  const limitSelect = document.getElementById("limit-select");
  if (limitSelect) {
    limitSelect.value = filters.limit.toString();
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.value = filters.sort;
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = filters.search;
  }
}
