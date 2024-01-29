const clear = require("../images/sky2[1].gif");
const cloudy = require("../images/cloudy.gif");
const foggy = require("../images/foggy_misty.gif");
const overcast = require("../images/partlycloudy.gif");
const rainy = require("../images/rainy.gif");
const snowy3 = require("../images/moving-snow.gif");
const stormy2 = require("../images/stormy.gif");
const sunny1 = require("../images/sun2[1].gif");
const unknown = require("../images/unknown_misc_other.gif");

export default function useIcon(condition) {
  let icon;
  if (
    condition.includes("Partly cloudy") ||
    condition.includes("Partly sunny")
  ) {
    icon = cloudy;
  } else if (condition.includes("Rain") || condition.includes("rain")) {
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
    icon = snowy3;
  } else if (condition.includes("Overcast")) {
    icon = overcast;
  } else if (condition.includes("Fog") || condition.includes("Mist")) {
    icon = foggy;
  } else {
    icon = unknown;
  }
  return {
    icon,
  };
}
