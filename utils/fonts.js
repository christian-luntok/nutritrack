/**

=========================================================
** Fonts Functions
=========================================================

**/

import { Inter as createInter } from "@next/font/google";

export const inter = createInter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-body"
});
