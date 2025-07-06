FROM node:18-slim
 
WORKDIR /app
 
# Set environment before anything else
ENV ROLLUP_NO_NATIVE=true
 
# Install build dependencies (in case needed for esbuild)
RUN apt-get update && apt-get install -y \
    build-essential \
&& rm -rf /var/lib/apt/lists/*
 
# Copy and install dependencies
COPY package*.json ./
 
# Clean up node_modules and package-lock.json before install
RUN rm -rf node_modules package-lock.json
 
# Install dependencies, use --legacy-peer-deps to avoid peer dependency issues
RUN npm install --legacy-peer-deps

RUN npm install emailjs-com

 
# Install vite globally
RUN npm install -g vite
 
# Copy project source
COPY . .
 
# Expose the port Vite runs on (default is 5173)
EXPOSE 5173
 
# Run Vite in dev mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
 