document.getElementById("calculateBtn").addEventListener("click", () => {
  const sku = document.getElementById("sku").value.trim();
  const nilaiJual = parseFloat(document.getElementById("nilaiJual").value);
  const biayaMarketingPct = parseFloat(document.getElementById("biayaMarketing").value);
  const conversionRatePct = parseFloat(document.getElementById("conversionRate").value);

  if (!sku || isNaN(nilaiJual) || isNaN(biayaMarketingPct) || isNaN(conversionRatePct)) {
    alert("Mohon isi semua bidang dengan benar.");
    return;
  }

 const biayaMarketing = nilaiJual * (biayaMarketingPct / 100);
 const klikPerPenjualan = 1 / (conversionRatePct / 100);
 const maxBid = biayaMarketing / klikPerPenjualan;
 
 const tbody = document.getElementById("resultTable").querySelector("tbody");
 const row = document.createElement("tr");
 row.innerHTML = `
 <td>${sku}</td>
 <td>Rp${nilaiJual.toLocaleString('id-ID')}</td>
 <td>Rp${biayaMarketing.toLocaleString('id-ID')}</td>
 <td>${conversionRatePct.toLocaleString('id-ID')}%</td>
 <td>${klikPerPenjualan.toFixed(0).toLocaleString('id-ID')}</td>
 <td>Rp${maxBid.toFixed(0).toLocaleString('id-ID')}</td>
 `;
 
 if (tbody.children.length >= 10) {
 tbody.removeChild(tbody.firstElementChild); // Hapus baris pertama jika lebih dari 10
 }
 tbody.appendChild(row);
});
