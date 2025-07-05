import { createHeader, createSearchFilter, createProductList, createFooter } from "../components/index.js";

export const productListLoadedTemplate = `
  <div class="bg-gray-50">
    ${createHeader()}
    <main class="max-w-md mx-auto px-4 py-4">
      ${createSearchFilter()}
      ${createProductList()}
    </main>
    ${createFooter()}
  </div>
`;
