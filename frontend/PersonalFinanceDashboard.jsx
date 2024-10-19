import React, { useState } from 'react';
import { Bell, CreditCard, DollarSign, Home, PieChart, Settings, TrendingUp, User, Wallet, Target, Award, Briefcase } from 'lucide-react';
import './PersonalFinanceDashboard.css';

export default function PersonalFinanceDashboard() {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Wallet, label: "Transactions" },
    { icon: PieChart, label: "Budgets" },
    { icon: Target, label: "Goals" },
    { icon: CreditCard, label: "Debt Management" },
    { icon: Briefcase, label: "Investments" },
    { icon: Award, label: "Achievements" },
    { icon: Settings, label: "Settings" },
  ];

  const accountStats = [
    { label: "Total Balance", value: "$12,345.67" },
    { label: "Income This Month", value: "$4,567.89" },
    { label: "Expenses This Month", value: "$3,210.45" },
  ];

  const budgetCategories = [
    { name: "Groceries", percentage: 75 },
    { name: "Entertainment", percentage: 40 },
    { name: "Transportation", percentage: 90 },
  ];

  const savingsGoals = [
    { name: "Vacation Fund", current: 2000, target: 5000 },
    { name: "Emergency Fund", current: 5000, target: 10000 },
  ];

  const recentTransactions = [
    { name: "Grocery Store", category: "Food & Dining", amount: -85.43 },
    { name: "Electric Company", category: "Bills & Utilities", amount: -120.00 },
    { name: "Paycheck", category: "Income", amount: 2500.00 },
  ];

  const aiInsights = [
    { title: "Savings Opportunity", description: "You could save $50 by reducing your entertainment spending by 10% this month." },
    { title: "Debt Reduction Strategy", description: "Consider applying the Avalanche Method to pay off your credit card debt faster and save on interest." },
    { title: "Investment Suggestion", description: "Based on your risk profile, consider diversifying your portfolio by adding 5% allocation to international stocks." },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <DollarSign className="logo-icon" />
          <span className="logo-text">FinAI Assistant</span>
        </div>
        <nav className="nav">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className={`nav-item ${activeNavItem === label ? 'active' : ''}`}
              onClick={() => setActiveNavItem(label)}
            >
              <Icon className="nav-icon" />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1 className="page-title">Personal Finance Dashboard</h1>
          <div className="user-actions">
            <button className="notification-btn">
              <Bell className="notification-icon" />
            </button>
            <div className="user-avatar">
              <User className="user-icon" />
            </div>
          </div>
        </header>

        <div className="dashboard-grid">
          {/* Account Overview */}
          <div className="card account-overview">
            <h2 className="card-title">Account Overview</h2>
            <div className="account-stats">
              {accountStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card quick-actions">
            <h2 className="card-title">Quick Actions</h2>
            <div className="action-buttons">
              <button className="btn btn-primary">Add Transaction</button>
              <button className="btn btn-secondary">Update Budget</button>
              <button className="btn btn-secondary">Set New Goal</button>
            </div>
          </div>

          {/* Spending Insights */}
          <div className="card spending-insights">
            <h2 className="card-title">Spending Insights</h2>
            <p className="card-subtitle">Your spending patterns this month</p>
            <div className="chart-placeholder">
              <p>Chart Placeholder</p>
            </div>
          </div>

          {/* Budget Progress */}
          <div className="card budget-progress">
            <h2 className="card-title">Budget Progress</h2>
            <div className="progress-items">
              {budgetCategories.map((category) => (
                <div key={category.name} className="progress-item">
                  <div className="progress-header">
                    <span>{category.name}</span>
                    <span>{category.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${category.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Savings Goals */}
          <div className="card savings-goals">
            <h2 className="card-title">Savings Goals</h2>
            <div className="goals-list">
              {savingsGoals.map((goal) => (
                <div key={goal.name} className="goal-item">
                  <div className="goal-header">
                    <span>{goal.name}</span>
                    <span>${goal.current} / ${goal.target}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <button className="btn btn-success">Add New Goal</button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="card recent-transactions">
            <h2 className="card-title">Recent Transactions</h2>
            <div className="transactions-list">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="transaction-item">
                  <div className="transaction-info">
                    <p className="transaction-name">{transaction.name}</p>
                    <p className="transaction-category">{transaction.category}</p>
                  </div>
                  <span className={`transaction-amount ${transaction.amount > 0 ? "positive" : "negative"}`}>
                    {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="card ai-insights">
            <h2 className="card-title">AI Insights & Recommendations</h2>
            <div className="insights-list">
              {aiInsights.map((insight, index) => (
                <div key={index} className="insight-item">
                  <h3 className="insight-title">{insight.title}</h3>
                  <p className="insight-description">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}