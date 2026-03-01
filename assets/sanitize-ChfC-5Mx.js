const w = new Set([
    "p",
    "br",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "strong",
    "em",
    "b",
    "i",
    "u",
    "s",
    "strike",
    "ul",
    "ol",
    "li",
    "a",
    "img",
    "blockquote",
    "pre",
    "code",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "hr",
    "span",
    "div",
    "figure",
    "figcaption",
    "audio",
    "source",
    "iframe",
  ]),
  f = {
    a: ["href", "target", "rel", "title"],
    img: ["src", "alt", "title", "width", "height", "loading"],
    audio: ["controls", "preload", "class"],
    source: ["src", "type"],
    iframe: [
      "src",
      "width",
      "height",
      "frameborder",
      "allowfullscreen",
      "allow",
      "loading",
      "title",
    ],
    "*": ["class", "id"],
  },
  A = /^(https:\/\/|\/|#|mailto:)/i,
  S = ["youtube.com", "youtube-nocookie.com", "vimeo.com"],
  m = new Set(["br", "hr", "img", "source"]),
  h = /([^\s=<>"'`]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
function v(t) {
  if (!t || typeof t != "string") return "";
  if (!t.includes("<")) return b(t);
  if (typeof DOMParser == "undefined") return y(t);
  try {
    const e = new DOMParser().parseFromString(t, "text/html");
    return N(e.body), e.body.innerHTML;
  } catch (r) {
    return console.error("HTML sanitization error:", r), b(t);
  }
}
function N(t) {
  const r = [...t.childNodes];
  for (const e of r)
    if (e.nodeType === Node.ELEMENT_NODE) {
      const a = e.tagName.toLowerCase();
      if (!w.has(a)) {
        const o = e.textContent;
        e.replaceWith(document.createTextNode(o));
        continue;
      }
      const i = [...e.attributes];
      for (const o of i) {
        const n = o.name.toLowerCase(),
          c = f[a] || [],
          l = f["*"] || [];
        if (!c.includes(n) && !l.includes(n)) {
          e.removeAttribute(o.name);
          continue;
        }
        if ((n === "href" || n === "src") && !A.test(o.value)) {
          e.removeAttribute(o.name);
          continue;
        }
        o.value.toLowerCase().includes("javascript:") &&
          e.removeAttribute(o.name);
      }
      if (
        (a === "a" &&
          e.getAttribute("target") === "_blank" &&
          e.setAttribute("rel", "noopener noreferrer"),
        a === "iframe")
      ) {
        const o = e.getAttribute("src") || "";
        try {
          const n = new URL(o);
          if (!S.some((l) => n.hostname.endsWith(l))) {
            e.remove();
            continue;
          }
        } catch (n) {
          e.remove();
          continue;
        }
      }
      N(e);
    }
}
function b(t) {
  return !t || typeof t != "string"
    ? ""
    : t
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}
function y(t) {
  const r = t
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  let e = "",
    a = 0;
  const i = new Map();
  for (const o of k(r)) {
    (e += r.slice(a, o.start)), (a = o.end);
    const n = E(o.raw);
    if (!n || !w.has(n.tagName)) continue;
    if (n.isClosing) {
      const u = i.get(n.tagName) || 0;
      if (u > 0) {
        i.set(n.tagName, u - 1);
        continue;
      }
      m.has(n.tagName) || (e += `</${n.tagName}>`);
      continue;
    }
    const c = L(n.tagName, n.rawAttrs);
    if (c === null) {
      n.isSelfClosing || i.set(n.tagName, (i.get(n.tagName) || 0) + 1);
      continue;
    }
    const l = m.has(n.tagName) || n.isSelfClosing;
    e += `<${n.tagName}${c}${l ? " />" : ">"}`;
  }
  return (e += r.slice(a)), e.replace(/&nbsp;/gi, " ").trim();
}
function L(t, r) {
  var l, u, p;
  const e = f[t] || [],
    a = f["*"] || [],
    i = new Map(),
    o = [];
  h.lastIndex = 0;
  let n;
  for (; (n = h.exec(r)); ) {
    const s = String(n[1] || "").toLowerCase();
    if (!s || s.startsWith("on") || (!e.includes(s) && !a.includes(s)))
      continue;
    const g = n[2] !== void 0 || n[3] !== void 0 || n[4] !== void 0,
      d = (
        (p = (u = (l = n[2]) != null ? l : n[3]) != null ? u : n[4]) != null
          ? p
          : ""
      ).trim();
    if (
      !(
        (s === "href" || s === "src") &&
        (!A.test(d) || d.toLowerCase().includes("javascript:"))
      )
    ) {
      if (!g) {
        o.push(s);
        continue;
      }
      i.set(s, d);
    }
  }
  if (t === "iframe") {
    const s = i.get("src");
    if (!s || !C(s)) return null;
  }
  if (t === "a" && i.get("target") === "_blank") {
    const s = new Set(
      String(i.get("rel") || "")
        .split(/\s+/)
        .filter(Boolean)
    );
    s.add("noopener"),
      s.add("noreferrer"),
      i.set("rel", Array.from(s).join(" "));
  }
  const c = [];
  for (const [s, g] of i.entries()) c.push(`${s}="${T(g)}"`);
  for (const s of o) i.has(s) || c.push(s);
  return c.length ? ` ${c.join(" ")}` : "";
}
function C(t) {
  try {
    const r = new URL(t, "https://ipogenie.ai");
    return r.protocol !== "https:" ? !1 : S.some((e) => r.hostname.endsWith(e));
  } catch (r) {
    return !1;
  }
}
function T(t) {
  return String(t)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function* k(t) {
  let r = 0;
  for (; r < t.length; ) {
    const e = t.indexOf("<", r);
    if (e === -1) break;
    let a = null,
      i = e + 1;
    for (; i < t.length; i += 1) {
      const o = t[i];
      if (a) {
        o === a && (a = null);
        continue;
      }
      if (o === '"' || o === "'") {
        a = o;
        continue;
      }
      if (o === ">") break;
    }
    if (i >= t.length) break;
    yield { raw: t.slice(e, i + 1), start: e, end: i + 1 }, (r = i + 1);
  }
}
function E(t) {
  if (!t || t[0] !== "<" || t[t.length - 1] !== ">") return null;
  let r = t.slice(1, -1).trim();
  if (!r || r.startsWith("!") || r.startsWith("?")) return null;
  const e = r.startsWith("/");
  e && (r = r.slice(1).trim());
  let a = !1;
  !e && /\/\s*$/.test(r) && ((a = !0), (r = r.replace(/\/\s*$/, "").trim()));
  const i = /^([a-zA-Z0-9-]+)/.exec(r);
  if (!i) return null;
  const o = i[1].toLowerCase(),
    n = e ? "" : r.slice(i[0].length);
  return { tagName: o, rawAttrs: n, isClosing: e, isSelfClosing: a };
}
export { v as s };
