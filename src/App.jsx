import React, { useState } from 'react';
import './App.css';

// Pure SVG Icons for RawProcura Enterprise Xtreme
const Icons = {
  Search: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
  Package: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>,
  Bell: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>,
  Phone: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  MessageSquare: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  Building: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /></svg>,
  Star: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  MapPin: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  CheckCircle: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>,
  Shield: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  Layers: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  Compare: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5" /><path d="m21 3-7 7" /><path d="M8 21H3v-5" /><path d="m3 21 7-7" /></svg>,
  Plus: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  UserCheck: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
  Trending: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
  FileText: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>,
  X: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
  ChevronRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>,
  Sliders: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="1" x2="7" y1="14" y2="14" /><line x1="9" x2="15" y1="8" y2="8" /><line x1="17" x2="23" y1="16" y2="16" /></svg>,
  Download: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
  Printer: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>,
  Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
  Trash2: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>,
  Info: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
  ExternalLink: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>,
  Truck: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="13" height="10" x="1" y="5" rx="1" /><path d="M14 8h4l3 3v4h-7V8z" /><circle cx="5.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></svg>,
  Award: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  Send: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>,
  Lock: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  ScanBarcode: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><line x1="7" y1="8" x2="7" y2="16" /><line x1="11" y1="8" x2="11" y2="16" /><line x1="15" y1="8" x2="15" y2="16" /><line x1="18" y1="8" x2="18" y2="16" /></svg>,
  Bot: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="8" rx="2" /><path d="M12 2v6" /><path d="M8 12h.01" /><path d="M16 12h.01" /></svg>,
  Cpu: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>,
  Globe: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  Video: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
};

const PAN_INDIA_HUBS = [
  'All Hubs',
  'Chennai Port Corridor',
  'Coimbatore SIDCO Hub',
  'Tiruppur Textile Hub',
  'Salem Steel & Silk Belt',
  'Ahmedabad & Sanand Zone',
  'Surat Synthetic Hub',
  'Pune & Pimpri Auto Hub',
  'Delhi-NCR & Ludhiana',
  'Jamshedpur Steel Hub',
  'Visakhapatnam Zone',
  'Kottayam Rubber Belt',
  'Ranipet & Mettur Chemicals',
  'Sivakasi Packaging Hub'
];

const SEED_PROTOTYPES = [
  { id: 'MAT-MET-01', name: 'IS 2062 E250 HR Structural Steel Plates', category: 'Metals & Alloys', hub: 'Chennai Port Corridor', img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', supplier: 'Tata Steel Industrial Hub Ltd', phone: '+91 98450 12890', price: 58500, unit: 'Metric Ton', moq: 5, stock: 350 },
  { id: 'MAT-MET-02', name: 'CR 304 Stainless Steel Coils (2B Finish)', category: 'Metals & Alloys', hub: 'Salem Steel & Silk Belt', img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', supplier: 'Salem Steel Plant (SAIL Hub)', phone: '+91 94420 11980', price: 195000, unit: 'Metric Ton', moq: 2, stock: 220 },
  { id: 'MAT-MET-03', name: 'Aluminium Extrusion Billets 6063 T6 Grade', category: 'Metals & Alloys', hub: 'Pune & Pimpri Auto Hub', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80', supplier: 'Hindalco Industrial Metals Ltd', phone: '+91 98220 44910', price: 238000, unit: 'Metric Ton', moq: 2, stock: 180 },
  { id: 'MAT-POL-01', name: 'Reliance HDPE Blow Moulding Granules (B56003)', category: 'Polymers & Plastics', hub: 'Ahmedabad & Sanand Zone', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80', supplier: 'Reliance Polymer Distribution Hub', phone: '+91 97241 88200', price: 98400, unit: 'Metric Ton', moq: 3, stock: 820 },
  { id: 'MAT-POL-02', name: 'Injection Grade PP Copolymer Granules (MI1070)', category: 'Polymers & Plastics', hub: 'Delhi-NCR & Ludhiana', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80', supplier: 'IOCL Petrochemical Hub Panipat', phone: '+91 98110 33810', price: 94500, unit: 'Metric Ton', moq: 3, stock: 640 },
  { id: 'MAT-TEX-01', name: 'Combed Cotton Yarn 40s Count (Ring Spun)', category: 'Textiles & Yarns', hub: 'Tiruppur Textile Hub', img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80', supplier: 'Coimbatore Textile Syndicate', phone: '+91 94433 88120', price: 275000, unit: 'Metric Ton', moq: 1, stock: 95 },
  { id: 'MAT-ELA-01', name: 'RSS-4 Smoked Sheet Natural Rubber', category: 'Elastomers', hub: 'Kottayam Rubber Belt', img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80', supplier: 'Kerala Plantation Latex Syndicate', phone: '+91 94471 45012', price: 182000, unit: 'Metric Ton', moq: 2, stock: 140 },
  { id: 'MAT-CHE-01', name: 'Industrial Caustic Soda Flakes (NaOH 99.5%)', category: 'Chemicals & Minerals', hub: 'Ranipet & Mettur Chemicals', img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=600&q=80', supplier: 'Grasim Chemical Industries Ltd', phone: '+91 98840 77112', price: 44000, unit: 'Metric Ton', moq: 5, stock: 500 },
  { id: 'MAT-PKG-01', name: 'Kraft Paper 200 GSM Virgin Testliner (BF 28+)', category: 'Packaging', hub: 'Sivakasi Packaging Hub', img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80', supplier: 'Sivakasi Packaging Mills', phone: '+91 94431 09820', price: 38500, unit: 'Metric Ton', moq: 3, stock: 320 },
  { id: 'MAT-CON-01', name: 'OPC 53 Grade Ordinary Portland Cement', category: 'Construction', hub: 'Coimbatore SIDCO Hub', img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', supplier: 'ACC Cement Madukkarai Plant', phone: '+91 98422 77100', price: 6800, unit: 'Metric Ton', moq: 15, stock: 1200 },
  { id: 'MAT-ELE-01', name: 'Electrolytic Copper Foil 18 Micron (Battery Grade)', category: 'Electrical & Battery Materials', hub: 'Visakhapatnam Zone', img: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', supplier: 'Vizag Electro-Metals Tech Ltd', phone: '+91 98480 33190', price: 890000, unit: 'Metric Ton', moq: 1, stock: 45 }
];

// Generator producing 60+ rich catalog entries
const MATERIALS_DATA = Array.from({ length: 60 }).map((_, idx) => {
  const base = SEED_PROTOTYPES[idx % SEED_PROTOTYPES.length];
  const suffix = Math.floor(idx / SEED_PROTOTYPES.length) + 1;
  const itemPrice = suffix === 1 ? base.price : Math.round(base.price * (1 + (idx * 0.012)));
  return {
    id: `${base.id}-${suffix}`,
    name: suffix === 1 ? base.name : `${base.name} (Global Lot #${suffix})`,
    category: base.category,
    hub: base.hub,
    image: base.img,
    supplier: suffix === 1 ? base.supplier : `${base.supplier} Export Complex ${suffix}`,
    contactPerson: `R. Murugan (VP Trade Desk #${idx + 1})`,
    phone: base.phone,
    email: `trade${idx}@${base.supplier.toLowerCase().replace(/[^a-z]/g, '')}.com`,
    gstin: `33AAAC${1000 + idx}Q1Z${idx % 9}`,
    hsnCode: `${7200 + (idx % 80)}`,
    yearsGold: 10 + (idx % 12),
    isoCert: 'TUV SUD & SGS Audited',
    tradeAssurance: '$10.0M Escrow Coverage',
    responseTime: '< 1h response',
    onTimeRate: '99.8%',
    supplierRating: 4.9,
    reviewsCount: 180 + idx * 10,
    location: `${base.hub}, India`,
    mapUrl: 'https://maps.google.com/?q=Industrial+Hub+India',
    pricePerUnit: itemPrice,
    bulkTierPrice: Math.round(itemPrice * 0.93),
    megaTierPrice: Math.round(itemPrice * 0.87),
    unit: base.unit,
    moq: base.moq,
    leadTime: `${2 + (idx % 3)} days`,
    inStock: base.stock + idx * 15,
    aiSignal: idx % 2 === 0 ? 'BUY NOW (-2.4% 30D Low)' : 'HOLD (Stable Index)',
    aiSignalType: idx % 2 === 0 ? 'buy' : 'hold',
    aiConfidence: `${94 + (idx % 5)}.%`,
    esgFootprint: `${1100 + idx * 35} kg CO2e/Ton`,
    sha256Hash: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8${idx}`,
    furnaceBatchId: `BATCH-GLOBAL-2026-${300 + idx}`,
    sampleCost: 'Free Sample Coupon Available',
    priceTiers: [
      { range: `1 - ${base.moq * 2} MT`, rate: itemPrice, label: 'Base Rate' },
      { range: `${base.moq * 2 + 1} - 20 MT`, rate: Math.round(itemPrice * 0.93), label: 'Wholesale Tier' },
      { range: '> 20 MT', rate: Math.round(itemPrice * 0.87), label: 'Mega Bulk Discount' }
    ],
    priceHistory: [
      { day: 'Day 1', price: Math.round(itemPrice * 1.04) },
      { day: 'Day 7', price: Math.round(itemPrice * 1.02) },
      { day: 'Day 14', price: Math.round(itemPrice * 1.01) },
      { day: 'Day 21', price: itemPrice },
      { day: 'Today', price: itemPrice },
      { day: '+7D Est', price: Math.round(itemPrice * 0.98) }
    ],
    specs: ['TUV SUD Factory Audited', 'SGS Quality Assessed', 'BIS/ASTM Certified', 'NABL Lab Seal Verified'],
    certifications: ['TUV SUD Audited', 'SGS Verified', 'ISO 9001:2015'],
    nablSpecs: [
      { element: 'Purity Level', val: '99.65%', spec: '99.0% min', status: 'Passed', valPct: 99 },
      { element: 'Impurity Index', val: '0.012%', spec: '0.05% max', status: 'Passed', valPct: 24 }
    ],
    mechanicalProps: { 'Yield Strength': '265 MPa', 'Tensile Strength': '485 MPa', 'Elongation': '26%' },
    reviews: [{ user: 'Global Infra Conglomerate', rating: 5, comment: 'Flawless quality verification and fast delivery.' }]
  };
});

const ORDER_STAGES = [
  { title: 'PO & Escrow Locked', desc: 'ICICI Smart Contract' },
  { title: 'Factory Gate Out', desc: 'E-Way Bill Issued' },
  { title: 'Live GPS Highway', desc: 'Telemetry Active' },
  { title: 'Storekeeper QA Dock', desc: 'NABL & Barcode Verified' },
  { title: 'Escrow Released', desc: 'CFO Disbursed to Supplier' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('browse');
  const [userRole, setUserRole] = useState('Buyer');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedHub, setSelectedHub] = useState('All Hubs');
  const [selectedAiGraphMat, setSelectedAiGraphMat] = useState(MATERIALS_DATA[0]);

  // Live Reverse Auction Board Bids state
  const [reverseBids, setReverseBids] = useState([
    { id: 'BID-991', rfqTitle: '50 MT IS 2062 E250 HR Steel Plates (12mm)', buyer: 'Coimbatore Foundry Cluster', currentLowest: 54200, supplier: 'Tata Steel Hub Chennai', leadTime: '3 Days', matchScore: '98.5%' },
    { id: 'BID-992', rfqTitle: '20 MT Reliance HDPE Blow Moulding Granules', buyer: 'Sanand Moulders Hub', currentLowest: 91500, supplier: 'Reliance Polymer Hub', leadTime: '2 Days', matchScore: '96.2%' }
  ]);

  const [orders, setOrders] = useState([
    {
      id: 'PO-IND-8821',
      materialName: 'IS 2062 E250 HR Structural Steel Plates',
      supplier: 'Tata Steel Industrial Hub Ltd',
      phone: '+91 98450 12890',
      gstin: '20AAACT2727Q1ZW',
      hsnCode: '7208',
      quantity: 15,
      unit: 'Metric Tons',
      basePrice: 813000,
      cgst: 73170,
      sgst: 73170,
      tcs: 813,
      totalPrice: 960153,
      orderDate: '14 Aug 2026',
      stageIndex: 2,
      assignedManager: 'K. Senthil Kumar (Procurement Head)',
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: 'Plant Yard B, Peelamedu, Coimbatore, TN',
      ewayBill: '3810-9923-4412',
      vehicleNo: 'TN-38-BZ-4412',
      smartContractHash: '0x8f29c41a2938b812f001192e',
      sha256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      esgFootprint: '27.75 Metric Tons CO2e Total',
      escrowYieldEarned: 4120,
      gpsRoute: {
        origin: 'Chennai Port Industrial Hub',
        waypoints: ['Sriperumbudur Logistics Park', 'Salem Interstate Toll'],
        destination: 'Coimbatore SIDCO Hub',
        currentLocation: 'Salem Interstate Highway (KM 214)',
        speed: '62 km/h',
        driverName: 'M. Kannan (+91 94432 10921)',
        eta: '3 Hours 45 Mins',
        geofenceStatus: 'Inside Salem Geo-Fence'
      },
      escrowLocked: true,
      escrowReleased: false,
      storekeeperInwardStatus: 'Pending Arrival',
      storekeeperBarcodeScanned: false,
      damageCheckPassed: true
    }
  ]);

  const [modalType, setModalType] = useState(null); // 'sample' | 'bulk' | 'rfq' | 'compare' | 'mtc' | 'invoice' | 'reviews' | 'contact' | 'chat' | 'barcode' | 'cfoApprove' | 'sha256' | 'factory' | 'oem' | 'incoterms'
  const [activeMat, setActiveMat] = useState(null);
  const [activeInvoiceOrder, setActiveInvoiceOrder] = useState(null);
  const [activeChatMat, setActiveChatMat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [bulkQty, setBulkQty] = useState(10);
  const [selectedDestination, setSelectedDestination] = useState('Plant Yard B, Peelamedu, Coimbatore, TN');
  const [toast, setToast] = useState('');

  // Incoterms calculation state
  const [selectedIncoterm, setSelectedIncoterm] = useState('FOB');
  const [originPort, setOriginPort] = useState('Chennai Port Corridor');

  const [selectedScanOrder, setSelectedScanOrder] = useState(null);
  const [barcodeInput, setBarcodeInput] = useState('3810-9923-4412');

  const [selectedCfoOrder, setSelectedCfoOrder] = useState(null);
  const [cfoOtpInput, setCfoOtpInput] = useState('');

  const [rfqMaterial, setRfqMaterial] = useState('');
  const [rfqVolume, setRfqVolume] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const triggerPrintInvoice = () => {
    window.print();
  };

  const calculateDynamicPrice = (mat, qty) => {
    let applicableRate = mat.pricePerUnit;
    let isBulkDiscount = false;

    if (qty >= 21) {
      applicableRate = mat.megaTierPrice;
      isBulkDiscount = true;
    } else if (qty >= 6) {
      applicableRate = mat.bulkTierPrice;
      isBulkDiscount = true;
    }

    let freightMultiplier = 1.0;
    if (selectedIncoterm === 'CIF') freightMultiplier = 1.05;
    if (selectedIncoterm === 'EXW') freightMultiplier = 0.96;

    const base = Math.round(applicableRate * qty * freightMultiplier);
    const cgst = Math.round(base * 0.09);
    const sgst = Math.round(base * 0.09);
    const tcs = Math.round(base * 0.001);
    const total = base + cgst + sgst + tcs;

    return { unitRate: Math.round(applicableRate * freightMultiplier), base, cgst, sgst, tcs, total, isBulkDiscount };
  };

  const handlePlaceBulk = (m) => {
    setActiveMat(m);
    setBulkQty(m.moq);
    setModalType('bulk');
  };

  const handleViewMtc = (m) => {
    setActiveMat(m);
    setModalType('mtc');
  };

  const handleViewFactory = (m) => {
    setActiveMat(m);
    setModalType('factory');
  };

  const handleViewOem = (m) => {
    setActiveMat(m);
    setModalType('oem');
  };

  const handleViewIncoterms = (m) => {
    setActiveMat(m);
    setModalType('incoterms');
  };

  const handleOpenChat = (m) => {
    setActiveChatMat(m);
    setChatMessages([
      { sender: 'supplier', name: m.contactPerson || m.supplier, text: `Hello from ${m.supplier}! Stock of ${m.name} ready for smart contract escrow lock under ${selectedIncoterm} terms.`, time: 'Just now' }
    ]);
    setModalType('chat');
  };

  const handleViewInvoice = (order) => {
    setActiveInvoiceOrder(order);
    setModalType('invoice');
  };

  const handleOpenBarcodeScanner = (order) => {
    setSelectedScanOrder(order);
    setBarcodeInput(order.ewayBill);
    setModalType('barcode');
  };

  const handleOpenCfoApproval = (order) => {
    setSelectedCfoOrder(order);
    setCfoOtpInput('882910');
    setModalType('cfoApprove');
  };

  const confirmBulk = () => {
    const pricing = calculateDynamicPrice(activeMat, bulkQty);
    const newPO = {
      id: `PO-IND-${Math.floor(8800 + Math.random() * 1199)}`,
      materialName: activeMat.name,
      supplier: activeMat.supplier,
      phone: activeMat.phone,
      gstin: activeMat.gstin,
      hsnCode: activeMat.hsnCode,
      quantity: bulkQty,
      unit: activeMat.unit + 's',
      basePrice: pricing.base,
      cgst: pricing.cgst,
      sgst: pricing.sgst,
      tcs: pricing.tcs,
      totalPrice: pricing.total,
      orderDate: 'Today (27 Aug 2026)',
      stageIndex: 1,
      assignedManager: 'K. Senthil Kumar (Procurement Head)',
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: selectedDestination,
      ewayBill: `3810-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
      vehicleNo: `TN-38-AX-${Math.floor(1000 + Math.random() * 8999)}`,
      smartContractHash: `0x${Math.random().toString(16).substr(2, 24)}`,
      sha256Hash: activeMat.sha256Hash,
      esgFootprint: `${(bulkQty * 1.85).toFixed(2)} Metric Tons CO2e`,
      escrowYieldEarned: 1250,
      gpsRoute: {
        origin: activeMat.location,
        waypoints: ['Interstate Logistics Toll Gate'],
        destination: selectedDestination,
        currentLocation: 'Dispatched from Supplier Yard Gate',
        speed: '45 km/h',
        driverName: 'V. Raman (+91 97890 22100)',
        eta: '6 Hours 15 Mins',
        geofenceStatus: 'In Transit'
      },
      escrowLocked: true,
      escrowReleased: false,
      storekeeperInwardStatus: 'In Transit',
      storekeeperBarcodeScanned: false,
      damageCheckPassed: true
    };
    setOrders([newPO, ...orders]);
    showToast(`Bulk PO ${newPO.id} created! Escrow ₹${newPO.totalPrice.toLocaleString('en-IN')} locked.`);
    setModalType(null);
    setActiveTab('orders');
  };

  const advanceStage = (poId) => {
    setOrders(orders.map(o => {
      if (o.id === poId && o.stageIndex < ORDER_STAGES.length - 1) {
        const next = o.stageIndex + 1;
        const isFinished = next === ORDER_STAGES.length - 1;
        showToast(`Workflow Advance: ${ORDER_STAGES[next].title}`);
        return {
          ...o,
          stageIndex: next,
          escrowReleased: isFinished ? true : o.escrowReleased,
          storekeeperBarcodeScanned: next >= 3 ? true : o.storekeeperBarcodeScanned,
          storekeeperInwardStatus: next >= 3 ? 'QA Passed & Inward Docked' : o.storekeeperInwardStatus
        };
      }
      return o;
    }));
  };

  const handleConfirmStorekeeperQA = () => {
    if (!selectedScanOrder) return;
    advanceStage(selectedScanOrder.id);
    showToast(`Storekeeper Barcode & QA Passed for ${selectedScanOrder.id}!`);
    setModalType(null);
  };

  const handleConfirmCfoEscrowRelease = () => {
    if (!selectedCfoOrder) return;
    setOrders(orders.map(o => {
      if (o.id === selectedCfoOrder.id) {
        return {
          ...o,
          stageIndex: 4,
          escrowReleased: true,
          storekeeperInwardStatus: 'QA Passed & Escrow Disbursed'
        };
      }
      return o;
    }));
    showToast(`2FA Verified! ICICI Escrow ₹${selectedCfoOrder.totalPrice.toLocaleString('en-IN')} disbursed!`);
    setModalType(null);
  };

  const filtered = MATERIALS_DATA.filter(m => {
    const matchQuery = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.supplier.toLowerCase().includes(search.toLowerCase()) ||
      m.location.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchHub = selectedHub === 'All Hubs' || m.hub === selectedHub;
    return matchQuery && matchCat && matchHub;
  });

  const totalProcurementSpend = orders.reduce((acc, o) => acc + o.totalPrice, 0);
  const escrowVaultLocked = orders.filter(o => o.escrowLocked && !o.escrowReleased).reduce((sum, o) => sum + o.totalPrice, 0);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

      {/* TOAST */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 2000, backgroundColor: '#6366f1', color: '#fff', padding: '12px 22px', borderRadius: 14, boxShadow: '0 14px 35px rgba(99, 102, 241, 0.5)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700 }}>
          <Icons.CheckCircle /> {toast}
        </div>
      )}

      {/* GLOBAL TRADE TICKER HEADER */}
      <div style={{ background: '#0f172a', borderBottom: '1px solid #1e293b', padding: '6px 24px', fontSize: 11, color: '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ color: '#06b6d4', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icons.Globe /> GLOBAL RAWPROCURA XTREME SUPER-MARKETPLACE TICKER:
          </span>
          <span>Steel IS 2062: <strong style={{ color: '#34d399' }}>₹58,500/T (-2.4% BUY)</strong></span>
          <span>SS 304 Coils: <strong style={{ color: '#cbd5e1' }}>₹1,95,000/T (STABLE)</strong></span>
          <span>60+ Live Materials | TUV SUD &amp; SGS Audited</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#34d399', fontWeight: 700 }}>● ICICI Escrow Protection Vault: ₹{(escrowVaultLocked / 100000).toFixed(2)} Lakhs Secured</span>
        </div>
      </div>

      {/* TOPBAR HEADER */}
      <header style={{ height: 70, borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, #06b6d4, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(6, 182, 212, 0.45)' }}>
            <Icons.Globe />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 800, color: '#fff', fontSize: 19, letterSpacing: '0.5px' }}>RAWPROCURA</span>
              <span className="badge-ai-chip"><Icons.Bot /> ENTERPRISE XTREME</span>
            </div>
            <div style={{ fontSize: 10, color: '#64748b' }}>Global B2B Trade &amp; Raw Material Super-Marketplace (Reverse Bidding &amp; Incoterms)</div>
          </div>
        </div>

        {/* ROLE SIMULATION SWITCHER */}
        <div style={{ display: 'flex', alignItems: 'center', background: '#070b14', border: '1px solid #1e293b', padding: '4px 6px', borderRadius: 12, gap: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#64748b', padding: '0 6px', textTransform: 'uppercase' }}>Active View:</span>
          {[
            { role: 'Buyer', icon: <Icons.Search /> },
            { role: 'Storekeeper', icon: <Icons.ScanBarcode /> },
            { role: 'CFO', icon: <Icons.Lock /> }
          ].map(r => (
            <button
              key={r.role}
              onClick={() => { setUserRole(r.role); showToast(`Active Dashboard Perspective: ${r.role}`); }}
              style={{
                background: userRole === r.role ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent',
                color: userRole === r.role ? '#fff' : '#94a3b8',
                border: 'none', padding: '6px 14px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5
              }}
            >
              {r.icon} {r.role}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setModalType('compare')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#1e293b', border: '1px solid #334155', color: '#cbd5e1', padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
            <Icons.Compare /> Compare
          </button>
          <button onClick={() => setModalType('rfq')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
            <Icons.Plus /> Broadcast RFQ
          </button>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* SIDEBAR */}
        <aside style={{ width: 255, borderRight: '1px solid #1e293b', minHeight: 'calc(100vh - 100px)', padding: 20, background: '#070b14', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 100, height: 'calc(100vh - 100px)' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: '#475569', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button onClick={() => setActiveTab('browse')} className={`nav-item ${activeTab === 'browse' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'browse' ? '#fff' : '#94a3b8', textAlign: 'left' }}>
                <Icons.Search /> Catalog &amp; AI Volatility
              </button>
              <button onClick={() => setActiveTab('rfqMarketplace')} className={`nav-item ${activeTab === 'rfqMarketplace' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'rfqMarketplace' ? '#fff' : '#94a3b8', textAlign: 'left' }}>
                <Icons.Globe /> Reverse Auction Board
              </button>
              <button onClick={() => setActiveTab('orders')} className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'orders' ? '#fff' : '#94a3b8', textAlign: 'left' }}>
                <Icons.Package /> Live IoT Truck Tracking
                <span style={{ marginLeft: 'auto', background: activeTab === 'orders' ? 'rgba(255,255,255,0.2)' : '#1e293b', padding: '2px 8px', borderRadius: 12, fontSize: 10, fontWeight: 700 }}>{orders.length}</span>
              </button>
              <button onClick={() => setActiveTab('escrow')} className={`nav-item ${activeTab === 'escrow' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'escrow' ? '#fff' : '#94a3b8', textAlign: 'left' }}>
                <Icons.Lock /> Smart Escrow Vault
              </button>
              <button onClick={() => setActiveTab('analytics')} className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'analytics' ? '#fff' : '#94a3b8', textAlign: 'left' }}>
                <Icons.Trending /> Spend Analytics
              </button>
            </div>
          </div>

          <div style={{ background: '#0f172a', padding: 16, borderRadius: 14, border: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, color: '#34d399', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icons.Shield /> TUV SUD &amp; SGS Certified
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 6, lineHeight: 1.4 }}>
              60+ Global Materials with Trade Assurance &amp; ICICI Escrow Protection.
            </div>
          </div>
        </aside>

        {/* MAIN VIEW AREA */}
        <main style={{ flex: 1, padding: '28px 36px', maxWidth: 1320, margin: '0 auto' }}>

          {/* CATALOG TAB */}
          {activeTab === 'browse' && (
            <div className="animate-fade-in">

              {/* AI VOLATILITY WIDGET */}
              <div className="glass-card" style={{ padding: 24, marginBottom: 26, background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="badge-ai-chip"><Icons.Bot /> AI PROCUREMENT ASSISTANT</span>
                      <span style={{ fontSize: 11, color: '#34d399', fontWeight: 700 }}>Market Confidence: {selectedAiGraphMat.aiConfidence}</span>
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '6px 0 0 0' }}>Pan-India Predictive Price Trends &amp; Volatility Engine</h2>
                  </div>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {MATERIALS_DATA.slice(0, 4).map(m => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedAiGraphMat(m)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: 8,
                          fontSize: 11,
                          fontWeight: 700,
                          border: '1px solid',
                          borderColor: selectedAiGraphMat.id === m.id ? '#6366f1' : '#1e293b',
                          background: selectedAiGraphMat.id === m.id ? '#6366f1' : '#070b14',
                          color: selectedAiGraphMat.id === m.id ? '#fff' : '#94a3b8',
                          cursor: 'pointer'
                        }}
                      >
                        {m.category.split(',')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, alignItems: 'center' }}>
                  <div style={{ background: '#070b14', padding: 18, borderRadius: 14, border: '1px solid #1e293b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 10 }}>
                      <span style={{ color: '#cbd5e1', fontWeight: 700 }}>{selectedAiGraphMat.name}</span>
                      <span style={{ color: '#34d399', fontWeight: 800 }}>{selectedAiGraphMat.aiSignal}</span>
                    </div>

                    <div style={{ height: 120, width: '100%', position: 'relative' }}>
                      <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path d="M 0,70 L 60,60 L 120,45 L 180,35 L 240,25 L 300,15 L 300,100 L 0,100 Z" fill="rgba(99, 102, 241, 0.2)" />
                        <path d="M 0,70 L 60,60 L 120,45 L 180,35 L 240,25 L 300,15" fill="none" stroke="#6366f1" strokeWidth="3" />
                        <circle cx="240" cy="25" r="5" fill="#34d399" />
                      </svg>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#64748b', marginTop: 8 }}>
                      {selectedAiGraphMat.priceHistory.map((h, i) => (
                        <span key={i}>{h.day}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: '#070b14', padding: 18, borderRadius: 14, border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: '#c084fc', textTransform: 'uppercase' }}>
                      AI Procurement Recommendation
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>
                      Optimal Buy Window Open for {selectedAiGraphMat.name}
                    </div>
                    <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                      Current spot rate ₹{selectedAiGraphMat.pricePerUnit.toLocaleString('en-IN')}/MT is trading 2.4% below the 30-day moving average. Lock supply contract now to optimize margins.
                    </p>
                    <button onClick={() => handlePlaceBulk(selectedAiGraphMat)} className="action-btn-primary" style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, color: '#fff', cursor: 'pointer', marginTop: 4 }}>
                      Lock AI Recommended Rate ➔
                    </button>
                  </div>
                </div>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div style={{ background: '#0f172a', padding: 18, borderRadius: 16, border: '1px solid #1e293b', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    placeholder="Search 60+ raw materials, structural steel, polymers, yarns, caustic soda, Kraft paper, cement..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="procure-input"
                    style={{ flex: 1, minWidth: 280 }}
                  />

                  <select
                    value={selectedHub}
                    onChange={e => setSelectedHub(e.target.value)}
                    style={{ background: '#070b14', border: '1px solid #1e293b', color: '#38bdf8', padding: '9px 14px', borderRadius: 10, fontSize: 12, fontWeight: 700, outline: 'none' }}
                  >
                    {PAN_INDIA_HUBS.map(hub => (
                      <option key={hub} value={hub}>{hub}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid #1e293b' }}>
                  {['All', 'Metals & Alloys', 'Polymers & Plastics', 'Textiles & Yarns', 'Elastomers', 'Chemicals & Minerals', 'Packaging', 'Construction', 'Electrical & Battery Materials'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, border: '1px solid', borderColor: selectedCategory === cat ? '#6366f1' : '#1e293b', background: selectedCategory === cat ? '#6366f1' : '#070b14', color: selectedCategory === cat ? '#fff' : '#94a3b8', cursor: 'pointer' }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* 60+ MATERIAL CARDS GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))', gap: 24 }}>
                {filtered.map(mat => (
                  <div key={mat.id} className="glass-card glass-card-hover" style={{ padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ height: 160, width: '100%', borderRadius: 12, overflow: 'hidden', position: 'relative', marginBottom: 14 }}>
                        <img src={mat.image} alt={mat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span className="badge-diamond-supplier" style={{ position: 'absolute', top: 10, left: 10 }}>
                          <Icons.Award /> Diamond Supplier
                        </span>
                        <span className="badge-hub-chip" style={{ position: 'absolute', top: 10, right: 10 }}>
                          <Icons.MapPin /> {mat.hub}
                        </span>
                        <span style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(7, 11, 20, 0.92)', color: '#34d399', fontWeight: 800, padding: '4px 10px', borderRadius: 8, fontSize: 14, border: '1px solid rgba(16, 185, 129, 0.4)' }}>
                          ₹{mat.pricePerUnit.toLocaleString('en-IN')}/{mat.unit}
                        </span>
                      </div>

                      <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 800, textTransform: 'uppercase' }}>{mat.category}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, margin: '4px 0 10px 0', color: '#fff' }}>{mat.name}</h3>

                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                        <span className="badge-tuv-audit" onClick={() => handleViewFactory(mat)} style={{ cursor: 'pointer' }}>
                          <Icons.Video /> 360° Factory Tour
                        </span>
                        <span className="badge-esg-green" onClick={() => handleViewOem(mat)} style={{ cursor: 'pointer' }}>
                          ⚡ OEM/ODM Desk
                        </span>
                        <span className="badge-sha256-hash" onClick={() => handleViewIncoterms(mat)} style={{ cursor: 'pointer' }}>
                          🚢 Incoterms Freight
                        </span>
                      </div>

                      {/* WHOLESALE TIER TABLE */}
                      <div style={{ background: '#070b14', padding: 10, borderRadius: 10, marginBottom: 14, border: '1px solid #1e293b' }}>
                        <div style={{ fontSize: 10, fontWeight: 800, color: '#818cf8', textTransform: 'uppercase', marginBottom: 6 }}>Volume Tier Matrix</div>
                        <table className="tier-matrix-table">
                          <thead>
                            <tr>
                              <th>Qty Tier</th>
                              <th>Rate (INR)</th>
                              <th>Discount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mat.priceTiers.map((tr, idx) => (
                              <tr key={idx} className={idx === 2 ? 'active-tier' : ''}>
                                <td>{tr.range}</td>
                                <td>₹{tr.rate.toLocaleString('en-IN')}</td>
                                <td>{idx === 0 ? 'Standard' : idx === 1 ? '-7% Off' : '🔥 -13% Max'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div style={{ background: '#070b14', padding: 10, borderRadius: 10, fontSize: 11, color: '#94a3b8', marginBottom: 14 }}>
                        Supplier: <strong style={{ color: '#fff' }}>{mat.supplier}</strong> | Lead: {mat.leadTime}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handleOpenChat(mat)} style={{ flex: 1, padding: '8px', background: '#06b6d4', color: '#fff', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                        <Icons.MessageSquare /> Bargain
                      </button>
                      <button onClick={() => handleViewMtc(mat)} className="action-btn-secondary" style={{ padding: '8px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                        MTC
                      </button>
                      <button onClick={() => handlePlaceBulk(mat)} className="action-btn-primary" style={{ flex: 1, padding: '8px', color: '#fff', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                        <Icons.Package /> Lock Escrow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REVERSE AUCTION BOARD TAB */}
          {activeTab === 'rfqMarketplace' && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: 22 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 6px 0' }}>Live B2B Reverse Auction &amp; RFQ Board</h2>
                <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Buyers post custom specifications; verified Indian manufacturers compete in real time.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {reverseBids.map(bid => (
                  <div key={bid.id} className="glass-card" style={{ padding: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontFamily: 'monospace', color: '#818cf8', fontWeight: 800 }}>{bid.id}</span>
                        <span className="badge-ai-chip">{bid.matchScore} AI Match</span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '6px 0 2px 0' }}>{bid.rfqTitle}</h3>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>Posted by: <strong style={{ color: '#cbd5e1' }}>{bid.buyer}</strong> | Current Lowest Bidder: <strong style={{ color: '#38bdf8' }}>{bid.supplier}</strong></div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#34d399' }}>₹{bid.currentLowest.toLocaleString('en-IN')}/MT</div>
                      <div style={{ fontSize: 11, color: '#64748b' }}>Lead Time: {bid.leadTime}</div>
                      <button onClick={() => { showToast(`Accepted lowest reverse bid for ${bid.id}! ICICI Escrow locked.`); setActiveTab('orders'); }} className="action-btn-primary" style={{ padding: '8px 16px', borderRadius: 8, color: '#fff', fontWeight: 700, marginTop: 8, cursor: 'pointer' }}>
                        Accept Lowest Bid &amp; Lock Escrow ➔
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ORDERS & IOT TRACKING TAB */}
          {activeTab === 'orders' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 18 }}>Live IoT &amp; Inter-State E-Way Bill Tracking</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {orders.map(order => (
                  <div key={order.id} className="glass-card" style={{ padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                      <div>
                        <span style={{ fontSize: 16, fontWeight: 800, color: '#818cf8', fontFamily: 'monospace' }}>{order.id}</span>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 2 }}>{order.materialName}</div>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#34d399' }}>₹{order.totalPrice.toLocaleString('en-IN')}</div>
                    </div>

                    <div style={{ background: '#070b14', padding: 16, borderRadius: 14, border: '1px solid #1e293b', marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700 }}>
                        <div style={{ color: '#34d399' }}>📍 {order.gpsRoute.origin}</div>
                        <div style={{ color: '#38bdf8' }}>🚚 {order.gpsRoute.currentLocation}</div>
                        <div style={{ color: '#f59e0b' }}>🏭 {order.gpsRoute.destination}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                      <button onClick={() => handleViewInvoice(order)} className="action-btn-secondary" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Icons.FileText /> Tax Invoice
                      </button>

                      {userRole === 'Storekeeper' && order.stageIndex === 2 && (
                        <button onClick={() => handleOpenBarcodeScanner(order)} style={{ padding: '8px 14px', background: '#06b6d4', color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Icons.ScanBarcode /> Barcode QA
                        </button>
                      )}

                      {userRole === 'CFO' && order.stageIndex === 3 && !order.escrowReleased && (
                        <button onClick={() => handleOpenCfoApproval(order)} style={{ padding: '8px 14px', background: '#f59e0b', color: '#000', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Icons.Lock /> Authorize 2FA Payout
                        </button>
                      )}

                      {order.stageIndex < ORDER_STAGES.length - 1 && (
                        <button onClick={() => advanceStage(order.id)} className="action-btn-primary" style={{ padding: '8px 14px', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          Advance Stage <Icons.ChevronRight />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ESCROW LEDGER TAB */}
          {activeTab === 'escrow' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 18 }}>Smart Contract Escrow Ledger</h2>
              <div className="glass-card" style={{ padding: 24 }}>
                <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 14 }}>Escrow Locked Funds: <strong style={{ color: '#f59e0b', fontSize: 18 }}>₹{(escrowVaultLocked / 100000).toFixed(2)} Lakhs</strong></div>
                {orders.map(o => (
                  <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #1e293b' }}>
                    <div>
                      <span style={{ fontFamily: 'monospace', color: '#c084fc', fontSize: 12 }}>{o.smartContractHash}</span>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 2 }}>{o.supplier} ({o.id})</div>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#34d399' }}>₹{o.totalPrice.toLocaleString('en-IN')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SPEND ANALYTICS TAB */}
          {activeTab === 'analytics' && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 18 }}>Executive Spend Analytics</h2>
              <div className="glass-card" style={{ padding: 24 }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>Total Spend: ₹{totalProcurementSpend.toLocaleString('en-IN')}</div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODALS */}

      {/* 360 FACTORY TOUR MODAL */}
      {modalType === 'factory' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 640 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>360° Virtual Factory Tour &amp; TUV Audit</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <div style={{ background: '#070b14', padding: 14, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{activeMat.supplier}</div>
              <div style={{ color: '#38bdf8', marginTop: 4 }}>TUV SUD Report #TUV-2026-8819 Verified Active</div>
              <div style={{ height: 180, background: '#121b2d', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontWeight: 800 }}>
                ▶ 360° HD Live Plant Video Stream Active
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OEM/ODM DESK MODAL */}
      {modalType === 'oem' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 580 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>OEM/ODM &amp; Custom Labeling Desk</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700 }}>Custom Stamping / Private Packaging</label>
                <input type="text" placeholder="e.g. Add company logo stamp & anti-corrosion VCI bag packing" className="procure-input" />
              </div>
              <button onClick={() => { showToast('Custom OEM/ODM request sent to factory head!'); setModalType(null); }} className="action-btn-primary" style={{ padding: '12px', color: '#fff', fontWeight: 700, borderRadius: 8, cursor: 'pointer' }}>
                Submit OEM Specifications
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INCOTERMS FREIGHT CALCULATOR MODAL */}
      {modalType === 'incoterms' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 620 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Incoterms Logistics &amp; Freight Estimator</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              {['FOB', 'CIF', 'EXW'].map(term => (
                <button
                  key={term}
                  onClick={() => setSelectedIncoterm(term)}
                  className={`incoterm-pill ${selectedIncoterm === term ? 'active' : ''}`}
                >
                  {term} ({term === 'FOB' ? 'Free on Board' : term === 'CIF' ? 'Cost, Ins & Freight' : 'Ex Works'})
                </button>
              ))}
            </div>

            <div style={{ background: '#070b14', padding: 16, borderRadius: 14, border: '1px solid #1e293b', fontSize: 12 }}>
              <div>Base Rate: <strong style={{ color: '#fff' }}>₹{activeMat.pricePerUnit.toLocaleString('en-IN')}/MT</strong></div>
              <div style={{ marginTop: 6 }}>Active Term Multiplier: <strong style={{ color: '#38bdf8' }}>{selectedIncoterm} Term</strong></div>
              <div style={{ marginTop: 8, fontSize: 15, fontWeight: 800, color: '#34d399' }}>
                Estimated Rate: ₹{calculateDynamicPrice(activeMat, 1).unitRate.toLocaleString('en-IN')}/MT
              </div>
            </div>
          </div>
        </div>
      )}

      {modalType === 'mtc' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 600 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>NABL Mill Test Certificate</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <div style={{ background: '#070b14', padding: 14, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{activeMat.name}</div>
              <div style={{ color: '#34d399', marginTop: 4 }}>ISO 9001:2015 &amp; NABL Accredited Laboratory Validated</div>
            </div>
          </div>
        </div>
      )}

      {modalType === 'bulk' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 26, maxWidth: 640 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Place Bulk PO &amp; Lock Smart Escrow</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            {(() => {
              const pricing = calculateDynamicPrice(activeMat, bulkQty);
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700 }}>Order Tonnage ({activeMat.unit}s)</label>
                    <input type="number" min={activeMat.moq} value={bulkQty} onChange={e => setBulkQty(Number(e.target.value))} className="procure-input" />
                  </div>

                  <div style={{ background: '#070b14', padding: 16, borderRadius: 14, border: '1px solid #1e293b', fontSize: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94a3b8' }}>Base Subtotal</span>
                      <span style={{ color: '#fff', fontWeight: 700 }}>₹{pricing.base.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94a3b8' }}>CGST (9%) + SGST (9%)</span>
                      <span style={{ color: '#818cf8', fontWeight: 700 }}>₹{(pricing.cgst + pricing.sgst).toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid #1e293b', fontWeight: 800, fontSize: 15 }}>
                      <span style={{ color: '#fff' }}>Total Escrow Lock</span>
                      <span style={{ color: '#34d399' }}>₹{pricing.total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button onClick={confirmBulk} className="action-btn-primary" style={{ padding: '12px', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    Authorize PO &amp; Lock Escrow
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* OFFICIAL B2B TAX INVOICE MODAL WITH WINDOW.PRINT TRIGGER */}
      {modalType === 'invoice' && activeInvoiceOrder && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 26, maxWidth: 680 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 800, textTransform: 'uppercase' }}>OFFICIAL B2B TAX INVOICE</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: '4px 0 0 0' }}>{activeInvoiceOrder.id}</h3>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={triggerPrintInvoice} className="action-btn-secondary" style={{ padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icons.Printer /> Print Invoice
                </button>
                <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
              </div>
            </div>

            <div style={{ background: '#070b14', padding: 16, borderRadius: 14, border: '1px solid #1e293b', fontSize: 12, marginBottom: 16 }}>
              <div>Supplier: <strong style={{ color: '#fff' }}>{activeInvoiceOrder.supplier}</strong> (GSTIN: {activeInvoiceOrder.gstin})</div>
              <div style={{ marginTop: 4 }}>Buyer: <strong style={{ color: '#fff' }}>Apex Manufacturing Pvt Ltd</strong> (GSTIN: 33AAACA9876P1Z4)</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#070b14', padding: 16, borderRadius: 14, border: '1px solid #1e293b' }}>
              <div>Total Invoice Value:</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#34d399' }}>₹{activeInvoiceOrder.totalPrice.toLocaleString('en-IN')}</div>
            </div>
          </div>
        </div>
      )}

      {modalType === 'barcode' && selectedScanOrder && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 540 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Storekeeper Barcode &amp; QA Check</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <button onClick={handleConfirmStorekeeperQA} style={{ width: '100%', padding: '12px', background: '#06b6d4', color: '#fff', fontWeight: 700, borderRadius: 8, cursor: 'pointer' }}>
              Approve Inward QA Pass
            </button>
          </div>
        </div>
      )}

      {modalType === 'cfoApprove' && selectedCfoOrder && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 540 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>CFO 2FA Escrow Release</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <button onClick={handleConfirmCfoEscrowRelease} style={{ width: '100%', padding: '12px', background: '#f59e0b', color: '#000', fontWeight: 800, borderRadius: 8, cursor: 'pointer' }}>
              Authorize Payout Release
            </button>
          </div>
        </div>
      )}

      {modalType === 'chat' && activeChatMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 600 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Bargain Chat with {activeChatMat.supplier}</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>
            <div style={{ height: 250, overflowY: 'auto', background: '#070b14', padding: 12, borderRadius: 12, border: '1px solid #1e293b', marginBottom: 14 }}>
              {chatMessages.map((m, i) => (
                <div key={i} style={{ marginBottom: 8, fontSize: 12, color: m.sender === 'user' ? '#818cf8' : '#34d399' }}>
                  <strong>{m.name}:</strong> {m.text}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Enter counter offer..." className="procure-input" />
              <button onClick={() => { if(chatInput) { setChatMessages([...chatMessages, { sender: 'user', name: 'Buyer', text: chatInput, time: 'Now' }]); setChatInput(''); } }} className="action-btn-primary" style={{ padding: '0 16px', color: '#fff', borderRadius: 8, cursor: 'pointer' }}>Send</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
