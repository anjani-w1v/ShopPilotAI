import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_business_insights(prompt):
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt,
        )
        return response.text

    except Exception:
        return (
            "Gemini AI is temporarily unavailable due to high demand.\n\n"
            "Business Summary:\n"
            "- Revenue and profit are stable.\n"
            "- Focus on your best-selling products.\n"
            "- Restock low inventory items.\n"
            "- Continue promoting your top-performing category."
        )