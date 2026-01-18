declare module "react-crossword" {
  import * as React from "react";

  interface CrosswordProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    theme?: {
      gridBackground?: string;
      cellBackground?: string;
      cellBorder?: string;
      textColor?: string;
      numberColor?: string;
      focusBackground?: string;
      highlightBackground?: string;
    };
    onCorrect?: () => void;
    onLoadedCorrect?: () => void;
    onCrosswordCorrect?: () => void;
  }

  const Crossword: React.FC<CrosswordProps>;
  export default Crossword;
}
