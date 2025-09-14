function createPopUp(e, t, o) {
  let n = document.createElement("div");
  n.className = "popup-overlay";
  var d = document.createElement("div"),
    l = ((d.className = "popup-container"), document.createElement("h2")),
    e =
      ((l.className = "popup-title"),
      (l.textContent = e),
      document.createElement("p")),
    t =
      ((e.className = "popup-text"),
      (e.innerHTML = t),
      document.createElement("button"));
  (t.className = "popup-close-button"),
    (t.textContent = "Close"),
    (t.onclick = () => {
      document.body.removeChild(n), o && o();
    }),
    d.appendChild(l),
    d.appendChild(e),
    d.appendChild(t),
    n.appendChild(d),
    document.body.appendChild(n);
}
let clamp = (e, t, o) => Math.min(Math.max(e, t), o),
  burger = document.getElementById("burger"),
  dropdown = document.getElementById("dropdown"),
  showDhStockBtn =
    (burger &&
      (burger.addEventListener("click", () => {
        var e = "inline-block" === dropdown.style.display;
        (dropdown.style.display = e ? "none" : "inline-block"),
          burger.setAttribute("aria-expanded", String(!e));
      }),
      document.addEventListener("click", (e) => {
        dropdown.contains(e.target) ||
          burger.contains(e.target) ||
          ((dropdown.style.display = "none"),
          burger.setAttribute("aria-expanded", "false"));
      })),
    document.getElementById("show-dh-stock")),
  showLimStockBtn = document.getElementById("show-lim-stock"),
  dhStockGrid = document.getElementById("dh-stock"),
  limStockGrid = document.getElementById("lim-stock");
if (showDhStockBtn && showLimStockBtn && dhStockGrid && limStockGrid) {
  let e = dhStockGrid.parentElement,
    t = limStockGrid.parentElement,
    o = new URLSearchParams(window.location.search),
    n = o.has("lim"),
    d = o.has("dh");
  (n
    ? ((t.style.display = "block"),
      (e.style.display = "none"),
      showLimStockBtn.classList.add("selected"),
      showDhStockBtn)
    : ((e.style.display = "block"),
      (t.style.display = "none"),
      showDhStockBtn.classList.add("selected"),
      showLimStockBtn)
  ).classList.remove("selected"),
    showDhStockBtn.addEventListener("click", () => {
      (e.style.display = "block"),
        (t.style.display = "none"),
        showDhStockBtn.classList.add("selected"),
        showLimStockBtn.classList.remove("selected");
    }),
    showLimStockBtn.addEventListener("click", () => {
      (t.style.display = "block"),
        (e.style.display = "none"),
        showLimStockBtn.classList.add("selected"),
        showDhStockBtn.classList.remove("selected");
    });
}
document.getElementById("y") &&
  (document.getElementById("y").textContent = new Date().getFullYear());
let heroText = "niggerhunters.cc",
  heroElem = document.getElementById("hero-text"),
  index = 0;
function typeHero() {
  index <= heroText.length &&
    ((heroElem.textContent = heroText.slice(0, index)),
    index++,
    setTimeout(typeHero, 50));
}
typeHero();
