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
        "forecast": sales_forecast(df),
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


def sales_forecast(df):
    """
    Simple 7-day sales forecast using average daily revenue.
    """

    if (
        "Date" not in df.columns or
        "Price" not in df.columns or
        "Quantity" not in df.columns
    ):
        return []

    df = df.copy()

    df["Revenue"] = df["Price"] * df["Quantity"]

    daily = (
        df.groupby("Date")["Revenue"]
        .sum()
        .reset_index()
    )

    avg = daily["Revenue"].mean()

    last_date = pd.to_datetime(daily["Date"]).max()

    forecast = []

    for i in range(1, 8):
        forecast.append({
            "date": (last_date + pd.Timedelta(days=i)).strftime("%Y-%m-%d"),
            "forecast": round(avg, 2)
        })

    return forecast

def get_decision_center(df):

    critical = []
    opportunities = []

    if "Inventory" in df.columns:

        low_stock = df[df["Inventory"] < 50]

        if not low_stock.empty:

            critical.append({
                "title": "Restock Inventory",
                "message": f"{len(low_stock)} products are running low."
            })

    if "Profit" in df.columns:

        if df["Profit"].sum() < 50000:

            critical.append({
                "title": "Increase Profit",
                "message": "Profit is below target. Consider improving pricing or reducing costs."
            })

    if (
        "Category" in df.columns and
        "Quantity" in df.columns
    ):

        top_category = (
            df.groupby("Category")["Quantity"]
            .sum()
            .idxmax()
        )

        opportunities.append({
            "title": "Promote Top Category",
            "message": f"Increase marketing for {top_category}."
        })

    if (
        "Product" in df.columns and
        "Profit" in df.columns
    ):

        best_product = (
            df.groupby("Product")["Profit"]
            .sum()
            .idxmax()
        )

        opportunities.append({
            "title": "Focus on High-Profit Product",
            "message": f"Boost sales of {best_product} to maximize profits."
        })

    return {
        "critical": critical,
        "opportunities": opportunities,
    }