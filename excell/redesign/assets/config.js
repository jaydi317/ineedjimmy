/*
  EXCELL SITE SETTINGS
  Fill these in when we have them. Empty = the site shows a marked placeholder.
  No passwords or patient information ever go in this file.
*/
window.EXCELL_CONFIG = {
  bookUrl: "https://practice.chirotouch.com/portal/ExcellSportsChiropracticRehab",
  phoneDisplay: "(317) 661-3478",
  phoneTel: "+13176613478",

  // Patient app. iPhone link found on the App Store (developer: Marcus McCray), Doc to confirm.
  appIphoneUrl: "https://apps.apple.com/us/app/excell-sports-chiropractic/id6444155919",
  appAndroidUrl: "",            // PLACEHOLDER: Google Play link from Dr. McCray
  // The QR code points here. This page sends iPhones to the App Store and Androids to Google Play.
  // It only works once the new site is live on excellsportschiro.com.
  appQrTarget: "https://excellsportschiro.com/app",
  appLinksConfirmed: false,     // set true once Doc confirms both links, then the sign can be printed

  // Google reviews. Rating + review count are read live from Google on every page load.
  // Needs: a browser key restricted to excellsportschiro.com, with a hard daily cap in Google Cloud.
  googleMapsKey: "",            // PLACEHOLDER: Jimmy adds (never commit a key without a website restriction)
  googlePlaceId: "",            // PLACEHOLDER: the clinic's Google Place ID
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Excell+Sports+Chiropractic+1315+W+86th+St+Indianapolis",

  // Hello from Dr. McCray. Drop the recording in /audio/ and put its file name here.
  helloAudio: ""                // PLACEHOLDER: e.g. "audio/hello-dr-mccray.m4a"
};
