
// --- r8 NP aid driven critical-event bullet resolver + collapsible board state ---
state.boardStateUi = state.boardStateUi || { collapsed: !!state.boardState };

const NP_AID_GENERAL_PRINCIPLES = [
  'Place, move, or remove the maximum number of pieces possible.',
  'If given a choice, NP Community prioritizes forming a Social Coalition, NP Private an Economic Coalition, and NP Public whichever Coalition there are fewest of.',
  'Always Activate Coalition partners to remove additional Vulnerabilities if possible.',
  'Remove Active Organizations before Inactive Organizations.',
  'Activate or remove Organizations before placing Vulnerabilities.',
  'Activate an Organization before removing an Organization, if possible.',
  'Move or remove unhoused Population and unhoused Vulnerabilities first.',
  'Once a District has been selected, place Population on the acting Faction\'s Infrastructure first, then Public, Community, Private.',
  'Place Grants or Loans with the acting Faction\'s Organization first, then Public, Community, Private.',
  'Once a District has been selected, remove Population from the acting Faction\'s Infrastructure last, in this order: Private, Community, Public.'
];

const EVENT_PRIORITY_MAP = {
  infrastructure_place_public: { kind: 'single', column: 'replace_or_place_infrastructure', label: 'Place / Replace Infrastructure', mode: 'target' },
  infrastructure_replace: { kind: 'single', column: 'replace_or_place_infrastructure', label: 'Place / Replace Infrastructure', mode: 'target' },
  infrastructure_exhaust: { kind: 'single', column: 'exhaust_infrastructure', label: 'Exhaust Infrastructure', mode: 'remove' },
  population_add: { kind: 'single', column: 'place_population', label: 'Place Population', mode: 'target' },
  population_remove: { kind: 'single', column: 'remove_population', label: 'Remove Population', mode: 'remove' },
  population_move: { kind: 'move', destinationColumn: 'place_population', destinationLabel: 'Place Population', originColumn: 'remove_population', originLabel: 'Remove Population' },
  vulnerability_add: { kind: 'single', column: 'place_vulnerability', label: 'Place Vulnerability', mode: 'target' },
  vulnerability_remove: { kind: 'single', column: 'remove_vulnerability', label: 'Remove Vulnerability', mode: 'remove' },
  vulnerability_move: { kind: 'move', destinationColumn: 'place_vulnerability', destinationLabel: 'Place Vulnerability', originColumn: 'remove_vulnerability', originLabel: 'Remove Vulnerability' },
  organization_place: { kind: 'single', column: 'place_replace_refresh_organization', label: 'Place / Replace / Refresh Organization', mode: 'target' },
  organization_replace: { kind: 'single', column: 'place_replace_refresh_organization', label: 'Place / Replace / Refresh Organization', mode: 'target' },
  organization_remove: { kind: 'single', column: 'remove_or_activate_organization', label: 'Remove / Activate Organization', mode: 'remove' },
  organization_activate: { kind: 'single', column: 'remove_or_activate_organization', label: 'Remove / Activate Organization', mode: 'remove' },
  markers_shift: { kind: 'single', column: 'place_grant_or_loan', label: 'Place Grant / Loan', mode: 'target' },
  phase_quota: { kind: 'none' },
  resources_delta: { kind: 'none' },
  generic_manual: { kind: 'manual' }
};

function toggleBoardStateCollapsed(){
  state.boardStateUi = state.boardStateUi || { collapsed: false };
  state.boardStateUi.collapsed = !state.boardStateUi.collapsed;
  render();
}

const __oldLoadBoardSetupPreset_r8 = loadBoardSetupPreset;
loadBoardSetupPreset = function(key){
  __oldLoadBoardSetupPreset_r8(key);
  state.boardStateUi = state.boardStateUi || { collapsed: false };
  state.boardStateUi.collapsed = true;
};

function boardStateSummaryHtmlR8(){
  ensureBoardState();
  state.boardStateUi = state.boardStateUi || { collapsed: false };
  if(!state.boardState) return `<div class="panel"><div style="font-weight:700;margin-bottom:8px">Board setup</div><div class="muted" style="margin-bottom:10px">Load a decade setup to initialize assisted state tracking before round 1.</div><div class="grid2">${btn('Load 1940 setup', "loadBoardSetupPreset('1940')", 'primary')}${btn('Load 1950 setup', "loadBoardSetupPreset('1950')", 'primary')}</div></div>`;
  const bs = state.boardState;
  const collapsed = !!state.boardStateUi.collapsed;
  const header = `<div class="row" style="margin-bottom:10px"><div><div style="font-weight:700">${bs.label}</div><div class="small">Deck ${bs.deck} • round ${state.roundTracker.round}</div></div><span class="badge">Loaded</span></div>`;
  const topSummary = `<div class="small" style="margin-bottom:10px">Resources — PUB ${bs.resources.public}, COM ${bs.resources.community}, PRI ${bs.resources.private} • Losses ${bs.losses} • Tax ${bs.taxRate} • Corrections ${bs.corrections}</div>`;
  const controls = `<div class="grid2" style="margin-bottom:10px">${btn(collapsed ? 'Expand board state' : 'Minimize board state', 'toggleBoardStateCollapsed()')}${btn('Reload 1940 / 1950', "state.boardStateUi.collapsed=false; render()")}</div>`;
  if(collapsed){
    return `<div class="panel">${header}${topSummary}${controls}<div class="muted">Board state hidden. Expand when you need the district-by-district setup.</div></div>`;
  }
  const districtRows = Object.entries(bs.districts).map(([d, info]) => {
    const infraText = info.infrastructures.map((inf, idx) => {
      const orgs = (inf.organizations||[]).map(o => `${factions[o.faction].short}${o.loan ? ' loan' : ''}${o.grant ? ' grant' : ''}`).join(', ');
      return `• ${idx+1}: ${factions[inf.faction].short} infra — P${inf.population} V${inf.vulnerability}${orgs ? ` • ${orgs}` : ''}${inf.coalition ? ` • ${inf.coalition}` : ''}`;
    }).join('<br>');
    return `<div class="panel" style="font-size:13px"><div style="font-weight:700;margin-bottom:6px">District ${d}</div>${infraText}<div class="small" style="margin-top:6px">Unhoused: P${info.unhoused.population || 0} / V${info.unhoused.vulnerability || 0}</div></div>`;
  }).join('');
  return `<div class="panel">${header}${topSummary}<div class="small" style="margin-bottom:10px">Faction area — PUB loans ${bs.factionArea.public.loans}, COM loans ${bs.factionArea.community.loans}, PRI loans ${bs.factionArea.private.loans}</div><div class="grid2" style="margin-bottom:10px">${btn('Minimize board state', 'toggleBoardStateCollapsed()')}${btn('Load 1940 setup', "loadBoardSetupPreset('1940')")}${btn('Load 1950 setup', "loadBoardSetupPreset('1950')")}</div><div class="grid2">${districtRows}</div></div>`;
}

function ensureEventPriorityState(){
  ensureEventProtocolR7();
  state.eventProtocol.stepPriority = state.eventProtocol.stepPriority || {};
  state.eventProtocol.stepDistricts = state.eventProtocol.stepDistricts || {};
  state.eventProtocol.stepNotes = state.eventProtocol.stepNotes || {};
}

function getEventPriorityConfig(idx, resolverId){
  const map = EVENT_PRIORITY_MAP[resolverId] || EVENT_PRIORITY_MAP.generic_manual;
  const base = { kind: map.kind || 'manual' };
  if(map.kind === 'single') return { ...base, phase: 'single', column: map.column, label: map.label, mode: map.mode || 'target' };
  if(map.kind === 'move') return { ...base, phase: 'destination', column: map.destinationColumn, label: map.destinationLabel, mode: 'target', nextColumn: map.originColumn, nextLabel: map.originLabel };
  return base;
}

function ensureStepPriority(idx){
  ensureEventPriorityState();
  const key = String(idx);
  const resolverId = state.eventProtocol.stepResolver[key] || 'generic_manual';
  const existing = state.eventProtocol.stepPriority[key];
  const config = getEventPriorityConfig(idx, resolverId);
  if(existing && existing._resolverId === resolverId) return existing;
  const obj = { _resolverId: resolverId, kind: config.kind, phase: config.phase || 'single', column: config.column || null, label: config.label || '', mode: config.mode || 'target', pool: [...DISTRICTS], selected: [], winner: null, destinationWinner: null, originWinner: null, nextColumn: config.nextColumn || null, nextLabel: config.nextLabel || null };
  state.eventProtocol.stepPriority[key] = obj;
  return obj;
}

function resetEventStepPriority(idx){
  ensureEventPriorityState();
  delete state.eventProtocol.stepPriority[String(idx)];
  const pr = ensureStepPriority(idx);
  delete state.eventProtocol.stepDistricts[String(idx)];
  render();
}

const __oldSetEventStepResolver_r8 = setEventStepResolver;
setEventStepResolver = function(idx, resolverId){
  __oldSetEventStepResolver_r8(idx, resolverId);
  resetEventStepPriority(idx);
};

function eventPriorityBullets(columnKey){
  return (priorityColumns[columnKey] && priorityColumns[columnKey].bullets) ? priorityColumns[columnKey].bullets : ['Player selection from remaining spaces'];
}
function currentPriorityBulletText(pr){
  const bullets = eventPriorityBullets(pr.column);
  return bullets[Math.min(pr.bulletIndex || 0, bullets.length - 1)] || 'Player selection from remaining spaces';
}
function toggleEventPriorityMatch(idx, district){
  const pr = ensureStepPriority(idx);
  if(!(pr.pool || []).includes(district)) return;
  const set = new Set(pr.selected || []);
  if(set.has(district)) set.delete(district); else set.add(district);
  pr.selected = DISTRICTS.filter(d => set.has(d));
  render();
}
function chooseEventPriorityWinner(idx, district){
  const pr = ensureStepPriority(idx);
  if(!(pr.pool || []).includes(district)) return;
  pr.winner = district;
  if(pr.kind === 'move'){
    if(pr.phase === 'destination'){
      pr.destinationWinner = district;
      pr.phase = 'origin';
      pr.column = pr.nextColumn;
      pr.label = pr.nextLabel;
      pr.mode = 'remove';
      pr.pool = [...DISTRICTS];
      pr.selected = [];
      pr.winner = null;
    } else {
      pr.originWinner = district;
      state.eventProtocol.stepDistricts[String(idx)] = pr.destinationWinner ? [pr.destinationWinner] : [district];
      const prev = state.eventProtocol.stepNotes[String(idx)] || '';
      if(pr.destinationWinner){
        const sourceNote = `Source district: ${district}. Destination district: ${pr.destinationWinner}.`;
        state.eventProtocol.stepNotes[String(idx)] = prev && !prev.includes('Source district:') ? `${sourceNote} ${prev}` : (prev || sourceNote);
      }
    }
  } else {
    state.eventProtocol.stepDistricts[String(idx)] = [district];
  }
  render();
}
function confirmEventPriorityBullet(idx){
  const pr = ensureStepPriority(idx);
  const bullets = eventPriorityBullets(pr.column);
  const selected = [...(pr.selected || [])];
  const currentPool = [...(pr.pool || DISTRICTS)];
  const survivors = selected.length ? selected : currentPool;
  if(survivors.length === 1){
    chooseEventPriorityWinner(idx, survivors[0]);
    return;
  }
  const nextIndex = (pr.bulletIndex || 0) + 1;
  pr.pool = survivors;
  pr.selected = [];
  pr.bulletIndex = nextIndex;
  if(nextIndex >= bullets.length){
    render();
    return;
  }
  render();
}
function eventPriorityStateComplete(pr){
  if(pr.kind === 'move') return !!(pr.destinationWinner && pr.originWinner);
  return !!pr.winner;
}
function eventPriorityHint(pr){
  if(pr.kind === 'move'){
    if(pr.phase === 'destination') return 'For movement, use Place X for destination and Remove X for origin.';
    return 'Destination resolved. Now use the matching Remove column to choose the origin district.';
  }
  return 'Use the NP General Priorities chart bullet by bullet. Select the districts that match the current bullet among the remaining candidates.';
}

const __oldRender_r8 = render;
render = function(){
  const app = document.getElementById('app');
  if(state.screen === 'dashboard'){
    // rebuild dashboard only to replace board summary block
    const criticalLabel = state.roundTracker.critical === null ? 'Unchecked' : (state.roundTracker.critical ? 'Critical' : 'Not critical');
    app.innerHTML = `
      <div class="card">
        <div class="row" style="margin-bottom:12px;align-items:flex-start">
          <div><div class="small">Round controls</div><div style="font-size:22px;font-weight:800">Round ${state.roundTracker.round} / ${state.roundTracker.max}</div></div>
          <span class="badge">${esc(criticalLabel)}</span>
        </div>
        <div class="panel" style="margin-bottom:12px"><div><b>Current round event:</b> ${esc(criticalLabel)}</div><div class="muted" style="margin-top:6px">If critical, NP EVENT opens the step-by-step critical event wizard.</div></div>
        <div class="grid2">${btn(state.roundTracker.critical === null ? 'Round start: critical event?' : 'Edit round critical check', "state.screen='round_gate'; render()", 'primary')}${btn(state.roundTracker.round === state.roundTracker.max ? 'End round 8 → Census' : `End round ${state.roundTracker.round} → next round`, 'advanceRound()')}</div>
      </div>
      ${boardStateSummaryHtmlR8()}
      <div class="card"><div class="small">You are playing</div><div class="row"><div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div>${pill(factions[state.playerFaction].short, state.playerFaction)}</div></div>
      ${npFactions().map(f=>{ const card=cards[f].find(c=>c.id===state.npCards[f]); return `<div class="card"><div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ''}` : 'No Position card selected'}</div></div>${pill(factions[f].short,f)}</div><div class="grid2">${btn('Take NP turn',`startResolver('${f}')`, card ? 'primary':'')}${btn('Change card',`state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div></div>`; }).join('')}
      <div class="card"><div class="row" style="margin-bottom:12px"><div><div style="font-size:18px;font-weight:700">Assisted state log</div><div class="muted">Record what actually changed on the board.</div></div><span class="badge">${state.actionLog.length}</span></div><div class="grid2" style="margin-bottom:12px">${btn('Log completed action','openActionLogger()','primary')}${btn('Save / load state',"state.screen='save_load'; render()")}</div>${state.actionLog.length ? state.actionLog.slice(0,5).map(item=>`<div class="panel" style="margin-top:8px"><div style="font-weight:700">${esc(item.title || `${(item.faction||'').toUpperCase()} ${item.mode}`)}</div><div class="small">${esc(item.body || '')}</div></div>`).join('') : '<div class="muted">No actions logged yet.</div>'}</div>`;
    return;
  }
  if(state.screen === 'event_protocol' && state.eventProtocol && state.eventProtocol.fromResolver && state.roundTracker && state.roundTracker.critical === true){
    ensureEventProtocolR7();
    ensureEventPriorityState();
    const ep = state.eventProtocol;
    const preset = getEventPreset();
    const cardButtons = ['1940s','1950s'].includes(ep.decade)
      ? Object.entries(EVENT_DECKS[ep.decade] || {}).filter(([,card])=>eventCardIsCritical(card)).map(([key, card])=>`<button class="btn ${ep.cardKey===key?'selected':''}" onclick="chooseEventCardPreset('${key}')"><div style="font-weight:700">${key} • ${esc(card.title)}</div><div class="small">${card.year}</div></button>`).join('')
      : '';
    if(!preset){
      app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div><div style="font-size:22px;font-weight:800;margin-bottom:12px">Choose critical event card</div><div class="panel" style="margin-bottom:14px">Only cards marked critical are shown here. NP Event resolution uses the NP General Principles and NP General Priorities chart for any decisions that are required. fileciteturn9file0</div><div class="grid2" style="margin-bottom:14px">${btn('1940s critical cards', "setEventDecade('1940s')", ep.decade==='1940s' ? 'primary' : '')}${btn('1950s critical cards', "setEventDecade('1950s')", ep.decade==='1950s' ? 'primary' : '')}</div><div class="grid2" style="margin-bottom:14px">${cardButtons || '<div class="muted">No critical cards loaded for this deck.</div>'}</div>${btn('Back to mode selection', "state.screen='mode'; render()")}</div>`;
      return;
    }
    const idx = Math.max(0, Math.min(ep.currentStep || 0, preset.steps.length - 1));
    const step = preset.steps[idx];
    const key = String(idx);
    const resolver = getResolverForStep(idx, step);
    const stepChanges = (ep.stepChanges||{})[key] || {population:false,vulnerability:false,organization:false,infrastructure:false,markers:false,resources:false};
    const pr = ensureStepPriority(idx);
    const needsPriority = !ep.stepManual[key] && (pr.kind === 'single' || pr.kind === 'move');
    const bullets = pr.column ? eventPriorityBullets(pr.column) : [];
    const bulletIndex = Math.min(pr.bulletIndex || 0, Math.max(0, bullets.length - 1));
    const currentBullet = bullets[bulletIndex] || 'Player selection from remaining spaces';
    const pool = pr.pool || [...DISTRICTS];
    const selected = pr.selected || [];
    const completed = eventPriorityStateComplete(pr);
    const summaryBits = [];
    if(pr.destinationWinner) summaryBits.push(`Destination D${pr.destinationWinner}`);
    if(pr.originWinner) summaryBits.push(`Origin D${pr.originWinner}`);
    if(pr.winner && pr.kind !== 'move') summaryBits.push(`Winner D${pr.winner}`);
    const directDistricts = (((ep.stepDistricts||{})[key]||[]));
    app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • step ${idx+1} of ${preset.steps.length}</div><div style="font-size:22px;font-weight:800;margin-bottom:8px">${esc(ep.card || `${ep.cardKey} • ${preset.title}`)}</div><div class="small" style="margin-bottom:14px">${preset.year} • Order ${preset.order.map(f=>factions[f].short).join(' → ')}</div><div class="panel" style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Current effect</div><div style="font-size:18px;font-weight:700;margin-bottom:8px">${esc(step.text)}</div>${resolver.prompts.map(p=>`<div class="small" style="margin-top:4px">• ${esc(p)}</div>`).join('')}</div><div class="card" style="padding:14px;margin-bottom:14px"><div class="row" style="margin-bottom:8px"><div style="font-weight:700">Resolver</div><span class="badge">${esc(resolver.label)}</span></div><div class="grid2">${Object.values(EVENT_EFFECT_RESOLVERS).map(r=>btn(r.label, `setEventStepResolver(${idx}, '${r.id}')`, resolver.id===r.id ? 'primary' : '')).join('')}</div><div class="grid2" style="margin-top:10px">${btn((ep.stepManual||{})[key] ? 'Manual override on' : 'Use resolver as written', `toggleEventStepManual(${idx})`, (ep.stepManual||{})[key] ? 'primary' : '')}${btn('Reset this step priority', `resetEventStepPriority(${idx})`)}</div>${needsPriority ? `<div class="panel" style="margin-top:12px"><div style="font-weight:700">${esc(pr.kind === 'move' ? (pr.phase === 'destination' ? 'Destination district' : 'Origin district') : 'District priority walk')}${summaryBits.length ? ` • ${summaryBits.join(' • ')}` : ''}</div><div class="small" style="margin-top:6px">Column: <b>${esc(priorityColumns[pr.column]?.title || pr.label)}</b></div><div class="small" style="margin-top:6px">${esc(eventPriorityHint(pr))}</div><div class="small" style="margin-top:6px">Current bullet ${Math.min((pr.bulletIndex||0)+1, bullets.length)} of ${bullets.length}: <b>${esc(currentBullet)}</b></div><div class="small" style="margin-top:6px">Remaining candidates: ${pool.map(d=>`D${d}`).join(', ') || 'none'}</div><div class="grid4" style="margin-top:10px">${pool.map(d=>`<button class="btn ${selected.includes(d)?'selected':''}" onclick="toggleEventPriorityMatch(${idx}, '${d}')">${d}</button>`).join('')}</div><div class="grid2" style="margin-top:10px">${btn(selected.length ? `Use ${selected.length} selected as matches` : 'No matches on this bullet', `confirmEventPriorityBullet(${idx})`, 'primary')}</div><div class="small" style="margin-top:10px">NP General Principles: move/remove unhoused pieces first; place own pieces first when there is a choice; for movement use Place X for destination and Remove X for origin. fileciteturn9file0</div></div>` : `<div class="panel" style="margin-top:12px">${ep.stepManual[key] ? 'Manual override is on. Pick districts directly and describe the result.' : 'This resolver does not use the NP district priority chart.'}</div><div class="grid4" style="margin-top:10px">${DISTRICTS.map(d=>`<button class="btn ${directDistricts.includes(d)?'selected':''}" onclick="toggleEventStepDistrict(${idx}, '${d}')">${d}</button>`).join('')}</div>`}<div class="small" style="margin-top:12px">Board changes for this step</div><div class="grid2" style="margin-top:8px">${[['population','Population'],['vulnerability','Vulnerability'],['organization','Organization'],['infrastructure','Infrastructure'],['markers','Markers'],['resources','Resources']].map(([ck,cl])=>btn(cl, `toggleEventStepChange(${idx}, '${ck}')`, stepChanges[ck] ? 'primary' : '')).join('')}</div><textarea oninput="updateEventStepNote(${idx}, this.value)" style="width:100%;min-height:90px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit;margin-top:10px" placeholder="${esc(resolver.noteHint)}">${esc(((ep.stepNotes||{})[key] || ''))}</textarea></div><div class="grid2">${btn(idx === 0 ? 'Back to card picker' : 'Previous step', 'prevCriticalEventStep()')}${btn(idx === preset.steps.length - 1 ? 'Finish critical event' : 'Next step', 'nextCriticalEventStep()', 'primary')}</div></div>`;
    return;
  }
  __oldRender_r8();
};

window.toggleBoardStateCollapsed = toggleBoardStateCollapsed;
window.boardStateSummaryHtml = boardStateSummaryHtmlR8;
window.toggleEventPriorityMatch = toggleEventPriorityMatch;
window.confirmEventPriorityBullet = confirmEventPriorityBullet;
window.chooseEventPriorityWinner = chooseEventPriorityWinner;
window.resetEventStepPriority = resetEventStepPriority;
window.loadBoardSetupPreset = loadBoardSetupPreset;
window.setEventStepResolver = setEventStepResolver;
window.render = render;
