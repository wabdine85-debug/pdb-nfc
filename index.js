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

// PORT für Render
app.listen(process.env.PORT || 3000);
