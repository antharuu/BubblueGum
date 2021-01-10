"use strict";

(function () {
  function e(e) {
    e.innerHTML = e.innerHTML.trim(), "pre" !== e.parentElement.localName && (e.outerHTML = "<pre>" + e.outerHTML.trim() + "</pre>");
  }

  document.querySelectorAll("[_code]").forEach(function (o) {
    {
      var c = o.attributes._code.value;
      o.classList.add("language-" + c), "code" === o.localName ? e(o) : "pre" === o.localName && void 0 !== o.childNodes[0] && ("code" !== o.childNodes[0].localName && (o.innerHTML = "<code>" + o.innerHTML.trim() + "</code>"), e(o.childNodes[0]));
    }
  });
})();