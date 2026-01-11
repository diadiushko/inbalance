import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

interface BookingRequest {
	name: string;
	phone: string;
	service: string;
	message?: string;
}

const serviceLabels: Record<string, string> = {
	consultation: 'Консультація',
	massage: 'Масаж',
	rehabilitation: 'Реабілітація',
	other: 'Інше'
};

export const POST: RequestHandler = async ({ request }) => {
	const body = (await request.json()) as BookingRequest;

	const { name, phone, service, message } = body;

	if (!name?.trim() || !phone?.trim()) {
		return json({ error: 'Name and phone are required' }, { status: 400 });
	}

	const text = `
🆕 *Нова заявка з сайту*

👤 *Ім'я:* ${escapeMarkdown(name)}
📱 *Телефон:* ${escapeMarkdown(phone)}
📋 *Послуга:* ${serviceLabels[service] || service}
${message ? `💬 *Коментар:* ${escapeMarkdown(message)}` : ''}

📅 _${new Date().toLocaleString('uk-UA')}_
	`.trim();

	const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = env;

	if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
		console.log('Telegram credentials not configured. Booking received:', { name, phone, service, message });
		return json({ success: true, message: 'Booking received (Telegram not configured)' });
	}

	try {
		const response = await fetch(
			`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text,
					parse_mode: 'Markdown'
				})
			}
		);

		if (!response.ok) {
			const error = await response.text();
			console.error('Telegram API error:', error);
			return json({ error: 'Failed to send notification' }, { status: 500 });
		}

		return json({ success: true });
	} catch (error) {
		console.error('Telegram API error:', error);
		return json({ error: 'Failed to send notification' }, { status: 500 });
	}
};

const escapeMarkdown = (text: string): string => {
	return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
};
