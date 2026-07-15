// ── Файл территории «Урал» (Свердловская обл. + ЯНАО) ───────────────────────
// Worker территории ещё не создан: PUSH_WORKER_URL пуст — web-push и
// watchlist-синхронизация отключены (app.js это понимает и не фолбэчит на
// ХМАО-Worker). После создания Worker'а вписать его URL и VAPID public key.
window.REGION_FRONT = {
  PUSH_WORKER_URL: '',
  VAPID_PUBLIC_KEY: '',
  // Подпись региона в шапке до первого прогона (данные пока пусты).
  REGION_LABEL: 'ЕКБ + ЯНАО',
};
