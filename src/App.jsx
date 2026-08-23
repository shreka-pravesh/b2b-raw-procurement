import React, { useState } from 'react';

// Pure Inline SVGs
const Icons = {
  Search: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Package: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  Bell: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  Phone: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  MessageSquare: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Star: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  MapPin: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  CheckCircle: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
  Layers: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  ExternalLink: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
};

const MATERIALS_DATA = [
  {
    id: 'MAT-IN-01',
    name: 'IS 2062 Grade E250 Hot Rolled Structural Steel Plates',
    category: 'Metals & Alloys',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    supplier: 'Tata Steel Industrial Hub Ltd',
    contactPerson: 'Rajesh Sharma (Sales VP)',
    phone: '+91 98450 12890',
    email: 'b2bsales@tatasteel.com',
    gstin: '20AAACT2727Q1ZW',
    supplierRating: 4.9,
    reviewsCount: 310,
    location: 'Chennai Port Industrial Area, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Chennai+Port+Industrial+Area',
    pricePerUnit: 58500,
    unit: 'Metric Ton',
    moq: 5,
    leadTime: '3-5 days',
    inStock: 350,
    sampleCost: 'Free Sample (Coupon Spec)',
    specs: ['Tensile: 410-540 MPa', 'Thickness: 6.0mm - 40.0mm', 'BIS 2062 Certified'],
    reviews: [
      { user: 'Sundaram Fasteners Ltd', rating: 5, comment: 'Exceptional chemical purity. Delivery reached Coimbatore yard in 3 days.' },
      { user: 'L&T Heavy Engineering', rating: 5, comment: 'Consistent thickness tolerance. Lab MTC match was 100% accurate.' }
    ]
  },
  {
    id: 'MAT-IN-02',
    name: 'Reliance HDPE Blow Moulding Granules (B56003)',
    category: 'Polymers & Plastics',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    supplier: 'Reliance Polymer Logistics Hub',
    contactPerson: 'Bhavin Patel (Key Accounts)',
    phone: '+91 97241 88200',
    email: 'polymers@ril-distribution.com',
    gstin: '24AAACR5055K1Z8',
    supplierRating: 4.8,
    reviewsCount: 184,
    location: 'Sanand Industrial Estate, Ahmedabad, Gujarat',
    mapUrl: 'https://maps.google.com/?q=Sanand+Industrial+Estate+Ahmedabad',
    pricePerUnit: 98400,
    unit: 'Metric Ton',
    moq: 3,
    leadTime: '2-4 days',
    inStock: 820,
    sampleCost: 'Free 2kg Sample Sack',
    specs: ['MFR: 0.33 g/10min', 'Density: 0.958 g/cc', 'BIS 7328 Food Safe'],
    reviews: [
      { user: 'Supreme Containers Pvt Ltd', rating: 5, comment: 'Zero contamination, melt flow index perfectly matches high-speed extrusion.' }
    ]
  },
  {
    id: 'MAT-IN-03',
    name: 'RSS-4 Grade Natural Smoked Sheet Rubber',
    category: 'Elastomers',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    supplier: 'Kerala Plantation Latex Syndicate',
    contactPerson: 'K. M. Thomas (Managing Partner)',
    phone: '+91 94471 45012',
    email: 'keralalatex@cochinrubber.in',
    gstin: '32AABCK8901D1ZM',
    supplierRating: 4.9,
    reviewsCount: 245,
    location: 'Kottayam Rubber Zone / Coimbatore SIDCO Yard',
    mapUrl: 'https://maps.google.com/?q=Kottayam+Rubber+Board+Kerala',
    pricePerUnit: 182000,
    unit: 'Metric Ton',
    moq: 2,
    leadTime: '4-7 days',
    inStock: 140,
    sampleCost: 'Free 500g Test Sheet',
    specs: ['Dirt Content: < 0.05%', 'Ash: < 0.5%', 'Rubber Board India Certified'],
    reviews: [
      { user: 'MRF Tyre Ancillary Hub', rating: 5, comment: 'Highest elasticity grade. Smoked texture and low ash content as advertised.' }
    ]
  },
  {
    id: 'MAT-IN-04',
    name: 'Caustic Soda Flakes (Sodium Hydroxide 99.5%)',
    category: 'Chemicals & Minerals',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=600&q=80',
    supplier: 'Grasim Chemical Industries',
    contactPerson: 'V. Ramanathan (Sales Head)',
    phone: '+91 98840 77112',
    email: 'sales@grasimchemicals.in',
    gstin: '23AAACG1234L1ZT',
    supplierRating: 4.7,
    reviewsCount: 92,
    location: 'Ranipet Chemical Industrial Complex, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Ranipet+Industrial+Complex',
    pricePerUnit: 44000,
    unit: 'Metric Ton',
    moq: 5,
    leadTime: '3-6 days',
    inStock: 500,
    sampleCost: 'Paid Sample (₹500 Freight)',
    specs: ['Purity: 99.5% min', 'Iron (as Fe): < 15 ppm', 'IS 252 Certified'],
    reviews: [
      { user: 'Tamil Nadu Dyes & Bleaching Cluster', rating: 4, comment: 'Consistent flaking size. Fast dissolution in textile dyeing tanks.' }
    ]
  }
];

const ORDER_STAGES = [
  { title: 'Order Placed', desc: 'PO & Escrow Generated' },
  { title: 'Workers Notified', desc: 'Manager & Storekeeper Alerted' },
  { title: 'In Transit', desc: 'E-Way Bill TN-38 Dispatched' },
  { title: 'Material Received', desc: 'Storekeeper Check-in' },
  { title: 'Owner Updated', desc: 'GST Invoice Reconciled' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('browse');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(200000);
  
  const [orders, setOrders] = useState([
    {
      id: 'PO-IND-8821',
      materialName: 'IS 2062 Grade E250 Hot Rolled Structural Steel Plates',
      supplier: 'Tata Steel Industrial Hub Ltd',
      phone: '+91 98450 12890',
      quantity: 15,
      unit: 'Metric Tons',
      totalPrice: 1035450,
      orderDate: '14 Aug 2026',
      stageIndex: 2,
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: 'Plant Yard B, Peelamedu, Coimbatore'
    }
  ]);

  const [modalType, setModalType] = useState(null);
  const [activeMat, setActiveMat] = useState(null);
  const [bulkQty, setBulkQty] = useState(5);
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const confirmBulk = () => {
    const base = bulkQty * activeMat.pricePerUnit;
    const total = Math.round(base * 1.18);
    const newPO = {
      id: `PO-IND-${Math.floor(8000 + Math.random() * 1999)}`,
      materialName: activeMat.name,
      supplier: activeMat.supplier,
      phone: activeMat.phone,
      quantity: bulkQty,
      unit: activeMat.unit + 's',
      totalPrice: total,
      orderDate: 'Today (23 Aug 2026)',
      stageIndex: 1,
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: 'Plant Yard B, Peelamedu, Coimbatore'
    };
    setOrders([newPO, ...orders]);
    showToast(`PO ${newPO.id} raised for ₹${total.toLocaleString('en-IN')}! Storekeeper notified.`);
    setModalType(null);
    setActiveTab('orders');
  };

  const advanceStage = (poId) => {
    setOrders(orders.map(o => {
      if (o.id === poId && o.stageIndex < ORDER_STAGES.length - 1) {
        const next = o.stageIndex + 1;
        showToast(`Workflow Advance: ${ORDER_STAGES[next].title}`);
        return { ...o, stageIndex: next };
      }
      return o;
    }));
  };

  const filtered = MATERIALS_DATA.filter(m => {
    const matchQuery = m.name.toLowerCase().includes(search.toLowerCase()) || 
                       m.supplier.toLowerCase().includes(search.toLowerCase()) ||
                       m.location.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchPrice = m.pricePerUnit <= maxPrice;
    return matchQuery && matchCat && matchPrice;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#e2e8f0', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, backgroundColor: '#4f46e5', color: '#fff', padding: '12px 20px', borderRadius: 12, boxShadow: '0 12px 30px rgba(79, 70, 229, 0.45)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600 }}>
          <Icons.CheckCircle /> {toast}
        </div>
      )}

      <header style={{ height: 64, borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icons.Layers />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 800, color: '#fff', fontSize: 15 }}>RAWPROCURA</span>
              <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 12, background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.4)', fontWeight: 800 }}>INDIA B2B HUB</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 12, color: '#94a3b8' }}>
            Buyer: <strong style={{ color: '#fff' }}>Apex Manufacturing Pvt Ltd (Coimbatore)</strong>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ width: 230, borderRight: '1px solid #1e293b', minHeight: 'calc(100vh - 64px)', padding: 18, background: '#090e1a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: '#475569', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Menu</div>
            <button 
              onClick={() => setActiveTab('browse')}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', background: activeTab === 'browse' ? '#4f46e5' : 'transparent', color: activeTab === 'browse' ? '#fff' : '#94a3b8', textAlign: 'left' }}
            >
              <Icons.Search /> Discover Materials
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', background: activeTab === 'orders' ? '#4f46e5' : 'transparent', color: activeTab === 'orders' ? '#fff' : '#94a3b8', textAlign: 'left' }}
            >
              <Icons.Package /> Live PO Tracker
              <span style={{ marginLeft: 'auto', background: '#1e293b', padding: '2px 8px', borderRadius: 12, fontSize: 10 }}>{orders.length}</span>
            </button>
          </div>

          <div style={{ background: '#0f172a', padding: 14, borderRadius: 12, border: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, color: '#22c55e', fontWeight: 700 }}>✓ Verified Suppliers Only</div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>All manufacturers have valid GSTIN & BIS / ISO Certifications.</div>
          </div>
        </aside>

        <main style={{ flex: 1, padding: '28px 36px', maxWidth: 1200, margin: '0 auto' }}>
          
          {activeTab === 'browse' && (
            <div>
              <div style={{ background: 'linear-gradient(90deg, #1e1b4b, #0f172a)', padding: 24, borderRadius: 18, border: '1px solid #312e81', marginBottom: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#fff' }}>Verified Industrial Raw Material Marketplace</h2>
                <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 0 0' }}>Search with direct phone contacts, customer feedback, and factory Google Maps.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', flex: 1, minWidth: 260 }}>
                    <input 
                      type="text" 
                      placeholder="Search steel, polymer, rubber, chemicals or city..." 
                      value={search} 
                      onChange={e => setSearch(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: 10, color: '#fff', fontSize: 13, boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['All', 'Metals & Alloys', 'Polymers & Plastics', 'Elastomers', 'Chemicals & Minerals'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{ padding: '8px 12px', borderRadius: 8, fontSize: 11, fontWeight: 600, border: '1px solid', borderColor: selectedCategory === cat ? '#6366f1' : '#1e293b', background: selectedCategory === cat ? '#4f46e5' : '#0f172a', color: selectedCategory === cat ? '#fff' : '#94a3b8', cursor: 'pointer' }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#0f172a', padding: '10px 16px', borderRadius: 12, border: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>Filter by Max Rate:</span>
                  <input 
                    type="range" 
                    min={40000} 
                    max={200000} 
                    step={5000} 
                    value={maxPrice} 
                    onChange={e => setMaxPrice(Number(e.target.value))} 
                    style={{ flex: 1, accentColor: '#4f46e5', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#22c55e', minWidth: 100 }}>
                    Up to ₹{maxPrice.toLocaleString('en-IN')}/Ton
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
                {filtered.map(mat => (
                  <div key={mat.id} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                    
                    <div style={{ height: 160, width: '100%', position: 'relative', overflow: 'hidden' }}>
                      <img src={mat.image} alt={mat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(9, 13, 22, 0.85)', padding: '4px 8px', borderRadius: 6, fontSize: 10, color: '#818cf8', fontWeight: 800, border: '1px solid rgba(99,102,241,0.3)' }}>
                        {mat.category}
                      </div>
                      <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(9, 13, 22, 0.9)', padding: '4px 10px', borderRadius: 8, fontSize: 14, fontWeight: 800, color: '#22c55e' }}>
                        ₹{mat.pricePerUnit.toLocaleString('en-IN')} <span style={{ fontSize: 10, color: '#94a3b8' }}>/{mat.unit}</span>
                      </div>
                    </div>

                    <div style={{ padding: 18 }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px 0', color: '#fff', lineHeight: 1.3 }}>{mat.name}</h3>

                      <div style={{ background: '#090d16', padding: 10, borderRadius: 10, marginBottom: 12, border: '1px solid #1e293b' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{mat.supplier}</span>
                          <button 
                            onClick={() => { setActiveMat(mat); setModalType('reviews'); }}
                            style={{ background: 'transparent', border: 'none', color: '#fbbf24', fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}
                          >
                            <Icons.Star /> {mat.supplierRating} ({mat.reviewsCount}) ➔
                          </button>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                          <Icons.MapPin />
                          <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mat.location}</span>
                          <a href={mat.mapUrl} target="_blank" rel="noreferrer" style={{ color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2, fontWeight: 600 }}>
                            G-Map <Icons.ExternalLink />
                          </a>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                        {mat.specs.map((s, i) => (
                          <span key={i} style={{ fontSize: 10, background: '#1e293b', color: '#cbd5e1', padding: '2px 8px
