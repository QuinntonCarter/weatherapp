const clear = require("../images/sky2[1].gif");
const cloudy = require("../images/partlycloudy.gif");
const foggy = require("../images/foggy_misty.gif");
const overcast = require("../images/cloudy.gif");
const rainy = require("../images/rainy.gif");
const snowy3 = require("../images/moving-snow.gif");
const stormy2 = require("../images/stormy.gif");
const sunny1 = require("../images/sun2[1].gif");
const unknown = require("../images/unknown_misc_other.gif");

export default function useIcon(condition) {
  let icon;
  if (
    condition.includes("partly cloudy") ||
    condition.includes("partly sunny")
  ) {
    icon = cloudy;
  } else if (condition.includes("rain")) {
    icon = rainy;
  } else if (
    condition.includes("stormy" || "storm" || "storm") ||
    condition.includes("lighting")
  ) {
    icon = stormy2;
  } else if (condition.includes("sunny")) {
    icon = sunny1;
  } else if (condition.includes("clear")) {
    icon = clear;
  } else if (condition.includes("snow")) {
    icon = snowy3;
  } else if (condition.includes("overcast")) {
    icon = overcast;
  } else if (condition.includes("fog") || condition.includes("mist")) {
    icon = foggy;
  } else {
    icon = unknown;
  }
  return {
    icon,
  };
}
