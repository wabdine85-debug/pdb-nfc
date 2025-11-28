import express from "express";
import fetch from "node-fetch";

const app = express();

// GA4 DATA
const GA_MEASUREMENT_ID = "G-FY5LDWLZTE";
const GA_API_SECRET = "523n1Nm0SbWjuvUgWPw5Ug";

// GA4 Tracking Funktion
function track(routeName) {
  fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
    {
      method: "POST",
      body: JSON.stringify({
        client_id: "pdb-nfc-redirect",
        events: [
          {
            name: "nfc_hit",
            params: {
              tag: routeName,
              timestamp: Date.now()
            }
          }
        ]
      })
    }
  ).catch((err) => console.error("GA4 Event Error:", err));
}

// Google Review Link
const haseReview =
  "https://search.google.com/local/writereview?placeid=ChIJaVo3xfy9vUcRc0bQwHzOFkc&forceDesktop=true";

// 👉 **NEU**: Route für UptimeRobot (GET /)
app.get("/", (req, res) => {
  res.send("OK");
});

// 👉 **NEU**: HEAD-Route für UptimeRobot (HEAD /)
app.head("/", (req, res) => {
  res.status(200).end();
});

// 5 NFC-Aufsteller / 5 Tracking-Events
app.get("/hase1", (req, res) => {
  track("hase1");
  res.redirect(haseReview);
});

app.get("/hase2", (req, res) => {
  track("hase2");
  res.redirect(haseReview);
});

app.get("/hase3", (req, res) => {
  track("hase3");
  res.redirect(haseReview);
});

app.get("/hase4", (req, res) => {
  track("hase4");
  res.redirect(haseReview);
});

app.get("/hase5", (req, res) => {
  track("hase5");
  res.redirect(haseReview);
});

// Google Review Link – B34 Shisha Bar
const b34Review =
  "https://search.google.com/local/writereview?placeid=ChIJl-VuRHS-vUcR0EetKMUSZaE";
// NFC-Aufsteller DEMO – B34 Shisha Bar
app.get("/b34-demo", (req, res) => {
  track("b34-demo");
  res.redirect(b34Review);
});

// Google Review Link – Pizza Fritze
const pizzaFritzeReview =
  "https://search.google.com/local/writereview?placeid=ChIJw6P92IG9vUcRD9JwtevKfz0";
app.get("/pizza-fritze-demo", (req, res) => {
  track("pizza-fritze-demo");
  res.redirect(pizzaFritzeReview);
});

// Google Review Link – La Maison du Pain
const laMaisonReview =
  "https://search.google.com/local/writereview?placeid=ChIJ5-5_VW69vUcRzR-_JrLfNmc";
app.get("/la-maison-demo", (req, res) => {
  track("la-maison-demo");
  res.redirect(laMaisonReview);
});

// Google Review Link – Wiener Feinbäcker
app.get("/wiener-heberer-review", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Wiener Feinbäcker Heberer Bewertung</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 60px;
            background-color: #f7f7f7;
          }
          h2 { color: #333; }
          a.button {
            display: inline-block;
            margin-top: 20px;
            padding: 14px 28px;
            background: #d9bfa9;
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: bold;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <h2>Wiener Feinbäcker Heberer – Bewertung</h2>
        <p>Tippen Sie unten, um eine Google Bewertung abzugeben.</p>
        <a class="button" href="https://www.google.com/maps/place/Wiener+Feinbäcker+Heberer/@50.1143255,8.6761161,975m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd0eaefe4ba43d:0xec03923b6a07763!8m2!3d50.1143221!4d8.6786964!16s%2Fg%2F1thsqhmn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank">
          ⭐ Jetzt bewerten
        </a>
      </body>
    </html>
  `);
});


// PORT für Render
app.listen(process.env.PORT || 3000);
