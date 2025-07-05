import { createLoadingSkeleton } from "./loading-skeleton.js";
import { createLoadingSpinner } from "./loading-spinner.js";

/**
 * 로딩 상태의 상품 목록 컴포넌트 HTML을 생성합니다.
 * @returns {string} 로딩 상태 상품 목록 HTML 문자열
 */
export function createProductListLoading() {
  const skeletonCount = 4;
  const skeletons = Array(skeletonCount).fill(createLoadingSkeleton()).join("");

  return `
    <!-- 상품 목록 (로딩 상태) -->
    <div class="mb-6">
      <div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${skeletons}
        </div>
        
        ${createLoadingSpinner()}
      </div>
    </div>
  `;
}
