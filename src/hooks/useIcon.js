const clear = require("../images/sky2[1].gif");
const cloudy = require("../images/cloudy.gif");
const foggy = require("../images/foggy_misty.gif");
const overcast = require("../images/partlycloudy.gif");
// const partlyCloudy = require("../images/partlycloudy.gif");
// const partlyCloudy3 = require("../images/suncloudan.gif");
const rainy = require("../images/rainy.gif");
// const snowy = require("../images/snow.gif");
// const snowy2 = require("../images/snowy.gif");
const snowy3 = require("../images/moving-snow.gif");
// const stormy = require("../images/stormyanimatedbutton.gif");
const stormy2 = require("../images/stormy.gif");
const sunny1 = require("../images/sun2[1].gif");
// const sunny2 = require("../images/sun16[1].gif");
const unknown = require("../images/unknown_misc_other.gif");

export default function useIcon(condition) {
  let icon;
  if (
    condition.includes("Partly cloudy") ||
    condition.includes("Partly sunny")
  ) {
    // online
    icon = cloudy;
  } else if (condition.includes("Rain") || condition.includes("rain")) {
    // online
    icon = rainy;
  } else if (
    condition.includes("Stormy" || "storm" || "Storm") ||
    condition.includes("Lighting")
  ) {
    icon = stormy2;
  } else if (condition.includes("Sunny")) {
    icon = sunny1;
  } else if (condition.includes("Clear")) {
    icon = clear;
  } else if (condition.includes("Snow")) {
    // online
    icon = snowy3;
  } else if (condition.includes("Overcast")) {
    // online
    icon = overcast;
  } else if (condition.includes("Fog") || condition.includes("Mist")) {
    // online
    icon = foggy;
  } else {
    icon = unknown;
  }
  return {
    icon,
  };
}
