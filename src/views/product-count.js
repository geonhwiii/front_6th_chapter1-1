import { createProductCount } from "../components/product-count.js";

/**
 * 상품 개수를 렌더링합니다.
 * @param {number} total - 총 상품 개수
 */
export function renderProductCount(total) {
  const countElement = document.querySelector(".product-count");
  if (countElement && total !== undefined) {
    countElement.innerHTML = createProductCount(total);
  }
}
