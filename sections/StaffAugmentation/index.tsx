import { VStack, Box, Heading, Text, HStack } from "@/components";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function StaffAugmentationSection() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
        };
    
        // Attach event listener on mount to detect window resize
        window.addEventListener("resize", handleResize);
    
        // Call handleResize initially to set the initial state
        handleResize();
    
        // Clean up the event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    return (
        <VStack flex={1} alignItems='center'>
            <Heading mb="$7" color='$black100' textAlign="center"
            sx={{
                "@base": {
                    fontSize: "$2xl",
                    lineHeight: '$3xl',
                    mt: "$16",
                },
                "@lg": {
                    fontSize: "$4xl",
                    lineHeight: '$4xl',
                    mt: "$28",
                },
            }} 
            >
            What is a Staff Augmentation?
            </Heading>

            <Text color="$black50" textAlign='center'
            sx={{
                "@base": {
                    fontSize: "$sm",
                    lineHeight: '$lg',
                    px: "$4",
                },
                "@lg": {
                    fontSize: '$2xl',
                    lineHeight: '$2xl',
                    w: "870px",
                },
            }}
            >
            A dedicated development team is a concept of hiring dedicated developers and tech enthusiasts for a particular project; it can be for a short period or a long term.
            </Text>

            <HStack 
            sx={{
                "@base": {
                    mt: "$10",
                    flexDirection: "column",
                    px: "$4",
                },
                "@lg": {
                    maxWidth: "1170px",
                    mt: "$28",
                    flexDirection: "row",
                    px: "$6",
                    gap: "$20",
                },
                "@xl": {
                    gap: "$32",
                }
            }}
            >
            <Text color="$black50"
            sx={{
                "@base": {
                    width: "100%",
                    fontSize: "$xs",
                    lineHeight: '$lg',
                    flexDirection: "column",
                    textAlign: "center",
                },
                "@lg": {
                    fontSize: '$2xl',
                    lineHeight: '$2xl',
                    width: "47%",
                    flexDirection: "row",
                    textAlign: "left",
                },
            }}
            style={{ order: isSmallScreen ? "1" : "-1",}}
            >
                This team of specialists and technical experts are screened, interviewed, and managed by the client. The client itself will decide the final team members and not just that; they can also add or remove the teammates as per their project requirements or needs.
            </Text>
 
            <Box position='relative' 
            style={{ background: "linear-gradient(to right bottom, #fbf9e8, #f9e6f2)" }}
            sx={{
                "@base": {
                    width: "228px",
                    height: "228px",
                    borderRadius: "$4xl",
                    alignSelf: "flex-end",
                    mr: "$4",
                    mb: "$4",
                },
                "@lg": {
                    width: "310px",
                    height: "300px",
                    borderRadius: "$4xl",
                    ml: "$10",
                },
            }}
            >
                <Box position="absolute" right="$8" bottom="$7" 
                sx={{
                    "@base": {
                        display: "flex",
                    },
                    "@lg": {
                       display: "none",
                    },
                }}
                // style={{order: isSmallScreen ? "-1" : "1", }}
                >
                    <Image src="/images/meeting2.svg" alt="meeting_Img" width={223} height={223} />
                </Box>

                <Box position="absolute" left="$7" bottom="$7" 
                sx={{
                    "@base": {
                        display: "none",
                    },
                    "@lg": {
                       display: "flex",
                    },
                }}
                // style={{order: isSmallScreen ? "-1" : "1", }}
                >
                    <Image src="/images/meeting.svg" alt="meeting_Img" width={407} height={348} />
                </Box>

            </Box>
            
            </HStack>

        </VStack>
    )
}