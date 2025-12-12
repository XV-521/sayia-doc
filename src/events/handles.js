import {selectors} from "../basic/selectors.js";

import {
    handleClickSearchBtn,
    handleClickSayiaWord,
    handleClickTipBtn,
    handleKeydownSearchInput,
    handleRepositionTip
} from './show-tip.js';

import {handleClickCopyBtn} from "./copy.js";
import {handleClickLink} from "./click-link.js";
import {handleSideArrow, handleClickSideNavXBtn, handleClickHeaderMenuBtn} from "./click-side.js";
import {handleInitTheme, handleSwitchTheme} from "./switch-theme.js";
import {renderAndFocus} from "./initialize.js";
import {refreshSiteState} from "./refresh-site-state.js";


/**
 * @typedef {{
 *   e: Event,
 *   el: Element,
 * }} handleObj
 */


/**
 * @param {Event} e
 * @param {string} selector
 * @param {(obj: handleObj) => void} handler
 * @returns {boolean}
 * */
function focusWrapper(e, selector, handler) {

    const el = e.target.closest(selector);
    if (el === null) return false;

    /** @type {handleObj} */
    const obj = {e, el};
    handler(obj);

    return true
}


export function handleClick(e) {
    if (focusWrapper(e, selectors.innerLink, handleClickLink)) return;
    if (focusWrapper(e, selectors.searchBtn, handleClickSearchBtn)) return;
    if (focusWrapper(e, selectors.sayiaWord, handleClickSayiaWord)) return;
    if (focusWrapper(e, selectors.wordTipBtn, handleClickTipBtn)) return;
    if (focusWrapper(e, selectors.copyBtn, handleClickCopyBtn)) return;
    if (focusWrapper(e, selectors.headerMenuBtn, handleClickHeaderMenuBtn)) return;
    if (focusWrapper(e, selectors.sideArrow, handleSideArrow)) return;
    if (focusWrapper(e, selectors.sideNavXBtn, handleClickSideNavXBtn)) return;
    if (focusWrapper(e, selectors.lightbulb, handleSwitchTheme)) return;
}

export function handleKeydown(e) {
    if (focusWrapper(e, selectors.searchInput, handleKeydownSearchInput)) return;
}

export function handleScroll(e) {
    handleRepositionTip()
}

export function handleResize(e) {
    handleRepositionTip()
}

export function handleDomContentLoaded(e) {
    handleInitTheme()
    renderAndFocus()
}

export function handlePopstate(e) {
    refreshSiteState(location.pathname, false);
    renderAndFocus()
}