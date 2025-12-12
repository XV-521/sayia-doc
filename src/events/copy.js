import {selectors} from "../basic/selectors.js";

function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.classList.add("transparent");
    textarea.classList.add("offscreen");
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

async function copyText(content) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(content)
        } catch (_) {
            fallbackCopy(content);
        }
        return;
    }
    fallbackCopy(content);
}


export async function handleClickCopyBtn(obj) {

    const content = obj.el.getAttribute("data-example")
    await copyText(content.trim())

    const copyBox = obj.e.target.closest(selectors.copyBox);
    if (copyBox === null) return;
    const copyPmt = copyBox.querySelector(selectors.copyPmt);
    if (copyPmt === null) return;

    copyPmt.classList.remove("transparent");
    copyPmt.addEventListener(
        "transitionend",
        () => {
            copyPmt.classList.add("transparent")
        },
        { once: true }
    );
}