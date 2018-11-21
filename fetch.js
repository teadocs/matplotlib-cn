(function() {
    var baseMethods = {
        getH: function(ele) {
            var tagName = ele.tagName;
            var prefix = "";
            var text = $(ele).text();
            if ( tagName === "H1" ) {
                prefix = "# ";
            } else if ( tagName === "H2" ) {
                prefix = "## ";
            } else if ( tagName === "H3" ) {
                prefix = "### ";
            } else if ( tagName === "H4" ) {
                prefix = "#### ";
            }
            return prefix + text.substr(0,text.length-1) + "\n";
        },
        getP: function(ele) {
            return $(ele).text() + "\n";
        },
        getCode: function(ele) {
            var prefix = "```python\n";
            var suffix = "```\n";
            return prefix + $(ele).find("pre").text() + suffix;
        },
        getImage: function(ele) {
            var tempArr = $(ele).attr("src").split("/");
            var src = "/static/images/gallery/" + tempArr[tempArr.length - 1];
            return "![](" + src + ")\n";
        },
        getDownload: function(ele) {
            var arrA = $(ele).find("a");
            var tempArr = arrA[0].href.split("/");
            var name = tempArr[tempArr.length - 1].split(".")[0];
            var text = `## 下载这个示例
            
- [下载python源码: ${name}.py](https://matplotlib.org/_downloads/${name}.py)
- [下载Jupyter notebook: ${name}.ipynb](https://matplotlib.org/_downloads/${name}.ipynb)`;
            return text;
        }
    }

    var parse = function(container) {
        var children = container.children();
        var _document = "";
        for (var index = 0; index < children.length; index++) {
            var ele = children[index];
            if ( ele.tagName[0] === "H" ) {
                _document = _document + baseMethods.getH(ele) + "\n";
            } else if ( ele.tagName === "P" && !$(ele).hasClass("sphx-glr-signature") ) {
                _document = _document + baseMethods.getP(ele) + "\n";
            } else if ( ele.tagName === "IMG" ) {
                _document = _document + baseMethods.getImage(ele) + "\n";
            } else if ( ele.tagName === "DIV" && $(ele).hasClass("notranslate") ) {
                _document = _document + baseMethods.getCode(ele) + "\n";
            } else if ( ele.tagName === "DIV" && $(ele).hasClass("section") ) {
                _document = _document + parse($(ele));
            } else if ( ele.tagName === "DIV" && $(ele).hasClass("sphx-glr-footer") ) {
                _document = _document + baseMethods.getDownload(ele) + "\n";
            }
        }
        return _document;
    }

    var docs = parse($(".sphx-glr-example-title.section"));
    console.log(docs);
})();