import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../sevices/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
