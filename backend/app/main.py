from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from app.analytics import calculate_kpis, get_sales_trend

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "ShopPilot AI Backend Running 🚀"}


@app.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)

    # ---------- KPIs ----------
    kpis = calculate_kpis(df)

    # ---------- Sales Trend ----------
    sales_trend = get_sales_trend(df)

    # ---------- Category Chart ----------
    category_data = []

    if "Category" in df.columns:
        counts = df["Category"].value_counts()

        category_data = [
            {"name": name, "value": int(value)}
            for name, value in counts.items()
        ]

    # ---------- Product Chart ----------
    product_data = []

    if "Product" in df.columns and "Quantity" in df.columns:

        products = (
            df.groupby("Product")["Quantity"]
            .sum()
            .sort_values(ascending=False)
            .head(5)
        )

        product_data = [
            {"name": name, "sales": int(value)}
            for name, value in products.items()
        ]

    # ---------- AI Insights ----------

    best_product = "N/A"
    best_category = "N/A"
    highest_profit_product = "N/A"
    low_inventory = []

    if "Product" in df.columns and "Quantity" in df.columns:
        best_product = (
            df.groupby("Product")["Quantity"]
            .sum()
            .idxmax()
        )

    if "Category" in df.columns and "Quantity" in df.columns:
        best_category = (
            df.groupby("Category")["Quantity"]
            .sum()
            .idxmax()
        )

    if "Product" in df.columns and "Profit" in df.columns:
        highest_profit_product = (
            df.groupby("Product")["Profit"]
            .sum()
            .idxmax()
        )

    if "Inventory" in df.columns:
        low_inventory = (
            df[df["Inventory"] < 30]["Product"]
            .drop_duplicates()
            .tolist()
        )

    insights = [
        f"🏆 Best Selling Product: {best_product}",
        f"🥇 Top Category: {best_category}",
        f"⭐ Highest Profit Product: {highest_profit_product}",
        f"💰 Total Revenue: ₹{round(kpis['revenue']):,}",
        f"📈 Total Profit: ₹{round(kpis['profit']):,}",
    ]

    if low_inventory:
        insights.append(
            f"⚠️ Low Inventory: {', '.join(low_inventory)}"
        )

    insights.append(
        "💡 Recommendation: Restock low inventory products and focus promotions on your best-selling category."
    )

    return {
        "rows": len(df),
        "columns": list(df.columns),
        "total_columns": len(df.columns),
        "numeric_columns": len(df.select_dtypes(include="number").columns),
        "text_columns": len(df.select_dtypes(include="object").columns),

        **kpis,

        "category_data": category_data,
        "product_data": product_data,
        "sales_trend": sales_trend,
        "insights": insights,
    }