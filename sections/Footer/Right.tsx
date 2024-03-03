import { Box, Text, HStack, VStack, FooterListItem } from "@/components";

export default function RightFooter() {
    return (
        <HStack
        sx={{
            "@base": {
                flexDirection: "column",
                p: "$7",
            },
            "@lg": {
                flexDirection: "row",
                px: "$15",
                pt: "$4"
            },
          }}
        >
            <Box>
                <Text color="$white100" fontWeight="$semibold" size="md">
                    THE COMPANY
                </Text>
        
                <VStack ml="$5"
                sx={{
                    "@base": {
                        mt: "$5",
                    },
                    "@lg": {
                        mt: "$9",
                    },
                  }}
                >
                    <FooterListItem path="/" txt="About Us" />
                    <FooterListItem path="/" txt="Our Work" />
                    <FooterListItem path="/" txt="Services" />
                    <FooterListItem path="/" txt="Solutions" />
                    <FooterListItem path="/" txt="What we do" />
                    <FooterListItem path="/" txt="Blogs" />
                    <FooterListItem path="/" txt="Contact Us" />
                </VStack>
            </Box>

            <Box
            sx={{
                "@base": {
                    mt: "$4",
                },
                "@lg": {
                    ml: "40%",
                    mt: "$0",
                },
              }}
            >
                <Text color="$white100" fontWeight="$semibold" size="md">
                    HIRE US
                </Text>
                
                <VStack ml="$5"
                sx={{
                    "@base": {
                        mt: "$5",
                    },
                    "@lg": {
                        mt: "$9",
                    },
                  }}
                >
                    <FooterListItem path="/" txt="React Developer" />
                    <FooterListItem path="/" txt="React Native Developer" />
                    <FooterListItem path="/" txt="Angular Developer" />
                    <FooterListItem path="/" txt="Laravel Developer" />
                    <FooterListItem path="/" txt="Node Developer" />
                    <FooterListItem path="/" txt="Flutter Developer" />
                    <FooterListItem path="/" txt="UX Designer" />
                    <FooterListItem path="/" txt="Business Analyst" />
                </VStack>
            </Box>
        </HStack>
    )
}