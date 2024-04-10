import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function BackgroundShape(props) {
  return (
    <Svg
      width={430}
      height={325}
      viewBox="0 0 430 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1078_91)">
        <Path fill="#fff" d="M0 0H430V932H0z" />
        <Path
          d="M633-92c0 230.303-186.697 417-417 417S-201 138.303-201-92s186.697-417 417-417S633-322.303 633-92z"
          fill={props.fade ? '#F6EEE3' : '#FAA718'}
        />
        <Path
          d="M526-166.5C526 62.974 339.974 249 110.5 249S-305 62.974-305-166.5-118.974-582 110.5-582 526-395.974 526-166.5z"
          fill={props.fade ? '#F6E0B7' : '#F8B33B'}
        />
        <Path
          d="M470-333c0 301.548-244.453 546-546 546S-622-31.452-622-333c0-301.547 244.453-546 546-546s546 244.453 546 546z"
          fill={props.fade ? '#F5D598' : '#F7BC56'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1078_91">
          <Path fill="#fff" d="M0 0H430V932H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BackgroundShape;
