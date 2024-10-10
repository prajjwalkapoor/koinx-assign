# Cryptocurrency Data API

## Overview

This API provides real-time cryptocurrency data and statistics. It fetches data from the CoinGecko API for Bitcoin, Ethereum, and Polygon (MATIC), stores it in a MongoDB database, and offers endpoints to retrieve the latest statistics and calculate price deviations.

## Base URL

All API requests should be made to the following base URL:
`https://koinx-assign-tegj.onrender.com/api/`

## Endpoints

### 1. Get Cryptocurrency Statistics

Retrieve the latest statistics for a specific cryptocurrency.

- **URL:** `/stats`
- **Method:** GET
- **Query Parameters:**
  - `coin` (required): The ID of the cryptocurrency (e.g., "bitcoin", "ethereum", "matic-network")
- **Response:**
  json
  {
  "price": 50000,
  "marketCap": 1000000000000,
  "24hChange": 2.5
  }

### 2. Get Cryptocurrency Price Deviation

Calculate and retrieve the standard deviation of the cryptocurrency's price based on the last 100 data points.

- **URL:** `/deviation`
- **Method:** GET
- **Query Parameters:**
  - `coin` (required): The ID of the cryptocurrency (e.g., "bitcoin", "ethereum", "matic-network")
- **Response:**
  json
  {
  "deviation": 1234.56
  }

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. In case of an error, the response will include a JSON object with an `error` field describing the issue.

Example error response:

json
{
"error": "Cryptocurrency not found"
}

## Data Update Schedule

The API automatically updates cryptocurrency data every 2 hours using a background job. This ensures that the stored data remains current and relevant.
