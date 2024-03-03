import { View } from "react-native";
import { styled } from "@gluestack-style/react";

export const Container = styled(View, {
    "@xs": {
        maxWidth: "100%",
    },
    "@sm": {
        maxWidth: "100%",
    },
    "@md": {
        maxWidth: "100%",
    },
    "@lg": {
        maxWidth: "100%",
        // mx: "auto",
        // px: "$6",
    },
    "@xl": {
        maxWidth: "$360",
        mx: "auto",
        // px: "$15",
    },
});