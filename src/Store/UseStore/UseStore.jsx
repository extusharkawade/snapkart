import { useContext } from "react";
import { rootStoreContext } from "../RootStoreHook/Index";

export const useStore = () => useContext(rootStoreContext);
