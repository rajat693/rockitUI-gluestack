import { VStack, Box, Heading, Text, HStack, Container, BenefitsCard } from "@/components";
import { benefitsData } from "./data";

export default function BenefitsSection() {
    return (
      <Container>
        <VStack alignItems='center'
        sx={{
          "@base": {
            mt: "$20"
          },
          "@lg": {
            mt: "$32"
          },
        }}
        >
        <Heading mb="$12" color='$black100' textAlign="center"
        sx={{
          "@base": {
              fontSize: "$2xl",
              lineHeight: '2xl',
              mb: "$8",
          },
          "@lg": {
              fontSize: '$4xl',
              lineHeight: '$4xl',
              mb: "$12",
          },
        }}
        >
          Benefits of Staff Augmentation
        </Heading>

        <HStack
        sx={{
          "@base": {
              flexDirection: "column",
              gap: "$10",
          },
          "@lg": {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$16",
            maxWidth: "1170px",
          },
          "@xl": {
            gap: "$24",
          }
        }}
        >
          {benefitsData.map((item) => {
            return (
              <div key={item.id}>
                <BenefitsCard 
                  gradientColor={item.gradientColor}
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  description={item.description}
                />
              </div>
            )
          })}

        </HStack>
      </VStack>
      </Container>
    )
}