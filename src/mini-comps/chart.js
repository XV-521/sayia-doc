const width = 520
const height = 720

const pointNumsW = 35
const pointNumsH = 30
const lvNum = 6
const paddingNum = 3

const gapNum = ( pointNumsH- 2*paddingNum) / (lvNum-1)

const blockWidth = 75
const blockHeight = 45

const blockPadding = 3

const gapX = width / (pointNumsW - 1)
const gapY = height / (pointNumsH - 1)

const fontSize = 11
const fontColor = "#357"
const lineColor = "#aad"
const svgColor  = "none"
const svgRadius = "7px"

function createBlockObj(idxX, idxY, color, content) {
    const centerX= idxX * gapX
    const centerY= idxY * gapY

    return {
        center: { x: centerX, y: centerY},
        top: {x: centerX, y: centerY - blockHeight/2},
        bottom: {x: centerX, y: centerY + blockHeight/2},
        right: {x: centerX + blockWidth/2, y: centerY},
        left: {x: centerX - blockWidth/2, y: centerY},
        idxX,
        idxY,
        content,
        color
    }
}

function createTextObj(idxX, idxY, content) {
    const centerX= idxX * gapX
    const centerY= idxY * gapY

    return {
        center: { x: centerX, y: centerY},
        top: {x: centerX, y: centerY - blockHeight/2},
        content,
    }
}


function createText(textObj) {
    const contentArr = textObj.content
        .split(' ')
        .filter((t) => t !== '')
        .map((t)=>t.trim());

    return `
        <text 
            x=${textObj.center.x - blockWidth/2 + blockPadding} 
            y=${textObj.top.y + blockHeight / (contentArr.length + 1) - fontSize / 2 -3.5} 
            font-size=${fontSize} 
            fill=${fontColor}
            style="font-weight: 600"
            text-anchor="middle"
            dominant-baseline="alphabetic"
        >
            ${contentArr.map((t) => `
                <tspan 
                    x=${textObj.center.x}  
                    dy="1.2em"
                >${t}</tspan>
            `).join('')}
        </text>
    `
}


function createBlock(blockObj) {
    const textObj = createTextObj(blockObj.idxX, blockObj.idxY, blockObj.content);

    return `
        <rect 
            x=${blockObj.center.x-blockWidth/2} 
            y=${blockObj.center.y-blockHeight/2} 
            rx="7" 
            ry="7" 
            width=${blockWidth} 
            height=${blockHeight} 
            fill=${blockObj.color}
            stroke=${lineColor}
            stroke-width="0.5"
        />
        ${createText(textObj)}
    `
}

function createLine(start, end) {
    return `<line x1=${start.x} y1=${start.y} x2=${end.x} y2=${end.y} stroke-opacity="0.5" stroke=${lineColor} />
            <circle cx=${end.x} cy=${end.y} r="1.5" fill=#f3f3ff stroke=${lineColor} />`
}


function getIdxY(level) {
    return pointNumsH - (level * gapNum + paddingNum)
}


export function chart(lvRange) {
    const lv5Color = "#26dad4"
    const lv4Color = "#3ee2e8"
    const lv3Color = "#4cd1fa"
    const lv2Color = "#7ac8ff"
    const lv1Color = "#97b4fd"
    const lv0Color = "#97b4fd"

    const textOccurrencePrefix = createTextObj(22.5, getIdxY(0.5), "prefix")
    const textOccurrenceSuffix = createTextObj(25, getIdxY(1.08), "suffix")

    const blockValueWord      = createBlockObj(5, getIdxY(0), lv0Color, "value word")
    const blockReferenceWord  = createBlockObj(13,  getIdxY(0), lv0Color, "reference word")
    const blockAttributeWord  = createBlockObj(21, getIdxY(0), lv0Color, "attribute word")
    const blockOccurrenceWord = createBlockObj(21, getIdxY(1), lv1Color, "occurrence word")
    const blockEntityWord = createBlockObj(29, getIdxY(1), lv1Color, "entity word")

    const blockDescriptionBlock  = createBlockObj(5, getIdxY(2), lv2Color, "description block")
    const blockObjectBlock = createBlockObj(13, getIdxY(2), lv2Color, "object block")
    const blockOccurrenceBlock = createBlockObj(21, getIdxY(2), lv2Color, "occurrence block")

    const blockStatePhrase      = createBlockObj(9, getIdxY(3), lv3Color, "state phrase")
    const blockOccurrencePhrase = createBlockObj(21, getIdxY(3), lv3Color, "occurrence phrase")
    const blockSentence         = createBlockObj(15, getIdxY(4), lv4Color, "sentence")
    const blockStatement        = createBlockObj(15, getIdxY(5), lv5Color, "statement")

    const textStatementStructure = createTextObj(22, getIdxY(4.5), "statement structure")
    const textSentenceType       = createTextObj(24, getIdxY(3.5), "sentence type")
    const textPhraseType         = createTextObj(27, getIdxY(2.5), "phrase type")
    const textBlockType           = createTextObj(27, getIdxY(1.5), "block type")

    const lvs = {
        "0": (_) => `
            ${createBlock(blockReferenceWord)}
            ${createBlock(blockValueWord)}
            ${createBlock(blockAttributeWord)}
        `,
        "1": (drawLine) => `

            ${createBlock(blockOccurrenceWord)}
            ${createBlock(blockEntityWord)}
            ${ drawLine ? `
                ${createLine(blockOccurrenceWord.right, blockEntityWord.left)}
                ${createLine(blockAttributeWord.top, blockOccurrenceWord.bottom)}
                
                ${createText(textOccurrencePrefix)}
                ${createText(textOccurrenceSuffix)}
            ` : "" }
        `,

        "2": (drawLine) => ` 
            ${createBlock(blockDescriptionBlock)}
            ${createBlock(blockObjectBlock)}
            ${createBlock(blockOccurrenceBlock)}
            ${ drawLine ? `
                ${createLine(blockOccurrenceWord.top, blockOccurrenceBlock.bottom)}
                ${createLine(blockReferenceWord.top, blockObjectBlock.bottom)}
                ${createLine(blockOccurrenceWord.top, blockObjectBlock.bottom)}
                ${createLine(blockValueWord.top, blockObjectBlock.bottom)}
                ${createLine(blockAttributeWord.top, blockObjectBlock.bottom)}
                ${createLine(blockEntityWord.top, blockObjectBlock.bottom)}
                
                ${createText(textBlockType)}
            ` : "" }
        `,


        "3": (drawLine) => `
            ${createBlock(blockStatePhrase)}
            ${createBlock(blockOccurrencePhrase)}
            ${ drawLine ? `
                ${createLine(blockDescriptionBlock.top, blockStatePhrase.bottom)}
                ${createLine(blockObjectBlock.top, blockStatePhrase.bottom)}
                ${createLine(blockOccurrenceBlock.top, blockOccurrencePhrase.bottom)}
                ${createText(textPhraseType)}
            ` : "" }
        `,
        "4": (drawLine) => `
            ${createBlock(blockSentence)}
            ${ drawLine ? `
                ${createLine(blockStatePhrase.top, blockSentence.bottom)}
                ${createLine(blockOccurrencePhrase.top, blockSentence.bottom)}
                ${createText(textSentenceType)}
            ` : "" }
        `,
        "5": (drawLine) => `
            ${createBlock(blockStatement)}
            ${ drawLine ? `
                ${createLine(blockSentence.top, blockStatement.bottom)}
                ${createText(textStatementStructure)}
            ` : "" }
        `
    }

    const marginY = 16;
    const labelExtra = fontSize * 2;

    const minLevel = lvRange[0];
    const maxLevel = lvRange[1];

    const minCenterY = getIdxY(maxLevel) * gapY;
    const maxCenterY = getIdxY(minLevel) * gapY;

    const minY = minCenterY - blockHeight / 2 - labelExtra;
    const maxY = maxCenterY + blockHeight / 2 + labelExtra;

    const visibleHeight = Math.max(
        (maxY - minY) + marginY * 2,
        blockHeight + marginY * 2
    );

    const offsetY = Math.max(0, minY - marginY);

    let final = "";
    for (let i = minLevel; i <= maxLevel; i++) {
        const drawLine = i !== minLevel;
        final += lvs[String(i)](drawLine);
    }

    return `
        <div class="chart">
          <svg 
            height=${visibleHeight} 
            style="background-color: ${svgColor}; border-radius: ${svgRadius}"
            viewBox="0 0 ${width} ${visibleHeight}" 
            preserveAspectRatio="xMidYMid meet" 
            class="chart-svg"
          >
            <g transform="translate(0, ${-offsetY})">
              ${final}
            </g>
          </svg>
        </div>
    `;
}