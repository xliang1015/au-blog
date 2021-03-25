(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{454:function(v,_,e){"use strict";e.r(_);var c=e(15),a=Object(c.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-面试题"}},[v._v("#")]),v._v(" "),e("code",[v._v("Webpack")]),v._v(" 面试题")]),v._v(" "),e("h2",{attrs:{id:"谈谈原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#谈谈原理"}},[v._v("#")]),v._v(" 谈谈原理")]),v._v(" "),e("ul",[e("li",[v._v("初始化参数")]),v._v(" "),e("li",[v._v("开始编译：初始化 "),e("code",[v._v("compiler")]),v._v(" 对象")]),v._v(" "),e("li",[v._v("确定入口")]),v._v(" "),e("li",[v._v("编译模板：调用 "),e("code",[v._v("loader")])]),v._v(" "),e("li",[v._v("完成模板编译：得到 "),e("code",[v._v("loader")]),v._v(" 翻译后的所有模块")]),v._v(" "),e("li",[v._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 "),e("code",[v._v("chunk")]),v._v("，再把每个 "),e("code",[v._v("chunk")]),v._v(" 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),v._v(" "),e("li",[v._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])]),v._v(" "),e("h2",{attrs:{id:"loader-作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader-作用"}},[v._v("#")]),v._v(" "),e("code",[v._v("loader")]),v._v(" 作用")]),v._v(" "),e("ul",[e("li",[v._v("加载文件")]),v._v(" "),e("li",[v._v("转换文件")])]),v._v(" "),e("h2",{attrs:{id:"plugins-作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins-作用"}},[v._v("#")]),v._v(" "),e("code",[v._v("plugins")]),v._v(" 作用")]),v._v(" "),e("ul",[e("li",[v._v("打包优化")]),v._v(" "),e("li",[v._v("资源管理")]),v._v(" "),e("li",[v._v("注入环境变量")]),v._v(" "),e("li",[v._v("在 "),e("code",[v._v("Webpack")]),v._v(" 运行的生命周期中会广播出许多事件，"),e("code",[v._v("Plugin")]),v._v(" 可以监听这些事件，在合适的时机通过 "),e("code",[v._v("Webpack")]),v._v(" 提供的 "),e("code",[v._v("API")]),v._v(" 改变输出结果")])]),v._v(" "),e("h2",{attrs:{id:"webpack-的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的生命周期"}},[v._v("#")]),v._v(" webpack 的生命周期")]),v._v(" "),e("h2",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[v._v("#")]),v._v(" 性能优化")]),v._v(" "),e("h4",{attrs:{id:"开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[v._v("#")]),v._v(" 开发环境")]),v._v(" "),e("ol",[e("li",[v._v("优化代码调试(选择合适 "),e("code",[v._v("source-map")]),v._v(")")])]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("   - source-map: 外部\n   - inline-source-map: 内联；`内联和外部的区别：外部生成了文件，内联没有，内联构建速度会更快`\n   - hidden-source-map: 外部\n   - evel-source-map: 内联；`eval-source-map 和 inline-source-map 的区别：inline-source-map只会生成一个内联 sourceMap，eval-source-map 每个文件都会生成一个 sourceMap`\n   - nosource-source-map: 外部\n   - cheap-source-map: 外部\n   - cheap-module-source-map: 外部\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[v._v("HMR"),e("br"),v._v(" "),e("code",[v._v("devServer: { hot: true }")]),e("br"),v._v("\n作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块）极大提升构建速度")]),v._v(" "),e("ul",[e("li",[v._v("样式文件：可以使用 "),e("code",[v._v("HMR")]),v._v(" 功能：因为 "),e("code",[v._v("style-loader")]),v._v(" 内部实现了")]),v._v(" "),e("li",[e("code",[v._v("js")]),v._v(" 文件：默认不能使用 "),e("code",[v._v("HMR")]),v._v(" 功能 --\x3e 需要修改 "),e("code",[v._v("js")]),v._v(" 代码，添加支持 "),e("code",[v._v("HMR")]),v._v(" 功能的代码"),e("br"),v._v("\n注意："),e("code",[v._v("HMR")]),v._v(" 功能对 "),e("code",[v._v("js")]),v._v(" 的处理，只能处理非入口 "),e("code",[v._v("js")]),v._v(" 文件的其它文件")]),v._v(" "),e("li",[e("code",[v._v("html")]),v._v(" 文件：默认不能使用 "),e("code",[v._v("HMR")]),v._v(" 功能，同时会导致问题："),e("code",[v._v("html")]),v._v(" 文件不能热更新了(不用做 "),e("code",[v._v("HMR")]),v._v(")"),e("br"),v._v("\n解决：修改入口文件，将 "),e("code",[v._v("html")]),v._v(" 引入")])])]),v._v(" "),e("li",[e("p",[v._v("Dll")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("DllPlugin")]),v._v("：将模块预先编译，只需编译一次（不易变的文件，一般为各类库，如："),e("code",[v._v("vue.js")]),v._v(", "),e("code",[v._v("axios")]),v._v("。需要在 "),e("code",[v._v("externals")]),v._v(" 中声明 "),e("code",[v._v("build")]),v._v(" 被 "),e("code",[v._v("DllPlugin")]),v._v(" 预编译的库）")]),v._v(" "),e("li",[e("code",[v._v("DllReferencePlugin")]),v._v("：将预先编译好的模块关联到当前编译中 (将通过 "),e("code",[v._v("DllPlugin")]),v._v(" 编译好的文件引入到 "),e("code",[v._v("index.html")]),v._v(" 中)")])])]),v._v(" "),e("li",[e("p",[v._v("开启缓存")])])]),v._v(" "),e("ul",[e("li",[v._v("babel 缓存\n"),e("ul",[e("li",[e("code",[v._v("cacheDirectory：true")]),e("br"),v._v("\n|- 让第二次打包构建速度更快")])])]),v._v(" "),e("li",[v._v("文件资源缓存\n"),e("ul",[e("li",[e("em",[e("code",[v._v("hash")])]),v._v("：每次 "),e("code",[v._v("webpack")]),v._v(" 构建时会生成一个唯一的 "),e("code",[v._v("hash")]),v._v(" 值"),e("br"),v._v("\n问题：因为 "),e("code",[v._v("js")]),v._v(" 和 "),e("code",[v._v("css")]),v._v(" 同时使用一个 "),e("code",[v._v("hash")]),v._v(" 值"),e("br"),v._v("\n|- 如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）")]),v._v(" "),e("li",[e("em",[e("code",[v._v("chunkhash")])]),v._v("：根据 "),e("code",[v._v("chunk")]),v._v(" 生成的 "),e("code",[v._v("hash")]),v._v(" 值。如果打包来源于同一个 "),e("code",[v._v("chunk")]),v._v("，那么 "),e("code",[v._v("hash")]),v._v(" 值就一样"),e("br"),v._v("\n问题："),e("code",[v._v("js")]),v._v(" 和 "),e("code",[v._v("css")]),v._v(" 的 "),e("code",[v._v("hash")]),v._v(" 值还是一样的"),e("br"),v._v("\n|- 因为 "),e("code",[v._v("css")]),v._v(" 是在 "),e("code",[v._v("js")]),v._v(" 中被引入的，所以同属于一个 "),e("code",[v._v("chunk")])]),v._v(" "),e("li",[e("em",[e("code",[v._v("contenthash")])]),v._v("：根据文件的内容生成 "),e("code",[v._v("hash")]),v._v(" 值。不同文件 "),e("code",[v._v("hash")]),v._v(" 值一定不一样"),e("br"),v._v("\n|- 让代码上线运行缓存更好使用")])])])]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("p",[v._v("开启多线程")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("HappyPack")]),v._v("：多线程编译，加快编译速度(加快 "),e("code",[v._v("loader")]),v._v(" 的编译速度)，不建议与 "),e("code",[v._v("thread-loader")]),v._v(" 一起使用")]),v._v(" "),e("li",[e("code",[v._v("thread-loader")]),v._v("：把这个 "),e("code",[v._v("loader")]),v._v(" 放置在其他 "),e("code",[v._v("loader")]),v._v(" 之前， 放置在这个 "),e("code",[v._v("loader")]),v._v(" 之后的 "),e("code",[v._v("loader")]),v._v(" 就会在一个单独的 "),e("code",[v._v("worker")]),v._v(" 池("),e("code",[v._v("worker pool")]),v._v(")中运行")])])]),v._v(" "),e("li",[e("p",[v._v("使用 oneOf 匹配 loader")])]),v._v(" "),e("li",[e("p",[v._v("tree shaking")]),v._v(" "),e("ul",[e("li",[v._v("去除无用代码")]),v._v(" "),e("li",[v._v("前提：1、必须使用 "),e("code",[v._v("es6")]),v._v(" 模块化；2、开启 "),e("code",[v._v("production")]),v._v(" 环境")]),v._v(" "),e("li",[v._v("作用：减少代码体积")]),v._v(" "),e("li",[v._v("在 "),e("code",[v._v("package.json")]),v._v(" 中配置")])]),v._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"sideEffects"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[v._v("false")]),v._v(" 所有代码都没有副作用（都可以进行tree shaking）\n  问题：可能会把css "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v(" @babel"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("polyfill（副作用）文件干掉\n"),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"sideEffects"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"*.css"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])])]),v._v(" "),e("li",[e("p",[v._v("多入口打包")])])]),v._v(" "),e("h4",{attrs:{id:"生产环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[v._v("#")]),v._v(" 生产环境")]),v._v(" "),e("ol",[e("li",[v._v("比开发环境多一个文件压缩\n"),e("ul",[e("li",[e("code",[v._v("uglifyjs-webpack-plugin")]),v._v("：用于 "),e("code",[v._v("js")]),v._v(" 压缩")]),v._v(" "),e("li",[e("code",[v._v("mini-css-extract-plugin")]),v._v("：可以将样式文件从 "),e("code",[v._v("bundle.js")]),v._v(" 抽离出来一个文件")]),v._v(" "),e("li",[e("code",[v._v("optimize-css-assets-webpack-plugin")]),v._v("："),e("code",[v._v("css")]),v._v(" 压缩，主要使用 "),e("code",[v._v("cssnano")]),v._v(" 压缩器")])])]),v._v(" "),e("li",[v._v("其余内容同上（开发环境）")])]),v._v(" "),e("h2",{attrs:{id:"常用的-plugin-和-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的-plugin-和-loader"}},[v._v("#")]),v._v(" 常用的 plugin 和 loader")]),v._v(" "),e("h3",{attrs:{id:"常用的-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的-loader"}},[v._v("#")]),v._v(" 常用的 loader")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("file-loader")]),v._v("：把文件输出到一个文件夹中，在代码中通过相对 "),e("code",[v._v("URL")]),v._v(" 去引用输出的文件")]),v._v(" "),e("li",[e("code",[v._v("url-loader")]),v._v("：和 "),e("code",[v._v("file-loader")]),v._v(" 类似，但是能在文件很小的情况下以 "),e("code",[v._v("base64")]),v._v(" 的方式把文件内容注入到代码中去")]),v._v(" "),e("li",[e("code",[v._v("source-map-loader")]),v._v("：加载额外的 "),e("code",[v._v("Source Map")]),v._v(" 文件，以方便断点调试")]),v._v(" "),e("li",[e("code",[v._v("image-loader")]),v._v("：加载并且压缩图片文件")]),v._v(" "),e("li",[e("code",[v._v("babel-loader")]),v._v("：把 "),e("code",[v._v("ES6")]),v._v(" 转换成 "),e("code",[v._v("ES5")])]),v._v(" "),e("li",[e("code",[v._v("css-loader")]),v._v("：加载 "),e("code",[v._v("CSS")]),v._v("，支持模块化、压缩、文件导入等特性")]),v._v(" "),e("li",[e("code",[v._v("style-loader")]),v._v("：把 "),e("code",[v._v("CSS")]),v._v(" 代码注入到 "),e("code",[v._v("JavaScript")]),v._v(" 中，通过 "),e("code",[v._v("DOM")]),v._v(" 操作去加载 "),e("code",[v._v("CSS")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("eslint-loader")]),v._v("：通过 "),e("code",[v._v("ESLint")]),v._v(" 检查 "),e("code",[v._v("JavaScript")]),v._v(" 代码")])]),v._v(" "),e("h3",{attrs:{id:"常用的-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的-plugin"}},[v._v("#")]),v._v(" 常用的 plugin")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("webpack-merge")]),v._v("：用于合并 "),e("code",[v._v("webpack")]),v._v(" 的公共配置和环境配置(合并 "),e("code",[v._v("webpack.config.js")]),v._v(" 和 "),e("code",[v._v("webpack.development.js")]),v._v(" 或者 "),e("code",[v._v("webpack.production.js")]),v._v(")")]),v._v(" "),e("li",[e("code",[v._v("yargs-parser")]),v._v(": 用于将我们的 "),e("code",[v._v("npm scripts")]),v._v(" 中的命令行参数转换成键值对的形式如 "),e("code",[v._v("--mode development")]),v._v(" 会被解析成键值对的形式"),e("code",[v._v('mode: "development"')]),v._v("，便于在配置文件中获取参数")]),v._v(" "),e("li",[e("code",[v._v("clean-webpack-plugin")]),v._v(": 用于清除本地文件，在进行生产环境打包的时候，如果不清除 "),e("code",[v._v("dist")]),v._v(" 文件夹，那么每次打包都会生成不同的 "),e("code",[v._v("js")]),v._v(" 文件或者 "),e("code",[v._v("css")]),v._v(" 文件堆积在文件夹中，因为每次打包都会生成不同的 "),e("code",[v._v("hash")]),v._v(" 值导致每次打包生成的文件名与上次打包不一样不会覆盖上次打包留下来的文件")]),v._v(" "),e("li",[e("code",[v._v("progress-bar-webpack-plugin")]),v._v(": 打包编译的时候以进度条的形式反馈打包进度")]),v._v(" "),e("li",[e("code",[v._v("webpack-build-notifier")]),v._v(": 当你打包之后切换到别的页面的时候，完成时会在本地系统弹出一个提示框告知你打包结果(成功或失败或警告)")]),v._v(" "),e("li",[e("code",[v._v("html-webpack-plugin")]),v._v(":  自动生成 "),e("code",[v._v("html")]),v._v(",并默认将打包生成的 "),e("code",[v._v("js、css")]),v._v(" 引入到 "),e("code",[v._v("html")]),v._v(" 文件中")]),v._v(" "),e("li",[e("code",[v._v("mini-css-extract-plugin")]),v._v(": "),e("code",[v._v("webpack")]),v._v(" 打包样式文件中的默认会把样式文件代码打包到 "),e("code",[v._v("bundle.js")]),v._v(" 中，"),e("code",[v._v("mini-css-extract-plugin")]),v._v(" 这个插件可以将样式文件从 "),e("code",[v._v("bundle.js")]),v._v(" 抽离出来一个文件，并且支持 "),e("code",[v._v("chunk css")])]),v._v(" "),e("li",[e("code",[v._v("add-asset-html-webpack-plugin")]),v._v(": 从命名可以看出，它的作用是可以将静态资源 "),e("code",[v._v("css")]),v._v(" 或者 "),e("code",[v._v("js")]),v._v(" 引入到 "),e("code",[v._v("html-webpack-plugin")]),v._v(" 生成的 "),e("code",[v._v("html")]),v._v(" 文件中")]),v._v(" "),e("li",[e("code",[v._v("uglifyjs-webpack-plugin")]),v._v(":  代码丑化，用于 "),e("code",[v._v("js")]),v._v(" 压缩(可以调用系统的线程进行多线程压缩，优化 "),e("code",[v._v("webpack")]),v._v(" 的压缩速度)")]),v._v(" "),e("li",[e("code",[v._v("optimize-css-assets-webpack-plugin")]),v._v(": "),e("code",[v._v("css")]),v._v(" 压缩，主要使用 "),e("code",[v._v("cssnano")]),v._v(" 压缩器("),e("code",[v._v("webpack4")]),v._v(" 的执行环境内置了 "),e("code",[v._v("cssnano")]),v._v("，所以不用安装)")]),v._v(" "),e("li",[e("code",[v._v("friendly-errors-webpack-plugin")]),v._v(":  能够更好在终端看到 "),e("code",[v._v("webapck")]),v._v(" 运行的警告和错误")]),v._v(" "),e("li",[e("code",[v._v("happypack")]),v._v(":  多线程编译，加快编译速度(加快 "),e("code",[v._v("loader")]),v._v(" 的编译速度)，注意，"),e("code",[v._v("thread-loader")]),v._v(" 不可以和 "),e("code",[v._v("mini-css-extract-plugin")]),v._v(" 结合使用")]),v._v(" "),e("li",[e("code",[v._v("splitChunks")]),v._v(":"),e("code",[v._v("CommonChunkPlugin")]),v._v(" 的后世，用于对 "),e("code",[v._v("bundle.js")]),v._v(" 进行 "),e("code",[v._v("chunk")]),v._v(" 切割("),e("code",[v._v("webpack")]),v._v(" 的内置插件)")]),v._v(" "),e("li",[e("code",[v._v("DllPlugin")]),v._v(": 将模块预先编译，它会在第一次编译的时候将配置好的需要预先编译的模块编译在缓存中，第二次编译的时候，解析到这些模块就直接使用缓存，而不是去编译这些模块("),e("code",[v._v("webpack")]),v._v(" 的内置插件)")]),v._v(" "),e("li",[e("code",[v._v("DllReferencePlugin")]),v._v(": 将预先编译好的模块关联到当前编译中，当 "),e("code",[v._v("webpack")]),v._v(" 解析到这些模块时，会直接使用预先编译好的模块("),e("code",[v._v("webpack")]),v._v(" 的内置插件)")]),v._v(" "),e("li",[e("code",[v._v("HotModuleReplacementPlugin")]),v._v(": 实现局部热加载(刷新)，区别与在 "),e("code",[v._v("webpack-dev-server")]),v._v(" 的全局刷新("),e("code",[v._v("webpack")]),v._v(" 的内置插件)")])]),v._v(" "),e("h2",{attrs:{id:"webpack-和-gulp、grunt-的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-和-gulp、grunt-的不同"}},[v._v("#")]),v._v(" "),e("code",[v._v("Webpack")]),v._v(" 和 "),e("code",[v._v("Gulp、Grunt")]),v._v(" 的不同")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Gulp、Grunt")]),v._v(" "),e("ul",[e("li",[v._v("轻量化的任务")]),v._v(" "),e("li",[v._v("将打包各个阶段称为 "),e("code",[v._v("task")]),v._v("，需要开发者自己去调用打包中各个阶段生成文件之后的 "),e("code",[v._v("task")]),v._v(" 任务（串行执行）")])])]),v._v(" "),e("li",[e("code",[v._v("Webpack")]),v._v(" "),e("ul",[e("li",[v._v("打包大型应用")]),v._v(" "),e("li",[e("code",[v._v("Webpack")]),v._v(" 打包过程中会发布各个事件，开发者只要在这些事件阶段中通过 "),e("code",[v._v("Webpack")]),v._v(" 提供的 "),e("code",[v._v("API")]),v._v(" 修改 编译产物。不需要开发者掌握整个打包流程中各个阶段如何工作（管理好自己需要管理的那部分即可）")])])])]),v._v(" "),e("h2",{attrs:{id:"如何看待-webpack-和-rollup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何看待-webpack-和-rollup"}},[v._v("#")]),v._v(" 如何看待 "),e("code",[v._v("Webpack")]),v._v(" 和 "),e("code",[v._v("Rollup")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Webpack")]),v._v(" 是大型应用的打包，输出大量文件以及它们之间如何引用")]),v._v(" "),e("li",[e("code",[v._v("rollup")]),v._v(" 是 "),e("code",[v._v("JavaScript")]),v._v(" 类库的打包（注重最终输出一个 "),e("code",[v._v("js")]),v._v(" 文件）")])]),v._v(" "),e("h2",{attrs:{id:"情景题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情景题"}},[v._v("#")]),v._v(" 情景题")]),v._v(" "),e("h3",{attrs:{id:"如果要将-vue-文件中的-css-全部提取到一个-css-文件中-为什么使用-plugin-而不是-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果要将-vue-文件中的-css-全部提取到一个-css-文件中-为什么使用-plugin-而不是-loader"}},[v._v("#")]),v._v(" 如果要将 "),e("code",[v._v(".vue")]),v._v(" 文件中的 "),e("code",[v._v("css")]),v._v(" 全部提取到一个 "),e("code",[v._v(".css")]),v._v(" 文件中，为什么使用 "),e("code",[v._v("plugin")]),v._v("，而不是 "),e("code",[v._v("loader")]),v._v("？")]),v._v(" "),e("p",[e("code",[v._v("答：plugin")]),v._v(" 可以在 "),e("code",[v._v("Webpack")]),v._v(" 的 生命周期中执行，可以获取到编译完成后的所有文件，在合适的时机通过 "),e("code",[v._v("Webpack")]),v._v(" 提供的 "),e("code",[v._v("API")]),v._v(" 改变输出结果。"),e("code",[v._v("loader")]),v._v(" 用来加载和编译转换文件，不适合做文件内容抽取和合并")])])}),[],!1,null,null,null);_.default=a.exports}}]);