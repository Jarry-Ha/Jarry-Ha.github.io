import{_ as n,d as e}from"./app.c78821e8.js";const o={},t=e(`<p>npm \uBA85\uB839 \uAC04\uB7B5 \uC124\uBA85</p><pre><code>1. \uAC80\uC0C9
    npm.com\uC5D0\uC11C \uAC80\uC0C9\uD558\uB294 \uAC83\uC774 \uBCF4\uAE30 \uC88B\uB2E4.
    npm search moduleName

2. \uC0C1\uC138 \uC815\uBCF4
    npm info moduleName

3. version \uC815\uBCF4
    npm info moduleName version
    npm info moduleName versions

4. \uC124\uCE58
    npm init
    or
    npm init -y;


    npm install -g moduleName
    npm i -g moduleName     =&gt; Global \uC124\uCE58
        \uC124\uCE58\uD55C \uBAA8\uB4C8\uC744 \uC5B4\uB290 \uACBD\uB85C\uC5D0\uC11C\uB4E0\uC9C0 \uD638\uCD9C\uD560 \uC218 \uC788\uB2E4
    
    npm install moduleName --save
    npm i moduleName        =&gt; Local \uC124\uCE58
        \uC124\uCE58\uD55C \uBAA8\uB4C8\uC740 \uC124\uCE58 \uACBD\uB85C \uB0B4\uBD80\uC5D0 node_modules\uB77C\uB294 \uD3F4\uB354\uC5D0 \uC124\uCE58\uB418\uBA70 \uD574\uB2F9 \uACBD\uB85C \uD558\uC704\uC5D0\uC11C\uB9CC \uD638\uCD9C\uD560 \uC218 \uC788\uB2E4

    npm install moduleName --save-dev
    npm i [-g] -D moduleName
        \uD504\uB85C\uC81D\uD2B8 \uC791\uC131\uACFC\uB294 \uC0C1\uAD00\uC5C6\uB294 \uBAA8\uB4C8\uC744 \uC124\uCE58\uD558\uB294 \uACBD\uC6B0 (\uD504\uB85C\uC81D\uD2B8 \uC791\uC131\uACFC\uB294 \uC0C1\uAD00 \uC5C6\uB294 \uBAA8\uB4C8)
        \uC608] text\uC5D0 \uAD00\uB828\uB41C \uBAA8\uB4C8.

    \uBC84\uC804 \uC9C0\uC815
        npm i bootstrap         \uCD5C\uC2E0 \uBC84\uC804
        npm i bootstrap@4       4\uC758 \uB9C8\uC9C0\uB9C9 \uBC84\uC804
        npm i bootstrap@4.1     4.1\uC758 \uB9C8\uC9C0\uB9C9 \uBC84\uC804
        npm i bootstrap@4.1.5   4.1.5\uC640 \uB9E4\uCE6D\uB418\uB294 \uBC84\uC804. \uC5C6\uC73C\uBA74 \uC124\uCE58 \uC548\uB428

5. \uC0AD\uC81C
    npm un -g moduleName        npm uninstall -g moduleName
    npm un moduleName           npm uninstall moduleName

6. node_modules\uC5D0 \uC124\uCE58\uB41C \uD56D\uBAA9 \uAC80\uC0C9
    npm list moduleName
</code></pre><p>\uC791\uC5C5\uD558\uAE30 \uC804\uC5D0 \uC124\uCE58\uD560 \uBAA8\uB4C8\uC744 \uAD00\uB9AC\uD558\uB294 \uD30C\uC77C\uBD80\uD130 \uC791\uC131\uD55C\uB2E4. npm init npm init -y =&gt; \uC544\uB798 \uAE30\uBCF8\uAC12\uC73C\uB85C \uC790\uB3D9 \uC791\uC131</p><pre><code>package name: (chap01_javascript)   =&gt; \uD504\uB85C\uC81D\uD2B8 \uBA85 (\uB300\uBB38\uC790\uB294 \uC0AC\uC6A9 \uBD88\uAC00)
version: (1.0.0)                    =&gt; \uD504\uB85C\uC81D\uD2B8 \uBC84\uC804
description:                        =&gt; \uD504\uB85C\uC81D\uD2B8 \uC124\uBA85
entry point: (index.js)             =&gt; \uC5B4\uB290 \uD30C\uC77C \uAE30\uC900\uC73C\uB85C \uC2E4\uD589 \uD560 \uAC83\uC778\uAC00
test command:                       =&gt; Local\uC5D0 \uC124\uCE58\uB41C \uBAA8\uB4C8\uC744 \uC2E4\uD589\uD560 \uBA85\uB839\uC744 \uAE30\uC220
git repository:                     =&gt; git address
keywords:                           =&gt; npm search\uB85C \uAC80\uC0C9\uB420 \uB2E8\uC5B4
author:                             =&gt; \uC791\uC131\uC790
license: (ISC)                      =&gt; \uC800\uC791\uAD8C \uAD00\uB828
</code></pre><p>\uD544\uC694\uD55C \uBAA8\uB4C8\uC744 i \uB610\uB294 i -D \uD615\uD0DC\uB85C \uC124\uCE58</p><p>\uC124\uCE58 \uD6C4 node_modules\uAC00 \uC798\uBABB\uB41C \uACBD\uC6B0, moduleName\uC640 package-lock.json \uC0AD\uC81C</p><p>\uC7AC \uC124\uCE58 package.json\uC758 dependencies\uC640 devDependencies\uB97C \uC7AC \uC124\uCE58\uD574 \uC900\uB2E4 npm i or npm install</p><p>\uBA85\uB839\uB3C4 \uB4F1\uB85D\uD560 \uC218 \uC788\uB2E4 \uBA85\uB839\uC758 \uC2E4\uD589\uC740 npm run test npm run build \uB2E8 start \uBA85\uB839\uC740 run\uC744 \uC0DD\uB7B5\uD558\uACE0 npm start \uB85C \uC2E4\uD589 \uAC00\uB2A5</p><pre><code>&quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
    &quot;build&quot;: &quot;npx babel src -d dist&quot;
},
</code></pre>`,9);function m(p,a){return t}var s=n(o,[["render",m],["__file","\uBA85\uB839npm.html.vue"]]);export{s as default};
