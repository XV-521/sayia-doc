"use strict";

import {
    handleClick,
    handleKeydown,
    handleScroll,
    handleResize,
    handleDomContentLoaded,
    handlePopstate
} from "./events/handles.js";


window.addEventListener("DOMContentLoaded", handleDomContentLoaded);
window.addEventListener("popstate", handlePopstate);
document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown)
visualViewport.addEventListener("resize", handleResize);
visualViewport.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleScroll, { passive: true });
