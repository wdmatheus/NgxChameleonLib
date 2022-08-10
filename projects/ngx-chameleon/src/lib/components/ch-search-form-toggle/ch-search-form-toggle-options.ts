interface ChSearchFormToggleOptions {
  topBtnsPosition: string;
  topShowHideButton?: ChSearchFormToggleButton;
  topSearchButton?: ChSearchFormToggleButton;
  bottomClearButton?: ChSearchFormToggleButton;
  bottomSearchButton?: ChSearchFormToggleButton;
}

interface ChSearchFormToggleButton {
  color: string;
  icon: string;
  hiddenText?: string;
  visibleText?: string;
  tooltip?: ChSearchFormToggleTooltipButton;
}

interface ChSearchFormToggleTooltipButton {
  isInverted: boolean;
  hiddenText?: string;
  visibleText?: string;
  position: string;
  isHtml: boolean;
}

export { ChSearchFormToggleOptions, ChSearchFormToggleButton, ChSearchFormToggleTooltipButton }
