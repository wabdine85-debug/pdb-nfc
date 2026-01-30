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

// Google Review Link – Wiener Feinbäcker Heberer
app.get("/wiener-heberer", (req, res) => {
  res.redirect(
    "https://www.google.com/maps/place/Wiener+Feinbäcker+Heberer/@50.1143255,8.6761161,975m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd0eaefe4ba43d:0xec03923b6a07763!8m2!3d50.1143221!4d8.6786964!16s%2Fg%2F1thsqhmn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
  );
});

// Google Review Link – Café Stadtkind
const cafeStadtkindReview =
  "https://search.google.com/local/writereview?placeid=ChIJ1wbYYwC9vUcRZ6eyF7IKjkw";
app.get("/cafe-stadtkind", (req, res) => {
  track("cafe-stadtkind");
  res.redirect(cafeStadtkindReview);
});

app.get("/test123", (req, res) => {
  track("test123");
  res.send("Test-Event gesendet!");
});

// Google Review Link – Filly Coffee & Sandos
const fillyCoffeeSandosReview =
  "https://search.google.com/local/writereview?placeid=ChIJ3f5dsS29vUcRepHGz5uuqi8";

app.get("/filly-coffee-sandos", (req, res) => {
  track("filly-coffee-sandos");
  res.redirect(fillyCoffeeSandosReview);
});

// Google Review Link – Schmarrnzeit
const schmarrnzeitReview =
  "https://search.google.com/local/writereview?placeid=ChIJ20mNrlu9vUcR_Zw637qjCBI";

// Aufsteller 1
app.get("/schmarrnzeit-1", (req, res) => {
  track("schmarrnzeit-1");
  res.redirect(schmarrnzeitReview);
});

// Aufsteller 2
app.get("/schmarrnzeit-2", (req, res) => {
  track("schmarrnzeit-2");
  res.redirect(schmarrnzeitReview);
});

// Aufsteller 3
app.get("/schmarrnzeit-3", (req, res) => {
  track("schmarrnzeit-3");
  res.redirect(schmarrnzeitReview);
});


// PORT für Render
app.listen(process.env.PORT || 3000);
