import { merge } from "lodash";
import { darkTheme, lightTheme } from "./allthemes";

import { DefaultTheme } from "./defaultTheme";


export const light = merge(lightTheme, DefaultTheme);
export const dark = merge(darkTheme, DefaultTheme);
