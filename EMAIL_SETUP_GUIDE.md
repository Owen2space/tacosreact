# Contact Form Email Setup Guide

The contact form is configured to send emails to:
- **tacostechnologies@gmail.com** (primary)
- **info@tacostechnologies.com** (secondary)

## Setup Instructions

### Option 1: Using Resend (Recommended - Free & Easy)

1. **Sign up for Resend** (Free tier includes 3,000 emails/month)
   - Go to: https://resend.com
   - Create a free account

2. **Get your API Key**
   - After signing in, go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Create `.env.local` file** in the project root:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   RESEND_FROM_EMAIL=noreply@tacostechnologies.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Verify your domain** (for production):
   - In Resend dashboard, add your domain (tacostechnologies.com)
   - Add the DNS records they provide
   - Once verified, update `RESEND_FROM_EMAIL` to use your domain

5. **Restart the dev server**:
   ```bash
   npm run dev
   ```

### Option 2: Testing Without Email Service

The form will work without an API key during development:
- Form submissions will be logged to the console
- Users will see a success message
- No actual emails will be sent

To test:
1. Fill out the contact form
2. Check the terminal/console for the logged data
3. Set up Resend when ready for production

## Current Configuration

- **Recipients**: tacostechnologies@gmail.com, info@tacostechnologies.com
- **Reply-To**: User's email from the form
- **Subject**: "New Contact Form Submission - [Service Selected]"
- **Content**: Formatted HTML email with all form details

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify the API route is accessible at `/api/contact`
- Check terminal for error messages

### Emails not arriving?
- Verify RESEND_API_KEY is set correctly
- Check Resend dashboard for delivery status
- Verify domain is verified in Resend
- Check spam folder

### For Production Deployment

When deploying to Cloudflare Pages or Vercel:
1. Add environment variables in the hosting platform dashboard
2. Make sure to verify your domain in Resend
3. Update `NEXT_PUBLIC_SITE_URL` to your production URL
4. Test the form after deployment

## Support

For issues with:
- **Resend**: https://resend.com/docs
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Contact Form**: Check the code in `app/api/contact/route.ts`
