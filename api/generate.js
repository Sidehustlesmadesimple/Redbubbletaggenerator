<script>
async function generate() {
  const keyword = document.getElementById("keyword").value;

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword })
    });

    const data = await response.json();

    if (!response.ok) {
      document.getElementById("output").innerText =
        "Error: " + JSON.stringify(data);
      return;
    }

    document.getElementById("output").innerText = data.result;

  } catch (err) {
    document.getElementById("output").innerText =
      "Request failed: " + err.message;
  }
}
</script>
