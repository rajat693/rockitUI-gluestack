import { VStack, Box, Heading, Text, Container } from "@/components";
// import { Image } from "@/components";
import Image from "next/image";

export default function WorkSection() {
    return (
        <>
        <Box position="absolute" left={-60}
            sx={{
                "@base": {
                    display: "none",
                },
                "@xl": {
                    display: "flex",
                },
            }} 
            >
                <Image src="/images/left_triangle_2.svg" alt="left_triangle_2_Img" width={250} height={250} />
            </Box>
            {/* <Image size="md" position="absolute" left={0} bottom={230} alt="left_triangle_Img"
                // source={{
                //     uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                // }} 
                // source={require("../../public/images/left_triangle_2.svg")}
                source={require("../../components/assets/images/work_triangle.png")}
            /> */}
        <Container>
        <VStack position='relative' alignItems='center'
        sx={{
            "@base": {
                px: "$4",
                mt: "$16",
            },
            "@lg": {
                px: "$0",
                mt: "$32",
            },
        }}
        >
      
            <Heading color='$black100' textAlign="center"
            sx={{
                "@base": {
                    fontSize: "$2xl",
                    lineHeight: '$3xl',
                    mb: "$8",
                },
                "@lg": {
                    fontSize: '$4xl',
                    lineHeight: '$4xl',
                    mb: "$12",
                },
            }}
            >
                How does it work?
            </Heading>

            <Text color="$black50"
            sx={{
                "@base": {
                    fontSize: "$xs",
                    lineHeight: '$lg',
                    textAlign: "center",
                },
                "@lg": {
                    fontSize: "$2xl",
                    lineHeight: '$3xl',
                    textAlign: "left",
                    maxWidth: "1090px",
                    px: "$6",
                },
            }}
            >
                We commence by analyzing your project scope, expectations and conducting an internal meeting making sure the right set of individuals are placed into the team. After that, we provide you the team as per your project needs and your likings so that you will receive the top-notch business experience and desired results.
            </Text>

            <Text color="$black50"
            sx={{
                "@base": {
                    fontSize: "$xs",
                    lineHeight: '$lg',
                    textAlign: "center",
                    mt: "$6",
                },
                "@lg": {
                    fontSize: "$2xl",
                    lineHeight: '$3xl',
                    textAlign: "left",
                    maxWidth: "1090px",
                    px: "$6",
                    mt: "$10",
                },
            }}
            >
                For hassle-free and effective communication the client will be assigned project managers who will remain in touch with them providing all the latest updates about the ongoing project and estimated time for the completion of the same.
            </Text>
        </VStack>
        </Container>
        </>
    )
}