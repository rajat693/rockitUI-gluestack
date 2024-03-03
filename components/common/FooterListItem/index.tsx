import { Link } from "@/components/core";

export function FooterListItem({txt, path} : any) {
  return (
    <Link href={path} mb="$4">
      <Link.Text
        color="$white50"
        textDecorationLine="none"
        sx={{
          "@base": {
            fontSize: "$sm",
            fontWeight: "$normal",
          },
          "@lg": {
            fontSize: "$md",
            fontWeight: "$medium",
          },
        }}
      >
        {txt}
      </Link.Text>
    </Link>
  );
}
