import { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const geceModuAc=()=>{

    const[modeValue,setModeValue]=localStorageKullan("mode",true);
    //setModeValue(!modeValue);
    return [modeValue,setModeValue];
};