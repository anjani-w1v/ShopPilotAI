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