import { VStack, Text, HStack, Box, Card } from "@/components";
import Image from "next/image";
import { footerData } from "./data";

export default function LeftFooter() {
  return (
    <VStack px="$15"
    sx={{
      "@base": {
          width: "$full",
          p: "$7",
          pt: "$16",
      },
      "@lg": {
          width: "$1/2",
          px: "$15",
          pt: "$0",
      },
    }}
    >
      <Box position="relative" sx={{
        "@base": {
          width: "103px",
          height: "34px"
        },
        "@lg": {
          width: "159px",
          height: "53px"
        },
      }} >
      <Image src="/images/footer_logo.svg" alt="logo_Img" fill={true} />
      </Box>

      <Text color="$gray50" fontWeight="$normal" size="md"
      sx={{
        "@base": {
            fontSize: "$xs",
            lineHeight: '$xl',
            pt: "$2",
            mb: "$10"
        },
        "@lg": {
            fontSize: "$md",
            lineHeight: '$xl',
            pt: "$6",
            mb: "$15"
        },
      }}
      >
        Where Technical Chaos Meets Excellence.
      </Text>

      <VStack>
        {footerData.map((item) => {
          return (
            <Card key={item.id}
            footer={item.footer}
            source={item.source}
            alt={item.alt}
            description={item.description}
            />
          )
        })}
      </VStack>

      <HStack space="lg" ml="$10"
      sx={{
        "@base": {
            ml: "$6",
            mt: "$4"
        },
        "@lg": {
            ml: "$10",
            mt: "$8"
        },
      }}
      >
        <Box position="relative" sx={{
          "@base": {
            width: "20px",
            height: "20px"
          },
          "@lg": {
            width: "26px",
            height: "26px"
          },
        }} >
          <Image src="/images/linkedin.svg" alt="linkedIn_Img" fill={true} />
        </Box>

        <Box position="relative" sx={{
          "@base": {
            width: "20px",
            height: "20px"
          },
          "@lg": {
            width: "26px",
            height: "26px"
          },
        }} >
          <Image src="/images/facebook.svg" alt="facebook_Img" fill={true} />
        </Box>
  
      </HStack>
    </VStack>
  );
}