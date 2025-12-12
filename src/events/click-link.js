import {refreshSiteState} from "./refresh-site-state.js";
import {renderAndFocus} from "./initialize.js";

export function handleClickLink(obj) {
    obj.e.preventDefault();
    const path = obj.el.getAttribute("href")
    if (path === null) return;
    refreshSiteState(path, true)
    renderAndFocus();
}