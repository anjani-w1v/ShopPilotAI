import jsPDF from "jspdf";

function DownloadReport({ data }) {

  const downloadPDF = () => {

    if (!data) return;

    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("ShopPilot AI Business Report", 20, 20);

    pdf.setFontSize(14);

    pdf.text(`Revenue: ₹${data.revenue}`, 20, 40);
    pdf.text(`Profit: ₹${data.profit}`, 20, 50);
    pdf.text(`Orders: ${data.orders}`, 20, 60);
    pdf.text(`Inventory: ${data.inventory}`, 20, 70);

    pdf.text("AI Insights", 20, 90);

    let y = 100;

    data.insights.forEach((item) => {

  const clean = item
    .replace("🏆", "")
    .replace("🥇", "")
    .replace("⭐", "")
    .replace("💰", "")
    .replace("📈", "")
    .replace("⚠️", "")
    .replace("💡", "");

  pdf.text(`• ${clean}`, 25, y);

  y += 10;
});

    pdf.save("ShopPilot_Report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold mt-8"
    >
      📄 Download Business Report
    </button>
  );
}

export default DownloadReport;