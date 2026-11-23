// ============================================================
//  SHU FAYLNI TAHRIRLANG — butun sayt shu yerdagi ma'lumotdan quriladi.
//  Faqat qo'shtirnoq ichidagi yozuvlarni o'zgartiring.
//  Boshqa fayllarga tegish shart emas.
// ============================================================
const MALUMOT = {
  // Ismingiz va ikki harfli belgi (yuqori chapdagi logotip)
  ism: "Ismingiz Familiyangiz",
  belgi: "IF",

  // Rasm va rezyume fayllari (shu papkaga qo'ying). Bo'lmasa, qoldirib yuboring: ""
  rasm: "rasm.jpg",
  rezyume: "rezyume.pdf",

  // Kasbingiz (qisqa)
  kasb: {
    uz: "Sizning kasbingiz yoki yo'nalishingiz",
    en: "Your profession or field"
  },

  // O'zingiz haqingizda 2-3 gap
  haqida: {
    uz: "Bu yerga o'zingiz haqingizda qisqa yozing: kimsiz, nima bilan shug'ullanasiz, nimani o'rganyapsiz.",
    en: "Write a short text about yourself: who you are, what you do, what you are learning."
  },

  // Ko'nikmalar ro'yxati
  konikmalar: ["Ko'nikma 1", "Ko'nikma 2", "Ko'nikma 3", "Ko'nikma 4"],

  // Loyihalar (kerak bo'lsa ko'paytiring yoki o'chiring)
  loyihalar: [
    {
      nom: "Loyiha nomi",
      tavsif: { uz: "Loyiha haqida bitta gap.", en: "One sentence about the project." },
      havola: "https://github.com/"
    }
  ],

  // Aloqa (kerak bo'lmasa "" qoldiring)
  aloqa: {
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/",
    pochta: "",
    telegram: ""
  }
};
