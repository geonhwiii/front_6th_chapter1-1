(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`/front_6th_chapter1-1`,a=e=>`${i}${e}`,o=e=>i&&e.startsWith(i)?e.slice(i.length)||`/`:e;var s=class{constructor(){this.routes=[],this.currentRoute=null,this.listeners=[],this.isNavigating=!1,this.init()}init(){window.addEventListener(`popstate`,this.handlePopState.bind(this))}addRoute(e,t,n={}){this.routes.push({path:e,component:t,exact:n.exact!==!1,...n})}addRoutes(e){e.forEach(e=>{this.addRoute(e.path,e.component,e.options)})}matchRoute(e=window.location.pathname){let t=o(e);for(let e of this.routes)if(this.isRouteMatch(t,e))return e;return null}isRouteMatch(e,t){return t.exact?e===t.path:e.startsWith(t.path)}navigate(e,t={}){if(this.isNavigating)return;let{replace:n=!1,state:r=null}=t,i=a(e);if(window.location.pathname!==i){this.isNavigating=!0;try{n?window.history.replaceState(r,``,i):window.history.pushState(r,``,i),this.handleRouteChange()}finally{this.isNavigating=!1}}}goBack(){window.history.back()}goForward(){window.history.forward()}handlePopState(){this.isNavigating||this.handleRouteChange()}handleRouteChange(){let e=window.location.pathname,t=this.matchRoute(e);t?(this.currentRoute=t,this.renderComponent(t)):this.render404(),this.notifyListeners(t)}renderComponent(e){let t=document.getElementById(`root`);if(t&&e.component)if(typeof e.component==`function`){let n=e.component();t.innerHTML=n}else t.innerHTML=e.component}render404(){let e=document.getElementById(`root`);e&&(e.innerHTML=`
        <div style="text-align: center; padding: 50px;">
          <h1>404 - 페이지를 찾을 수 없습니다</h1>
          <button onclick="router.navigate('/')">홈으로 돌아가기</button>
        </div>
      `)}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}notifyListeners(e){this.listeners.forEach(t=>{try{t(e)}catch(e){console.error(`Router listener error:`,e)}})}getCurrentRoute(){return this.currentRoute}getCurrentPath(){return o(window.location.pathname)}};const c=new s;window.router=c;var l=class{constructor(){this.listeners=[]}getSearchParams(){return new URLSearchParams(window.location.search)}get(e,t=``){let n=this.getSearchParams();return n.get(e)||t}getAll(e){let t=this.getSearchParams(),n={};return e.forEach(e=>{n[e]=t.get(e)||``}),n}getAllParams(){let e=this.getSearchParams(),t={};for(let[n,r]of e)t[n]=r;return t}set(e,t,n={}){let{replace:r=!1}=n,i=this.getSearchParams();t===``||t==null?i.delete(e):i.set(e,t),this.updateURL(i,r)}setAll(e,t={}){let{replace:n=!1}=t,r=this.getSearchParams();Object.entries(e).forEach(([e,t])=>{t===``||t==null?r.delete(e):r.set(e,t)}),this.updateURL(r,n)}delete(e,t={}){let{replace:n=!1}=t,r=this.getSearchParams();r.delete(e),this.updateURL(r,n)}deleteAll(e,t={}){let{replace:n=!1}=t,r=this.getSearchParams();e.forEach(e=>{r.delete(e)}),this.updateURL(r,n)}clear(e={}){let{replace:t=!1}=e;this.updateURL(new URLSearchParams,t)}has(e){let t=this.getSearchParams();return t.has(e)}updateURL(e,t=!1){let n=o(window.location.pathname),r=e.toString(),i=r?`${n}?${r}`:n;t?window.history.replaceState(null,``,i):window.history.pushState(null,``,i),this.notifyListeners()}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}notifyListeners(){let e=this.getAllParams();this.listeners.forEach(t=>{try{t(e)}catch(e){console.error(`SearchParams listener error:`,e)}})}toString(){return this.getSearchParams().toString()}};const u=new l;function d(e={}){let{cartCount:t=0}=e;return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              ${t>0?`
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ${t}
                </span>
              `:``}
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function f(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}function p(e,t={}){let{cartCount:n=0}=t;return`
    <div class="min-h-screen bg-gray-50">
      ${d({cartCount:n})}
      ${e}
      ${f()}
    </div>
  `}function m(e={}){let{searchValue:t=``,selectedLimit:n=`20`,selectedSort:r=`price_asc`,selectedCategory1:i=``,selectedCategory2:a=``,isLoading:o=!1}=e;return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." 
                 value="${t}" 
                 class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            ${i?`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${i}" class="text-xs hover:text-blue-800 hover:underline">${i}</button>`:``}
            ${a?`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${a}</span>`:``}
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            ${o?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:`${i?i===`생활/건강`?`<button data-category1="생활/건강" data-category2="생활용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`생활용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  생활용품
                </button>
                <button data-category1="생활/건강" data-category2="주방용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`주방용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  주방용품
                </button>
                <button data-category1="생활/건강" data-category2="문구/사무용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`문구/사무용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  문구/사무용품
                </button>
                <button data-category1="생활/건강" data-category2="자동차용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`자동차용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  자동차용품
                </button>
                <button data-category1="생활/건강" data-category2="구강위생용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`구강위생용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  구강위생용품
                </button>
                <button data-category1="생활/건강" data-category2="수납/정리용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`수납/정리용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  수납/정리용품
                </button>
                <button data-category1="생활/건강" data-category2="욕실용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`욕실용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  욕실용품
                </button>
                <button data-category1="생활/건강" data-category2="세탁용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`세탁용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  세탁용품
                </button>
                <button data-category1="생활/건강" data-category2="공구" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`공구`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  공구
                </button>
                <button data-category1="생활/건강" data-category2="청소용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`청소용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  청소용품
                </button>
                <button data-category1="생활/건강" data-category2="정원/원예용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`정원/원예용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  정원/원예용품
                </button>
                <button data-category1="생활/건강" data-category2="수집품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`수집품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  수집품
                </button>
                <button data-category1="생활/건강" data-category2="관상어용품" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`관상어용품`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  관상어용품
                </button>
                <button data-category1="생활/건강" data-category2="반려동물" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`반려동물`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  반려동물
                </button>`:i===`디지털/가전`?`<button data-category1="디지털/가전" data-category2="컴퓨터/노트북" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`컴퓨터/노트북`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  컴퓨터/노트북
                </button>
                <button data-category1="디지털/가전" data-category2="휴대폰" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${a===`휴대폰`?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  휴대폰
                </button>`:``:`
                <button data-category1="생활/건강" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                       bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                  생활/건강
                </button>
                <button data-category1="디지털/가전" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                       bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                  디지털/가전
                </button>`}`}
          </div>
        </div>
        
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10" ${n===`10`?`selected`:``}>10개</option>
              <option value="20" ${n===`20`?`selected`:``}>20개</option>
              <option value="50" ${n===`50`?`selected`:``}>50개</option>
              <option value="100" ${n===`100`?`selected`:``}>100개</option>
            </select>
          </div>
          
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" ${r===`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${r===`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${r===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${r===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `}function h(e){let{productId:t,image:n,title:r,brand:i=``,lprice:a}=e,o=parseInt(a).toLocaleString();return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
         data-product-id="${t}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${n}"
             alt="${r}"
             class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
             loading="lazy">
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${r}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${i}</p>
          <p class="text-lg font-bold text-gray-900">
            ${o}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
               hover:bg-blue-700 transition-colors add-to-cart-btn" 
               data-product-id="${t}">
          장바구니 담기
        </button>
      </div>
    </div>
  `}function g(e){return!e||e.length===0?`
      <div class="col-span-2 text-center py-8">
        <p class="text-gray-500">상품이 없습니다.</p>
      </div>
    `:e.map(e=>h(e)).join(``)}function _(e=[],t={}){let{totalCount:n=0,isLoading:r=!1,searchValue:i=``,selectedLimit:a=`20`,selectedSort:o=`price_asc`,selectedCategory1:s=``,selectedCategory2:c=``,hasMore:l=!0,currentPage:u=1}=t,d=r&&u===1?y():g(e);return`
    <main class="max-w-md mx-auto px-4 py-4">
      ${m({searchValue:i,selectedLimit:a,selectedSort:o,selectedCategory1:s,selectedCategory2:c,isLoading:r&&u===1})}
      
      <!-- 상품 목록 -->
      <div class="mb-6">
        <div>
          <!-- 상품 개수 정보 -->
          ${!r||u>1?`<div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${n}개</span>의 상품
          </div>`:``}
          
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${d}
          </div>
          
          ${r&&u>1?`
            <div class="text-center py-4">
              <div class="inline-flex items-center">
                <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
              </div>
            </div>
          `:!r&&e.length>0&&!l?`
            <div class="text-center py-4 text-sm text-gray-500">
              모든 상품을 확인했습니다
            </div>
          `:``}
        </div>
      </div>
    </main>
  `}function v(e=[],t={}){let{cartCount:n=0}=t,r=_(e,t);return p(r,{cartCount:n})}function y(){let e=`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `;return e.repeat(4)}const b=(e,t=[],n={})=>e?`
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            ${e.category1?`
              <button class="breadcrumb-link" data-category1="${e.category1}">
                ${e.category1}
              </button>
            `:``}
            ${e.category2?`
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <button class="breadcrumb-link" data-category2="${e.category2}">
                ${e.category2}
              </button>
            `:``}
          </div>
        </nav>

        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
            </div>
            
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1">${e.brand||``}</p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
              
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  ${x(e.rating||4)}
                </div>
                <span class="ml-2 text-sm text-gray-600">${e.rating||4} (${e.reviewCount||749}개 리뷰)</span>
              </div>
              
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${parseInt(e.lprice||0).toLocaleString()}원</span>
              </div>
              
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${e.stock||107}개
              </div>
              
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${e.description||`${e.title}에 대한 상세 설명입니다. 브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.`}
              </div>
            </div>
          </div>
          
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="${n.quantity||1}" min="1" max="${e.stock||107}" 
                  class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${e.productId}" 
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        
        <!-- 관련 상품 -->
        ${t.length>0?`
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200">
              <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
              <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-3 responsive-grid">
                ${t.map(e=>`
                  <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                    <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                      <img src="${e.image}" alt="${e.title}" 
                        class="w-full h-full object-cover" loading="lazy">
                    </div>
                    <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                    <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice||0).toLocaleString()}원</p>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>
        `:``}
      </main>
      
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `:`
      <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow-sm sticky top-0 z-40">
          <div class="max-w-md mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
              </div>
              <div class="flex items-center space-x-2">
                <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main class="max-w-md mx-auto px-4 py-4">
          <div class="py-20 bg-gray-50 flex items-center justify-center">
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p class="text-gray-600">상품 정보를 불러오는 중...</p>
            </div>
          </div>
        </main>
        <footer class="bg-white shadow-sm sticky top-0 z-40">
          <div class="max-w-md mx-auto py-8 text-center text-gray-500">
            <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
          </div>
        </footer>
      </div>
    `,x=e=>{let t=Math.floor(e),n=[];for(let e=0;e<5;e++)e<t?n.push(`
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      `):n.push(`
        <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      `);return n.join(``)};async function S(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function C(e){let t=await fetch(`/api/products/${e}`);return await t.json()}var ee=class{constructor(){this.products=[],this.totalCount=0,this.isLoading=!1,this.currentPage=1,this.hasMore=!0,this.listeners=[]}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this.getState()))}getState(){return{products:this.products,totalCount:this.totalCount,isLoading:this.isLoading,currentPage:this.currentPage,hasMore:this.hasMore,searchValue:u.get(`search`,``),selectedLimit:u.get(`limit`,`20`),selectedSort:u.get(`sort`,`price_asc`),selectedCategory1:u.get(`category1`,``),selectedCategory2:u.get(`category2`,``)}}getFiltersFromURL(){return{search:u.get(`search`,``),limit:parseInt(u.get(`limit`,`20`)),sort:u.get(`sort`,`price_asc`),category1:u.get(`category1`,``),category2:u.get(`category2`,``),page:parseInt(u.get(`page`,`1`))}}async loadProducts(e=!1){this.isLoading=!0,this.notifyListeners();try{let t=this.getFiltersFromURL();if(e){this.currentPage=1,this.products=[];let e=new URL(window.location);e.searchParams.set(`page`,`1`),window.history.replaceState(null,``,e.toString())}let n=await S({...t,page:this.currentPage});this.currentPage===1?this.products=n.products:this.products=[...this.products,...n.products],this.totalCount=n.pagination.total,this.hasMore=n.pagination.hasNext,this.isLoading=!1,this.notifyListeners()}catch(e){throw this.isLoading=!1,this.notifyListeners(),e}}async loadNextPage(){if(this.isLoading||!this.hasMore)return;this.currentPage++;let e=new URL(window.location);e.searchParams.set(`page`,this.currentPage.toString()),window.history.replaceState(null,``,e.toString()),await this.loadProducts(!1)}async search(e){u.setAll({search:e,page:`1`}),await this.loadProducts(!0)}async changeSort(e){u.setAll({sort:e,page:`1`}),await this.loadProducts(!0)}async changeLimit(e){u.setAll({limit:e,page:`1`}),await this.loadProducts(!0)}async changeCategory(e,t=``){u.setAll({category1:e,category2:t,page:`1`}),await this.loadProducts(!0)}async resetFilters(){u.clear(),await this.loadProducts(!0)}};const w=new ee;var T=class{constructor(){this.state={product:null,relatedProducts:[],loading:!1,error:null,quantity:1},this.listeners=[]}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}notifyListeners(){this.listeners.forEach(e=>e(this.state))}getState(){return{...this.state}}async loadProduct(e){if(!e){this.state.error=`상품 ID가 필요합니다.`,this.notifyListeners();return}this.state.loading=!0,this.state.error=null,this.state.relatedProducts=[],this.notifyListeners();try{let t=await C(e);if(!t){this.state.error=`상품을 찾을 수 없습니다.`,this.state.loading=!1,this.notifyListeners();return}this.state.product=t,this.state.loading=!1,this.notifyListeners(),this.loadRelatedProductsAsync(t)}catch(e){console.error(`상품 상세 정보 로드 실패:`,e),this.state.error=`상품 정보를 불러오는데 실패했습니다.`,this.state.loading=!1,this.notifyListeners()}}async loadRelatedProducts(e){try{let t=await S({category1:e.category1,category2:e.category2,limit:20});this.state.relatedProducts=t.products.filter(t=>t.productId!==e.productId)}catch(e){console.error(`관련 상품 로드 실패:`,e),this.state.relatedProducts=[]}}async loadRelatedProductsAsync(e){try{let t=await S({category1:e.category1,category2:e.category2,limit:20});this.state.relatedProducts=t.products.filter(t=>t.productId!==e.productId),this.notifyListeners()}catch(e){console.error(`관련 상품 로드 실패:`,e),this.state.relatedProducts=[],this.notifyListeners()}}changeQuantity(e){var t;let n=Math.max(1,Math.min(e,(t=this.state.product)?.stock||107));return this.state.quantity=n,this.notifyListeners(),n}increaseQuantity(){return this.changeQuantity(this.state.quantity+1)}decreaseQuantity(){return this.changeQuantity(this.state.quantity-1)}addToCart(){if(!this.state.product)return!1;try{let e=JSON.parse(localStorage.getItem(`cart`)||`[]`),t=e.findIndex(e=>e.productId===this.state.product.productId);return t>=0?e[t].quantity+=this.state.quantity:e.push({...this.state.product,quantity:this.state.quantity,selected:!0}),localStorage.setItem(`cart`,JSON.stringify(e)),this.state.quantity=1,this.notifyListeners(),!0}catch(e){return console.error(`장바구니 추가 실패:`,e),!1}}reset(){this.state={product:null,relatedProducts:[],loading:!1,error:null,quantity:1},this.notifyListeners()}};const E=new T;var D=class{constructor(){this.state={items:[],isModalOpen:!1,loading:!1,error:null},this.listeners=[]}addListener(e){this.listeners.push(e)}removeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}notifyListeners(){this.listeners.forEach(e=>e(this.state))}getState(){return{...this.state}}loadCartFromStorage(){try{let e=JSON.parse(localStorage.getItem(`cart`)||`[]`);this.state.items=e.map(e=>({...e,selected:e.selected!==!1})),this.notifyListeners()}catch(e){console.error(`장바구니 로드 실패:`,e),this.state.items=[],this.notifyListeners()}}saveCartToStorage(){try{localStorage.setItem(`cart`,JSON.stringify(this.state.items))}catch(e){console.error(`장바구니 저장 실패:`,e)}}addToCart(e,t=1){let n=this.state.items.findIndex(t=>t.productId===e.productId);n>=0?this.state.items[n].quantity+=t:this.state.items.push({...e,quantity:t,selected:!0}),this.saveCartToStorage(),this.notifyListeners()}removeFromCart(e){this.state.items=this.state.items.filter(t=>t.productId!==e),this.saveCartToStorage(),this.notifyListeners()}removeSelectedItems(){this.state.items=this.state.items.filter(e=>!e.selected),this.saveCartToStorage(),this.notifyListeners()}clearCart(){this.state.items=[],this.saveCartToStorage(),this.notifyListeners()}updateQuantity(e,t){let n=this.state.items.find(t=>t.productId===e);n&&(n.quantity=Math.max(1,t),this.saveCartToStorage(),this.notifyListeners())}toggleItemSelection(e){let t=this.state.items.find(t=>t.productId===e);t&&(t.selected=!t.selected,this.saveCartToStorage(),this.notifyListeners())}toggleSelectAll(){let e=this.state.items.every(e=>e.selected);this.state.items.forEach(t=>{t.selected=!e}),this.saveCartToStorage(),this.notifyListeners()}openModal(){this.state.isModalOpen=!0,this.notifyListeners()}closeModal(){this.state.isModalOpen=!1,this.notifyListeners()}getSelectedTotal(){return this.state.items.filter(e=>e.selected).reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0)}getTotal(){return this.state.items.reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0)}getSelectedCount(){return this.state.items.filter(e=>e.selected).length}getItemCount(){return this.state.items.length}reset(){this.state={items:[],isModalOpen:!1,loading:!1,error:null},this.saveCartToStorage(),this.notifyListeners()}};const O=new D,k=()=>{let e=w.getState();return v(e.products,e)},A=()=>{let e=o(window.location.pathname),t=e.split(`/`),n=t[2];if(!n)return`
      <div style="text-align: center; padding: 50px;">
        <h1>잘못된 상품 ID입니다</h1>
        <button onclick="router.navigate('/')">홈으로 돌아가기</button>
      </div>
    `;let r=E.getState();return b(r.product,r.relatedProducts)},j=()=>k(),M=[{path:`/`,component:j,options:{exact:!0}},{path:`/product`,component:A,options:{exact:!1}}],N=e=>{e.addRoutes(M)},P=e=>{let t=document.querySelector(`.toast-message`);t&&t.remove();let n=e=>e===`장바구니에 추가되었습니다`?`
        <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p class="text-sm font-medium">${e}</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `:e===`선택된 상품들이 삭제되었습니다`?`
        <div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p class="text-sm font-medium">${e}</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `:`
        <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <p class="text-sm font-medium">${e}</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `,r=document.createElement(`div`);r.className=`toast-message flex flex-col gap-2 items-center justify-center mx-auto`,r.style.cssText=`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: fit-content;
  `,r.innerHTML=n(e),document.body.appendChild(r);let i=r.querySelector(`#toast-close-btn`);i&&i.addEventListener(`click`,()=>{r&&r.parentNode&&r.remove()}),setTimeout(()=>{r&&r.parentNode&&r.remove()},3e3)},F=async e=>{e.target.id===`search-input`&&e.key===`Enter`&&await w.search(e.target.value)},I=async e=>{e.target.id===`sort-select`&&await w.changeSort(e.target.value),e.target.id===`limit-select`&&await w.changeLimit(e.target.value)},L=async e=>{if(e.target.classList.contains(`category1-filter-btn`)){let t=e.target.dataset.category1;await w.changeCategory(t);return}if(e.target.classList.contains(`category2-filter-btn`)){let t=e.target.dataset.category1,n=e.target.dataset.category2;await w.changeCategory(t,n);return}if(e.target.dataset.breadcrumb===`reset`){await w.resetFilters();return}if(e.target.dataset.breadcrumb===`category1`){let t=e.target.dataset.category1;await w.changeCategory(t);return}},R=e=>{if(e.target.classList.contains(`add-to-cart-btn`)){let a=e.target.closest(`.product-card`);if(a){let e=a.dataset.productId;if(e){var t,n,r,i;let o=(t=a.querySelector(`h3`))==null||(t=t.textContent)==null?void 0:t.trim(),s=(n=a.querySelector(`p`))==null||(n=n.textContent)==null?void 0:n.trim(),c=(r=a.querySelector(`.text-lg`))==null||(r=r.textContent)==null?void 0:r.replace(`원`,``).replace(/,/g,``),l=(i=a.querySelector(`img`))?.src;if(e&&o&&c){let t={productId:e,title:o,brand:s||``,lprice:c,image:l||``};O.addToCart(t),P(`장바구니에 추가되었습니다`)}}}return}if(e.target.classList.contains(`product-image`)||e.target.closest(`.product-image`)){let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;if(e){c.navigate(`/product/${e}`);return}}}if(e.target.classList.contains(`product-info`)||e.target.closest(`.product-info`)){let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;if(e){c.navigate(`/product/${e}`);return}}}},z=e=>{if(e.target.id===`quantity-increase`||e.target.closest(`#quantity-increase`)){E.increaseQuantity();return}if(e.target.id===`quantity-decrease`||e.target.closest(`#quantity-decrease`)){E.decreaseQuantity();return}if(e.target.id===`quantity-input`){let t=parseInt(e.target.value)||1;E.changeQuantity(t);return}if(e.target.id===`add-to-cart-btn`){let e=E.addToCart();e&&P(`장바구니에 추가되었습니다`);return}if(e.target.closest(`.related-product-card`)){let t=e.target.closest(`.related-product-card`),n=t.dataset.productId;n&&c.navigate(`/product/${n}`);return}if(e.target.classList.contains(`go-to-product-list`)){c.navigate(`/`);return}if(e.target.classList.contains(`breadcrumb-link`)){e.target.dataset.category1&&e.target.dataset.category2?c.navigate(`/?category1=${e.target.dataset.category1}&category2=${e.target.dataset.category2}`):e.target.dataset.category1&&c.navigate(`/?category1=${e.target.dataset.category1}`);return}},te=async()=>{if(c.getCurrentPath()!==`/`)return;let e=window.innerHeight+window.scrollY>=document.body.offsetHeight-1e3;e&&await w.loadNextPage()},B=e=>{if(e.target.id===`cart-icon-btn`||e.target.closest(`#cart-icon-btn`)){O.openModal();return}if(e.target.id===`cart-modal-close-btn`||e.target.closest(`#cart-modal-close-btn`)){O.closeModal();return}if(e.target.classList.contains(`cart-modal-overlay`)){O.closeModal();return}if(e.target.id===`cart-modal-select-all-checkbox`){O.toggleSelectAll();return}if(e.target.classList.contains(`cart-item-checkbox`)){let t=e.target.dataset.productId;O.toggleItemSelection(t);return}if(e.target.classList.contains(`quantity-increase-btn`)||e.target.closest(`.quantity-increase-btn`)){let t=e.target.dataset.productId||e.target.closest(`.quantity-increase-btn`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`);if(n){let e=parseInt(n.value)+1;O.updateQuantity(t,e)}return}if(e.target.classList.contains(`quantity-decrease-btn`)||e.target.closest(`.quantity-decrease-btn`)){let t=e.target.dataset.productId||e.target.closest(`.quantity-decrease-btn`).dataset.productId,n=document.querySelector(`.quantity-input[data-product-id="${t}"]`);if(n){let e=Math.max(1,parseInt(n.value)-1);O.updateQuantity(t,e)}return}if(e.target.classList.contains(`cart-item-remove-btn`)){let t=e.target.dataset.productId;O.removeFromCart(t),P(`상품이 삭제되었습니다`);return}if(e.target.id===`cart-modal-remove-selected-btn`){O.removeSelectedItems(),P(`선택된 상품들이 삭제되었습니다`);return}if(e.target.id===`cart-modal-clear-cart-btn`){O.clearCart(),P(`장바구니가 비워졌습니다`);return}if(e.target.classList.contains(`cart-item-image`)||e.target.classList.contains(`cart-item-title`)){let t=e.target.dataset.productId;t&&(O.closeModal(),c.navigate(`/product/${t}`));return}},V=e=>{if(e.target.classList.contains(`quantity-input`)){let t=e.target.dataset.productId,n=parseInt(e.target.value)||1;O.updateQuantity(t,n)}},H=e=>{if(e.key===`Escape`){let e=O.getState();e.isModalOpen&&O.closeModal()}},U=()=>{let e=document.getElementById(`root`);return e||console.error(`Root element not found`),e},W=()=>{let e=U();e&&(e.addEventListener(`keydown`,F),e.addEventListener(`change`,I),e.addEventListener(`click`,e=>{L(e),R(e),z(e),B(e)}),e.addEventListener(`input`,e=>{z(e),V(e)}),e.addEventListener(`change`,e=>{I(e),z(e),V(e)}),document.addEventListener(`keydown`,H))},G=()=>{window.addEventListener(`scroll`,te)};function K(e){let{items:t,isModalOpen:n}=e;return n?t.length===0?q():J(e):``}function q(){return`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <!-- 빈 장바구니 -->
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function J(e){let{items:t}=e,n=t.every(e=>e.selected),r=t.filter(e=>e.selected).length,i=t.filter(e=>e.selected).reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0),a=t.reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0);return`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
              <span class="text-sm font-normal text-gray-600 ml-1">(${t.length})</span>
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <!-- 전체 선택 섹션 -->
            <div class="p-4 border-b border-gray-200 bg-gray-50">
              <label class="flex items-center text-sm text-gray-700">
                <input type="checkbox" id="cart-modal-select-all-checkbox" ${n?`checked`:``} class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
                전체선택 (${t.length}개)
              </label>
            </div>
            <!-- 아이템 목록 -->
            <div class="flex-1 overflow-y-auto">
              <div class="p-4 space-y-4">
                ${t.map(e=>Y(e)).join(``)}
              </div>
            </div>
          </div>
          <!-- 하단 액션 -->
          <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            ${r>0?`
              <!-- 선택된 아이템 정보 -->
              <div class="flex justify-between items-center mb-3 text-sm">
                <span class="text-gray-600">선택한 상품 (${r}개)</span>
                <span class="font-medium">${i.toLocaleString()}원</span>
              </div>
            `:``}
            <!-- 총 금액 -->
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-bold text-gray-900">총 금액</span>
              <span class="text-xl font-bold text-blue-600">${a.toLocaleString()}원</span>
            </div>
            <!-- 액션 버튼들 -->
            <div class="space-y-2">
              ${r>0?`
                <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm">
                  선택한 상품 삭제 (${r}개)
                </button>
              `:``}
              <div class="flex gap-2">
                <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                  전체 비우기
                </button>
                <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Y(e){let t=parseInt(e.lprice)*e.quantity;return`
    <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
      <!-- 선택 체크박스 -->
      <label class="flex items-center mr-3">
        <input type="checkbox" ${e.selected?`checked`:``} class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${e.productId}">
      </label>
      <!-- 상품 이미지 -->
      <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.productId}">
      </div>
      <!-- 상품 정보 -->
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.productId}">
          ${e.title}
        </h4>
        <p class="text-sm text-gray-600 mt-1">
          ${parseInt(e.lprice).toLocaleString()}원
        </p>
        <!-- 수량 조절 -->
        <div class="flex items-center mt-2">
          <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" data-product-id="${e.productId}">
          <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 가격 및 삭제 -->
      <div class="text-right ml-3">
        <p class="text-sm font-medium text-gray-900">
          ${t.toLocaleString()}원
        </p>
        <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">
          삭제
        </button>
      </div>
    </div>
  `}const X=e=>{if(c.getCurrentPath()===`/`){let t=document.getElementById(`root`);if(t){let n=O.getState();t.innerHTML=v(e.products,e)+K(n),$()}}},Z=e=>{if(c.getCurrentPath().startsWith(`/product/`)){let t=document.getElementById(`root`);if(t){let n=O.getState();t.innerHTML=b(e.product,e.relatedProducts,e)+K(n),$()}}},Q=e=>{let t=document.getElementById(`root`);if(!t)return;let n=t.querySelector(`.cart-modal`);n&&n.remove();let r=K(e);r&&t.insertAdjacentHTML(`beforeend`,r),$()},$=()=>{let e=O.getState(),t=document.querySelector(`#cart-icon-btn`);if(!t)return;let n=t.querySelector(`span`);if(n&&n.remove(),e.items.length>0){let n=document.createElement(`span`);n.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,n.textContent=e.items.length,t.appendChild(n)}},ne=e=>{if(e&&e.path===`/`&&c.getCurrentPath()===`/`&&w.loadProducts(!0),e&&e.path===`/product`&&c.getCurrentPath().startsWith(`/product/`)){let e=c.getCurrentPath().split(`/`),t=e[2];t&&E.loadProduct(t)}},re=()=>{w.addListener(X),E.addListener(Z),O.addListener(Q),c.addListener(ne)},ie=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CRjX2EoE.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));var ae=class{async init(){await ie(),await this.initialize()}async initialize(){this.setupRoutes(),this.initializeServices(),this.setupListeners(),this.setupEventHandlers(),this.startRouter()}setupRoutes(){N(c)}initializeServices(){O.loadCartFromStorage()}setupListeners(){re()}setupEventHandlers(){W(),G()}startRouter(){c.handleRouteChange()}};const oe=new ae;async function se(){await oe.init()}se();