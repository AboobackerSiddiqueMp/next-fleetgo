export const styles = {
  /* =========================
     ✅ General styles
  ========================= */
  maxWidth: "max-w-[1440px] mx-auto",
  paddingX: "sm:px-16 px-6",
  paddingY: "py-4",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
  customBtn:
    "flex flex-row relative justify-center items-center py-3 px-6 outline-none",

  /* =========================
     ✅ Hero styles
  ========================= */
  hero: "flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto",

  heroTitle: "2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold",

  heroSubtitle: "text-[27px] font-light mt-5",

  heroImageContainer:
    "xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen",

  heroImage: "relative xl:w-full w-[90%] xl:h-full h-[590px] z-0",

  heroImageOverlay:
    "absolute xl:-top-24 xl:-right-1/2 -right-1/4 -z-10 w-full xl:h-screen h-[590px] overflow-hidden",

  /* =========================
     ✅ Home styles
  ========================= */
  homeTextContainer:
    "flex flex-col items-start justify-start gap-y-2.5",

  homeFilters: "mt-12 w-full flex justify-between items-center flex-wrap gap-5",

  homeFilterContainer: "flex justify-start flex-wrap items-center gap-2",

  homeCarsWrapper:
    "grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14",

  homeErrorContainer: "mt-16 flex justify-center items-center flex-col gap-2",

  /* =========================
     ✅ Car Card styles
  ========================= */
  carCard:
    "flex flex-col p-6 justify-center items-start rounded-3xl hover:bg-white hover:shadow-md transition",

  carCardContent: "w-full flex justify-between items-start gap-2",

  carCardTitle: "text-[22px] leading-[26px] font-bold capitalize",

  carCardPrice: "flex mt-6 text-[32px] leading-[38px] font-extrabold",

  carCardPriceDollar: "self-start text-[14px] leading-[17px] font-semibold",

  carCardPriceDay: "self-end text-[14px] leading-[17px] font-medium",

  carCardImage: "relative w-full h-40 my-3 object-contain",

  carCardIconContainer:
    "flex group-hover:invisible w-full justify-between",

  carCardIcon: "flex flex-col justify-center items-center gap-2",

  carCardIconText: "text-[14px] leading-[17px]",

  carCardBtnContainer: "hidden group-hover:flex absolute bottom-0 w-full z-10",

  /* =========================
     ✅ Car Details styles
  ========================= */
  carDetailsDialogPanel:
    "relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5",

  carDetailsCloseBtn:
    "absolute top-2 right-2 z-10 w-fit p-2 rounded-full",

  carDetailsMainImage:
    "relative w-full h-40 bg-cover bg-center rounded-lg",

  /* =========================
     ✅ Custom Filter styles
  ========================= */
  customFilterBtn:
    "relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border",

  customFilterOptions:
    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",

  /* =========================
     ✅ Footer styles
  ========================= */
  footer: "flex flex-col mt-5 border-t border-gray-100",

  footerLinksContainer:
    "flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10",

  footerRights: "flex flex-col justify-start items-start gap-6",

  footerLinks:
    "flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20",

  footerLink: "flex flex-col gap-6 text-base min-w-[170px]",

  footerCopyrights:
    "flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10",

  footerCopyrightsLink:
    "flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10",

  /* =========================
     ✅ Searchbar styles
  ========================= */
  searchbar:
    "flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl",

  searchbarItem: "flex-1 max-sm:w-full flex justify-start items-center relative",

  searchbarInput:
    "w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm",

  /* =========================
     ✅ Search manufacturer styles
  ========================= */
  searchManufacturer:
    "flex-1 max-sm:w-full flex justify-start items-center",

  searchManufacturerInput:
    "w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-sm",

  searchManufacturerOptions:
    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",

  searchManufacturerOption:
    "cursor-default select-none py-2 pl-10 pr-4",
};
