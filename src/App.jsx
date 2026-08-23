import React, { useState } from 'react';

const Icons = {
  Search: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Package: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  Phone: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Star: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  MapPin: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  CheckCircle: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
  Layers: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
};

const MATERIALS_DATA = [
  {
    id: 'MAT-IN-01',
    name: 'IS 2062 Grade E250 Hot Rolled Structural Steel Plates',
    category: 'Metals & Alloys',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    supplier: 'Tata Steel Industrial Hub Ltd',
    phone: '+91 98450 12890',
    location: 'Chennai Port Industrial Area, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Chennai+Port+Industrial+Area',
    pricePerUnit: 58500,
    unit: 'Metric Ton',
    moq: 5,
    leadTime: '3-5 days',
    specs: ['Tensile: 410-540 MPa', 'Thickness: 6-40mm', 'BIS Certified']
  },
  {
    id: 'MAT-IN-02',
    name: 'Reliance HDPE Blow Moulding Granules (B56003)',
    category: 'Polymers & Plastics',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    supplier: 'Reliance Polymer Hub',
    phone: '+91 97241 88200',
    location: 'Sanand Industrial Estate, Ahmedabad',
    mapUrl: 'https://maps.google.com/?q=Sanand+Industrial+Estate+Ahmedabad',
    pricePerUnit: 98400,
    unit: 'Metric Ton',
    moq: 3,
    leadTime: '2-4 days',
    specs: ['MFR: 0.33 g/10min', 'Density: 0.958 g/cc', 'Food Safe']
  },
  {
    id: 'MAT-IN-03',
    name: 'RSS-4 Grade Natural Smoked Sheet Rubber',
    category: 'Elastomers',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    supplier: 'Kerala Plantation Latex Syndicate',
    phone: '+91 94471 45012',
    location: 'Kottayam Rubber Zone / Coimbatore SIDCO Yard',
    mapUrl: 'https://maps.google.com/?q=Kottayam+Rubber+Board+Kerala',
    pricePerUnit: 182000,
    unit: 'Metric Ton',
    moq: 2,
    leadTime: '4-7 days',
    specs: ['Dirt Content: < 0.05%', 'Ash: < 0.5%', 'Rubber Board Certified']
  }
];

const ORDER_STAGES = [
  { title: 'Order Placed', desc: 'PO & Escrow Generated' },
  { title: 'Workers Notified', desc: 'Manager & Storekeeper Alerted' },
  { title: 'In Transit', desc: 'E-Way Bill TN-38 Dispatched' },
  { title: 'Material Received', desc: 'Storekeeper Check-in' },
  { title: 'Owner Updated', desc: 'GST Invoice Reconciled' }
];

export default function App() {
  const [tab, setTab] = useState('browse');
  const [orders, setOrders] = useState([
    {
      id: 'PO-IND-8821',
      name: 'IS 2062 Grade E250 Hot Rolled Structural Steel Plates',
      supplier: 'Tata Steel Industrial Hub Ltd',
      qty: 15,
      total: 1035450,
      stage: 2
    }
  ]);
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const placeOrder = (mat) => {
    const newPO = {
      id: `PO-IND-${Math.floor(8000 + Math.random() * 1999)}`,
      name: mat.name,
      supplier: mat.supplier,
      qty: mat.moq,
      total: Math.round(mat.moq * mat.pricePerUnit * 1.18),
      stage: 1
    };
    setOrders([newPO, ...orders]);
    showToast(`PO ${newPO.id} raised! Storekeeper & Manager notified.`);
    setTab('orders');
  };

  const advanceStage = (id) => {
    setOrders(orders.map(o => o.id === id && o.stage < ORDER_STAGES.length - 1 ? { ...o, stage: o.stage + 1 } : o));
    showToast('Workflow advanced to next stage!');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#070b14', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>
      {toast && (
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999, background: '#4f46e5', color: '#fff', padding: '12px 20px', borderRadius: 10, fontWeight: 700 }}>
          {toast}
        </div>
      )}

      {/* HEADER */}
      <header style={{ height: 60, background: '#0f172a', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icons.Layers /></div>
          <span style={{ fontWeight: 800, color: '#fff' }}>RAWPROCURA</span>
          <span style={{ fontSize: 9, background: 'rgba(99,102,241,0.2)', color: '#818cf8', padding: '2px 6px', borderRadius: 8, fontWeight: 800 }}>INDIA B2B</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => setTab('browse')} style={{ background: tab === 'browse' ? '#4f46e5' : '#1e293b', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Materials Catalog</button>
          <button onClick={() => setTab('orders')} style={{ background: tab === 'orders' ? '#4f46e5' : '#1e293b', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Live Orders ({orders.length})</button>
        </div>
      </header>

      {/* BODY */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
        {tab === 'browse' && (
          <div>
            <div style={{ background: 'linear-gradient(90deg, #1e1b4b, #0f172a)', padding: 20, borderRadius: 12, border: '1px solid #312e81', marginBottom: 20 }}>
              <h2 style={{ margin: 0, color: '#fff' }}>B2B Raw Material Sourcing Exchange</h2>
              <p style={{ margin: '4px 0 0 0', color: '#94a3b8', fontSize: 13 }}>Direct procurement with supplier contacts, factory locations & live order pipeline.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {MATERIALS_DATA.map(m => (
                <div key={m.id} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <img src={m.image} alt={m.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                  <div style={{ padding: 16 }}>
                    <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 800, textTransform: 'uppercase' }}>{m.category}</div>
                    <h3 style={{ fontSize: 15, margin: '4px 0 8px 0', color: '#fff' }}>{m.name}</h3>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>₹{m.pricePerUnit.toLocaleString('en-IN')} <span style={{ fontSize: 11, color: '#64748b' }}>/{m.unit}</span></div>
                    
                    <div style={{ background: '#090d16', padding: 10, borderRadius: 8, fontSize: 11, marginBottom: 12 }}>
                      <div style={{ color: '#fff', fontWeight: 700 }}>{m.supplier}</div>
                      <div style={{ color: '#38bdf8', marginTop: 2 }}>📞 {m.phone}</div>
                      <div style={{ color: '#94a3b8', marginTop: 2 }}>📍 {m.location}</div>
                    </div>

                    <button onClick={() => placeOrder(m)} style={{ width: '100%', padding: 10, background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                      Place Bulk Purchase Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'orders' && (
          <div>
            <h2 style={{ color: '#fff', margin: '0 0 16px 0' }}>Active Purchase Orders (5-Stage Tracking)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {orders.map(o => (
                <div key={o.id} style={{ background: '#0f172a', border: '1px solid #1e293b', padding: 20, borderRadius: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                      <span style={{ color: '#818cf8', fontWeight: 800, fontFamily: 'monospace' }}>{o.id}</span>
                      <h4 style={{ margin: '4px 0 0 0', color: '#fff' }}>{o.name}</h4>
                      <div style={{ fontSize: 11, color: '#64748b' }}>Supplier: {o.supplier}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 18, color: '#22c55e', fontWeight: 800 }}>₹{o.total.toLocaleString('en-IN')}</div>
                      <div style={{ fontSize: 11, color: '#64748b' }}>Qty: {o.qty} Metric Tons</div>
                    </div>
                  </div>

                  {/* STAGES */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, margin: '20px 0', textAlign: 'center' }}>
                    {ORDER_STAGES.map((s, idx) => (
                      <div key={idx}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', margin: '0 auto 6px', background: idx <= o.stage ? '#22c55e' : '#1e293b', color: idx <= o.stage ? '#000' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800 }}>
                          {idx <= o.stage ? '✓' : idx + 1}
                        </div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: idx <= o.stage ? '#fff' : '#64748b' }}>{s.title}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #1e293b', paddingTop: 12 }}>
                    {o.stage < ORDER_STAGES.length - 1 ? (
                      <button onClick={() => advanceStage(o.id)} style={{ padding: '8px 16px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
                        Advance: {ORDER_STAGES[o.stage + 1].title} →
                      </button>
                    ) : (
                      <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 12 }}>✓ Order Completed & Reconciled</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
