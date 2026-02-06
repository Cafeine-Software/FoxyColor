import FoxyColor from "./foxyColor.js";

const CELL_TEXT = " Text ";
const LABEL_WIDTH = 14;

// Collect all foreground and background colors dynamically
const allForegrounds = [];
for (const group of Object.keys(FoxyColor.ANSI.foreground)) {
    for (const color of Object.keys(FoxyColor.ANSI.foreground[group])) {
        allForegrounds.push({ name: `${group}.${color}`, code: FoxyColor.ANSI.foreground[group][color] });
    }
}

const allBackgrounds = [];
for (const group of Object.keys(FoxyColor.ANSI.background)) {
    for (const color of Object.keys(FoxyColor.ANSI.background[group])) {
        allBackgrounds.push({ name: `${group}.${color}`, code: FoxyColor.ANSI.background[group][color] });
    }
}

const allStyles = [];
for (const style of Object.keys(FoxyColor.ANSI.STYLE)) {
    allStyles.push({ name: style, code: FoxyColor.ANSI.STYLE[style] });
}

function printSeparator(title) {
    console.log("");
    console.log("=".repeat(60));
    console.log(` ${title}`);
    console.log("=".repeat(60));
    console.log("");
}

function printGrid(styleCode = "") {
    // Header row: empty label + background names
    let header = "".padEnd(LABEL_WIDTH);
    for (const bg of allBackgrounds) {
        header += bg.name.slice(0, CELL_TEXT.length).padEnd(CELL_TEXT.length);
    }
    console.log(header);

    // One row per foreground color
    for (const fg of allForegrounds) {
        let row = fg.name.padEnd(LABEL_WIDTH);
        for (const bg of allBackgrounds) {
            row += FoxyColor.style(CELL_TEXT, {
                foregroundColor: fg.code,
                backgroundColor: bg.code,
                style: styleCode
            });
        }
        console.log(row);
    }
}

// Section 1 — Styles
printSeparator("SECTION 1 — Styles");
for (const style of allStyles) {
    console.log(`  ${style.name.padEnd(14)} ${FoxyColor.style("The quick brown fox jumps over the lazy dog", { style: style.code })}`);
}

// Section 2 — Foreground x Background (no style)
printSeparator("SECTION 2 — Foreground x Background");
printGrid();

// Section 3 — Style x Foreground x Background
for (const style of allStyles) {
    printSeparator(`SECTION 3 — ${style.name} x Foreground x Background`);
    printGrid(style.code);
}
