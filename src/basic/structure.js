"use strict";

import {HomePage} from "../pages/home.js";
import {OverviewPage} from "../pages/overview.js";
import {LearnPage} from "../pages/learn.js";
import {StateAndOccurrencePage} from "../pages/state-and-occurrence.js";
import {LogicalSymbolsPage} from "../pages/logical-symbols.js";
import {LabeledFormatPage} from "../pages/labeled-format.js";
import {GlossaryPage} from "../pages/glossary.js";
import {BorrowingPage} from "../pages/borrowing.js";
import {WordFormationPage} from "../pages/word-formation.js";
import {WordCategoriesPage} from "../pages/word-categories.js";
import {RelationSymbolsPage} from "../pages/relation-symbols.js";
import {GrammarPage} from "../pages/grammar.js";
import {BlockPage} from "../pages/block.js";
import {PhrasePage} from "../pages/phrase.js";
import {SentencePage} from "../pages/sentence.js";
import {StatementPage} from "../pages/statement.js";
import {ContentPage} from "../pages/content.js";
import {DialogueExamplesPage} from "../pages/dialogue-examples.js";
import {ValueWordsPage} from "../pages/value-words.js";
import {EUnitWordsPage} from "../pages/eunit-words.js";
import {AttributeWordsPage} from "../pages/attribute-words.js";
import {OccurrenceAndEntityWordsPage} from "../pages/occurrence-and-entity-words.js";
import {ReferenceWordsPage} from "../pages/reference-words.js";
import {FinalNotesPage} from "../pages/final-notes.js";


/**
 * @typedef {{
 *   node: string,
 *   name: string,
 *   page: () => string
 *   subNodeObjs: [nodeObj]
 * }} nodeObj
 */

/** @type {nodeObj[]} */

export const nodeObjs = [
    {
        node: "",
        name: "Home",
        page: HomePage,
        subNodeObjs: [],
    },
    {
        node: "overview",
        name: "Overview",
        page: OverviewPage,
        subNodeObjs: [],
    },
    {
        node: "learn",
        name: "Learn",
        page: LearnPage,
        subNodeObjs: [
            {
                node: "state-and-occurrence",
                name: "State & Occurrence",
                page: StateAndOccurrencePage,
                subNodeObjs: [],
            },
            {
                node: "word-formation",
                name: "Word Formation",
                page: WordFormationPage,
                subNodeObjs: [
                    {
                        node: "word-categories",
                        name: "Word Categories",
                        page: WordCategoriesPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "relation-symbols",
                        name: "Relation Symbols",
                        page: RelationSymbolsPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "glossary",
                        name: "Glossary",
                        page: GlossaryPage,
                        subNodeObjs: [
                            {
                                node: "values",
                                name: "Values",
                                page: ValueWordsPage,
                                subNodeObjs: []
                            },

                            {
                                node: "eunits",
                                name: "EUnits",
                                page: EUnitWordsPage,
                                subNodeObjs: []
                            },

                            {
                                node: "attributes",
                                name: "Attributes",
                                page: AttributeWordsPage,
                                subNodeObjs: []
                            },

                            {
                                node: "occurrences-and-entities",
                                name: "Occurrences & Entities",
                                page: OccurrenceAndEntityWordsPage,
                                subNodeObjs: []
                            },

                            {
                                node: "references",
                                name: "References",
                                page: ReferenceWordsPage,
                                subNodeObjs: []
                            },
                        ],
                    },
                    {
                        node: "borrowing",
                        name: "Borrowing",
                        page: BorrowingPage,
                        subNodeObjs: [],
                    },
                ],
            },
            {
                node: "grammar",
                name: "Grammar",
                page: GrammarPage,
                subNodeObjs: [
                    {
                        node: "block",
                        name: "Block",
                        page: BlockPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "phrase",
                        name: "Phrase",
                        page: PhrasePage,
                        subNodeObjs: [],
                    },
                    {
                        node: "sentence",
                        name: "Sentence",
                        page: SentencePage,
                        subNodeObjs: [],
                    },
                    {
                        node: "statement",
                        name: "Statement",
                        page: StatementPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "logical-symbols",
                        name: "Logical Symbols",
                        page: LogicalSymbolsPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "content",
                        name: "Content",
                        page: ContentPage,
                        subNodeObjs: [],
                    },
                    {
                        node: "labeled-format",
                        name: "Labeled Format",
                        page: LabeledFormatPage,
                        subNodeObjs: []
                    }
                ],
            },
        ]
    },
    {
        node: "dialogue-examples",
        name: "Dialogue Examples",
        page: DialogueExamplesPage,
        subNodeObjs: [],
    },
    {
        node: "final-notes",
        name: "Final Notes",
        page: FinalNotesPage,
        subNodeObjs: [],
    },
]


function addPath(objs, basicPath) {
    for (const obj of objs) {
        obj.path = (basicPath + "/" +obj.node).replace(/^\/|\/$/g, "")
        if (obj.subNodeObjs.length !== 0) {
            addPath(obj.subNodeObjs, obj.path)
        }
    }
}

addPath(nodeObjs, "")


/**
 * @param {string} path
 * @returns {nodeObj | null}
 */

export function findNodeObjByPath(path) {

    const clearPath = path.replace(/^\/|\/$/g, "")

    function find(objs) {
        for (const obj of objs) {
            if (obj.path === clearPath) {
                return obj
            }
            const target = find(obj.subNodeObjs)
            if (target !== null) return target;
        }
        return null
    }

    return find(nodeObjs)
}

/**
 * @param {string} path
 * @returns {nodeObj | null}
 */
export function findPreviousNodeObjByPath(path) {

    const cleanedPath = path.replace(/^\/|\/$/g, "")
    const nodes = cleanedPath.split("/");
    if (nodes.length === 1) return null;

    const previousNodes = nodes.slice(0, -1)
    const previousPath = previousNodes.join("/")

    return findNodeObjByPath(previousPath)
}


/**
 * @param {string} path
 * @returns {nodeObj[] | null}
 */
export function findBroNodeObjsByPath(path) {

    const previousNodeObj = findPreviousNodeObjByPath(path)

    if (previousNodeObj !== null) {
        return previousNodeObj.subNodeObjs
    }

    const node = path.replace(/^\/|\/$/g, "")

    if (nodeObjs.map((obj) => obj.node).includes(node)) {
        return nodeObjs
    }
    return null
}


/**
 * @param {string} path
 * @returns {{pNeighbor: nodeObj | null, nNeighbor: nodeObj | null} | null}
 */
export function findNeighborNodeObjByPath(path) {
    const cleanedPath = path.replace(/^\/|\/$/g, "")

    const flattened = []
    let currentObj = null

    function flatten(objs) {
        for (const obj of objs) {
            flattened.push(obj)
            if (obj.path === cleanedPath) {
                currentObj = obj
            }
            if (obj.subNodeObjs.length !== 0) {
                flatten(obj.subNodeObjs)
            }
        }
    }

    flatten(nodeObjs)

    if (currentObj === null) return null

    const currentIdx = flattened.indexOf(currentObj)

    let pNeighbor = flattened[currentIdx - 1]
    let nNeighbor = flattened[currentIdx + 1]

    if (pNeighbor === undefined) {
        pNeighbor = null
    }
    if (nNeighbor === undefined) {
        nNeighbor = null
    }

    return {pNeighbor: pNeighbor, nNeighbor: nNeighbor};
}


export function createNodeObjStateInstance(url) {
     return {
         url: url,

         /** @returns {string[]}*/
         __getPathAndId: function () {
             const pathAndId = this.url.split("#")
             pathAndId[0] = pathAndId[0].replace(/^\/|\/$/g, "")
             return pathAndId
         },

         /** @returns {string} */
         getPath: function (){
             const clearPathAndIdTuple = this.__getPathAndId();
             return clearPathAndIdTuple[0]
         },

         /** @returns {string | null} */
         getIdInPath: function (){
             const clearPathAndIdTuple = this.__getPathAndId();
             if (clearPathAndIdTuple.length === 2) {
                 return clearPathAndIdTuple[1]
             }
             return null
         },

         /** @returns {nodeObj | null} */
         getNodeObj: function () {return findNodeObjByPath(this.getPath())},

         /** @returns {string} */
         getTitle: function () {
             const nodeObj = this.getNodeObj()
             if (nodeObj === null) {
                 return "404"
             }
             return nodeObj.name
         },

         refresh: function (url) {
             this.url = url
         }
     }
}

export const nodeObjState = createNodeObjStateInstance(location.pathname)
