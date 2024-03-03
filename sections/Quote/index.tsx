import { Heading, Button, HStack, Link } from "@/components";

export default function QuoteSection() {
    return (
        <HStack bg='$light100' alignItems='center' justifyContent='center'
        sx={{
            "@base": {
                mt: "$16",
                py: "$6",
            },
            "@lg": {
                mt: "$24",
                py: "$12",
            },
        }}
        style={{ background: "linear-gradient(to right top, #f9e6f2, #fbf9e8)" }}
        >
            <Heading fontWeight='$medium' color='$black200'
            sx={{
                "@base": {
                    fontSize: "$md",
                    lineHeight: '$lg',
                    mr: "$4",
                },
                "@lg": {
                    fontSize: "$2xl",
                    lineHeight: '$3xl',
                    mr: "$8",
                },
            }}
            >
                Get a free quote today. 
            </Heading>

            <Link href="https://www.google.com/" isExternal >
            <Button variant="solid" bg="$violet50" borderRadius="$3xl"
            sx={{
                "@base": {
                    px: "$6",
                    py: "$4"
                },
                "@lg": {
                    px: "$10",
                    py: "$7"
                },
            }}
            style={{ boxShadow: "0px 2px 34px 0px rgba(134, 61, 128, 0.60)"}}
            >
                <Button.Text fontWeight='$medium' textDecorationLine="none"
                sx={{
                    "@base": {
                        fontSize: "$sm",
                    },
                    "@lg": {
                        fontSize: "$xl",
                    },
                }}
                >
                    Let's Talk
                </Button.Text>
            </Button>
            </Link>
        </HStack>
    )
}
