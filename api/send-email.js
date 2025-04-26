import { SMTPClient } from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const emailjs = new SMTPClient({
      user: process.env.EMAILJS_USER,
      password: process.env.EMAILJS_PASSWORD,
      host: process.env.EMAILJS_HOST,
      ssl: true,
    });

    const message = await emailjs.send({
      text: `Nome: ${req.body.nome}\nTelefone: ${req.body.telefone}\nEmail: ${req.body.email}\nAssunto: ${req.body.assunto}\nMensagem: ${req.body.mensagem}`,
      from: process.env.EMAILJS_FROM_EMAIL,
      to: process.env.EMAILJS_TO_EMAIL,
      subject: `Contato via site: ${req.body.assunto}`,
    });
    
    return res.status(200).json({ message: 'Email enviado com sucesso', details: message });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: error.message || 'Erro ao enviar email' });
  }
}
