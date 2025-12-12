import {renderSideNav} from "./initialize.js";
import {selectors} from "../basic/selectors.js";

export function handleSideArrow(obj) {
    const dataKey = obj.el.getAttribute("data-key")
    if (dataKey === null) return;
    renderSideNav(dataKey);
}

export function handleClickSideNavXBtn(obj) {
    const side = document.querySelector(selectors.side);
    const overlay = document.querySelector(selectors.overlay);
    if (side === null || overlay === null) return;
    side.classList.add("hidden");
    overlay.classList.add("hidden");
}

export function handleClickHeaderMenuBtn(obj) {
    const side = document.querySelector(selectors.side);
    const overlay = document.querySelector(selectors.overlay);
    if (side === null || overlay === null) return;
    side.classList.remove("hidden");
    overlay.classList.remove("hidden");
}