"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a success response.
  console.log("New contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  if (email.includes("error")) {
    return {
        message: "This is a simulated error. Please try again.",
        success: false,
    }
  }


  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
