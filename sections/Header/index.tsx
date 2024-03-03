"use client";
import { HStack, Container, Box} from "@/components";
import { useState } from "react";
import Image from "next/image";
import Menu from "./Menu";

export default function Header() {
    const [show, setShow] = useState(false);
    
    return (
        <Container>
            <HStack width={"100%"} pt="$4" m="auto" position="relative" 
            sx={{
                "@base": {
                    flexDirection: "column",
                },
                "@lg": {
                    flexDirection: "row",
                    px: "$6",
                    justifyContent: "space-between",
                },
                "@xl": {
                    px: "$16",
                }
            }}
            style={{boxSizing: "border-box"}}
            >
                
                <Box  sx={{
                    "@base": {
                        display: "none",
                    },
                    "@lg": {
                        display: "flex",
                    }
                }}
                >
                    <Image src="/images/header_logo.svg" alt="logo_Img" width={135} height={45} />
                </Box>

                <Box onClick={()=> setShow(!show)} mx="$4" w="$5" h="$5" mb="$2"
                sx={{
                    "@base": {
                        display: "flex",
                    },
                    "@lg": {
                        display: "none",
                    }
                }}
                >
                { !show ? (
                    <Image src="/images/hamburger.svg" alt="logo_Img" width={20} height={20} />
                ) : (
                    <>
                    <Image src="/images/cross.png" alt="logo_Img" width={18} height={16} />
                    </>
                )}
                </Box>
                
                <Menu show={show}/>
            </HStack>
        </Container>
    )
}