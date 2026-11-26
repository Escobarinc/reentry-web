// Napojení checklistu na Firebase.
// DOČASNĚ (od 27. 11. 2026): projekt milan-workspace, složky s předponou "reentry_".
// Kolem 27. 12. 2026 přestěhovat do vlastního projektu REENTRY (viz MASTERPLAN.md).
// Tyto údaje nejsou tajné, jsou to veřejné identifikátory webové aplikace.
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAhWOdpZ1_ZLJbBS0_kchGpY0WERcEMINs',
  authDomain: 'milan-workspace.firebaseapp.com',
  projectId: 'milan-workspace',
  storageBucket: 'milan-workspace.firebasestorage.app',
  messagingSenderId: '406113320705',
  appId: '1:406113320705:web:573b4e18a18c2440556500',
};

// Názvy složek v databázi (předpona, aby se nemíchaly s ostatními daty workspace).
export const COLLECTIONS = { items: 'reentry_checklist', extra: 'reentry_checklist_extra' };

// Bez přihlášení: kdo má odkaz, může číst i psát.
export const REQUIRE_LOGIN = false;
