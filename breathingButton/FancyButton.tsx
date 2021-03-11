import styled from "styled-components";
import { keyframes } from "styled-components";
import React = require("react");
import { DefaultButton, loadTheme } from "@fluentui/react";

loadTheme({
  palette: {
    themePrimary: "#ff0000",
    themeLighterAlt: "#fff5f5",
    themeLighter: "#ffd6d6",
    themeLight: "#ffb3b3",
    themeTertiary: "#ff6666",
    themeSecondary: "#ff1f1f",
    themeDarkAlt: "#e60000",
    themeDark: "#c20000",
    themeDarker: "#8f0000",
    neutralLighterAlt: "#000000",
    neutralLighter: "#000000",
    neutralLight: "#000000",
    neutralQuaternaryAlt: "#000000",
    neutralQuaternary: "#000000",
    neutralTertiaryAlt: "#000000",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#000000",
  },
});

const breathing = keyframes`
	0% {
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
	}

	25% {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
	}

	60% {
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
	}

	100% {
		-webkit-transform: scale(0.9);
		-ms-transform: scale(0.9);
		transform: scale(0.9);
	}
    `;

const BreathingButton = styled(DefaultButton)`
  -webkit-animation: ${breathing} 5s ease-out infinite normal;
  animation: ${breathing} 5s ease-out infinite normal;
`;

const MyComponent = () => <BreathingButton primary>Hello World!</BreathingButton>;
export default styled(MyComponent)``;
