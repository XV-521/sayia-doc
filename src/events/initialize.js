import {
    nodeObjState,
    findPreviousNodeObjByPath,
    findBroNodeObjsByPath,
    findNeighborNodeObjByPath,
    createNodeObjStateInstance
} from "../basic/structure.js";
import {Copy, LeftArrow, RightArrow} from "../mini-comps/svgs.js";
import {selectors} from "../basic/selectors.js";
import {find} from "../basic/words.js";

function renderEl(selector, innerHTML) {
    const el = document.querySelector(selector)
    if (el === null) return;
    el.innerHTML = innerHTML
}


export function annotateExample() {
    const list = document.querySelectorAll(selectors.sayia);
    const regex = /\.[a-z]{2}(?![A-Za-z])|(?<![A-Za-z])[A-Za-z][A-Za-z-]*(?![A-Za-z:])|(?<![A-Za-z:(, ])[A-Za-z][A-Za-z-]*(?![A-Za-z])/g;

    for (const el of list) {
        el.setAttribute("translate", "no");

        let safe = el.innerText
            .replace(/</g, "[[LT]]")
            .replace(/>/g, "[[GT]]");

        const replaced = safe.replace(regex, word => {
            if (find(word) !== null) {
                return `<span class="${selectors.GetClear(selectors.sayiaWord)}" data-word="${word}">${word}</span>`;
            }
            return word;
        });

        el.innerHTML = replaced
            .replace(/\[\[LT]]/g, "&lt;")
            .replace(/\[\[GT]]/g, "&gt;");

    }
}

export function renderFooterNav() {

    const neighborNodeObj = findNeighborNodeObjByPath(nodeObjState.getPath())
    if (neighborNodeObj === null) return;

    const innerHTML = `
        ${
        neighborNodeObj.pNeighbor !== null ? `<a id="l-footer-link" class="footer-link inner-link" href="${neighborNodeObj.pNeighbor.path}">
                <span class="arrow footer-arrow">${LeftArrow(5)}</span><span>${neighborNodeObj.pNeighbor.name}</span></a>` : `<a class="inner-link"></a>`
        }
        ${
        neighborNodeObj.nNeighbor !== null ? `<a id="r-footer-link" class="footer-link inner-link" href="${neighborNodeObj.nNeighbor.path}">
                <span>
                ${neighborNodeObj.nNeighbor.name}
                </span>
                <span class="arrow footer-arrow">${RightArrow(5)}</span></a>` : `<a class="inner-link"></a>`
        }
    `

    renderEl(selectors.footerNav, innerHTML)
}


export function renderSideNav(sidePath) {

    const sideNodeObjState = createNodeObjStateInstance(sidePath);

    const previousNodeObj = findPreviousNodeObjByPath(sideNodeObjState.getPath())

    const title = previousNodeObj !== null ?
        `<span id="side-left-arrow" class='arrow side-arrow pointer' data-key=${previousNodeObj.path}>
            ${LeftArrow(5.5)}
        </span>
         <a href="${previousNodeObj.path}" class="inner-link">${previousNodeObj.name}</a>`
        :`<a href="" class="inner-link">Home</a>`

    renderEl(selectors.sideMenuTitle, title)

    let lis = ""
    let isFirst = true

    const menuObjs = previousNodeObj !== null ? previousNodeObj.subNodeObjs : findBroNodeObjsByPath(sideNodeObjState.getPath())
    if (menuObjs === null) return;

    const getDataKay = (obj) => {
        const neighbor = findNeighborNodeObjByPath(obj.path)
        if (neighbor === null) return "";

        const nNeighbor = neighbor.nNeighbor
        if (nNeighbor === null) return "";

        return nNeighbor.path
    }

    for (const obj of menuObjs) {
        if (obj.node === "") continue

        const dataKey = getDataKay(obj)
        lis += `<div ${isFirst ? "id='side-first'": ""}>
                        <a href="${obj.path}" class="inner-link">${obj.name}</a>
                        ${obj.subNodeObjs.length !== 0 ? `<span id="side-right-arrow" class="arrow side-arrow pointer" data-key=${dataKey}>
                        ${RightArrow(5.5)}
                        </span>`: ""}
                    </div>`
        isFirst = false
    }

    renderEl(selectors.sideMenu, lis)
}


export function renderPathBox() {

    function _createPathEl() {
        const path = nodeObjState.getPath()
        const pathBox = document.querySelector(selectors.pathBox)

        if (path === "" || path === "final-notes") {
            pathBox.classList.add("hidden")
            return
        }

        pathBox.classList.remove("hidden")

        const nodes = path.split("/");

        let html = ``
        let href = ""

        for (const node of nodes) {
            href += `/${node}`
            html += ` ${RightArrow(4)} <a href=${href} class="inner-link">${node}</a>`
        }

        html = html.replace(RightArrow(4), "")

        if (href !== "/") {
            html = `<a href="" class="inner-link">Home</a>  ${RightArrow(4)} ` + html
        }

        return html
    }
    renderEl(selectors.pathBox, _createPathEl())
}

export function renderPage() {
    const nodeObj = nodeObjState.getNodeObj()
    if (nodeObj === null) return;
    renderEl(selectors.page, nodeObj.page())
}


export function insertCopyBtn() {
    const examples = document.querySelectorAll(selectors.example);
    examples.forEach(example => {
        const copyBox = document.createElement("div");
        const copyPmt = document.createElement("div");
        const copyBtn = document.createElement("div");

        copyBox.classList.add(selectors.GetClear(selectors.copyBox));
        copyPmt.classList.add(selectors.GetClear(selectors.copyPmt));
        copyPmt.classList.add("transparent")
        copyBtn.classList.add(selectors.GetClear(selectors.copyBtn));
        copyBtn.classList.add("pointer");

        copyBtn.innerHTML = Copy(1.7);
        copyPmt.innerHTML = "<span>Copied!</span>"

        let content = ""
        const pre = example.querySelector("pre");
        if (pre !== null) {
            content = pre.textContent;
        }
        copyBtn.setAttribute("data-example", content)

        copyBox.appendChild(copyPmt);
        copyBox.appendChild(copyBtn);
        example.appendChild(copyBox);
    })
}


export function setTitle() {
    const title = document.querySelector(selectors.title)
    if (title === null) return;
    title.textContent = nodeObjState.getTitle();
}

export function renderError() {
    renderEl(selectors.body, `<div class="error">404: wrong path</div>`)
}

export function hidden() {
    const overlay = document.querySelector(selectors.overlay);
    const side = document.querySelector(selectors.side);
    if (side === null || overlay === null) return;
    side.classList.add("hidden");
    overlay.classList.add("hidden");
}

export function render() {
    setTitle()
    hidden()
    if (nodeObjState.getNodeObj() === null) {
        renderError()
        return
    }
    renderPage()
    renderPathBox()
    renderSideNav(nodeObjState.getPath())
    renderFooterNav()
    annotateExample()
    insertCopyBtn()
}


export function renderAndFocus(){
    render()
    const id = nodeObjState.getIdInPath()
    if (id !== null) {
        const targetEl = document.getElementById(id);
        if (targetEl !== null) {
            targetEl.scrollIntoView({behavior: 'smooth', block: "start"});
        }
        return;
    }
    const pathBox = document.querySelector(selectors.pathBox)
    if (pathBox === null) return;
    pathBox.scrollIntoView({behavior: 'instant', block: "start"});
}


