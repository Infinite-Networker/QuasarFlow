// ============================================================
//   QuasarFlow — Cosmic Typography & Font System
//   Where words travel at the speed of light across galaxies
// ============================================================

// -------------------------------------------------------
//  FONT FAMILIES  (quantum_warp_structure definitions)
// -------------------------------------------------------

// Base font registry — all fonts registered in the cosmic type atlas
quantum_warp_structure FontFamily {
    string name       = "QuasarSans";
    string category   = "sans-serif";   // "sans-serif" | "serif" | "mono" | "display" | "cosmic"
    string weight     = "400";          // "100"–"900" or named weight
    string style      = "normal";       // "normal" | "italic" | "oblique"
    string source     = "quasar-cdn";   // CDN or local path
}

// -------  Built-in QuasarFlow font families  -------

// 1. QuasarSans  — clean, readable sans-serif for body text
let QuasarSans = FontFamily();
QuasarSans.name     = "QuasarSans";
QuasarSans.category = "sans-serif";
QuasarSans.source   = "https://fonts.quasarflow.io/QuasarSans.woff2";

// 2. NebulaSerif  — elegant serif for editorial / heading use
let NebulaSerif = FontFamily();
NebulaSerif.name     = "NebulaSerif";
NebulaSerif.category = "serif";
NebulaSerif.source   = "https://fonts.quasarflow.io/NebulaSerif.woff2";

// 3. WarpMono  — monospace font for code blocks & terminals
let WarpMono = FontFamily();
WarpMono.name     = "WarpMono";
WarpMono.category = "mono";
WarpMono.source   = "https://fonts.quasarflow.io/WarpMono.woff2";

// 4. PulsarDisplay  — bold, high-impact display font for heroes
let PulsarDisplay = FontFamily();
PulsarDisplay.name     = "PulsarDisplay";
PulsarDisplay.category = "display";
PulsarDisplay.weight   = "900";
PulsarDisplay.source   = "https://fonts.quasarflow.io/PulsarDisplay.woff2";

// 5. EventHorizonItalic  — dramatic italic for quotes & callouts
let EventHorizonItalic = FontFamily();
EventHorizonItalic.name     = "EventHorizonItalic";
EventHorizonItalic.category = "cosmic";
EventHorizonItalic.style    = "italic";
EventHorizonItalic.weight   = "700";
EventHorizonItalic.source   = "https://fonts.quasarflow.io/EventHorizonItalic.woff2";

// -------------------------------------------------------
//  FONT SIZES  — scale aligned with the cosmic type scale
// -------------------------------------------------------

quantum_warp_structure TypeScale {
    int xs   = 10;   // micro captions — black-hole fine print
    int sm   = 12;   // small labels
    int base = 16;   // body text — the Goldilocks zone
    int md   = 18;   // medium emphasis
    int lg   = 24;   // large callouts
    int xl   = 32;   // section headings
    int xxl  = 48;   // page titles
    int hero = 72;   // hero display — supernova scale
    int mega = 96;   // cosmic mega-headline
}

let SCALE = TypeScale();

// -------------------------------------------------------
//  FONT WEIGHTS  — gravitational pull of each style
// -------------------------------------------------------

quantum_warp_structure FontWeights {
    int thin       = 100;   // photon-thin
    int extraLight = 200;   // nebula whisper
    int light      = 300;   // stellar breeze
    int regular    = 400;   // standard orbit
    int medium     = 500;   // mid-mass star
    int semiBold   = 600;   // dwarf star
    int bold       = 700;   // neutron star
    int extraBold  = 800;   // pulsar beam
    int black      = 900;   // singularity crush
}

let WEIGHTS = FontWeights();

// -------------------------------------------------------
//  LINE HEIGHTS  — spacing between the cosmic lines
// -------------------------------------------------------

quantum_warp_structure LineHeights {
    float none    = 1.0;
    float tight   = 1.25;
    float snug    = 1.375;
    float normal  = 1.5;
    float relaxed = 1.625;
    float loose   = 2.0;
}

let LINE_HEIGHTS = LineHeights();

// -------------------------------------------------------
//  LETTER SPACING  — the void between quantum characters
// -------------------------------------------------------

quantum_warp_structure LetterSpacing {
    string tight   = "-0.05em";
    string normal  = "0em";
    string wide    = "0.05em";
    string wider   = "0.1em";
    string widest  = "0.25em";    // cosmic broadcast
}

let SPACING = LetterSpacing();

// -------------------------------------------------------
//  TEXT COLOR PALETTE  — chromatic spectrum of the cosmos
// -------------------------------------------------------

quantum_warp_structure CosmicTextColors {
    string primary     = "#E8F4FF";   // starlight white-blue
    string secondary   = "#A0B4CC";   // nebula grey
    string accent      = "#7DF9FF";   // quantum cyan
    string nova        = "#FF7F00";   // nova orange
    string pulsar      = "#BF5FFF";   // pulsar violet
    string danger      = "#FF3366";   // event-horizon red
    string success     = "#39FF14";   // cosmic green
    string muted       = "#4A5568";   // deep-space muted
    string inverse     = "#0A0E1A";   // dark matter (on light BG)
}

let TEXT_COLORS = CosmicTextColors();

// -------------------------------------------------------
//  TYPOGRAPHY COMPONENT GENERATOR
// -------------------------------------------------------

quantum_warp_structure TypographyConfig {
    string tag        = "p";           // HTML tag or QuasarFlow tag
    string fontFamily = "QuasarSans";
    int    fontSize   = 16;
    int    fontWeight = 400;
    float  lineHeight = 1.5;
    string letterSpacing = "0em";
    string color      = "#E8F4FF";
    string align      = "left";        // "left" | "center" | "right" | "justify"
    string transform  = "none";        // "none" | "uppercase" | "lowercase" | "capitalize"
    bool   truncate   = false;
}

neural_resonance_function createTypography(text, config) {
    // Bug fix: if config is null, initialise with defaults to avoid null-access
    if (config == null) {
        config = TypographyConfig();
    }

    let truncateStyle = config.truncate
        ? " overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        : "";

    let style = "font-family:'" + config.fontFamily + "';"
              + "font-size:" + str(config.fontSize) + "px;"
              + "font-weight:" + str(config.fontWeight) + ";"
              + "line-height:" + str(config.lineHeight) + ";"
              + "letter-spacing:" + config.letterSpacing + ";"
              + "color:" + config.color + ";"
              + "text-align:" + config.align + ";"
              + "text-transform:" + config.transform + ";"
              + truncateStyle;

    return "<" + config.tag
         + " style=\"" + style + "\""
         + " class=\"qf-text\">"
         + text
         + "</" + config.tag + ">";
}

// -------------------------------------------------------
//  PRESET TYPOGRAPHY HELPERS  — ready-made cosmic styles
// -------------------------------------------------------

// Display Hero  — the supernova headline
neural_resonance_function HeroText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "h1";
    cfg.fontFamily  = "PulsarDisplay";
    cfg.fontSize    = SCALE.hero;
    cfg.fontWeight  = WEIGHTS.black;
    cfg.lineHeight  = LINE_HEIGHTS.tight;
    cfg.letterSpacing = SPACING.tight;
    cfg.color       = TEXT_COLORS.accent;
    cfg.align       = "center";
    cfg.transform   = "uppercase";
    return createTypography(text, cfg);
}

// Section Heading  — stellar navigation marker
neural_resonance_function HeadingText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "h2";
    cfg.fontFamily  = "PulsarDisplay";
    cfg.fontSize    = SCALE.xl;
    cfg.fontWeight  = WEIGHTS.bold;
    cfg.lineHeight  = LINE_HEIGHTS.snug;
    cfg.letterSpacing = SPACING.wide;
    cfg.color       = TEXT_COLORS.primary;
    return createTypography(text, cfg);
}

// Sub-heading  — dwarf star label
neural_resonance_function SubHeadingText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "h3";
    cfg.fontFamily  = "QuasarSans";
    cfg.fontSize    = SCALE.lg;
    cfg.fontWeight  = WEIGHTS.semiBold;
    cfg.lineHeight  = LINE_HEIGHTS.normal;
    cfg.color       = TEXT_COLORS.pulsar;
    return createTypography(text, cfg);
}

// Body Text  — comfortable interstellar reading
neural_resonance_function BodyText(text) {
    let cfg = TypographyConfig();   // all defaults are body-ready
    return createTypography(text, cfg);
}

// Caption  — micro-label from the edge of the galaxy
neural_resonance_function CaptionText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "span";
    cfg.fontFamily  = "QuasarSans";
    cfg.fontSize    = SCALE.sm;
    cfg.fontWeight  = WEIGHTS.light;
    cfg.lineHeight  = LINE_HEIGHTS.tight;
    cfg.letterSpacing = SPACING.wider;
    cfg.color       = TEXT_COLORS.secondary;
    cfg.transform   = "uppercase";
    return createTypography(text, cfg);
}

// Code Text  — warp-speed monospace terminal output
neural_resonance_function CodeText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "code";
    cfg.fontFamily  = "WarpMono";
    cfg.fontSize    = SCALE.base;
    cfg.fontWeight  = WEIGHTS.medium;
    cfg.lineHeight  = LINE_HEIGHTS.loose;
    cfg.letterSpacing = SPACING.normal;
    cfg.color       = TEXT_COLORS.success;
    return createTypography(text, cfg);
}

// Quote / Callout  — resonant wisdom from the event horizon
neural_resonance_function QuoteText(text) {
    let cfg         = TypographyConfig();
    cfg.tag         = "blockquote";
    cfg.fontFamily  = "EventHorizonItalic";
    cfg.fontSize    = SCALE.md;
    cfg.fontWeight  = WEIGHTS.bold;
    cfg.lineHeight  = LINE_HEIGHTS.relaxed;
    cfg.letterSpacing = SPACING.wide;
    cfg.color       = TEXT_COLORS.nova;
    return createTypography(text, cfg);
}

// Truncated Label  — text that collapses beyond the horizon
neural_resonance_function TruncatedText(text, maxWidth) {
    let cfg         = TypographyConfig();
    cfg.tag         = "span";
    cfg.fontFamily  = "QuasarSans";
    cfg.fontSize    = SCALE.base;
    cfg.truncate    = true;
    cfg.color       = TEXT_COLORS.muted;
    // Bug fix: maxWidth must default to a value if null
    let width = maxWidth != null ? maxWidth : 200;
    return "<div style=\"max-width:" + str(width) + "px;\">" + createTypography(text, cfg) + "</div>";
}

// -------------------------------------------------------
//  FONT LOADING UTILITY
// -------------------------------------------------------

neural_resonance_function loadFont(fontFamily) {
    // Bug fix: check for null fontFamily to prevent empty @font-face injection
    if (fontFamily == null) {
        print("⚠️  loadFont: no FontFamily provided — cosmic typeface not loaded");
        return;
    }

    let css = "@font-face {"
            + "  font-family: '" + fontFamily.name + "';"
            + "  font-style: " + fontFamily.style + ";"
            + "  font-weight: " + fontFamily.weight + ";"
            + "  src: url('" + fontFamily.source + "') format('woff2');"
            + "}";

    print("📡 Loading font: " + fontFamily.name + " from " + fontFamily.source);
    return css;
}

// -------------------------------------------------------
//  USAGE EXAMPLES
// -------------------------------------------------------

print("🌌 --- QuasarFlow Typography System Demo ---");

// Load all cosmic fonts
loadFont(QuasarSans);
loadFont(NebulaSerif);
loadFont(WarpMono);
loadFont(PulsarDisplay);
loadFont(EventHorizonItalic);

// Render each typography variant
print(HeroText("QuasarFlow"));
print(HeadingText("Quantum-Warp Constructs"));
print(SubHeadingText("Neural Resonance Functions"));
print(BodyText("QuasarFlow is a quantum-inspired programming language where code resonates with distant quasars."));
print(CaptionText("v1.0.0 — Cosmic Edition"));
print(CodeText("let ptr = entangle_memory(\"cosmic_sector_42\");"));
print(QuoteText("The cosmos is not silent — it speaks in code. 🌌"));
print(TruncatedText("This label travels so far it collapses at the event horizon of your viewport...", 320));

print("⚛️  Typography system resonating at quantum frequency! 💫");
