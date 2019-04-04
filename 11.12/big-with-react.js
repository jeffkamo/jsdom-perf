import React from 'react'
import ReactDOM from 'react-dom'

const doTheThing = () => {
    var appString = `        
        <div class="pw-lockup">
                <div>
                        <div id="app" class="t-app t-app--home" style="display: initial;">
                        <div class="pw-dangerous-html">
                                <div hidden=""></div>
                        </div>
                        <div aria-hidden="false">
                                <div class="pw-skip-links"><a href="#app-main"
                                                        class="pw-skip-links__anchor">Skip
                                to content</a><a href="#header-navigation"
                                                class="pw-skip-links__anchor">Skip to main
                                navigation</a><a href="#app-footer"
                                                class="pw-skip-links__anchor">Skip to
                                footer</a></div>
                                <div id="app-wrap"
                                class="t-app__wrapper u-flexbox u-direction-column">
                                <div id="app-header" class="u-flex-none" role="banner">
                                        <header class="t-header">
                                        <div class="t-header__bar">
                                                <div class="t-header__attic">
                                                <div class="t-header__max-width"><a
                                                        class="pw-link t-header__attic-link"
                                                        href="/customer/account/login/">Login</a><a
                                                        href="/sales/guest/form/"
                                                        class="pw-link t-header__attic-link">Orders
                                                        &amp; Returns</a><a href="/contact/"
                                                                        class="pw-link t-header__attic-link">Help</a>
                                                </div>
                                                </div>
                                                <div class="t-header__bar-wrapper">
                                                <div class="t-header__max-width">
                                                        <div class="pw-header-bar">
                                                        <div class="t-header-bar__title u-padding-start-lg">
                                                                <div class="pw-header-bar__title">
                                                                <a class="pw-link t-header__link"
                                                                href="/">
                                                                        <div class="pw-dangerous-html">
                                                                        <div class="t-header__logo">
                                                                                <svg width="67px"
                                                                                height="28px"
                                                                                viewBox="0 0 67 28"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <g fill="currentColor"
                                                                                stroke="none"
                                                                                stroke-width="1"
                                                                                fill-rule="evenodd">
                                                                                        <path d="M34.7020589,3.40472516 L34.7020589,27.4726323 L36.3999345,27.4726323 L36.3999345,0.38656317 L33.8531211,0.38656317 L28.2192613,24.3383871 L22.5468134,0.38656317 L20,0.38656317 L20,27.4726323 L21.5821113,27.4726323 L21.5821113,3.48211392 L27.2931473,27.4339379 L29.0681991,27.4339379 L34.7020589,3.40472516 Z M39.9252951,0.38656317 L39.9252951,27.4726323 L42.9351655,27.4726323 L42.9351655,16.7929822 L45.5977431,16.7929822 C49.8810201,16.7929822 51.8876003,14.5487079 51.8876003,10.2536312 L51.8876003,7.00330291 C51.8876003,2.90169816 50.0739605,0.38656317 45.8292716,0.38656317 L39.9252951,0.38656317 Z M42.9351655,14.0843753 L42.9351655,3.13386446 L45.8292716,3.13386446 C48.0287922,3.13386446 48.9163181,4.37208477 48.9163181,6.84852537 L48.9163181,10.4471031 C48.9163181,13.0396269 47.8358518,14.0843753 45.5977431,14.0843753 L42.9351655,14.0843753 Z"></path>
                                                                                        <g id="logo-sparkle-1"
                                                                                        transform="translate(50.000000, 1.000000)">
                                                                                        <path d="M10.9295795,0.411803314 L12.33005,3.191019 L15.1093442,4.59156802 C15.4790697,4.77643076 15.6263638,5.22913665 15.4414226,5.59886214 C15.3662069,5.74772488 15.2470697,5.8605092 15.1093442,5.931019 L12.33005,7.33156802 L10.9295795,10.1107837 C10.7447951,10.4805092 10.2919324,10.6293719 9.92220691,10.4429406 C9.77342259,10.3677249 9.66063828,10.2486661 9.59012848,10.1107837 L8.19114808,7.33156802 L5.41177554,5.931019 C5.04205005,5.74458763 4.89483436,5.29337194 5.07977554,4.92364645 C5.15499122,4.77486214 5.27412848,4.66207782 5.41177554,4.59156802 L8.19114808,3.191019 L9.59012848,0.411803314 C9.77655985,0.0420778234 10.2277755,-0.105137863 10.597501,0.0797248822 C10.7462853,0.153371941 10.8591481,0.272430765 10.9295795,0.411803314 L10.9295795,0.411803314 L10.9295795,0.411803314 Z M11.1018932,4.08709743 L10.2604814,2.41705822 L9.41922652,4.08709743 C9.34871671,4.22497978 9.23585397,4.34403861 9.08706965,4.41925429 L7.41554024,5.2605092 L9.08706965,6.10341116 C9.22495201,6.17392096 9.34401083,6.28670527 9.41922652,6.43548959 L10.2604814,8.10709743 L11.1018932,6.43548959 C11.1723246,6.29760724 11.2851873,6.17854841 11.4338932,6.10341116 L13.105501,5.2605092 L11.4338932,4.41925429 C11.2961677,4.34874449 11.1771089,4.23596018 11.1018932,4.08709743 L11.1018932,4.08709743 Z"></path>
                                                                                        <polygon
                                                                                                id="Shape"
                                                                                                points="7.72183784 21.0888649 4.63313514 21.0888649 4.63313514 18 3.0887027 18 3.0887027 21.0888649 0 21.0888649 0 22.6332973 3.0887027 22.6332973 3.0887027 25.7221622 4.63313514 25.7221622 4.63313514 22.6332973 7.72183784 22.6332973"></polygon>
                                                                                        <polygon
                                                                                                id="Shape-Copy"
                                                                                                points="16.5211819 16.6881128 13.8332102 16.6881128 13.8332102 14 12.4891538 14 12.4891538 16.6881128 9.80118214 16.6881128 9.80118214 18.0321692 12.4891538 18.0321692 12.4891538 20.720282 13.8332102 20.720282 13.8332102 18.0321692 16.5211819 18.0321692"></polygon>
                                                                                        </g>
                                                                                        <g id="logo-sparkle-2"
                                                                                        transform="translate(0.000000, 2.000000)">
                                                                                        <path d="M5.92957946,8.41180331 L7.33005005,11.191019 L10.1093442,12.591568 C10.4790697,12.7764308 10.6263638,13.2291366 10.4414226,13.5988621 C10.3662069,13.7477249 10.2470697,13.8605092 10.1093442,13.931019 L7.33005005,15.331568 L5.92957946,18.1107837 C5.74479514,18.4805092 5.2919324,18.6293719 4.92220691,18.4429406 C4.77342259,18.3677249 4.66063828,18.2486661 4.59012848,18.1107837 L3.19114808,15.331568 L0.411775536,13.931019 C0.0420500456,13.7445876 -0.105165641,13.2933719 0.0797755358,12.9236465 C0.154991222,12.7748621 0.274128477,12.6620778 0.411775536,12.591568 L3.19114808,11.191019 L4.59012848,8.41180331 C4.77655985,8.04207782 5.22777554,7.89486214 5.59750103,8.07972488 C5.74628534,8.15337194 5.85914808,8.27243076 5.92957946,8.41180331 L5.92957946,8.41180331 L5.92957946,8.41180331 Z M6.10189318,12.0870974 L5.26048142,10.4170582 L4.41922652,12.0870974 C4.34871671,12.2249798 4.23585397,12.3440386 4.08706965,12.4192543 L2.41554024,13.2605092 L4.08706965,14.1034112 C4.22495201,14.173921 4.34401083,14.2867053 4.41922652,14.4354896 L5.26048142,16.1070974 L6.10189318,14.4354896 C6.17232456,14.2976072 6.2851873,14.1785484 6.43389318,14.1034112 L8.10550103,13.2605092 L6.43389318,12.4192543 C6.29616769,12.3487445 6.17710887,12.2359602 6.10189318,12.0870974 L6.10189318,12.0870974 Z"></path>
                                                                                        <polygon
                                                                                                id="Shape-Copy-3"
                                                                                                points="16.7218378 3.08886486 13.6331351 3.08886486 13.6331351 0 12.0887027 0 12.0887027 3.08886486 9 3.08886486 9 4.6332973 12.0887027 4.6332973 12.0887027 7.72216216 13.6331351 7.72216216 13.6331351 4.6332973 16.7218378 4.6332973"></polygon>
                                                                                        <polygon
                                                                                                id="Shape-Copy-4"
                                                                                                points="15.7199998 19.288096 13.4320239 19.288096 13.4320239 17 12.2879759 17 12.2879759 19.288096 10 19.288096 10 20.432144 12.2879759 20.432144 12.2879759 22.72024 13.4320239 22.72024 13.4320239 20.432144 15.7199998 20.432144"></polygon>
                                                                                        </g>
                                                                                </g>
                                                                                </svg>
                                                                        </div>
                                                                        </div>
                                                                        <h1 class="u-visually-hidden">
                                                                        Merlin\'s
                                                                        Potions</h1></a>
                                                                </div>
                                                        </div>
                                                        <div class="t-header__grouped-actions">
                                                                <div class="pw-search t-header__search"
                                                                role="search">
                                                                <div class="pw-search__inner">
                                                                        <form class="pw-search__form"
                                                                        action="javascript:void(0)">
                                                                        <div class="pw-search__bar">
                                                                                <div class="pw-search__icon pw--is-not-clickable">
                                                                                <svg aria-hidden="true"
                                                                                        class="pw-icon pw-search__icon-content"
                                                                                        title=""
                                                                                        aria-labelledby="icon-3b96a7a4-7edc-42f3-bc02-72f88c32c937">
                                                                                        <title id="icon-3b96a7a4-7edc-42f3-bc02-72f88c32c937"></title>
                                                                                        <use role="presentation"
                                                                                        xlink:href="#pw-search"></use>
                                                                                </svg>
                                                                                </div>
                                                                                <div class="pw-search__field">
                                                                                <label for="search-0"
                                                                                        class="u-visually-hidden">Search</label><input
                                                                                        type="search"
                                                                                        class="pw-search__input"
                                                                                        id="search-0"
                                                                                        value=""
                                                                                        name="query"
                                                                                        data-analytics-name="search"
                                                                                        placeholder="Search the entire store">
                                                                                </div>
                                                                                <div class="pw-search__button-submit">
                                                                                <button disabled=""
                                                                                        class="pw-button pw--secondary t-header__search-submit-button"
                                                                                        data-analytics-name="search"
                                                                                        type="submit">
                                                                                        <div class="pw-button__inner">
                                                                                        <svg role="img"
                                                                                                class="pw-icon"
                                                                                                title="Submit search"
                                                                                                aria-labelledby="icon-b520daf7-8f6c-410d-aa26-c1917103b2bb">
                                                                                                <title id="icon-b520daf7-8f6c-410d-aa26-c1917103b2bb">
                                                                                                Submit
                                                                                                search</title>
                                                                                                <use role="presentation"
                                                                                                xlink:href="#pw-search"></use>
                                                                                        </svg>
                                                                                        </div>
                                                                                </button>
                                                                                </div>
                                                                        </div>
                                                                        </form>
                                                                        <section
                                                                                class="pw-search__suggestions pw--is-empty">
                                                                        <div tabindex="0"></div>
                                                                        </section>
                                                                </div>
                                                                <div tabindex="-1"
                                                                        role="presentation"
                                                                        class="pw-search__shade"></div>
                                                                </div>
                                                                <div class="pw-header-bar__actions t-header-bar__stores">
                                                                <a href="//locations.merlinspotions.com"
                                                                class="pw-link pw-button pw--anchor t-header__link"
                                                                data-analytics-name="show_store_locator">
                                                                        <div class="pw-button__inner t-header__inner-button u-padding-0">
                                                                        <div>
                                                                                <div class="pw-icon-label">
                                                                                <div>
                                                                                        <svg aria-hidden="true"
                                                                                        class="pw-icon pw--medium"
                                                                                        title=""
                                                                                        aria-labelledby="icon-7a5b9cb0-1760-44a8-8941-7c10f14fd147">
                                                                                        <title id="icon-7a5b9cb0-1760-44a8-8941-7c10f14fd147"></title>
                                                                                        <use role="presentation"
                                                                                                xlink:href="#pw-map"></use>
                                                                                        </svg>
                                                                                        <span class="pw-icon-label__label">Stores</span>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </div>
                                                                </a></div>
                                                                <div class="pw-header-bar__actions t-header-bar__cart">
                                                                <button class="pw-button u-position-relative qa-header__cart"
                                                                        data-analytics-name="show_mini_cart"
                                                                        type="button">
                                                                        <div class="pw-button__inner t-header__inner-button u-padding-0">
                                                                        <div>
                                                                                <div class="pw-icon-label">
                                                                                <div>
                                                                                        <svg aria-hidden="true"
                                                                                        class="pw-icon pw--medium"
                                                                                        title=""
                                                                                        aria-labelledby="icon-67f23aa2-b731-4a9c-a360-df9e5f995119">
                                                                                        <title id="icon-67f23aa2-b731-4a9c-a360-df9e5f995119"></title>
                                                                                        <use role="presentation"
                                                                                                xlink:href="#pw-cart"></use>
                                                                                        </svg>
                                                                                        <span class="pw-icon-label__label">Cart</span>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <p class="u-visually-hidden">
                                                                                No items in the
                                                                                cart.</p></div>
                                                                </button>
                                                                </div>
                                                        </div>
                                                        </div>
                                                </div>
                                                </div>
                                                <div class="t-header__mega-nav">
                                                <div class="t-header__max-width">
                                                        <div class="c-mega-navigation">
                                                        <nav class="pw-nav">
                                                                <div role="list"
                                                                class="pw-mega-menu">
                                                                <div aria-level="0"
                                                                        role="listitem"
                                                                        class="pw-mega-menu-item pw--has-children pw--depth-0 pw--active">
                                                                        <div class="pw-list-tile pw-mega-menu-item__content pw--has-children pw--depth-0 pw--active">
                                                                        <div role="button"
                                                                                class="pw-list-tile__primary"
                                                                                tabindex="-1">
                                                                                <div class="pw-list-tile__content">
                                                                                Root
                                                                                </div>
                                                                        </div>
                                                                        </div>
                                                                        <div role="list"
                                                                        class="pw-mega-menu-item__children pw--depth-0 pw--active"
                                                                        aria-hidden="false"
                                                                        aria-expanded="true">
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Potions
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Books
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Ingredients
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Supplies
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Charms
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        New
                                                                                        Arrivals
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        <div aria-level="1"
                                                                                role="listitem"
                                                                                class="pw-mega-menu-item pw--depth-1">
                                                                                <div class="pw-list-tile pw-mega-menu-item__content pw--depth-1">
                                                                                <div role="button"
                                                                                        class="pw-list-tile__primary"
                                                                                        tabindex="0">
                                                                                        <div class="pw-list-tile__content">
                                                                                        Starters
                                                                                        Kit
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </nav>
                                                        </div>
                                                </div>
                                                </div>
                                        </div>
                                        </header>
                                        <div class="c-notification-manager u-padding-top-md u-padding-bottom-md u-padding-start u-padding-end"></div>
                                </div>
                                <div class="u-flexbox u-flex u-direction-column">
                                        <main id="app-main" class="t-app__main u-flex"
                                        role="main">
                                        <div class="t-home__container">
                                                <div class="t-home__carousel">
                                                <div class="pw-carousel pw--side-controls pw--side-controls-with-tight-space">
                                                        <div class="pw-carousel__inner"
                                                        style="transform: translate3d(0, 0, 0);">
                                                        <div class="pw-carousel__item"
                                                                aria-hidden="true"
                                                                aria-live="">
                                                                <div style="display: none;">
                                                                <div class="pw-image u-display-block">
                                                                        <span><span><div
                                                                                class="pw-ratio"><div
                                                                                class="pw-ratio__fill"
                                                                                style="padding-bottom: 41.640625%;"></div><div
                                                                                class="pw-ratio__inner"><div
                                                                                width="4000px"
                                                                                height="2490px"
                                                                                style="height: 2490px; width: 4000px;"
                                                                                type="div"
                                                                                role="presentation"
                                                                                class="pw-skeleton-block"></div></div></div></span><img
                                                                                class="pw-image__tag u-visually-hidden"
                                                                                alt=""
                                                                                height="auto"
                                                                                width="100%"
                                                                                draggable="auto"
                                                                                src="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243"
                                                                                srcset="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243,/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE@2x.png?b5ffb243 2x"></span>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__item pw--active"
                                                                aria-hidden="false"
                                                                aria-live="polite">
                                                                <div style="display: block;">
                                                                <div class="pw-image u-display-block">
                                                                        <span><span><div
                                                                                class="pw-ratio"><div
                                                                                class="pw-ratio__fill"
                                                                                style="padding-bottom: 41.640625%;"></div><div
                                                                                class="pw-ratio__inner"><div
                                                                                width="4000px"
                                                                                height="2490px"
                                                                                style="height: 2490px; width: 4000px;"
                                                                                type="div"
                                                                                role="presentation"
                                                                                class="pw-skeleton-block"></div></div></div></span><img
                                                                                class="pw-image__tag u-visually-hidden"
                                                                                alt=""
                                                                                height="auto"
                                                                                width="100%"
                                                                                draggable="auto"
                                                                                src="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243"
                                                                                srcset="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243,/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE@2x.png?b5ffb243 2x"></span>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__item"
                                                                aria-hidden="true"
                                                                aria-live="">
                                                                <div style="display: none;">
                                                                <div class="pw-image u-display-block">
                                                                        <span><span><div
                                                                                class="pw-ratio"><div
                                                                                class="pw-ratio__fill"
                                                                                style="padding-bottom: 41.640625%;"></div><div
                                                                                class="pw-ratio__inner"><div
                                                                                width="4000px"
                                                                                height="2490px"
                                                                                style="height: 2490px; width: 4000px;"
                                                                                type="div"
                                                                                role="presentation"
                                                                                class="pw-skeleton-block"></div></div></div></span><img
                                                                                class="pw-image__tag u-visually-hidden"
                                                                                alt=""
                                                                                height="auto"
                                                                                width="100%"
                                                                                draggable="auto"
                                                                                src="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243"
                                                                                srcset="/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE.png?b5ffb243,/mobify/bundle/1041/static/img/homepage_carousel/promo-LARGE@2x.png?b5ffb243 2x"></span>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        </div>
                                                        <div class="pw-carousel__controls">
                                                        <div class="pw-carousel__previous">
                                                                <button class="pw-button"
                                                                        data-analytics-name="carousel"
                                                                        data-analytics-content="previous"
                                                                        type="button">
                                                                <div class="pw-button__inner">
                                                                        <svg role="img"
                                                                        class="pw-icon"
                                                                        title="Show slide 4 of 4"
                                                                        aria-labelledby="icon-b7536465-80fd-4017-a8ca-728d164954af">
                                                                        <title id="icon-b7536465-80fd-4017-a8ca-728d164954af">
                                                                                Show slide 4 of
                                                                                4</title>
                                                                        <use role="presentation"
                                                                                xlink:href="#pw-chevron-left"></use>
                                                                        </svg>
                                                                </div>
                                                                </button>
                                                        </div>
                                                        <div class="pw-carousel__pips">
                                                                <div class="pw-carousel__pip pw--active">
                                                                <span class="u-visually-hidden">Current slide: 1</span>
                                                                </div>
                                                                <div class="pw-carousel__pip">
                                                                <span class="u-visually-hidden">Slide 2</span>
                                                                </div>
                                                                <div class="pw-carousel__pip">
                                                                <span class="u-visually-hidden">Slide 3</span>
                                                                </div>
                                                                <div class="pw-carousel__pip">
                                                                <span class="u-visually-hidden">Slide 4</span>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__next">
                                                                <button class="pw-button"
                                                                        data-analytics-name="carousel"
                                                                        data-analytics-content="next"
                                                                        type="button">
                                                                <div class="pw-button__inner">
                                                                        <svg role="img"
                                                                        class="pw-icon"
                                                                        title="Show slide 2 of 4"
                                                                        aria-labelledby="icon-018cda4f-b2ed-42fd-ad79-484e5379c903">
                                                                        <title id="icon-018cda4f-b2ed-42fd-ad79-484e5379c903">
                                                                                Show slide 2 of
                                                                                4</title>
                                                                        <use role="presentation"
                                                                                xlink:href="#pw-chevron-right"></use>
                                                                        </svg>
                                                                </div>
                                                                </button>
                                                        </div>
                                                        </div>
                                                </div>
                                                </div>
                                                <article class="c-card">
                                                <div class="c-card__inner">
                                                        <div class="c-card__content">
                                                        <div class="t-home__category u-padding-start-lg u-padding-end-lg">
                                                                <a class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/potions.html">
                                                                <div class="pw-button__inner">
                                                                        <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                                <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="Potions"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/potions@2x.png?e09606a6"></span>
                                                                                </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                                Potions
                                                                        </div>
                                                                        </div>
                                                                </div>
                                                                </a><a
                                                                class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/books.html">
                                                                <div class="pw-button__inner">
                                                                <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                        <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="Books"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/books@2x.png?c83d234d"></span>
                                                                        </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                        Books
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </a><a class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/ingredients.html">
                                                                <div class="pw-button__inner">
                                                                <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                        <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="Ingredients"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/ingredients@2x.png?3d1b2525"></span>
                                                                        </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                        Ingredients
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </a><a class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/supplies.html">
                                                                <div class="pw-button__inner">
                                                                <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                        <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="Supplies"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/supplies@2x.png?4939e3c9"></span>
                                                                        </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                        Supplies
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </a><a class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/charms.html">
                                                                <div class="pw-button__inner">
                                                                <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                        <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="Charms"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/charms@2x.png?0e02073b"></span>
                                                                        </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                        Charms
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </a><a class="pw-link pw-button pw--anchor t-home__category-item u-padding-bottom-lg"
                                                                href="/new-arrivals.html">
                                                                <div class="pw-button__inner">
                                                                <div class="u-flex">
                                                                        <div class="c-lazy-load-content u-text-align-center">
                                                                        <div class="pw-image">
                                                                                <span><span><div
                                                                                        type="div"
                                                                                        class="pw-skeleton-block pw--image"
                                                                                        style="height: 60px; width: 60px;"
                                                                                        height="auto"
                                                                                        width="100%"
                                                                                        role="presentation"></div></span><img
                                                                                        class="pw-image__tag u-visually-hidden"
                                                                                        alt="New Arrivals"
                                                                                        height="60px"
                                                                                        width="60px"
                                                                                        draggable="auto"
                                                                                        src="/mobify/bundle/1041/static/img/categories/new-arrivals@2x.png?d80534b5"></span>
                                                                        </div>
                                                                        </div>
                                                                        <div class="t-home__category-text u-text-align-center">
                                                                        New Arrivals
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </a></div>
                                                        </div>
                                                </div>
                                                </article>
                                                <div class="t-home__popular-items">
                                                <div class="u-margin-bottom-md u-padding-start-md u-padding-end-md u-flexbox u-align-center">
                                                        <h2 class="u-h4 u-padding-top-lg">New in
                                                        Category</h2></div>
                                                <div class="pw-carousel pw--side-controls pw--side-controls-with-tight-space">
                                                        <div class="pw-carousel__inner"
                                                        style="transform: translate3d(0, 0, 0);">
                                                        <div class="pw-carousel__item"
                                                                aria-hidden="true"
                                                                aria-live="">
                                                                <div style="display: none;">
                                                                <div class="u-text-height-single u-flexbox u-text-height-base u-text-align-start">
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/sleeping-draught.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Sleeping Draught"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/s/l/sleeping-draught-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/sleeping-draught.html">Sleeping
                                                                                                Draught</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$24.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/polyjuice-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Polyjuice Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/p/o/polyjuice-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/polyjuice-potion.html">Polyjuice
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$35.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/love-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Love Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/l/o/love-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/love-potion.html">Love
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$6.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/dragon-tonic.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Dragon Tonic"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/d/r/dragon-tonic-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/dragon-tonic.html">Dragon
                                                                                                Tonic</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$60.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/aging-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Aging Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/a/g/aging-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/aging-potion.html">Aging
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$25.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/unicorn-blood.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Unicorn Blood Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/u/n/unicorn-blood-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/unicorn-blood.html">Unicorn
                                                                                                Blood</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$14.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__item pw--active"
                                                                aria-hidden="false"
                                                                aria-live="polite">
                                                                <div style="display: block;">
                                                                <div class="u-text-height-single u-flexbox u-text-height-base u-text-align-start">
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/eye-of-newt.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Eye of Newt Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/e/y/eye-of-newt-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/eye-of-newt.html">Eye
                                                                                                Of
                                                                                                Newt</a>
                                                                                        </header>
                                                                                </div>
                                                                                <div class="pw-rating pw-tile__rating-stars pw--solid">
                                                                                        <div class="pw-rating__label">
                                                                                        Rating
                                                                                        is 5
                                                                                        out
                                                                                        of 5
                                                                                        </div>
                                                                                        <div class="pw-rating__icon-wrapper"
                                                                                        role="presentation"
                                                                                        aria-hidden="true">
                                                                                        <div class="pw-rating__filled-icons"
                                                                                                style="width: 100%;">
                                                                                                <div class="pw-rating__icon pw--filled">
                                                                                                <svg aria-hidden="true"
                                                                                                        class="pw-icon"
                                                                                                        title=""
                                                                                                        aria-labelledby="icon-9e911a42-e295-499d-86cd-4519d5720aa5">
                                                                                                        <title id="icon-9e911a42-e295-499d-86cd-4519d5720aa5"></title>
                                                                                                        <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                                </div>
                                                                                                <div class="pw-rating__icon pw--filled">
                                                                                                <svg aria-hidden="true"
                                                                                                        class="pw-icon"
                                                                                                        title=""
                                                                                                        aria-labelledby="icon-a6651982-9f44-4047-881f-72dcf87a681b">
                                                                                                        <title id="icon-a6651982-9f44-4047-881f-72dcf87a681b"></title>
                                                                                                        <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                                </div>
                                                                                                <div class="pw-rating__icon pw--filled">
                                                                                                <svg aria-hidden="true"
                                                                                                        class="pw-icon"
                                                                                                        title=""
                                                                                                        aria-labelledby="icon-8ec63232-0d75-48d2-a845-9a46e2cc351b">
                                                                                                        <title id="icon-8ec63232-0d75-48d2-a845-9a46e2cc351b"></title>
                                                                                                        <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                                </div>
                                                                                                <div class="pw-rating__icon pw--filled">
                                                                                                <svg aria-hidden="true"
                                                                                                        class="pw-icon"
                                                                                                        title=""
                                                                                                        aria-labelledby="icon-28f09079-bc0f-4e4e-a7b3-cc5a7269ea91">
                                                                                                        <title id="icon-28f09079-bc0f-4e4e-a7b3-cc5a7269ea91"></title>
                                                                                                        <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                                </div>
                                                                                                <div class="pw-rating__icon pw--filled">
                                                                                                <svg aria-hidden="true"
                                                                                                        class="pw-icon"
                                                                                                        title=""
                                                                                                        aria-labelledby="icon-e606ec1a-5ed1-4aa8-85f1-5c9f063e398d">
                                                                                                        <title id="icon-e606ec1a-5ed1-4aa8-85f1-5c9f063e398d"></title>
                                                                                                        <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="pw-rating__icon">
                                                                                                <svg aria-hidden="true"
                                                                                                class="pw-icon"
                                                                                                title=""
                                                                                                aria-labelledby="icon-1cc21358-eb78-484f-b0b8-fbe0c5e4a1ca">
                                                                                                <title id="icon-1cc21358-eb78-484f-b0b8-fbe0c5e4a1ca"></title>
                                                                                                <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                        </div>
                                                                                        <div class="pw-rating__icon">
                                                                                                <svg aria-hidden="true"
                                                                                                class="pw-icon"
                                                                                                title=""
                                                                                                aria-labelledby="icon-ad302334-50b0-4191-8937-46b58f3ce213">
                                                                                                <title id="icon-ad302334-50b0-4191-8937-46b58f3ce213"></title>
                                                                                                <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                        </div>
                                                                                        <div class="pw-rating__icon">
                                                                                                <svg aria-hidden="true"
                                                                                                class="pw-icon"
                                                                                                title=""
                                                                                                aria-labelledby="icon-aedaea31-de93-4c7e-a41f-c767bebf9c06">
                                                                                                <title id="icon-aedaea31-de93-4c7e-a41f-c767bebf9c06"></title>
                                                                                                <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                        </div>
                                                                                        <div class="pw-rating__icon">
                                                                                                <svg aria-hidden="true"
                                                                                                class="pw-icon"
                                                                                                title=""
                                                                                                aria-labelledby="icon-1f1c00b8-bdf5-4004-bc44-046199504197">
                                                                                                <title id="icon-1f1c00b8-bdf5-4004-bc44-046199504197"></title>
                                                                                                <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                        </div>
                                                                                        <div class="pw-rating__icon">
                                                                                                <svg aria-hidden="true"
                                                                                                class="pw-icon"
                                                                                                title=""
                                                                                                aria-labelledby="icon-d69a2185-87e7-4faf-97de-3ab9d0ea7416">
                                                                                                <title id="icon-d69a2185-87e7-4faf-97de-3ab9d0ea7416"></title>
                                                                                                <use role="presentation"
                                                                                                        xlink:href="#pw-star"></use>
                                                                                                </svg>
                                                                                        </div>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$12.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/growth-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Growth Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/g/r/growth_potion.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/growth-potion.html">Growth
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$100.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/potion-of-greater-strength.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Potion of Greater Strength"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/6/1/61nmylrgpdl._sl1000__1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/potion-of-greater-strength.html">Potion
                                                                                                of
                                                                                                Greater
                                                                                                Strength</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$50.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/shrink-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Shrink Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/l/e/led_potion.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/shrink-potion.html">Shrink
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$0.01</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/potion-of-luck.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Potion of Luck"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/p/o/potion-of-luck.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/potion-of-luck.html">Potion
                                                                                                of
                                                                                                Luck</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$77.77</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/potion-113.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Potion 113"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/p/o/potion_n.113.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/potion-113.html">Potion
                                                                                                113</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$15.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__item"
                                                                aria-hidden="true"
                                                                aria-live="">
                                                                <div style="display: none;">
                                                                <div class="u-text-height-single u-flexbox u-text-height-base u-text-align-start">
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/sleeping-draught.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Sleeping Draught"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/s/l/sleeping-draught-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/sleeping-draught.html">Sleeping
                                                                                                Draught</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$24.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/polyjuice-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Polyjuice Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/p/o/polyjuice-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/polyjuice-potion.html">Polyjuice
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$35.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/love-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Love Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/l/o/love-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/love-potion.html">Love
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$6.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/dragon-tonic.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Dragon Tonic"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/d/r/dragon-tonic-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/dragon-tonic.html">Dragon
                                                                                                Tonic</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$60.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/aging-potion.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Aging Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/a/g/aging-potion-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/aging-potion.html">Aging
                                                                                                Potion</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$25.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                        <article
                                                                                class="pw-tile pw--column u-flex">
                                                                        <a class="pw-link pw-tile__primary"
                                                                        href="/potions/unicorn-blood.html">
                                                                                <div class="pw-image">
                                                                                <div class="pw-ratio">
                                                                                        <div class="pw-ratio__fill"
                                                                                        style="padding-bottom: 125%;"></div>
                                                                                        <div class="pw-ratio__inner">
                                                                                        <span><span><div
                                                                                                type="div"
                                                                                                class="pw-skeleton-block pw--image"
                                                                                                height="auto"
                                                                                                width="100%"
                                                                                                role="presentation"></div></span><img
                                                                                                class="pw-image__tag u-visually-hidden"
                                                                                                alt="Unicorn Blood Potion"
                                                                                                height="300"
                                                                                                width="240"
                                                                                                draggable="auto"
                                                                                                src="https://www.merlinspotions.com/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/u/n/unicorn-blood-1.jpg"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </a>
                                                                        <div class="pw-tile__details">
                                                                                <div class="pw-tile__info">
                                                                                <div class="pw-tile__info-inner">
                                                                                        <header class="pw-tile__header">
                                                                                        <a class="pw-link pw-tile__primary"
                                                                                        href="/potions/unicorn-blood.html">Unicorn
                                                                                                Blood</a>
                                                                                        </header>
                                                                                </div>
                                                                                </div>
                                                                                <div class="pw-tile__footer">
                                                                                <div class="pw-tile__footer-inner">
                                                                                        <div class="pw-tile__quantity"></div>
                                                                                        <div class="pw-tile__price">
                                                                                        <span itemprop="price"><span>$14.00</span><meta
                                                                                                itemprop="priceCurrency"
                                                                                                content="USD"></span>
                                                                                        </div>
                                                                                </div>
                                                                                </div>
                                                                        </div>
                                                                        </article>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        </div>
                                                        <div class="pw-carousel__controls">
                                                        <div class="pw-carousel__previous">
                                                                <button disabled=""
                                                                        class="pw-button"
                                                                        data-analytics-name="carousel"
                                                                        data-analytics-content="previous"
                                                                        type="button">
                                                                <div class="pw-button__inner">
                                                                        <svg role="img"
                                                                        class="pw-icon"
                                                                        title="Show slide 2 of 2"
                                                                        aria-labelledby="icon-e1ad2890-2daa-4eb5-98c4-a61c1042725b">
                                                                        <title id="icon-e1ad2890-2daa-4eb5-98c4-a61c1042725b">
                                                                                Show slide 2 of
                                                                                2</title>
                                                                        <use role="presentation"
                                                                                xlink:href="#pw-chevron-left"></use>
                                                                        </svg>
                                                                </div>
                                                                </button>
                                                        </div>
                                                        <div class="pw-carousel__pips">
                                                                <div class="pw-carousel__pip pw--active">
                                                                <span class="u-visually-hidden">Current slide: 1</span>
                                                                </div>
                                                                <div class="pw-carousel__pip">
                                                                <span class="u-visually-hidden">Slide 2</span>
                                                                </div>
                                                        </div>
                                                        <div class="pw-carousel__next">
                                                                <button class="pw-button"
                                                                        data-analytics-name="carousel"
                                                                        data-analytics-content="next"
                                                                        type="button">
                                                                <div class="pw-button__inner">
                                                                        <svg role="img"
                                                                        class="pw-icon"
                                                                        title="Show slide 2 of 2"
                                                                        aria-labelledby="icon-8b28f6cb-4a5e-4aa8-a519-fff39561ffd2">
                                                                        <title id="icon-8b28f6cb-4a5e-4aa8-a519-fff39561ffd2">
                                                                                Show slide 2 of
                                                                                2</title>
                                                                        <use role="presentation"
                                                                                xlink:href="#pw-chevron-right"></use>
                                                                        </svg>
                                                                </div>
                                                                </button>
                                                        </div>
                                                        </div>
                                                </div>
                                                </div>
                                        </div>
                                        </main>
                                        <div id="app-footer" class="u-flex-none">
                                        <footer class="t-footer">
                                                <div class="t-footer__navigation"></div>
                                                <div class="t-footer__extras">
                                                <button class="pw-button t-footer__locale"
                                                        type="button">
                                                        <div class="pw-button__inner">
                                                        <svg role="img"
                                                                class="pw-icon pw--medium u-margin-end-md"
                                                                title="Canada"
                                                                aria-labelledby="icon-dafa11cd-5c31-4cbe-aae9-8ddecc9374ad">
                                                                <title id="icon-dafa11cd-5c31-4cbe-aae9-8ddecc9374ad">
                                                                Canada</title>
                                                                <use role="presentation"
                                                                xlink:href="#pw-flag-ca"></use>
                                                        </svg>
                                                        Canada (English)
                                                        </div>
                                                </button>
                                                </div>
                                                <p class="qa-footer__copyright">© 2018 Mobify
                                                Research &amp; Development Inc.</p></footer>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div class="m-modal-manager">
                                <div class="m-modal-manager__open-modals"></div>
                                <div class="m-modal-manager__pre-rendered-modals">
                                <div class="pw-sheet__outer-wrapper">
                                        <div style="z-index: 1000; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; pointer-events: none;"></div>
                                        <div class="pw-sheet__prerendered-children u-visually-hidden m-navigation"
                                        aria-hidden="true">
                                        <nav class="pw-nav m-navigation__wrapper">
                                                <div class="pw-header-bar"><a
                                                        class="pw-link pw-header-bar__title u-flex u-padding-start u-text-align-start u-color-neutral-00"
                                                        href="/"><h2
                                                        class="u-text-family-header u-text-uppercase">
                                                <span class="u-text-weight-extra-light">Menu</span>
                                                </h2></a>
                                                <div class="pw-header-bar__actions">
                                                        <button class="pw-button c-icon-label-button"
                                                                data-analytics-name="dismiss_modal"
                                                                type="button">
                                                        <div class="pw-button__inner u-padding-0">
                                                                <div>
                                                                <div class="pw-icon-label">
                                                                        <div>
                                                                        <svg aria-hidden="true"
                                                                                class="pw-icon pw--medium"
                                                                                title=""
                                                                                aria-labelledby="icon-66b74c2b-a8fe-41b5-9a4b-0286eeb291b9">
                                                                                <title id="icon-66b74c2b-a8fe-41b5-9a4b-0286eeb291b9"></title>
                                                                                <use role="presentation"
                                                                                xlink:href="#pw-close"></use>
                                                                        </svg>
                                                                        <span class="pw-icon-label__label">close</span>
                                                                        </div>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        </button>
                                                </div>
                                                </div>
                                                <div class="pw-nav-menu">
                                                <div class="pw-nav-slider pw-nav-menu__slider">
                                                        <div class="pw-nav-menu__panel">
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/potions.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Potions
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/books.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Books
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/ingredients.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Ingredients
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/supplies.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Supplies
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/charms.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Charms
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/new-arrivals.html">
                                                                        <div class="pw-list-tile__content">
                                                                        New Arrivals
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/starters-kit.html">
                                                                        <div class="pw-list-tile__content">
                                                                        Starters Kit
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        <div>
                                                                <div class="pw-list-tile pw--is-anchor pw-nav-item u-margin-top-md u-border-top pw--with-icon">
                                                                <a class="pw-link pw-list-tile__primary"
                                                                tabindex="0"
                                                                href="/customer/account/login/">
                                                                        <div class="pw-list-tile__action">
                                                                        <div class="c-nav-item__icon">
                                                                                <svg aria-hidden="true"
                                                                                class="pw-icon c-nav-item__icon-content"
                                                                                title=""
                                                                                aria-labelledby="icon-5f5b5afb-4cc1-4dbf-9843-70975160459c">
                                                                                <title id="icon-5f5b5afb-4cc1-4dbf-9843-70975160459c"></title>
                                                                                <use role="presentation"
                                                                                        xlink:href="#pw-user"></use>
                                                                                </svg>
                                                                        </div>
                                                                        </div>
                                                                        <div class="pw-list-tile__content">
                                                                        Sign In
                                                                        </div>
                                                                </a></div>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div class="pw-nav-menu__non-expanded-items u-visually-hidden"
                                                        aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                <div class="m-navigation__social">
                                                        <div class="u-flexbox u-justify-center">
                                                        <a href="http://www.facebook.com/#TODO"
                                                        class="m-navigation__social-link">
                                                                <div class="pw-image">
                                                                <span><span><div type="div"
                                                                                class="pw-skeleton-block pw--image"
                                                                                style="height: 32px; width: 32px;"
                                                                                height="auto"
                                                                                width="100%"
                                                                                role="presentation"></div></span><img
                                                                        class="pw-image__tag u-visually-hidden"
                                                                        alt="Facebook"
                                                                        height="32px"
                                                                        width="32px"
                                                                        draggable="auto"
                                                                        src="/mobify/bundle/1041/static/svg/facebook.svg?20151da8"></span>
                                                                </div>
                                                        </a><a
                                                                href="http://www.twitter.com/#TODO"
                                                                class="m-navigation__social-link">
                                                        <div class="pw-image"><span><span><div
                                                                type="div"
                                                                class="pw-skeleton-block pw--image"
                                                                style="height: 32px; width: 32px;"
                                                                height="auto" width="100%"
                                                                role="presentation"></div></span><img
                                                                class="pw-image__tag u-visually-hidden"
                                                                alt="Twitter" height="32px"
                                                                width="32px"
                                                                draggable="auto"
                                                                src="/mobify/bundle/1041/static/svg/twitter.svg?69958ca5"></span>
                                                        </div>
                                                        </a><a href="http://plus.google.com/#TODO"
                                                        class="m-navigation__social-link">
                                                        <div class="pw-image"><span><span><div
                                                                type="div"
                                                                class="pw-skeleton-block pw--image"
                                                                style="height: 32px; width: 32px;"
                                                                height="auto" width="100%"
                                                                role="presentation"></div></span><img
                                                                class="pw-image__tag u-visually-hidden"
                                                                alt="Google+" height="32px"
                                                                width="32px"
                                                                draggable="auto"
                                                                src="/mobify/bundle/1041/static/svg/googleplus.svg?dee09d3d"></span>
                                                        </div>
                                                        </a><a href="http://www.youtube.com/#TODO"
                                                        class="m-navigation__social-link">
                                                        <div class="pw-image"><span><span><div
                                                                type="div"
                                                                class="pw-skeleton-block pw--image"
                                                                style="height: 32px; width: 32px;"
                                                                height="auto" width="100%"
                                                                role="presentation"></div></span><img
                                                                class="pw-image__tag u-visually-hidden"
                                                                alt="Youtube" height="32px"
                                                                width="32px"
                                                                draggable="auto"
                                                                src="/mobify/bundle/1041/static/svg/youtube.svg?e60c06d4"></span>
                                                        </div>
                                                        </a></div>
                                                </div>
                                                <div class="m-navigation__copyright u-padding-md">
                                                        <p>© 2017 Mobify Research &amp;
                                                        Development Inc. All rights
                                                        reserved.</p></div>
                                                </div>
                                        </nav>
                                        </div>
                                </div>
                                </div>
                        </div>
                        </div>
                </div>
        </div>
    `

    const html = () => {
        return {__html: appString}
    }

    var app = (
        <div dangerouslySetInnerHTML={html}></div>
    )
    
    ReactDOM.render(
        app,
        document.getElementById('target')
    )
}

export default doTheThing