// Research 360 prototype: MF Screener, MF Compare, Market Signals and Portfolio IQ.
// Plugs into the core app the same way the distributor directory does: new ROUTES,
// wrapped navList/renderNav/pageHome, and delegated events. Data lives in research-data.js.
(function(){const e=document.createElement("style");e.textContent=`
.rs h1 em{font-style:italic;color:var(--mt-em,var(--gold,var(--accent)))}
.rs-asof{font-size:12.5px;font-weight:700;color:var(--muted);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:6px 12px}
.rs-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:4px 0 22px}
.rs-tb{display:flex;align-items:center;gap:12px;text-align:left;border:1.5px solid var(--line);background:var(--surface);border-radius:16px;padding:14px 16px;font:inherit;color:var(--ink);cursor:pointer;transition:box-shadow .15s,border-color .15s,transform .15s}
.rs-tb:hover{transform:translateY(-1px);box-shadow:var(--shadow)}
.rs-tb .i{flex:0 0 auto;width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--tc);background:color-mix(in srgb,var(--tc) 12%,var(--surface))}
.rs-tb .i svg{width:22px;height:22px}
.rs-tb b{display:block;font-size:15.5px;line-height:1.2}
.rs-tb small{display:block;font-size:12.5px;color:var(--muted);margin-top:2px;line-height:1.35}
.rs-tb.on{border-color:var(--tc);box-shadow:0 0 0 3px color-mix(in srgb,var(--tc) 18%,transparent)}
.rs-tb.t1{--tc:#2563eb}.rs-tb.t2{--tc:#e8590c}.rs-tb.t3{--tc:#7c3aed}.rs-tb.t4{--tc:#16a34a}
.rs-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--r-lg,16px);padding:20px;box-shadow:var(--shadow);min-width:0}
.rs-card+.rs-card{margin-top:16px}
.rs-card h3{margin:0 0 4px;font-size:17px}
.rs-card .sub{margin:0 0 14px;color:var(--muted);font-size:13.5px}
.rs-ch{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.rs-ch h3{margin:0}
.rs-bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.rs-bar .search-in{flex:1 1 260px;min-width:0;margin:0}
.rs-bar .search-in input{border:0;background:transparent;outline:0;font:inherit;color:var(--ink);width:100%}
.rs-bar select.inp{width:auto;flex:0 1 auto;min-width:150px}
.rs-chips{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 4px;margin-top:12px;scrollbar-width:none}
.rs-chips::-webkit-scrollbar{display:none}
.rs-chips .pill{flex:none;cursor:pointer}
.rs-chips .lbl{flex:none;align-self:center;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-right:2px}
.rs-pre{border:1px dashed color-mix(in srgb,var(--accent) 55%,var(--line));background:color-mix(in srgb,var(--accent) 6%,var(--surface));color:var(--ink-2)}
.rs-pre.on{border-style:solid;background:var(--accent);color:#fff;border-color:var(--accent)}
.rs-tools{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0 10px}
.rs-tools .cnt{font-size:13.5px;color:var(--muted)}
.rs-tools .cnt b{color:var(--ink)}
.rs-tools .acts{display:flex;gap:8px;flex-wrap:wrap;position:relative}
.btn-sm{padding:7px 12px!important;font-size:13px!important}
.rs-cols{position:absolute;right:0;top:calc(100% + 8px);z-index:30;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-lg);padding:12px;display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;width:300px}
.rs-cols label{display:flex;gap:8px;align-items:center;font-size:13.5px;font-weight:600;cursor:pointer}
.rs-cols .ttl{grid-column:1/-1;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.rs-tw{overflow:auto;border:1px solid var(--line);border-radius:14px;background:var(--surface)}
.rs-tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:13.5px;font-variant-numeric:tabular-nums}
.rs-tbl th{position:sticky;top:0;background:var(--surface-2,var(--surface));text-align:right;font-size:12px;font-weight:800;color:var(--muted);padding:11px 12px;border-bottom:1px solid var(--line);white-space:nowrap;cursor:pointer;user-select:none}
.rs-tbl th.l,.rs-tbl td.l{text-align:left}
.rs-tbl th .ar{opacity:.35;margin-left:3px}
.rs-tbl th.sorted{color:var(--ink)}
.rs-tbl th.sorted .ar{opacity:1;color:var(--accent)}
.rs-tbl td{padding:11px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;color:var(--ink-2)}
.rs-tbl tr:last-child td{border-bottom:0}
.rs-tbl tbody tr:hover td{background:color-mix(in srgb,var(--accent) 5%,var(--surface))}
.rs-tbl .fn{position:sticky;left:0;background:var(--surface);min-width:240px;max-width:300px;white-space:normal;z-index:1}
.rs-tbl th.fn{z-index:2;background:var(--surface-2,var(--surface))}
.rs-tbl .fn b{display:block;color:var(--ink);font-size:14px;line-height:1.3}
.rs-tbl .fn small{color:var(--muted);font-size:12px}
.rs-cat{display:inline-block;font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:color-mix(in srgb,var(--primary,var(--accent)) 10%,var(--surface));color:var(--primary,var(--accent));white-space:nowrap}
.rs-st{color:#f59e0b;letter-spacing:1px}
.rs-st i{color:var(--line);font-style:normal}
.up{color:var(--good,#059669)!important;font-weight:700}
.dn{color:var(--red,#dc2626)!important;font-weight:700}
.rs-ra{display:flex;gap:6px;justify-content:flex-end}
.rs-ib{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--line);background:var(--surface);color:var(--ink-2);border-radius:999px;padding:5px 10px;font:inherit;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}
.rs-ib:hover{border-color:var(--accent);color:var(--accent)}
.rs-ib.on{background:var(--accent);border-color:var(--accent);color:#fff}
.rs-pg{display:flex;gap:6px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:14px}
.rs-pg button{min-width:36px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--surface);color:var(--ink-2);font:inherit;font-weight:700;font-size:13px;cursor:pointer;padding:0 10px}
.rs-pg button.on{background:var(--mt-pill,var(--navy));border-color:transparent;color:#fff}
.rs-pg button:disabled{opacity:.4;cursor:default}
.rs-tray{position:sticky;bottom:14px;z-index:20;margin-top:16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:12px 14px;border-radius:16px;background:var(--card-dark,var(--navy));color:#fff;box-shadow:var(--shadow-lg)}
.rs-tray .t{font-weight:800;font-size:14px}
.rs-tray .cs{display:flex;gap:6px;flex-wrap:wrap;flex:1;min-width:0}
.rs-tray .c{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);border-radius:999px;padding:4px 6px 4px 10px;font-size:12.5px;font-weight:600;max-width:220px}
.rs-tray .c span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rs-tray .c button{border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:50%;width:20px;height:20px;cursor:pointer;line-height:1;flex:none}
.rs-dot{display:inline-block;width:10px;height:10px;border-radius:50%;flex:none}
.rs-empty{text-align:center;padding:38px 20px;border:1.5px dashed var(--line);border-radius:16px;color:var(--muted);background:var(--surface)}
.rs-empty .ill{width:64px;height:64px;margin:0 auto 12px;border-radius:18px;display:flex;align-items:center;justify-content:center;color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--surface))}
.rs-empty h3{color:var(--ink);margin:0 0 6px;font-size:18px}
.rs-empty p{margin:0 auto;max-width:460px;font-size:14px;line-height:1.5}
.rs-quick{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:16px}
.rs-sw{position:relative;flex:1 1 320px;min-width:0}
.rs-sug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:30;background:var(--surface);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-lg);max-height:320px;overflow:auto;padding:6px}
.rs-sug button{display:flex;width:100%;justify-content:space-between;align-items:center;gap:10px;text-align:left;border:0;background:transparent;color:var(--ink);font:inherit;font-size:14px;padding:9px 10px;border-radius:10px;cursor:pointer}
.rs-sug button:hover,.rs-sug button:focus{background:var(--surface-3)}
.rs-sug button small{color:var(--muted);font-size:12px;white-space:nowrap}
.rs-sug .none{padding:12px;color:var(--muted);font-size:13.5px}
.rs-sel{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.rs-sel .c{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:6px 6px 6px 12px;font-size:13px;font-weight:700;max-width:100%}
.rs-sel .c span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rs-sel .c button{border:0;background:var(--surface-3);color:var(--ink-2);border-radius:50%;width:22px;height:22px;cursor:pointer;flex:none}
.rs-g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:16px}
.rs-g2>.rs-card+.rs-card{margin-top:0}
.rs-cw{position:relative}
.rs-cw svg{display:block;width:100%;height:auto;overflow:visible}
.rs-cw text{fill:var(--muted);font-size:11.5px;font-family:var(--f-body)}
.rs-cw .grid{stroke:var(--line);stroke-width:1}
.rs-cw .ref{stroke-dasharray:5 5;stroke-width:1.2}
.rs-tip{position:absolute;pointer-events:none;z-index:5;background:var(--card-dark,var(--navy));color:#fff;border-radius:10px;padding:8px 10px;font-size:12px;line-height:1.5;box-shadow:var(--shadow-lg);white-space:nowrap;display:none;font-variant-numeric:tabular-nums}
.rs-tip b{display:block;font-size:11.5px;opacity:.75;font-weight:600}
.rs-tip .r{display:flex;gap:8px;align-items:center;justify-content:space-between}
.rs-tip .r span{display:flex;gap:6px;align-items:center}
.rs-hl{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 3;display:none}
.rs-lg{display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px;color:var(--ink-2);margin-top:10px}
.rs-lg span{display:inline-flex;align-items:center;gap:6px}
.rs-lg i{display:inline-block;width:14px;height:3px;border-radius:2px}
.rs-seg{display:inline-flex;background:var(--surface-3);border-radius:10px;padding:3px;gap:2px}
.rs-seg button{border:0;background:transparent;color:var(--muted);font:inherit;font-size:12.5px;font-weight:700;padding:6px 11px;border-radius:8px;cursor:pointer}
.rs-seg button.on{background:var(--surface);color:var(--ink);box-shadow:0 1px 3px rgba(15,23,42,.12)}
.rs-ctl{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.rs-kv{width:100%;border-collapse:collapse;font-size:13.5px;font-variant-numeric:tabular-nums}
.rs-kv th,.rs-kv td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
.rs-kv thead th{font-size:13px;color:var(--ink);font-weight:800;border-bottom:2px solid var(--line);min-width:150px}
.rs-kv tbody th{color:var(--muted);font-weight:700;font-size:12.5px;white-space:nowrap;width:150px}
.rs-kv td.best{font-weight:800;color:var(--good,#059669)}
.rs-kv td.best::after{content:" ▲";font-size:10px}
.rs-sbar{display:flex;height:12px;border-radius:999px;overflow:hidden;background:var(--surface-3)}
.rs-sbar i{display:block;height:100%}
.rs-srow{display:grid;grid-template-columns:minmax(120px,220px) 1fr;gap:12px;align-items:center;padding:8px 0;font-size:13px}
.rs-srow .n{display:flex;gap:8px;align-items:center;font-weight:700;min-width:0}
.rs-srow .n span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rs-mx{border-collapse:separate;border-spacing:4px;font-size:13px;font-variant-numeric:tabular-nums}
.rs-mx th{font-size:12px;color:var(--muted);font-weight:700;padding:4px 6px;text-align:center}
.rs-mx th.rh{text-align:left}
.rs-mx td{width:64px;height:44px;text-align:center;border-radius:10px;font-weight:800;cursor:pointer;color:var(--ink)}
.rs-mx td.self{background:var(--surface-3);color:var(--muted);cursor:default;font-weight:600}
.rs-mx td.sel{outline:2.5px solid var(--ink);outline-offset:-2px}
.rs-common{display:grid;grid-template-columns:1fr auto auto;gap:4px 16px;font-size:13.5px;margin-top:8px;font-variant-numeric:tabular-nums}
.rs-common .h{font-size:12px;font-weight:800;color:var(--muted);padding-bottom:4px;border-bottom:1px solid var(--line)}
.rs-sig{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:16px;align-items:stretch}
.rs-zone{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:800;letter-spacing:.06em;padding:4px 10px;border-radius:999px;color:#fff}
.rs-big{font-size:30px;font-weight:800;color:var(--ink);font-variant-numeric:tabular-nums;line-height:1.1}
.rs-big small{font-size:14px;margin-left:6px}
.rs-gauge{position:relative;height:12px;border-radius:999px;margin:22px 0 8px;background:linear-gradient(90deg,#16a34a 0 26%,#84cc16 26% 54%,#f59e0b 54% 76%,#dc2626 76% 100%)}
.rs-gauge .m{position:absolute;top:-7px;width:4px;height:26px;border-radius:3px;background:var(--ink);transform:translateX(-2px);box-shadow:0 0 0 2px var(--surface)}
.rs-gl{display:flex;justify-content:space-between;font-size:11.5px;color:var(--muted);font-weight:700}
.rs-mini{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:16px}
.rs-mini .rs-card{padding:16px;margin:0}
.rs-mini b{display:block;font-size:22px;font-variant-numeric:tabular-nums;margin:4px 0 2px;color:var(--ink)}
.rs-mini small{display:block;color:var(--muted);font-size:12.5px;line-height:1.4}
.rs-mini .k{font-size:12px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--muted)}
.rs-hm{width:100%;border-collapse:separate;border-spacing:3px;font-size:12px;font-variant-numeric:tabular-nums}
.rs-hm th{font-weight:700;color:var(--muted);padding:4px;font-size:11.5px}
.rs-hm td{text-align:center;padding:8px 2px;border-radius:7px;font-weight:700;color:var(--ink)}
.rs-hm td.na{background:transparent;color:var(--line)}
.rs-pf{display:grid;grid-template-columns:minmax(0,380px) minmax(0,1fr);gap:16px;align-items:start}
.rs-hold{display:grid;grid-template-columns:minmax(0,1fr) 128px 30px;gap:8px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}
.rs-hold .n{font-size:13.5px;font-weight:700;line-height:1.3;min-width:0}
.rs-hold .n small{display:block;color:var(--muted);font-weight:600;font-size:12px}
.rs-hold input{width:100%;border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:10px;padding:8px 10px;font:inherit;font-size:13.5px;text-align:right;font-variant-numeric:tabular-nums}
.rs-hold .x{border:0;background:var(--surface-3);color:var(--ink-2);border-radius:50%;width:28px;height:28px;cursor:pointer}
.rs-tot{display:flex;justify-content:space-between;font-weight:800;padding-top:12px;font-variant-numeric:tabular-nums}
.rs-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.rs-kpi{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px}
.rs-kpi .k{font-size:12px;font-weight:700;color:var(--muted)}
.rs-kpi b{display:block;font-size:21px;margin-top:4px;font-variant-numeric:tabular-nums;color:var(--ink)}
.rs-kpi small{font-size:12px;color:var(--muted)}
.rs-score{display:grid;grid-template-columns:150px 1fr;gap:20px;align-items:center}
.rs-ring{position:relative;width:150px;height:150px}
.rs-ring svg{width:150px;height:150px;transform:rotate(-90deg)}
.rs-ring .v{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rs-ring .v b{font-size:38px;line-height:1;color:var(--ink)}
.rs-ring .v small{font-size:12px;color:var(--muted);font-weight:700;margin-top:4px}
.rs-sub{display:grid;gap:10px}
.rs-sub .r{display:grid;grid-template-columns:120px 1fr 34px;gap:10px;align-items:center;font-size:13px;font-weight:700}
.rs-sub .r .t{height:8px;border-radius:999px;background:var(--surface-3);overflow:hidden}
.rs-sub .r .t i{display:block;height:100%;border-radius:999px}
.rs-sub .r em{font-style:normal;text-align:right;font-variant-numeric:tabular-nums}
.rs-donut{display:grid;grid-template-columns:150px 1fr;gap:18px;align-items:center}
.rs-donut svg{width:150px;height:150px;transform:rotate(-90deg)}
.rs-leg{display:grid;gap:8px;font-size:13.5px}
.rs-leg .r{display:grid;grid-template-columns:12px 1fr auto;gap:8px;align-items:center;font-variant-numeric:tabular-nums}
.rs-leg .r small{color:var(--muted);margin-left:6px}
.rs-hb{display:grid;grid-template-columns:minmax(0,170px) 1fr 74px;gap:10px;align-items:center;font-size:13px;padding:5px 0}
.rs-hb .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}
.rs-hb .t{height:9px;border-radius:999px;background:var(--surface-3);overflow:hidden}
.rs-hb .t i{display:block;height:100%;border-radius:999px;background:var(--accent)}
.rs-hb em{font-style:normal;text-align:right;font-variant-numeric:tabular-nums;color:var(--ink-2)}
.rs-ins{display:grid;gap:10px;margin:0;padding:0;list-style:none}
.rs-ins li{display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start;padding:12px;border-radius:12px;font-size:13.5px;line-height:1.45}
.rs-ins li .ic{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800}
.rs-ins li b{display:block;color:var(--ink)}
.rs-ins .good{background:color-mix(in srgb,var(--good,#059669) 9%,var(--surface))}.rs-ins .good .ic{background:var(--good,#059669);color:#fff}
.rs-ins .warn{background:color-mix(in srgb,#f59e0b 11%,var(--surface))}.rs-ins .warn .ic{background:#f59e0b;color:#fff}
.rs-ins .info{background:color-mix(in srgb,var(--primary,#2563eb) 9%,var(--surface))}.rs-ins .info .ic{background:var(--primary,#2563eb);color:#fff}
.rs-cta{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;padding:18px 20px;border-radius:16px;margin-top:16px;background:color-mix(in srgb,var(--accent) 9%,var(--surface));border:1px solid color-mix(in srgb,var(--accent) 25%,transparent)}
.rs-note{font-size:12.5px;color:var(--muted);margin-top:22px;line-height:1.55}
.rs-hgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.rs-hc{display:flex;flex-direction:column;gap:8px;text-align:left;font:inherit;color:var(--ink);cursor:pointer;background:var(--surface);border:1px solid var(--line);border-top:3px solid var(--tc);border-radius:16px;padding:18px;box-shadow:var(--shadow);transition:transform .15s}
.rs-hc:hover{transform:translateY(-2px)}
.rs-hc .i{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--tc);background:color-mix(in srgb,var(--tc) 12%,var(--surface))}
.rs-hc b{font-size:16px}
.rs-hc small{color:var(--muted);font-size:13px;line-height:1.45}
.rs-hc .go{margin-top:auto;font-weight:800;font-size:13.5px;color:var(--tc)}
.rs-hc.t1{--tc:#2563eb}.rs-hc.t2{--tc:#e8590c}.rs-hc.t3{--tc:#7c3aed}.rs-hc.t4{--tc:#16a34a}
.rs-drop{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;padding:26px 18px;border:2px dashed color-mix(in srgb,var(--accent) 45%,var(--line));border-radius:16px;background:color-mix(in srgb,var(--accent) 5%,var(--surface));cursor:pointer;transition:background .15s}
.rs-drop:hover,.rs-drop.drag{background:color-mix(in srgb,var(--accent) 11%,var(--surface))}
.rs-drop.has{border-style:solid}
.rs-drop .i{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,var(--surface))}
.rs-drop b{font-size:15.5px;color:var(--ink);word-break:break-all}
.rs-drop small{font-size:13px;color:var(--muted);max-width:460px;line-height:1.45}
.rs-upf{display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:14px}
.rs-upf .rs-fl{flex:1 1 260px}
.rs-fl{display:grid;gap:6px;font-size:13px;font-weight:700;color:var(--ink-2)}
.rs-fl .inp{font-weight:500;color:var(--ink)}
.rs-err{margin:12px 0 0;padding:10px 12px;border-radius:10px;font-size:13.5px;background:var(--red-bg,#fef2f2);color:var(--red,#dc2626);font-weight:600}
.rs-help{font-size:13px;color:var(--muted);margin:12px 0 0;line-height:1.5}
.rs-help a{color:var(--primary,var(--accent));font-weight:700}
.rs-link{border:0;background:none;padding:0;font:inherit;font-weight:700;color:var(--primary,var(--accent));cursor:pointer;text-decoration:underline;text-underline-offset:2px}
.rs-confirm h4{margin:16px 0 12px;font-size:16px}
.rs-okb{padding:12px 14px;border-radius:12px;font-size:14px;background:color-mix(in srgb,var(--good,#059669) 10%,var(--surface));color:var(--ink-2);border:1px solid color-mix(in srgb,var(--good,#059669) 30%,transparent)}
.rs-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.rs-chk{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;line-height:1.45;margin-top:14px;color:var(--ink-2)}
.rs-chk,.rs-chk span,.rs-det summary,.rs-drop small{text-transform:none!important}
.rs-chk input{margin-top:3px;width:16px;height:16px;flex:none;accent-color:var(--accent)}
.rs-det{margin-top:16px;border-top:1px solid var(--line);padding-top:12px}
.rs-det summary{cursor:pointer;font-weight:700;font-size:13.5px;color:var(--ink-2)}
.rs-tag{display:inline-block;font-size:11.5px;font-weight:800;padding:2px 8px;border-radius:999px;background:var(--surface-3);color:var(--ink-2);white-space:nowrap}
.rs-tag.in{background:color-mix(in srgb,var(--good,#059669) 14%,var(--surface));color:var(--good,#059669)}
.rs-arnb{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:800;padding:6px 12px;border-radius:999px;background:color-mix(in srgb,var(--good,#059669) 12%,var(--surface));color:var(--good,#059669)}
.rs-steps{display:flex;gap:8px;margin:0 0 18px;flex-wrap:wrap}
.rs-steps span{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--muted);padding:5px 12px 5px 5px;border-radius:999px;background:var(--surface-3)}
.rs-steps span i{font-style:normal;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--surface);font-size:12px}
.rs-steps span.on{background:color-mix(in srgb,var(--accent) 14%,var(--surface));color:var(--ink)}
.rs-steps span.on i{background:var(--accent);color:#fff}
.rs-steps span.done i{background:var(--good,#059669);color:#fff}
.rs-gate h4{margin:0 0 4px;font-size:16px}
.rs-lead{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:var(--surface-2,var(--surface));border:1px solid var(--line);margin-bottom:14px}
.rs-lead b{display:block;font-size:14.5px}
.rs-lead small{color:var(--muted);font-size:12.5px}
.rs-files{display:grid;gap:8px;margin-top:12px}
.rs-file{display:grid;grid-template-columns:minmax(0,1fr) 260px 30px;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--surface)}
.rs-file .n{display:flex;gap:8px;align-items:center;font-size:13.5px;font-weight:700;min-width:0}
.rs-file .n span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rs-file .x{border:0;background:var(--surface-3);color:var(--ink-2);border-radius:50%;width:28px;height:28px;cursor:pointer}
.rs-file.bad{border-color:var(--red,#dc2626)}
.rs-file.ok{border-color:var(--good,#059669)}
.rs-file .e{grid-column:1/-1;margin:0;font-size:12.5px;color:var(--red,#dc2626);font-weight:600}
.rs-alt{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;padding:10px 14px;border-radius:12px;background:var(--surface-2,var(--surface));border:1px solid var(--line);font-size:13.5px;color:var(--ink-2)}
.rs-cash{margin-top:12px;padding:16px;border-radius:16px;background:color-mix(in srgb,var(--primary,var(--accent)) 5%,var(--surface));border:1px solid color-mix(in srgb,var(--primary,var(--accent)) 20%,var(--line))}
.rs-cashg{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:12px}
.rs-cashc{display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:14px;background:var(--surface);border:1px solid var(--line)}
.rs-cashc.rec{border:1.5px solid var(--accent)}
.rs-cashc .tag{align-self:flex-start;font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:3px 9px;border-radius:999px;background:var(--accent);color:#fff}
.rs-cashc h4{margin:0;font-size:15px}
.rs-cashc p{margin:0;font-size:13.5px;color:var(--muted);line-height:1.45}
.rs-cashc ol{margin:0;padding-left:18px;font-size:13.5px;line-height:1.5;color:var(--ink-2);display:grid;gap:4px}
.rs-cashc .acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:6px}
.rs-cashm{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px;font-size:13.5px;color:var(--ink-2)}
.rs-cashm .ok{color:var(--good,#059669);font-weight:700}
.rs-who{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.rs-who b{display:block;font-size:17px}
.rs-who small{color:var(--muted);font-size:12.5px}
.rs-rb{display:grid;grid-template-columns:64px 1fr;gap:8px 12px;align-items:center;font-size:12.5px;font-weight:700;color:var(--muted);margin:6px 0 10px}
.rs-acts{margin:14px 0 0;padding-left:20px;display:grid;gap:8px;font-size:13.5px;line-height:1.5;color:var(--ink-2)}
.rs-pw{display:inline-flex;align-items:center;gap:7px;padding:5px 10px;border-radius:999px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none;font-size:11.5px;font-weight:700;white-space:nowrap;flex:none}
.rs-pw span{color:var(--muted);letter-spacing:.02em}
.rs-pw .wl{height:15px;width:auto;display:block}
.rs-pw:hover{border-color:#00bab2}
.rs-pw.lg{padding:6px 12px}
.rs-pw.lg .wl{height:18px}
.rs-by{display:inline-flex;align-items:center;gap:8px;margin-top:6px;text-decoration:none;color:var(--ink)}
.rs-by span{font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.rs-by .wl{height:22px;width:auto;display:block}
.rs-by:hover span{color:#00bab2}
.rs-hr{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.rs-mpw{display:flex;justify-content:flex-end;border-top:1px solid var(--line);margin-top:6px;padding:8px 4px 2px}
.rs-tabs.two{grid-template-columns:2fr 1fr}
.rs-livepg{padding-bottom:12px!important}
.rs-livedot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#16a34a;margin-right:6px;box-shadow:0 0 0 3px rgba(22,163,74,.18)}
.r360-host{padding:0 0 36px}
.r360-bar{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 10px;font-size:13.5px;color:var(--muted)}
.r360-bar b{color:var(--ink-2)}
.r360-frame{position:relative;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:var(--surface);box-shadow:var(--shadow)}
.r360-frame iframe{display:block;width:100%;height:calc(100vh - 240px);min-height:640px;border:0}
.r360-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:var(--surface);color:var(--muted);font-size:14px;font-weight:600;text-align:center;padding:20px}
.r360-state[hidden]{display:none}
.r360-spin{width:28px;height:28px;border-radius:50%;border:3px solid var(--line);border-top-color:var(--accent);animation:r360spin .8s linear infinite}
@keyframes r360spin{to{transform:rotate(360deg)}}
#rs-menu{position:fixed;z-index:60;background:var(--surface);color:var(--ink);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow-lg);padding:8px;width:330px;display:none}
#rs-menu.open{display:block}
#rs-menu button{display:grid;grid-template-columns:38px 1fr;gap:12px;align-items:center;width:100%;text-align:left;border:0;background:transparent;color:inherit;font:inherit;padding:10px;border-radius:12px;cursor:pointer}
#rs-menu button:hover,#rs-menu button.on{background:var(--surface-3)}
#rs-menu .i{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--tc);background:color-mix(in srgb,var(--tc) 12%,var(--surface))}
#rs-menu b{display:block;font-size:14.5px}
#rs-menu small{display:block;font-size:12.5px;color:var(--muted);line-height:1.35}
#rs-menu .t1{--tc:#2563eb}#rs-menu .t2{--tc:#e8590c}#rs-menu .t3{--tc:#7c3aed}#rs-menu .t4{--tc:#16a34a}
#navlinks a[data-r="research"] .cv{width:14px;height:14px;opacity:.7;margin-left:-2px}
@media (max-width:980px){.rs-cashg{grid-template-columns:1fr}.rs-tabs,.rs-hgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.rs-mini,.rs-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.rs-sig{grid-template-columns:1fr 1fr}.rs-sig>:first-child{grid-column:1/-1}.rs-pf{grid-template-columns:1fr}}
@media (max-width:700px){.rs-form{grid-template-columns:1fr}.rs-file{grid-template-columns:minmax(0,1fr) 30px}.rs-file .inp{grid-column:1/-1;grid-row:2}.rs-g2{grid-template-columns:1fr}.rs-score,.rs-donut{grid-template-columns:1fr;justify-items:center}.rs-sub,.rs-leg{width:100%}.rs-srow{grid-template-columns:1fr}.rs-hb{grid-template-columns:minmax(0,120px) 1fr 64px}.rs-bar select.inp{flex:1 1 0;min-width:0}.rs-tb small{display:none}.rs-cols{width:min(300px,86vw)}}
@media (max-width:520px){.rs-sig{grid-template-columns:1fr}.rs-hgrid{grid-template-columns:1fr}.rs-tb{padding:12px}.rs-tb .i{width:36px;height:36px}}
`,document.head.appendChild(e)})();

const RS_ROUTES=["research","mf-screener","market-signals","mf-compare","portfolio-iq"];
const RS_TABS=[
  {r:"mf-screener",cls:"t1",en:"MF Screener",ta:"MF ஸ்கிரீனர்",d:"Filter funds by returns, risk and cost",ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 8v6l-4 2v-8z"/></svg>'},
  {r:"market-signals",cls:"t2",en:"Market Signals",ta:"சந்தை சமிக்ஞைகள்",d:"Nifty valuation, trend and heatmaps",ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-9"/><path d="M14 7h6v6"/></svg>'},
  {r:"mf-compare",cls:"t3",en:"MF Compare",ta:"MF ஒப்பீடு",d:"Up to 5 funds side by side with overlap",ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="7" height="16" rx="2"/><rect x="14" y="4" width="7" height="16" rx="2"/></svg>'},
  {r:"portfolio-iq",cls:"t4",en:"Portfolio IQ",ta:"போர்ட்ஃபோலியோ IQ",d:"Health check of your fund holdings",ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/></svg>'}
];
// Wylth logo (wylth.com/images/logo.svg); the wordmark uses currentColor so it follows the theme.
const RS_WYLTH=`<svg class="wl" role="img" aria-label="Wylth" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 150.739 39.997"><g><path d="M233.708,34.037a1,1,0,0,1-.089.321.2.2,0,0,1-.179.1.186.186,0,0,1-.177-.1,1.354,1.354,0,0,1-.089-.321l-3.771-15.9a5.211,5.211,0,0,0-1.423-2.847,3.556,3.556,0,0,0-2.455-.889,3.488,3.488,0,0,0-2.437.889,5.47,5.47,0,0,0-1.44,2.882l-3.631,15.9c-.036.156-.135.426-.34.4-.172-.021-.236-.259-.265-.4l-4.257-21.1h-4.614l4.851,22.487a4.785,4.785,0,0,0,1.494,2.686,3.979,3.979,0,0,0,2.668.942,3.885,3.885,0,0,0,2.543-.924,4.583,4.583,0,0,0,1.513-2.526l3.772-16.509a.443.443,0,0,1,.071-.177.1.1,0,0,1,.071-.036.091.091,0,0,1,.085.071,1.215,1.215,0,0,1,.042.146c1.252,5.451,2.572,10.886,3.859,16.329a4.872,4.872,0,0,0,1.529,2.668,3.971,3.971,0,0,0,2.634.924,3.745,3.745,0,0,0,2.651-.978,5.2,5.2,0,0,0,1.44-2.757l4.584-22.345h-4.576Z" transform="translate(-164.589 -10.24)" fill="currentColor"/><rect width="4.447" height="26.06" transform="translate(101.245 2.734)" fill="currentColor"/><path d="M520.034,12.888h-4.447v7.864h-3.308v3.772h3.308V31.8a8.22,8.22,0,0,0,.818,3.735,5.858,5.858,0,0,0,2.438,2.544,8.09,8.09,0,0,0,4,.907,7.969,7.969,0,0,0,1.921-.248,5.729,5.729,0,0,0,1.671-.676v-4.02a4.577,4.577,0,0,1-1.511.693,6.566,6.566,0,0,1-1.691.231,3.187,3.187,0,0,1-2.33-.853,3.281,3.281,0,0,1-.872-2.455V24.523h6.4V20.752h-6.4Z" transform="translate(-404.309 -10.172)" fill="currentColor"/><path d="M613.62,24.966a6.912,6.912,0,0,0-2.722-3.059,8.488,8.488,0,0,0-4.465-1.086,8.288,8.288,0,0,0-3.577.764,7.58,7.58,0,0,0-1.723,1.147V12.975h-4.447v26.06h4.447V30.214a5.982,5.982,0,0,1,.585-2.7,4.592,4.592,0,0,1,1.638-1.85,4.333,4.333,0,0,1,2.4-.676,3.9,3.9,0,0,1,2.4.73,4.417,4.417,0,0,1,1.459,1.885,6.586,6.586,0,0,1,.479,2.545v8.912h4.447V29.679a11.056,11.056,0,0,0-.924-4.713" transform="translate(-470.925 -10.24)" fill="currentColor"/><path d="M392.811,59.052v2.56a5.657,5.657,0,0,1-.552,2.526,4.613,4.613,0,0,1-1.548,1.8,4.2,4.2,0,0,1-2.313.658,3.876,3.876,0,0,1-3.167-1.334,5.3,5.3,0,0,1-1.1-3.469V50.2h-4.376v8.619a14,14,0,0,0,.462,3.914,8.271,8.271,0,0,0,2.277,3.825,7.55,7.55,0,0,0,7.863,1.263,6.7,6.7,0,0,0,2.49-2.064l.036,5.6a9.426,9.426,0,0,1-.587,3.9,4.684,4.684,0,0,1-1.726,2.1c-3.149,2.05-7.272-.2-9.268-2.834a6.091,6.091,0,0,1-.374-.528c-.374.338-.747.694-1.121,1.05a8.9,8.9,0,0,0,2.081,2.437,9.6,9.6,0,0,0,9.642,1.423,8.965,8.965,0,0,0,3.736-2.989c1.6-2.259,1.868-5.195,2.01-7.881q.053-1.334.053-2.669V50.2h-4.518Z" transform="translate(-299.715 -39.619)" fill="currentColor"/><path d="M30.46,0a11.075,11.075,0,0,0-9.573,5.535L19.021,8.777,17.155,5.535A11.071,11.071,0,0,0,7.583,0H0L9.639,16.745a11.01,11.01,0,0,0,2.905,3.287L4.292,34.371h7.584a11.071,11.071,0,0,0,9.571-5.535l1.391-2.413A11.049,11.049,0,0,0,24.3,20.934,10.387,10.387,0,0,0,28.22,17.07L38.044,0ZM12,15.382,4.724,2.732H7.584a8.332,8.332,0,0,1,7.2,4.166l2.657,4.618-3.519,6.116A8.262,8.262,0,0,1,12,15.382M20.47,25.06l-1.391,2.413a8.33,8.33,0,0,1-7.2,4.166H9.016L14.909,21.4a11.009,11.009,0,0,0,4.3.88A10.3,10.3,0,0,0,21.5,22,8.3,8.3,0,0,1,20.47,25.06M19.02,19.473a8.53,8.53,0,0,1-2.743-.453l2.742-4.763h0v0l2.741,4.765a8.529,8.529,0,0,1-2.742.453m6.831-3.766a7.634,7.634,0,0,1-1.961,2.24A10.981,10.981,0,0,0,22.836,15.4L21.449,13h0l-.852-1.48L23.256,6.9a8.332,8.332,0,0,1,7.2-4.166H33.32L25.851,15.707" fill="#00bab2"/><path d="M694.641,23.4a.552.552,0,0,0-.12-.08,1.184,1.184,0,0,0,.35-.18.9.9,0,0,0,.349-.758.97.97,0,0,0-.372-.81,1.526,1.526,0,0,0-.966-.29h-1.249v3.553h.654V23.6h.282a.8.8,0,0,1,.49.126,1.311,1.311,0,0,1,.327.468l.267.639h.773l-.372-.818a2.006,2.006,0,0,0-.416-.617m-.3-.528a.967.967,0,0,1-.542.134h-.505v-1.07h.595q.654,0,.654.535a.45.45,0,0,1-.2.4" transform="translate(-546.651 -16.796)" fill="currentColor"/><path d="M688.065,14.664a3.616,3.616,0,0,0-1.286-1.293,3.576,3.576,0,0,0-3.59,0,3.693,3.693,0,0,0-1.286,1.293,3.457,3.457,0,0,0-.483,1.806,3.5,3.5,0,0,0,.483,1.813,3.671,3.671,0,0,0,1.286,1.3,3.576,3.576,0,0,0,3.59,0,3.6,3.6,0,0,0,1.286-1.3,3.541,3.541,0,0,0,.476-1.813,3.5,3.5,0,0,0-.476-1.806m-.654,3.255a2.848,2.848,0,0,1-1.011,1.033,2.8,2.8,0,0,1-2.839,0,2.842,2.842,0,0,1-1.383-2.482,2.785,2.785,0,0,1,.379-1.434A2.907,2.907,0,0,1,683.576,14a2.774,2.774,0,0,1,2.824,0,2.931,2.931,0,0,1,1.011,3.917" transform="translate(-537.802 -10.172)" fill="currentColor"/></g></svg>`;
const rsPowered=(x="")=>`<a class="rs-pw ${x}" href="https://www.wylth.com/" target="_blank" rel="noopener" data-notr aria-label="Powered by Wylth (opens wylth.com)"><span>Powered by</span>${RS_WYLTH}</a>`;
// The byline under each "Research 360" title: "Powered by" and the Wylth logo, linking to wylth.com.
const rsByline=()=>`<a class="rs-by" href="https://www.wylth.com/" target="_blank" rel="noopener" data-notr aria-label="Powered by Wylth (opens wylth.com)"><span>Powered by</span>${RS_WYLTH}</a>`;
const RS_COL=["#2563eb","#16a34a","#f59e0b","#db2777","#0891b2"];
const RS_COLS=[
  {k:"cat",l:"Category",d:1},{k:"star",l:"Rating",d:1},{k:"nav",l:"NAV",d:1},{k:"aum",l:"AUM (Cr)",d:1},
  {k:"r0",l:"1M",d:1},{k:"r1",l:"3M",d:1},{k:"r2",l:"6M",d:1},{k:"r3",l:"1Y",d:1},{k:"r4",l:"3Y",d:1},{k:"r5",l:"5Y",d:1},
  {k:"er",l:"Expense",d:0},{k:"sd",l:"Std dev",d:0},{k:"sh",l:"Sharpe",d:0},{k:"beta",l:"Beta",d:0}
];
const RS_PRESETS=[
  {k:"top",l:"Top rated",f:x=>x.star>=4},
  {k:"cons",l:"Consistent compounders",f:x=>x.r[4]>=14&&x.r[5]>=14},
  {k:"cost",l:"Low cost",f:x=>x.er<=0.6},
  {k:"steady",l:"Steady hybrids",f:x=>x.cls==="Hybrid"&&x.sd<10},
  {k:"park",l:"Safe parking",f:x=>x.cls==="Debt"&&x.sd<1.5}
];
const RS_QUICK=[
  {l:"Flexi cap leaders",ids:["ppfas","hdfcfx","kotakfx"]},
  {l:"Small cap showdown",ids:["nipsc","axissc","sbisc","quantsc"]},
  {l:"Index vs active large cap",ids:["utin50","icicibc","nipl"]},
  {l:"Gold: fund vs ETF",ids:["sbigold","nipgold"]}
];

function rsLoad(k,d){try{const v=JSON.parse(localStorage.getItem("mt_rs_"+k));return v==null?d:v}catch{return d}}
function rsSave(k,v){try{localStorage.setItem("mt_rs_"+k,JSON.stringify(v))}catch{}}

const RS={
  q:"",cls:"",cat:"",amc:"",star:0,pre:"",sort:{k:"aum",dir:-1},page:1,per:10,colsOpen:!1,
  cols:rsLoad("cols",RS_COLS.filter(c=>c.d).map(c=>c.k)),
  cmp:rsLoad("cmp",[]),cmpQ:"",pair:null,
  sig:{nifty:{rng:"1Y",view:"graph"},pe:{rng:"3Y",view:"graph"}},
  pf:rsLoad("pf",[]),
  // Portfolio IQ: details gate, then up to three CAS files ({file,pwd,ok,err}), then the analysis
  piq:{files:[],busy:!1,err:"",gate:null,gateErr:"",editGate:!1,addMore:!1,scope:"both",prof:"moderate"},
  lead:rsLoad("lead",null),stmt:rsLoad("stmt",null),
  live:"unknown"
};
const RS_CH={};

const rsF=id=>RS_FUNDS.find(f=>f.id===id);
const rsTa=()=>typeof S<"u"&&S.lang==="ta";
const rsE=s=>typeof esc=="function"?esc(s):String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const rsNum=(v,d=2)=>v==null||isNaN(v)?"—":Number(v).toLocaleString("en-IN",{minimumFractionDigits:d,maximumFractionDigits:d});
const rsPct=(v,d=2)=>v==null?"—":`<span class="${v>0?"up":v<0?"dn":""}">${v>0?"+":""}${v.toFixed(d)}%</span>`;
const rsInr=v=>"₹"+Math.round(v).toLocaleString("en-IN");
const rsInrS=v=>v>=1e7?"₹"+(v/1e7).toFixed(2)+" Cr":v>=1e5?"₹"+(v/1e5).toFixed(2)+" L":rsInr(v);
const rsStars=n=>n?`<span class="rs-st" aria-label="${n} star">${"★".repeat(n)}<i>${"★".repeat(5-n)}</i></span>`:'<span class="muted">—</span>';
const rsRisk=f=>f.sd<1?"Low to Moderate":f.sd<3?"Moderate":f.sd<9?"High":"Very High";
const RS_I={
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  plus:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  check:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  cols:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/></svg>',
  dl:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  chev:'<svg class="cv" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg>'
};

/* ---------- charts ---------- */

// Line chart with hover. series: [{name,color,vals:[]}], labels: x-axis labels per index.
function rsLine(id,series,labels,o={}){
  const W=o.w||720,H=o.h||260,P={l:56,r:o.refs?64:16,t:14,b:30},n=labels.length;
  const all=series.flatMap(s=>s.vals).concat((o.refs||[]).map(r=>r.v));
  let lo=Math.min(...all),hi=Math.max(...all);const pad=(hi-lo)*.08||1;lo-=pad;hi+=pad;
  const X=i=>P.l+(W-P.l-P.r)*(n<2?0:i/(n-1)),Y=v=>P.t+(H-P.t-P.b)*(1-(v-lo)/(hi-lo));
  const fmt=o.fmt||(v=>rsNum(v,0));
  let g="";
  for(let k=0;k<=4;k++){const v=lo+(hi-lo)*k/4,y=Y(v);g+=`<line class="grid" x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}"/><text x="${P.l-8}" y="${y+4}" text-anchor="end">${fmt(v)}</text>`}
  const ticks=Math.min(6,n);for(let k=0;k<ticks;k++){const i=Math.round((n-1)*k/Math.max(1,ticks-1));g+=`<text x="${X(i)}" y="${H-8}" text-anchor="${k===0?"start":k===ticks-1?"end":"middle"}">${labels[i]}</text>`}
  (o.refs||[]).forEach(r=>{const y=Y(r.v);g+=`<line class="ref" x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}" stroke="${r.c}"/><text x="${W-P.r+6}" y="${y+4}" style="fill:${r.c};font-weight:700">${r.l}</text>`});
  const gid="g"+id;
  const paths=series.map((s,si)=>{const d=s.vals.map((v,i)=>(i?"L":"M")+X(i).toFixed(1)+" "+Y(v).toFixed(1)).join("");
    const area=o.area&&si===0?`<path d="${d}L${X(n-1)} ${H-P.b}L${X(0)} ${H-P.b}Z" fill="url(#${gid})"/>`:"";
    return area+`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="${o.area?2.2:2.4}" stroke-linejoin="round"/>`}).join("");
  RS_CH[id]={W,n,X,Y,series,labels,fmt:o.tfmt||fmt};
  const defs=o.area?`<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${series[0].color}" stop-opacity=".28"/><stop offset="1" stop-color="${series[0].color}" stop-opacity="0"/></linearGradient></defs>`:"";
  return`<div class="rs-cw" data-ch="${id}" data-notr><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${rsE(o.label||"Chart")}">${defs}${g}${paths}<line class="rs-hl" x1="0" x2="0" y1="${P.t}" y2="${H-P.b}"/>${series.map((s,si)=>`<circle class="rs-hd" data-s="${si}" r="4.5" fill="${s.color}" stroke="var(--surface)" stroke-width="2" style="display:none"/>`).join("")}</svg><div class="rs-tip"></div></div>`
}

function rsHover(ev){
  const w=ev.target.closest&&ev.target.closest(".rs-cw");if(!w)return;
  const c=RS_CH[w.dataset.ch];if(!c)return;
  const svg=w.querySelector("svg"),r=svg.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width*c.W;
  let best=0,bd=1e9;for(let i=0;i<c.n;i++){const d=Math.abs(c.X(i)-x);d<bd&&(bd=d,best=i)}
  const hl=svg.querySelector(".rs-hl"),px=c.X(best);hl.setAttribute("x1",px);hl.setAttribute("x2",px);hl.style.display="block";
  svg.querySelectorAll(".rs-hd").forEach(dot=>{const s=c.series[+dot.dataset.s];dot.setAttribute("cx",px);dot.setAttribute("cy",c.Y(s.vals[best]));dot.style.display="block"});
  const tip=w.querySelector(".rs-tip");
  tip.innerHTML=`<b>${c.labels[best]}</b>`+c.series.map(s=>`<div class="r"><span><i class="rs-dot" style="background:${s.color}"></i>${rsE(s.name.length>26?s.name.slice(0,25)+"…":s.name)}</span><strong>${c.fmt(s.vals[best])}</strong></div>`).join("");
  tip.style.display="block";
  const scale=r.width/c.W,left=px*scale,tw=tip.offsetWidth;
  tip.style.left=Math.max(0,Math.min(r.width-tw,left+(left>r.width/2?-tw-12:12)))+"px";tip.style.top="8px"
}
function rsHoverOut(ev){const w=ev.target.closest&&ev.target.closest(".rs-cw");if(!w||w.contains(ev.relatedTarget))return;
  w.querySelector(".rs-tip").style.display="none";w.querySelectorAll(".rs-hl,.rs-hd").forEach(n=>n.style.display="none")}

// Grouped vertical bars: groups = period labels, series = funds.
function rsBars(groups,series){
  const W=720,H=250,P={l:44,r:10,t:16,b:30};
  const all=series.flatMap(s=>s.vals.filter(v=>v!=null)).concat(0);
  let lo=Math.min(...all),hi=Math.max(...all);const pad=(hi-lo)*.1||1;lo=Math.min(0,lo-pad);hi+=pad;
  const Y=v=>P.t+(H-P.t-P.b)*(1-(v-lo)/(hi-lo)),gw=(W-P.l-P.r)/groups.length,bw=Math.min(22,(gw-14)/series.length);
  let s="";
  for(let k=0;k<=4;k++){const v=lo+(hi-lo)*k/4,y=Y(v);s+=`<line class="grid" x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}"/><text x="${P.l-8}" y="${y+4}" text-anchor="end">${Math.round(v)||0}%</text>`}
  s+=`<line x1="${P.l}" x2="${W-P.r}" y1="${Y(0)}" y2="${Y(0)}" stroke="var(--ink-2)" stroke-width="1"/>`;
  groups.forEach((g,gi)=>{const x0=P.l+gw*gi+(gw-bw*series.length)/2;
    series.forEach((sr,si)=>{const v=sr.vals[gi];if(v==null)return;const y=Y(Math.max(0,v)),h=Math.abs(Y(v)-Y(0));
      s+=`<rect x="${x0+si*bw}" y="${y}" width="${bw-3}" height="${Math.max(1,h)}" rx="3" fill="${sr.color}"><title>${rsE(sr.name)} · ${g}: ${v.toFixed(2)}%</title></rect>`});
    s+=`<text x="${P.l+gw*gi+gw/2}" y="${H-8}" text-anchor="middle" style="font-weight:700">${g}</text>`});
  return`<div class="rs-cw" data-notr><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Returns by period">${s}</svg></div>`
}

// Risk vs return scatter.
function rsScatter(funds){
  const W=720,H=260,P={l:48,r:20,t:16,b:40};
  const xs=funds.map(f=>f.sd),ys=funds.map(f=>f.r[4]);
  let x0=Math.min(...xs,0),x1=Math.max(...xs)*1.15+1,y0=Math.min(...ys,0),y1=Math.max(...ys)*1.15+1;
  const X=v=>P.l+(W-P.l-P.r)*(v-x0)/(x1-x0),Y=v=>P.t+(H-P.t-P.b)*(1-(v-y0)/(y1-y0));
  let s="";
  for(let k=0;k<=4;k++){const v=y0+(y1-y0)*k/4,y=Y(v);s+=`<line class="grid" x1="${P.l}" x2="${W-P.r}" y1="${y}" y2="${y}"/><text x="${P.l-8}" y="${y+4}" text-anchor="end">${v.toFixed(0)}%</text>`}
  for(let k=0;k<=4;k++){const v=x0+(x1-x0)*k/4;s+=`<text x="${X(v)}" y="${H-20}" text-anchor="middle">${v.toFixed(0)}%</text>`}
  s+=`<text x="${(W+P.l)/2}" y="${H-4}" text-anchor="middle" style="font-weight:700">Risk (std deviation) →</text><text x="12" y="${P.t+4}" style="font-weight:700">3Y return ↑</text>`;
  funds.forEach((f,i)=>{s+=`<circle cx="${X(f.sd)}" cy="${Y(f.r[4])}" r="9" fill="${RS_COL[i]}" fill-opacity=".85" stroke="var(--surface)" stroke-width="2"><title>${rsE(f.n)}: ${f.sd}% risk, ${f.r[4]}% 3Y</title></circle>`});
  return`<div class="rs-cw" data-notr><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Risk versus return">${s}</svg></div>`
}

function rsDonut(parts){
  const tot=parts.reduce((a,p)=>a+p.v,0)||1,R=60,C=2*Math.PI*R;let off=0;
  return`<svg viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="${R}" fill="none" stroke="var(--surface-3)" stroke-width="22"/>${parts.filter(p=>p.v>0).map(p=>{const len=C*p.v/tot,s=`<circle cx="75" cy="75" r="${R}" fill="none" stroke="${p.c}" stroke-width="22" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-off}"/>`;off+=len;return s}).join("")}</svg>`
}

/* ---------- page shell ---------- */

function rsTabRoute(){const r=UI.route;return r==="research"?"mf-screener":r}

// Live mode: MF Screener, Market Signals and MF Compare come from Wylth Research 360 in an iframe
// (#r360Host, kept alive across routes). RS.live: "unknown" until /api/research360-url answers,
// "on", "error", or "off" when the site has no endpoint or credentials (then the sample tools show).
const RS_LIVE_ROUTES=["research","mf-screener","market-signals","mf-compare"];
const rsLiveRoute=()=>RS_LIVE_ROUTES.includes(UI.route)&&RS.live!=="off";
const RS_LIVE_TAB={r:"mf-screener",cls:"t1",en:"Research 360",ta:"ஆய்வு 360",d:"MF Screener, Market Signals and MF Compare, live",ic:RS_TABS[0].ic};

function pageResearch(){
  const cur=rsTabRoute(),ta=rsTa(),live=rsLiveRoute()||RS.live==="on";
  const tabs=live?[RS_LIVE_TAB,RS_TABS[3]]:RS_TABS,onTab=t=>live&&t===RS_LIVE_TAB?rsLiveRoute():t.r===cur;
  const body=rsLiveRoute()?"":cur==="market-signals"?rsSignals():cur==="mf-compare"?rsCompare():cur==="portfolio-iq"?rsPortfolio():rsScreener();
  return`<div class="page rs${rsLiveRoute()?" rs-livepg":""}"><div class="wrap">
    <div class="sec-h"><div><h1 style="font-size:30px">Research <em>360</em></h1>${rsByline()}<p class="muted" style="margin:10px 0 0">Market signals, screeners and portfolio insights in one place.</p></div><div class="rs-hr"><span class="rs-asof" data-notr>${live?'<i class="rs-livedot"></i>Live data':"Data as of "+RS_ASOF+" · Prototype"}</span></div></div>
    <div class="rs-tabs${live?" two":""}" role="tablist">${tabs.map(t=>`<button type="button" role="tab" aria-selected="${onTab(t)}" class="rs-tb ${t.cls}${onTab(t)?" on":""}" data-act="go" data-r="${t.r}"><span class="i">${t.ic}</span><span><b>${ta?t.ta:t.en}</b><small>${t.d}</small></span></button>`).join("")}</div>
    <div id="rs-body">${body}</div>
    ${rsLiveRoute()?"":'<p class="rs-note">'+(live?"Portfolio IQ uses sample fund data for the analysis.":"Prototype with sample data for investor education. Fund figures, ratings and market series are illustrative and may not match current values.")+" Past performance may or may not be sustained in future. Mutual Fund investments are subject to market risks, read all scheme related documents carefully. This is not a recommendation to buy or sell any scheme.</p>"}
  </div></div>`
}

// Shows or hides the Research 360 frame after every render, loading it the first time it's needed.
function rsLiveSync(){
  const host=document.getElementById("r360Host");if(!host)return;
  const show=rsLiveRoute();host.hidden=!show;
  if(!show||host.dataset.ready)return;
  host.dataset.ready="1";
  host.innerHTML=`<div class="wrap"><div class="r360-bar"><span>Switch between <b>MF Screener</b>, <b>Market Signals</b> and <b>MF Compare</b> using the tabs inside.</span></div>
    <div class="r360-frame"><div class="r360-state" id="r360State" role="status"><span class="r360-spin" aria-hidden="true"></span><span>Loading Research 360…</span></div>
    <iframe id="r360Frame" title="Research 360 by Wylth: MF Screener, Market Signals and MF Compare" allow="clipboard-write"></iframe></div>
    <p class="rs-note">Research 360 is provided by Wylth. Past performance may or may not be sustained in future. Mutual Fund investments are subject to market risks, read all scheme related documents carefully. This is not a recommendation to buy or sell any scheme.</p></div>`;
  document.getElementById("r360Frame").addEventListener("load",()=>{document.getElementById("r360Frame").src&&rsLiveState("")});
  rsLiveLoad()
}

function rsLiveState(html){const st=document.getElementById("r360State");st&&(st.hidden=!html,html&&(st.innerHTML=html))}

// Asks the site's server for a one-time Research 360 address. No endpoint or no credentials
// (404/405/501/503) means this deployment has no live embed: fall back to the sample tools.
async function rsLiveLoad(){
  rsLiveState('<span class="r360-spin" aria-hidden="true"></span><span>Loading Research 360…</span>');
  let res;
  try{res=await fetch("/api/research360-url",{cache:"no-store",headers:{Accept:"application/json"}})}
  catch{RS.live="error";rsLiveState('<span>Couldn’t reach Research 360. Check your connection.</span><button type="button" class="btn btn-ghost btn-sm" data-act="rs-liveretry">Try again</button>');return}
  const j=await res.json().catch(()=>null);
  if(res.ok&&j&&/^https:\/\/crmv2\.wylth\.com\/embed\/sso\/\?t=/.test(j.src)){RS.live="on";document.getElementById("r360Frame").src=j.src;return}
  if([404,405,501,503].includes(res.status)){RS.live="off";const h=document.getElementById("r360Host");h&&(h.hidden=!0);render();return}
  RS.live="error";
  rsLiveState(`<span>${rsE(j&&j.error||"Research 360 is unavailable right now.")}</span><button type="button" class="btn btn-ghost btn-sm" data-act="rs-liveretry">Try again</button>`)
}

// Messages from Research 360: a used or expired code, or the 24 h session ending, needs a new code.
window.addEventListener("message",e=>{
  if(e.origin!=="https://crmv2.wylth.com"||!e.data)return;
  if(e.data.type==="EMBED_AUTH_FAILED")rsLiveLoad();
  else if(e.data.type==="THEME_READY")rsLiveState("")
});

function rsPaint(){const b=document.getElementById("rs-body");b&&(b.innerHTML=rsTabRoute()==="market-signals"?rsSignals():rsTabRoute()==="mf-compare"?rsCompare():rsTabRoute()==="portfolio-iq"?rsPortfolio():rsScreener())}

/* ---------- MF Screener ---------- */

function rsVal(f,k){return k==="name"?f.n:k==="cat"?f.cat:k[0]==="r"&&k.length===2?f.r[+k[1]]:f[k]}
function rsFiltered(){
  const q=RS.q.trim().toLowerCase(),pre=RS_PRESETS.find(p=>p.k===RS.pre);
  const out=RS_FUNDS.filter(f=>(!RS.cls||f.cls===RS.cls)&&(!RS.cat||f.cat===RS.cat)&&(!RS.amc||f.amc===RS.amc)&&(!RS.star||f.star>=RS.star)&&(!pre||pre.f(f))&&(!q||(f.n+" "+f.amc+" "+f.cat).toLowerCase().split(" ").join(" ").includes(q)||q.split(" ").filter(Boolean).every(w=>(f.n+" "+f.amc+" "+f.cat).toLowerCase().includes(w))));
  const {k,dir}=RS.sort;
  return out.sort((a,b)=>{const x=rsVal(a,k),y=rsVal(b,k);return typeof x=="string"?dir*x.localeCompare(y):dir*((x??-1e9)-(y??-1e9))})
}
function rsScreener(){
  const cats=[...new Set(RS_FUNDS.filter(f=>!RS.cls||f.cls===RS.cls).map(f=>f.cat))].sort(),amcs=[...new Set(RS_FUNDS.map(f=>f.amc))].sort();
  return`<div class="rs-card">
    <div class="rs-ch"><div><h3>MF Screener</h3><p class="sub" style="margin:0">Filter and discover mutual funds using performance and risk metrics.</p></div></div>
    <div class="rs-bar"><label class="search-in"><span class="sr">Search funds</span>${RS_I.search}<input id="rsq" type="search" placeholder="Search for funds, AMC or category" value="${rsE(RS.q)}" autocomplete="off"></label>
      <select class="inp" id="rscat" aria-label="Category"><option value="">All categories</option>${cats.map(c=>`<option ${c===RS.cat?"selected":""}>${rsE(c)}</option>`).join("")}</select>
      <select class="inp" id="rsamc" aria-label="AMC"><option value="">All AMCs</option>${amcs.map(c=>`<option ${c===RS.amc?"selected":""}>${rsE(c)}</option>`).join("")}</select>
      <select class="inp" id="rsstar" aria-label="Rating"><option value="0">Any rating</option>${[3,4,5].map(n=>`<option value="${n}" ${RS.star===n?"selected":""}>${n}★${n<5?" & above":""}</option>`).join("")}</select></div>
    <div class="rs-chips"><span class="lbl">Type</span>${["",...RS_CLASSES].map(c=>`<button type="button" class="pill${RS.cls===c?" on":""}" data-act="rs-cls" data-v="${c}">${c||"All funds"}</button>`).join("")}</div>
    <div class="rs-chips"><span class="lbl">Saved screens</span>${RS_PRESETS.map(p=>`<button type="button" class="pill rs-pre${RS.pre===p.k?" on":""}" data-act="rs-pre" data-v="${p.k}">${p.l}</button>`).join("")}</div>
  </div>
  <div id="rs-res">${rsResults()}</div>`
}
function rsResults(){
  const rows=rsFiltered(),pages=Math.max(1,Math.ceil(rows.length/RS.per));RS.page=Math.min(RS.page,pages);
  const start=(RS.page-1)*RS.per,vis=rows.slice(start,start+RS.per),cols=RS_COLS.filter(c=>RS.cols.includes(c.k));
  const th=(k,l,cl="")=>`<th class="${cl}${RS.sort.k===k?" sorted":""}" data-act="rs-sort" data-v="${k}" aria-sort="${RS.sort.k===k?(RS.sort.dir>0?"ascending":"descending"):"none"}">${l}<span class="ar">${RS.sort.k===k?(RS.sort.dir>0?"▲":"▼"):"↕"}</span></th>`;
  const cell=(f,k)=>k==="cat"?`<td class="l"><span class="rs-cat">${rsE(f.cat)}</span></td>`:k==="star"?`<td class="l">${rsStars(f.star)}</td>`:k==="nav"?`<td>${rsNum(f.nav,4)}</td>`:k==="aum"?`<td>${rsNum(f.aum)}</td>`:k[0]==="r"?`<td>${rsPct(f.r[+k[1]])}</td>`:k==="er"?`<td>${f.er.toFixed(2)}%</td>`:k==="sd"?`<td>${f.sd.toFixed(1)}%</td>`:`<td>${f[k].toFixed(2)}</td>`;
  const pg=[];const add=(p,l,dis,on)=>pg.push(`<button type="button" data-act="rs-page" data-v="${p}" ${dis?"disabled":""} class="${on?"on":""}" ${on?'aria-current="page"':""}>${l}</button>`);
  add(1,"First",RS.page===1);add(RS.page-1,"‹",RS.page===1);
  for(let p=Math.max(1,RS.page-2);p<=Math.min(pages,RS.page+2);p++)add(p,p,!1,p===RS.page);
  add(RS.page+1,"›",RS.page===pages);add(pages,"Last",RS.page===pages);
  const tray=RS.cmp.length?`<div class="rs-tray"><span class="t">${RS.cmp.length}/5 to compare</span><div class="cs">${RS.cmp.map((id,i)=>{const f=rsF(id);return f?`<span class="c"><i class="rs-dot" style="background:${RS_COL[i]}"></i><span>${rsE(f.n)}</span><button type="button" data-act="rs-cmp" data-v="${id}" aria-label="Remove ${rsE(f.n)}">×</button></span>`:""}).join("")}</div><button type="button" class="btn btn-o btn-sm" data-act="go" data-r="mf-compare">Compare ${RS_I.arrow}</button></div>`:"";
  return`<div class="rs-tools"><span class="cnt" data-notr>${rows.length?`Showing <b>${start+1} – ${start+vis.length}</b> of <b>${rows.length}</b> funds`:"No funds match these filters"}</span>
    <div class="acts"><button type="button" class="btn btn-ghost btn-sm" data-act="rs-colsbtn" aria-expanded="${RS.colsOpen}">${RS_I.cols} Configure columns</button><button type="button" class="btn btn-ghost btn-sm" data-act="rs-csv">${RS_I.dl} Export</button>
    ${RS.colsOpen?`<div class="rs-cols"><span class="ttl">Show columns</span>${RS_COLS.map(c=>`<label><input type="checkbox" data-col="${c.k}" ${RS.cols.includes(c.k)?"checked":""}> ${c.l}</label>`).join("")}</div>`:""}</div></div>
    ${rows.length?`<div class="rs-tw" data-notr><table class="rs-tbl"><thead><tr>${th("name","Fund name","l fn")}${cols.map(c=>th(c.k,c.k[0]==="r"&&c.k.length===2?c.l+" Return":c.l,c.k==="cat"||c.k==="star"?"l":"")).join("")}<th class="l" style="cursor:default">Actions</th></tr></thead>
    <tbody>${vis.map(f=>{const inC=RS.cmp.includes(f.id); return`<tr><td class="l fn"><b>${rsE(f.n)}</b><small>${rsE(f.amc)} · Regular · Growth</small></td>${cols.map(c=>cell(f,c.k)).join("")}<td class="l"><div class="rs-ra"><button type="button" class="rs-ib${inC?" on":""}" data-act="rs-cmp" data-v="${f.id}">${inC?RS_I.check:RS_I.plus} Compare</button></div></td></tr>`}).join("")}</tbody></table></div>
    <div class="rs-pg">${pg.join("")}</div>`:`<div class="rs-empty"><h3>No funds found</h3><p>Try a different search or clear a filter.</p><div class="rs-quick"><button type="button" class="btn btn-ghost btn-sm" data-act="rs-reset">Clear all filters</button></div></div>`}
    ${tray}`
}
function rsCsv(){
  const rows=rsFiltered(),h=["Fund","AMC","Category","Rating","NAV","AUM (Cr)","1M","3M","6M","1Y","3Y","5Y","Expense ratio","Std dev","Sharpe"];
  const q=v=>/[",\n]/.test(String(v))?'"'+String(v).replace(/"/g,'""')+'"':v;
  const csv=[h.join(",")].concat(rows.map(f=>[f.n,f.amc,f.cat,f.star,f.nav,f.aum,...f.r,f.er,f.sd,f.sh].map(q).join(","))).join("\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="mf-screener.csv";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2e3)
}

/* ---------- MF Compare ---------- */

function rsSug(q,exclude,act){
  const s=q.trim().toLowerCase();if(!s)return"";
  const m=RS_FUNDS.filter(f=>!exclude.includes(f.id)&&s.split(" ").filter(Boolean).every(w=>(f.n+" "+f.amc+" "+f.cat).toLowerCase().includes(w))).slice(0,8);
  return`<div class="rs-sug" role="listbox">${m.length?m.map(f=>`<button type="button" role="option" data-act="${act}" data-v="${f.id}"><span>${rsE(f.n)}</span><small>${rsE(f.cat)}</small></button>`).join(""):'<div class="none">No matching funds</div>'}</div>`
}
function rsOverlap(a,b){
  const A=rsHold(a),B=rsHold(b);if(!A.length||!B.length)return{pct:0,common:[]};
  const mb=new Map(B);let s=0;const common=[];
  A.forEach(([n,w])=>{if(mb.has(n)){const m=Math.min(w,mb.get(n));s+=m;common.push([n,w,mb.get(n)])}});
  const base=Math.min(A.reduce((x,y)=>x+y[1],0),B.reduce((x,y)=>x+y[1],0));
  return{pct:Math.round(s/base*100),common:common.sort((x,y)=>Math.min(y[1],y[2])-Math.min(x[1],x[2]))}
}
function rsGrowth(f){
  // Rebuild a 5-year path of ₹10,000 through the fund's trailing return checkpoints.
  const fin=1e4*Math.pow(1+f.r[5]/100,5),cp=[[60,1e4],[36,fin/Math.pow(1+f.r[4]/100,3)],[12,fin/(1+f.r[3]/100)],[6,fin/(1+f.r[2]/100)],[3,fin/(1+f.r[1]/100)],[1,fin/(1+f.r[0]/100)],[0,fin]];
  const rnd=rsRand([...f.id].reduce((a,c)=>a*31+c.charCodeAt(0),7)),out=[];
  for(let m=60;m>=0;m--){let j=0;while(j<cp.length-1&&cp[j+1][0]>m)j++;const[a,va]=cp[j],[b,vb]=cp[Math.min(j+1,cp.length-1)];
    const t=a===b?0:(a-m)/(a-b),base=Math.exp(Math.log(va)+(Math.log(vb)-Math.log(va))*t),edge=m===60||cp.some(c=>c[0]===m);
    out.push(edge?base:base*(1+(rnd()-.5)*f.sd/260))}
  return out
}
function rsCompare(){
  const fs=RS.cmp.map(rsF).filter(Boolean);
  const search=`<div class="rs-bar"><div class="rs-sw"><label class="search-in"><span class="sr">Search funds to compare</span>${RS_I.search}<input id="rscq" type="search" placeholder="${fs.length>=5?"Remove a fund to add another":"Search and add up to 5 mutual funds to compare"}" value="${rsE(RS.cmpQ)}" autocomplete="off" ${fs.length>=5?"disabled":""}></label><div id="rs-csug">${rsSug(RS.cmpQ,RS.cmp,"rs-cadd")}</div></div>${fs.length?'<button type="button" class="btn btn-ghost btn-sm" data-act="rs-cclear">Clear all</button>':""}</div>`;
  const head=`<div class="rs-card"><div class="rs-ch"><div><h3>MF Compare</h3><p class="sub" style="margin:0">Compare multiple mutual funds across performance, allocation and portfolio overlap.</p></div></div>${search}
    ${fs.length?`<div class="rs-sel" data-notr>${fs.map((f,i)=>`<span class="c"><i class="rs-dot" style="background:${RS_COL[i]}"></i><span>${rsE(f.n)}</span><button type="button" data-act="rs-cmp" data-v="${f.id}" aria-label="Remove ${rsE(f.n)}">×</button></span>`).join("")}</div>`:""}</div>`;
  if(!fs.length)return head+`<div class="rs-empty" style="margin-top:16px"><div class="ill">${RS_TABS[2].ic.replace("<svg",'<svg width="30" height="30"')}</div><h3>Select 1-5 funds to analyze performance and overlap</h3><p>Use the search to build a set of funds, then compare performance and overlap together. Or start with a popular comparison.</p><div class="rs-quick">${RS_QUICK.map((q,i)=>`<button type="button" class="pill" data-act="rs-quick" data-v="${i}">${q.l}</button>`).join("")}</div></div>`;
  const P=["1M","3M","6M","1Y","3Y","5Y"],best=i=>Math.max(...fs.map(f=>f.r[i]));
  const kv=(l,fn,hi)=>`<tr><th>${l}</th>${fs.map(f=>`<td class="${hi&&hi(f)?"best":""}">${fn(f)}</td>`).join("")}</tr>`;
  const months=[];const end=new Date(2026,10,5);for(let m=60;m>=0;m--){const d=new Date(end.getFullYear(),end.getMonth()-m,1);months.push(d.toLocaleString("en-IN",{month:"short"})+" "+String(d.getFullYear()).slice(2))}
  let ov="";
  if(fs.length>1){
    const pairs=[];for(let i=0;i<fs.length;i++)for(let j=i+1;j<fs.length;j++)pairs.push([i,j,rsOverlap(fs[i],fs[j]).pct]);
    let sel=RS.pair&&RS.pair[0]<fs.length&&RS.pair[1]<fs.length?RS.pair:pairs.slice().sort((a,b)=>b[2]-a[2])[0];
    const o=rsOverlap(fs[sel[0]],fs[sel[1]]),heat=p=>`color-mix(in srgb,${p>=50?"var(--red,#dc2626)":p>=25?"#f59e0b":"var(--good,#059669)"} ${18+p*.5}%,var(--surface))`;
    ov=`<div class="rs-card"><h3>Portfolio overlap</h3><p class="sub">Share of top 10 holdings two funds have in common. Higher overlap means less diversification when you hold both. Tap a cell to see the shared stocks.</p>
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start"><div style="overflow:auto;max-width:100%" data-notr><table class="rs-mx"><thead><tr><th></th>${fs.map((f,i)=>`<th><i class="rs-dot" style="background:${RS_COL[i]}"></i></th>`).join("")}</tr></thead><tbody>${fs.map((a,i)=>`<tr><th class="rh"><i class="rs-dot" style="background:${RS_COL[i]}"></i></th>${fs.map((b,j)=>{if(i===j)return'<td class="self">—</td>';const p=rsOverlap(a,b).pct,on=(sel[0]===Math.min(i,j)&&sel[1]===Math.max(i,j));return`<td class="${on?"sel":""}" style="background:${heat(p)}" data-act="rs-pair" data-v="${Math.min(i,j)},${Math.max(i,j)}" title="${rsE(a.n)} × ${rsE(b.n)}">${p}%</td>`}).join("")}</tr>`).join("")}</tbody></table></div>
      <div style="flex:1;min-width:260px" data-notr><b style="font-size:14px"><i class="rs-dot" style="background:${RS_COL[sel[0]]}"></i> ${rsE(fs[sel[0]].n)} &nbsp;×&nbsp; <i class="rs-dot" style="background:${RS_COL[sel[1]]}"></i> ${rsE(fs[sel[1]].n)}</b>
      ${o.common.length?`<div class="rs-common"><span class="h">Common stock</span><span class="h" style="text-align:right">Fund A</span><span class="h" style="text-align:right">Fund B</span>${o.common.map(c=>`<span>${rsE(c[0])}</span><span style="text-align:right">${c[1].toFixed(1)}%</span><span style="text-align:right">${c[2].toFixed(1)}%</span>`).join("")}</div>`:'<p class="muted" style="font-size:13.5px">No common stocks in their top 10 holdings.</p>'}</div></div></div>`
  }
  return head+`
  <div class="rs-card" data-notr><h3>Snapshot</h3><p class="sub">Key facts for each fund.</p><div style="overflow:auto"><table class="rs-kv"><thead><tr><th></th>${fs.map((f,i)=>`<th><i class="rs-dot" style="background:${RS_COL[i]}"></i> ${rsE(f.n)}</th>`).join("")}</tr></thead><tbody>
    ${kv("Category",f=>`<span class="rs-cat">${rsE(f.cat)}</span>`)}${kv("AMC",f=>rsE(f.amc))}${kv("Rating",f=>rsStars(f.star))}${kv("NAV",f=>"₹"+rsNum(f.nav,4))}${kv("AUM (Cr)",f=>"₹"+rsNum(f.aum))}
    ${kv("Expense ratio",f=>f.er.toFixed(2)+"%",f=>f.er===Math.min(...fs.map(x=>x.er)))}${kv("Riskometer",f=>rsRisk(f))}${kv("Launched",f=>f.since)}</tbody></table></div></div>
  <div class="rs-card"><div class="rs-ch"><div><h3>Returns</h3><p class="sub" style="margin:0">Trailing returns; 3Y and 5Y are annualised. ▲ marks the best in each period.</p></div></div>
    ${rsBars(P,fs.map((f,i)=>({name:f.n,color:RS_COL[i],vals:f.r})))}
    <div style="overflow:auto;margin-top:8px" data-notr><table class="rs-kv"><thead><tr><th>Period</th>${fs.map((f,i)=>`<th><i class="rs-dot" style="background:${RS_COL[i]}"></i> ${rsE(f.n.length>30?f.n.slice(0,29)+"…":f.n)}</th>`).join("")}</tr></thead><tbody>${P.map((p,i)=>kv(p,f=>f.r[i].toFixed(2)+"%",f=>fs.length>1&&f.r[i]===best(i))).join("")}</tbody></table></div></div>
  <div class="rs-card"><h3>Growth of ₹10,000</h3><p class="sub">Five years, built from each fund's trailing returns. Hover the chart to read values.</p>
    ${rsLine("cmpg",fs.map((f,i)=>({name:f.n,color:RS_COL[i],vals:rsGrowth(f)})),months,{fmt:v=>"₹"+(v/1e3).toFixed(0)+"k",tfmt:v=>rsInr(v),label:"Growth of 10,000 rupees"})}
    <div class="rs-lg" data-notr>${fs.map((f,i)=>`<span><i style="background:${RS_COL[i]}"></i>${rsE(f.n)} · <b>${rsInr(rsGrowth(f).at(-1))}</b></span>`).join("")}</div></div>
  <div class="rs-g2">
    <div class="rs-card"><h3>Risk vs return</h3><p class="sub">Up and to the left is better: more return for less volatility.</p>${rsScatter(fs)}
      <div style="overflow:auto;margin-top:8px" data-notr><table class="rs-kv"><tbody>${kv("Std deviation",f=>f.sd.toFixed(1)+"%",f=>fs.length>1&&f.sd===Math.min(...fs.map(x=>x.sd)))}${kv("Sharpe ratio",f=>f.sh.toFixed(2),f=>fs.length>1&&f.sh===Math.max(...fs.map(x=>x.sh)))}${kv("Beta",f=>f.beta.toFixed(2))}</tbody></table></div></div>
    <div class="rs-card"><h3>Asset allocation</h3><p class="sub">Equity, debt, gold and cash in each fund.</p>
      ${fs.map((f,i)=>`<div class="rs-srow" data-notr><span class="n"><i class="rs-dot" style="background:${RS_COL[i]}"></i><span>${rsE(f.n)}</span></span><div class="rs-sbar" title="Equity ${f.al[0]}% · Debt ${f.al[1]}% · Gold ${f.al[2]}% · Cash ${f.al[3]}%">${f.al.map((v,k)=>`<i style="width:${v}%;background:${["#2563eb","#16a34a","#f59e0b","#94a3b8"][k]}"></i>`).join("")}</div></div>`).join("")}
      <div class="rs-lg"><span><i style="background:#2563eb"></i>Equity</span><span><i style="background:#16a34a"></i>Debt</span><span><i style="background:#f59e0b"></i>Gold</span><span><i style="background:#94a3b8"></i>Cash</span></div>
      <h3 style="margin-top:22px">Market cap mix</h3><p class="sub">Large, mid and small cap share of the equity portion.</p>
      ${fs.map((f,i)=>`<div class="rs-srow" data-notr><span class="n"><i class="rs-dot" style="background:${RS_COL[i]}"></i><span>${rsE(f.n)}</span></span>${f.cap.some(Boolean)?`<div class="rs-sbar" title="Large ${f.cap[0]}% · Mid ${f.cap[1]}% · Small ${f.cap[2]}%">${f.cap.map((v,k)=>`<i style="width:${v}%;background:${["#1e3a8a","#7c3aed","#e8590c"][k]}"></i>`).join("")}</div>`:'<span class="muted">Not applicable</span>'}</div>`).join("")}
      <div class="rs-lg"><span><i style="background:#1e3a8a"></i>Large</span><span><i style="background:#7c3aed"></i>Mid</span><span><i style="background:#e8590c"></i>Small</span></div></div>
  </div>
  ${ov}`
}

/* ---------- Market Signals ---------- */

function rsZone(pe){return pe<18?{l:"CHEAP",c:"#16a34a"}:pe<22?{l:"FAIR",c:"#65a30d"}:pe<25?{l:"EXPENSIVE",c:"#d97706"}:{l:"VERY EXPENSIVE",c:"#dc2626"}}
function rsRange(series,rng){const w={"1Y":52,"3Y":156,"5Y":260,"10Y":522}[rng];return series.slice(-w)}
function rsMonthly(series){const m=new Map();series.forEach(p=>m.set(p.d.getFullYear()*12+p.d.getMonth(),p));return[...m.values()]}
function rsHeat(key,pts){
  const mon=rsMonthly(pts),years=[...new Set(mon.map(p=>p.d.getFullYear()))],M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const all=rsMonthly(RS_MARKET[key]),prev=new Map(all.map((p,i)=>[p.d.getFullYear()*12+p.d.getMonth(),all[i-1]]));
  const cell=p=>{if(!p)return'<td class="na">·</td>';
    if(key==="pe"){const z=rsZone(p.v);return`<td style="background:color-mix(in srgb,${z.c} 28%,var(--surface))" title="${M[p.d.getMonth()]} ${p.d.getFullYear()}: PE ${p.v.toFixed(1)}">${p.v.toFixed(1)}</td>`}
    const pr=prev.get(p.d.getFullYear()*12+p.d.getMonth());if(!pr)return'<td class="na">·</td>';const r=(p.v/pr.v-1)*100;
    return`<td style="background:color-mix(in srgb,${r>=0?"var(--good,#059669)":"var(--red,#dc2626)"} ${Math.min(70,10+Math.abs(r)*9)}%,var(--surface))" title="${M[p.d.getMonth()]} ${p.d.getFullYear()}: ${r.toFixed(2)}%">${r>0?"+":""}${r.toFixed(1)}</td>`};
  return`<div style="overflow:auto" data-notr><table class="rs-hm"><thead><tr><th></th>${M.map(m=>`<th>${m}</th>`).join("")}</tr></thead><tbody>${years.map(y=>`<tr><th>${y}</th>${M.map((_,mi)=>cell(mon.find(p=>p.d.getFullYear()===y&&p.d.getMonth()===mi))).join("")}</tr>`).join("")}</tbody></table></div>
  <p class="muted" style="font-size:12.5px;margin:10px 0 0">${key==="pe"?"Month-end PE coloured by valuation zone.":"Month-on-month change in the index, %."}</p>`
}
function rsSigChart(key,title,unit){
  const st=RS.sig[key],pts=rsRange(RS_MARKET[key],st.rng),vals=pts.map(p=>p.v),avg=vals.reduce((a,b)=>a+b,0)/vals.length;
  const d=key==="pe"?1:0,fmt=v=>rsNum(v,d);
  const ctl=`<div class="rs-ctl"><div class="rs-seg" role="group" aria-label="View">${[["graph","Graph View"],["heat","Heatmap View"]].map(([v,l])=>`<button type="button" class="${st.view===v?"on":""}" data-act="rs-view" data-ch="${key}" data-v="${v}">${l}</button>`).join("")}</div><div class="rs-seg" role="group" aria-label="Range">${["1Y","3Y","5Y","10Y"].map(r=>`<button type="button" class="${st.rng===r?"on":""}" data-act="rs-rng" data-ch="${key}" data-v="${r}">${r}</button>`).join("")}</div></div>`;
  const lab=pts.map(p=>p.d.toLocaleString("en-IN",{month:"short"})+" "+String(p.d.getFullYear()).slice(2));
  const color=key==="pe"?"#7c3aed":"#e8590c";
  const body=st.view==="heat"?rsHeat(key,pts):rsLine("sig"+key,[{name:unit,color,vals}],lab,{area:!0,fmt,tfmt:fmt,label:title,refs:[{v:avg,l:"Avg "+fmt(avg),c:"var(--ink-2)"},{v:Math.max(...vals),l:"Max "+fmt(Math.max(...vals)),c:"#dc2626"},{v:Math.min(...vals),l:"Min "+fmt(Math.min(...vals)),c:"#16a34a"}]});
  return`<div class="rs-card"><div class="rs-ch"><div><h3>${title}</h3><p class="sub" style="margin:2px 0 0">${st.rng} · weekly ${unit.toLowerCase()}</p></div>${ctl}</div>${body}</div>`
}
function rsSignals(){
  const n=RS_MARKET.nifty,pe=RS_MARKET.pe,last=n.at(-1).v,lpe=pe.at(-1).v,z=rsZone(lpe);
  const pct=Math.round(pe.filter(p=>p.v<lpe).length/pe.length*100),y52=n.slice(-52),hi=Math.max(...y52.map(p=>p.v)),fromHi=(last/hi-1)*100;
  const ey=100/lpe,gsec=6.48,pos=Math.max(0,Math.min(100,(lpe-14)/(28-14)*100));
  return`<div class="rs-sig">
    <div class="rs-card"><div class="rs-ch"><div><h3 style="display:flex;gap:10px;align-items:center">Market Signals <span class="rs-zone" style="background:${z.c}">● ${z.l}</span></h3><p class="sub" style="margin:4px 0 0">Track key market indicators and signals to guide investment decisions.</p></div></div>
      <div class="rs-gauge" role="img" aria-label="Nifty PE ${lpe} on a valuation scale"><span class="m" style="left:${pos}%"></span></div>
      <div class="rs-gl" data-notr><span>Cheap &lt;18</span><span>Fair 18–22</span><span>Expensive 22–25</span><span>25+</span></div></div>
    <div class="rs-card" data-notr><span class="muted" style="font-size:13px;font-weight:700">Nifty 50 (${RS_ASOF})</span><div class="rs-big" style="margin-top:8px">${rsNum(last,1)}<small>${rsPct(RS_MARKET.niftyChg,1)}</small></div><p class="muted" style="font-size:13px;margin:8px 0 0">${fromHi.toFixed(1)}% from its 52-week high of ${rsNum(hi,0)}</p></div>
    <div class="rs-card" data-notr><span class="muted" style="font-size:13px;font-weight:700">Nifty PE Ratio (${RS_ASOF})</span><div class="rs-big" style="margin-top:8px">${lpe.toFixed(2)}</div><p class="muted" style="font-size:13px;margin:8px 0 0">Higher than ${pct}% of weeks in the last 10 years</p></div>
  </div>
  <div style="margin-top:16px">${rsSigChart("nifty","Nifty 50","Price")}${rsSigChart("pe","Nifty PE Ratio","PE Ratio")}</div>
  <div class="rs-mini">
    <div class="rs-card"><span class="k">Earnings yield</span><b data-notr>${ey.toFixed(2)}%</b><small>1 ÷ PE. Compare with the 10-year G-Sec at ${gsec}%: the gap is ${(gsec-ey).toFixed(2)}%.</small></div>
    <div class="rs-card"><span class="k">PE percentile</span><b data-notr>${pct}th</b><small>Where today's PE sits in its 10-year range.</small></div>
    <div class="rs-card"><span class="k">India VIX</span><b data-notr>13.8</b><small>Volatility is calm. Readings above 20 usually mean nervous markets.</small></div>
    <div class="rs-card"><span class="k">What it means</span><b style="font-size:17px">${z.l==="CHEAP"||z.l==="FAIR"?"Stay the course":"Stay disciplined"}</b><small>Valuations guide expectations, not timing. SIPs smooth out entry points.</small></div>
  </div>
  <div class="rs-cta"><div><b>Learn how to read these signals</b><br><small class="muted">Articles from our publishers explain PE, valuation and SIP discipline in Tamil and English.</small></div><button type="button" class="btn btn-o" data-act="go" data-r="articles">Read articles ${RS_I.arrow}</button></div>`
}

/* ---------- Portfolio IQ ---------- */

const RS_PROF={conservative:{l:"Conservative",t:[35,55,10]},moderate:{l:"Moderate",t:[60,30,10]},aggressive:{l:"Aggressive",t:[80,12,8]}};
const RS_PI={
  up:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 18v-6M9 15l3-3 3 3"/></svg>',
  pen:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  id:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16c.6-1.6 1.9-2.4 3.5-2.4s2.9.8 3.5 2.4M15 10h3M15 13h3"/></svg>',
  file:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>'
};
const rsHName=h=>h.name||h.f.n;
const rsInScope=h=>{const L=RS.lead,P=RS.piq;if(!L||!L.isMfd||P.scope==="both")return!0;const inh=h.arn===L.arn;return P.scope==="in"?inh:!inh};

function rsAnalyse(){
  const hs=RS.pf.map(h=>({...h,f:rsF(h.id)})).filter(h=>h.f&&h.amt>0&&rsInScope(h)),tot=hs.reduce((a,h)=>a+h.amt,0);
  if(!tot)return null;
  const w=h=>h.amt/tot,wavg=fn=>hs.reduce((a,h)=>a+w(h)*fn(h.f),0);
  const al=[0,1,2,3].map(k=>wavg(f=>f.al[k])),eqAmt=hs.reduce((a,h)=>a+h.amt*h.f.al[0]/100,0);
  const cap=[0,1,2].map(k=>eqAmt?hs.reduce((a,h)=>a+h.amt*h.f.al[0]/100*h.f.cap[k]/100,0)/eqAmt*100:0);
  const stocks=new Map();hs.forEach(h=>rsHold(h.f).forEach(([n,p])=>stocks.set(n,(stocks.get(n)||0)+h.amt*p/100)));
  const top=[...stocks.entries()].sort((a,b)=>b[1]-a[1]).slice(0,10);
  const amc=new Map();hs.forEach(h=>amc.set(h.f.amc,(amc.get(h.f.amc)||0)+h.amt));const amcs=[...amc.entries()].sort((a,b)=>b[1]-a[1]);
  const pairs=[];for(let i=0;i<hs.length;i++)for(let j=i+1;j<hs.length;j++){const o=rsOverlap(hs[i].f,hs[j].f);o.pct>=35&&pairs.push([hs[i],hs[j],o.pct])}
  pairs.sort((a,b)=>b[2]-a[2]);
  const er=wavg(f=>f.er),sd=wavg(f=>f.sd),r1=wavg(f=>f.r[3]),r3=wavg(f=>f.r[4]),r5=wavg(f=>f.r[5]),n=hs.length,sc=cap[2]*al[0]/100;
  const clamp=v=>Math.max(0,Math.min(100,Math.round(v)));
  const sDiv=clamp(100-(n>7?(n-7)*12:0)-(n<3?(3-n)*22:0)-(amcs[0][1]/tot>.5&&n>1?18:0)-(al[1]<5&&al[2]<5?12:0));
  const sOv=clamp(100-Math.max(0,((pairs[0]||[])[2]||0)-25)*1.6-Math.max(0,pairs.length-1)*6);
  const sCost=clamp(100-Math.max(0,er-.4)*50);
  const sRisk=clamp(100-Math.max(0,sc-25)*2.2-(al[0]>90?12:0));
  const score=Math.round((sDiv+sOv+sCost+sRisk)/4);
  const ins=[];
  pairs.slice(0,2).forEach(p=>ins.push(["warn","High overlap",`${rsHName(p[0])} and ${rsHName(p[1])} share ${p[2]}% of their top holdings. Holding both adds little diversification.`]));
  sc>25&&ins.push(["warn","Heavy small cap tilt",`About ${Math.round(sc)}% of the portfolio is in small caps, which can swing sharply. Check that this suits your time horizon.`]);
  al[1]+al[3]<10&&ins.push(["info","Little debt or cash",`Only ${Math.round(al[1]+al[3])}% is in debt or cash. An emergency buffer in a liquid fund keeps you from selling equity in a fall.`]);
  al[2]<1&&ins.push(["info","No gold allocation","Gold often moves differently from equity. Some investors keep 5–10% in gold funds as a hedge."]);
  er>1.2&&ins.push(["info","Cost check",`Average expense ratio is ${er.toFixed(2)}%, about ${rsInr(tot*er/100)} a year. Index funds in the same category cost far less.`]);
  n>7&&ins.push(["warn","Too many funds",`${n} funds can be hard to track and often repeat the same stocks. Fewer, distinct funds are easier to review.`]);
  amcs[0][1]/tot>.5&&n>1&&ins.push(["info","One fund house dominates",`${Math.round(amcs[0][1]/tot*100)}% is with ${amcs[0][0]}. Spreading across AMCs reduces fund-manager concentration.`]);
  !ins.length&&ins.push(["good","Well balanced","No major overlap, cost or concentration issues stand out in this portfolio."]);
  sCost>=85&&ins.push(["good","Low cost",`Average expense ratio of ${er.toFixed(2)}% keeps more of your returns with you.`]);
  return{hs,tot,al,cap,sc,top,amcs,pairs,er,sd,r1,r3,r5,score,sub:[["Diversification",sDiv],["Overlap",sOv],["Cost",sCost],["Risk balance",sRisk]],ins}
}

// Current vs target mix for a risk profile, and the moves that would close the gap.
function rsRebal(a){
  const prof=RS_PROF[RS.piq.prof],t=prof.t,cur=[a.al[0],a.al[1]+a.al[3],a.al[2]],L=["Equity","Debt & cash","Gold"],C=["#2563eb","#16a34a","#f59e0b"];
  const gap=cur.map((c,k)=>(t[k]-c)/100*a.tot),acts=[];
  const over=gap.map((g,k)=>[k,g]).filter(x=>x[1]<-a.tot*.03),under=gap.map((g,k)=>[k,g]).filter(x=>x[1]>a.tot*.03);
  over.forEach(([ko,go])=>{let left=-go;under.forEach(u=>{if(left<=0||u[1]<=0)return;const m=Math.min(left,u[1]);u[1]-=m;left-=m;acts.push(`Shift about <b>${rsInrS(m)}</b> from ${L[ko].toLowerCase()} to ${L[u[0]].toLowerCase()} funds to move towards a ${prof.l.toLowerCase()} mix.`)})});
  const p=a.pairs[0];if(p){const keep=p[0].f.sh>=p[1].f.sh?p[0]:p[1],drop=keep===p[0]?p[1]:p[0];acts.push(`<b>${rsE(rsHName(drop))}</b> overlaps ${p[2]}% with <b>${rsE(rsHName(keep))}</b>. Consolidating into the one with the better risk-adjusted record (Sharpe ${keep.f.sh.toFixed(2)} vs ${drop.f.sh.toFixed(2)}) would simplify the portfolio.`)}
  a.sc>25&&acts.push(`Small caps are about ${Math.round(a.sc)}% of the portfolio. Bringing them to 20% would mean moving roughly <b>${rsInrS((a.sc-20)/100*a.tot)}</b> into large or flexi cap funds.`);
  a.er>1.2&&acts.push(`Replacing the large cap portion with a Nifty 50 index fund could cut costs to about 0.2% on that money.`);
  !acts.length&&acts.push(`Your mix is already close to a ${prof.l.toLowerCase()} profile. Review once a year or after big market moves.`);
  const bar=v=>`<div class="rs-sbar" style="height:16px">${v.map((x,k)=>`<i style="width:${Math.max(0,x)}%;background:${C[k]}" title="${L[k]} ${x.toFixed(0)}%"></i>`).join("")}</div>`;
  return`<div class="rs-card" style="margin-top:16px"><div class="rs-ch"><div><h3>Rebalancing ideas</h3><p class="sub" style="margin:2px 0 0">Compare your mix with a model allocation for your risk profile.</p></div>
    <div class="rs-seg" role="group" aria-label="Risk profile">${Object.entries(RS_PROF).map(([k,v])=>`<button type="button" class="${RS.piq.prof===k?"on":""}" data-act="rs-prof" data-v="${k}">${v.l}</button>`).join("")}</div></div>
    <div class="rs-rb" data-notr><span>Current</span>${bar(cur)}<span>Target</span>${bar(t)}</div>
    <div class="rs-lg" style="margin-bottom:12px">${L.map((l,k)=>`<span><i style="background:${C[k]}"></i>${l}</span>`).join("")}</div>
    <div style="overflow:auto" data-notr><table class="rs-kv"><thead><tr><th>Asset</th><th>Current</th><th>Target</th><th>Change needed</th></tr></thead><tbody>${L.map((l,k)=>`<tr><th>${l}</th><td>${cur[k].toFixed(1)}%</td><td>${t[k]}%</td><td>${Math.abs(gap[k])<a.tot*.01?'<span class="muted">On target</span>':`<span class="${gap[k]>0?"up":"dn"}">${gap[k]>0?"Add ":"Reduce "}${rsInrS(Math.abs(gap[k]))}</span>`}</td></tr>`).join("")}</tbody></table></div>
    <ol class="rs-acts">${acts.map(x=>`<li>${x}</li>`).join("")}</ol>
    <p class="muted" style="font-size:12.5px;margin:10px 0 0">Ideas for discussion, not recommendations. Exits can attract exit load and capital gains tax. <button type="button" class="rs-link" data-act="go" data-r="quiz">Not sure of your risk profile? Take the quiz</button></p></div>`
}

const RS_MAX_CAS=3;
const rsSteps=k=>`<div class="rs-steps" aria-label="Step ${k} of 3">${["Your details","Upload statements","Your analysis"].map((l,i)=>`<span class="${i+1===k?"on":i+1<k?"done":""}"><i>${i+1<k?"✓":i+1}</i>${l}</span>`).join("")}</div>`;

// Step 1: nobody reaches the upload without these details.
function rsGate(){
  const g=RS.piq.gate||(RS.lead?{...RS.lead,ok:!0}:{});
  return`<div class="rs-gate">${rsSteps(1)}
    <h4>Tell us about yourself</h4><p class="rs-help" style="margin:0 0 14px">Statement upload opens once these are filled in.</p>
    <div class="rs-form">
      <label class="rs-fl">Full name<input class="inp" id="rs-gname" value="${rsE(g.name||"")}" autocomplete="name"></label>
      <label class="rs-fl">PAN<input class="inp" id="rs-gpan" value="${rsE(g.pan||"")}" maxlength="10" style="text-transform:uppercase" autocomplete="off"></label>
      <label class="rs-fl">Email<input class="inp" id="rs-gmail" type="email" value="${rsE(g.email||"")}" autocomplete="email"></label>
      <label class="rs-fl">Mobile number<input class="inp" id="rs-gmob" inputmode="numeric" value="${rsE(g.mobile||"")}" maxlength="13" autocomplete="tel"></label>
    </div>
    <label class="rs-chk"><input type="checkbox" id="rs-gmfd" ${g.isMfd?"checked":""}> <span>I am a mutual fund distributor</span></label>
    <div id="rs-garnw" ${g.isMfd?"":"hidden"} style="margin-top:12px;max-width:340px"><label class="rs-fl">ARN code<input class="inp" id="rs-garn" value="${rsE(g.arn||"")}" placeholder="ARN-123456" autocomplete="off"></label></div>
    <label class="rs-chk"><input type="checkbox" id="rs-gok" ${g.ok?"checked":""}> <span>I agree that Muthaleetu Thisai may store the details I enter and the information in the statements I upload, and may contact me about my portfolio.</span></label>
    ${RS.piq.gateErr?`<p class="rs-err" role="alert">${rsE(RS.piq.gateErr)}</p>`:""}
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><button type="button" class="btn btn-o" data-act="rs-gate">Continue ${RS_I.arrow}</button>${RS.lead&&RS.piq.editGate?'<button type="button" class="btn btn-ghost" data-act="rs-gatecancel">Cancel</button>':""}</div></div>`
}

// Step 2: up to three statements, each with its own password.
function rsUploads(){
  const P=RS.piq,L=RS.lead,full=P.files.length>=RS_MAX_CAS;
  const lead=`<div class="rs-lead" data-notr><span><b>${rsE(L.name)}</b><small>${L.isMfd?rsE(L.arn)+" · Distributor":"Investor"} · PAN ${rsMaskPan(L.pan)}</small></span><button type="button" class="rs-link" data-act="rs-gateedit">Edit details</button></div>`;
  if(RS.pf.length&&!P.addMore)return`${rsSteps(3)}${lead}<div class="rs-ctl"><span class="muted" style="font-size:13.5px">Analysing ${RS.stmt&&RS.stmt.n>1?RS.stmt.n+" statements":"your statement"}.</span><button type="button" class="btn btn-ghost btn-sm" data-act="rs-addmore">Upload different statements</button></div>`;
  return`<div class="rs-up">${rsSteps(2)}${lead}
    <label class="rs-drop${full?" has":""}" for="rs-cas"><input id="rs-cas" type="file" accept="application/pdf,.pdf" multiple class="sr" ${full?"disabled":""}><span class="i">${RS_PI.up}</span><b>${full?"3 statements added":P.files.length?"Add another statement":"Upload your CAS statements"}</b><small>${full?"Remove one to add a different statement.":`Up to ${RS_MAX_CAS} PDFs from CAMS, KFintech, NSDL or CDSL${L.isMfd?", yours or your clients'":""}.`}</small></label>
    <div class="rs-alt"><span>Don't have your CAS yet? It's free and takes about 5 minutes.</span><button type="button" class="btn btn-ghost btn-sm" data-act="rs-help" aria-expanded="${!!P.help}">${P.help?"Hide the steps":"Request a CAS"}</button></div>
    ${P.help?rsCasHelp():""}
    ${P.files.length?`<div class="rs-files">${P.files.map((x,i)=>`<div class="rs-file${x.err?" bad":x.ok?" ok":""}"><span class="n">${RS_PI.file}<span>${rsE(x.file.name)}</span></span><input class="inp" type="password" data-fi="${i}" placeholder="Statement password" autocomplete="off" aria-label="Password for ${rsE(x.file.name)}"><button type="button" class="x" data-act="rs-frm" data-v="${i}" aria-label="Remove ${rsE(x.file.name)}">×</button>${x.err?`<p class="e" role="alert">${rsE(x.err)}</p>`:""}</div>`).join("")}</div>`:""}
    ${P.err?`<p class="rs-err" role="alert">${rsE(P.err)}</p>`:""}
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:14px"><button type="button" class="btn btn-o" data-act="rs-casgo" ${!P.files.length||P.busy?"disabled":""}>${P.busy?"Analysing…":`Analyse ${P.files.length>1?P.files.length+" statements":"statement"} `+RS_I.arrow}</button>${RS.pf.length?'<button type="button" class="btn btn-ghost" data-act="rs-addcancel">Cancel</button>':""}<span class="rs-help" style="margin:0">Passwords are case sensitive. For NSDL and CDSL statements it is usually your PAN.</span></div>
    <p class="rs-help">Just exploring? <button type="button" class="rs-link" data-act="rs-cassample">Try a sample statement</button></p></div>`
}

const RS_CAS_LINKS={
  cams:"https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement",
  kfin:"https://mfs.kfintech.com/investor/General/ConsolidatedAccountStatement",
  mfc:"https://www.mfcentral.com/",
  cdsl:"https://web.cdslindia.com/myeasitoken/Home/Login",
  nsdl:"https://nsdlcas.nsdl.com/"
};
const rsExt=(href,label)=>`<a class="btn btn-ghost btn-sm" href="${href}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a>`;

// How to get a CAS, with an option to have the same steps emailed to the lead.
function rsCasHelp(){
  const P=RS.piq,L=RS.lead,mail=L.email.replace(/^(.).*(@.*)$/,"$1***$2");
  return`<div class="rs-cash" id="rs-cash">
    <div class="rs-cashg">
      <div class="rs-cashc rec"><span class="tag">Recommended</span><h4>Mutual funds: CAMS + KFintech</h4><p>One PDF with every mutual fund you hold, emailed to you in minutes.</p>
        <ol><li>Open the CAMS request page.</li><li>Statement type: <b>Detailed</b>. Period: <b>Specific period</b>, from your first investment to today.</li><li>Enter the email registered with your funds, and your PAN.</li><li>Set a password and remember it; you'll enter it here.</li><li>Open the email from CAMS and upload the PDF above.</li></ol>
        <div class="acts">${rsExt(RS_CAS_LINKS.cams,"Request on CAMS")}${rsExt(RS_CAS_LINKS.kfin,"Or on KFintech")}</div></div>
      <div class="rs-cashc"><h4>Demat holders: CDSL or NSDL</h4><p>If you have a demat account, your depository already emails you a CAS every month, covering shares and mutual funds.</p>
        <ol><li>Search your email for <b>“Consolidated Account Statement”</b> or <b>“CAS”</b>.</li><li>The password is usually your PAN in capital letters.</li><li>Can't find it? Log in to your depository to download it.</li></ol>
        <div class="acts">${rsExt(RS_CAS_LINKS.cdsl,"CDSL Easi")}${rsExt(RS_CAS_LINKS.nsdl,"NSDL CAS")}</div></div>
      <div class="rs-cashc"><h4>Instant: MF Central</h4><p>Log in with your PAN and mobile number to download a mutual fund CAS straight away.</p>
        <ol><li>Sign in on MF Central with PAN and OTP.</li><li>Choose <b>CAS</b> and download the <b>Detailed</b> statement.</li></ol>
        <div class="acts">${rsExt(RS_CAS_LINKS.mfc,"Open MF Central")}</div></div>
    </div>
    <div class="rs-cashm">${P.helpSent?`<span class="ok">✓ Sent. The steps are on their way to <b data-notr>${rsE(mail)}</b>.</span>`:`<span>Want these steps in your inbox for later?</span><button type="button" class="btn btn-o btn-sm" data-act="rs-helpmail">Email me these steps</button><small class="muted" data-notr>to ${rsE(mail)}</small>`}</div>
  </div>`
}

function rsPortfolio(){
  const P=RS.piq,L=RS.lead,gate=!L||P.editGate;
  const head=`<div class="rs-card"><div class="rs-ch"><div><h3>MF Portfolio IQ</h3><p class="sub" style="margin:0">Analyse portfolios for health score, fund overlap, asset allocation and rebalancing ideas.</p></div></div>${gate?rsGate():rsUploads()}</div>`;
  if(gate||!RS.pf.length)return head+(gate&&!L?`<div class="rs-empty" style="margin-top:16px;text-align:left"><h3>What you get</h3><ul class="rs-acts" style="max-width:640px;margin:10px auto 0"><li>A health score out of 100 for your whole portfolio</li><li>Overlap between your funds and the stocks you really own</li><li>Your true mix of equity, debt and gold</li><li>Rebalancing ideas for your risk profile</li></ul></div>`:"");
  const a=rsAnalyse();
  const inMfd=L.isMfd&&RS.pf.some(h=>h.arn);
  const scope=inMfd?(()=>{const n=k=>RS.pf.filter(h=>k==="both"||(k==="in")===(h.arn===L.arn)).length;return`<div class="rs-seg" role="group" aria-label="Holdings scope">${[["in","In-house"],["held","Heldaway"],["both","Both"]].map(([k,l])=>`<button type="button" class="${P.scope===k?"on":""}" data-act="rs-scope" data-v="${k}">${l} <span class="muted">${n(k)}</span></button>`).join("")}</div>`})():"";
  const S=RS.stmt||{n:1,period:""};
  const who=`<div class="rs-who" data-notr><div><b>${L.isMfd?"Statement analysis":rsE(L.name)}</b><small>${S.n>1?S.n+" statements":"1 statement"}${S.period?" · "+rsE(S.period):""}</small></div>${scope}</div>`;
  if(!a)return head+`<div style="margin-top:16px">${who}<div class="rs-empty"><h3>No holdings in this view</h3><p>Switch between In-house, Heldaway and Both.</p></div></div>`;
  const sc=a.score,scC=sc>=75?"var(--good,#059669)":sc>=55?"#f59e0b":"var(--red,#dc2626)",C=2*Math.PI*62;
  const AL=[["Equity","#2563eb"],["Debt","#16a34a"],["Gold","#f59e0b"],["Cash","#94a3b8"]],maxS=a.top.length?a.top[0][1]:1;
  const tag=h=>!h.arn?"":h.arn==="DIRECT"?'<span class="rs-tag">Direct</span>':L.isMfd&&h.arn===L.arn?`<span class="rs-tag in">In-house</span>`:`<span class="rs-tag">${rsE(h.arn)}</span>`;
  const holdings=a.hs.some(h=>h.name||h.folio)?`<div class="rs-card" style="margin-top:16px"><h3>Holdings</h3><p class="sub">${a.hs.length} schemes in this view.</p><div style="overflow:auto" data-notr><table class="rs-kv"><thead><tr><th>Scheme</th><th>Folio</th><th>Advisor</th><th style="text-align:right">Value</th><th style="text-align:right">Weight</th></tr></thead><tbody>${a.hs.map(h=>`<tr><td><b>${rsE(rsHName(h))}</b><br><small class="muted">${rsE(h.f.cat)}${h.proxy?" (estimated)":""}</small></td><td>${rsE(h.folio||"—")}</td><td>${tag(h)||"—"}</td><td style="text-align:right">${rsInr(h.amt)}</td><td style="text-align:right">${(h.amt/a.tot*100).toFixed(1)}%</td></tr>`).join("")}</tbody></table></div></div>`:"";
  return head+`<div style="margin-top:16px">${who}
    <div class="rs-kpis" data-notr>
      <div class="rs-kpi"><span class="k">Portfolio value</span><b>${rsInrS(a.tot)}</b><small>${a.hs.length} funds · ${a.amcs.length} AMCs</small></div>
      <div class="rs-kpi"><span class="k">Weighted 3Y return</span><b>${rsPct(a.r3)}</b><small>1Y ${a.r1.toFixed(2)}% · 5Y ${a.r5.toFixed(2)}%</small></div>
      <div class="rs-kpi"><span class="k">Avg expense ratio</span><b>${a.er.toFixed(2)}%</b><small>≈ ${rsInr(a.tot*a.er/100)} a year</small></div>
      <div class="rs-kpi"><span class="k">Volatility</span><b>${a.sd.toFixed(1)}%</b><small>Weighted std deviation</small></div>
    </div>
    ${holdings}
    <div class="rs-card" style="margin-top:16px"><h3>Portfolio health score</h3><p class="sub">A simple score from diversification, overlap, cost and risk balance.</p>
      <div class="rs-score"><div class="rs-ring" role="img" aria-label="Health score ${sc} out of 100"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="62" fill="none" stroke="var(--surface-3)" stroke-width="14"/><circle cx="75" cy="75" r="62" fill="none" stroke="${scC}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${C*sc/100} ${C}"/></svg><div class="v" data-notr><b>${sc}</b><small>out of 100</small></div></div>
      <div class="rs-sub">${a.sub.map(([l,v])=>`<div class="r"><span>${l}</span><span class="t"><i style="width:${v}%;background:${v>=75?"var(--good,#059669)":v>=55?"#f59e0b":"var(--red,#dc2626)"}"></i></span><em data-notr>${v}</em></div>`).join("")}</div></div></div>
    <div class="rs-g2">
      <div class="rs-card"><h3>Asset allocation</h3><p class="sub">Look-through mix across all funds.</p><div class="rs-donut">${rsDonut(a.al.map((v,k)=>({v,c:AL[k][1]})))}<div class="rs-leg" data-notr>${AL.map(([l,c],k)=>`<div class="r"><i class="rs-dot" style="background:${c}"></i><span>${l}</span><span><b>${a.al[k].toFixed(1)}%</b><small>${rsInrS(a.tot*a.al[k]/100)}</small></span></div>`).join("")}</div></div>
        <h3 style="margin-top:20px">Equity by market cap</h3><div class="rs-sbar" style="margin-top:10px">${a.cap.map((v,k)=>`<i style="width:${v}%;background:${["#1e3a8a","#7c3aed","#e8590c"][k]}"></i>`).join("")}</div><div class="rs-lg" data-notr>${["Large","Mid","Small"].map((l,k)=>`<span><i style="background:${["#1e3a8a","#7c3aed","#e8590c"][k]}"></i>${l} ${a.cap[k].toFixed(0)}%</span>`).join("")}</div></div>
      <div class="rs-card"><h3>Top stock exposure</h3><p class="sub">What is really owned through these funds (top 10 holdings of each).</p><div data-notr>${a.top.map(([n,v])=>`<div class="rs-hb"><span class="n" title="${rsE(n)}">${rsE(n)}</span><span class="t"><i style="width:${v/maxS*100}%"></i></span><em>${(v/a.tot*100).toFixed(1)}%</em></div>`).join("")||'<p class="muted">No equity holdings.</p>'}</div>
        <h3 style="margin-top:20px">Fund house split</h3><div data-notr>${a.amcs.map(([n,v])=>`<div class="rs-hb"><span class="n">${rsE(n)}</span><span class="t"><i style="width:${v/a.tot*100}%;background:var(--primary,var(--accent))"></i></span><em>${(v/a.tot*100).toFixed(1)}%</em></div>`).join("")}</div></div>
    </div>
    <div class="rs-card" style="margin-top:16px"><h3>Points to review</h3><p class="sub">Observations to discuss with a distributor, not advice.</p><ul class="rs-ins">${a.ins.map(([k,t,d])=>`<li class="${k}"><span class="ic">${k==="good"?"✓":k==="warn"?"!":"i"}</span><span><b>${t}</b>${rsE(d)}</span></li>`).join("")}</ul>
      ${a.pairs.length?`<div style="margin-top:14px"><button type="button" class="btn btn-ghost btn-sm" data-act="rs-povl">Compare overlapping funds ${RS_I.arrow}</button></div>`:""}</div>
    ${rsRebal(a)}
    ${L.isMfd?"":`<div class="rs-cta"><div><b>Talk it through with an expert</b><br><small class="muted">Find an AMFI registered Mutual Fund Distributor near you to review your portfolio.</small></div><button type="button" class="btn btn-o" data-act="go" data-r="distributors">Find a Distributor ${RS_I.arrow}</button></div>`}
  </div>`
}

/* ---------- home band, nav and routing ---------- */

function rsHomeBand(){
  return`<section class="band rs-home"><div class="wrap"><div class="sec-h"><div><h2>Research <em>360</em></h2>${rsByline()}<p class="muted" style="margin:10px 0 0">Screen, compare and check mutual funds with simple tools.</p></div><div class="rs-hr"><button type="button" class="btn btn-ghost" data-act="go" data-r="mf-screener">Open Research ${RS_I.arrow}</button></div></div>
    <div class="rs-hgrid">${RS_TABS.map(t=>`<button type="button" class="rs-hc ${t.cls}" data-act="go" data-r="${t.r}"><span class="i">${t.ic.replace("<svg",'<svg width="22" height="22"')}</span><b>${rsTa()?t.ta:t.en}</b><small>${t.d}</small><span class="go">Open →</span></button>`).join("")}</div></div></section>`
}

function rsMenu(){
  let m=document.getElementById("rs-menu");
  if(!m){m=document.createElement("div");m.id="rs-menu";m.setAttribute("role","menu");document.body.appendChild(m);
    m.addEventListener("mouseenter",()=>clearTimeout(rsMenu.t));m.addEventListener("mouseleave",rsMenuHide)}
  const cur=rsTabRoute();
  m.innerHTML=RS_TABS.map(t=>`<button type="button" role="menuitem" class="${t.cls}${UI.route===t.r?" on":""}" data-act="go" data-r="${t.r}"><span class="i">${t.ic.replace("<svg",'<svg width="20" height="20"')}</span><span><b>${rsTa()?t.ta:t.en}</b><small>${t.d}</small></span></button>`).join("")+`<div class="rs-mpw">${rsPowered()}</div>`;
  return m
}
function rsMenuShow(a){clearTimeout(rsMenu.t);const m=rsMenu(),r=a.getBoundingClientRect();m.style.top=r.bottom+6+"px";m.style.left=Math.max(8,Math.min(innerWidth-338,r.left))+"px";m.classList.add("open")}
function rsMenuHide(){clearTimeout(rsMenu.t);rsMenu.t=setTimeout(()=>{const m=document.getElementById("rs-menu");m&&m.classList.remove("open")},180)}

(function(){
  typeof ROUTES<"u"&&RS_ROUTES.forEach(r=>ROUTES.indexOf(r)<0&&ROUTES.push(r));
  const lbl={research:["Research","ஆய்வு"],"mf-screener":["MF Screener","MF ஸ்கிரீனர்"],"market-signals":["Market Signals","சந்தை சமிக்ஞைகள்"],"mf-compare":["MF Compare","MF ஒப்பீடு"],"portfolio-iq":["Portfolio IQ","போர்ட்ஃபோலியோ IQ"]};
  Object.keys(lbl).forEach(k=>{typeof EN<"u"&&(EN[k]=lbl[k][0]);typeof TA<"u"&&(TA[k]=lbl[k][1])});
  const ph=pageHome;window.pageHome=function(){
    if(RS_ROUTES.includes(UI.route))return pageResearch();
    const h=ph.apply(this,arguments);if(UI.route!=="home"||h.indexOf("rs-home")>=0)return h;
    // Put the Research band just before the closing tools row (SIP calculator, risk profile, distributor).
    const at=h.search(/SIP return calculator/i),i=at>0?h.lastIndexOf("<section",at):-1;return i>0?h.slice(0,i)+rsHomeBand()+h.slice(i):h+rsHomeBand()};
  const nl=navList;window.navList=function(){const n=nl.apply(this,arguments);if(!n.some(x=>x[0]==="research")){const i=n.findIndex(x=>x[0]==="calculator");n.splice(i>=0?i+1:n.length,0,["research","chart"])}return n};
  const rn=renderNav;window.renderNav=function(){const out=rn.apply(this,arguments);
    const a=document.querySelector('#navlinks a[data-r="research"]');
    if(a){RS_ROUTES.includes(UI.route)&&a.classList.add("on");a.setAttribute("aria-haspopup","menu");a.insertAdjacentHTML("beforeend",RS_I.chev);
      a.addEventListener("mouseenter",()=>rsMenuShow(a));a.addEventListener("mouseleave",rsMenuHide);a.addEventListener("focus",()=>rsMenuShow(a))}
    return out};
  const go0=go;window.go=function(r){const m=document.getElementById("rs-menu");m&&m.classList.remove("open");return go0.call(this,r==="research"?"mf-screener":r)};
  const h=(location.hash||"").slice(1);RS_ROUTES.includes(h)&&UI.route!==h&&setTimeout(()=>go(h),0);
  window.addEventListener("hashchange",()=>{const x=location.hash.slice(1);RS_ROUTES.includes(x)&&UI.route!==x&&go(x)});
  try{renderNav()}catch{}
  const r0=render;window.render=function(){const out=r0.apply(this,arguments);try{rsLiveSync()}catch{}return out};
  try{UI.route==="home"&&render()}catch{}
})();

/* ---------- events ---------- */

function rsSetCmp(ids){RS.cmp=ids.slice(0,5);RS.pair=null;rsSave("cmp",RS.cmp)}
function rsSetPf(pf){RS.pf=pf;rsSave("pf",pf)}
function rsRepaintRes(){const r=document.getElementById("rs-res");r&&(r.innerHTML=rsResults())}

document.addEventListener("mouseover",e=>e.target.closest&&e.target.closest(".rs-cw")&&rsHover(e));
document.addEventListener("mousemove",e=>e.target.closest&&e.target.closest(".rs-cw")&&rsHover(e));
document.addEventListener("mouseout",rsHoverOut);
document.addEventListener("scroll",()=>{const m=document.getElementById("rs-menu");m&&m.classList.contains("open")&&m.classList.remove("open")},{passive:!0});

document.addEventListener("input",e=>{
  const t=e.target;if(!t||!t.id&&!t.dataset.fi)return;
  if(t.id==="rsq"){RS.q=t.value;RS.page=1;rsRepaintRes()}
  else if(t.id==="rscq"){RS.cmpQ=t.value;document.getElementById("rs-csug").innerHTML=rsSug(RS.cmpQ,RS.cmp,"rs-cadd")}
  else if(t.dataset.fi){const x=RS.piq.files[+t.dataset.fi];x&&(x.pwd=t.value)}
});
document.addEventListener("change",e=>{
  const t=e.target;if(!t)return;
  if(t.id==="rscat"){RS.cat=t.value;RS.page=1;rsRepaintRes()}
  else if(t.id==="rsamc"){RS.amc=t.value;RS.page=1;rsRepaintRes()}
  else if(t.id==="rsstar"){RS.star=+t.value;RS.page=1;rsRepaintRes()}
  else if(t.dataset&&t.dataset.col){const k=t.dataset.col;RS.cols=t.checked?RS.cols.concat(k):RS.cols.filter(x=>x!==k);rsSave("cols",RS.cols);rsRepaintRes()}
  else if(t.id==="rs-gmfd"){const w=document.getElementById("rs-garnw");w&&(w.hidden=!t.checked)}
  else if(t.id==="rs-cas"&&t.files){rsAddFiles([...t.files]);t.value=""}
});
// Drag CAS PDFs onto the drop zone.
["dragover","dragleave","drop"].forEach(k=>document.addEventListener(k,e=>{
  const z=e.target.closest&&e.target.closest(".rs-drop");if(!z)return;e.preventDefault();
  z.classList.toggle("drag",k==="dragover");
  k==="drop"&&rsAddFiles([...e.dataTransfer.files])
}));

const rsVal$=id=>{const x=document.getElementById(id);return x?x.value.trim():""};
const rsNewId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);

// Repaints the Portfolio IQ panel, then puts typed passwords back (they never go into the HTML).
function rsPaintPiq(){rsPaint();RS.piq.files.forEach((x,i)=>{const el=document.querySelector(`[data-fi="${i}"]`);el&&(el.value=x.pwd||"")})}

function rsAddFiles(list){
  const P=RS.piq,pdfs=list.filter(f=>/pdf$/i.test(f.type)||/\.pdf$/i.test(f.name));
  P.err=pdfs.length<list.length?"Only PDF statements can be added.":"";
  pdfs.forEach(f=>{if(!P.files.some(x=>x.file.name===f.name&&x.file.size===f.size))P.files.push({file:f,pwd:"",ok:!1,err:""})});
  if(P.files.length>RS_MAX_CAS){P.files=P.files.slice(0,RS_MAX_CAS);P.err=`You can upload up to ${RS_MAX_CAS} statements at a time.`}
  rsPaintPiq();
  const first=P.files.findIndex(x=>!x.pwd),el=document.querySelector(`[data-fi="${first}"]`);el&&el.focus()
}

function rsGateSave(){
  const P=RS.piq,isMfd=document.getElementById("rs-gmfd").checked,rawArn=rsVal$("rs-garn");
  const g={name:rsVal$("rs-gname"),pan:rsVal$("rs-gpan").toUpperCase(),email:rsVal$("rs-gmail"),mobile:rsMob10(rsVal$("rs-gmob")),isMfd,arn:rawArn,ok:document.getElementById("rs-gok").checked};
  P.gate=g;
  P.gateErr=g.name.length<2?"Please enter your full name.":!rsOkPan(g.pan)?"Please enter a valid PAN, for example ABCDE1234F.":!rsOkMail(g.email)?"Please enter a valid email address.":!rsOkMob(g.mobile)?"Please enter a valid 10 digit mobile number.":isMfd&&!rsOkArn(rawArn)?"Please enter a valid ARN code, for example ARN-123456.":!g.ok?"Please tick the box to agree before continuing.":"";
  if(P.gateErr){rsPaintPiq();return}
  const prev=RS.lead,lead={id:prev&&prev.pan===g.pan?prev.id:rsNewId(),name:g.name,pan:g.pan,email:g.email,mobile:g.mobile,isMfd,arn:isMfd?rsArnNorm(rawArn):""};
  RS.lead=lead;rsSave("lead",lead);
  rsCapSave("lead",{leadId:lead.id,name:lead.name,pan:lead.pan,email:lead.email,mobile:lead.mobile,isMfd,arn:lead.arn,signedIn:typeof S<"u"&&!!S.signedIn});
  P.gate=null;P.editGate=!1;rsPaintPiq()
}

async function rsCasRunAll(){
  const P=RS.piq;if(!P.files.length||P.busy)return;
  P.busy=!0;P.err="";P.files.forEach(x=>{x.ok=!1;x.err=""});rsPaintPiq();
  const done=[];
  for(const x of P.files){
    try{
      const cas=rsParseCas(await rsCasText(x.file,x.pwd));
      if(!cas.holdings.length)throw new Error("No holdings found. Use a detailed CAS from CAMS or KFintech.");
      x.ok=!0;done.push({cas,file:x.file.name})
    }catch(e){x.err=e.message||"Could not read this statement."}
  }
  P.busy=!1;
  if(P.files.some(x=>x.err)){rsPaintPiq();return}
  rsCasDone(done,!1)
}

// Everything read from the statements goes to the sheet; the visitor sees only the analysis.
function rsCasDone(list,sample){
  const L=RS.lead,P=RS.piq,hold=list.flatMap((s,i)=>rsCasToHoldings(s.cas).map(h=>({...h,stmt:i+1})));
  rsCapSave("cas",{leadId:L.id,name:L.name,pan:L.pan,email:L.email,mobile:L.mobile,isMfd:L.isMfd,arn:L.arn,sample,
    statements:list.map((s,i)=>({n:i+1,file:s.file,name:s.cas.name,pans:s.cas.pans,email:s.cas.email,mobile:s.cas.mobile,address:s.cas.address,period:s.cas.period,rta:s.cas.rta,holdings:s.cas.holdings})),
    arns:[...new Set(list.flatMap(s=>s.cas.holdings.map(h=>h.arn)).filter(a=>/^ARN-/.test(a)))],
    funds:hold.length,value:Math.round(hold.reduce((x,h)=>x+h.amt,0))});
  RS.stmt={n:list.length,period:(list.find(s=>s.cas.period)||{cas:{}}).cas.period||""};rsSave("stmt",RS.stmt);
  rsSetPf(hold);P.files=[];P.addMore=!1;P.scope="both";rsPaintPiq();
  const k=document.querySelector(".rs-kpis");k&&k.scrollIntoView({behavior:"smooth",block:"center"})
}

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){RS.colsOpen&&(RS.colsOpen=!1,rsRepaintRes());["rs-csug"].forEach(id=>{const x=document.getElementById(id);x&&(x.innerHTML="")})}
  if(e.key==="Enter"&&e.target&&e.target.id==="rscq"){const b=document.querySelector(`#rs-csug button`);b&&(e.preventDefault(),b.click())}
});
document.addEventListener("click",e=>{
  const t=e.target.closest&&e.target.closest("[data-act]");
  if(RS.colsOpen&&!e.target.closest(".rs-cols")&&!(t&&t.dataset.act==="rs-colsbtn")){RS.colsOpen=!1;rsRepaintRes()}
  if(!t||t.dataset.act.slice(0,3)!=="rs-")return;
  const a=t.dataset.act,v=t.dataset.v;
  if(a==="rs-cls"){RS.cls=v;RS.cat="";RS.page=1;rsPaint()}
  else if(a==="rs-pre"){RS.pre=RS.pre===v?"":v;RS.page=1;rsPaint()}
  else if(a==="rs-reset"){Object.assign(RS,{q:"",cls:"",cat:"",amc:"",star:0,pre:"",page:1});rsPaint()}
  else if(a==="rs-sort"){RS.sort=RS.sort.k===v?{k:v,dir:-RS.sort.dir}:{k:v,dir:v==="name"||v==="cat"||v==="er"||v==="sd"?1:-1};rsRepaintRes()}
  else if(a==="rs-page"){RS.page=+v;rsRepaintRes();document.getElementById("rs-res").scrollIntoView({behavior:"smooth",block:"start"})}
  else if(a==="rs-colsbtn"){RS.colsOpen=!RS.colsOpen;rsRepaintRes()}
  else if(a==="rs-csv")rsCsv();
  else if(a==="rs-cmp"){const has=RS.cmp.includes(v);if(!has&&RS.cmp.length>=5){typeof toast=="function"&&toast("You can compare up to 5 funds");return}rsSetCmp(has?RS.cmp.filter(x=>x!==v):RS.cmp.concat(v));UI.route==="mf-compare"?rsPaint():rsRepaintRes()}
  else if(a==="rs-cadd"){rsSetCmp(RS.cmp.concat(v));RS.cmpQ="";rsPaint();const i=document.getElementById("rscq");i&&!i.disabled&&i.focus()}
  else if(a==="rs-cclear"){rsSetCmp([]);rsPaint()}
  else if(a==="rs-quick"){rsSetCmp(RS_QUICK[+v].ids);rsPaint()}
  else if(a==="rs-pair"){RS.pair=v.split(",").map(Number);rsPaint()}
  else if(a==="rs-view"||a==="rs-rng"){RS.sig[t.dataset.ch][a==="rs-view"?"view":"rng"]=v;rsPaint()}
  else if(a==="rs-liveretry")rsLiveLoad();
  else if(a==="rs-gate")rsGateSave();
  else if(a==="rs-gateedit"){RS.piq.editGate=!0;RS.piq.gate=null;RS.piq.gateErr="";rsPaintPiq()}
  else if(a==="rs-gatecancel"){RS.piq.editGate=!1;RS.piq.gateErr="";rsPaintPiq()}
  else if(a==="rs-help"){RS.piq.help=!RS.piq.help;rsPaintPiq();const h=document.getElementById("rs-cash");h&&h.scrollIntoView({behavior:"smooth",block:"nearest"})}
  else if(a==="rs-helpmail"){const L=RS.lead;rsCapSave("casreq",{leadId:L.id,name:L.name,pan:L.pan,email:L.email,mobile:L.mobile,isMfd:L.isMfd,arn:L.arn});RS.piq.helpSent=!0;rsPaintPiq()}
  else if(a==="rs-frm"){RS.piq.files.splice(+v,1);RS.piq.err="";rsPaintPiq()}
  else if(a==="rs-casgo")rsCasRunAll();
  else if(a==="rs-cassample")rsCasDone([{cas:rsParseCas(RS_SAMPLE_CAS),file:"sample-cas.pdf"}],!0);
  else if(a==="rs-addmore"){RS.piq.addMore=!0;rsPaintPiq()}
  else if(a==="rs-addcancel"){RS.piq.addMore=!1;RS.piq.files=[];RS.piq.err="";rsPaintPiq()}
  else if(a==="rs-scope"){RS.piq.scope=v;rsPaint()}
  else if(a==="rs-prof"){RS.piq.prof=v;rsPaint()}
  else if(a==="rs-povl"){const r=rsAnalyse();if(r&&r.pairs.length){const ids=[...new Set(r.pairs.flatMap(p=>[p[0].id,p[1].id]))];rsSetCmp(ids);go("mf-compare")}}
});
