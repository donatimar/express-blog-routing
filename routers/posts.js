const express = require("express");
const router = express.Router();

let posts = [
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

// Index
router.get("/", (req, res) => {
  res.json({ posts, postCount: posts.length });
});

// Show
router.get("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  res.json(posts[index]);
});

// Create
router.post("/", (req, res) => {
  const { titolo, contenuto, immagine, tags } = req.body;
  const newPost = { titolo, contenuto, immagine, tags };
  posts.push(newPost);
  res.json(newPost);
});

// Update
router.put("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { titolo, contenuto, immagine, tags } = req.body;
  const updatedPost = { titolo, contenuto, immagine, tags };
  posts[index] = updatedPost;
  res.json(updatedPost);
});

// Delete
router.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const deletedPost = posts.splice(index, 1);
  res.json({ message: "Post eliminato", post: deletedPost });
});

module.exports = router;
