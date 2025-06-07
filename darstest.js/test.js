console.log("===== EXECUTE =====");

// DEFINE
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng bololmaydi", null);
  } else {
    callback(null, a % b);
  }
}

// CALL
qoldiqliBolish(10, 0, (err, data) => {
  if (err) console.log("Error:", err);
  else {
    console.log("data:", data);
  }
});