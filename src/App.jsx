import { useState } from "react";
import { Fade, FoodImage, SectionLabel, Accent, ColorBar, TILE_PATTERN } from "./components.jsx";
import content from "./content.js";

// ═══════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════
function Hero() {
  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${content.images.hero})`,
        backgroundSize: "cover", backgroundPosition: "center",
        animation: "slowZoom 20s ease forwards",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(42,22,12,0.4) 0%, rgba(42,22,12,0.7) 50%, rgba(42,22,12,0.95) 100%)",
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: "linear-gradient(90deg, #C1440E, #E6A817, #1B6B3A, #C1440E, #E6A817, #1B6B3A, #C1440E)",
      }} />

      <div style={{
        position: "relative", height: "100%",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center", padding: "0 24px", color: "#FFF8F0",
      }}>
        <div style={{ animation: "fadeUp 1s ease 0.2s both", maxWidth: "700px" }}>
          <div style={{ fontSize: "32px", marginBottom: "12px", opacity: 0.6, letterSpacing: "16px" }}>✦ ✦ ✦</div>
          <SectionLabel color="#E6A817">{content.cuisine} · {content.location}</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 9vw, 90px)",
            fontWeight: 700, lineHeight: 1.0, marginBottom: "8px", color: "#FFF8F0",
          }}>
            {content.name.replace(content.nameAccent, "").trim()}
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 9vw, 90px)",
            fontWeight: 400, lineHeight: 1.0, fontStyle: "italic",
            color: "#E6A817", marginBottom: "20px",
          }}>
            {content.nameAccent}
          </h1>
          <div style={{
            width: "60px", height: "2px",
            background: "linear-gradient(90deg, transparent, #E6A817, transparent)",
            margin: "24px auto",
          }} />
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300,
            color: "rgba(255,248,240,0.65)", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto",
          }}>{content.tagline}</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "36px", flexWrap: "wrap" }}>
            <a href="#menu" style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase",
              background: "#C1440E", color: "white", padding: "14px 36px", borderRadius: "4px",
              textDecoration: "none", transition: "all 0.3s",
            }}
              onMouseEnter={(e) => { e.target.style.background = "#A83A0C"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.background = "#C1440E"; e.target.style.transform = "translateY(0)"; }}
            >View Menu</a>
            <a href="#contact" style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase",
              background: "transparent", color: "#E6A817",
              border: "1px solid rgba(230,168,23,0.4)",
              padding: "14px 36px", borderRadius: "4px",
              textDecoration: "none", transition: "all 0.3s",
            }}
              onMouseEnter={(e) => e.target.style.borderColor = "#E6A817"}
              onMouseLeave={(e) => e.target.style.borderColor = "rgba(230,168,23,0.4)"}
            >Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════
function About() {
  return (
    <div style={{
      background: "var(--cream)", backgroundImage: TILE_PATTERN,
      padding: "clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "clamp(24px, 4vw, 56px)",
        maxWidth: "1100px", margin: "0 auto", alignItems: "center",
      }}>
        <Fade>
          <div>
            <SectionLabel>Nuestra Historia</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600,
              lineHeight: 1.2, marginBottom: "24px", color: "var(--text)",
            }}>
              {content.aboutHeading}{" "}
              <Accent>{content.aboutAccent}</Accent>
            </h2>
            {content.aboutText.map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px", lineHeight: 1.8, color: "var(--text-light)",
                fontWeight: 300, marginBottom: i < content.aboutText.length - 1 ? "16px" : 0,
              }}>{p}</p>
            ))}
          </div>
        </Fade>
        <Fade delay={0.2}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "190px 190px", gap: "12px",
          }}>
            <FoodImage src={content.images.tacos} alt="Tacos" style={{ borderRadius: "8px", gridRow: "1 / 3" }} />
            <FoodImage src={content.images.enchiladas} alt="Enchiladas" style={{ borderRadius: "8px" }} />
            <FoodImage src={content.images.salsa} alt="Salsa" style={{ borderRadius: "8px" }} />
          </div>
        </Fade>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SIGNATURE DISHES
// ═══════════════════════════════════════════
function Signatures() {
  return (
    <div style={{
      background: "var(--adobe)", color: "#FFF8F0",
      padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)",
    }}>
      <ColorBar />
      <div style={{ marginTop: "48px" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel color="#E6A817">Lo Mejor de la Casa</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, color: "#FFF8F0",
            }}>
              Signature <Accent color="#E6A817">Plates</Accent>
            </h2>
          </div>
        </Fade>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px", maxWidth: "1000px", margin: "0 auto",
        }}>
          {content.signatureDishes.map((d, i) => (
            <Fade key={i} delay={i * 0.12}>
              <div style={{
                background: "rgba(255,248,240,0.04)",
                border: "1px solid rgba(230,168,23,0.12)",
                borderRadius: "8px", overflow: "hidden", transition: "all 0.3s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(230,168,23,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(230,168,23,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <FoodImage src={content.images[d.image]} alt={d.name} style={{ height: "220px" }} />
                <div style={{ padding: "24px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}>{d.name}</h3>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#E6A817", fontWeight: 600, flexShrink: 0 }}>{d.price}</span>
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,248,240,0.5)", fontSize: "14px", fontWeight: 300, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MENU
// ═══════════════════════════════════════════
function Menu() {
  const [tab, setTab] = useState(content.menuCategories[0].id);

  return (
    <div id="menu" style={{
      background: "var(--cream)", backgroundImage: TILE_PATTERN,
      padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)",
    }}>
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>El Menú</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, color: "var(--text)",
          }}>
            From Our <Accent>Cocina</Accent>
          </h2>
        </div>

        <div style={{
          display: "flex", justifyContent: "center",
          gap: "clamp(8px, 2vw, 16px)", marginBottom: "44px", flexWrap: "wrap",
        }}>
          {content.menuCategories.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: tab === t.id ? "var(--terracotta)" : "transparent",
              color: tab === t.id ? "white" : "var(--text-light)",
              border: tab === t.id ? "none" : "1px solid var(--border-light)",
              borderRadius: "6px", padding: "10px 24px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.3s",
            }}>{t.label}</button>
          ))}
        </div>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {tab === "tacos" && (
            <div style={{
              background: "rgba(193,68,14,0.06)", border: "1px solid rgba(193,68,14,0.1)",
              borderRadius: "8px", padding: "16px 20px", marginBottom: "28px", textAlign: "center",
            }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", color: "var(--terracotta)", fontWeight: 500 }}>
                All tacos served on handmade corn tortillas with cilantro & onion
              </span>
            </div>
          )}

          {(content.menuItems[tab] || []).map((item, i) => (
            <div key={`${tab}-${i}`} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "16px 0", borderBottom: "1px solid rgba(42,22,12,0.06)",
              animation: `fadeUp 0.4s ease ${i * 0.05}s both`,
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "var(--text)" }}>{item.name}</h4>
                  {item.popular && (
                    <span style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: "8px", letterSpacing: "1.5px", textTransform: "uppercase",
                      background: "var(--terracotta)", color: "white", padding: "3px 8px", borderRadius: "3px", fontWeight: 600,
                    }}>Popular</span>
                  )}
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", color: "var(--text-light)", fontSize: "13px", fontWeight: 300, marginTop: "2px" }}>{item.desc}</p>
              </div>
              <span style={{
                fontFamily: "'Playfair Display', serif", color: "var(--terracotta)",
                fontSize: "17px", fontWeight: 600, flexShrink: 0, marginLeft: "16px",
              }}>${item.price}</span>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

// ═══════════════════════════════════════════
// CATERING
// ═══════════════════════════════════════════
function Catering() {
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      padding: "clamp(60px, 10vw, 100px) 24px",
      background: `
        radial-gradient(ellipse at 20% 50%, rgba(193,68,14,0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 30%, rgba(230,168,23,0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 80%, rgba(27,107,58,0.08) 0%, transparent 50%),
        var(--adobe)
      `,
      textAlign: "center", color: "#FFF8F0",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><ColorBar /></div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}><ColorBar /></div>

      <Fade>
        <div style={{ fontSize: "24px", marginBottom: "16px", opacity: 0.5, letterSpacing: "12px" }}>✦ ✦ ✦</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600, marginBottom: "12px",
        }}>
          We Do <Accent color="#E6A817">Catering</Accent>
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase",
          color: "rgba(255,248,240,0.5)", fontWeight: 400, marginBottom: "28px",
        }}>
          Parties · Weddings · Corporate Events · Family Gatherings
        </p>
        <a href={`tel:${content.phone.replace(/\D/g, '')}`} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase",
          background: "#C1440E", color: "white", padding: "14px 36px", borderRadius: "4px",
          textDecoration: "none", transition: "all 0.3s", display: "inline-block",
        }}
          onMouseEnter={(e) => e.target.style.background = "#A83A0C"}
          onMouseLeave={(e) => e.target.style.background = "#C1440E"}
        >Call to Book</a>
      </Fade>
    </div>
  );
}

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
function Footer() {
  return (
    <div id="contact" style={{
      background: "var(--adobe)", color: "#FFF8F0",
      padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)",
    }}>
      <ColorBar />
      <div style={{ marginTop: "48px" }}>
        <Fade>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
            maxWidth: "900px", margin: "0 auto", textAlign: "center",
          }}>
            <div>
              <SectionLabel color="#E6A817">Hours</SectionLabel>
              <div style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,248,240,0.5)", fontSize: "15px", lineHeight: 2, fontWeight: 300 }}>
                {content.hours.map((h, i) => <div key={i}>{h}</div>)}
              </div>
            </div>
            <div>
              <SectionLabel color="#E6A817">Location</SectionLabel>
              <div style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,248,240,0.5)", fontSize: "15px", lineHeight: 2, fontWeight: 300 }}>
                <div>{content.address.street}</div>
                <div>{content.address.city}</div>
                <div style={{ marginTop: "8px", color: "#E6A817" }}>{content.phone}</div>
              </div>
            </div>
            <div>
              <SectionLabel color="#E6A817">Order</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                {content.orderPickupUrl && (
                  <a href={content.orderPickupUrl} style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: "12px", fontWeight: 500,
                    letterSpacing: "2px", textTransform: "uppercase",
                    background: "#C1440E", color: "white",
                    padding: "12px 32px", borderRadius: "4px",
                    textDecoration: "none", width: "100%", maxWidth: "200px", textAlign: "center",
                  }}>Order Pickup</a>
                )}
                {content.orderDeliveryUrl && (
                  <a href={content.orderDeliveryUrl} style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: "12px", fontWeight: 500,
                    letterSpacing: "2px", textTransform: "uppercase",
                    background: "transparent", color: "#E6A817",
                    border: "1px solid rgba(230,168,23,0.3)",
                    padding: "12px 32px", borderRadius: "4px",
                    textDecoration: "none", width: "100%", maxWidth: "200px", textAlign: "center",
                  }}>Order Delivery</a>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div style={{
        borderTop: "1px solid rgba(230,168,23,0.1)",
        marginTop: "56px", paddingTop: "24px", textAlign: "center",
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
          {content.name.replace(content.nameAccent, "").trim()}{" "}
          <Accent color="#E6A817">{content.nameAccent}</Accent>
        </div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "10px", letterSpacing: "3px", color: "rgba(255,248,240,0.3)",
        }}>
          © {new Date().getFullYear()} {content.name.toUpperCase()} · {content.location.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// APP
// ═══════════════════════════════════════════
export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Signatures />
      <Menu />
      <Catering />
      <Footer />
    </>
  );
}
