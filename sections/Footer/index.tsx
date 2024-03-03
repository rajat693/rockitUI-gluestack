import { Text, HStack, Container, Divider } from "@/components";
import LeftFooter from "./Left";
import RightFooter from "./Right";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#0c1e31" }}>
      <Container>
        <HStack
        sx={{
          "@base": {
              flexDirection: "column",
          },
          "@lg": {
              flexDirection: "row",
              py: "$20"
          },
        }}
        >
          <LeftFooter />
          <Divider
            bg="$gray0"
            sx={{
              "@base": {
                w: "$full",
                height: '$px',
                width: '100%',
              },
              "@lg": {
                width: '$px',
                height: '400px',
              },
            }}
            />
          <RightFooter />
        </HStack>
        <Text color="$gray50" fontWeight="$medium"
        sx={{
          "@base": {
              fontSize: "$2xs",
              lineHeight: '$xl',
              alignItems: "center",
              textAlign: "center",
              pb: "$2",
          },
          "@lg": {
              fontSize: '$sm',
              lineHeight: '$3xl',
              ml: "$15",
              pb: "$7",
              textAlign: "left",
          },
        }}
        >
          Copyright © 2021 rockIT - All Rights Reserved.
        </Text>
      </Container>
    </div>
  );
}
