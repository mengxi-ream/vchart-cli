import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { icons } from "lucide-react";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),

  icon(icon) {
    if (icon && icon in icons)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return createElement(icons[icon as keyof typeof icons]);
  },
});
