import { productListLoadingTemplate, productListLoadedTemplate } from "./templates/index.js";
import { getProducts, getCategories } from "./api/productApi.js";

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
}

function main() {
  loadProducts();
}

if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
