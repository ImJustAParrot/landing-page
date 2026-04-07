import React, { useState } from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    { 
      name: 'Basic', 
      priceMonthly: '$29', 
      priceYearly: '$278',
      features: [
        'Access to 20+ courses',
        'Community support',
        'Course certificates',
        'Mobile app access',
        '1 project included'
      ],
      popular: false,
      savings: '20%'
    },
    { 
      name: 'Pro', 
      priceMonthly: '$79', 
      priceYearly: '$758',
      features: [
        'Full library access (100+ courses)',
        'Priority support 24/7',
        'All certificates + badges',
        'Real-world projects',
        'Career guidance',
        'Mock interviews',
        'Resume review',
        'Guest webinars'
      ],
      popular: true,
      savings: '25%'
    },
    { 
      name: 'Enterprise', 
      priceMonthly: 'Custom', 
      priceYearly: 'Custom',
      features: [
        'Custom learning paths',
        'Dedicated success manager',
        'Team analytics dashboard',
        'Bulk enrollment discounts',
        'Custom content creation',
        'API access',
        'SLA guarantee',
        'On-site training options'
      ],
      popular: false,
      savings: null
    },
  ];

  const handleSubscribe = (planName) => {
    alert(`🎉 Thank you for choosing ${planName}! Start your learning journey today.`);
  };

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="section-header reveal" data-animation="fade-up">
          <span className="section-badge">
            <span className="badge-icon">💰</span>
            Pricing Plans
          </span>
          <h2>Invest in your <span className="gradient-text">future</span></h2>
          <p>Choose the perfect plan and start learning today</p>
          
          <div className="billing-toggle">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              className={`pricing-card reveal ${plan.popular ? 'popular' : ''}`} 
              data-animation="scale-in"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {plan.popular && <div className="popular-badge">🔥 Most popular</div>}
              
              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">
                    {plan.priceMonthly === 'Custom' ? 'Custom' : (billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly)}
                  </span>
                  {plan.priceMonthly !== 'Custom' && (
                    <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  )}
                </div>
                {plan.savings && billingCycle === 'yearly' && (
                  <div className="savings-badge">Save {plan.savings}</div>
                )}
              </div>
              
              <div className="pricing-card-body">
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-card-footer">
                <button 
                  className={`btn-plan ${plan.popular ? 'btn-popular' : ''}`}
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {plan.priceMonthly === 'Custom' ? 'Contact Sales' : 'Start Learning'}
                  <span className="btn-arrow">→</span>
                </button>
                
                {plan.name === 'Pro' && (
                  <div className="plan-footer">
                    🎁 Includes 7-day free trial
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="pricing-note reveal" data-animation="fade-up">
          <p>✨ All plans include free updates and basic support. Need a custom plan? <a href="#contact">Contact us</a></p>
        </div>
      </div>
      <div className="floating-contact-btn" onClick={() => window.openContactModal && window.openContactModal()}>
        <div className="floating-btn-content">
          <span className="floating-icon">💬</span>
          <span>Contact us</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;