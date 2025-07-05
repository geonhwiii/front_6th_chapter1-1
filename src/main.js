import {
  productListLoadingTemplate,
  productListLoadedTemplate,
  productListCategory1DepthTemplate,
  productListCategory2DepthTemplate,
  toastTemplate,
  cartEmptyTemplate,
  cartNoSelectionTemplate,
  cartWithSelectionTemplate,
  productDetailLoadingTemplate,
  productDetailLoadedTemplate,
  notFoundTemplate,
} from "./templates/index.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

function main() {
  const 상품목록_레이아웃_로딩 = productListLoadingTemplate;

  const 상품목록_레이아웃_로딩완료 = productListLoadedTemplate;

  const 상품목록_레이아웃_카테고리_1Depth = productListCategory1DepthTemplate;

  const 상품목록_레이아웃_카테고리_2Depth = productListCategory2DepthTemplate;

  const 토스트 = toastTemplate;

  const 장바구니_비어있음 = cartEmptyTemplate;

  const 장바구니_선택없음 = cartNoSelectionTemplate;

  const 장바구니_선택있음 = cartWithSelectionTemplate;

  const 상세페이지_로딩 = productDetailLoadingTemplate;

  const 상세페이지_로딩완료 = productDetailLoadedTemplate;

  const _404_ = notFoundTemplate;

  document.body.innerHTML = `
    ${상품목록_레이아웃_로딩}
    <br />
    ${상품목록_레이아웃_로딩완료}
    <br />
    ${상품목록_레이아웃_카테고리_1Depth}
    <br />
    ${상품목록_레이아웃_카테고리_2Depth}
    <br />
    ${토스트}
    <br />
    ${장바구니_비어있음}
    <br />
    ${장바구니_선택없음}
    <br />
    ${장바구니_선택있음}
    <br />
    ${상세페이지_로딩}
    <br />
    ${상세페이지_로딩완료}
    <br />
    ${_404_}
  `;
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
