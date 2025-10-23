tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Apple Color Emoji", "Segoe UI Emoji"],
          },
          colors: {
            bg: "#0b0b0c",     // page background
            panel: "#141415",  // cards / panels
          },
          boxShadow: {
            glow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 16px 50px -16px rgba(249,115,22,0.35)",
          },
          dropShadow: {
            soft: "0 25px 35px rgba(0,0,0,0.5)",
          }
        }
      }
    }