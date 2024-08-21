import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { setDefaultOptions } from "date-fns";
import { id } from "date-fns/locale";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

setDefaultOptions({
  locale: id,
});

createInertiaApp({
  title: (title) => `${appName} | ${title}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    if (import.meta.env.DEV) {
      createRoot(el).render(<App {...props} />);
      return;
    }

    hydrateRoot(el, <App {...props} />);
  },
  progress: {
    color: "#4B5563",
  },
});
