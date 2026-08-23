import React, { useState } from 'react';
import './App.css';

// Zero-dependency Pure SVGs
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
  FileCheck: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></svg>,
  Plus: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  Users: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  UserCheck: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
  Trending: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
  FileText: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>,
  X: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
  ChevronRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>,
  Filter: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>,
  Sliders: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="1" x2="7" y1="14" y2="14" /><line x1="9" x2="15" y1="8" y2="8" /><line x1="17" x2="23" y1="16" y2="16" /></svg>,
  Download: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
  Printer: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>,
  Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
  Trash2: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>,
  Info: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
  ExternalLink: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
};

// Rich Indian B2B Materials Database with Images, Google Map Links, Contacts & Real Feedback
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
    hsnCode: '7208',
    supplierRating: 4.9,
    reviewsCount: 310,
    location: 'Chennai Port Industrial Area, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Chennai+Port+Industrial+Area',
    pricePerUnit: 58500,
    bulkTierPrice: 54200, // Discount for >= 20 Tons
    unit: 'Metric Ton',
    moq: 5,
    leadTime: '3-5 days',
    inStock: 350,
    sampleCost: 'Free Sample (Coupon Spec)',
    specs: ['Tensile: 410-540 MPa', 'Thickness: 6.0mm - 40.0mm', 'BIS 2062 Certified', 'Ultrasonic Tested Grade A'],
    certifications: ['ISO 9001:2015', 'BIS License CM/L-029381', 'CE Marking Certified'],
    labReport: { carbon: '0.20% max', manganese: '1.50% max', sulfur: '0.045% max', yieldStrength: '250 MPa min' },
    chemicalAnalysis: { Fe: '98.5%', C: '0.20% max', Mn: '1.50% max', P: '0.045% max', S: '0.045% max' },
    physicalProps: { 'Yield Strength': '250 MPa min', 'Tensile Strength': '410-540 MPa', Elongation: '23%', Density: '7.85 g/cm³' },
    reviews: [
      { user: 'Sundaram Fasteners Ltd', rating: 5, comment: 'Exceptional chemical purity. Delivery reached Coimbatore yard in 3 days.' },
      { user: 'L&T Heavy Engineering', rating: 5, comment: 'Consistent thickness tolerance. Lab MTC match was 100% accurate.' }
    ]
  },
  {
    id: 'MAT-IN-02',
    name: 'Reliance HDPE Blow Moulding Polymer Granules (B56003)',
    category: 'Polymers & Plastics',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    supplier: 'Reliance Polymer Logistics Hub',
    contactPerson: 'Bhavin Patel (Key Accounts)',
    phone: '+91 97241 88200',
    email: 'polymers@ril-distribution.com',
    gstin: '24AAACR5055K1Z8',
    hsnCode: '3901',
    supplierRating: 4.8,
    reviewsCount: 184,
    location: 'Sanand Industrial Estate, Ahmedabad, Gujarat',
    mapUrl: 'https://maps.google.com/?q=Sanand+Industrial+Estate+Ahmedabad',
    pricePerUnit: 98400,
    bulkTierPrice: 92000,
    unit: 'Metric Ton',
    moq: 3,
    leadTime: '2-4 days',
    inStock: 820,
    sampleCost: 'Free 2kg Sample Sack',
    specs: ['MFR: 0.33 g/10min', 'Density: 0.958 g/cc', 'BIS 7328 Food Safe'],
    certifications: ['REACH EU Certified', 'FDA 21 CFR Compliant', 'ISO 14001'],
    labReport: { carbon: 'Polyolefin Base', density: '0.958 g/cm³', meltFlow: '0.33g/10min', tensileYield: '28 MPa' },
    chemicalAnalysis: { Polymer: 'HDPE 99.8%', Additives: 'Thermal Stabilizer 0.2%' },
    physicalProps: { 'Melt Flow Rate': '0.33 g/10min', Density: '0.958 g/cm³', 'Tensile Yield': '28 MPa', 'ESCR (F50)': '> 45 hrs' },
    reviews: [
      { user: 'Supreme Containers Pvt Ltd', rating: 5, comment: 'Zero contamination, melt flow index perfectly matches high-speed extrusion.' }
    ]
  },
  {
    id: 'MAT-IN-03',
    name: 'RSS-4 Grade Natural Smoked Sheet Rubber (High Elasticity)',
    category: 'Elastomers',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    supplier: 'Kerala Plantation Latex Syndicate',
    contactPerson: 'K. M. Thomas (Managing Partner)',
    phone: '+91 94471 45012',
    email: 'keralalatex@cochinrubber.in',
    gstin: '32AABCK8901D1ZM',
    hsnCode: '4001',
    supplierRating: 4.9,
    reviewsCount: 245,
    location: 'Kottayam Rubber Zone / Coimbatore SIDCO Yard',
    mapUrl: 'https://maps.google.com/?q=Kottayam+Rubber+Board+Kerala',
    pricePerUnit: 182000,
    bulkTierPrice: 174000,
    unit: 'Metric Ton',
    moq: 2,
    leadTime: '4-7 days',
    inStock: 140,
    sampleCost: 'Free 500g Test Sheet',
    specs: ['Dirt Content: < 0.05%', 'Ash: < 0.5%', 'Rubber Board India Certified'],
    certifications: ['Indian Rubber Board Certified', 'Green Leaf Eco-Tested'],
    labReport: { dirtContent: '0.032%', volatileMatter: '0.41%', ashContent: '0.38%', nitrogen: '0.45%' },
    chemicalAnalysis: { 'Rubber Hydrocarbon': '93.8%', Ash: '0.38%', Volatile: '0.41%', Nitrogen: '0.45%' },
    physicalProps: { 'Mooney Viscosity': '68 ML(1+4) 100°C', Color: 'Brownish Amber', Elasticity: '85%' },
    reviews: [
      { user: 'MRF Tyre Ancillary Hub', rating: 5, comment: 'Highest elasticity grade. Smoked texture and low ash content as advertised.' }
    ]
  },
  {
    id: 'MAT-IN-04',
    name: 'Industrial Grade Caustic Soda Flakes (NaOH 99.5%)',
    category: 'Chemicals & Minerals',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=600&q=80',
    supplier: 'Grasim Chemical Industries',
    contactPerson: 'V. Ramanathan (Sales Head)',
    phone: '+91 98840 77112',
    email: 'sales@grasimchemicals.in',
    gstin: '23AAACG1234L1ZT',
    hsnCode: '2815',
    supplierRating: 4.7,
    reviewsCount: 92,
    location: 'Ranipet Chemical Industrial Complex, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Ranipet+Industrial+Complex',
    pricePerUnit: 44000,
    bulkTierPrice: 40500,
    unit: 'Metric Ton',
    moq: 5,
    leadTime: '3-6 days',
    inStock: 500,
    sampleCost: 'Paid Sample (₹500 Freight)',
    specs: ['Purity: 99.5% min', 'Iron (as Fe): < 15 ppm', 'IS 252 Certified'],
    certifications: ['ISO 9001:2015', 'BIS IS 252 (Pure Grade)'],
    labReport: { purity: '99.62%', sodiumCarbonate: '0.22%', chlorides: '0.015%', sulfates: '0.008%' },
    chemicalAnalysis: { NaOH: '99.62%', Na2CO3: '0.22%', NaCl: '0.015%', Fe: '12 ppm' },
    physicalProps: { Appearance: 'White Flakes', 'Melting Point': '318°C', Solubility: '1110 g/L in water' },
    reviews: [
      { user: 'Tamil Nadu Dyes & Bleaching Cluster', rating: 4, comment: 'Consistent flaking size. Fast dissolution in textile dyeing tanks.' }
    ]
  },
  {
    id: 'MAT-IN-05',
    name: 'Virgin E-Glass Woven Roving (600 GSM)',
    category: 'Composites & Fiber',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    supplier: 'Coimbatore Composite Fibres Ltd',
    contactPerson: 'S. Karthik (Tech Director)',
    phone: '+91 94220 33190',
    email: 'info@coimbatorecomposites.com',
    gstin: '33AABCC9812M1ZN',
    hsnCode: '7019',
    supplierRating: 4.6,
    reviewsCount: 78,
    location: 'Coimbatore SIDCO Industrial Estate, Tamil Nadu',
    mapUrl: 'https://maps.google.com/?q=Coimbatore+SIDCO+Industrial+Estate',
    pricePerUnit: 165000,
    bulkTierPrice: 154000,
    unit: 'Metric Ton',
    moq: 2,
    leadTime: '2-3 days',
    inStock: 85,
    sampleCost: 'Free Swatch Pack',
    specs: ['Weight: 600 gsm ± 5%', 'Silane Sizing Agent', 'Aero & Auto Grade', 'ISO 3374 Verified'],
    certifications: ['ISO 9001:2015', 'Aero Composite Standard Grade B'],
    labReport: { weightGsm: '602 gsm', moisture: '0.08%', tensileWarp: '3420 MPa', tensileWeft: '3380 MPa' },
    chemicalAnalysis: { SiO2: '54.5%', Al2O3: '14.5%', CaO: '17.2%', B2O3: '6.8%' },
    physicalProps: { 'Tensile Strength': '3400 MPa', 'Elastic Modulus': '73 GPa', Density: '2.54 g/cm³' },
    reviews: [
      { user: 'Apex Wind Tech Pvt Ltd', rating: 5, comment: 'Excellent resin wet-out speed and high warp tensile strength.' }
    ]
  },
  {
    id: 'MAT-IN-06',
    name: 'Primary Aluminium Ingot 99.7% (P1020 Grade)',
    category: 'Metals & Alloys',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    supplier: 'Hindalco Industrial Metals Ltd',
    contactPerson: 'Anil Deshmukh (Regional Sales Head)',
    phone: '+91 98200 44100',
    email: 'b2baluminium@hindalco.adityabirla.com',
    gstin: '27AAACH1111E1Z5',
    hsnCode: '7601',
    supplierRating: 4.9,
    reviewsCount: 164,
    location: 'Renukoot / Mumbai Central Hub, Maharashtra',
    mapUrl: 'https://maps.google.com/?q=Mumbai+Central+Industrial+Zone',
    pricePerUnit: 235000,
    bulkTierPrice: 224000,
    unit: 'Metric Ton',
    moq: 2,
    leadTime: '3-5 days',
    inStock: 240,
    sampleCost: 'Free Coupon Sample',
    specs: ['Purity: 99.7% min', 'Fe: < 0.20%', 'Si: < 0.10%', 'LME Grade Registered'],
    certifications: ['LME Approved Brand', 'ISO 9001:2015', 'BIS IS 259'],
    labReport: { aluminum: '99.73%', iron: '0.14%', silicon: '0.07%', zinc: '0.01%' },
    chemicalAnalysis: { Al: '99.73%', Fe: '0.14%', Si: '0.07%', Zn: '0.01%' },
    physicalProps: { Density: '2.70 g/cm³', 'Melting Point': '660°C', Conductivity: '62% IACS' },
    reviews: [
      { user: 'Hindalco Ancillary Die-Casting', rating: 5, comment: 'Zero dross formation during remelting. LME grade purity verified.' }
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
  const [userRole, setUserRole] = useState('Buyer'); // 'Buyer' | 'Storekeeper' | 'Owner'
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [moqFilter, setMoqFilter] = useState(250);
  const [maxPrice, setMaxPrice] = useState(250000);
  const [priceSort, setPriceSort] = useState('default');

  const [orders, setOrders] = useState([
    {
      id: 'PO-IND-8821',
      materialName: 'IS 2062 Grade E250 Hot Rolled Structural Steel Plates',
      supplier: 'Tata Steel Industrial Hub Ltd',
      phone: '+91 98450 12890',
      gstin: '20AAACT2727Q1ZW',
      hsnCode: '7208',
      quantity: 15,
      unit: 'Metric Tons',
      basePrice: 877500,
      gstAmount: 157950,
      totalPrice: 1035450,
      orderDate: '14 Aug 2026',
      stageIndex: 2,
      assignedManager: 'K. Senthil Kumar (Procurement Head)',
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: 'Plant Yard B, Peelamedu, Coimbatore, TN',
      ewayBill: '3810-9923-4412',
      vehicleNo: 'TN-38-BZ-4412',
      escrowLocked: true,
      escrowReleased: false,
    },
    {
      id: 'PO-IND-8819',
      materialName: 'RSS-4 Grade Natural Smoked Sheet Rubber (High Elasticity)',
      supplier: 'Kerala Plantation Latex Syndicate',
      phone: '+91 94471 45012',
      gstin: '32AABCK8901D1ZM',
      hsnCode: '4001',
      quantity: 5,
      unit: 'Metric Tons',
      basePrice: 910000,
      gstAmount: 163800,
      totalPrice: 1073800,
      orderDate: '08 Aug 2026',
      stageIndex: 4,
      assignedManager: 'Ananya Sharma (Senior Buyer)',
      assignedStorekeeper: 'K. Velu (Warehouse Bay 1 - Coimbatore)',
      destination: 'Unit 2, SIDCO Industrial Estate, Coimbatore, TN',
      ewayBill: '4512-8812-3091',
      vehicleNo: 'KL-07-CD-8819',
      escrowLocked: true,
      escrowReleased: true,
    }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'E-Way Bill Dispatched', text: 'Vehicle TN-38-BZ-4412 carrying 15T Steel reached Salem Tollway.', time: '15 mins ago', category: 'order', read: false },
    { id: 2, title: 'Quality MTC Verified', text: 'Tata Steel MTC Certificate uploaded & verified cryptographically.', time: '2 hours ago', category: 'escrow', read: false },
    { id: 3, title: 'Sample Delivered', text: 'Reliance HDPE 2kg sample sack delivered to Plant QA dock.', time: '1 day ago', category: 'sample', read: true }
  ]);

  const [modalType, setModalType] = useState(null); // 'sample' | 'bulk' | 'rfq' | 'compare' | 'mtc' | 'invoice' | 'reviews' | 'contact'
  const [activeMat, setActiveMat] = useState(null);
  const [activeInvoiceOrder, setActiveInvoiceOrder] = useState(null);
  const [bulkQty, setBulkQty] = useState(10);
  const [selectedDestination, setSelectedDestination] = useState('Plant Yard B, Peelamedu, Coimbatore, TN');
  const [paymentTerm, setPaymentTerm] = useState('ICICI B2B Escrow Vault (100% Secured)');
  const [sampleNote, setSampleNote] = useState('');
  const [toast, setToast] = useState('');

  // Custom RFQ state
  const [rfqMaterial, setRfqMaterial] = useState('');
  const [rfqVolume, setRfqVolume] = useState('');
  const [rfqTargetPrice, setRfqTargetPrice] = useState('');
  const [rfqRemarks, setRfqRemarks] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const calculateDynamicPrice = (mat, qty) => {
    const rate = qty >= 20 ? (mat.bulkTierPrice || mat.pricePerUnit) : mat.pricePerUnit;
    const base = rate * qty;
    const gst = Math.round(base * 0.18);
    const standardBase = mat.pricePerUnit * qty;
    const savings = standardBase - base;
    return { unitRate: rate, base, gst, total: base + gst, isDiscounted: qty >= 20, savings };
  };

  const handleRequestSample = (m) => {
    setActiveMat(m);
    setModalType('sample');
  };

  const handlePlaceBulk = (m) => {
    setActiveMat(m);
    setBulkQty(m.moq);
    setModalType('bulk');
  };

  const handleViewSpecs = (m) => {
    setActiveMat(m);
    setModalType('mtc');
  };

  const handleViewReviews = (m) => {
    setActiveMat(m);
    setModalType('reviews');
  };

  const handleContactSupplier = (m) => {
    setActiveMat(m);
    setModalType('contact');
  };

  const handleViewInvoice = (order) => {
    setActiveInvoiceOrder(order);
    setModalType('invoice');
  };

  const confirmSample = () => {
    showToast(`Sample requested from ${activeMat.supplier}! Dispatch in 48h.`);
    setNotifications([
      {
        id: Date.now(),
        title: 'Sample Requested',
        text: `Sample coupon for ${activeMat.name} dispatched to QA Lab dock.`,
        time: 'Just now',
        category: 'sample',
        read: false
      },
      ...notifications
    ]);
    setModalType(null);
    setSampleNote('');
  };

  const confirmBulk = () => {
    const pricing = calculateDynamicPrice(activeMat, bulkQty);
    const newPO = {
      id: `PO-IND-${Math.floor(8800 + Math.random() * 1199)}`,
      materialName: activeMat.name,
      supplier: activeMat.supplier,
      phone: activeMat.phone,
      gstin: activeMat.gstin,
      hsnCode: activeMat.hsnCode || '7208',
      quantity: bulkQty,
      unit: activeMat.unit + 's',
      basePrice: pricing.base,
      gstAmount: pricing.gst,
      totalPrice: pricing.total,
      orderDate: 'Today (23 Aug 2026)',
      stageIndex: 1,
      assignedManager: 'K. Senthil Kumar (Procurement Head)',
      assignedStorekeeper: 'R. Murugan (Warehouse Bay 3 - Coimbatore)',
      destination: selectedDestination,
      ewayBill: `${Math.floor(3000 + Math.random() * 6000)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
      vehicleNo: `TN-38-AX-${Math.floor(1000 + Math.random() * 8999)}`,
      escrowLocked: true,
      escrowReleased: false,
    };
    setOrders([newPO, ...orders]);
    setNotifications([
      {
        id: Date.now(),
        title: 'Bulk PO Generated',
        text: `${newPO.id} raised for ₹${newPO.totalPrice.toLocaleString('en-IN')}. Storekeeper & Finance notified.`,
        time: 'Just now',
        category: 'order',
        read: false
      },
      ...notifications
    ]);
    showToast(`Bulk PO ${newPO.id} raised! Escrow ₹${newPO.totalPrice.toLocaleString('en-IN')} locked.`);
    setModalType(null);
    setActiveTab('orders');
  };

  const submitRFQ = (e) => {
    e.preventDefault();
    if (!rfqMaterial) return;
    showToast(`Custom RFQ broadcasted to 12 certified manufacturers!`);
    setNotifications([
      {
        id: Date.now(),
        title: 'Custom RFQ Broadcasted',
        text: `RFQ for "${rfqMaterial}" (${rfqVolume || 'Bulk'} tons) sent to verified suppliers.`,
        time: 'Just now',
        category: 'rfq',
        read: false
      },
      ...notifications
    ]);
    setRfqMaterial('');
    setRfqVolume('');
    setRfqTargetPrice('');
    setRfqRemarks('');
    setModalType(null);
  };

  const advanceStage = (poId) => {
    setOrders(orders.map(o => {
      if (o.id === poId && o.stageIndex < ORDER_STAGES.length - 1) {
        const next = o.stageIndex + 1;
        const stageName = ORDER_STAGES[next].title;
        const isFinished = next === ORDER_STAGES.length - 1;
        showToast(`Workflow Advance: ${stageName}`);
        setNotifications([
          {
            id: Date.now(),
            title: `PO ${poId} ➔ ${stageName}`,
            text: next === 3 ? 'Storekeeper R. Murugan performed physical quality check-in.' : isFinished ? 'Executive Owner confirmed book reconciliation. Escrow released.' : `Updated to ${stageName}`,
            time: 'Just now',
            category: isFinished ? 'escrow' : 'order',
            read: false
          },
          ...notifications
        ]);
        return {
          ...o,
          stageIndex: next,
          escrowReleased: isFinished ? true : o.escrowReleased
        };
      }
      return o;
    }));
  };

  const clearNotifications = () => {
    setNotifications([]);
    showToast('Audit log cleared');
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  };

  // Filtered materials
  const filtered = MATERIALS_DATA.filter(m => {
    const matchQuery = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.supplier.toLowerCase().includes(search.toLowerCase()) ||
      m.location.toLowerCase().includes(search.toLowerCase()) ||
      m.gstin.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchMoq = m.moq <= moqFilter;
    const matchPrice = m.pricePerUnit <= maxPrice;
    return matchQuery && matchCat && matchMoq && matchPrice;
  }).sort((a, b) => {
    if (priceSort === 'asc') return a.pricePerUnit - b.pricePerUnit;
    if (priceSort === 'desc') return b.pricePerUnit - a.pricePerUnit;
    return 0;
  });

  const totalProcurementSpend = orders.reduce((acc, o) => acc + o.totalPrice, 0);
  const activeOrdersCount = orders.filter(o => o.stageIndex < ORDER_STAGES.length - 1).length;
  const escrowVaultLocked = orders.filter(o => o.escrowLocked && !o.escrowReleased).reduce((sum, o) => sum + o.totalPrice, 0);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#e2e8f0', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* FLOATING TOAST */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 2000, backgroundColor: '#4f46e5', color: '#fff', padding: '12px 20px', borderRadius: 12, boxShadow: '0 12px 30px rgba(79, 70, 229, 0.45)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600 }}>
          <Icons.CheckCircle /> {toast}
        </div>
      )}

      {/* TOPBAR */}
      <header style={{ height: 64, borderBottom: '1px solid #1e293b', backgroundColor: '#0f172a', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)' }}>
            <Icons.Layers />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 800, color: '#fff', fontSize: 16, letterSpacing: '0.5px' }}>RAWPROCURA</span>
              <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 12, background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.4)', fontWeight: 800 }}>INDIA B2B HUB</span>
            </div>
            <div style={{ fontSize: 10, color: '#64748b' }}>Industrial Raw Material Exchange & Escrow</div>
          </div>
        </div>

        {/* ROLE SIMULATION SWITCHER */}
        <div style={{ display: 'flex', alignItems: 'center', background: '#090d16', border: '1px solid #1e293b', padding: '4px 6px', borderRadius: 10, gap: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#64748b', padding: '0 6px', textTransform: 'uppercase' }}>Demo Role:</span>
          {['Buyer', 'Storekeeper', 'Owner'].map(r => (
            <button
              key={r}
              onClick={() => { setUserRole(r); showToast(`Simulating active dashboard as: ${r}`); }}
              style={{
                background: userRole === r ? '#4f46e5' : 'transparent',
                color: userRole === r ? '#fff' : '#94a3b8',
                border: 'none', padding: '5px 12px', borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 12, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6 }}>
            Buyer: <strong style={{ color: '#fff' }}>Apex Manufacturing Pvt Ltd (Coimbatore)</strong>
          </div>
          <button
            onClick={() => setModalType('compare')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#1e293b', border: '1px solid #334155', color: '#cbd5e1', padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
          >
            <Icons.Compare /> Compare Suppliers
          </button>
          <button
            onClick={() => setModalType('rfq')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#4f46e5', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
          >
            <Icons.Plus /> Request RFQ
          </button>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* SIDEBAR */}
        <aside style={{ width: 240, borderRight: '1px solid #1e293b', minHeight: 'calc(100vh - 64px)', padding: 18, background: '#090e1a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 64, height: 'calc(100vh - 64px)' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: '#475569', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12, paddingLeft: 4 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button
                onClick={() => setActiveTab('browse')}
                className={`nav-item ${activeTab === 'browse' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'browse' ? '#fff' : '#94a3b8', textAlign: 'left' }}
              >
                <Icons.Search /> Discover Materials
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'orders' ? '#fff' : '#94a3b8', textAlign: 'left' }}
              >
                <Icons.Package /> Live PO Tracker
                <span style={{ marginLeft: 'auto', background: activeTab === 'orders' ? 'rgba(255,255,255,0.2)' : '#1e293b', padding: '2px 8px', borderRadius: 12, fontSize: 10, fontWeight: 700 }}>{orders.length}</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'analytics' ? '#fff' : '#94a3b8', textAlign: 'left' }}
              >
                <Icons.Trending /> Spend Analytics
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`nav-item ${activeTab === 'logs' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', color: activeTab === 'logs' ? '#fff' : '#94a3b8', textAlign: 'left' }}
              >
                <Icons.Bell /> Audit Logs
                {unreadCount > 0 && <span style={{ marginLeft: 'auto', background: '#ef4444', color: '#fff', padding: '2px 6px', borderRadius: 10, fontSize: 9, fontWeight: 800 }}>{unreadCount}</span>}
              </button>
            </div>
          </div>

          <div style={{ background: '#0f172a', padding: 14, borderRadius: 12, border: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, color: '#22c55e', fontWeight: 700 }}>✓ Verified Suppliers Only</div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 4, lineHeight: 1.4 }}>
              All manufacturers have valid GSTIN &amp; BIS / ISO Certifications.
            </div>
          </div>
        </aside>

        {/* MAIN VIEW */}
        <main style={{ flex: 1, padding: '28px 36px', maxWidth: 1240, margin: '0 auto' }}>

          {/* TAB 1: BROWSE MATERIALS */}
          {activeTab === 'browse' && (
            <div className="animate-fade-in">
              {/* HERO BANNER */}
              <div style={{ background: 'linear-gradient(90deg, #1e1b4b, #0f172a)', padding: 24, borderRadius: 18, border: '1px solid #312e81', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: 21, fontWeight: 800, margin: '0 0 6px 0', color: '#fff' }}>Verified Industrial Raw Material Marketplace</h2>
                  <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Search with direct phone contacts, customer feedback, and factory Google Maps.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 11, color: '#818cf8', fontWeight: 700, background: 'rgba(99,102,241,0.15)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(99,102,241,0.3)', display: 'inline-block' }}>
                    100% GST E-Way Bill Compliant
                  </span>
                </div>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div style={{ background: '#0f172a', padding: 16, borderRadius: 14, border: '1px solid #1e293b', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', flex: 1, minWidth: 260 }}>
                    <input
                      type="text"
                      placeholder="Search steel, polymer, rubber, chemicals or city..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="procure-input"
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icons.Sliders /> Max MOQ:
                    </span>
                    <input
                      type="range"
                      min="1"
                      max="200"
                      value={moqFilter}
                      onChange={e => setMoqFilter(Number(e.target.value))}
                      style={{ accentColor: '#4f46e5', width: 90 }}
                    />
                    <span style={{ fontSize: 12, color: '#818cf8', fontWeight: 700, minWidth: 50 }}>{moqFilter} Units</span>
                  </div>

                  <select
                    value={priceSort}
                    onChange={e => setPriceSort(e.target.value)}
                    style={{ background: '#090d16', border: '1px solid #1e293b', color: '#cbd5e1', padding: '8px 12px', borderRadius: 10, fontSize: 12, outline: 'none' }}
                  >
                    <option value="default">Sort by: Default</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                  </select>
                </div>

                {/* PRICE RANGE FILTER SLIDER */}
                <div style={{ background: '#090d16', padding: '10px 16px', borderRadius: 12, border: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>Filter by Max Rate:</span>
                  <input
                    type="range"
                    min={40000}
                    max={250000}
                    step={5000}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    style={{ flex: 1, accentColor: '#4f46e5', cursor: 'pointer' }}
                  />
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#22c55e', minWidth: 120 }}>
                    Up to ₹{maxPrice.toLocaleString('en-IN')}/Ton
                  </span>
                </div>

                {/* CATEGORY BADGES */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 6, borderTop: '1px solid #1e293b' }}>
                  {['All', 'Metals & Alloys', 'Polymers & Plastics', 'Elastomers', 'Chemicals & Minerals', 'Composites & Fiber'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, border: '1px solid', borderColor: selectedCategory === cat ? '#6366f1' : '#1e293b', background: selectedCategory === cat ? '#4f46e5' : '#090d16', color: selectedCategory === cat ? '#fff' : '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* MATERIAL CARDS GRID */}
              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 48, background: '#0f172a', borderRadius: 16, border: '1px solid #1e293b' }}>
                  <div style={{ color: '#64748b', fontSize: 14 }}>No raw materials matched your search criteria.</div>
                  <button onClick={() => { setSearch(''); setSelectedCategory('All'); setMoqFilter(250); setMaxPrice(250000); }} style={{ marginTop: 12, background: '#1e293b', border: 'none', color: '#818cf8', padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
                  {filtered.map(mat => (
                    <div key={mat.id} className="material-card" style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>

                      {/* PRODUCT PHOTO */}
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

                        {/* SUPPLIER DETAILS */}
                        <div style={{ background: '#090d16', padding: 10, borderRadius: 10, marginBottom: 12, border: '1px solid #1e293b' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{mat.supplier}</span>
                            <button
                              onClick={() => handleViewReviews(mat)}
                              style={{ background: 'transparent', border: 'none', color: '#fbbf24', fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}
                            >
                              <Icons.Star /> {mat.supplierRating} ({mat.reviewsCount}) ➔
                            </button>
                          </div>

                          {/* GOOGLE MAPS LINK */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                            <Icons.MapPin />
                            <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mat.location}</span>
                            <a href={mat.mapUrl} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3, fontWeight: 600 }}>
                              Map <Icons.ExternalLink />
                            </a>
                          </div>
                        </div>

                        {/* SPECS TAGS */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                          {mat.specs.map((sp, idx) => (
                            <span key={idx} style={{ fontSize: 11, background: '#1e293b', color: '#cbd5e1', padding: '3px 8px', borderRadius: 6, border: '1px solid #334155' }}>
                              {sp}
                            </span>
                          ))}
                        </div>

                        {/* METRICS ROW */}
                        <div style={{ background: '#090d16', padding: 12, borderRadius: 10, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, fontSize: 11, marginBottom: 16 }}>
                          <div><div style={{ color: '#64748b' }}>MOQ</div><div style={{ fontWeight: 700, color: '#fff' }}>{mat.moq} {mat.unit}s</div></div>
                          <div><div style={{ color: '#64748b' }}>Lead Time</div><div style={{ fontWeight: 700, color: '#fff' }}>{mat.leadTime}</div></div>
                          <div><div style={{ color: '#64748b' }}>In Stock</div><div style={{ fontWeight: 700, color: '#22c55e' }}>{mat.inStock} {mat.unit}s</div></div>
                        </div>
                      </div>

                      {/* ACTION BUTTONS */}
                      <div style={{ padding: '0 18px 18px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button onClick={() => handleContactSupplier(mat)} className="action-btn-secondary" style={{ flex: 1, padding: '9px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                            <Icons.Phone /> Contact
                          </button>
                          <button onClick={() => handleRequestSample(mat)} className="action-btn-secondary" style={{ flex: 1, padding: '9px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                            Sample
                          </button>
                          <button onClick={() => handleViewSpecs(mat)} style={{ background: 'transparent', border: '1px solid #334155', color: '#94a3b8', padding: '9px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                            MTC
                          </button>
                        </div>
                        <button onClick={() => handlePlaceBulk(mat)} className="action-btn-primary" style={{ width: '100%', padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                          <Icons.Package /> Place Bulk PO
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIVE PO TRACKER */}
          {activeTab === 'orders' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h2 style={{ fontSize: 21, fontWeight: 800, margin: '0 0 6px 0', color: '#fff' }}>Live Purchase Orders & Workflow Stepper</h2>
                  <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Multi-party tracking timeline linking Buyer, Warehouse Storekeeper, E-Way Bill & ICICI Escrow.</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {orders.map(order => {
                  const isCompleted = order.stageIndex === ORDER_STAGES.length - 1;
                  return (
                    <div key={order.id} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 18, padding: 24, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>

                      {/* PO HEADER */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #1e293b', flexWrap: 'wrap', gap: 12 }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ fontSize: 16, fontWeight: 800, color: '#818cf8', fontFamily: 'monospace', letterSpacing: 0.5 }}>{order.id}</span>
                            <span className="badge-category">{order.materialName}</span>
                            {order.escrowReleased ? (
                              <span className="badge-escrow" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }}>
                                <Icons.Shield /> Escrow Released
                              </span>
                            ) : (
                              <span className="badge-escrow" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                                <Icons.Shield /> ICICI Escrow Locked
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 6 }}>
                            Supplier: <strong style={{ color: '#fff' }}>{order.supplier}</strong> ({order.phone}) | Placed: {order.orderDate}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: '#22c55e' }}>₹{order.totalPrice.toLocaleString('en-IN')}</div>
                          <div style={{ fontSize: 11, color: '#64748b' }}>
                            Base + 18% GST Included
                          </div>
                        </div>
                      </div>

                      {/* WORKFLOW STEPPER TIMELINE */}
                      <div style={{ background: '#090d16', padding: '20px 24px', borderRadius: 14, marginBottom: 20, border: '1px solid #1e293b' }}>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#64748b', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Live Workflow Stages</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
                          {ORDER_STAGES.map((stg, index) => {
                            const completed = index <= order.stageIndex;
                            const isCurrent = index === order.stageIndex;
                            return (
                              <div key={index} className={`timeline-step ${completed ? 'completed' : ''} ${isCurrent ? 'active' : ''}`}>
                                <div className="timeline-node">
                                  {completed ? <Icons.Check /> : index + 1}
                                </div>
                                <div style={{ marginTop: 10, textAlign: 'center', maxWidth: 120 }}>
                                  <div style={{ fontSize: 12, fontWeight: isCurrent ? 800 : 600, color: isCurrent ? '#818cf8' : completed ? '#fff' : '#64748b' }}>
                                    {stg.title}
                                  </div>
                                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>{stg.desc}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* METADATA ROW */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, background: '#0f172a', padding: 14, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12, marginBottom: 16 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Icons.UserCheck />
                          <div>
                            <div style={{ color: '#64748b', fontSize: 10 }}>Assigned Storekeeper</div>
                            <div style={{ fontWeight: 600, color: '#fff' }}>{order.assignedStorekeeper}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Icons.Building />
                          <div>
                            <div style={{ color: '#64748b', fontSize: 10 }}>Delivery Destination</div>
                            <div style={{ fontWeight: 600, color: '#fff' }}>{order.destination}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Icons.FileText />
                          <div>
                            <div style={{ color: '#64748b', fontSize: 10 }}>Supplier Contact Phone</div>
                            <div style={{ fontWeight: 600, color: '#38bdf8' }}>{order.phone}</div>
                          </div>
                        </div>
                      </div>

                      {/* ACTIONS FOOTER */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                        <div style={{ fontSize: 12, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Icons.Info /> Current Stage: <strong style={{ color: '#818cf8' }}>{ORDER_STAGES[order.stageIndex].title}</strong>
                        </div>

                        <div style={{ display: 'flex', gap: 10 }}>
                          <button
                            onClick={() => handleViewInvoice(order)}
                            className="action-btn-secondary"
                            style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                          >
                            <Icons.FileText /> View GST Invoice
                          </button>

                          {!isCompleted ? (
                            <button
                              onClick={() => advanceStage(order.id)}
                              className="action-btn-primary"
                              style={{ padding: '8px 16px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                            >
                              Advance Workflow Stage ({userRole} Role) <Icons.ChevronRight />
                            </button>
                          ) : (
                            <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 700, padding: '8px 14px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                              Escrow Payout Reconciled
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: AUDIT LOG */}
          {activeTab === 'logs' && (
            <div className="animate-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h2 style={{ fontSize: 21, fontWeight: 800, margin: '0 0 6px 0', color: '#fff' }}>Procurement Audit Trail & GST Logs</h2>
                  <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>System events, E-Way bills, storekeeper inspection logs, and ICICI Escrow settlements.</p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={markAllRead} className="action-btn-secondary" style={{ padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    Mark All Read
                  </button>
                  <button onClick={clearNotifications} style={{ background: '#7f1d1d', border: 'none', color: '#fca5a5', padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icons.Trash2 /> Clear Logs
                  </button>
                </div>
              </div>

              <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, padding: 20 }}>
                {notifications.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: 36, color: '#64748b', fontSize: 13 }}>Audit log is currently empty.</div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {notifications.map(n => (
                      <div key={n.id} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: 14, borderRadius: 12, background: n.read ? '#090d16' : 'rgba(79, 70, 229, 0.1)', border: '1px solid', borderColor: n.read ? '#1e293b' : 'rgba(99, 102, 241, 0.3)' }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <div style={{ marginTop: 2 }}>
                            {n.category === 'escrow' ? <Icons.Shield /> : n.category === 'sample' ? <Icons.Package /> : <Icons.Bell />}
                          </div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <strong style={{ color: '#fff', fontSize: 13 }}>{n.title}</strong>
                              {!n.read && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1' }}></span>}
                            </div>
                            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>{n.text}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: 11, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 16 }}>{n.time}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: SPEND ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="animate-fade-in">
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: 21, fontWeight: 800, margin: '0 0 6px 0', color: '#fff' }}>Executive Procurement Analytics (INR ₹)</h2>
                <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Overview of raw material spend, ICICI escrow locks, and supplier performance scorecards.</p>
              </div>

              {/* KPI STAT CARDS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: 0.5 }}>Total Spend YTD</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 8 }}>₹{(totalProcurementSpend / 100000).toFixed(2)} Lakhs</div>
                  <div style={{ fontSize: 11, color: '#22c55e', marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icons.Trending /> ₹{totalProcurementSpend.toLocaleString('en-IN')} Total
                  </div>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: 0.5 }}>Active Live POs</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#818cf8', marginTop: 8 }}>{activeOrdersCount} POs</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 6 }}>Currently in dispatch pipeline</div>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: 0.5 }}>ICICI Escrow Locked</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fbbf24', marginTop: 8 }}>₹{(escrowVaultLocked / 100000).toFixed(2)} Lakhs</div>
                  <div style={{ fontSize: 11, color: '#22c55e', marginTop: 6 }}>100% Protected Buyer Funds</div>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: 0.5 }}>Avg Delivery Lead Time</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 8 }}>3.8 Days</div>
                  <div style={{ fontSize: 11, color: '#22c55e', marginTop: 6 }}>Pan-India Hub Network</div>
                </div>
              </div>

              {/* CHARTS & BREAKDOWN */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
                {/* SPEND BY CATEGORY */}
                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, padding: 22 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Category Spend Breakdown</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                        <span style={{ color: '#cbd5e1' }}>Metals & Alloys</span>
                        <span style={{ fontWeight: 700, color: '#fff' }}>₹10,35,450 (49%)</span>
                      </div>
                      <div style={{ height: 8, background: '#1e293b', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ width: '49%', height: '100%', background: '#4f46e5', borderRadius: 4 }}></div>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                        <span style={{ color: '#cbd5e1' }}>Elastomers</span>
                        <span style={{ fontWeight: 700, color: '#fff' }}>₹10,73,800 (51%)</span>
                      </div>
                      <div style={{ height: 8, background: '#1e293b', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ width: '51%', height: '100%', background: '#10b981', borderRadius: 4 }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUPPLIER LEADERBOARD */}
                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, padding: 22 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Certified Manufacturer Scorecards</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { name: 'Tata Steel Industrial Hub Ltd', phone: '+91 98450 12890', score: 4.9, count: '310 orders' },
                      { name: 'Kerala Plantation Latex Syndicate', phone: '+91 94471 45012', score: 4.9, count: '245 orders' },
                      { name: 'Reliance Polymer Logistics Hub', phone: '+91 97241 88200', score: 4.8, count: '184 orders' }
                    ].map((sup, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#090d16', padding: 12, borderRadius: 10, border: '1px solid #1e293b' }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{sup.name}</div>
                          <div style={{ fontSize: 11, color: '#64748b' }}>Phone: {sup.phone} | {sup.count}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#fbbf24', fontWeight: 700, fontSize: 13 }}>
                          <Icons.Star /> {sup.score}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL 1: REQUEST SAMPLE */}
      {modalType === 'sample' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Request Material Testing Sample</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ background: '#090d16', padding: 14, borderRadius: 12, border: '1px solid #1e293b', marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{activeMat.name}</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>Supplier: {activeMat.supplier} | Policy: {activeMat.sampleCost}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>QA Lab Delivery Address</label>
                <input type="text" defaultValue="Plant QA Dock, Unit 2, SIDCO Industrial Estate, Peelamedu, Coimbatore TN 641004" className="procure-input" />
              </div>

              <div>
                <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Lab Test Parameters / Coupon Notes (Optional)</label>
                <textarea
                  placeholder="Specify yield strength, density test parameters, or spectro analysis requirements..."
                  value={sampleNote}
                  onChange={e => setSampleNote(e.target.value)}
                  style={{ width: '100%', height: 80, padding: 10, background: '#090d16', border: '1px solid #1e293b', borderRadius: 10, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                />
              </div>

              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: 12, borderRadius: 10, border: '1px solid rgba(59, 130, 246, 0.2)', fontSize: 11, color: '#38bdf8' }}>
                Samples dispatched with NABL Accredited Mill Test Certificate (MTC) included in consignment.
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                <button onClick={confirmSample} className="action-btn-primary" style={{ flex: 1, padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Confirm Sample Dispatch</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: PLACE BULK PURCHASE ORDER */}
      {modalType === 'bulk' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 620 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Place Bulk Purchase Order (PO)</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ background: '#090d16', padding: 16, borderRadius: 12, border: '1px solid #1e293b', marginBottom: 18 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{activeMat.name}</div>
              <div style={{ fontSize: 12, color: '#818cf8', marginTop: 2 }}>{activeMat.supplier} | Direct Phone: {activeMat.phone}</div>
            </div>

            {(() => {
              const pricing = calculateDynamicPrice(activeMat, bulkQty);
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* QUANTITY INPUT */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700 }}>Order Quantity ({activeMat.unit}s)</label>
                      <span style={{ fontSize: 11, color: pricing.isDiscounted ? '#22c55e' : '#64748b', fontWeight: pricing.isDiscounted ? 700 : 400 }}>
                        {pricing.isDiscounted ? '🎉 Bulk Tier Discount Applied! (>20T)' : `MOQ: ${activeMat.moq} ${activeMat.unit}s`}
                      </span>
                    </div>
                    <input
                      type="number"
                      min={activeMat.moq}
                      value={bulkQty}
                      onChange={e => setBulkQty(Math.max(activeMat.moq, Number(e.target.value)))}
                      className="procure-input"
                    />
                  </div>

                  {/* DESTINATION SELECTION */}
                  <div>
                    <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Plant Delivery Location</label>
                    <select
                      value={selectedDestination}
                      onChange={e => setSelectedDestination(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', background: '#090d16', border: '1px solid #1e293b', borderRadius: 10, color: '#fff', fontSize: 13, outline: 'none' }}
                    >
                      <option value="Plant Yard B, Peelamedu, Coimbatore, TN">Plant Yard B, Peelamedu, Coimbatore, TN (Unit 1)</option>
                      <option value="Unit 2, SIDCO Industrial Estate, Coimbatore, TN">Unit 2, SIDCO Industrial Estate, Coimbatore, TN</option>
                      <option value="Sriperumbudur Industrial Yard, Chennai, TN">Sriperumbudur Industrial Yard, Chennai, TN</option>
                    </select>
                  </div>

                  {/* PAYMENT & ESCROW */}
                  <div>
                    <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Payment & Security Term</label>
                    <select
                      value={paymentTerm}
                      onChange={e => setPaymentTerm(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', background: '#090d16', border: '1px solid #1e293b', borderRadius: 10, color: '#fff', fontSize: 13, outline: 'none' }}
                    >
                      <option value="ICICI B2B Escrow Vault (100% Secured)">ICICI B2B Escrow Vault (100% Protected until Storekeeper Check-in)</option>
                      <option value="GST Net 30 Line of Credit">GST Net 30 Line of Credit</option>
                      <option value="Irrevocable Inland LC">Irrevocable Inland Letter of Credit (LC)</option>
                    </select>
                  </div>

                  {/* GST PRICING BREAKDOWN */}
                  <div style={{ background: '#090d16', padding: 14, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94a3b8' }}>Unit Rate</span>
                      <span style={{ fontWeight: 600, color: '#fff' }}>₹{pricing.unitRate.toLocaleString('en-IN')} / {activeMat.unit}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94a3b8' }}>Base Subtotal ({bulkQty} x ₹{pricing.unitRate.toLocaleString('en-IN')})</span>
                      <span style={{ fontWeight: 600, color: '#fff' }}>₹{pricing.base.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: '#94a3b8' }}>Applicable GST (18%)</span>
                      <span style={{ fontWeight: 600, color: '#818cf8' }}>₹{pricing.gst.toLocaleString('en-IN')}</span>
                    </div>
                    {pricing.savings > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, color: '#22c55e', fontWeight: 700 }}>
                        <span>Volume Discount Savings</span>
                        <span>- ₹{pricing.savings.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #1e293b', fontWeight: 800, fontSize: 14 }}>
                      <span style={{ color: '#fff' }}>Total Escrow Lock Amount</span>
                      <span style={{ color: '#22c55e' }}>₹{pricing.total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                    <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '11px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                    <button onClick={confirmBulk} className="action-btn-primary" style={{ flex: 1, padding: '11px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Authorize & Lock Escrow</button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* MODAL 3: CUSTOM SPEC RFQ */}
      {modalType === 'rfq' && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 580 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Request Custom Specification RFQ</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <form onSubmit={submitRFQ} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Material Name & Specification</label>
                <input
                  type="text"
                  placeholder="e.g. SS 316L Plates 12mm or High Carbon Steel Billets"
                  value={rfqMaterial}
                  onChange={e => setRfqMaterial(e.target.value)}
                  className="procure-input"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Target Quantity (Tons)</label>
                  <input
                    type="number"
                    placeholder="e.g. 25"
                    value={rfqVolume}
                    onChange={e => setRfqVolume(e.target.value)}
                    className="procure-input"
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Target Price per Unit (₹)</label>
                  <input
                    type="number"
                    placeholder="e.g. 62000"
                    value={rfqTargetPrice}
                    onChange={e => setRfqTargetPrice(e.target.value)}
                    className="procure-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, display: 'block', marginBottom: 6 }}>Quality Standards & Remarks</label>
                <textarea
                  placeholder="Mention BIS standards, lab test requirements, or E-way bill dispatch location..."
                  value={rfqRemarks}
                  onChange={e => setRfqRemarks(e.target.value)}
                  style={{ width: '100%', height: 80, padding: 10, background: '#090d16', border: '1px solid #1e293b', borderRadius: 10, color: '#fff', fontSize: 12, outline: 'none', resize: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                <button type="button" onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" className="action-btn-primary" style={{ flex: 1, padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Broadcast RFQ to Suppliers</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: SUPPLIER COMPARISON MATRIX */}
      {modalType === 'compare' && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 26, maxWidth: 840, background: '#0f172a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid #1e293b' }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0 }}>Supplier & Material Comparison Matrix</h3>
                <p style={{ fontSize: 12, color: '#94a3b8', margin: '4px 0 0 0' }}>Side-by-side technical, financial & rating evaluation of certified Indian manufacturers.</p>
              </div>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#090d16', borderBottom: '1px solid #1e293b' }}>
                    <th style={{ padding: 12, color: '#818cf8', fontWeight: 800 }}>Feature / Attribute</th>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <th key={m.id} style={{ padding: 12, color: '#fff', fontWeight: 800, minWidth: 200 }}>
                        <div>{m.supplier}</div>
                        <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 400 }}>{m.id}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Material Grade</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#fff', fontWeight: 600 }}>{m.name}</td>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Standard Unit Price</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#22c55e', fontWeight: 800 }}>₹{m.pricePerUnit.toLocaleString('en-IN')} / {m.unit}</td>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Bulk Tier (&gt;20T) Rate</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#38bdf8', fontWeight: 800 }}>₹{m.bulkTierPrice.toLocaleString('en-IN')} / {m.unit}</td>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>MOQ &amp; Lead Time</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#fff' }}>{m.moq} {m.unit}s | {m.leadTime}</td>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Rating & Score</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#fbbf24', fontWeight: 700 }}>★ {m.supplierRating} ({m.reviewsCount} reviews)</td>
                    ))}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Primary Certifications</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12, color: '#cbd5e1' }}>
                        {m.certifications ? m.certifications.join(', ') : 'ISO 9001:2015'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ padding: 12, color: '#94a3b8', fontWeight: 700 }}>Action</td>
                    {MATERIALS_DATA.slice(0, 3).map(m => (
                      <td key={m.id} style={{ padding: 12 }}>
                        <button onClick={() => { setModalType(null); handlePlaceBulk(m); }} className="action-btn-primary" style={{ padding: '6px 12px', border: 'none', color: '#fff', borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                          Select &amp; Order
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 20, textAlign: 'right' }}>
              <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Close Comparison</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: GST TAX INVOICE */}
      {modalType === 'invoice' && activeInvoiceOrder && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 28, maxWidth: 680, background: '#0f172a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #1e293b' }}>
              <div>
                <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>OFFICIAL B2B TAX INVOICE</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '4px 0 0 0' }}>{activeInvoiceOrder.id}</h3>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => showToast(`Printed Tax Invoice for ${activeInvoiceOrder.id}`)} className="action-btn-secondary" style={{ padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icons.Printer /> Print
                </button>
                <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20, background: '#090d16', padding: 16, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', fontWeight: 800 }}>Supplier (Billed From)</div>
                <div style={{ color: '#fff', fontWeight: 700, marginTop: 4 }}>{activeInvoiceOrder.supplier}</div>
                <div style={{ color: '#94a3b8', marginTop: 2 }}>GSTIN: <strong style={{ color: '#818cf8' }}>{activeInvoiceOrder.gstin || '20AAACT2727Q1ZW'}</strong></div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', fontWeight: 800 }}>Buyer (Billed To)</div>
                <div style={{ color: '#fff', fontWeight: 700, marginTop: 4 }}>Apex Manufacturing Pvt Ltd</div>
                <div style={{ color: '#94a3b8', marginTop: 2 }}>GSTIN: <strong style={{ color: '#818cf8' }}>33AAACA9876P1Z4</strong></div>
              </div>
            </div>

            <div style={{ background: '#090d16', borderRadius: 12, border: '1px solid #1e293b', overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '10px 14px', background: '#1e293b', fontSize: 11, fontWeight: 800, color: '#cbd5e1' }}>
                <span>Item Description</span>
                <span>HSN Code</span>
                <span>Qty</span>
                <span style={{ textAlign: 'right' }}>Taxable Val</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 14px', fontSize: 12, color: '#fff', borderBottom: '1px solid #1e293b' }}>
                <span>{activeInvoiceOrder.materialName}</span>
                <span>{activeInvoiceOrder.hsnCode || '7208'}</span>
                <span>{activeInvoiceOrder.quantity} {activeInvoiceOrder.unit}</span>
                <span style={{ textAlign: 'right' }}>₹{(activeInvoiceOrder.basePrice || Math.round(activeInvoiceOrder.totalPrice / 1.18)).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#090d16', padding: 16, borderRadius: 12, border: '1px solid #1e293b', fontSize: 12, marginBottom: 20 }}>
              <div>
                <div style={{ color: '#64748b', fontSize: 10 }}>Supplier Phone Contact</div>
                <div style={{ color: '#38bdf8', fontWeight: 700, marginTop: 2 }}>{activeInvoiceOrder.phone}</div>
                <div style={{ color: '#64748b', fontSize: 10, marginTop: 6 }}>Dispatched Vehicle</div>
                <div style={{ color: '#fff', fontWeight: 600 }}>{activeInvoiceOrder.vehicleNo || 'TN-38-BZ-4412'}</div>
              </div>
              <div style={{ textAlign: 'right', minWidth: 200 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ color: '#94a3b8' }}>CGST (9%)</span>
                  <span style={{ color: '#fff' }}>₹{Math.round((activeInvoiceOrder.gstAmount || activeInvoiceOrder.totalPrice * 0.15) / 2).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: '#94a3b8' }}>SGST (9%)</span>
                  <span style={{ color: '#fff' }}>₹{Math.round((activeInvoiceOrder.gstAmount || activeInvoiceOrder.totalPrice * 0.15) / 2).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #1e293b', fontWeight: 800, fontSize: 14 }}>
                  <span style={{ color: '#fff' }}>Total Invoice</span>
                  <span style={{ color: '#22c55e' }}>₹{activeInvoiceOrder.totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Close</button>
              <button onClick={() => showToast(`GST Invoice PDF saved for ${activeInvoiceOrder.id}`)} className="action-btn-primary" style={{ flex: 1, padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Download Signed GST Invoice</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: MATERIAL SPECS & MTC DRAWER */}
      {modalType === 'mtc' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 640 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <span className="badge-category">{activeMat.category}</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '4px 0 0 0' }}>{activeMat.name}</h3>
              </div>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* CHEMICAL COMPOSITION TABLE */}
              {activeMat.chemicalAnalysis && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#818cf8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Chemical Composition & Purity</div>
                  <div style={{ background: '#090d16', borderRadius: 10, border: '1px solid #1e293b', overflow: 'hidden' }}>
                    {Object.entries(activeMat.chemicalAnalysis).map(([key, val], idx) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', borderBottom: idx !== Object.keys(activeMat.chemicalAnalysis).length - 1 ? '1px solid #1e293b' : 'none', fontSize: 12 }}>
                        <span style={{ color: '#94a3b8' }}>{key}</span>
                        <span style={{ fontWeight: 700, color: '#fff' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PHYSICAL PROPERTIES TABLE */}
              {activeMat.physicalProps && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#818cf8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Physical & Mechanical Parameters</div>
                  <div style={{ background: '#090d16', borderRadius: 10, border: '1px solid #1e293b', overflow: 'hidden' }}>
                    {Object.entries(activeMat.physicalProps).map(([key, val], idx) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', borderBottom: idx !== Object.keys(activeMat.physicalProps).length - 1 ? '1px solid #1e293b' : 'none', fontSize: 12 }}>
                        <span style={{ color: '#94a3b8' }}>{key}</span>
                        <span style={{ fontWeight: 700, color: '#fff' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ background: '#090d16', padding: 12, borderRadius: 10, border: '1px solid #1e293b', fontSize: 11, color: '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>BIS / NABL Laboratory Mill Test Certificate (MTC) Attached</span>
                <button onClick={() => showToast(`Mill Test Certificate (MTC) PDF downloaded for ${activeMat.name}`)} style={{ background: '#1e293b', border: '1px solid #334155', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icons.Download /> Download MTC
                </button>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Close</button>
                <button onClick={() => { setModalType(null); handlePlaceBulk(activeMat); }} className="action-btn-primary" style={{ flex: 1, padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Order Material</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 7: VERIFIED REVIEWS */}
      {modalType === 'reviews' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 580 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Verified Customer Reviews</h3>
                <div style={{ fontSize: 12, color: '#fbbf24', marginTop: 2, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icons.Star /> {activeMat.supplierRating} out of 5 ({activeMat.reviewsCount} enterprise feedback)
                </div>
              </div>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {activeMat.reviews && activeMat.reviews.map((rev, i) => (
                <div key={i} style={{ background: '#090d16', padding: 14, borderRadius: 12, border: '1px solid #1e293b' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{rev.user}</span>
                    <span style={{ fontSize: 11, color: '#fbbf24', fontWeight: 700 }}>★ {rev.rating}.0</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>"{rev.comment}"</p>
                </div>
              ))}
            </div>

            <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ width: '100%', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Close Reviews</button>
          </div>
        </div>
      )}

      {/* MODAL 8: DIRECT SUPPLIER CONTACT */}
      {modalType === 'contact' && activeMat && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: 24, maxWidth: 540 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Direct Manufacturer Contact</h3>
              <button onClick={() => setModalType(null)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Icons.X /></button>
            </div>

            <div style={{ background: '#090d16', padding: 16, borderRadius: 12, border: '1px solid #1e293b', marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{activeMat.supplier}</div>
              <div style={{ fontSize: 12, color: '#818cf8', marginTop: 2 }}>Contact Person: {activeMat.contactPerson || 'Sales Department'}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#090d16', padding: 12, borderRadius: 10, border: '1px solid #1e293b' }}>
                <Icons.Phone />
                <div>
                  <div style={{ fontSize: 10, color: '#64748b' }}>Direct Phone Number</div>
                  <a href={`tel:${activeMat.phone}`} style={{ color: '#22c55e', fontWeight: 700, textDecoration: 'none' }}>{activeMat.phone}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#090d16', padding: 12, borderRadius: 10, border: '1px solid #1e293b' }}>
                <Icons.MessageSquare />
                <div>
                  <div style={{ fontSize: 10, color: '#64748b' }}>Corporate Email</div>
                  <a href={`mailto:${activeMat.email}`} style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}>{activeMat.email}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#090d16', padding: 12, borderRadius: 10, border: '1px solid #1e293b' }}>
                <Icons.MapPin />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: '#64748b' }}>Factory & Warehouse Yard</div>
                  <div style={{ color: '#fff', fontSize: 12 }}>{activeMat.location}</div>
                </div>
                <a href={activeMat.mapUrl} target="_blank" rel="noreferrer" style={{ background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', padding: '6px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Maps <Icons.ExternalLink />
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setModalType(null)} className="action-btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Close</button>
              <button onClick={() => { setModalType(null); handlePlaceBulk(activeMat); }} className="action-btn-primary" style={{ flex: 1, padding: '10px', border: 'none', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Place Order</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
