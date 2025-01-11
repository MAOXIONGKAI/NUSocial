import {useContext} from "react";
import {SnackBarContext} from "../contexts/SnackBarContext.tsx";
import SnackBarConfig from "../types/SnackBarConfig.ts";

type ReturnType = () => void;

// Read from SnackBarContext and returns a nullary function that can
// change the global MUI SnackBar configuration when called
export default function useSnackBar(config: SnackBarConfig): ReturnType {
    const showSnackBar = useContext(SnackBarContext);
    if (!showSnackBar) {
        return () => {
        };
    }
    return () => showSnackBar(config);
}
