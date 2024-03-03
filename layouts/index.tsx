import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Layouts({children}:any) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}