import { productListLoadingTemplate, productListLoadedTemplate } from "./templates/index.js";
import { getProducts, getCategories } from "./api/productApi.js";
import { renderProducts, renderProductCount, attachProductListEvents, updateFilterStates } from "./views/index.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

const DEFAULT_PRODUCT_LIST_STATE = {
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

let productListState = { ...DEFAULT_PRODUCT_LIST_STATE };

let isInitialized = false;
let popstateListenerAdded = false;

function resetProductListState() {
  productListState = { ...DEFAULT_PRODUCT_LIST_STATE };
  isInitialized = false;
}

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

async function fetchProductData() {
  const [productsResponse, categoriesResponse] = await Promise.all([
    getProducts(productListState.filters),
    getCategories(),
  ]);

  productListState.products = productsResponse.products;
  productListState.pagination = productsResponse.pagination;
  productListState.categories = categoriesResponse;
  productListState.loading = false;
}

function renderProductList() {
  renderProducts(productListState.products);
  renderProductCount(productListState.pagination.total);
  updateFilterStates(productListState.filters);
}

async function loadProducts() {
  const root = document.getElementById("root") || document.body;

  if (!isInitialized) {
    root.innerHTML = productListLoadingTemplate;
    await fetchProductData();
    root.innerHTML = productListLoadedTemplate;
    renderProductList();
    attachProductListEvents(handleLimitChange, handleSortChange, handleSearchSubmit);
    isInitialized = true;
  } else {
    await fetchProductData();
    renderProductList();
  }
}

function main() {
  if (!popstateListenerAdded) {
    window.addEventListener("popstate", () => {
      if (window.location.pathname === "/") {
        resetProductListState();
      }
      loadProducts();
    });
    popstateListenerAdded = true;
  }

  loadProducts();
}

if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
