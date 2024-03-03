import { HStack, Center, Text } from "@/components/core";
import Image from "next/image";

export function Card({title, description, color, footer, source, alt}: any) {
    return (
        <>
        { footer ? (
            <HStack pb="$4">
                <Image
                    src={source}
                    alt={alt}
                    width={20}
                    height={20}
                />
                <Text color="$white100"
                sx={{
                "@base": {
                    fontSize: "$xs",
                    lineHeight: '$xl',
                    pl: "$3",
                },
                "@lg": {
                    fontSize: "$md",
                    lineHeight: '$xl',
                    pl: "$6",
                },
                }}
                >
                    {description}
                </Text>
            </HStack>
        ) : (
            <HStack
            sx={{
                "@base": {
                width: "100%",
                mx: "auto",
                px: "$4",
                },
                "@sm": {
                px: "$0",
                mx: "0",
                width: "330px",
                flexDirection: "column",
                },
            }}
            >
                <Center width={40} height={40} borderRadius="$lg" mb="$3" mr="$2"
                bgColor={ color=='pink' ? '$pink100' : color=='blue' ? '$blue100' : '$violet100'}>
                    <Text size="xl" fontWeight='semibold' 
                    color={ color=='pink' ? '$pink0' : color=='blue' ? '$blue0' : '$violet0'}>
                        {title}
                    </Text>
                </Center>
                <Text color='$black200' fontWeight='normal'
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
            </HStack>
        )}
        </>
    )
}