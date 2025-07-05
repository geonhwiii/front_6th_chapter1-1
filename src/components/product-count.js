/**
 * 상품 개수 표시 HTML을 생성합니다.
 * @param {number} total - 총 상품 개수
 * @returns {string} 상품 개수 표시 HTML 문자열
 */
export function createProductCount(total) {
  return `총 <span class="font-medium text-gray-900">${total}개</span>의 상품`;
}
