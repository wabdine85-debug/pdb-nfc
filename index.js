import express from "express";
const app = express();

// Dein Direktlink zur Rezension
const haseReview = "https://search.google.com/local/writereview?placeid=ChIJaVo3xfy9vUcRc0bQwHzOFkc&forceDesktop=true";

// 5 individuelle NFC-Links (für die 5 Aufsteller)
app.get("/hase1", (req, res) => res.redirect(haseReview));
app.get("/hase2", (req, res) => res.redirect(haseReview));
app.get("/hase3", (req, res) => res.redirect(haseReview));
app.get("/hase4", (req, res) => res.redirect(haseReview));
app.get("/hase5", (req, res) => res.redirect(haseReview));

// Render Port
app.listen(process.env.PORT || 3000);
