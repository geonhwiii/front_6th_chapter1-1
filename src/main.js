import { productListLoadingTemplate, productListLoadedTemplate } from "./templates/index.js";
import { getProducts, getCategories } from "./api/productApi.js";
import { renderProducts, renderProductCount, attachProductListEvents, updateFilterStates } from "./views/index.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

let productListState = {
  products: [],
  categories: {},
  loading: true,
  pagination: {},
  filters: {
    page: 1,
    limit: 20,
    search: "",
    category1: "",
    category2: "",
    sort: "price_asc",
  },
};

function handleLimitChange(newLimit) {
  productListState.filters.limit = newLimit;
  productListState.filters.page = 1;
  loadProducts();
}

function handleSortChange(newSort) {
  productListState.filters.sort = newSort;
  productListState.filters.page = 1;
  loadProducts();
}

function handleSearchSubmit(searchTerm) {
  productListState.filters.search = searchTerm;
  productListState.filters.page = 1;
  loadProducts();
}

async function loadProducts() {
  const root = document.getElementById("root") || document.body;
  root.innerHTML = productListLoadingTemplate;

  const [productsResponse, categoriesResponse] = await Promise.all([
    getProducts(productListState.filters),
    getCategories(),
  ]);

  productListState.products = productsResponse.products;
  productListState.pagination = productsResponse.pagination;
  productListState.categories = categoriesResponse;
  productListState.loading = false;

  root.innerHTML = productListLoadedTemplate;
  renderProducts(productListState.products);
  renderProductCount(productListState.pagination.total);

  updateFilterStates(productListState.filters);

  attachProductListEvents(handleLimitChange, handleSortChange, handleSearchSubmit);
}

function main() {
  loadProducts();
}

if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
