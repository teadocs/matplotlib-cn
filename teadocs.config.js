'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "Matplotlib 中文文档",
        description: "这是Matplotlib官方的中文文档，Matplotlib 是一个 Python 的 2D绘图库，它以各种硬拷贝格式和跨平台的交互式环境生成出版质量级别的图形。",
        version: "3.0.0",
        dir: "",
        outDir: "",
        staticDir: ""
    }, 
    theme: {
        dir: "", 
        title: "Matplotlib中文文档",
        headHtml: `
        <meta name="description" content="这是Matplotlib官方的中文文档，Matplotlib 是一个 Python 的 2D绘图库，它以各种硬拷贝格式和跨平台的交互式环境生成出版质量级别的图形。" />
        <meta name="keywords" content="matplotlib中文文档,matplotlib中文api,matplotlib中文手册,matplotlib教程,matplotlib下载安装,matplotlib" />
        <link rel="shortcut icon" href="/static/favicon.ico"/>
        `,
        footHtml: `
        <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?ffb401b873c9c6f5368dcd814cd15ba7";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        </script>
        <script>
            var comments = window.document.createElement("div");
            comments.style.maxWidth = "900px";
            comments.style.backgroundColor = "#fff";
            comments.style.padding = "20px";
            comments.style.boxSizing = "border-box";
            comments.id = "comments";
            document.querySelector(".tea-container").appendChild(comments);
        </script>
        <script>
        (function() {
            var ipc = window.document.createElement("div");
            ipc.id = "ipcBox";
            ipc.style.fontSize = "12px";
            ipc.style.maxWidth = "900px";
            ipc.style.padding = "20px";  
            ipc.style.boxSizing = "border-box";
            ipc.style.margin = "0px";
            ipc.style.textAlign = "center";
            ipc.style.backgroundColor = "#fff";
            ipc.innerHTML = "<span style='color: #bdbdbd;'>@2018 matplotlib.org.cn </span><a style='color: #bdbdbd;' href='http://www.beian.miit.gov.cn/' target='_blank'>粤ICP备16025085号-5</a>"
            document.querySelector(".tea-container").appendChild(ipc);
        })();
        </script>
        <script>
            var script = document.createElement("script");
            script.src = "https://code.tellto.cn/dist/js/init.min.js";
            script.setAttribute('data-el', '#comments');
            document.body.appendChild(script); 
        </script>        
        `,
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}