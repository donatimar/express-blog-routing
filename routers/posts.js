const express = require("express");
const router = express.Router();

const posts = [
  {
    titolo: "Il mio primo post",
    contenuto: "Questo è il contenuto del primo post",
    immagine: "/images/ciambellone.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio secondo post",
    contenuto: "Questo è il contenuto del secondo post",
    immagine: "/images/cracker_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio terzo post",
    contenuto: "Questo è il contenuto del terzo post",
    immagine: "/images/pane_fritto_dolce.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quarto post",
    contenuto: "Questo è il contenuto del quarto post",
    immagine: "/images/pasta_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quinto post",
    contenuto: "Questo è il contenuto del quinto post",
    immagine: "/images/torta_paesana.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
];

router.get("/", (req, res) => {
  res.json({ posts, postCount: posts.length });
});

module.exports = router;
