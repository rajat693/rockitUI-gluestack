import { VStack, Box, Heading, Text, Button, Container, Link } from "@/components";
import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            <Box position="absolute" left={-40} top={270} 
            sx={{
                "@base": {
                    display: "none",
                },
                "@xl": {
                    display: "flex",
                },
            }}
            >
                <Image src="/images/left_triangle.svg" alt="left_triangle_Img" width={200} height={200} />
            </Box>
            <Box position="absolute" right={0} top={400} 
            sx={{
                "@base": {
                    display: "none",
                },
                "@xl": {
                    display: "flex",
                },
            }}
            >
                <Image src="/images/right.png" alt="right_triangle_Img" width={130} height={200} />
            </Box>
            
            <Container>
                <VStack flex={1} alignItems='center' position='relative' px="$2"> 
                    <Box position="absolute" left={180} top={150}
                    sx={{
                        "@base": {
                            display: "none",
                        },
                        "@xl": {
                            display: "flex",
                        },
                    }} 
                    >
                        <Image src="/images/cloud.svg" alt="cloud_Img" width={42} height={41} />
                    </Box>
                    <Box position="absolute" right={150} bottom={130} 
                    sx={{
                        "@base": {
                            display: "none",
                        },
                        "@xl": {
                            display: "flex",
                        },
                    }}
                    >
                        <Image src="/images/rocket.svg" alt="rocket_Img" width={46} height={46} />
                    </Box>

                    <Box position="relative" >
                    <Heading
                    sx={{
                        "@base": {
                            fontSize: "$2xl",
                            lineHeight: '$4xl',
                            pt: '$20',
                        },
                        "@lg": {
                            fontSize: "$6xl",
                            lineHeight: '$7xl',
                            pt: '$40',
                        },
                    }}
                    >
                        Staff Augmentation
                    </Heading>
                    
                    <Box position="absolute" left={235} bottom={170} 
                    sx={{
                        "@base": {
                            display: "none",
                        },
                        "@lg": {
                            display: "flex",
                        },
                    }}
                    >
                        <Image src="/images/sun2.png" alt="sun_Img" width={48} height={48} />
                    </Box>
                    </Box>

                    <Text color="$black50" fontWeight="$normal" textAlign='center' mt="$4" 
                    sx={{
                        "@base": {
                            fontSize: "$sm",
                            lineHeight: '$lg',
                            mb: "$12",
                            px: "$2",
                        },
                        "@lg": {
                            px: "$0",
                            fontSize: '$2xl',
                            lineHeight: '$3xl',
                            w: "765px",
                            mb: "$16",
                        },
                    }}
                    >
                        Staff augmentation is a powerful tool for any organization’s arsenal, but not many understand the different types of staff augmentation and how to choose the right model. This is the perfect place to get started.
                    </Text>

                    <Link href="/hire-us" >
                        <Button variant="solid" bg="$violet50" 
                        sx={{
                            "@base": {
                                p: "$6",
                                borderRadius: "$xl",
                            },
                            "@lg": {
                                p: "$7",
                                borderRadius: "$2xl",
                            },
                        }}
                        >
                            <Button.Text fontWeight="$semibold" textDecorationLine="none"
                            sx={{
                                "@base": {
                                    fontSize: "$md",
                                },
                                "@lg": {
                                    fontSize: "$xl",  
                                },
                            }}
                            >Hire Us</Button.Text>
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </>
    )
}
