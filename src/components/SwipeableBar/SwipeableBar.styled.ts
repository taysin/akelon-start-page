import styled from "styled-components";
import { Props, BreakpointAndWidthPair } from "./types";

const HidedScrollBar = styled.div`
  &::-webkit-scrollbar {
    width: 0 !important;
    background: transparent;
  }

  & {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
`;

const Swipeable = styled(HidedScrollBar)<Props>((props: Props) => {
  let styles: any = {};

  props.breakpoints &&
    props.breakpoints.forEach((pair: BreakpointAndWidthPair) => {
      styles[`@media (max-width: ${pair[0]}px)`] = {
        width: `${pair[1]}px`
      };
    });

  return styles;
});

export default Swipeable;
