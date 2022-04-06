import{_ as t,d as e}from"./app.c78821e8.js";const o={},n=e(`<p>eslint \uC124\uCE58 npm i -D eslint@7 eslint-config-airbnb eslint-config-google</p><p>eslint init npx =&gt; node_modules\uC5D0 \uC124\uCE58\uB41C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC2E4\uD589\uD558\uB294 \uBA85\uB839 \uC124\uCE58 \uC2DC\uC5D0 -g \uC635\uC158\uC73C\uB85C global\uC5D0 \uC124\uCE58 \uD55C \uACBD\uC6B0\uB294 npx \uC5C6\uC774 \uBC14\uB85C \uC2E4\uD589 \uAC00\uB2A5.</p><pre><code>npx eslint --init
</code></pre><p>eslint\uB97C \uC774\uC6A9\uD55C \uAC80\uC0AC npx eslint fileName npx eslint fileName --fix</p><p>\uD658\uACBD \uC124\uC815 \uCD94\uAC00 .eslintrc.json \uD30C\uC77C \uC218\uC815 &quot;extends&quot;: [ &quot;eslint:recommended&quot;, &quot;airbnb&quot; ],</p><pre><code>npx eslint fileName
npx eslint fileName --fix   =&gt; \uC218\uC815 \uAC00\uB2A5\uD55C \uD56D\uBAA9\uC740 \uC218\uC815\uD574 \uC900\uB2E4.
</code></pre><p>rules \uCD94\uAC00 \uCCB4\uD06C\uAC00 \uD544\uC694 \uC5C6\uB2E4\uACE0 \uC0DD\uAC01\uB418\uB294 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD55C\uB2E4</p><pre><code>&quot;rules&quot;: {
    &quot;no-var&quot;: &quot;off&quot;,
    &quot;no-unused-vars&quot;: &quot;warn&quot;
}
</code></pre><p>\uAC01 JS \uD30C\uC77C\uC5D0\uC11C eslint\uC758 \uCCB4\uD06C\uB97C \uD558\uC9C0 \uC54A\uB3C4\uB85D \uC9C0\uC815 \uD30C\uC77C \uC120\uB450\uC5D0 \uCD94\uAC00\uD55C\uB2E4</p><pre><code>/* eslint-disable */
</code></pre><p>prettier \uC124\uCE58 npm i -D prettier eslint-config-prettier eslint-plugin-prettier</p><pre><code>eslint \uC124\uC815 \uD30C\uC77C \uC218\uC815
&quot;extends&quot;: [
        &quot;google&quot;,
        &quot;eslint:recommended&quot;,
        &quot;prettier&quot;
    ],
    ...
    &quot;rules&quot;: {
        &quot;prettier/prettier&quot;: &quot;error&quot;,
        &quot;no-unused-vars&quot;: &quot;off&quot;
    },
    &quot;plugins&quot;: [
        &quot;prettier&quot;
    ],
</code></pre><p>\uC2E4\uD589 npx eslint filename --fix</p><p>\uC124\uC815\uD30C\uC77C \uC791\uC131 \uCC38\uC870 https://runebook.dev/ko/docs/eslint/-index- \uADDC\uCE59 \uD55C\uAD6D\uC5B4 \uBC84\uC804 https://prettier.io/docs/en/configuration.html https://heewon26.tistory.com/262</p><p>.prettierrc.json</p><pre><code>{
    &quot;tabWidth&quot;: 2,
    &quot;printWidth&quot;: 150,
    &quot;singleQuote&quot;: true,
    &quot;trailingComma&quot;: &quot;none&quot;,
    &quot;bracketSpacing&quot;: true,
    &quot;semi&quot;: true,
    &quot;useTabs&quot;: true,
    &quot;arrowParens&quot;: &quot;avoid&quot;,
    &quot;endOfLine&quot;: &quot;lf&quot;
}
</code></pre>`,16);function u(i,r){return n}var q=t(o,[["render",u],["__file","\uC124\uC815ESLint.html.vue"]]);export{q as default};
