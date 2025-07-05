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
