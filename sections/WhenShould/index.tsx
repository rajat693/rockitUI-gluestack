import { VStack, Heading, HStack, Box, Container, Card } from "@/components";
import Image from "next/image";
import { whenShouldData } from "./data";

export default function WhenShouldSection() {
  return (
    <>
      <Box
        position="absolute"
        right={0}
        sx={{
          "@base": {
            display: "none",
          },
          "@xl": {
            display: "flex",
          },
        }}
      >
        <Image
          src="/images/right2.png"
          alt="right_triangle_2_Img"
          width={120}
          height={250}
        />
      </Box>
      <Container>
        <VStack
          position="relative"
          alignItems="center"
          sx={{
            "@base": {
              mt: "$16",
            },
            "@lg": {
              mt: "$32",
            },
          }}
        >
          <Heading
            color="$black100"
            textAlign="center"
            sx={{
              "@base": {
                fontSize: "$2xl",
                lineHeight: "$3xl",
                mb: "$8",
              },
              "@lg": {
                fontSize: "$4xl",
                lineHeight: "$4xl",
                mb: "$12",
                width: "500px",
              },
            }}
          >
            When should you do Staff Augmentation?
          </Heading>

          <HStack
            sx={{
              "@base": {
                flexDirection: "column",
                gap: "$10",
                px: "$2",
              },
              "@lg": {
                px: "$6",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "$16",
                maxWidth: "1170px",
              },
            }}
          >
            {whenShouldData.map((item) => {
              return (
                <Card key={item.id}
                  color={item.color}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
            
          </HStack>
        </VStack>
      </Container>
    </>
  );
}
