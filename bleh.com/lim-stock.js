function createPopUp(e, t, o) {
  let n = document.createElement("div");
  n.className = "popup-overlay";
  var c = document.createElement("div"),
    s = ((c.className = "popup-container"), document.createElement("h2")),
    e =
      ((s.className = "popup-title"),
      (s.textContent = e),
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
    c.appendChild(s),
    c.appendChild(e),
    c.appendChild(t),
    n.appendChild(c),
    document.body.appendChild(n);
}
(async () => {
  function n(e) {
    var t = document.createElement("div"),
      o =
        ((t.className = "stock-card"),
        e.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    return (
      (t.innerHTML = `
            <img src="${e.icon}" alt="${e.name}" class="stock-icon" />
            <h2 class="stock-name" data-text="${e.name}">${e.name}</h2>
            <p class="stock-price">$${o}</p>
            <p class="stock-type">${e.type}</p>
            ${1 < e.stock ? `<p class="stock-count">${e.stock}x</p>` : ""}
            <p class="stock-seller">@${e.seller}</p>
        `),
      "intwists" == e.seller && (e.seller = ""),
      (t.onclick = () => {
        console.log(e.price);
        if (e.price >= 10000) {
          createPopUp(
            "High Price Notice",
            'Prices <b>$10,000</b> and over USD must be paid with crypto in the <a href="https://discord.gg/wGs7KY8EnG" target="_blank">Discord</a>.',
            null
          );
        } else {
          createPopUp(
            "Purchase Notice",
            'Currently auto-purchase is being worked on. Please pay in the <a href="https://discord.gg/wGs7KY8EnG" target="_blank">Discord</a>.',
            null
          );
        }
      }),
      t
    );
  }
  async function e() {
    var e,
      o = (
        await (
          await fetch(
            "https://docs.google.com/spreadsheets/d/1FN52lO4nBZriaEwIOtdZx2UI6qcmfDAoM6iniMyUzos/export?format=csv&range=A:E"
          )
        ).text()
      )
        .split("\n")
        .slice(1)
        .map((e) => {
          var [e, t, o, n, c] = e.split(",");
          return e && t && n
            ? ((t = t.replace(/,/g, "")),
              {
                name: e,
                price: parseFloat(t),
                icon: o || "logo-rr-transparent.png",
                type: n,
                seller: c && 0 < c.trim().length ? c : "intwists",
              })
            : null;
        })
        .filter((e) => null !== e),
      o = ((e) => {
        let o = {};
        return (
          e.forEach((e) => {
            var t = [
              e.name?.trim(),
              String(e.price).trim(),
              e.icon?.trim(),
              e.type?.trim(),
              e.seller?.trim().toLowerCase(),
            ].join("-");
            o[t] ? (o[t].stock += 1) : (o[t] = { ...e, stock: 1 });
          }),
          Object.values(o)
        );
      })(o);
    o.sort((e, t) => t.price - e.price);
    {
      let t = document.getElementById("lim-stock");
      (t.innerHTML = ""),
        0 === o.length
          ? (t.innerHTML = "<h1>No items currently in stock.</h1>")
          : (o.forEach((e) => {
              e = n(e);
              t.appendChild(e);
            }),
            document.body.classList.contains("stream-stock") &&
              ((e = 5 * o.length),
              (t.style.animation = `scroll-loop ${e}s linear infinite`),
              o.forEach((e) => {
                e = n(e);
                t.appendChild(e);
              })));
    }
  }
  e(),
    document.body.classList.contains("stream-stock") &&
      setInterval(async () => {
        e();
      }, 6e4);
  var t = document.getElementById("lim-search-input");
  t &&
    t.addEventListener("input", (e) => {
      let c = e.target.value.toLowerCase();
      document.querySelectorAll("#lim-stock .stock-card").forEach((e) => {
        var t = e.querySelector(".stock-name").textContent.toLowerCase(),
          o = e.querySelector(".stock-type").textContent.toLowerCase(),
          n = e.querySelector(".stock-seller").textContent.toLowerCase();
        !c || t.includes(c) || o.includes(c) || n.includes(c)
          ? (e.style.display = "block")
          : (e.style.display = "none");
      });
    });
})();
