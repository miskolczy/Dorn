var column = document.getElementById("column");
var container = document.querySelector("body");

function variableWidthAxis() {
    const maxWidthAxis = 200;
    const minWidthAxis = 50;
    const maxColumnWidth = 600;
    const minColumnWidth = 375;

    const width = column.clientWidth;

    const percent = (width - minColumnWidth) / (maxColumnWidth - minColumnWidth);
    const scale = percent * (maxWidthAxis - minWidthAxis) + minWidthAxis;

    const newWidth = width > maxColumnWidth ? maxWidthAxis : width < minColumnWidth ? minWidthAxis : scale;

    container.style.setProperty("--width-axis", newWidth.toString());
}

window.addEventListener("load", variableWidthAxis);
window.addEventListener("resize", variableWidthAxis);
