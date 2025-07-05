/**
 * 로딩 스켈레톤 컴포넌트 HTML을 생성합니다.
 * @returns {string} 로딩 스켈레톤 HTML 문자열
 */
export function createLoadingSkeleton() {
  return `
    <!-- 로딩 스켈레톤 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `;
}
