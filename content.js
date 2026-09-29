/* ============================================================
   DAMIEN.WORLD — CONTENT FILE  (the only file you edit to add content)
   Each list below is one content type. To add an item: copy one
   {...} line, paste it under the last one, change the words.
   Photos: put the file in the /images folder and write its name
   in img, e.g. img: "images/hen.jpg". Leave img:"" for a placeholder.
   Keep the commas and quote marks exactly as they are.
   ============================================================ */
window.SITE = {
  email: "hello@damien.world", // contact form sends to this address

  animals: [
    { title: "Heritage Poultry", text: "Rare breed hens raised on pasture, with notes on housing, feed and seasonal care.", img: "Heritage Poultry.jpg" },
    { title: "Bees & the Orchard", text: "A working apiary and the fruit trees it keeps alive, season by season.", img: "Bees & the Orchard.jpg" },
    { title: "Small Stock", text: "Daily routines, fencing lessons and the small wins of keeping a mixed herd.", img: "Small Stock.jpg" }
  ],

  books: [
  { title: "The Herdsman's Year", author: "A. Collins", note: "Practical husbandry, month by month.", img: "The Herdsman's Year.jpg" },
  { title: "Field Notes on Bees", author: "L. Miller", note: "Observations on hive behavior.", img: "Field Notes on Bees.jpg" },
  { title: "A Natural History of Birds", author: "R. Thorne", note: "Wild avian species study.", img: "A Natural History of Birds.jpg" },
  { title: "The Small Farm Manual", author: "M. Vance", note: "Essential tools and practices.", img: "The Small Farm Manual.jpg" },
  { title: "Reading the Land", author: "E. Shore", note: "Understanding soil and flora.", img: "Reading the Land.jpg" },
  { title: "Craft of the Printer", author: "J. Mercer", note: "Traditional press technique.", img: "Craft of the Printer.jpg" }
],

  magazines: [
    { title: "Country Life Monthly", year: "1954", note: "Cover restored, spine re-stitched." },
    { title: "The Homestead Journal", year: "1961", note: "Fully scanned and archived." },
    { title: "Popular Mechanics Digest", year: "1948", note: "Awaiting page cleaning." },
    { title: "Farm & Garden Illustrated", year: "1972", note: "Stored in acid-free sleeves." }
  ],

  /* cat must be one of: art, projects, hobbies */
  projects: [
    { title: "Barn Door Restoration", cat: "projects", text: "Salvaged oak, hand-planed and re-hung.", img: "" },
    { title: "Pen & Ink Hens", cat: "art", text: "A series of twelve small drawings.", img: "" },
    { title: "Wood-Fired Bread", cat: "hobbies", text: "A clay oven built from scratch.", img: "" },
    { title: "Seed Library Cabinet", cat: "projects", text: "A catalogue drawer for heirloom seeds.", img: "" },
    { title: "Watercolour Orchard", cat: "art", text: "Studies of the orchard in four seasons.", img: "" },
    { title: "Leather Bookbinding", cat: "hobbies", text: "Rebinding tired favourites by hand.", img: "" }
  ],

  awards: [
    { year: "2024", title: "Regional Heritage Breed Award", by: "County Agricultural Society" },
    { year: "2022", title: "Archive Preservation Commendation", by: "Periodicals Preservation Guild" },
    { year: "2019", title: "Best in Show, Craft & Design", by: "State Fair" },
    { year: "2016", title: "Community Educator of the Year", by: "Local Learning Trust" }
  ]
};
