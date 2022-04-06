import{_ as t,r as o,o as r,c as i,a as n,e,F as l,b as s,d as p}from"./app.c78821e8.js";const c={},u=n("h1",{id:"django-rest-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#django-rest-api","aria-hidden":"true"},"#"),s(" django_rest_api")],-1),k=n("ul",null,[n("li",null,"Docs : https://www.django-rest-framework.org/")],-1),d=n("p",null,"\uACF5\uC2DD\uBB38\uC11C\uC5D0\uC11C\uB294 \uD29C\uD1A0\uB9AC\uC5BC\uC774 \uCD1D 6\uAC00\uC9C0 \uCC55\uD130\uB85C \uB418\uC5B4\uC788\uB2E4.",-1),b=n("p",null,"\uCD5C\uC885 \uC790\uB8CC\uB9CC \uBCF4\uACE0 \uC2F6\uC9C0\uB9CC \uC0AC\uC2E4\uC0C1 6\uAC00\uC9C0 \uB0B4\uC6A9\uC744 \uB2E4 \uC54C\uC544\uC57C \uD55C\uB2E4.",-1),m={id:"tutorial-1-serialization",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#tutorial-1-serialization","aria-hidden":"true"},"#",-1),w=s(),_={href:"https://www.django-rest-framework.org/tutorial/1-serialization/#tutorial-1-serialization",target:"_blank",rel:"noopener noreferrer"},g=s("Tutorial 1: Serialization"),f=p(`<ul><li><p>Serialization(\uC9C1\uB82C\uD654) : django\uC5D0\uC11C html - template\uC744 \uB80C\uB354\uB9C1 \uD558\uB4EF\uC774 model - json\uD615\uC2DD\uC73C\uB85C \uB80C\uB354\uB9C1\uD574\uC900\uB2E4\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.</p></li><li><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SnippetSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul>`,1),y={id:"tutorial-2-requests-and-responses",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#tutorial-2-requests-and-responses","aria-hidden":"true"},"#",-1),S=s(),q={href:"https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#tutorial-2-requests-and-responses",target:"_blank",rel:"noopener noreferrer"},x=s("Tutorial 2: Requests and Responses"),z={id:"wrapping-api-views",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#wrapping-api-views","aria-hidden":"true"},"#",-1),j=s(),T={href:"https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#wrapping-api-views",target:"_blank",rel:"noopener noreferrer"},R=s("Wrapping API views"),A=p(`<p>REST \uD504\uB808\uC784\uC6CC\uD06C\uB294 API view\uB97C \uC791\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB450 \uAC1C\uC758 wapper\uB97C \uC81C\uACF5\uD55C\uB2E4.</p><ol><li><p>The <code>@api_view</code> decorator for working with function based views.</p><ul><li><p>\uB370\uCF54\uB808\uC774\uD130\uB97C \uC774\uC6A9\uD55C Function Based Views(FBV)</p></li><li><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@api_view</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>The <code>APIView</code> class for working with class-based views.</p><ul><li>APIView \uD074\uB798\uC2A4\uB97C \uC774\uC6A9\uD55C Class Based Views(CBV)</li></ul></li></ol>`,2),P={id:"tutorial-3-class-based-views",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#tutorial-3-class-based-views","aria-hidden":"true"},"#",-1),B=s(),C={href:"https://www.django-rest-framework.org/tutorial/3-class-based-views/#tutorial-3-class-based-views",target:"_blank",rel:"noopener noreferrer"},L=s("Tutorial 3: Class-based Views"),E=p(`<h3 id="_1-apiview\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-cbv" tabindex="-1"><a class="header-anchor" href="#_1-apiview\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-cbv" aria-hidden="true">#</a> 1. APIView\uB97C \uC774\uC6A9\uD55C CBV</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> Http404
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status


<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    List all snippets, or create a new snippet.
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippets <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>snippets<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        serializer <span class="token operator">=</span> SnippetSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>errors<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_400_BAD_REQUEST<span class="token punctuation">)</span>
  <span class="token comment">#...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_2-mixin-\u1107\u1161\u11BC\u1109\u1175\u11A8\u110B\u1174-cbv" tabindex="-1"><a class="header-anchor" href="#_2-mixin-\u1107\u1161\u11BC\u1109\u1175\u11A8\u110B\u1174-cbv" aria-hidden="true">#</a> 2. Mixin \uBC29\uC2DD\uC758 CBV</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> mixins
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics

<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>mixins<span class="token punctuation">.</span>ListModelMixin<span class="token punctuation">,</span>
                  mixins<span class="token punctuation">.</span>CreateModelMixin<span class="token punctuation">,</span>
                  generics<span class="token punctuation">.</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">list</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>create<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token comment">#...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_3-\u1100\u1161\u110C\u1161\u11BC-\u1100\u1161\u11AB\u1105\u1163\u11A8\u1112\u1161\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8\u110B\u1174-cbv-\u110E\u116E\u110E\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-\u1100\u1161\u110C\u1161\u11BC-\u1100\u1161\u11AB\u1105\u1163\u11A8\u1112\u1161\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8\u110B\u1174-cbv-\u110E\u116E\u110E\u1165\u11AB" aria-hidden="true">#</a> 3. \uAC00\uC7A5 \uAC04\uB7B5\uD55C \uBC29\uC2DD\uC758 CBV - \uCD94\uCC9C</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> snippets<span class="token punctuation">.</span>models <span class="token keyword">import</span> Snippet
<span class="token keyword">from</span> snippets<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> SnippetSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> generics


<span class="token keyword">class</span> <span class="token class-name">SnippetList</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>ListCreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer


<span class="token keyword">class</span> <span class="token class-name">SnippetDetail</span><span class="token punctuation">(</span>generics<span class="token punctuation">.</span>RetrieveUpdateDestroyAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\uC778\uC99D\uC774 \uD544\uC694\uC5C6\uB2E4\uBA74(\uAC1C\uC778\uD504\uB85C\uC81D\uD2B8\uAC00 \uBCF4\uC548\uC774 \uD544\uC694\uC5C6\uC744 \uACBD\uC6B0) \uC5EC\uAE30\uAE4C\uC9C0\uB9CC \uC9C4\uD589\uD558\uBA74 \uB41C\uB2E4.</p>`,7),D={id:"tutorial-4-authentication-permissions",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#tutorial-4-authentication-permissions","aria-hidden":"true"},"#",-1),M=s(),U={href:"https://www.django-rest-framework.org/tutorial/4-authentication-and-permissions/#tutorial-4-authentication-permissions",target:"_blank",rel:"noopener noreferrer"},N=s("Tutorial 4: Authentication & Permissions"),H=n("h3",{id:"\u1103\u1161\u110B\u1173\u11B7-4\u1100\u1161\u110C\u1175\u1105\u1173\u11AF-\u110C\u1175\u110B\u116F\u11AB\u1112\u1161\u1100\u1175-\u110B\u1171\u1112\u1162-\u110B\u1175\u11AB\u110C\u1173\u11BC-\u1100\u116F\u11AB\u1112\u1161\u11AB-\u110F\u1169\u1103\u1173\u1105\u1173\u11AF-\u110E\u116E\u1100\u1161\u1112\u1161\u11AB\u1103\u1161",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1103\u1161\u110B\u1173\u11B7-4\u1100\u1161\u110C\u1175\u1105\u1173\u11AF-\u110C\u1175\u110B\u116F\u11AB\u1112\u1161\u1100\u1175-\u110B\u1171\u1112\u1162-\u110B\u1175\u11AB\u110C\u1173\u11BC-\u1100\u116F\u11AB\u1112\u1161\u11AB-\u110F\u1169\u1103\u1173\u1105\u1173\u11AF-\u110E\u116E\u1100\u1161\u1112\u1161\u11AB\u1103\u1161","aria-hidden":"true"},"#"),s(" \uB2E4\uC74C 4\uAC00\uC9C0\uB97C \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uC778\uC99D&\uAD8C\uD55C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD55C\uB2E4.")],-1),F=n("ul",null,[n("li",null,"\uCF54\uB4DC Snippet\uC740 \uD56D\uC0C1 \uC791\uC131\uC790\uC640 \uC5F0\uACB0\uB429\uB2C8\uB2E4."),n("li",null,"\uC778\uC99D\uB41C \uC0AC\uC6A9\uC790\uB9CC Snippet\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),n("li",null,"Snippet \uC791\uC131\uC790\uB9CC Snippet\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uAC70\uB098 \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),n("li",null,"\uC778\uC99D\uB418\uC9C0 \uC54A\uC740 \uC694\uCCAD\uC5D0\uB294 \uC804\uCCB4 \uC77D\uAE30 \uC804\uC6A9 \uC561\uC138\uC2A4 \uAD8C\uD55C\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.")],-1),G={id:"\u1110\u1172\u1110\u1169\u1105\u1175\u110B\u1165\u11AF-5-\u1100\u116A\u11AB\u1100\u1168-\u1106\u1175\u11BE-\u1112\u1161\u110B\u1175\u1111\u1165\u1105\u1175\u11BC\u110F\u1173\u1103\u116C\u11AB-api",tabindex:"-1"},K=n("a",{class:"header-anchor",href:"#\u1110\u1172\u1110\u1169\u1105\u1175\u110B\u1165\u11AF-5-\u1100\u116A\u11AB\u1100\u1168-\u1106\u1175\u11BE-\u1112\u1161\u110B\u1175\u1111\u1165\u1105\u1175\u11BC\u110F\u1173\u1103\u116C\u11AB-api","aria-hidden":"true"},"#",-1),Q=s(),W={href:"https://www.django-rest-framework.org/tutorial/5-relationships-and-hyperlinked-apis/#tutorial-5-relationships-hyperlinked-apis",target:"_blank",rel:"noopener noreferrer"},J=s("\uD29C\uD1A0\uB9AC\uC5BC 5: \uAD00\uACC4 \uBC0F \uD558\uC774\uD37C\uB9C1\uD06C\uB41C API"),X=p(`<p>\uBE0C\uB77C\uC6B0\uC800\uB97C \uC5F4\uACE0 \uD0D0\uC0C9 \uAC00\uB2A5\uD55C API\uB85C \uC774\uB3D9\uD558\uBA74 \uC774\uC81C \uB9C1\uD06C\uB97C \uB530\uB77C\uAC00\uAE30\uB9CC \uD558\uBA74 API\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>\uC544\uB798\uC640 \uAC19\uC774 URL \uB9C1\uD06C\uAC00 \uD45C\uC2DC\uB418\uC5B4 \uD0D0\uC0C9\uC774 \uAC00\uB2A5\uD558\uB2E4.</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>HTTP <span class="token number">200</span> OK
Allow<span class="token operator">:</span> GET<span class="token punctuation">,</span> OPTIONS
Content-Type<span class="token operator">:</span> application/json
Vary<span class="token operator">:</span> Accept

<span class="token punctuation">{</span>
    <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/users/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;snippets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8000/snippets/&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,3),Y={id:"\u1110\u1172\u1110\u1169\u1105\u1175\u110B\u1165\u11AF-6-viewsets-\u1106\u1175\u11BE-\u1105\u1161\u110B\u116E\u1110\u1165",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#\u1110\u1172\u1110\u1169\u1105\u1175\u110B\u1165\u11AF-6-viewsets-\u1106\u1175\u11BE-\u1105\u1161\u110B\u116E\u1110\u1165","aria-hidden":"true"},"#",-1),$=s(),nn={href:"https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers/#tutorial-6-viewsets-routers",target:"_blank",rel:"noopener noreferrer"},sn=s("\uD29C\uD1A0\uB9AC\uC5BC 6: ViewSets \uBC0F \uB77C\uC6B0\uD130"),an=p(`<p>ViewSet :</p><ul><li>ViewSet \uD074\uB798\uC2A4\uB294 View \uD074\uB798\uC2A4 + <code>list</code>, <code>create</code>, <code>retrieve</code>, <code>update</code> and <code>destroy</code> \uB2E4 \uD569\uCCD0\uB1A8\uB2E4.</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> action
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> permissions

<span class="token keyword">class</span> <span class="token class-name">SnippetViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    This viewset automatically provides \`list\`, \`create\`, \`retrieve\`,
    \`update\` and \`destroy\` actions.

    Additionally we also provide an extra \`highlight\` action.
    &quot;&quot;&quot;</span>
    queryset <span class="token operator">=</span> Snippet<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> SnippetSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">[</span>permissions<span class="token punctuation">.</span>IsAuthenticatedOrReadOnly<span class="token punctuation">,</span>
                          IsOwnerOrReadOnly<span class="token punctuation">]</span>

    <span class="token decorator annotation punctuation">@action</span><span class="token punctuation">(</span>detail<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> renderer_classes<span class="token operator">=</span><span class="token punctuation">[</span>renderers<span class="token punctuation">.</span>StaticHTMLRenderer<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">highlight</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        snippet <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>snippet<span class="token punctuation">.</span>highlighted<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">perform_create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span>owner<span class="token operator">=</span>self<span class="token punctuation">.</span>request<span class="token punctuation">.</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>ViewSet \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD588\uAE30 \uB54C\uBB38\uC5D0 URL conf\uB97C \uB514\uC790\uC778\uD560 \uD544\uC694\uAC00 \uC5C6\uB2E4.</p><p>\uB9AC\uC18C\uC2A4\uB97C \uBDF0\uC640 URL\uC5D0 \uC5F0\uACB0\uD558\uB294 \uADDC\uCE59\uC740 <code>Router</code>\uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uB41C\uB2E4.</p><p>\uB77C\uC6B0\uD130\uC5D0 \uC801\uC808\uD55C \uBDF0 \uC138\uD2B8\uB97C \uB4F1\uB85D\uD558\uACE0 \uB098\uBA38\uC9C0\uB294 \uB77C\uC6B0\uD130\uAC00 \uCC98\uB9AC\uD558\uB3C4\uB85D \uD55C\uB2E4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>routers <span class="token keyword">import</span> DefaultRouter
<span class="token keyword">from</span> snippets <span class="token keyword">import</span> views

<span class="token comment"># Create a router and register our viewsets with it.</span>
router <span class="token operator">=</span> DefaultRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">r&#39;snippets&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>SnippetViewSet<span class="token punctuation">)</span>
router<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">r&#39;users&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>UserViewSet<span class="token punctuation">)</span>

<span class="token comment"># The API URLs are now determined automatically by the router.</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>router<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,7),en={id:"\u26BD\uFE0F-\u110B\u1175-\u1106\u1169\u1103\u1173\u11AB-\u110B\u1175\u11AF\u110B\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172-\u1105\u1175\u11BC\u110F\u1173",tabindex:"-1"},pn=n("a",{class:"header-anchor",href:"#\u26BD\uFE0F-\u110B\u1175-\u1106\u1169\u1103\u1173\u11AB-\u110B\u1175\u11AF\u110B\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172-\u1105\u1175\u11BC\u110F\u1173","aria-hidden":"true"},"#",-1),tn=s(" \u26BD\uFE0F "),on={href:"https://velog.io/@jcinsh/RetrieveUpdateDestroyView-%EC%9D%B4%ED%95%B4",target:"_blank",rel:"noopener noreferrer"},rn=s("\uC774 \uBAA8\uB4E0 \uC77C\uC774 \uAC00\uB2A5\uD55C \uC774\uC720"),ln=s(" (\uB9C1\uD06C)"),cn=n("ul",null,[n("li",null,"\uACB0\uAD6D Mixin \uB54C\uBB38\uC5D0 \uAC00\uB2A5\uD55C\uAC70\uC600\uB2E4."),n("li",null,"\uD558\uB098\uAC00 \uB9CC\uB2A5\uC774 \uC544\uB2C8\uB2E4. \uD544\uC694\uC5D0 \uB530\uB77C \uC368\uC57C\uD55C\uB2E4.")],-1);function un(kn,dn){const a=o("ExternalLinkIcon");return r(),i(l,null,[u,k,d,b,n("h1",m,[h,w,n("a",_,[g,e(a)])]),f,n("h1",y,[v,S,n("a",q,[x,e(a)])]),n("h2",z,[V,j,n("a",T,[R,e(a)])]),A,n("h1",P,[I,B,n("a",C,[L,e(a)])]),E,n("h1",D,[O,M,n("a",U,[N,e(a)])]),H,F,n("h1",G,[K,Q,n("a",W,[J,e(a)])]),X,n("h1",Y,[Z,$,n("a",nn,[sn,e(a)])]),an,n("h2",en,[pn,tn,n("a",on,[rn,e(a)]),ln]),cn],64)}var mn=t(c,[["render",un],["__file","django_rest_api.html.vue"]]);export{mn as default};
