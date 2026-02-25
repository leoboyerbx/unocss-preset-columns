import { definePreset, DynamicMatcher, Preset, Rule } from "@unocss/core";

const columnsUnit = (
  utility: string,
  properties: string[],
  colNums: number
): Rule => {
  const regex = new RegExp(`^${utility}-([\\.\\d]+)(\\/([\\.\\d]+))?c$`);
  const matcher: DynamicMatcher = ([_, num1, num2]) => {
    let amount = parseFloat(num1);
    if (num2) {
      amount = parseFloat(num1) / parseFloat(num2.replace("/", ""));
    }
    const props = {};
    for (const property of properties) {
      props[property] = `${(amount * 100) / colNums}vw`;
    }
    return props;
  };
  return [regex, matcher];
};


type PresetConfig = {
  colsNum?: number;
};

export default definePreset(({ colsNum = 14 }: PresetConfig) => {
  return {
    name: "unocss-preset-columns",

    rules: [
      columnsUnit("w", ["width"], colsNum),
      columnsUnit("h", ["height"], colsNum),

      columnsUnit("max-w", ["max-width"], colsNum),
      columnsUnit("max-h", ["max-height"], colsNum),

      columnsUnit("pl", ["padding-left"], colsNum),
      columnsUnit("pt", ["padding-top"], colsNum),
      columnsUnit("pr", ["padding-right"], colsNum),
      columnsUnit("pb", ["padding-bottom"], colsNum),
      columnsUnit("px", ["padding-left", "padding-right"], colsNum),
      columnsUnit("py", ["padding-top", "padding-bottom"], colsNum),
      columnsUnit("p", ["padding"], colsNum),

      columnsUnit("ml", ["margin-left"], colsNum),
      columnsUnit("mt", ["margin-top"], colsNum),
      columnsUnit("mr", ["margin-right"], colsNum),
      columnsUnit("mb", ["margin-bottom"], colsNum),
      columnsUnit("mx", ["margin-left", "margin-right"], colsNum),
      columnsUnit("my", ["margin-top", "margin-bottom"], colsNum),
      columnsUnit("m", ["margin"], colsNum),

      columnsUnit("left", ["left"], colsNum),
      columnsUnit("top", ["top"], colsNum),
      columnsUnit("right", ["right"], colsNum),
      columnsUnit("bottom", ["bottom"], colsNum),
      columnsUnit("inset", ["left", "right", "top", "bottom"], colsNum),

      columnsUnit("basis", ["flex-basis"], colsNum),

      columnsUnit("gap", ["gap"], colsNum),
      columnsUnit("gap-x", ["column-gap"], colsNum),
      columnsUnit("gap-y", ["row-gap"], colsNum),

      columnsUnit("indent", ["text-indent"], colsNum),

      columnsUnit("translate-x", ["--un-translate-x"], colsNum),
      columnsUnit("translate-y", ["--un-translate-y"], colsNum),
    ],
  };
})
