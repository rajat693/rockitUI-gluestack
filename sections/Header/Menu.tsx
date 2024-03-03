"use client";
import { useState } from "react";
import { Button, VStack, Link, Icon, ChevronDownIcon, ChevronUpIcon, Text } from "@/components";

export default function Menu({show}:any) {
    const [showItems, setShowItems] = useState(false);
    const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
    
    return (
        <VStack pt="$2"
        sx={{
            "@base": {
                display: show ? "flex" : "none",
                width: "100%",
                position: "absolute",
                top: "100%",
                // zIndex: 2,
                // bg: "$white0",
                // bg: "$green",
                // left: show ? "0%" : "100%",
            },
            "@lg": {
                position: "relative",
                width: "78%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }, 
            "@xl": {
                width: "75%",
            }
        }}
        // style={{zIndex: 1}}
        >
                    
                    <VStack flex={1} mt="$3" 
                    sx={{
                        "@base": {
                            flexDirection: "column",
                            // bg: "$blue0",
                        },
                        "@lg": {
                            flexDirection: "row",
                            minWidth: "550px",
                            maxWidth: "650px",
                            justifyContent: "space-between",
                            alignItems: "center", 
                            marginRight: "5%",
                        },
                        "@xl": {
                            maxWidth: "700px",
                            marginRight: "10%",
                        }
                    }}
                    >
                        <Text color="$black100" fontWeight="$semibold" pb="$2" position="relative"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                            style={{ cursor: "pointer" }} 
                            // onMouseEnter={()=> setShowItems(true)}
                            // onMouseLeave={()=> setShowItems(false)}
                            onClick={()=> setShowItems(!showItems)}
                        >
                            What we do 
                            { showItems ? (
                                    <Icon as={ChevronUpIcon} pt="$1" w="$5" h="$5" />
                                ) : (
                                    <Icon as={ChevronDownIcon} pt="$1" w="$5" h="$5" />
                                )
                            }
                            {(isMouseOverDropdown || showItems ) && 
                                <VStack
                                sx={{
                                    "@base": {
                                        display: "none",
                                    },
                                    "@lg": {
                                        display: "flex",
                                        position: "absolute",
                                        bg: "$white0",
                                        top: "$8",
                                        right: "$1", 
                                        width: "175px", 
                                        py: "$2", 
                                        borderRadius: "$xl", 
                                        zIndex: 1,
                                        shadowColor: "$white50",
                                        shadowRadius: "$5",
                                    },
                                }}
                                onMouseEnter={()=> {setIsMouseOverDropdown(true)}}
                                onMouseLeave={()=> {setIsMouseOverDropdown(false)}}
                                // onMouseLeave={()=> setShowItems(false)}
                                >
                                    <Text px="$3.5" py="$1" fontWeight="$medium" 
                                    sx={{
                                        ":hover": {
                                        bg: "$light100",
                                        color: "$violet50",
                                        }
                                    }}
                                    style={{ cursor: "pointer" }}
                                    >Dedicated Team</Text>
                                    <Text px="$3.5" py="$1" fontWeight="$medium"
                                    sx={{
                                        ":hover": {
                                        bg: "$light100",
                                        color: "$violet50",
                                        }
                                    }}
                                    style={{ cursor: "pointer" }}
                                    >Staff Augmentation</Text>
                                </VStack>
                            }
                        </Text>
                        
                        <Link href="/" pb="$2"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                        >
                            <Link.Text color="$black100" textDecorationLine="none" fontWeight="$semibold" >
                                Our Work
                            </Link.Text>
                        </Link>
    
                        <Text color="$black100" fontWeight="$semibold" pb="$2"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                        >
                            Solutions<Icon as={ChevronDownIcon} pt="$1" w="$5" h="$5" />
                        </Text>

                        <Text color="$black100" fontWeight="$semibold" pb="$2"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                        >
                            Services<Icon as={ChevronDownIcon} pt="$1" w="$5" h="$5" />
                        </Text>
                        
                        <Link href="/hire-us" pb="$2"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                        >
                            <Link.Text color="$black100" textDecorationLine="none" fontWeight="$semibold" >
                                Hire Us
                            </Link.Text>
                        </Link>
                        
                        <Text color="$black100" fontWeight="$semibold" pb="$2"
                        sx={{
                            "@base": {
                                borderBottomWidth: "$1",
                                width: "100%",
                                pl: "$3",
                            },
                            "@lg": {
                                width: "fit-content",
                                borderBottomWidth: "$0",
                                pl: "$0",
                            },
                        }}
                        >
                            More<Icon as={ChevronDownIcon} pt="$1" w="$5" h="$5" />
                        </Text>
                    </VStack>

                    <Link href="https://www.google.com/" isExternal
                    sx={{
                        "@base": {
                            width: "90%",
                            maxWidth: "300px",
                            mx: "auto",
                            mt: "$2",
                        },
                        "@lg": {
                            width: "fit-content",
                            mt: "$0",
                        }
                    }}
                    >
                        <Button variant="solid" bg="$blue50" borderRadius="$xl" px="$7" py="$3">
                            <Button.Text fontSize="$md" fontWeight="$semibold" textDecorationLine="none">
                                Let's Talk
                            </Button.Text>
                        </Button>
                    </Link>

                </VStack>
    )
}