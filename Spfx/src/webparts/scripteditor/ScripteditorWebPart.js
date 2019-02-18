var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { BaseClientSideWebPart, PropertyPaneToggle, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import PropertyPaneLogo from './PropertyPaneLogo';
// export interface IScripteditorWebPartProps {
//   description: string;
// }
var ScripteditorWebPart = (function (_super) {
    __extends(ScripteditorWebPart, _super);
    function ScripteditorWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.save = function (script) {
            _this.properties.script = script;
            _this.render();
        };
        return _this;
        // protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        //   return {
        //     pages: [
        //       {
        //         header: {
        //           description: strings.PropertyPaneDescription
        //         },
        //         groups: [
        //           {
        //             groupName: strings.BasicGroupName,
        //             groupFields: [
        //               PropertyPaneTextField('description', {
        //                 label: strings.DescriptionFieldLabel
        //               })
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   };
        // }
    }
    ScripteditorWebPart.prototype.render = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element, i, style, hasPadding, editorPopUp, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.displayMode == DisplayMode.Read)) return [3 /*break*/, 1];
                        if (this.properties.removePadding) {
                            element = this.domElement.parentElement;
                            // check up to 5 levels up for padding and exit once found
                            for (i = 0; i < 5; i++) {
                                style = window.getComputedStyle(element);
                                hasPadding = style.paddingTop !== "0px";
                                if (hasPadding) {
                                    element.style.paddingTop = "0";
                                    element.style.paddingBottom = "0";
                                    element.style.marginTop = "0";
                                    element.style.marginBottom = "0";
                                    break;
                                }
                                element = element.parentElement;
                            }
                        }
                        this.domElement.innerHTML = this.properties.script;
                        this.executeScript(this.domElement);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, import(
                        /* webpackChunkName: 'scripteditor' */
                        './components/Scripteditor')];
                    case 2:
                        editorPopUp = _a.sent();
                        element = React.createElement(editorPopUp.default, {
                            script: this.properties.script,
                            title: this.properties.title,
                            save: this.save
                        });
                        ReactDom.render(element, this.domElement);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScripteditorWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    groups: [
                        {
                            groupFields: [
                                PropertyPaneTextField("title", {
                                    label: "Title to show in edit mode",
                                    value: this.properties.title
                                }),
                                PropertyPaneToggle("removePadding", {
                                    label: "Remove top/bottom padding of web part container",
                                    checked: this.properties.removePadding,
                                    onText: "Remove padding",
                                    offText: "Keep padding"
                                }),
                                PropertyPaneToggle("spPageContextInfo", {
                                    label: "Enable classic _spPageContextInfo",
                                    checked: this.properties.spPageContextInfo,
                                    onText: "Enabled",
                                    offText: "Disabled"
                                }),
                                new PropertyPaneLogo()
                            ]
                        }
                    ]
                }
            ]
        };
    };
    Object.defineProperty(ScripteditorWebPart.prototype, "dataVersion", {
        // protected onDispose(): void {
        //   ReactDom.unmountComponentAtNode(this.domElement);
        // }
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ScripteditorWebPart.prototype.evalScript = function (elem) {
        var data = (elem.text || elem.textContent || elem.innerHTML || "");
        var headTag = document.getElementsByTagName("head")[0] || document.documentElement;
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        if (elem.src && elem.src.length > 0) {
            return;
        }
        if (elem.onload && elem.onload.length > 0) {
            scriptTag.onload = elem.onload;
        }
        try {
            // doesn't work on ie...
            scriptTag.appendChild(document.createTextNode(data));
        }
        catch (e) {
            // IE has funky script nodes
            scriptTag.text = data;
        }
        headTag.insertBefore(scriptTag, headTag.firstChild);
        headTag.removeChild(scriptTag);
    };
    ScripteditorWebPart.prototype.nodeName = function (elem, name) {
        return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
    };
    // Finds and executes scripts in a newly added element's body.
    // Needed since innerHTML does not run scripts.
    //
    // Argument element is an element in the dom.
    ScripteditorWebPart.prototype.executeScript = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var scripts, children_nodes, i, child, urls, onLoads, i, scriptTag, oldamd, i, error_1, i, scriptTag, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Define global name to tack scripts on in case script to be loaded is not AMD/UMD
                        if (this.properties.spPageContextInfo && !window["_spPageContextInfo"]) {
                            window["_spPageContextInfo"] = this.context.pageContext.legacyPageContext;
                        }
                        window.ScriptGlobal = {};
                        scripts = [];
                        children_nodes = element.childNodes;
                        for (i = 0; children_nodes[i]; i++) {
                            child = children_nodes[i];
                            if (this.nodeName(child, "script") &&
                                (!child.type || child.type.toLowerCase() === "text/javascript")) {
                                scripts.push(child);
                            }
                        }
                        urls = [];
                        onLoads = [];
                        for (i = 0; scripts[i]; i++) {
                            scriptTag = scripts[i];
                            if (scriptTag.src && scriptTag.src.length > 0) {
                                urls.push(scriptTag.src);
                            }
                            if (scriptTag.onload && scriptTag.onload.length > 0) {
                                onLoads.push(scriptTag.onload);
                            }
                        }
                        oldamd = null;
                        if (window["define"] && window["define"].amd) {
                            oldamd = window["define"].amd;
                            window["define"].amd = null;
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < urls.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, SPComponentLoader.loadScript(urls[i], { globalExportsName: "ScriptGlobal" })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (oldamd) {
                            window["define"].amd = oldamd;
                        }
                        for (i = 0; scripts[i]; i++) {
                            scriptTag = scripts[i];
                            if (scriptTag.parentNode) {
                                scriptTag.parentNode.removeChild(scriptTag);
                            }
                            this.evalScript(scripts[i]);
                        }
                        // execute any onload people have added
                        for (i = 0; onLoads[i]; i++) {
                            onLoads[i]();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ScripteditorWebPart;
}(BaseClientSideWebPart));
export default ScripteditorWebPart;
//# sourceMappingURL=ScripteditorWebPart.js.map