import * as emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Configurar com variáveis de ambiente
  emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY
  });

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      req.body
    );
    
    return res.status(200).json({ message: 'Email enviado com sucesso', details: response });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: error.message || 'Erro ao enviar email' });
  }
}
