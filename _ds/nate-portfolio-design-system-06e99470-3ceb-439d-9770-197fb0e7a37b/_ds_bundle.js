/* @ds-bundle: {"format":4,"namespace":"NatePortfolioDesignSystem_06e994","components":[{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"MetaTag","sourcePath":"components/content/MetaTag.jsx"},{"name":"SectionEyebrow","sourcePath":"components/content/SectionEyebrow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"},{"name":"PhotoCard","sourcePath":"components/surfaces/PhotoCard.jsx"}],"sourceHashes":{"components/content/Badge.jsx":"31c5f85f511e","components/content/MetaTag.jsx":"82d1829f6484","components/content/SectionEyebrow.jsx":"017d6bcbad4b","components/navigation/Footer.jsx":"3d1c1896a742","components/navigation/Nav.jsx":"217dd17f38a1","components/surfaces/GlassCard.jsx":"86c96ac16ab3","components/surfaces/PhotoCard.jsx":"a3608c59facf","ui_kits/portfolio/About.jsx":"6cbc14ee9e75","ui_kits/portfolio/Home.jsx":"59297240429a","ui_kits/portfolio/ProjectCase.jsx":"3548acd6a918"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NatePortfolioDesignSystem_06e994 = window.NatePortfolioDesignSystem_06e994 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
const css = `
.nate-badge{display:inline-flex;align-items:center;gap:var(--space-2);padding:5px 11px;border-radius:var(--radius-pill);background:var(--bg-ok);border:1px solid var(--badge-border);color:var(--tx-ok);font-size:var(--fs-label);line-height:var(--lh-label);font-weight:var(--fw-label);letter-spacing:.02em;white-space:nowrap}
.nate-badge--neutral{background:transparent;border-color:var(--border-strong);color:var(--muted)}
.nate-badge__glyph{font-size:11px;line-height:1}
`;
function Badge({
  children,
  arrow = 'up',
  tone = 'success'
}) {
  const glyph = arrow === 'down' ? '↓' : arrow === 'none' ? null : '↑';
  return /*#__PURE__*/React.createElement("span", {
    className: 'nate-badge' + (tone === 'neutral' ? ' nate-badge--neutral' : '')
  }, /*#__PURE__*/React.createElement("style", null, css), glyph ? /*#__PURE__*/React.createElement("span", {
    className: "nate-badge__glyph",
    "aria-hidden": "true"
  }, glyph) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/MetaTag.jsx
try { (() => {
const css = `
.nate-meta{display:flex;align-items:center;gap:var(--space-3)}
.nate-meta__icon{flex:none;display:grid;place-items:center;width:38px;height:38px;border-radius:var(--radius-pill);background:var(--accent-tint);color:var(--yellow-deep)}
.nate-meta__label{display:block;font-size:var(--fs-label);line-height:var(--lh-label);font-weight:var(--fw-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--muted)}
.nate-meta__value{display:block;font-size:var(--fs-body-sm);line-height:1.35;font-weight:500;color:var(--ink)}
`;
function MetaTag({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nate-meta"
  }, /*#__PURE__*/React.createElement("style", null, css), icon ? /*#__PURE__*/React.createElement("span", {
    className: "nate-meta__icon",
    "aria-hidden": "true"
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "nate-meta__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "nate-meta__value"
  }, value)));
}
Object.assign(__ds_scope, { MetaTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetaTag.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionEyebrow.jsx
try { (() => {
const css = `
.nate-eyebrow{display:flex;align-items:center;gap:var(--space-3);font-size:var(--fs-label);line-height:var(--lh-label);font-weight:var(--fw-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--yellow-deep)}
.nate-eyebrow__rule{width:28px;height:2px;background:var(--yellow-deep);flex:none}
.nate-eyebrow__label{color:var(--muted)}
`;
function SectionEyebrow({
  number,
  children
}) {
  const n = number === undefined ? null : String(number).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    className: "nate-eyebrow"
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("span", {
    className: "nate-eyebrow__rule",
    "aria-hidden": "true"
  }), n ? /*#__PURE__*/React.createElement("span", null, n) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "nate-eyebrow__label"
  }, children) : null);
}
Object.assign(__ds_scope, { SectionEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const css = `
.nate-foot{background:var(--bg-foot);color:#f5f2ec;padding:var(--space-7) 0}
.nate-foot__in{max-width:var(--content-max-width);margin:0 auto;padding:0 var(--space-5)}
.nate-foot__cta{display:inline-block;font-size:clamp(28px,4vw,56px);font-weight:700;line-height:1.05;color:var(--yellow);text-decoration:none;letter-spacing:-.01em}
.nate-foot__cta:hover{color:#f5f2ec;text-decoration:none}
.nate-foot__tag{margin:var(--space-3) 0 0;font-size:var(--fs-body-sm);color:#8f887c}
.nate-foot__bar{margin-top:var(--space-7);padding-top:var(--space-4);border-top:1px solid #2a2621;display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:var(--space-4)}
.nate-foot__social{display:flex;gap:var(--space-5);list-style:none;margin:0;padding:0}
.nate-foot__social a{font-size:var(--fs-body-sm);font-weight:500;color:#c8c3b8;text-decoration:none}
.nate-foot__social a:hover{color:var(--yellow);text-decoration:none}
.nate-foot__meta{font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:#8f887c}
`;
function Footer({
  email = 'nathanmasol@gmail.com',
  tagline = 'Built on data, made for the human eye.',
  links = [{
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nathanmanuelux/'
  }, {
    label: 'Behance',
    href: 'https://www.behance.net/nathanmanuel'
  }, {
    label: 'Resume',
    href: 'cv.pdf'
  }],
  location = 'Cali, Colombia · GMT-5',
  year = new Date().getFullYear()
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "nate-foot"
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    className: "nate-foot__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nate-foot__cta",
    href: 'mailto:' + email
  }, email), /*#__PURE__*/React.createElement("p", {
    className: "nate-foot__tag"
  }, tagline), /*#__PURE__*/React.createElement("div", {
    className: "nate-foot__bar"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nate-foot__social"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label)))), /*#__PURE__*/React.createElement("span", {
    className: "nate-foot__meta"
  }, "\xA9 ", year, " Nathan Manuel \xB7 ", location))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
const {
  useState
} = React;
const css = `
.nate-nav{position:sticky;top:0;z-index:50;background:var(--bg);border-bottom:1px solid var(--line)}
.nate-nav__in{max-width:var(--content-max-width);margin:0 auto;padding:18px var(--space-5);display:flex;align-items:center;justify-content:space-between;gap:var(--space-5)}
.nate-nav__mark{font-family:var(--font-signature);font-size:var(--fs-logo);font-weight:var(--fw-logo);line-height:var(--lh-logo);color:var(--ink);text-decoration:none;position:relative;isolation:isolate}
.nate-nav__mark span{position:relative;z-index:1}
.nate-nav__dot{position:absolute;z-index:0;top:-7px;right:-9px;width:20px;height:20px;border-radius:var(--radius-pill);background:var(--yellow)}
.nate-nav__right{display:flex;align-items:center;gap:var(--space-5)}
.nate-nav__links{display:flex;align-items:center;gap:var(--space-5);list-style:none;margin:0;padding:0}
.nate-nav__link{font-size:var(--fs-body-sm);font-weight:500;color:var(--ink-soft);text-decoration:none;padding-bottom:2px;border-bottom:2px solid transparent}
.nate-nav__link:hover{color:var(--ink);text-decoration:none}
.nate-nav__link--active{color:var(--ink);border-bottom-color:var(--yellow)}
.nate-nav__icon{display:grid;place-items:center;width:38px;height:38px;border-radius:var(--radius-pill);border:1px solid transparent;background:none;color:var(--ink);cursor:pointer}
.nate-nav__icon:hover{border-color:var(--border-strong)}
.nate-nav__burger{display:none}
.nate-nav__menu{position:absolute;right:var(--space-5);top:64px;min-width:200px;background:var(--menu-bg);border:1px solid var(--menu-border);border-radius:var(--card-radius);box-shadow:var(--shadow-elevation);padding:var(--space-3);display:none;flex-direction:column;gap:2px}
.nate-nav__menu[data-open="true"]{display:flex}
.nate-nav__menu a{padding:10px var(--space-3);border-radius:var(--radius);font-size:var(--fs-body-sm);font-weight:500;color:var(--ink);text-decoration:none}
.nate-nav__menu a:hover{background:var(--line-soft);text-decoration:none}
@media (max-width:860px){.nate-nav__links{display:none}.nate-nav__burger{display:grid}}
`;
const glyph = {
  strokeWidth: 1.8,
  stroke: 'currentColor',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: 18,
  height: 18,
  viewBox: '0 0 24 24'
};
function Sun() {
  return /*#__PURE__*/React.createElement("svg", glyph, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
  }));
}
function Moon() {
  return /*#__PURE__*/React.createElement("svg", glyph, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  }));
}
function Burger({
  open
}) {
  return open ? /*#__PURE__*/React.createElement("svg", glyph, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })) : /*#__PURE__*/React.createElement("svg", glyph, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }));
}
function Nav({
  links = [{
    label: 'Work',
    href: '#work'
  }, {
    label: 'About',
    href: 'about.html'
  }, {
    label: "Let's talk",
    href: 'mailto:nathanmasol@gmail.com'
  }, {
    label: 'Resume',
    href: 'cv.pdf'
  }],
  active,
  theme = 'light',
  onToggleTheme,
  markHref = 'index.html'
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "nate-nav"
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("div", {
    className: "nate-nav__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nate-nav__mark",
    href: markHref
  }, /*#__PURE__*/React.createElement("i", {
    className: "nate-nav__dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "Nate")), /*#__PURE__*/React.createElement("nav", {
    className: "nate-nav__right"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nate-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    className: 'nate-nav__link' + (l.label === active ? ' nate-nav__link--active' : ''),
    href: l.href,
    "aria-current": l.label === active ? 'page' : undefined
  }, l.label)))), /*#__PURE__*/React.createElement("button", {
    className: "nate-nav__icon",
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    type: "button"
  }, theme === 'dark' ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null)), /*#__PURE__*/React.createElement("button", {
    className: "nate-nav__icon nate-nav__burger",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    type: "button"
  }, /*#__PURE__*/React.createElement(Burger, {
    open: open
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nate-nav__menu",
    "data-open": open
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: () => setOpen(false)
  }, l.label)))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
const css = `
.nate-card{background:var(--card);border:1px solid var(--border-strong);border-radius:var(--card-radius);box-shadow:var(--shadow-elevation);padding:var(--space-5);display:flex;flex-direction:column;gap:var(--space-3);backdrop-filter:none}
.nate-card__badge{display:grid;place-items:center;width:38px;height:38px;border-radius:var(--radius-pill);background:var(--accent-tint);color:var(--yellow-deep);margin-bottom:var(--space-1)}
.nate-card__eyebrow{font-size:var(--fs-label);line-height:var(--lh-label);font-weight:var(--fw-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--muted)}
.nate-card__stat{font-size:var(--fs-h1);line-height:var(--lh-h1);font-weight:var(--fw-h1);color:var(--ink);letter-spacing:-.02em}
.nate-card__title{font-size:var(--fs-h3);line-height:var(--lh-h3);font-weight:var(--fw-h3);color:var(--ink)}
.nate-card__body{font-size:var(--fs-body-sm);line-height:var(--lh-body-sm);color:var(--ink-soft)}
.nate-card__foot{margin-top:auto;padding-top:var(--space-3)}
`;
function GlassCard({
  icon,
  eyebrow,
  stat,
  title,
  children,
  footer,
  as: Tag = 'div',
  style
}) {
  return /*#__PURE__*/React.createElement(Tag, {
    className: "nate-card",
    style: style
  }, /*#__PURE__*/React.createElement("style", null, css), icon ? /*#__PURE__*/React.createElement("span", {
    className: "nate-card__badge",
    "aria-hidden": "true"
  }, icon) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "nate-card__eyebrow"
  }, eyebrow) : null, stat ? /*#__PURE__*/React.createElement("span", {
    className: "nate-card__stat"
  }, stat) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "nate-card__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "nate-card__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "nate-card__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PhotoCard.jsx
try { (() => {
const css = `
.nate-photo{position:relative;display:block;overflow:hidden;border-radius:var(--card-radius);min-height:340px;color:#f5f2ec;text-decoration:none;isolation:isolate;transition:box-shadow .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1)}
.nate-photo:hover{box-shadow:var(--shadow-hover);transform:translateY(-2px);text-decoration:none;color:#f5f2ec}
.nate-photo__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.nate-photo__tint{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(12,10,9,.88) 0%,rgba(12,10,9,.72) 42%,rgba(12,10,9,.12) 78%,rgba(12,10,9,0) 100%)}
.nate-photo__panel{position:relative;z-index:2;width:min(58%,560px);height:100%;padding:var(--space-5);display:flex;flex-direction:column;justify-content:flex-end;gap:var(--space-3);-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3);-webkit-mask-image:linear-gradient(90deg,#000 0%,#000 72%,transparent 100%);mask-image:linear-gradient(90deg,#000 0%,#000 72%,transparent 100%)}
.nate-photo__meta{font-size:var(--fs-label);line-height:var(--lh-label);font-weight:var(--fw-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:#c8c3b8}
.nate-photo__title{font-size:var(--fs-h3);line-height:var(--lh-h3);font-weight:var(--fw-h3);color:#f5f2ec}
.nate-photo__body{font-size:var(--fs-body-sm);line-height:var(--lh-body-sm);color:#c8c3b8;max-width:42ch}
.nate-photo__go{position:absolute;z-index:3;top:var(--space-5);right:var(--space-5);width:44px;height:44px;border-radius:var(--radius-pill);display:grid;place-items:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3);color:#f5f2ec;font-size:18px;line-height:1}
.nate-photo:hover .nate-photo__go{background:var(--yellow);border-color:var(--yellow);color:var(--yellow-tx)}
@media (max-width:720px){.nate-photo__panel{width:100%;mask-image:none;-webkit-mask-image:none}.nate-photo__tint{background:linear-gradient(90deg,rgba(12,10,9,.9),rgba(12,10,9,.7))}}
`;
function PhotoCard({
  photo,
  alt = '',
  meta,
  title,
  children,
  footer,
  href,
  showGo = true,
  minHeight,
  style
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: "nate-photo",
    href: href,
    style: {
      minHeight,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, css), /*#__PURE__*/React.createElement("img", {
    className: "nate-photo__img",
    src: photo,
    alt: alt
  }), /*#__PURE__*/React.createElement("span", {
    className: "nate-photo__tint",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nate-photo__panel"
  }, meta ? /*#__PURE__*/React.createElement("span", {
    className: "nate-photo__meta"
  }, meta) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "nate-photo__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "nate-photo__body"
  }, children) : null, footer), showGo ? /*#__PURE__*/React.createElement("span", {
    className: "nate-photo__go",
    "aria-hidden": "true"
  }, "\u2197") : null);
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const {
  Nav: ANav,
  Footer: AFooter,
  GlassCard: ACard,
  Badge: ABadge,
  SectionEyebrow: AEyebrow
} = window.NatePortfolioDesignSystem_06e994;
const aboutCss = `
.ab-hero{display:grid;grid-template-columns:1fr 340px;gap:var(--space-6);padding:var(--space-7) 0;align-items:start}
.ab-hero h1{font-size:var(--fs-h1);line-height:var(--lh-h1);font-weight:var(--fw-h1);letter-spacing:-.02em}
.ab-hero p{margin-top:var(--space-4);font-size:var(--fs-body);line-height:var(--lh-body);color:var(--ink-soft)}
.ab-hero p+p{margin-top:var(--space-3)}
.ab-photo{position:relative;height:340px;border-radius:var(--card-radius);overflow:hidden}
.ab-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ab-sec{padding:var(--space-7) 0;border-top:1px solid var(--line)}
.ab-sec h2{font-size:var(--fs-h2);line-height:var(--lh-h2);font-weight:var(--fw-h2);margin-top:var(--space-3)}
.tags{display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:var(--space-5)}
.tag{padding:7px 14px;border-radius:var(--radius-pill);border:1px solid var(--border-strong);background:var(--card);font-size:var(--fs-body-sm);font-weight:500;color:var(--ink)}
.exp{margin-top:var(--space-5);display:flex;flex-direction:column;gap:var(--space-5)}
.exp__row{display:grid;grid-template-columns:200px 1fr;gap:var(--space-6)}
.exp__co{font-size:var(--fs-h3);line-height:var(--lh-h3);font-weight:var(--fw-h3);color:var(--ink)}
.exp__when{font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--muted);margin-top:6px;display:block}
.tl{display:flex;flex-direction:column;gap:var(--space-4);border-left:1px solid var(--line);padding-left:var(--space-5)}
.tl__item{position:relative}
.tl__dot{position:absolute;left:calc(-1 * var(--space-5) - 5px);top:6px;width:9px;height:9px;border-radius:999px;background:var(--faint)}
.tl__dot--now{background:var(--yellow)}
.tl__role{font-size:var(--fs-body);font-weight:600;color:var(--ink)}
.tl__p{font-size:var(--fs-body-sm);line-height:var(--lh-body-sm);color:var(--ink-soft);margin-top:6px}
.badges{display:flex;flex-wrap:wrap;gap:var(--space-2);margin-top:var(--space-3)}
@media (max-width:860px){.ab-hero{grid-template-columns:1fr}.exp__row{grid-template-columns:1fr;gap:var(--space-4)}}
`;
const skills = ['UX Design', 'Wireframing & Prototyping', 'Visual Design', 'Research', 'Design Systems', 'Agile', 'AI-Native Apps'];
const soft = ['Teamwork', 'Adaptability', 'Curiosity', 'Problem-solving', 'Empathy'];
function About({
  theme,
  onToggleTheme
}) {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, aboutCss), /*#__PURE__*/React.createElement(ANav, {
    active: "About",
    theme: theme,
    onToggleTheme: onToggleTheme,
    markHref: "#"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ab-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AEyebrow, {
    number: 1
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Designing for the people behind the screen."), /*#__PURE__*/React.createElement("p", null, "I work on complex products \u2014 ticketing, collections, point of sale \u2014 where the person on the other side of the screen is usually mid-task and short on patience. My job is to make the next step obvious."), /*#__PURE__*/React.createElement("p", null, "Five years in, most of that inside museum and cultural-institution software, I've learned that the fastest way to a better interface is a sharper question about the work it supports.")), /*#__PURE__*/React.createElement("div", {
    className: "ab-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.PHOTO,
    alt: "Portrait placeholder"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ab-sec"
  }, /*#__PURE__*/React.createElement(AEyebrow, {
    number: 2
  }, "Capabilities"), /*#__PURE__*/React.createElement("h2", null, "Skills"), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, skills.map(s => /*#__PURE__*/React.createElement("span", {
    className: "tag",
    key: s
  }, s))), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Soft skills"), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, soft.map(s => /*#__PURE__*/React.createElement("span", {
    className: "tag",
    key: s
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ab-sec"
  }, /*#__PURE__*/React.createElement(AEyebrow, {
    number: 3
  }, "Experience"), /*#__PURE__*/React.createElement("h2", null, "Where I've worked"), /*#__PURE__*/React.createElement("div", {
    className: "exp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp__row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "exp__co"
  }, "Veevart"), /*#__PURE__*/React.createElement("span", {
    className: "exp__when"
  }, "2022 \u2014 2026")), /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl__dot tl__dot--now"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tl__role"
  }, "Lead UX Designer \xB7 2024 \u2014 2026"), /*#__PURE__*/React.createElement("p", {
    className: "tl__p"
  }, "Introduced Design Thinking to the product org, redesigned five core workflows, unified five platforms into one ecosystem, and built a 120-component design system."), /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, /*#__PURE__*/React.createElement(ABadge, null, "+35% on-site sales"), /*#__PURE__*/React.createElement(ABadge, null, "+40% adoption"), /*#__PURE__*/React.createElement(ABadge, {
    arrow: "down"
  }, "\u221215% onboarding"), /*#__PURE__*/React.createElement(ABadge, {
    arrow: "down"
  }, "\u221270% handoff"), /*#__PURE__*/React.createElement(ABadge, null, "10x faster delivery"))), /*#__PURE__*/React.createElement("div", {
    className: "tl__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tl__role"
  }, "UX Designer \xB7 2022 \u2014 2024"), /*#__PURE__*/React.createElement("p", {
    className: "tl__p"
  }, "Grew from feature work into leading discovery and design for the platform's largest surfaces.")))), /*#__PURE__*/React.createElement("div", {
    className: "exp__row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "exp__co"
  }, "BluePixel"), /*#__PURE__*/React.createElement("span", {
    className: "exp__when"
  }, "2021 \u2014 2022")), /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tl__role"
  }, "UX Designer \xB7 M\xE9xico (remote)"), /*#__PURE__*/React.createElement("p", {
    className: "tl__p"
  }, "Designed consumer and B2B apps end to end, from research through handoff."), /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, /*#__PURE__*/React.createElement(ABadge, null, "+5\u201315% engagement"), /*#__PURE__*/React.createElement(ABadge, null, "+120% user base")))))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ab-sec"
  }, /*#__PURE__*/React.createElement(AEyebrow, {
    number: 4
  }, "Background"), /*#__PURE__*/React.createElement("h2", null, "Education & languages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ACard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "graduation-cap",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "B.A. Interactive Media Design"
  }, "ICESI University, Cali, Colombia \u2014 Cum Laude, 2021."), /*#__PURE__*/React.createElement(ACard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "languages",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "English C1"
  }, "TOEFL iBT 107, 2022. Native Spanish."), /*#__PURE__*/React.createElement(ACard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "Cali, Colombia"
  }, "GMT-5 \xB7 available for remote teams."))))), /*#__PURE__*/React.createElement(AFooter, null));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
const {
  Nav,
  Footer,
  PhotoCard,
  GlassCard,
  Badge,
  SectionEyebrow
} = window.NatePortfolioDesignSystem_06e994;
const PHOTO = '../../assets/placeholder-photo.svg';
const roles = ['Product Designer', 'UX Designer', 'UI Designer'];
const homeCss = `
.hero{display:grid;grid-template-columns:1fr 340px;gap:var(--space-6);align-items:stretch;padding:var(--space-7) 0}
.hero h1{font-size:var(--fs-hero);line-height:var(--lh-hero);font-weight:var(--fw-hero);letter-spacing:-.02em;text-transform:uppercase;color:var(--ink)}
.hero h1 i{font-weight:var(--fw-hero)}
.hero__pos{margin-top:var(--space-5);font-size:var(--fs-body);color:var(--ink-soft);display:flex;flex-wrap:wrap;gap:6px;align-items:baseline}
.hero__slot{display:inline-block;height:1.6em;overflow:hidden;vertical-align:bottom}
.hero__slot ul{list-style:none;margin:0;padding:0;transition:transform 1.5s cubic-bezier(.16,1,.3,1)}
.hero__slot li{height:1.6em;font-weight:600;color:var(--ink)}
.hero__punch{margin-top:var(--space-3);font-size:var(--fs-body);font-weight:600;color:var(--ink)}
.hero__cta{display:inline-flex;align-items:center;gap:var(--space-2);margin-top:var(--space-5);padding:12px 20px;border-radius:var(--radius);background:var(--yellow);color:var(--yellow-tx);font-size:var(--fs-body-sm);font-weight:600;text-decoration:none}
.hero__cta:hover{background:var(--ink);color:var(--bg);text-decoration:none}
.hero__photo{position:relative;align-self:stretch;border-radius:var(--card-radius);overflow:hidden;min-height:380px}
.hero__photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.work{padding:var(--space-7) 0;border-top:1px solid var(--line)}
.work__head{display:flex;flex-direction:column;gap:var(--space-3);margin-bottom:var(--space-5)}
.work__head h2{font-size:var(--fs-h2);line-height:var(--lh-h2);font-weight:var(--fw-h2)}
.work__list{display:flex;flex-direction:column;gap:var(--space-4)}
@media (max-width:860px){.hero{grid-template-columns:1fr}.hero__photo{min-height:280px}}
`;
const projects = [{
  title: 'Point-of-sale redesign',
  meta: 'Product Design · Veevart · 2025',
  badge: '+35% faster sales',
  body: 'Rebuilt on-site checkout around how staff actually sell, not how the database was shaped.',
  href: 'project'
}, {
  title: 'Platform unification',
  meta: 'Product Design · Veevart · 2024',
  badge: '+40% adoption',
  body: 'Five legacy platforms folded into one ecosystem with a single navigation model.',
  href: '#'
}, {
  title: 'Design system · 120 components',
  meta: 'Design Systems · Veevart · 2024',
  badge: '−70% handoff time',
  body: 'One library, documented and adopted across every product team.',
  href: '#'
}];
function Home({
  theme,
  onToggleTheme,
  onNavigate
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % roles.length), 2000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, homeCss), /*#__PURE__*/React.createElement(Nav, {
    active: "Work",
    theme: theme,
    onToggleTheme: onToggleTheme,
    markHref: "#"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Nathan Manuel, senior product ", /*#__PURE__*/React.createElement("i", null, "designer")), /*#__PURE__*/React.createElement("div", {
    className: "hero__pos"
  }, /*#__PURE__*/React.createElement("span", null, "Over 5 years making complex products seamless as a senior"), /*#__PURE__*/React.createElement("span", {
    className: "hero__slot"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      transform: `translateY(-${i * 1.6}em)`
    }
  }, roles.map(r => /*#__PURE__*/React.createElement("li", {
    key: r
  }, r))))), /*#__PURE__*/React.createElement("p", {
    className: "hero__punch"
  }, "Built on data, made for the human eye."), /*#__PURE__*/React.createElement("a", {
    className: "hero__cta",
    href: "mailto:nathanmasol@gmail.com"
  }, "Let's talk ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO,
    alt: "Portrait placeholder"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "work",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work__head"
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    number: 1
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", null, "Three projects, each with a number behind it")), /*#__PURE__*/React.createElement("div", {
    className: "work__list"
  }, projects.map(p => /*#__PURE__*/React.createElement(PhotoCard, {
    key: p.title,
    photo: PHOTO,
    meta: p.meta,
    title: p.title,
    minHeight: 300,
    href: p.href === 'project' ? '#' : undefined,
    style: {
      cursor: 'pointer'
    },
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      arrow: p.badge.startsWith('−') ? 'down' : 'up'
    }, p.badge))
  }, p.body))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work__head"
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    number: 2
  }, "How I work"), /*#__PURE__*/React.createElement("h2", null, "Evidence first, decoration never")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "Research that ships"
  }, "Interviews and session data turned into decisions the team can argue with."), /*#__PURE__*/React.createElement(GlassCard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "layers",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "Systems, not screens",
    footer: /*#__PURE__*/React.createElement(Badge, {
      arrow: "down"
    }, "\u221270% handoff time")
  }, "A 120-component library keeps design and engineering speaking one language."), /*#__PURE__*/React.createElement(GlassCard, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "target",
      style: {
        width: 18,
        height: 18
      }
    }),
    title: "Measured outcomes",
    footer: /*#__PURE__*/React.createElement(Badge, null, "+35% on-site sales")
  }, "Every project closes on the numbers it moved."))))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Home,
  PHOTO,
  projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectCase.jsx
try { (() => {
const {
  Nav: PNav,
  Footer: PFooter,
  GlassCard: PCard,
  PhotoCard: PPhoto,
  Badge: PBadge,
  MetaTag: PMeta,
  SectionEyebrow: PEyebrow
} = window.NatePortfolioDesignSystem_06e994;
const projCss = `
.pj-cover{padding:var(--space-7) 0 var(--space-6)}
.pj-cover h1{font-size:var(--fs-h1);line-height:var(--lh-h1);font-weight:var(--fw-h1);letter-spacing:-.02em;margin-top:var(--space-3);max-width:20ch}
.pj-dek{margin-top:var(--space-4);font-size:var(--fs-body);line-height:var(--lh-body);color:var(--ink-soft);max-width:62ch}
.pj-metas{display:flex;flex-wrap:wrap;gap:var(--space-6);margin-top:var(--space-6)}
.pj-shot{position:relative;height:420px;border-radius:var(--card-radius);overflow:hidden;margin-top:var(--space-6)}
.pj-shot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.pj-sec{padding:var(--space-7) 0;border-top:1px solid var(--line)}
.pj-sec h2{font-size:var(--fs-h2);line-height:var(--lh-h2);font-weight:var(--fw-h2);margin-top:var(--space-3);max-width:24ch}
.pj-body{margin-top:var(--space-4);font-size:var(--fs-body);line-height:var(--lh-body);color:var(--ink-soft);max-width:62ch}
.pj-grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-4);margin-top:var(--space-5)}
.pj-grid2{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-6);margin-top:var(--space-5);align-items:start}
.pj-ph{border:1px dashed var(--border-strong);border-radius:var(--card-radius);height:240px;display:grid;place-items:center;font-size:var(--fs-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--faint);background:var(--line-soft)}
.pj-dec{list-style:none;margin:var(--space-5) 0 0;padding:0;display:flex;flex-direction:column;gap:var(--space-4)}
.pj-dec li{display:grid;grid-template-columns:38px 1fr;gap:var(--space-3);align-items:start}
.pj-dec b{display:grid;place-items:center;width:38px;height:38px;border-radius:999px;background:var(--yellow);color:var(--yellow-tx);font-size:14px;font-weight:700}
.pj-dec p{font-size:var(--fs-body-sm);line-height:var(--lh-body-sm);color:var(--ink-soft)}
.pj-dec strong{display:block;font-size:var(--fs-body);color:var(--ink);margin-bottom:4px}
.pj-refl{font-size:var(--fs-body);line-height:var(--lh-body);font-style:italic;color:var(--ink-soft);max-width:60ch;margin-top:var(--space-4)}
@media (max-width:860px){.pj-grid2{grid-template-columns:1fr}}
`;
const ic = n => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: 18,
    height: 18
  }
});
function ProjectCase({
  theme,
  onToggleTheme
}) {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, projCss), /*#__PURE__*/React.createElement(PNav, {
    active: "Work",
    theme: theme,
    onToggleTheme: onToggleTheme,
    markHref: "#"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-cover"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 1
  }, "Product Design \xB7 Veevart \xB7 2025"), /*#__PURE__*/React.createElement("h1", null, "Point-of-sale redesign"), /*#__PURE__*/React.createElement("p", {
    className: "pj-dek"
  }, "Front-desk staff were closing walk-in sales in fourteen clicks. We rebuilt the flow around the sale, not the database \u2014 and the floor got faster."), /*#__PURE__*/React.createElement("div", {
    className: "pj-metas"
  }, /*#__PURE__*/React.createElement(PMeta, {
    icon: ic('user'),
    label: "Role",
    value: "Lead UX Designer"
  }), /*#__PURE__*/React.createElement(PMeta, {
    icon: ic('users'),
    label: "Team",
    value: "2 designers \xB7 6 engineers"
  }), /*#__PURE__*/React.createElement(PMeta, {
    icon: ic('calendar'),
    label: "Timeline",
    value: "5 months \xB7 2025"
  }), /*#__PURE__*/React.createElement(PMeta, {
    icon: ic('target'),
    label: "My focus",
    value: "Research, flows, UI, handoff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pj-shot"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.PHOTO,
    alt: "Final point-of-sale screen placeholder"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 2
  }, "At a glance"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid3"
  }, /*#__PURE__*/React.createElement(PCard, {
    icon: ic('alert-circle'),
    title: "Problem"
  }, "Fourteen clicks and three screens to sell one ticket at the front desk."), /*#__PURE__*/React.createElement(PCard, {
    icon: ic('lightbulb'),
    title: "Insight"
  }, "Staff never work one sale at a time \u2014 they hold a queue in their head."), /*#__PURE__*/React.createElement(PCard, {
    icon: ic('trending-up'),
    title: "Impact",
    footer: /*#__PURE__*/React.createElement(PBadge, null, "+35% on-site sales")
  }, "Checkout collapsed into a single screen with a persistent cart.")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 3
  }, "Context"), /*#__PURE__*/React.createElement("h2", null, "Why it matters"), /*#__PURE__*/React.createElement("p", {
    className: "pj-body"
  }, "Museums make a meaningful share of revenue at the desk, in the ninety seconds between a visitor arriving and paying. Every extra screen in that window costs a sale, and the old point of sale had been extended one field at a time for years."))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 4
  }, "The problem"), /*#__PURE__*/React.createElement("h2", null, "With evidence"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pj-body"
  }, "We shadowed four institutions across a full opening weekend and timed every transaction. Median time to close: 47 seconds, of which 19 were spent switching between the visitor record and the cart."), /*#__PURE__*/React.createElement("p", {
    className: "pj-body"
  }, "Staff had invented workarounds \u2014 sticky notes, a second browser tab, a paper tally for group tickets.")), /*#__PURE__*/React.createElement("div", {
    className: "pj-ph"
  }, "Before \u2014 legacy checkout screen")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 5
  }, "Research"), /*#__PURE__*/React.createElement("h2", null, "Who sells at the desk"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid2"
  }, /*#__PURE__*/React.createElement(PPhoto, {
    photo: window.PHOTO,
    meta: "Segment 01",
    title: "Front-desk staff",
    minHeight: 260,
    showGo: false
  }, "Seasonal, trained in a day, working with a queue in front of them. Needs the next action to be the biggest thing on screen."), /*#__PURE__*/React.createElement(PPhoto, {
    photo: window.PHOTO,
    meta: "Segment 02",
    title: "Visitor services manager",
    minHeight: 260,
    showGo: false
  }, "Owns the numbers at close of day. Needs the till to reconcile without a spreadsheet.")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 6
  }, "Design principles"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid3"
  }, /*#__PURE__*/React.createElement(PCard, {
    title: "One screen, one sale"
  }, "Nothing that closes a transaction lives behind navigation."), /*#__PURE__*/React.createElement(PCard, {
    title: "The cart is always visible"
  }, "State on screen beats state in the operator's head."), /*#__PURE__*/React.createElement(PCard, {
    title: "Recoverable by default"
  }, "Every step is undoable without voiding the sale.")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 7
  }, "Key decisions"), /*#__PURE__*/React.createElement("ol", {
    className: "pj-dec"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "1"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Persistent cart rail"), "The cart moved out of a modal into a fixed right-hand rail, visible through every step of the sale.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "2"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ticket types as a grid, not a dropdown"), "Admission, membership and group tickets became one tappable grid sized for touch.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "3"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Payment as a drawer"), "Tender selection slides over the cart instead of replacing the screen, so totals stay in view."))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 8
  }, "The flow"), /*#__PURE__*/React.createElement("h2", null, "Final screens"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pj-ph"
  }, "01 \u2014 Ticket grid"), /*#__PURE__*/React.createElement("div", {
    className: "pj-ph"
  }, "02 \u2014 Cart rail"), /*#__PURE__*/React.createElement("div", {
    className: "pj-ph"
  }, "03 \u2014 Payment drawer")))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 9
  }, "Results"), /*#__PURE__*/React.createElement("div", {
    className: "pj-grid3"
  }, /*#__PURE__*/React.createElement(PCard, {
    eyebrow: "On-site sales",
    stat: "+35%",
    footer: /*#__PURE__*/React.createElement(PBadge, {
      tone: "neutral",
      arrow: "none"
    }, "vs. before")
  }), /*#__PURE__*/React.createElement(PCard, {
    eyebrow: "Time to close",
    stat: "\u221222s",
    footer: /*#__PURE__*/React.createElement(PBadge, {
      tone: "neutral",
      arrow: "none"
    }, "median, 4 sites")
  }), /*#__PURE__*/React.createElement(PCard, {
    eyebrow: "Rollout",
    stat: "100%",
    footer: /*#__PURE__*/React.createElement(PBadge, null, "shipped")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 10
  }, "Reflection"), /*#__PURE__*/React.createElement("p", {
    className: "pj-refl"
  }, "The fix wasn't a new interface pattern. It was watching someone hold four sales in their head and deciding the screen should do that instead."))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pj-sec"
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    number: 11
  }, "Next project"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(PPhoto, {
    photo: window.PHOTO,
    meta: "Product Design \xB7 Veevart \xB7 2024",
    title: "Platform unification",
    minHeight: 240,
    href: "#",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(PBadge, null, "+40% adoption"))
  }, "Five legacy platforms folded into one ecosystem."))))), /*#__PURE__*/React.createElement(PFooter, null));
}
Object.assign(window, {
  ProjectCase
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectCase.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MetaTag = __ds_scope.MetaTag;

__ds_ns.SectionEyebrow = __ds_scope.SectionEyebrow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

})();
