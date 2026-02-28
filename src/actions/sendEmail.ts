'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmailAction(formData: z.infer<typeof contactSchema>) {
  try {
    const validatedData = contactSchema.parse(formData);

    if (!process.env.RESEND_API_KEY) {
      console.warn("API Key manquante, simulation d'envoi réussie.");
      // Mode Dev si pas de clé API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    }

    const { data, error } = await resend.emails.send({
      from: 'Cuisine Sen <onboarding@resend.dev>', // A modifier avec un vrai domaine vérifié plus tard
      to: 'contact@cuisine-sen.com', // Adresse de réception
      subject: `Nouvelle Commande de ${validatedData.name}`,
      text: `
        Nouvelle commande reçue depuis le site web :
        
        Nom : ${validatedData.name}
        Téléphone : ${validatedData.phone}
        Email : ${validatedData.email}
        
        Message / Commande :
        ${validatedData.message}
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Erreur lors de la validation ou de l'envoi." };
  }
}
