import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack"

export default function routes() {
    return(
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    )
}