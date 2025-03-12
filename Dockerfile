# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the frontend code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "dev"]
