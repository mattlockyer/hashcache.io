// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = h;
exports.Fragment = d;
exports.createRef = p;
exports.Component = y;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    t,
    i,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var t,
      i,
      o,
      r,
      f = arguments;
  if (l = s({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(f[t]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
  return r = l.key, null != (o = l.ref) && delete l.ref, null != r && delete l.key, v(n, l, r, o);
}

function v(l, u, t, i) {
  var o = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function y(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(k);
}

function k() {
  var n, l, t, i, o, r, f;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (t = void 0, i = void 0, r = (o = (l = n).__v).__e, (f = l.__P) && (t = [], i = T(f, o, s({}, o), l.__n, void 0 !== f.ownerSVGElement, null, t, null == r ? m(o) : r), $(t, o), i != r && w(o)));
}

function _(n, l, u, t, i, o, r, c, s) {
  var h,
      v,
      p,
      d,
      y,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == f && (c = null != o ? o[0] : _ ? m(u, 0) : null), h = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (d = T(n, u, p = p || f, t, i, o, r, c, s), (v = u.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(v, u.__c || d, u)), null != d) {
        if (null == w && (w = d), null != u.__d) d = u.__d, u.__d = null;else if (o == p || d != c || null == d.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(d);else {
            for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) if (y == d) break n;

            n.insertBefore(d, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = d.nextSibling, "function" == typeof l.type && (l.__d = d);
      }
    }

    return h++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (h = o.length; h--;) null != o[h] && a(o[h]);

  for (h = _; h--;) null != k[h] && A(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) z(g[h], g[++h], g[++h]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) b(n[t], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? v(null, n, null, null) : null != n.__e || null != n.__c ? v(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, t, i) {
  var o;

  for (o in u) o in l || P(n, o, null, u[o], t);

  for (o in l) i && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || P(n, o, l[o], u[o], t);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function P(n, l, u, t, i) {
  var o, r, f, e, c;
  if (i ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof t && (o.cssText = "", t = null), t) for (r in t) u && r in u || C(o, r, "");
      if (u) for (f in u) t && u[f] === t[f] || C(o, f, u[f]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function T(l, u, t, i, o, r, f, e, c) {
  var a,
      h,
      v,
      p,
      m,
      w,
      g,
      k,
      x,
      C,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, x = (a = P.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? g = (h = u.__c = t.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new y(k, C), h.constructor = P, h.render = D), x && x.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(k, h.__s))), p = h.props, m = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && null == h.__e && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = t.__e, u.__k = t.__k, h.__h.length && f.push(h), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(p, m, w);
        });
      }
      h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = b(null != a && a.type == d && null == a.key ? a.props.children : a), null != h.getChildContext && (i = s(s({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, m)), _(l, u, t, i, o, r, f, e, c), h.base = u.__e, h.__h.length && f.push(h), g && (h.__E = h.__ = null), h.__e = null;
    } else u.__e = j(t.__e, u, t, i, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, t);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, t, i, o, r, c) {
  var s,
      a,
      h,
      v,
      p,
      d = u.props,
      y = l.props;
  if (i = "svg" === l.type || i, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(y);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), d !== y && (n.data = y);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (d = u.props || f).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, !c) {
      if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;
      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
    }

    x(n, y, d, i, c), l.__k = l.props.children, v || _(n, l, u, t, "foreignObject" !== l.type && i, o, r, f, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));
  }
  return n;
}

function z(l, u, t) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, t);
  }
}

function A(l, u, t) {
  var i, o, r;

  if (n.unmount && n.unmount(l), (i = l.ref) && z(i, null, u), t || "function" == typeof l.type || (t = null != (o = l.__e)), l.__e = l.__d = null, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    i.base = i.__P = null;
  }

  if (i = l.__k) for (r = 0; r < i.length; r++) i[r] && A(i[r], u, t);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, t) {
  var i, r, c;
  n.__ && n.__(l, u), r = (i = t === o) ? null : t && t.__k || u.__k, l = h(d, null, [l]), c = [], T(u, (i ? u : t || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : r ? null : e.slice.call(u.childNodes), c, t || f, i), $(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var t,
          i = this;
      return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && t.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        t.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError) u.setState(u.constructor.getDerivedStateFromError(n));else {
        if (null == u.componentDidCatch) continue;
        u.componentDidCatch(n);
      }
      return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, y.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (this.__e = !1, l && this.__h.push(l), g(this));
}, y.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, y.prototype.render = d, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, r = 0;
},{}],"libs/prism.js":[function(require,module,exports) {
var global = arguments[3];
/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-tomorrow&languages=clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (g) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0,
      C = {
    manual: g.Prism && g.Prism.manual,
    disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++a
        }), e.__id;
      },
      clone: function n(e, t) {
        var r,
            a,
            i = C.util.type(e);

        switch (t = t || {}, i) {
          case "Object":
            if (a = C.util.objId(e), t[a]) return t[a];

            for (var o in r = {}, t[a] = r, e) {
              e.hasOwnProperty(o) && (r[o] = n(e[o], t));
            }

            return r;

          case "Array":
            return a = C.util.objId(e), t[a] ? t[a] : (r = [], t[a] = r, e.forEach(function (e, a) {
              r[a] = n(e, t);
            }), r);

          default:
            return e;
        }
      }
    },
    languages: {
      extend: function extend(e, a) {
        var n = C.util.clone(C.languages[e]);

        for (var t in a) {
          n[t] = a[t];
        }

        return n;
      },
      insertBefore: function insertBefore(n, e, a, t) {
        var r = (t = t || C.languages)[n],
            i = {};

        for (var o in r) {
          if (r.hasOwnProperty(o)) {
            if (o == e) for (var l in a) {
              a.hasOwnProperty(l) && (i[l] = a[l]);
            }
            a.hasOwnProperty(o) || (i[o] = r[o]);
          }
        }

        var s = t[n];
        return t[n] = i, C.languages.DFS(C.languages, function (e, a) {
          a === s && e != n && (this[e] = i);
        }), i;
      },
      DFS: function e(a, n, t, r) {
        r = r || {};
        var i = C.util.objId;

        for (var o in a) {
          if (a.hasOwnProperty(o)) {
            n.call(a, o, a[o], t || o);
            var l = a[o],
                s = C.util.type(l);
            "Object" !== s || r[i(l)] ? "Array" !== s || r[i(l)] || (r[i(l)] = !0, e(l, n, o, r)) : (r[i(l)] = !0, e(l, n, null, r));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, a) {
      C.highlightAllUnder(document, e, a);
    },
    highlightAllUnder: function highlightAllUnder(e, a, n) {
      var t = {
        callback: n,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      C.hooks.run("before-highlightall", t);

      for (var r, i = e.querySelectorAll(t.selector), o = 0; r = i[o++];) {
        C.highlightElement(r, !0 === a, t.callback);
      }
    },
    highlightElement: function highlightElement(e, a, n) {
      for (var t, r = "none", i = e; i && !c.test(i.className);) {
        i = i.parentNode;
      }

      i && (r = (i.className.match(c) || [, "none"])[1].toLowerCase(), t = C.languages[r]), e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r));

      var o = {
        element: e,
        language: r,
        grammar: t,
        code: e.textContent
      },
          l = function l(e) {
        o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run("after-highlight", o), C.hooks.run("complete", o), n && n.call(o.element);
      };

      if (C.hooks.run("before-sanity-check", o), o.code) {
        if (C.hooks.run("before-highlight", o), o.grammar) {
          if (a && g.Worker) {
            var s = new Worker(C.filename);
            s.onmessage = function (e) {
              l(e.data);
            }, s.postMessage(JSON.stringify({
              language: o.language,
              code: o.code,
              immediateClose: !0
            }));
          } else l(C.highlight(o.code, o.grammar, o.language));
        } else l(C.util.encode(o.code));
      } else C.hooks.run("complete", o);
    },
    highlight: function highlight(e, a, n) {
      var t = {
        code: e,
        grammar: a,
        language: n
      };
      return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize", t), M.stringify(C.util.encode(t.tokens), t.language);
    },
    matchGrammar: function matchGrammar(e, a, n, t, r, i, o) {
      for (var l in n) {
        if (n.hasOwnProperty(l) && n[l]) {
          if (l == o) return;
          var s = n[l];
          s = "Array" === C.util.type(s) ? s : [s];

          for (var g = 0; g < s.length; ++g) {
            var c = s[g],
                u = c.inside,
                h = !!c.lookbehind,
                f = !!c.greedy,
                d = 0,
                m = c.alias;

            if (f && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }

            c = c.pattern || c;

            for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
              var k = a[y];
              if (a.length > e.length) return;

              if (!(k instanceof M)) {
                if (f && y != a.length - 1) {
                  if (c.lastIndex = v, !(x = c.exec(e))) break;

                  for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A) {
                    (P += a[A].length) <= b && (++y, v = P);
                  }

                  if (a[y] instanceof M) continue;
                  N = A - y, k = e.slice(v, P), x.index -= v;
                } else {
                  c.lastIndex = 0;
                  var x = c.exec(k),
                      N = 1;
                }

                if (x) {
                  h && (d = x[1] ? x[1].length : 0);
                  w = (b = x.index + d) + (x = x[0].slice(d)).length;
                  var j = k.slice(0, b),
                      S = k.slice(w),
                      E = [y, N];
                  j && (++y, v += j.length, E.push(j));

                  var _ = new M(l, u ? C.tokenize(x, u) : x, m, x, f);

                  if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), 1 != N && C.matchGrammar(e, a, n, y, v, !0, l), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, a) {
      var n = [e],
          t = a.rest;

      if (t) {
        for (var r in t) {
          a[r] = t[r];
        }

        delete a.rest;
      }

      return C.matchGrammar(e, n, a, 0, 0, !1), n;
    },
    hooks: {
      all: {},
      add: function add(e, a) {
        var n = C.hooks.all;
        n[e] = n[e] || [], n[e].push(a);
      },
      run: function run(e, a) {
        var n = C.hooks.all[e];
        if (n && n.length) for (var t, r = 0; t = n[r++];) {
          t(a);
        }
      }
    },
    Token: M
  };

  function M(e, a, n, t, r) {
    this.type = e, this.content = a, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!r;
  }

  if (g.Prism = C, M.stringify = function (e, a) {
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) return e.map(function (e) {
      return M.stringify(e, a);
    }).join("");
    var n = {
      type: e.type,
      content: M.stringify(e.content, a),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: a
    };

    if (e.alias) {
      var t = Array.isArray(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(n.classes, t);
    }

    C.hooks.run("wrap", n);
    var r = Object.keys(n.attributes).map(function (e) {
      return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + n.content + "</" + n.tag + ">";
  }, !g.document) return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener("message", function (e) {
    var a = JSON.parse(e.data),
        n = a.language,
        t = a.code,
        r = a.immediateClose;
    g.postMessage(C.highlight(t, C.languages[n], n)), r && g.close();
  }, !1)), C;
  var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
  return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C.highlightAll))), C;
}(_self);

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"libs/prism.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"theme/Theme.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "Theme-module_center_3HG75",
  "route": "Theme-module_route_2UT_g",
  "code": "Theme-module_code_2AW_j",
  "displayNone": "Theme-module_displayNone_3Nlyw",
  "section": "Theme-module_section_3QTPK"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.exec = exec;
exports.default = exports.Link = exports.Route = exports.Router = exports.subscribers = void 0;

var _preact = require("preact");

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
exports.subscribers = subscribers;
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.button == 0) {
    routeFromLink(e.currentTarget || e.target || this);
    return prevent(e);
  }
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

    if (!this.updating) {
      this.forceUpdate();
    }

    return didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_preact.Component);

exports.Router = Router;

var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};

exports.Link = Link;

var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};

exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
var _default = Router;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = v;
exports.useReducer = m;
exports.useEffect = p;
exports.useLayoutEffect = l;
exports.useRef = d;
exports.useImperativeHandle = s;
exports.useMemo = y;
exports.useCallback = T;
exports.useContext = w;
exports.useDebugValue = A;

var _preact = require("preact");

var t,
    u,
    r,
    i = [],
    o = _preact.options.__r,
    f = _preact.options.diffed,
    c = _preact.options.__c,
    e = _preact.options.unmount;

function a(t) {
  _preact.options.__h && _preact.options.__h(u);
  var r = u.__H || (u.__H = {
    t: [],
    u: []
  });
  return t >= r.t.length && r.t.push({}), r.t[t];
}

function v(n) {
  return m(x, n);
}

function m(n, r, i) {
  var o = a(t++);
  return o.__c || (o.__c = u, o.i = [i ? i(r) : x(void 0, r), function (t) {
    var u = n(o.i[0], t);
    o.i[0] !== u && (o.i[0] = u, o.__c.setState({}));
  }]), o.i;
}

function p(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__H.u.push(i));
}

function l(n, r) {
  var i = a(t++);
  q(i.o, r) && (i.i = n, i.o = r, u.__h.push(i));
}

function d(n) {
  return y(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function y(n, u) {
  var r = a(t++);
  return q(r.o, u) ? (r.o = u, r.v = n, r.i = n()) : r.i;
}

function T(n, t) {
  return y(function () {
    return n;
  }, t);
}

function w(n) {
  var r = u.context[n.__c];
  if (!r) return n.__;
  var i = a(t++);
  return null == i.i && (i.i = !0, r.sub(u)), r.props.value;
}

function A(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function F() {
  i.some(function (n) {
    n.__P && (n.__H.u.forEach(_), n.__H.u.forEach(g), n.__H.u = []);
  }), i = [];
}

function _(n) {
  n.m && n.m();
}

function g(n) {
  var t = n.i();
  "function" == typeof t && (n.m = t);
}

function q(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function x(n, t) {
  return "function" == typeof t ? t(n) : t;
}

_preact.options.__r = function (n) {
  o && o(n), t = 0, (u = n.__c).__H && (u.__H.u.forEach(_), u.__H.u.forEach(g), u.__H.u = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;

  if (u) {
    var o = u.__H;
    o && o.u.length && (1 !== i.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
      var t,
          u = function () {
        clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      "undefined" != typeof window && (t = requestAnimationFrame(u));
    })(F));
  }
}, _preact.options.__c = function (n, t) {
  t.some(function (n) {
    n.__h.forEach(_), n.__h = n.__h.filter(function (n) {
      return !n.i || g(n);
    });
  }), c && c(n, t);
}, _preact.options.unmount = function (n) {
  e && e(n);
  var t = n.__c;

  if (t) {
    var u = t.__H;
    u && u.t.forEach(function (n) {
      return n.m && n.m();
    });
  }
};
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"components/Header/Header.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "Header-module_center_hTCEO",
  "route": "Header-module_route_2ZljU",
  "code": "Header-module_code_1-4T_",
  "displayNone": "Header-module_displayNone_35Pgv",
  "section": "Header-module_section_3re_V",
  "root": "Header-module_root_1mpSA",
  "mobileMenu": "Header-module_mobileMenu_i6Ud0",
  "isScrolled": "Header-module_isScrolled_3o02x"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Header/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _HeaderModule = require("./Header.module.scss");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var links = [(0, _preact.h)("a", {
  href: "#why"
}, "Why"), (0, _preact.h)("a", {
  href: "#how"
}, "How"), (0, _preact.h)("a", {
  href: "#apps"
}, "Apps"), (0, _preact.h)("a", {
  href: "#about"
}, "About"), (0, _preact.h)("a", {
  href: "#contact"
}, "Contact")];

function Header() {
  var _useState = (0, _hooks.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      setScrolled = _useState2[1];

  var _useState3 = (0, _hooks.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mobileOpen = _useState4[0],
      setMobileOpen = _useState4[1];

  (0, _hooks.useEffect)(function () {
    //not home
    if (window.location.pathname.length > 1) {
      setScrolled(true);
      return;
    }

    var timeout;

    window.onscroll = function () {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        return setScrolled(window.scrollY !== 0);
      }, scrolled ? 100 : 0);
    };
  }, []);
  return (0, _preact.h)("div", {
    className: [_HeaderModule.root, scrolled ? _HeaderModule.isScrolled : ''].join(' ')
  }, (0, _preact.h)("header", null, (0, _preact.h)("h3", null, "Hashcache"), (0, _preact.h)("div", null, links), (0, _preact.h)("i", {
    onClick: function onClick() {
      return setMobileOpen(!mobileOpen);
    },
    className: "fas fa-bars fa-lg"
  })), (0, _preact.h)("div", {
    onClick: function onClick() {
      return setMobileOpen(!mobileOpen);
    },
    className: mobileOpen ? _HeaderModule.mobileMenu : _HeaderModule.displayNone
  }, (0, _preact.h)("i", {
    className: "fas fa-times"
  }), links));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./Header.module.scss":"components/Header/Header.module.scss"}],"components/Footer/Footer.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "Footer-module_center_6n7jg",
  "route": "Footer-module_route_1GYkb",
  "code": "Footer-module_code_3Ukem",
  "displayNone": "Footer-module_displayNone_3noYa",
  "section": "Footer-module_section_23iAs",
  "root": "Footer-module_root_i1jWa"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Footer/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _preact = require("preact");

var _FooterModule = require("./Footer.module.scss");

function Footer() {
  return (0, _preact.h)("div", {
    className: _FooterModule.root
  }, (0, _preact.h)("p", null, "\"Privacy is an inherent human right, and a requirement for maintaining the human condition with dignity and respect. It is about choice, and having the power to control how you present yourself to the world.\""), (0, _preact.h)("p", null, "\u2015 Bruce Schneier, Data and Goliath"), (0, _preact.h)("p", null, "Hashcache Copyright 2020 \xA9"));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","./Footer.module.scss":"components/Footer/Footer.module.scss"}],"components/Hero/Hero.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "Hero-module_center_3Qj-A",
  "route": "Hero-module_route_2S7Il",
  "code": "Hero-module_code_2yYaY",
  "displayNone": "Hero-module_displayNone_1J0Kg",
  "section": "Hero-module_section_RXj0e",
  "hero": "Hero-module_hero_qAaQF"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Hero/Hero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hero;

var _preact = require("preact");

var _HeroModule = require("./Hero.module.scss");

function Hero() {
  return (0, _preact.h)("div", {
    className: _HeroModule.hero
  }, (0, _preact.h)("section", {
    className: [_HeroModule.section, _HeroModule.background].join(' ')
  }, (0, _preact.h)("h1", null, "Build Secure Apps"), (0, _preact.h)("p", null, "Security and compliance have made storing your customers' data a liability."), (0, _preact.h)("p", null, "Secure sensitive customer data before uploading to the cloud.")), (0, _preact.h)("section", {
    className: _HeroModule.section
  }, (0, _preact.h)("div", null, (0, _preact.h)("pre", null, (0, _preact.h)("code", {
    className: "language-javascript"
  }, "const data = { msg: \"hello world!\" }\nconst tags = [\"example\", \"message\"]\n// share with users \"Alice\" and \"Bob\"\nconst accounts = [\"Alice\", \"Bob\"]\nawait hashcache.store({ data, tags, accounts })\n...\nconst results = await hashcache.getData(tags)\nconsole.log(results[0].data)\n// { msg: \"hello world!\" }\n")))));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","./Hero.module.scss":"components/Hero/Hero.module.scss"}],"img/how.png":[function(require,module,exports) {
module.exports = "/how.8a8be218.png";
},{}],"img/apps.png":[function(require,module,exports) {
module.exports = "/apps.7fd5f4e0.png";
},{}],"routes/Home/Home.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "Home-module_center_qocHP",
  "route": "Home-module_route_2-AoK",
  "code": "Home-module_code_1qzth",
  "displayNone": "Home-module_displayNone_1ooez",
  "section": "Home-module_section_3a7P8",
  "root": "Home-module_root_3-X6G",
  "singleCenter": "Home-module_singleCenter_16h3W",
  "fullWidth": "Home-module_fullWidth_iVENQ"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"routes/Home/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _Hero = _interopRequireDefault(require("./../../components/Hero/Hero"));

var _how = _interopRequireDefault(require("./../../img/how.png"));

var _apps = _interopRequireDefault(require("./../../img/apps.png"));

var _HomeModule = require("./Home.module.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  (0, _hooks.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  return (0, _preact.h)("div", {
    className: [_HomeModule.route, _HomeModule.root].join(' ')
  }, (0, _preact.h)(_Hero.default, null), (0, _preact.h)("section", {
    className: _HomeModule.singleCenter
  }, (0, _preact.h)("a", {
    name: "why"
  }), (0, _preact.h)("div", {
    style: {
      padding: 16,
      border: '2px solid #ddd'
    }
  }, (0, _preact.h)("h1", null, "Why Hashcache?"), (0, _preact.h)("p", null, "You like designing, developing and delivering amazing products."), (0, _preact.h)("p", null, "You ", (0, _preact.h)("em", null, "don't"), " like worrying about security, privacy or compliance."), (0, _preact.h)("p", null, "Hashcache will:"), (0, _preact.h)("ul", null, (0, _preact.h)("li", null, "Reduce risk of data breach"), (0, _preact.h)("li", null, "Reduce compliance burden"), (0, _preact.h)("li", null, "Eliminate security, development and legal costs")))), (0, _preact.h)("section", null, (0, _preact.h)("h1", null, "Problem"), (0, _preact.h)("ul", null, (0, _preact.h)("li", null, "You store customer data in the cloud so it can be accessed from any device"), (0, _preact.h)("li", null, "Customers are increasingly concerned about their data"), (0, _preact.h)("li", null, "Successful breaches can encrypt or extract ", (0, _preact.h)("em", null, "all"), " data"))), (0, _preact.h)("section", null, (0, _preact.h)("h1", null, "Solution"), (0, _preact.h)("ul", null, (0, _preact.h)("li", null, "Customers secure sensitive data before uploading to the cloud"), (0, _preact.h)("li", null, "A breach of your database does not reveal any sensitive customer data"), (0, _preact.h)("li", null, "You reduce the amount of data you need to secure and make compliant"))), (0, _preact.h)("section", {
    className: _HomeModule.singleCenter
  }, (0, _preact.h)("a", {
    name: "how"
  }), (0, _preact.h)("h1", null, "How it Works"), (0, _preact.h)("p", null, "Alice (A) and Bob (B) want to use your messaging feature to discuss some confidential business."), (0, _preact.h)("img", {
    src: _how.default,
    alt: "how it works"
  })), (0, _preact.h)("section", {
    className: _HomeModule.fullWidth
  }, (0, _preact.h)("section", {
    className: _HomeModule.fullWidth
  }, (0, _preact.h)("a", {
    name: "apps"
  }), (0, _preact.h)("h1", null, "Applications")), (0, _preact.h)("div", {
    className: _HomeModule.center
  }, (0, _preact.h)("h3", null, "Messaging"), (0, _preact.h)("i", {
    class: "far fa-comments fa-4x"
  })), (0, _preact.h)("div", {
    className: _HomeModule.center
  }, (0, _preact.h)("h3", null, "Fintech"), (0, _preact.h)("i", {
    className: "fas fa-file-invoice-dollar fa-4x"
  })), (0, _preact.h)("div", {
    className: _HomeModule.center
  }, (0, _preact.h)("h3", null, "Healthcare"), (0, _preact.h)("i", {
    className: "fas fa-notes-medical fa-4x"
  }))), (0, _preact.h)("section", {
    className: _HomeModule.singleCenter
  }, (0, _preact.h)("h1", null, "Example: Spreadsheets"), (0, _preact.h)("ol", null, (0, _preact.h)("li", null, "Customers want their sensitive data kept secure and private"), (0, _preact.h)("li", null, "You want app usage metrics such as: files created, daily active, AB feature tests, ...")), (0, _preact.h)("img", {
    src: _apps.default,
    alt: "applications"
  }), (0, _preact.h)("p", null, (0, _preact.h)("strong", null, "Solution")), (0, _preact.h)("p", null, "Use Hashcache to secure ", (0, _preact.h)("em", null, "only"), " the cells of spreadsheets containing sensitive raw data before uploading to the cloud."), (0, _preact.h)("p", null, "Your app can still leverage metadata such as: rows, columns and filenames to provide analytics and support."), (0, _preact.h)("p", null, (0, _preact.h)("strong", null, "Key Points")), (0, _preact.h)("ul", null, (0, _preact.h)("li", null, "The customer is now in control of securing their sensitive data"), (0, _preact.h)("li", null, "You retain quality app usage metrics and Analytics"), (0, _preact.h)("li", null, "With ", (0, _preact.h)("em", null, "less"), " sensitive data stored in your database, you can save on security and compliance costs")), (0, _preact.h)("p", null, (0, _preact.h)("strong", null, "A win win for you and your customers"))), (0, _preact.h)("section", null, (0, _preact.h)("a", {
    name: "about"
  }), (0, _preact.h)("h1", null, "About"), (0, _preact.h)("p", null, "Hashcache is developed in Vancouver, B.C. by ", (0, _preact.h)("a", {
    href: "https://twitter.com/mattdlockyer"
  }, "Matt Lockyer"), ".")), (0, _preact.h)("section", null, (0, _preact.h)("a", {
    name: "contact"
  }), (0, _preact.h)("h1", null, "Contact"), (0, _preact.h)("p", null, (0, _preact.h)("a", {
    href: "mailto:hashcacheio@gmail.com"
  }, "hashcacheio@gmail.com"))));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./../../components/Hero/Hero":"components/Hero/Hero.js","./../../img/how.png":"img/how.png","./../../img/apps.png":"img/apps.png","./Home.module.scss":"routes/Home/Home.module.scss"}],"routes/How/encrypt.svg":[function(require,module,exports) {
module.exports = "/encrypt.2a567e1c.svg";
},{}],"routes/How/decrypt.svg":[function(require,module,exports) {
module.exports = "/decrypt.da41db9f.svg";
},{}],"routes/How/How.module.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "center": "How-module_center_2nkCR",
  "route": "How-module_route_2VHuP",
  "code": "How-module_code_2LpKB",
  "displayNone": "How-module_displayNone_pKrsG",
  "section": "How-module_section_36-Qx",
  "root": "How-module_root_2YhnH",
  "col2": "How-module_col2_34Kb2",
  "text": "How-module_text_2Tbor"
};
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"routes/How/How.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = How;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _encrypt = _interopRequireDefault(require("./encrypt.svg"));

var _decrypt = _interopRequireDefault(require("./decrypt.svg"));

var _HowModule = require("./How.module.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rc = function rc(a) {
  return (0, _preact.h)("span", {
    className: _HowModule.code
  }, a);
};

function How() {
  (0, _hooks.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  return (0, _preact.h)("div", {
    className: [_HowModule.route, _HowModule.root].join(' ')
  }, (0, _preact.h)("section", null, (0, _preact.h)("h1", null, "Why Hashcache?"), (0, _preact.h)("p", null, "Our mission is making encrytion simple and easy for any developer. We believe the first step to privacy preserving applications puts the user in control of their data.")), (0, _preact.h)("section", null, (0, _preact.h)("h3", null, "How it Works - Encryption"), (0, _preact.h)("div", {
    className: _HowModule.col2
  }, (0, _preact.h)("div", null, (0, _preact.h)("img", {
    src: _encrypt.default
  })), (0, _preact.h)("div", {
    className: _HowModule.text
  }, (0, _preact.h)("ol", null, (0, _preact.h)("li", null, "Alice is using MyApp"), (0, _preact.h)("li", null, "Alice opens/resumes ", rc('hc.session')), (0, _preact.h)("li", null, "Alice creates ", rc('data'), " and an ", rc('hc.key'), " "), (0, _preact.h)("li", null, "MyApp calls ", rc('hc.encrypt')), (0, _preact.h)("li", null, rc('data'), " is now ", rc('encrypted'))), (0, _preact.h)("p", null, "An ", rc('hc.session'), " is created when a unique user of MyApp provides a password. We call this  ", (0, _preact.h)("b", null, "\"Data 2 Factor Authentication\" (D2FA)"), "."), (0, _preact.h)("p", null, "The ", rc('hc.session'), " has a unique ", rc('session key'), " used to encrypt all key material."), (0, _preact.h)("p", null, "Each piece of data is encrypted with a unique one time use \"data key\".")))), (0, _preact.h)("section", null, (0, _preact.h)("h3", null, "How it Works - Decryption"), (0, _preact.h)("div", {
    className: _HowModule.col2
  }, (0, _preact.h)("div", null, (0, _preact.h)("img", {
    src: _decrypt.default
  })), (0, _preact.h)("div", {
    className: _HowModule.text
  }, (0, _preact.h)("p", null, "MyApp has fetched Alice's encrypted data and the Hashcache session will provide a corresponding data key."), (0, _preact.h)("ol", null, (0, _preact.h)("li", null, "MyApp provides ", rc('encrypted'), " data"), (0, _preact.h)("li", null, "Alice provides the ", rc('hc.key')), (0, _preact.h)("li", null, "MyApp calls ", rc('hc.decrypt')), (0, _preact.h)("li", null, rc('encrypted'), " is now decrypted ", rc('data'))), (0, _preact.h)("p", null, "The ", rc('hc.session'), " has a unique ", rc('session key'), " used to encrypt and decrypt all subsequent keys and data.")))), (0, _preact.h)("section", null, (0, _preact.h)("h1", null, "Build Apps Differently"), (0, _preact.h)("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./encrypt.svg":"routes/How/encrypt.svg","./decrypt.svg":"routes/How/decrypt.svg","./How.module.scss":"routes/How/How.module.scss"}],"App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _preact = require("preact");

var _preactRouter = _interopRequireDefault(require("preact-router"));

var _Header = _interopRequireDefault(require("./components/Header/Header"));

var _Footer = _interopRequireDefault(require("./components/Footer/Footer"));

var _Home = _interopRequireDefault(require("./routes/Home/Home"));

var _How = _interopRequireDefault(require("./routes/How/How"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return [(0, _preact.h)(_Header.default, null), (0, _preact.h)(_preactRouter.default, null, (0, _preact.h)(_Home.default, {
    path: "/"
  }), (0, _preact.h)(_How.default, {
    path: "/how"
  })), (0, _preact.h)(_Footer.default, null)];
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","./components/Header/Header":"components/Header/Header.js","./components/Footer/Footer":"components/Footer/Footer.js","./routes/Home/Home":"routes/Home/Home.js","./routes/How/How":"routes/How/How.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _prism = _interopRequireDefault(require("./libs/prism"));

require("./libs/prism.scss");

require("./theme/Theme.module.scss");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inject our app into the DOM
(0, _preact.render)((0, _preact.h)(_App.default, null), document.body);
},{"preact":"../node_modules/preact/dist/preact.module.js","./libs/prism":"libs/prism.js","./libs/prism.scss":"libs/prism.scss","./theme/Theme.module.scss":"theme/Theme.module.scss","./App":"App.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41643" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map