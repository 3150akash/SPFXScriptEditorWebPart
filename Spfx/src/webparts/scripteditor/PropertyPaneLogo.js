import { PropertyPaneFieldType } from '@microsoft/sp-webpart-base';
var PropertyPaneLogo = (function () {
    function PropertyPaneLogo() {
        this.type = PropertyPaneFieldType.Custom;
        this.properties = {
            key: "Logo",
            onRender: this.onRender.bind(this)
        };
    }
    PropertyPaneLogo.prototype.onRender = function (elem) {
        elem.innerHTML = "\n    <div style=\"margin-top: 30px\">\n      <div style=\"float:right\">Author: <a href=\"mailto:mikael.svenson@puzzlepart.com\" tabindex=\"-1\">Mikael Svenson</a></div>\n      <div style=\"float:right\"><a href=\"https://www.puzzlepart.com/\" target=\"_blank\"><img src=\"//www.puzzlepart.com/wp-content/uploads/2017/08/Pzl-LogoType-200.png\" onerror=\"this.style.display = 'none'\";\"></a></div>\n    </div>";
    };
    return PropertyPaneLogo;
}());
export { PropertyPaneLogo };
export default PropertyPaneLogo;
//# sourceMappingURL=PropertyPaneLogo.js.map