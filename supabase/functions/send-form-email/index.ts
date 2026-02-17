import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data } = await req.json();

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    let subject = '';
    let htmlBody = '';

    if (formType === 'partner-agency') {
      subject = `New Partner Request (Travel Agency) - ${data.companyName}`;
      htmlBody = `
        <h2>New Travel Agency Partner Request</h2>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Contact:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `;
    } else if (formType === 'partner-api') {
      subject = `New Partner Request (API Integration) - ${data.companyName}`;
      htmlBody = `
        <h2>New API Integration Partner Request</h2>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Contact:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
      `;
    } else if (formType === 'hotel') {
      subject = `New Hotel Listing Request - ${data.hotelName}`;
      htmlBody = `
        <h2>New Hotel Listing Request</h2>
        <p><strong>Hotel Name:</strong> ${data.hotelName}</p>
        <p><strong>Contact:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Rooms:</strong> ${data.rooms || 'N/A'}</p>
      `;
    } else {
      throw new Error("Invalid form type");
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VasDream Website <onboarding@resend.dev>',
        to: ['project@vasgroup.net'],
        subject,
        html: htmlBody,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      throw new Error(`Email send failed [${emailResponse.status}]: ${JSON.stringify(emailResult)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
