const { isMatchPackage } = require("@cybozu/license-manager");

const config = {
  analyze: {
    allowLicenses: [
      "MIT",
      "Apache-2.0",
      "ISC",
      "0BSD",
      "Python-2.0",
      "MPL-2.0",
      "CC0-1.0",
      "BSD-3-Clause OR MIT",
      "CC-BY-3.0",
      "CC-BY-4.0",
      "(BSD-3-Clause OR GPL-2.0)",
      "(MIT AND Zlib)",
      "(MIT AND BSD-3-Clause)",
      "(MIT AND CC-BY-3.0)",
      "(MIT OR CC0-1.0)",
      "BlueOak-1.0.0",
    ],
    allowPackages: [
      "big-integer",
      "fs-monkey",
      "memfs",
      "stream-buffers",
      "indexof",
    ],
  },
  extract: {},
  packageManager: "pnpm",
};

module.exports = config;
