import {
  createHeader,
  createSearchFilterLoading,
  createProductListLoading,
  createFooter,
} from "../components/index.js";

export const productListLoadingTemplate = `
  <div class="min-h-screen bg-gray-50">
    ${createHeader()}
    <main class="max-w-md mx-auto px-4 py-4">
      ${createSearchFilterLoading()}
      ${createProductListLoading()}
    </main>
    ${createFooter()}
  </div>
`;
