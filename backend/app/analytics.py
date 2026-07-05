import pandas as pd


def calculate_kpis(df):
    revenue = 0
    profit = 0
    orders = len(df)
    inventory = 0

    if "Price" in df.columns and "Quantity" in df.columns:
        revenue = float((df["Price"] * df["Quantity"]).sum())

    if "Profit" in df.columns:
        profit = float(df["Profit"].sum())

    if "Inventory" in df.columns:
        inventory = float(df["Inventory"].mean())

    return {
        "revenue": round(revenue, 2),
        "profit": round(profit, 2),
        "orders": orders,
        "inventory": round(inventory, 1),
    }


def get_sales_trend(df):

    if (
        "Date" not in df.columns or
        "Price" not in df.columns or
        "Quantity" not in df.columns
    ):
        return []

    df = df.copy()

    df["Revenue"] = df["Price"] * df["Quantity"]

    trend = (
        df.groupby("Date")["Revenue"]
        .sum()
        .reset_index()
    )

    trend["Revenue"] = trend["Revenue"].round(2)

    return [
        {
            "date": row["Date"],
            "revenue": float(row["Revenue"])
        }
        for _, row in trend.iterrows()
    ]


def get_low_inventory(df):

    if (
        "Product" not in df.columns or
        "Inventory" not in df.columns
    ):
        return []

    low_stock = (
        df.groupby("Product")["Inventory"]
        .min()
        .sort_values()
        .head(5)
    )

    return [
        {
            "product": product,
            "inventory": int(stock)
        }
        for product, stock in low_stock.items()
    ]

def calculate_business_score(df):

    score = 100

    if "Profit" in df.columns:
        total_profit = df["Profit"].sum()

        if total_profit < 50000:
            score -= 20

    if "Inventory" in df.columns:
        avg_inventory = df["Inventory"].mean()

        if avg_inventory < 50:
            score -= 15

    if "Quantity" in df.columns:
        total_sales = df["Quantity"].sum()

        if total_sales < 100:
            score -= 15

    score = max(score, 0)

    if score >= 90:
        status = "Excellent"

    elif score >= 75:
        status = "Good"

    elif score >= 60:
        status = "Average"

    else:
        status = "Needs Attention"

    return {
        "score": score,
        "status": status,
    }