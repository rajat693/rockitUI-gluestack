import { VStack, Box, Text } from "@/components/core";
import Image from "next/image";

export function BenefitsCard({description, imgSrc, imgAlt, gradientColor}:any) {
    return (
        <VStack
          sx={{
            "@base": {
              width: "100%",
              mx: "auto",
              px: "$4",
            },
            "@sm": {
              width: "300px",
            },
          }}
          >
            <Box position="relative" width={50} height={50} alignSelf='center' borderRadius="$full" mb="$4"
            style={{background: gradientColor=='pink' ? "radial-gradient( #fee2ec, transparent)" : gradientColor=='yellow' ? "radial-gradient( #f7eebf, transparent)" : gradientColor=='blue' ? "radial-gradient( #c5f7f5, transparent)" : "radial-gradient( #efdbfe, transparent)"}}
            >
              <Box position="absolute" top="$4" right="$4">
                <Image src={imgSrc} alt={imgAlt} width={50} height={50} />
              </Box>
            </Box>
            <Text textAlign='center' color='$black200' fontWeight='normal'  
            sx={{
              "@base": {
                  fontSize: "$xs",
                  lineHeight: '$md',
              },
              "@lg": {
                  fontSize: '$xl',
                  lineHeight: '$xl',
              },
            }}
            >
              {description}
            </Text>
          </VStack>
    )
}