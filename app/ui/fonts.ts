import { GeistSans } from "geist/font";
import { Lusitana } from "next/font/google";

export const geist = GeistSans;
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
