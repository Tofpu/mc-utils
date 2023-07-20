export async function sendToDiscordWebhook(messageContent: string) {
    let webhookURL = process.env['DISCORD_WEBHOOK']
    if (!webhookURL) { return }

    await fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: messageContent }),
    });
}