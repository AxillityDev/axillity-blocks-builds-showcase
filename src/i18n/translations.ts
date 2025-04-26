
export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      getInTouch: "Get In Touch"
    },
    hero: {
      role: "Minecraft Developer",
      greeting: "Hey, I'm",
      description: "I create immersive experiences and innovative plugins for Minecraft servers.",
      viewWork: "View My Work",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with 💚 using React and Minecraft-inspired design"
    }
  },
  pl: {
    nav: {
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
      getInTouch: "Skontaktuj się"
    },
    hero: {
      role: "Programista Minecraft",
      greeting: "Cześć, jestem",
      description: "Tworzę wciągające doświadczenia i innowacyjne pluginy dla serwerów Minecraft.",
      viewWork: "Zobacz moje prace",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      madeWith: "Stworzone z 💚 przy użyciu React i designu inspirowanego Minecraft"
    }
  }
};

export type Language = 'en' | 'pl';
export type TranslationKey = keyof typeof translations.en;
