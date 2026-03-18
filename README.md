<div align="center">
  <img src="quasarflow_logo.png" alt="QuasarFlow Logo" width="800"/>
</div>

# QuasarFlow
🌌 QuasarFlow - A quantum-inspired programming language where code resonates with distant quasars. Features quantum-warp constructs, neural resonance functions, event horizon scopes, entangled pointers, chrono-iterators & stellar autocorrect. Write code that entangles with the cosmos! ⚛️💫

---

## 🚀 Getting Started

```python
# Install from the cosmic registry
pip install quasarflow

# Or clone from the galactic repository
git clone https://github.com/Infinite-Networker/QuasarFlow.git
cd QuasarFlow
pip install -r requirements.txt
python setup.py install
```

---

## 🌟 Core Language Concepts

| File | Description |
|------|-------------|
| [`Your First QuasarFlow Program.js`](Your%20First%20QuasarFlow%20Program.js) | Hello-world · `quantum_warp_structure` basics |
| [`The Cosmic REPL.js`](The%20Cosmic%20REPL.js) | Interactive REPL · quantum-entangled pointers |
| [`Neural Resonance Functions.js`](Neural%20Resonance%20Functions.js) | `neural_resonance_function` definitions |
| [`Chrono-Resonance Iterators.js`](Chrono-Resonance%20Iterators.js) | `chrono_resonance_iterator` loops |
| [`Event Horizon Scopes.js`](Event%20Horizon%20Scopes.js) | Block scoping beyond the event horizon |
| [`Quantum-Entangled Pointers.js`](Quantum-Entangled%20Pointers.js) | Wormhole memory with `entangle_memory()` |
| [`Stellar Autocorrect.js`](Stellar%20Autocorrect.js) | Built-in typo correction system |

---

## 🎨 UI System — Buttons & Typography

QuasarFlow ships a cosmic design system with purpose-built button components and a full typography engine. Open **[QuasarFlow UI Showcase.html](QuasarFlow%20UI%20Showcase.html)** in any browser to see every component live.

### ⚡ Quantum Button Components  ([`Quantum Button Components.js`](Quantum%20Button%20Components.js))

Five cosmic button variants, each resonating at a unique quantum frequency:

| Variant | QuasarFlow Function | Description |
|---------|-------------------|-------------|
| **Primary** | `createQuantumButton(config)` | Starlight-beam default action |
| **Nova** 🌟 | `NovaButton(label, size)` | Blazing orange high-energy CTA |
| **Pulsar** ⚡ | `PulsarButton(label, size)` | Rapid-pulse animated secondary |
| **Event Horizon** 🕳️ | `EventHorizonButton(label, size)` | Dark destructive / danger action |
| **Ghost** 👻 | `GhostButton(label, size)` | Transparent cosmic overlay |

**Sizes:** `"sm"` · `"md"` · `"lg"` · `"xl"`  
**Glows:** `"nebula"` · `"nova"` · `"pulsar"` · `"void"`

```js
// Nova CTA
let btn = NovaButton("Ignite the Stars", "lg");
print(btn);

// Event Horizon (destructive)
let dangerBtn = EventHorizonButton("Collapse Universe", "md");
print(dangerBtn);

// Button Group cluster
let cluster = [
    NovaButton("Primary", "md"),
    PulsarButton("Secondary", "md"),
    GhostButton("Cancel", "md")
];
let group = ButtonGroup();
group.orientation = "horizontal";
print(createButtonGroup(cluster, group));

// Loading state (awaiting warp response)
print(LoadingButton("Calculating Warp Factor..."));
```

---

### 🔤 Cosmic Typography & Fonts  ([`Cosmic Typography & Fonts.js`](Cosmic%20Typography%20%26%20Fonts.js))

Five quantum-calibrated font families and eight ready-made text style helpers:

#### Font Families

| QuasarFlow Name | Real-World Equivalent | Category | Use Case |
|----------------|-----------------------|----------|----------|
| `QuasarSans` | Space Grotesk | Sans-serif | Body text · UI labels |
| `NebulaSerif` | Exo 2 | Serif | Editorial · quotes |
| `WarpMono` | Space Mono | Monospace | Code blocks · terminal |
| `PulsarDisplay` | Orbitron | Display | Heroes · headings · logos |
| `EventHorizonItalic` | Exo 2 Italic | Cosmic italic | Callouts · dramatic quotes |

#### Typography Helpers

```js
// Load fonts into the quantum registry
loadFont(QuasarSans);
loadFont(PulsarDisplay);
loadFont(WarpMono);

// Supernova hero headline (72px · Orbitron · black · UPPERCASE · cyan)
print(HeroText("QuasarFlow"));

// Section heading (32px · Orbitron · bold · +0.05em)
print(HeadingText("Quantum-Warp Constructs"));

// Sub-heading (24px · QuasarSans · semibold · pulsar violet)
print(SubHeadingText("Neural Resonance Functions"));

// Body paragraph (16px · QuasarSans · regular · 1.6 leading)
print(BodyText("Where code resonates with distant quasars."));

// Micro caption (12px · UPPERCASE · +0.1em · secondary grey)
print(CaptionText("v1.0.0 — Cosmic Edition"));

// Monospace code snippet (16px · WarpMono · success green)
print(CodeText("let ptr = entangle_memory(\"cosmic_sector_42\");"));

// Italic callout (18px · EventHorizonItalic · nova orange)
print(QuoteText("The cosmos is not silent — it speaks in code. 🌌"));

// Truncated overflow label (ellipsis at max-width)
print(TruncatedText("This label travels so far it collapses at the event horizon...", 320));
```

#### Text Color Palette

| Token | Color | Hex |
|-------|-------|-----|
| `primary` | Starlight white-blue | `#E8F4FF` |
| `accent` | Quantum cyan | `#7DF9FF` |
| `nova` | Nova orange | `#FF7F00` |
| `pulsar` | Pulsar violet | `#BF5FFF` |
| `danger` | Event-horizon red | `#FF3366` |
| `success` | Cosmic green | `#39FF14` |
| `secondary` | Nebula grey | `#A0B4CC` |
| `muted` | Deep-space muted | `#4A5568` |

---

## 📁 Project Structure

```
QuasarFlow/
├── Your First QuasarFlow Program.js      # Hello-world example
├── The Cosmic REPL.js                    # Interactive REPL demo
├── Neural Resonance Functions.js         # Function definitions
├── Chrono-Resonance Iterators.js         # Loop constructs
├── Event Horizon Scopes.js               # Block scoping
├── Quantum-Entangled Pointers.js         # Memory / pointer model
├── Stellar Autocorrect.js                # Typo correction system
│
├── Quantum Button Components.js          # 🆕 UI button system
├── Cosmic Typography & Fonts.js          # 🆕 Font & typography engine
├── QuasarFlow UI Showcase.html           # 🆕 Interactive UI demo
│
├── Installation.py                       # Installation instructions
└── README.md                             # This file
```

---

## 📜 License

MIT — feel free to fork, entangle, and warp this project across the universe. 🌌
