import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID')

serve(async (req) => {
  const { record } = await req.json() // Mengambil data baru dari tabel contacts

  const message = `
📩 *New Message from Portfolio!*
👤 *Name:* ${record.name}
📧 *Email:* ${record.email}
📌 *Subject* ${record.subject}
💬 *Message:* ${record.message}
  `

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  })

  return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } })
})