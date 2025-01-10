import {createContext} from "react";
import SnackBarConfig from "../types/SnackBarConfig.ts";

type SnackBarContext = (config: SnackBarConfig) => void;

// Provide a global function where user can pass in MUI snackbar configuration
// to customize display info and toggle visibility status of the global MUI snackbar
// component
export const SnackBarContext = createContext<SnackBarContext | null>(null);
