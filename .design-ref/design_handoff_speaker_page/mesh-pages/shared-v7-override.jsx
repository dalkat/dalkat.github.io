// Mesh3 — exact v7 styling override.
//
// Restores v7-midcentury's original meshBg, which has a small bug:
// alpha-suffixed blob colors like `#ff8a7aaa` get a "00" appended
// (`#ff8a7aaa00`) which is invalid hex, so those blobs silently fail to
// render. That bug is the source of v7's quieter, simpler feel — the
// "fixed" meshBg in shared.jsx paints those blobs and the result is much
// more colorful.
//
// Replaces window.MESH.meshBg in place AFTER shared.jsx, BEFORE the page
// scripts, so each page's IIFE picks up the v7 version when it
// destructures.
//
// Footer is also disabled (v7 had no footer).

(function () {
  const M = window.MESH;
  if (!M) return;

  // Verbatim copy from variations/v7-midcentury.jsx.
  M.meshBg = function ({ base, blobs }) {
    const stops = blobs.map(([color, x, y, size]) =>
      `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color}00 ${size}%)`
    ).join(', ');
    return `${stops}, ${base}`;
  };

  // v7 had no footer.
  window.MeshFooter = function NoFooter() { return null; };
})();
