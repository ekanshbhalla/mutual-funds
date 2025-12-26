const fundsData = [
    { 
        id: 101, 
        name: "Growth Plus Equity", 
        nav: 145.20, 
        risk: "High", 
        type: "Equity", 
        returns: "15.4%", 
        description: "Invests primarily in high-growth technology stocks." 
    },
    { 
        id: 102, 
        name: "Secure Bond Fund", 
        nav: 52.10, 
        risk: "Low", 
        type: "Debt", 
        returns: "6.8%", 
        description: "Focuses on government bonds and secure corporate debt." 
    },
    { 
        id: 103, 
        name: "Balanced Advantage", 
        nav: 89.50, 
        risk: "Medium", 
        type: "Hybrid", 
        returns: "10.2%", 
        description: "A mix of equity and debt to balance risk and reward." 
    },
    { 
        id: 104, 
        name: "Global Index ETF", 
        nav: 210.00, 
        risk: "High", 
        type: "Index", 
        returns: "12.1%", 
        description: "Tracks the top 50 global companies." 
    }
];
function loadInvestorFunds() {
    const container = document.getElementById('fund-container');
    if (!container) return;

    container.innerHTML = fundsData.map(fund => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 p-3">
                <div class="d-flex justify-content-between align-items-start">
                    <span class="badge bg-${getBadgeColor(fund.risk)} mb-2">${fund.risk} Risk</span>
                    <span class="text-muted small">${fund.type}</span>
                </div>
                <h4>${fund.name}</h4>
                <p class="text-muted small">${fund.description}</p>
                <div class="mt-auto">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <span class="d-block text-muted small">NAV</span>
                            <span class="fw-bold fs-5">$${fund.nav}</span>
                        </div>
                        <div class="text-end">
                            <span class="d-block text-muted small">1Y Returns</span>
                            <span class="fw-bold text-success">${fund.returns}</span>
                        </div>
                    </div>
                    <a href="buy.html?id=${fund.id}" class="btn btn-primary w-100">Buy Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

function loadAnalystTable() {
    const tableBody = document.getElementById('analyst-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = fundsData.map(fund => `
        <tr>
            <td>${fund.id}</td>
            <td><input type="text" class="form-control form-control-sm" value="${fund.name}"></td>
            <td><input type="number" class="form-control form-control-sm" value="${fund.nav}"></td>
            <td><span class="badge bg-${getBadgeColor(fund.risk)}">${fund.risk}</span></td>
            <td>
                <button class="btn btn-sm btn-success" onclick="alert('Data Updated for ${fund.name}')">Update</button>
            </td>
        </tr>
    `).join('');
}

function getBadgeColor(risk) {
    if (risk === 'High') return 'danger';
    if (risk === 'Medium') return 'warning';
    return 'success';
}


function renderCharts() {
    const ctx1 = document.getElementById('investorChart');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: ['Equity', 'Debt', 'Hybrid', 'Cash'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#0056b3', '#28a745', '#ffc107', '#6c757d']
                }]
            }
        });
    }

    const ctx2 = document.getElementById('analystChart');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Market Index Performance',
                    data: [12000, 12500, 12300, 13000, 13500, 14000],
                    borderColor: '#0056b3',
                    tension: 0.4
                }]
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadInvestorFunds();
    loadAnalystTable();
    renderCharts();
});
