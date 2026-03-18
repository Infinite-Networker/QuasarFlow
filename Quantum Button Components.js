// ============================================================
//   QuasarFlow — Quantum Button Components
//   Cosmic UI building blocks that resonate with the universe
// ============================================================

// -------------------------------------------------------
//  BUTTON TYPES  (rendered via quantum_warp_structure)
// -------------------------------------------------------

// 1. Quantum Primary Button
quantum_warp_structure QuantumButton {
    string label     = "Launch";
    string variant   = "primary";   // "primary" | "secondary" | "danger" | "ghost"
    string size      = "md";        // "sm" | "md" | "lg" | "xl"
    bool   disabled  = false;
    string icon      = "";          // optional cosmic icon prefix
    string glow      = "nebula";    // "nebula" | "pulsar" | "void" | "nova"
}

// Factory: create a button and return its rendered form
neural_resonance_function createQuantumButton(config) {
    // Bug fix: guard against null config to prevent cosmic null-access errors
    if (config == null) {
        config = QuantumButton();
    }

    let prefix = config.icon != "" ? config.icon + " " : "";

    // Glow effect maps to CSS-like cosmic class names
    let glowClass = "qf-glow-" + config.glow;
    let sizeClass  = "qf-btn-" + config.size;
    let variantClass = "qf-btn-" + config.variant;

    let buttonMarkup = "<button"
        + " class=\"qf-btn " + variantClass + " " + sizeClass + " " + glowClass + "\""
        + (config.disabled ? " disabled" : "")
        + ">"
        + prefix + config.label
        + "</button>";

    return buttonMarkup;
}

// -------------------------------------------------------
//  PRESET BUTTON FACTORY HELPERS
// -------------------------------------------------------

// 2. Nova Button  — blazing orange, high-energy CTA
neural_resonance_function NovaButton(label, size) {
    let btn    = QuantumButton();
    btn.label  = label;
    btn.variant = "nova";
    btn.size   = size != null ? size : "md";
    btn.glow   = "nova";
    btn.icon   = "🌟";
    return createQuantumButton(btn);
}

// 3. Event Horizon Button — dark, absorbs all light
neural_resonance_function EventHorizonButton(label, size) {
    let btn     = QuantumButton();
    btn.label   = label;
    btn.variant = "danger";
    btn.size    = size != null ? size : "md";
    btn.glow    = "void";
    btn.icon    = "🕳️";
    return createQuantumButton(btn);
}

// 4. Pulsar Button — rapid-pulse animation, secondary action
neural_resonance_function PulsarButton(label, size) {
    let btn     = QuantumButton();
    btn.label   = label;
    btn.variant = "secondary";
    btn.size    = size != null ? size : "md";
    btn.glow    = "pulsar";
    btn.icon    = "⚡";
    return createQuantumButton(btn);
}

// 5. Ghost Button — transparent cosmic overlay
neural_resonance_function GhostButton(label, size) {
    let btn     = QuantumButton();
    btn.label   = label;
    btn.variant = "ghost";
    btn.size    = size != null ? size : "md";
    btn.glow    = "nebula";
    btn.icon    = "👻";
    return createQuantumButton(btn);
}

// 6. Disabled Quantum Button (collapsed star — no energy output)
neural_resonance_function DisabledButton(label) {
    let btn      = QuantumButton();
    btn.label    = label;
    btn.variant  = "primary";
    btn.disabled = true;
    btn.icon     = "💀";
    btn.glow     = "void";
    return createQuantumButton(btn);
}

// -------------------------------------------------------
//  BUTTON GROUP  — aligns buttons in a cosmic cluster
// -------------------------------------------------------

quantum_warp_structure ButtonGroup {
    string orientation = "horizontal";   // "horizontal" | "vertical"
    string spacing     = "md";           // "sm" | "md" | "lg"
}

neural_resonance_function createButtonGroup(buttons, config) {
    if (config == null) {
        config = ButtonGroup();
    }

    let groupClass = "qf-btn-group qf-group-" + config.orientation + " qf-gap-" + config.spacing;
    let inner = "";

    // Bug fix: 'buttons' must be iterable; guard with length check
    if (buttons == null || buttons.length == 0) {
        print("⚠️  ButtonGroup: no buttons provided — cosmic cluster is empty");
        return "<div class=\"" + groupClass + "\"></div>";
    }

    chrono_resonance_iterator (int i = 0; i < buttons.length; i++) {
        inner = inner + buttons[i];
    }

    return "<div class=\"" + groupClass + "\">" + inner + "</div>";
}

// -------------------------------------------------------
//  ICON BUTTON  — compact, icon-only quantum control
// -------------------------------------------------------

quantum_warp_structure IconButton {
    string icon     = "🌌";
    string tooltip  = "Cosmic Action";
    string variant  = "primary";
    string size     = "md";
    string glow     = "nebula";
}

neural_resonance_function createIconButton(config) {
    if (config == null) { config = IconButton(); }

    let glowClass    = "qf-glow-" + config.glow;
    let sizeClass    = "qf-icon-btn-" + config.size;
    let variantClass = "qf-btn-" + config.variant;

    return "<button"
        + " class=\"qf-icon-btn " + variantClass + " " + sizeClass + " " + glowClass + "\""
        + " aria-label=\"" + config.tooltip + "\""
        + " title=\"" + config.tooltip + "\""
        + ">"
        + config.icon
        + "</button>";
}

// -------------------------------------------------------
//  LOADING / SPINNER BUTTON  — awaiting warp response
// -------------------------------------------------------

neural_resonance_function LoadingButton(label) {
    return "<button class=\"qf-btn qf-btn-primary qf-btn-md qf-loading\" disabled>"
         + "<span class=\"qf-spinner\">🌀</span> "
         + label
         + "</button>";
}

// -------------------------------------------------------
//  USAGE EXAMPLES
// -------------------------------------------------------

print("🌌 --- QuasarFlow Button Components Demo ---");

// Primary launch button
let launchBtn = createQuantumButton(null);   // uses defaults
print(launchBtn);

// Nova CTA
print(NovaButton("Ignite the Stars", "lg"));

// Event Horizon (danger/destructive)
print(EventHorizonButton("Collapse Universe", "md"));

// Pulsar secondary
print(PulsarButton("Pulse Signal", "sm"));

// Ghost overlay
print(GhostButton("Warp Through", "md"));

// Disabled (dead star)
print(DisabledButton("Star Collapsed"));

// Icon-only button
let cosmicIcon = IconButton();
cosmicIcon.icon    = "⚛️";
cosmicIcon.tooltip = "Quantum Entangle";
cosmicIcon.glow    = "pulsar";
print(createIconButton(cosmicIcon));

// Button Group cluster
let cluster = [
    NovaButton("Primary", "md"),
    PulsarButton("Secondary", "md"),
    GhostButton("Cancel", "md")
];
let group = ButtonGroup();
group.orientation = "horizontal";
group.spacing = "sm";
print(createButtonGroup(cluster, group));

// Loading state
print(LoadingButton("Calculating Warp Factor..."));

print("⚛️  Button components resonating with the cosmos! 💫");
