const fs = require('fs');

const states = [
  {
    id: 'west-bengal',
    name: 'West Bengal',
    subtitle: 'The Eastern Hub',
    description: 'A major contributor to India\'s agriculture and MSME sectors, with significant urbanization concentrated in the Kolkata metropolitan area.',
    pop2024: '99M',
    popInfo: 'Estimated ~99.1M (2024)',
    pop2051: '~115M',
    pop2051Info: 'Stabilizing growth',
    gsdp: '₹18.1L Cr',
    growth: '7.5%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '81.7%',
    metric1Desc: 'High literacy rate driven by strong educational infrastructure.',
    metric1Proj: '→ 2051: ~92%',
    metric2Icon: 'agriculture',
    metric2Color: 'var(--secondary)',
    metric2Title: 'Agriculture',
    metric2Value: 'Major',
    metric2Desc: 'Leading producer of rice and jute in the country.',
    metric2Proj: 'Source: PLFS 2023-24, Economic Survey',
    metric3Icon: 'location_city',
    metric3Color: '#818cf8',
    metric3Title: 'Urbanization',
    metric3Value: '32%',
    metric3Desc: 'Rapid expansion in tier-2 cities currently underway.',
    metric3Proj: '→ 2051: ~45%',
    tagColor: 'var(--secondary)'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    subtitle: 'The Desert Economy',
    description: 'India\'s largest state by area, rapidly developing its renewable energy capacity while addressing critical water scarcity challenges.',
    pop2024: '81M',
    popInfo: 'Estimated ~81.0M (2024)',
    pop2051: '~105M',
    pop2051Info: 'High demographic momentum',
    gsdp: '₹17.0L Cr',
    growth: '6.8%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--error)',
    metric1Title: 'Literacy',
    metric1Value: '75.8%',
    metric1Desc: 'Steady improvement but gender gap remains a challenge.',
    metric1Proj: '→ 2051: ~88%',
    metric2Icon: 'solar_power',
    metric2Color: 'var(--on-tertiary-container)',
    metric2Title: 'Energy',
    metric2Value: 'Top',
    metric2Desc: 'Leader in solar energy generation across India.',
    metric2Proj: 'Source: PLFS, Ministry of Power',
    metric3Icon: 'water_drop',
    metric3Color: 'var(--error)',
    metric3Title: 'Water Safety',
    metric3Value: 'Critical',
    metric3Desc: 'Severe stress on groundwater resources due to arid conditions.',
    metric3Proj: '→ 2051: Severe Depletion Risk',
    tagColor: 'var(--on-tertiary-container)'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    subtitle: 'The Coastal Power',
    description: 'A key agricultural and coastal industrial hub featuring expansive marine exports, pharmaceutical manufacturing, and IT services.',
    pop2024: '53M',
    popInfo: 'Estimated ~53.2M (2024)',
    pop2051: '~58M',
    pop2051Info: 'Approaching stabilization',
    gsdp: '₹15.9L Cr',
    growth: '7.2%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--error)',
    metric1Title: 'Literacy',
    metric1Value: '72.6%',
    metric1Desc: 'Targeted schemes increasing enrollment in rural areas.',
    metric1Proj: '→ 2051: ~89%',
    metric2Icon: 'sailing',
    metric2Color: 'var(--primary)',
    metric2Title: 'Economy',
    metric2Value: 'Coastal',
    metric2Desc: 'Second longest coastline driving significant export growth.',
    metric2Proj: 'Source: State Economic Survey',
    metric3Icon: 'agriculture',
    metric3Color: 'var(--secondary)',
    metric3Title: 'Agriculture',
    metric3Value: 'Strong',
    metric3Desc: 'Often called the Rice Bowl of India.',
    metric3Proj: '→ 2051: Focus on resilient farming',
    tagColor: 'var(--primary)'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    subtitle: 'The Heart of India',
    description: 'Central India\'s agricultural powerhouse, leading in pulses and oilseeds production, and making strides in renewable energy.',
    pop2024: '86M',
    popInfo: 'Estimated ~86.6M (2024)',
    pop2051: '~112M',
    pop2051Info: 'Continued moderate growth',
    gsdp: '₹15.0L Cr',
    growth: '7.0%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '75.2%',
    metric1Desc: 'Consistent growth in educational outcomes.',
    metric1Proj: '→ 2051: ~90%',
    metric2Icon: 'agriculture',
    metric2Color: 'var(--secondary)',
    metric2Title: 'Farming',
    metric2Value: 'Leader',
    metric2Desc: 'Top producer of pulses, oilseeds, and major wheat contributor.',
    metric2Proj: 'Source: State Ag Data, PLFS',
    metric3Icon: 'forest',
    metric3Color: 'var(--secondary)',
    metric3Title: 'Forest',
    metric3Value: 'Largest',
    metric3Desc: 'Highest forest cover among all Indian states.',
    metric3Proj: '→ 2051: Critical conservation',
    tagColor: 'var(--secondary)'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    subtitle: 'The Agrarian Innovator',
    description: 'A wealth-generating state balancing a massive agrarian base with high industrialization in the NCR region.',
    pop2024: '30M',
    popInfo: 'Estimated ~30.7M (2024)',
    pop2051: '~38M',
    pop2051Info: 'Industrial migration influx',
    gsdp: '₹12.1L Cr',
    growth: '8.0%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '80.4%',
    metric1Desc: 'Strong educational footprint, especially in urban centers.',
    metric1Proj: '→ 2051: ~94%',
    metric2Icon: 'factory',
    metric2Color: 'var(--secondary)',
    metric2Title: 'Industry',
    metric2Value: 'Hub',
    metric2Desc: 'Gurugram acts as a major IT and manufacturing pivot.',
    metric2Proj: 'Source: Economic Survey, PLFS',
    metric3Icon: 'water_drop',
    metric3Color: 'var(--error)',
    metric3Title: 'Water',
    metric3Value: 'Depleted',
    metric3Desc: 'Groundwater reaching critical over-exploited status.',
    metric3Proj: '→ 2051: Requires severe intervention',
    tagColor: 'var(--secondary)'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    subtitle: 'The Industrial Pioneer',
    description: 'India\'s second-largest economy, leading in manufacturing, healthcare, and facing advanced demographic aging contours.',
    pop2024: '77M',
    popInfo: 'Estimated ~77M (2024)',
    pop2051: '~79M',
    pop2051Info: 'Population stabilizing, highly aging',
    gsdp: '₹31.2L Cr',
    growth: '11.0%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '85-90%',
    metric1Desc: 'Among the highest in India, robust education infrastructure.',
    metric1Proj: '→ 2051: ~98%',
    metric2Icon: 'factory',
    metric2Color: '#818cf8',
    metric2Title: 'Economy',
    metric2Value: '#2',
    metric2Desc: 'Automobile, textiles, and IT services powerhouse.',
    metric2Proj: 'Source: RBI, State Survey',
    metric3Icon: 'elderly',
    metric3Color: 'var(--on-tertiary-container)',
    metric3Title: 'Aging',
    metric3Value: '12.9%',
    metric3Desc: 'Projected to be India\'s "oldest" state by 2031.',
    metric3Proj: '→ 2051: ~31% elderly population',
    tagColor: 'var(--primary-container)'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    subtitle: 'The Demographic Frontier',
    description: 'Leading India in human development indices, with the country\'s highest literacy and a rapidly aging mature demographic profile.',
    pop2024: '35M',
    popInfo: 'Estimated ~35.7M (2024)',
    pop2051: '~33M',
    pop2051Info: 'Population decline projected',
    gsdp: '₹10.2L Cr',
    growth: '6.5%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '96.2%',
    metric1Desc: 'The highest in the nation; universal basic education.',
    metric1Proj: '→ 2051: ~99%',
    metric2Icon: 'medical_services',
    metric2Color: 'var(--secondary)',
    metric2Title: 'Health',
    metric2Value: 'Top',
    metric2Desc: 'Highest life expectancy and lowest infant mortality.',
    metric2Proj: 'Source: Census, MoHFW',
    metric3Icon: 'elderly',
    metric3Color: 'var(--on-tertiary-container)',
    metric3Title: 'Aging',
    metric3Value: '14.4%',
    metric3Desc: 'Highest proportion of citizens aged 60+ in India.',
    metric3Proj: '→ 2051: ~31% elderly population',
    tagColor: 'var(--secondary)'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    subtitle: 'The Technology Capital',
    description: 'A major economic powerhouse driven by Bengaluru\'s IT sector, alongside strong agricultural output and rapid urbanization.',
    pop2024: '68M',
    popInfo: 'Estimated ~68M (2024)',
    pop2051: '~78M',
    pop2051Info: 'Moderate growth, high migration',
    gsdp: '₹28.8L Cr',
    growth: '9.0%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '82.0%',
    metric1Desc: 'Steady improvement across rural districts.',
    metric1Proj: '→ 2051: ~95%',
    metric2Icon: 'computer',
    metric2Color: '#818cf8',
    metric2Title: 'Tech',
    metric2Value: 'Hub',
    metric2Desc: 'Largest exporter of software services in India.',
    metric2Proj: 'Source: State Economic Survey',
    metric3Icon: 'elderly',
    metric3Color: 'var(--on-tertiary-container)',
    metric3Title: 'Aging',
    metric3Value: '9.2%',
    metric3Desc: 'Experiencing rapid aging similar to other southern states.',
    metric3Proj: '→ 2051: Significant demographic shift',
    tagColor: '#818cf8'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    subtitle: 'The Manufacturing Giant',
    description: 'A western industrial and mercantile powerhouse with extensive port infrastructure and massive renewable energy investments.',
    pop2024: '71M',
    popInfo: 'Estimated ~71.5M (2024)',
    pop2051: '~88M',
    pop2051Info: 'Industrial hub growth',
    gsdp: '₹22.4L Cr',
    growth: '10.5%',
    metric1Icon: 'auto_stories',
    metric1Color: 'var(--primary)',
    metric1Title: 'Literacy',
    metric1Value: '81.8%',
    metric1Desc: 'High literacy supporting industrial workforce needs.',
    metric1Proj: '→ 2051: ~95%',
    metric2Icon: 'factory',
    metric2Color: 'var(--secondary)',
    metric2Title: 'Industry',
    metric2Value: 'Leader',
    metric2Desc: 'Top state in manufacturing and goods exports.',
    metric2Proj: 'Source: PLFS, State Survey',
    metric3Icon: 'directions_boat',
    metric3Color: '#818cf8',
    metric3Title: 'Trade',
    metric3Value: 'Ports',
    metric3Desc: 'Handles a major share of India\'s maritime cargo.',
    metric3Proj: '→ 2051: Mega coastal economies',
    tagColor: 'var(--primary)'
  }
];

const template = (state) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>${state.name} State Observatory | The Sovereign Ledger</title>
    <meta name="description" content="${state.name} — ${state.subtitle}. Population ${state.pop2024}, GSDP ${state.gsdp}."/>
    <link rel="stylesheet" href="styles.css"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script>tailwind.config={theme:{extend:{colors:{"primary":"#000666","primary-container":"#1a237e","primary-fixed":"#e0e0ff","primary-fixed-dim":"#bdc2ff","on-primary":"#ffffff","on-primary-container":"#8690ee","secondary":"#1b6d24","secondary-container":"#a0f399","secondary-fixed":"#a3f69c","on-secondary-container":"#217128","tertiary":"#3a0800","tertiary-container":"#5f1300","tertiary-fixed":"#ffdbd1","on-tertiary-container":"#ff663c","error":"#ba1a1a","error-container":"#ffdad6","surface":"#fbf8ff","surface-container-lowest":"#ffffff","surface-container-low":"#f5f2fb","surface-container":"#efecf5","surface-container-high":"#eae7ef","surface-container-highest":"#e4e1ea","on-surface":"#1b1b21","on-surface-variant":"#454652","outline":"#767683","outline-variant":"#c6c5d4"},fontFamily:{"headline":["Manrope"],"body":["Inter"]},borderRadius:{"DEFAULT":"0.125rem","lg":"0.25rem","xl":"0.5rem","full":"0.75rem"}}}};</script>
</head>
<body class="bg-surface text-on-surface">
<nav class="top-nav"><div class="nav-inner"><a href="index.html" class="brand">The Sovereign Ledger</a><ul class="nav-links"><li><a href="index.html">Home</a></li><li><a href="national-overview.html">National Overview</a></li><li><a href="state-dashboards.html" class="active">State Dashboards</a></li><li><a href="water-resources.html">Water Resources</a></li><li><a href="demographics.html">Demographics</a></li></ul><button class="hamburger" onclick="document.getElementById('mobileMenu').classList.toggle('open')"><span class="material-symbols-outlined">menu</span></button></div></nav>
<div id="mobileMenu" class="mobile-menu"><a href="index.html">Home</a><a href="national-overview.html">National Overview</a><a href="state-dashboards.html" class="active">State Dashboards</a><a href="water-resources.html">Water Resources</a><a href="demographics.html">Demographics</a></div>

<main style="padding-top:72px;"><div style="position:fixed;inset:0;background-image:radial-gradient(circle,#c6c5d4 1px,transparent 1px);background-size:24px 24px;opacity:0.08;pointer-events:none;z-index:0;"></div>
<div class="container" style="position:relative;z-index:10;padding-top:2rem;padding-bottom:4rem;">
    <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.75rem;color:var(--outline);margin-bottom:2rem;"><a href="state-dashboards.html" style="color:var(--primary);text-decoration:none;">State Dashboards</a><span class="material-symbols-outlined" style="font-size:0.875rem;">chevron_right</span><span>${state.name}</span></div>
    
    <section style="display:grid;grid-template-columns:7fr 5fr;gap:2rem;align-items:flex-end;margin-bottom:3rem;">
        <div>
            <span class="label-md" style="display:inline-block;background:var(--surface-container-high);color:${state.tagColor};padding:0.25rem 0.75rem;border-radius:4px;margin-bottom:1rem;">${state.subtitle}</span>
            <h1 class="font-headline" style="font-size:clamp(2.5rem,5vw,4rem);font-weight:800;color:#1a1a4e;letter-spacing:-0.03em;line-height:0.95;">${state.name}</h1>
            <p style="font-size:1.05rem;color:var(--on-surface-variant);max-width:500px;margin-top:1rem;line-height:1.7;">${state.description}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="card" style="padding:1.5rem;"><div class="label-sm" style="color:var(--outline);margin-bottom:0.5rem;">Population (2024)</div><div class="font-headline" style="font-size:2.25rem;font-weight:800;color:var(--primary);">${state.pop2024}</div><div style="font-size:0.625rem;color:var(--outline);margin-top:0.25rem;">${state.popInfo}</div></div>
            <div class="card" style="padding:1.5rem;"><div class="label-sm" style="color:var(--outline);margin-bottom:0.5rem;">2051 Projection</div><div class="font-headline" style="font-size:2.25rem;font-weight:800;color:#3949ab;">${state.pop2051}</div><div style="font-size:0.625rem;color:var(--outline);margin-top:0.25rem;">${state.pop2051Info}</div></div>
            <div style="grid-column:span 2;background:#1a1a4e;padding:1.5rem;border-radius:1rem;color:white;display:flex;align-items:center;justify-content:space-between;"><div><div class="label-sm" style="opacity:0.5;">GSDP Estimates</div><div class="font-headline" style="font-size:2rem;font-weight:800;">${state.gsdp}</div></div><div style="text-align:right;"><div class="label-sm" style="opacity:0.5;">Growth Rate</div><div class="font-headline" style="font-size:1.5rem;font-weight:800;color:var(--secondary-fixed);">${state.growth}</div></div></div>
        </div>
    </section>

    <section style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-bottom:3rem;">
        <div class="card" style="border-left:4px solid ${state.metric1Color};"><span class="material-symbols-outlined" style="color:${state.metric1Color};margin-bottom:1rem;">${state.metric1Icon}</span><h3 class="font-headline" style="font-size:1.15rem;font-weight:700;color:#1a1a4e;">${state.metric1Title}</h3><div class="font-headline" style="font-size:2rem;font-weight:800;color:${state.metric1Color};margin:0.5rem 0;">${state.metric1Value}</div><p style="font-size:0.75rem;color:var(--on-surface-variant);">${state.metric1Desc}</p><div style="margin-top:0.5rem;font-size:0.5625rem;color:var(--outline);text-transform:uppercase;">${state.metric1Proj}</div></div>
        <div class="card" style="border-left:4px solid ${state.metric2Color};"><span class="material-symbols-outlined" style="color:${state.metric2Color};margin-bottom:1rem;">${state.metric2Icon}</span><h3 class="font-headline" style="font-size:1.15rem;font-weight:700;color:#1a1a4e;">${state.metric2Title}</h3><div class="font-headline" style="font-size:2rem;font-weight:800;color:${state.metric2Color};margin:0.5rem 0;">${state.metric2Value}</div><p style="font-size:0.75rem;color:var(--on-surface-variant);">${state.metric2Desc}</p><div style="margin-top:0.5rem;font-size:0.5625rem;color:var(--outline);text-transform:uppercase;">${state.metric2Proj}</div></div>
        <div class="card" style="border-left:4px solid ${state.metric3Color};"><span class="material-symbols-outlined" style="color:${state.metric3Color};margin-bottom:1rem;">${state.metric3Icon}</span><h3 class="font-headline" style="font-size:1.15rem;font-weight:700;color:#1a1a4e;">${state.metric3Title}</h3><div class="font-headline" style="font-size:2rem;font-weight:800;color:${state.metric3Color};margin:0.5rem 0;">${state.metric3Value}</div><p style="font-size:0.75rem;color:var(--on-surface-variant);">${state.metric3Desc}</p><div style="margin-top:0.5rem;font-size:0.5625rem;color:var(--outline);text-transform:uppercase;">${state.metric3Proj}</div></div>
    </section>
</div>
<div class="source-bar" style="text-align:center;padding:1.25rem;">Data Sources: <a href="https://censusindia.gov.in" target="_blank">Census of India</a> · <a href="https://niti.gov.in" target="_blank">NITI Aayog</a> · State Economic Surveys · NSSO PLFS · World Bank</div>
</main>
<footer class="site-footer"><div class="footer-inner"><div><div class="footer-brand">The Sovereign Ledger</div><p style="color:var(--outline);font-size:0.8rem;">Advancing India's data sovereignty.</p></div><div><h5>Navigation</h5><ul><li><a href="index.html">Home</a></li><li><a href="state-dashboards.html">State Dashboards</a></li><li><a href="water-resources.html">Water Resources</a></li><li><a href="demographics.html">Demographics</a></li></ul></div><div><h5>Data Sources</h5><ul><li><a href="https://censusindia.gov.in" target="_blank">Census of India</a></li></ul></div><div><h5>Legal</h5><ul><li><a href="#">Privacy Policy</a></li></ul></div></div><div class="footer-bottom"><div>© 2025 The Sovereign Ledger.</div><div>Institutional Grade Data</div></div></footer></body></html>`;

states.forEach(state => {
  fs.writeFileSync(state.id + '.html', template(state));
  console.log('Generated ' + state.id + '.html');
});
