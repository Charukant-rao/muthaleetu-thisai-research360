// Research 360 prototype: sample fund universe and market series.
// Figures are illustrative snapshots for the prototype, not live data.
const RS_ASOF = "5 Nov 2026";

// Top holdings, reused across funds so Compare and Portfolio IQ can measure overlap.
const RS_H = {
  lc: [["HDFC Bank",9.2],["ICICI Bank",7.8],["Reliance Industries",6.9],["Infosys",5.4],["Bharti Airtel",4.6],["Larsen & Toubro",3.9],["ITC",3.5],["TCS",3.4],["Axis Bank",3.0],["Kotak Mahindra Bank",2.8]],
  idx50: [["HDFC Bank",13.1],["ICICI Bank",8.9],["Reliance Industries",8.4],["Infosys",5.1],["Bharti Airtel",4.7],["Larsen & Toubro",3.9],["ITC",3.4],["TCS",3.1],["Axis Bank",3.0],["State Bank of India",2.9]],
  sensex: [["HDFC Bank",15.2],["ICICI Bank",10.3],["Reliance Industries",9.8],["Infosys",5.9],["Bharti Airtel",5.5],["Larsen & Toubro",4.5],["ITC",4.0],["TCS",3.6],["Axis Bank",3.5],["State Bank of India",3.4]],
  ppfas: [["HDFC Bank",8.1],["Bajaj Holdings",6.6],["Power Grid",6.2],["Coal India",5.8],["ITC",5.4],["ICICI Bank",5.0],["Alphabet Inc",3.6],["Microsoft Corp",3.2],["Maruti Suzuki",3.0],["Kotak Mahindra Bank",2.6]],
  hdfcflexi: [["ICICI Bank",9.6],["HDFC Bank",9.1],["Axis Bank",7.4],["Kotak Mahindra Bank",4.6],["Cipla",4.2],["SBI Life Insurance",3.9],["Maruti Suzuki",3.6],["Bharti Airtel",3.5],["HCL Technologies",3.3],["Eicher Motors",2.4]],
  flexi2: [["HDFC Bank",7.0],["ICICI Bank",6.2],["Larsen & Toubro",4.4],["Infosys",4.0],["Reliance Industries",3.8],["Max Healthcare",3.1],["Persistent Systems",2.9],["Bharti Airtel",2.8],["Indian Hotels",2.5],["Cholamandalam Finance",2.3]],
  mid: [["Max Healthcare",4.1],["Indian Hotels",3.8],["Persistent Systems",3.6],["Coforge",3.4],["Federal Bank",3.2],["Dixon Technologies",3.0],["Cholamandalam Finance",2.9],["Fortis Healthcare",2.7],["Balkrishna Industries",2.4],["Ipca Laboratories",2.3]],
  mid2: [["Coforge",5.6],["Persistent Systems",5.1],["Dixon Technologies",4.8],["Kalyan Jewellers",4.4],["Max Healthcare",3.9],["Polycab India",3.6],["Trent",3.3],["Indian Hotels",3.1],["Voltas",2.8],["Federal Bank",2.5]],
  small: [["Multi Commodity Exchange",2.6],["Karur Vysya Bank",2.3],["Kaynes Technology",2.1],["Apar Industries",2.0],["CDSL",1.9],["KIMS Hospitals",1.8],["Cholamandalam Financial",1.7],["Navin Fluorine",1.6],["Brigade Enterprises",1.5],["Aster DM Healthcare",1.5]],
  small2: [["Kaynes Technology",3.4],["Multi Commodity Exchange",3.1],["Apar Industries",2.8],["Krishna Institute",2.5],["Blue Star",2.4],["Karur Vysya Bank",2.2],["Gokaldas Exports",2.0],["CDSL",1.9],["Cyient DLM",1.8],["Navin Fluorine",1.7]],
  lmc: [["HDFC Bank",5.9],["ICICI Bank",4.8],["Axis Bank",3.4],["Infosys",3.1],["Max Healthcare",2.9],["Federal Bank",2.6],["Reliance Industries",2.6],["Coforge",2.4],["Bharti Airtel",2.3],["Persistent Systems",2.1]],
  elss: [["HDFC Bank",8.0],["ICICI Bank",7.1],["Infosys",5.2],["Reliance Industries",4.4],["Bharti Airtel",3.9],["Larsen & Toubro",3.6],["Axis Bank",3.1],["Max Healthcare",2.4],["TCS",2.3],["Kotak Mahindra Bank",2.2]],
  bal: [["HDFC Bank",5.6],["ICICI Bank",4.9],["Reliance Industries",4.1],["Infosys",3.2],["Larsen & Toubro",2.7],["Bharti Airtel",2.6],["NTPC",2.4],["Coal India",2.2],["State Bank of India",2.1],["ITC",2.0]],
  // swap-in pools used to vary holdings between funds of the same category
  poolL: [["State Bank of India",3.1],["Mahindra & Mahindra",2.9],["Sun Pharma",2.7],["HCL Technologies",2.5],["NTPC",2.4],["Maruti Suzuki",2.3],["UltraTech Cement",2.1],["Bajaj Finance",2.0]],
  poolM: [["Lupin",2.6],["Supreme Industries",2.4],["Mphasis",2.3],["AU Small Finance Bank",2.2],["Phoenix Mills",2.1],["Solar Industries",2.0],["Bharat Forge",1.9],["Oberoi Realty",1.8]],
  poolS: [["Radico Khaitan",2.2],["Cholamandalam Financial",2.0],["Sobha",1.9],["Amber Enterprises",1.8],["JK Lakshmi Cement",1.7],["Elecon Engineering",1.6],["Century Plyboards",1.5],["Tega Industries",1.4]],
  nasdaq: [["Apple Inc",9.0],["Microsoft Corp",8.6],["NVIDIA Corp",8.2],["Amazon.com",5.4],["Broadcom Inc",4.6],["Meta Platforms",4.1],["Alphabet Inc",3.6],["Tesla Inc",3.0],["Costco",2.4],["Netflix Inc",2.0]],
  none: []
};

// n name · amc · cls broad class · cat category · star rating · nav · aum (₹ Cr) · r returns % (1M,3M,6M,1Y,3Y,5Y; 3Y/5Y annualised)
// er expense ratio % · sd std deviation % · sh Sharpe · beta · al allocation (eq,debt,gold,cash %) · cap market cap split (L,M,S % of equity) · h holdings key · since launch year
const RS_FUNDS = [
  {id:"sbin50",  n:"SBI Nifty 50 ETF", amc:"SBI MF", cls:"Index", cat:"ETFs : Index", star:3, nav:264.5659, aum:203017.02, r:[8.82,-0.27,2.93,-3.20,9.60,7.76], er:0.04, sd:13.1, sh:0.42, beta:1.00, al:[99.9,0,0,0.1], cap:[100,0,0], h:"idx50", since:2015},
  {id:"ppfas",   n:"Parag Parikh Flexi Cap Fund", amc:"PPFAS MF", cls:"Equity", cat:"Equity : Flexi Cap", star:3, nav:84.3793, aum:145070.50, r:[4.39,-0.29,1.39,-1.81,12.64,10.73], er:1.32, sd:9.8, sh:0.86, beta:0.62, al:[79.2,12.4,0,8.4], cap:[78,6,16], h:"ppfas", since:2013},
  {id:"sbisx",   n:"SBI BSE Sensex ETF", amc:"SBI MF", cls:"Index", cat:"ETFs : Index", star:2, nav:885.1519, aum:115575.74, r:[9.61,1.00,3.79,-4.11,8.31,7.01], er:0.04, sd:12.7, sh:0.36, beta:0.98, al:[99.9,0,0,0.1], cap:[100,0,0], h:"sensex", since:2013},
  {id:"hdfcfx",  n:"HDFC Flexi Cap Fund", amc:"HDFC MF", cls:"Equity", cat:"Equity : Flexi Cap", star:5, nav:2091.1330, aum:108546.98, r:[6.93,0.07,7.57,1.39,16.55,15.61], er:1.38, sd:11.9, sh:1.04, beta:0.84, al:[91.6,1.2,0,7.2], cap:[82,10,8], h:"hdfcflexi", since:1995},
  {id:"hdfcbaf", n:"HDFC Balanced Advantage Fund", amc:"HDFC MF", cls:"Hybrid", cat:"Hybrid : Balanced Advantage", star:5, nav:525.3730, aum:102533.96, r:[4.33,-1.04,1.95,-0.96,11.19,13.04], er:1.36, sd:9.1, sh:0.88, beta:0.66, al:[62.4,30.1,0,7.5], cap:[86,8,6], h:"bal", since:2000},
  {id:"hdfcmid", n:"HDFC Mid Cap Fund", amc:"HDFC MF", cls:"Equity", cat:"Equity : Mid Cap", star:4, nav:203.7510, aum:101856.06, r:[2.51,-4.30,3.09,0.58,15.91,17.08], er:1.39, sd:15.6, sh:0.81, beta:0.88, al:[93.5,0,0,6.5], cap:[7,68,25], h:"mid", since:2007},
  {id:"sbiliq",  n:"SBI Liquid Fund", amc:"SBI MF", cls:"Debt", cat:"Debt : Liquid", star:2, nav:4427.5964, aum:90214.76, r:[0.48,1.49,3.19,6.38,6.75,6.28], er:0.30, sd:0.3, sh:1.9, beta:0, al:[0,96.8,0,3.2], cap:[0,0,0], h:"none", since:2007},
  {id:"sbiah",   n:"SBI Aggressive Hybrid Fund", amc:"SBI MF", cls:"Hybrid", cat:"Hybrid : Aggressive Hybrid", star:3, nav:317.8178, aum:86162.81, r:[4.05,-0.93,3.14,2.65,12.47,9.13], er:1.40, sd:10.2, sh:0.74, beta:0.74, al:[73.8,22.6,0,3.6], cap:[72,16,12], h:"bal", since:1995},
  {id:"icicima", n:"ICICI Prudential Multi Asset Allocation Fund", amc:"ICICI Pru MF", cls:"Hybrid", cat:"Hybrid : Multi Asset Allocation", star:4, nav:762.4100, aum:84108.36, r:[3.32,-2.07,0.67,1.24,13.54,13.80], er:1.38, sd:7.9, sh:1.12, beta:0.55, al:[58.3,18.9,13.4,9.4], cap:[84,9,7], h:"bal", since:2002},
  {id:"icicibc", n:"ICICI Prudential Large Cap Fund", amc:"ICICI Pru MF", cls:"Equity", cat:"Equity : Large Cap", star:4, nav:112.6400, aum:72814.20, r:[6.12,0.44,4.86,0.92,14.21,13.66], er:1.42, sd:11.4, sh:0.92, beta:0.86, al:[92.8,0,0,7.2], cap:[89,7,4], h:"lc", since:2008},
  {id:"nipsc",   n:"Nippon India Small Cap Fund", amc:"Nippon India MF", cls:"Equity", cat:"Equity : Small Cap", star:4, nav:168.2280, aum:66402.11, r:[1.86,-5.82,4.12,-2.41,18.92,24.11], er:1.44, sd:16.8, sh:0.96, beta:0.82, al:[95.4,0,0,4.6], cap:[5,12,83], h:"small", since:2010},
  {id:"icicibaf",n:"ICICI Prudential Balanced Advantage Fund", amc:"ICICI Pru MF", cls:"Hybrid", cat:"Hybrid : Balanced Advantage", star:4, nav:76.8300, aum:64221.43, r:[3.11,0.24,3.44,4.12,11.86,11.42], er:1.42, sd:6.8, sh:1.08, beta:0.52, al:[48.6,33.8,0,17.6], cap:[88,7,5], h:"bal", since:2006},
  {id:"kotakfx", n:"Kotak Flexicap Fund", amc:"Kotak MF", cls:"Equity", cat:"Equity : Flexi Cap", star:3, nav:86.9150, aum:52480.66, r:[5.48,-0.82,3.96,-0.48,13.62,12.84], er:1.46, sd:12.6, sh:0.78, beta:0.90, al:[96.1,0,0,3.9], cap:[71,20,9], h:"flexi2", since:2009},
  {id:"kotakmid",n:"Kotak Emerging Equity Fund", amc:"Kotak MF", cls:"Equity", cat:"Equity : Mid Cap", star:4, nav:132.4380, aum:51207.87, r:[2.14,-3.86,2.71,-1.12,16.84,19.32], er:1.42, sd:14.9, sh:0.86, beta:0.86, al:[95.6,0,0,4.4], cap:[9,71,20], h:"mid", since:2007},
  {id:"mirlmc",  n:"Mirae Asset Large & Midcap Fund", amc:"Mirae Asset MF", cls:"Equity", cat:"Equity : Large & Mid Cap", star:4, nav:158.2770, aum:41632.58, r:[4.62,-1.48,3.37,-0.66,14.38,15.24], er:1.52, sd:13.4, sh:0.82, beta:0.92, al:[98.2,0,0,1.8], cap:[52,40,8], h:"lmc", since:2010},
  {id:"axissc",  n:"Axis Small Cap Fund", amc:"Axis MF", cls:"Equity", cat:"Equity : Small Cap", star:4, nav:112.5300, aum:26408.29, r:[1.42,-4.96,3.48,-1.84,16.12,21.88], er:1.58, sd:14.2, sh:0.92, beta:0.74, al:[90.8,0,0,9.2], cap:[6,18,76], h:"small2", since:2013},
  {id:"sbisc",   n:"SBI Small Cap Fund", amc:"SBI MF", cls:"Equity", cat:"Equity : Small Cap", star:3, nav:174.0612, aum:35810.44, r:[1.08,-6.44,2.26,-4.92,13.48,20.36], er:1.56, sd:14.6, sh:0.72, beta:0.76, al:[88.9,0,0,11.1], cap:[4,14,82], h:"small", since:2009},
  {id:"motmid",  n:"Motilal Oswal Midcap Fund", amc:"Motilal Oswal MF", cls:"Equity", cat:"Equity : Mid Cap", star:5, nav:104.8820, aum:33916.05, r:[0.62,-7.12,-1.86,-3.48,24.36,27.42], er:1.54, sd:17.2, sh:1.18, beta:0.92, al:[92.4,0,0,7.6], cap:[18,66,16], h:"mid2", since:2014},
  {id:"quantsc", n:"Quant Small Cap Fund", amc:"Quant MF", cls:"Equity", cat:"Equity : Small Cap", star:3, nav:248.1680, aum:28264.73, r:[2.48,-5.12,1.64,-7.86,17.44,31.12], er:1.62, sd:18.9, sh:0.82, beta:0.94, al:[94.8,0,0,5.2], cap:[14,10,76], h:"small2", since:1996},
  {id:"axiself", n:"Axis ELSS Tax Saver Fund", amc:"Axis MF", cls:"Equity", cat:"Equity : ELSS", star:2, nav:96.4410, aum:35612.08, r:[5.06,-1.62,2.48,-2.24,11.02,11.14], er:1.52, sd:13.1, sh:0.58, beta:0.88, al:[97.4,0,0,2.6], cap:[68,24,8], h:"elss", since:2009},
  {id:"mirelss", n:"Mirae Asset ELSS Tax Saver Fund", amc:"Mirae Asset MF", cls:"Equity", cat:"Equity : ELSS", star:4, nav:48.6620, aum:25418.92, r:[4.88,-1.12,3.64,-0.28,14.66,15.48], er:1.56, sd:12.8, sh:0.86, beta:0.90, al:[98.6,0,0,1.4], cap:[70,22,8], h:"elss", since:2015},
  {id:"utin50",  n:"UTI Nifty 50 Index Fund", amc:"UTI MF", cls:"Index", cat:"Index Fund : Large Cap", star:3, nav:168.3290, aum:22916.40, r:[8.78,-0.31,2.86,-3.34,9.42,7.58], er:0.20, sd:13.1, sh:0.41, beta:1.00, al:[99.8,0,0,0.2], cap:[100,0,0], h:"idx50", since:2000},
  {id:"nipl",    n:"Nippon India Large Cap Fund", amc:"Nippon India MF", cls:"Equity", cat:"Equity : Large Cap", star:5, nav:94.2370, aum:44368.12, r:[6.48,0.68,5.12,1.86,16.18,16.42], er:1.48, sd:12.2, sh:1.01, beta:0.91, al:[98.4,0,0,1.6], cap:[87,9,4], h:"lc", since:2007},
  {id:"kotakhy", n:"Kotak Equity Hybrid Fund", amc:"Kotak MF", cls:"Hybrid", cat:"Hybrid : Aggressive Hybrid", star:4, nav:64.1840, aum:7612.38, r:[3.84,-1.06,2.92,0.74,13.12,14.06], er:1.78, sd:10.4, sh:0.84, beta:0.76, al:[76.2,21.4,0,2.4], cap:[66,22,12], h:"flexi2", since:2014},
  {id:"hdfccb",  n:"HDFC Corporate Bond Fund", amc:"HDFC MF", cls:"Debt", cat:"Debt : Corporate Bond", star:4, nav:32.8420, aum:34812.66, r:[0.62,1.88,4.02,8.14,7.62,6.84], er:0.61, sd:1.2, sh:1.34, beta:0, al:[0,97.2,0,2.8], cap:[0,0,0], h:"none", since:2010},
  {id:"icicist", n:"ICICI Prudential Short Term Fund", amc:"ICICI Pru MF", cls:"Debt", cat:"Debt : Short Duration", star:4, nav:61.2280, aum:20184.32, r:[0.58,1.82,3.94,7.96,7.48,6.92], er:1.06, sd:1.0, sh:1.41, beta:0, al:[0,95.4,0,4.6], cap:[0,0,0], h:"none", since:2002},
  {id:"absliq",  n:"Aditya Birla Sun Life Liquid Fund", amc:"Aditya Birla SL MF", cls:"Debt", cat:"Debt : Liquid", star:3, nav:428.9760, aum:48920.11, r:[0.49,1.51,3.22,6.42,6.82,6.31], er:0.33, sd:0.3, sh:2.0, beta:0, al:[0,97.6,0,2.4], cap:[0,0,0], h:"none", since:2004},
  {id:"kotakgilt",n:"Kotak Gilt Fund", amc:"Kotak MF", cls:"Debt", cat:"Debt : Gilt", star:3, nav:98.4130, aum:4218.54, r:[0.42,1.36,3.48,8.62,7.94,6.18], er:1.48, sd:2.6, sh:0.86, beta:0, al:[0,98.1,0,1.9], cap:[0,0,0], h:"none", since:1998},
  {id:"sbigold", n:"SBI Gold Fund", amc:"SBI MF", cls:"Gold", cat:"Commodities : Gold", star:4, nav:38.6420, aum:6824.15, r:[-1.84,4.62,12.48,32.16,24.82,15.36], er:0.30, sd:12.4, sh:1.42, beta:0.04, al:[0,0,99.4,0.6], cap:[0,0,0], h:"none", since:2011},
  {id:"nipgold", n:"Nippon India ETF Gold BeES", amc:"Nippon India MF", cls:"Gold", cat:"Commodities : Gold ETF", star:4, nav:92.1840, aum:21862.77, r:[-1.79,4.71,12.66,32.48,25.12,15.62], er:0.80, sd:12.3, sh:1.45, beta:0.04, al:[0,0,99.6,0.4], cap:[0,0,0], h:"none", since:2007},
  {id:"motnas",  n:"Motilal Oswal Nasdaq 100 FoF", amc:"Motilal Oswal MF", cls:"International", cat:"FoF : Overseas", star:4, nav:46.2910, aum:6118.40, r:[3.62,8.14,14.96,24.68,26.42,19.84], er:0.58, sd:18.4, sh:1.04, beta:0.22, al:[99.2,0,0,0.8], cap:[100,0,0], h:"nasdaq", since:2018},
  {id:"dspsc",   n:"DSP Small Cap Fund", amc:"DSP MF", cls:"Equity", cat:"Equity : Small Cap", star:3, nav:198.4470, aum:16408.62, r:[1.72,-4.48,3.92,-1.36,15.64,22.48], er:1.72, sd:15.1, sh:0.84, beta:0.78, al:[94.2,0,0,5.8], cap:[3,16,81], h:"small2", since:2007}
];

// Holdings for a fund: index funds keep their template; active funds swap a few
// names from a pool and reweight, so same-category funds overlap partly, not fully.
const RS_HCACHE = {};
function rsHold(f){
  if(RS_HCACHE[f.id]) return RS_HCACHE[f.id];
  const base = RS_H[f.h] || [];
  if(!base.length || f.cls === "Index" || f.h === "nasdaq") return RS_HCACHE[f.id] = base;
  const rnd = rsRand([...f.id].reduce((a,c)=>a*31+c.charCodeAt(0),11));
  const pool = (RS_H[/small/.test(f.h)?"poolS":/mid/.test(f.h)?"poolM":"poolL"]).slice();
  const out = base.map(([n,w])=>[n,+(w*(0.7+rnd()*0.6)).toFixed(1)]);
  for(let k=0;k<3;k++){
    const i = Math.floor(rnd()*out.length), p = pool.splice(Math.floor(rnd()*pool.length),1)[0];
    p && !out.some(x=>x[0]===p[0]) && (out[i] = [p[0], +(p[1]*(0.8+rnd()*0.5)).toFixed(1)]);
  }
  return RS_HCACHE[f.id] = out.sort((a,b)=>b[1]-a[1]);
}

const RS_CLASSES =["Equity","Debt","Hybrid","Index","Gold","International"];

// Deterministic pseudo-random walk so charts are stable between reloads.
function rsRand(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}

// Weekly closes for ~10 years, rescaled so the last point equals `last`.
function rsSeries(seed,weeks,last,drift,vol){
  const rnd=rsRand(seed),out=[];let v=100;
  for(let i=0;i<weeks;i++){
    const shock=(rnd()+rnd()+rnd()-1.5)*vol;
    // a 2020-style drawdown around week ~165 keeps the long view realistic
    const crash=i>160&&i<172?-0.045:i>=172&&i<200?0.018:0;
    v*=1+drift+shock+crash;out.push(v)
  }
  const k=last/out[out.length-1];
  const end=new Date(2026,10,5);
  return out.map((x,i)=>({d:new Date(end.getTime()-(weeks-1-i)*7*864e5),v:+(x*k).toFixed(2)}))
}

// Valuations mean-revert, so PE is modelled around a long-run level rather than as a walk.
// The last 26 weeks are eased so the series ends on the published value.
function rsPeSeries(seed,weeks,last,mean){
  const rnd=rsRand(seed),out=[];let v=mean+1.5;
  for(let i=0;i<weeks;i++){
    // 2020 de-rating then the 2021 earnings-recovery premium
    const target=i>160&&i<180?17:i>=180&&i<240?mean+4:mean;
    v+=(target-v)*0.06+(rnd()+rnd()-1)*0.9;out.push(v)
  }
  const gap=last-out[weeks-1];
  for(let i=weeks-26;i<weeks;i++)out[i]+=gap*(i-(weeks-26))/25;
  const end=new Date(2026,10,5);
  return out.map((x,i)=>({d:new Date(end.getTime()-(weeks-1-i)*7*864e5),v:+x.toFixed(2)}))
}

const RS_MARKET = {
  nifty: rsSeries(2026,522,24536.6,0.0021,0.022),
  pe: rsPeSeries(5,522,20.25,21.0),
  niftyChg: 2.4
};
