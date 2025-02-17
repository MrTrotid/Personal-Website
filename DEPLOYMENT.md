# Deployment Guide

## Cloudflare Pages Setup

1. Log in to your Cloudflare account
2. Go to Pages > Create a project
3. Connect your GitHub repository
4. Configure the build settings:
   - Framework preset: None
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18

## DNS Configuration

1. Go to your domain's DNS settings in Cloudflare
2. Add the following records:
   - Type: CNAME
   - Name: @ (or www)
   - Target: your-pages-project.pages.dev
   - Proxy status: Proxied

## Environment Variables (if needed)

Add any required environment variables in the Cloudflare Pages project settings:
1. Go to Pages > Your project > Settings > Environment variables
2. Add variables for different environments (production/preview)

## Deployment

- The site will automatically deploy when you push to the main branch
- You can also trigger manual deployments from the Cloudflare Pages dashboard
