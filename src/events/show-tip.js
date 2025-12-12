"use strict";

import {selectors} from "../basic/selectors.js";
import {find} from "../basic/words.js";


function showWordTip(wordInfo, position="fixed") {
    const wordTip = document.querySelector(selectors.wordTip);
    const wordTipInner = document.querySelector(selectors.wordTipInner);
    if (wordTip === null || wordTipInner === null) return;
    if (position === "fixed") {
        wordTip.style.top = "50%";
        wordTip.style.left = "50%";
        wordTip.style.transform = "translate(-50%, -50%)";
    } else {
        wordTip.style.transform = "none";
    }
    wordTip.style.position = position;
    wordTip.classList.remove("hidden");

    if (wordInfo === null) {
        wordTipInner.innerHTML = `<p>There is no such Sayia word.</p>`
        return;
    }

    if (wordInfo.word === "") {
        wordTipInner.innerHTML = `<p>Please enter a Sayia Word.</p>`
        return;
    }

    wordTipInner.innerHTML = `
        <ul id="${selectors.GetClear(selectors.wordTipUl)}">
            <li>word: ${wordInfo["word"]};</li>
            <li>ipa: ${wordInfo["ipa"]};</li>
            <li>meaning: ${wordInfo["meaning"]}</li>
        </ul>
    `
}


const wordTipState = {refWordEl: null};

export function handleRepositionTip() {
    const wordTip = document.querySelector(selectors.wordTip);
    if (wordTip === null) return;
    if (wordTip.classList.contains("hidden") || wordTipState.refWordEl === null) return;
    
    const header = document.querySelector(selectors.header);
    if (header === null) return;

    const headerRect = header.getBoundingClientRect();

    const tipRect = wordTip.getBoundingClientRect();
    const wordRect = wordTipState.refWordEl.getBoundingClientRect();
    const gapY = 17
    const minMargin = 5

    let basicTop = wordRect.top - gapY - tipRect.height;
    if (basicTop - minMargin <  headerRect.bottom) {
        basicTop = headerRect.bottom + minMargin;
    }
    if (basicTop + tipRect.height + minMargin > window.innerHeight) {
        basicTop = window.innerHeight - minMargin - tipRect.height;
    }
    let basicLeft = wordRect.right - (wordRect.width + tipRect.width) / 2;
    if (basicLeft + tipRect.width + minMargin > window.innerWidth) {
        basicLeft = window.innerWidth - (minMargin + tipRect.width);
    }
    if (basicLeft < 0) {
        basicLeft = minMargin;
    }

    wordTip.style.top = String((basicTop  + window.scrollY)) + 'px';
    wordTip.style.left = String((basicLeft + window.scrollX)) + 'px';
}

function buildInfo(word) {
    const clearWord = word.trim()
    if (clearWord === "") {
        return {word: ""}
    }
    return  find(clearWord)
}


export function handleClickSearchBtn(obj) {
    const searchInput = document.querySelector(selectors.searchInput)
    if (searchInput === null) return;
    const word = searchInput.value;
    const info = buildInfo(word);
    wordTipState.refWordEl = null
    showWordTip(info)
}

export function handleKeydownSearchInput(obj) {
    if (obj.e.key === "Enter") {
        const word = obj.el.value;
        const info = buildInfo(word);
        wordTipState.refWordEl = null
        showWordTip(info)
    }
}

export function handleClickTipBtn(obj) {
    const wordTip = document.querySelector(selectors.wordTip);
    if (wordTip === null) return;
    wordTip.classList.add("hidden");
    wordTipState.refWordEl = null
}


export function handleClickSayiaWord(obj) {
    const wordTip = document.querySelector(selectors.wordTip);
    if (wordTip === null) return;
    wordTipState.refWordEl = obj.el
    wordTip.classList.remove("hidden");
    wordTip.classList.add("invisible");
    void wordTip.offsetWidth;
    handleRepositionTip(wordTipState.refWordEl)

    const word = wordTipState.refWordEl.getAttribute("data-word");
    const info = buildInfo(word);

    showWordTip(info, "absolute")
    wordTip.classList.remove("invisible");
}

