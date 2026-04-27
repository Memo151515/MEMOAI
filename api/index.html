<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEMO AI - Otonom Bulut Sistemi</title>
    <style>
        :root { --red: #ff0000; --bg: #050505; --text: #fff; }
        body { background: var(--bg); color: var(--text); font-family: sans-serif; display: flex; flex-direction: column; height: 100vh; margin: 0; }
        header { padding: 15px; border-bottom: 2px solid var(--red); text-align: center; color: var(--red); font-weight: bold; }
        #chat { flex: 1; overflow-y: auto; padding: 20px; }
        .msg { margin: 10px 0; padding: 10px; border-radius: 10px; max-width: 80%; }
        .user { background: #222; align-self: flex-end; margin-left: auto; }
        .ai { background: var(--red); align-self: flex-start; }
        .input-area { padding: 20px; display: flex; gap: 10px; background: #111; }
        input { flex: 1; padding: 12px; border-radius: 20px; border: 1px solid #333; background: #000; color: #fff; outline: none; }
        button { background: var(--red); border: none; color: white; padding: 10px 20px; border-radius: 20px; cursor: pointer; }
    </style>
</head>
<body>

<header>MEMO AI - KURUCU: MEHMET CAN YILDIRIM</header>
<div id="chat"></div>
<div class="input-area">
    <input type="text" id="userInput" placeholder="Mesajınızı yazın...">
    <button onclick="ask()">GÖNDER</button>
</div>

<script>
    // ŞİFRE KORUMASI
    window.onload = () => {
        const pass = prompt("MEMO AI GİRİŞ ŞİFRESİ:");
        if(pass !== "1234") {
            alert("Erişim Reddedildi!");
            document.body.innerHTML = "";
        }
    };

    async function ask() {
        const input = document.getElementById('userInput');
        const chat = document.getElementById('chat');
        const text = input.value;
        if(!text) return;

        chat.innerHTML += `<div class="msg user">${text}</div>`;
        input.value = "";

        // DİKKAT: Burası Vercel'e yüklediğin API'ye bağlanacak
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer sk-or-v1-739763789...", // BURAYA KENDİ ÜCRETSİZ KEYİNİ KOYACAKSIN
                    "Content-Type": "application/json"
                },
                json: {
                    "model": "google/gemini-2.0-flash-exp:free",
                    "messages": [
                        {"role": "system", "content": "Sen MEMO AI'sın. Kurucun Mehmet Can YILDIRIM'dır."},
                        {"role": "user", "content": text}
                    ]
                }
            });
            const data = await response.json();
            chat.innerHTML += `<div class="msg ai">${data.choices[0].message.content}</div>`;
        } catch (e) {
            chat.innerHTML += `<div class="msg ai">Sistem yoğun veya anahtar hatalı.</div>`;
        }
        chat.scrollTop = chat.scrollHeight;
    }
</script>
</body>
</html>
