<template>
  <section class="contents-child pb-12 min-h-full md:px-5">
    <div v-if="response.title">
      <!-- lang title -->
      <div class="text-center font-mono pb-5 pt-6">
        <h1 :style="{ color: response.theme }" class="text-4xl tracking-tighter">
          {{ response.title }}
        </h1>
        <p class="text-sm font-bold tracking-wide text-gray-700 mb-2">
          {{ response.description }}
        </p>
      </div>

      <!-- code block -->
      <div
        class="code my-6 mx-auto p-5 rounded shadow border border-app-border"
        v-for="(topic, i) in response.topics"
        :key="i"
      >
        <h4
          class=" text-xl mb-6 text-gray-900 border-l-4 pl-3 py-2"
          :style="{ 'border-color': response.theme }"
          :id="
            topic.title
              .toLowerCase()
              .split(' ')
              .join('')
          "
        >
          {{ topic.title }}
        </h4>
        <div v-for="(item, i) in topic.items" :key="i">
          <p
            class="text-sm text-gray-600 mb-3 font-semibold"
            :id="
              item.description
                .toLowerCase()
                .split(' ')
                .join('')
            "
          >
            {{ item.description }}
          </p>
          <prism class="rounded-lg" :language="item.type">{{ item.code }}</prism>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'prismjs'
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-coy.css'
import Prism from 'vue-prism-component'

export default {
  name: 'contents-child',
  props: {
    response: {
      type: Object,
      required: true
    },
    makeReqToApiForContent: {
      type: Function,
      required: true
    }
  },
  watch: {
    '$route.params.lang': {
      handler(lang) {
        this.makeReqToApiForContent(lang)
      },
      deep: true,
      immediate: true
    }
  },
  components: {
    Prism
  }
}
</script>

<style>
.contents-child {
  background-color: var(--bg-deem);
}
.code {
  background-color: var(--bg-light);
  max-width: 720px;
}
/* h4 {
  @apply border-blue-theme !important;
} */

/**
 * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);
 * @author Tim  Shedor
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  position: relative;
  margin: 0.5em 0;
  overflow: visible;
  padding: 0;
  border-radius: 10px;
}
pre[class*='language-'] > code {
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  border-radius: 10px;
  /* border-left: 10px solid #358ccb; */
  /* box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf; */
  background-color: #fdfdfd;
  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
  background-size: 3em 3em;
  background-origin: content-box;
  background-attachment: local;
}

code[class*='language'] {
  max-height: inherit;
  height: inherit;
  padding: 0 1em;
  display: block;
  overflow: auto;
}

/* Margin bottom to accommodate shadow */
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: #fdfdfd;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 1em;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  position: relative;
  padding: 0.2em;
  border-radius: 0.3em;
  color: #c92c2c;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline;
  white-space: normal;
}

pre[class*='language-']:before,
pre[class*='language-']:after {
  content: '';
  z-index: -2;
  display: block;
  position: absolute;
  bottom: 0.75em;
  left: 0.18em;
  width: 40%;
  height: 20%;
  max-height: 13em;
  box-shadow: 0px 13px 8px #979797;
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
  -ms-transform: rotate(-2deg);
  -o-transform: rotate(-2deg);
  transform: rotate(-2deg);
}

:not(pre) > code[class*='language-']:after,
pre[class*='language-']:after {
  right: 0.75em;
  left: auto;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7d8b99;
}

.token.punctuation {
  color: #5f6364;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
  color: #c92c2c;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.function,
.token.builtin,
.token.inserted {
  color: #2f9c0a;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.class-name {
  color: #1990b8;
}

.token.regex,
.token.important {
  color: #e90;
}

.language-css .token.string,
.style .token.string {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.important {
  font-weight: normal;
}

.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.namespace {
  opacity: 0.7;
}

@media screen and (max-width: 767px) {
  pre[class*='language-']:before,
  pre[class*='language-']:after {
    bottom: 14px;
    box-shadow: none;
  }
}

/* Plugin styles */
.token.tab:not(:empty):before,
.token.cr:before,
.token.lf:before {
  color: #e0d7d1;
}

/* Plugin styles: Line Numbers */
pre[class*='language-'].line-numbers.line-numbers {
  padding-left: 0;
}

pre[class*='language-'].line-numbers.line-numbers code {
  padding-left: 3.8em;
}

pre[class*='language-'].line-numbers.line-numbers .line-numbers-rows {
  left: 0;
}

/* Plugin styles: Line Highlight */
pre[class*='language-'][data-line] {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
}
pre[data-line] code {
  position: relative;
  padding-left: 4em;
}
pre .line-highlight {
  margin-top: 0;
}
</style>
