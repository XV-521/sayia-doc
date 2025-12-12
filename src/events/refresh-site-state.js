import {nodeObjState} from "../basic/structure.js";


export function refreshSiteState(path, push = false) {
    if (push) {
        history.pushState(null, "", path);
    } else {
        history.replaceState(null, "", path);
    }
    nodeObjState.refresh(path);
}