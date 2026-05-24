# AI Model Setup (Gemma)

This project uses the Gemma LLM for AI-powered pitch enhancement and student-job matching.

## Model Used

* Gemma 2B Instruct
* Loaded using HuggingFace Transformers

## Why Local/Colab Inference Was Used

Due to free-tier deployment limitations on platforms like Render and Railway, the Gemma model was executed through Google Colab during testing/demo.

The frontend/backend communicates with the AI model through an API endpoint exposed using ngrok.

## Requirements

Install dependencies:

```bash
pip install transformers torch accelerate flask flask-cors pyngrok
```

## HuggingFace Access

A HuggingFace access token is required.

Set the token as an environment variable:

```bash
HF_TOKEN=your_huggingface_token
```

Or login directly:

```python
from huggingface_hub import login
login("your_token")
```

## Running the AI Server

Start the Flask API:

```bash
python app.py
```

Example endpoint:

```txt
POST /smart-pitch
```

## Example Request

```json
{
  "job": "Need 5 Instagram reels for a cafe in Kolkata",
  "pitch": "I can create engaging food reels using Canva and CapCut."
}
```

## Example Response

```json
{
  "score": 82,
  "issues": ["Pricing could be clearer"],
  "improved_pitch": "Hi! I can create 5 engaging reels...",
  "suggested_price": "₹1800-₹2200",
  "timeline": "3 days"
}
```

## Important Note

The AI model itself is not permanently deployed because of GPU/RAM limitations on free hosting tiers. However, the complete source code, inference pipeline, and setup instructions are fully included in this repository.
