/**
 * 상품 목록 컴포넌트 HTML을 생성합니다.
 * @returns {string} 상품 목록 HTML 문자열
 */
export function createProductList() {
  return `
    <!-- 상품 목록 -->
    <div class="mb-6">
      <div>
        <!-- 상품 개수 정보 -->
        <div class="mb-4 text-sm text-gray-600 product-count">
          총 <span class="font-medium text-gray-900">0개</span>의 상품
        </div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <!-- 상품들이 동적으로 렌더링됩니다 -->
        </div>
        
        <div class="text-center py-4 text-sm text-gray-500">
          모든 상품을 확인했습니다
        </div>
      </div>
    </div>
  `;
}
