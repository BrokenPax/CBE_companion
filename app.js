const factions = {
  public: { label: 'Public', short: 'PUB', pill: 'blue' },
  community: { label: 'Community', short: 'COM', pill: 'green' },
  private: { label: 'Private', short: 'PRI', pill: 'amber' },
};

const cards = {
  public: [
    { id:'public_comptroller', name:'Comptroller', objective:'Balanced Budget', goal:1, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population' },
      { index:2, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'HOUSE', instruction:'Place Infrastructure where Public Infrastructure' },
      { index:3, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
      { index:4, condition:'No District with three Infrastructure', questionId:'q_no_district_with_three_infrastructure', action:'HOUSE', instruction:'Place Infrastructure' },
    ]},
    { id:'public_builder', name:'Builder', objective:'Social Work', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population only to fill Infrastructure' },
      { index:2, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'SERVICE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
      { index:4, condition:'More than 3 Resources', questionId:'q_resources_gt_public_3', action:'SERVICE', instruction:'Place Organization' },
    ]},
    { id:'public_paternal', name:'Paternal', objective:'Balanced Budget', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population' },
      { index:2, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'SERVICE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'No District with two Public Infrastructure', questionId:'q_no_district_with_two_public_infrastructure', action:'HOUSE', instruction:'Place Infrastructure' },
      { index:4, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
    ]},
    { id:'public_committed', name:'Committed', objective:'Social Work', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population' },
      { index:2, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
      { index:3, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'SERVICE', instruction:'Activate to remove Blight then Remove Vulnerabilities' },
      { index:4, condition:'Social ≠ Economic Coalitions', questionId:'q_social_not_equal_economic', action:'SERVICE', instruction:'Place Organizations only to equalize Socio-Economic' },
    ]},
    { id:'public_shepherd', name:'Shepherd', objective:'Quality of Life', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population only to fill Infrastructure' },
      { index:2, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'SERVICE', instruction:'Activate to remove Blight then Remove Vulnerabilities' },
      { index:3, condition:'Exhausted Infrastructure', questionId:'q_any_exhausted_infrastructure', action:'HOUSE', instruction:'Replace Infrastructure' },
      { index:4, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
    ]},
    { id:'public_workhorse', name:'Workhorse', objective:'Public Relations', goal:3, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population' },
      { index:2, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
      { index:3, condition:'Social ≠ Economic Coalitions', questionId:'q_social_not_equal_economic', action:'SERVICE', instruction:'Place Organizations only to equalize Socio-Economic' },
      { index:4, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'SERVICE', instruction:'Activate to remove Blight then Remove Vulnerabilities' },
    ]},
    { id:'public_provider', name:'Provider', objective:'Quality of Life', goal:1, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population only to fill Infrastructure' },
      { index:2, condition:'Unfilled Public Infrastructure', questionId:'q_any_unfilled_public_infrastructure', action:'RELOCATE', instruction:'Only to fill Public Infrastructure' },
      { index:3, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'SERVICE', instruction:'Activate to Remove Vulnerabilities' },
      { index:4, condition:'Exhausted Infrastructure', questionId:'q_any_exhausted_infrastructure', action:'HOUSE', instruction:'Replace Infrastructure' },
    ]},
    { id:'public_responsible', name:'Responsible', objective:'Public Relations', goal:1, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_public_2', action:'BUDGET', instruction:'Place Population only to fill Infrastructure' },
      { index:2, condition:'Inactive Public Organizations', questionId:'q_any_inactive_public_organizations', action:'SERVICE', instruction:'Activate to remove Blight then Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'SERVICE', instruction:'Place Organizations' },
      { index:4, condition:'No District with two Public Infrastructure', questionId:'q_no_district_with_two_public_infrastructure', action:'HOUSE', instruction:'Place Infrastructure where Public Infrastructure' },
    ]},
  ],
  community: [
    { id:'community_activist', name:'Activist', objective:'People Power', goal:3, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'MOBILIZE', instruction:'Only to house Population' },
      { index:3, condition:'Less than two Districts with more Social than Economic Coalitions', questionId:'q_less_than_two_districts_social_gt_economic', action:'ORGANIZE', instruction:'Place Organizations to form Social Coalitions first' },
      { index:4, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
    ]},
    { id:'community_accountable', name:'Accountable', objective:'People Power', goal:3, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'MOBILIZE', instruction:'Only to house Population' },
      { index:3, condition:'District with less than two Infrastructure', questionId:'q_any_district_with_less_than_two_infrastructure', action:'BUILD', instruction:'Place Infrastructure' },
      { index:4, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
    ]},
    { id:'community_leader', name:'Leader', objective:'Rehabilitation', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'BUILD', instruction:'Place Organizations' },
      { index:4, condition:'Unfilled Community Infrastructure', questionId:'q_any_unfilled_community_infrastructure', action:'MOBILIZE', instruction:'Only to fill Community Infrastructure' },
    ]},
    { id:'community_dedicated', name:'Dedicated', objective:'Rehabilitation', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'MOBILIZE', instruction:'Only to house Population' },
      { index:3, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
      { index:4, condition:'Less than two Districts with more Social than Economic Coalitions', questionId:'q_less_than_two_districts_social_gt_economic', action:'ORGANIZE', instruction:'Place Organizations to form Social Coalitions first' },
    ]},
    { id:'community_organizer', name:'Organizer', objective:'Social Movement', goal:1, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unfilled Community Infrastructure', questionId:'q_any_unfilled_community_infrastructure', action:'MOBILIZE', instruction:'Only to fill Community Infrastructure' },
      { index:4, condition:'District with less than two Infrastructure', questionId:'q_any_district_with_less_than_two_infrastructure', action:'BUILD', instruction:'Place Infrastructure' },
    ]},
    { id:'community_determined', name:'Determined', objective:'Grassroots', goal:1, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Organization in an Economic Coalition', questionId:'q_any_org_in_economic_coalition', action:'MOBILIZE', instruction:'Only to break Economic Coalitions' },
      { index:3, condition:'Less than two Districts with more Social than Economic Coalitions', questionId:'q_less_than_two_districts_social_gt_economic', action:'ORGANIZE', instruction:'Place Organizations to form Social Coalitions first' },
      { index:4, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'BUILD', instruction:'Place Infrastructure' },
    ]},
    { id:'community_collaborator', name:'Collaborator', objective:'Social Movement', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Activists ≤ Employees', questionId:'q_activists_lte_employees', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Population', questionId:'q_any_unhoused_population', action:'MOBILIZE', instruction:'Only to house Population' },
      { index:4, condition:'Less than two Districts with more Social than Economic Coalitions', questionId:'q_less_than_two_districts_social_gt_economic', action:'ORGANIZE', instruction:'Place Organizations to form Social Coalitions first' },
    ]},
    { id:'community_independent', name:'Independent', objective:'Grassroots', goal:2, rows:[
      { index:1, condition:'Less than 2 resources', questionId:'q_resources_lt_community_2', action:'FUNDRAISE', instruction:'Community Infrastructure where fewest Vulnerabilities' },
      { index:2, condition:'Activists ≤ Employees', questionId:'q_activists_lte_employees', action:'ORGANIZE', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'District with less than two Infrastructure', questionId:'q_any_district_with_less_than_two_infrastructure', action:'BUILD', instruction:'Place Infrastructure' },
      { index:4, condition:'Any Public Organization in an Economic Coalition', questionId:'q_any_public_org_in_economic_coalition', action:'MOBILIZE', instruction:'Only to break Economic Coalitions' },
    ]},
  ],
  private: [
    { id:'private_lender', name:'Lender', objective:'Recurring Revenue', goal:2, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Population in District with Private Infrastructure', questionId:'q_any_unhoused_population_in_district_with_private_infrastructure', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:4, condition:'Available Loans', questionId:'q_any_available_loans', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
    ]},
    { id:'private_employer', name:'Employer', objective:'Workforce', goal:3, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities adjacent available Infrastructure', questionId:'q_any_unhoused_vulnerabilities_adjacent_available_infrastructure', action:'PAY OFF', instruction:'Only to house Vulnerabilities' },
      { index:3, condition:'Fewer Economic Coalitions than Social Coalitions', questionId:'q_fewer_economic_than_social', action:'INVEST', instruction:'Place Organizations to form Economic Coalitions first' },
      { index:4, condition:'Employees ≤ Cases', questionId:'q_employees_lte_cases', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
    ]},
    { id:'private_buyer', name:'Buyer', objective:'Laissez-Faire', goal:2, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Fewer Economic Coalitions than Social Coalitions', questionId:'q_fewer_economic_than_social', action:'INVEST', instruction:'Place Organizations to form Economic Coalitions first' },
      { index:4, condition:'Exhausted Infrastructure', questionId:'q_any_exhausted_infrastructure', action:'DEVELOP', instruction:'Replace Infrastructure' },
    ]},
    { id:'private_investor', name:'Investor', objective:'Trickle Down', goal:2, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Unhoused Vulnerabilities adjacent available Infrastructure', questionId:'q_any_unhoused_vulnerabilities_adjacent_available_infrastructure', action:'PAY OFF', instruction:'Only to house Vulnerabilities' },
      { index:3, condition:'Fewer Employees than Cases', questionId:'q_fewer_employees_than_cases', action:'INVEST', instruction:'Activate to Remove Vulnerabilities without using Coalitions' },
      { index:4, condition:'Fewer Economic Coalitions than Social Coalitions', questionId:'q_fewer_economic_than_social', action:'INVEST', instruction:'Place Organizations to form Economic Coalitions first' },
    ]},
    { id:'private_networked', name:'Networked', objective:'Trickle Down', goal:2, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Employees ≤ Cases', questionId:'q_employees_lte_cases', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Vulnerabilities adjacent to Infrastructure with room', questionId:'q_any_unhoused_vulnerabilities_adjacent_available_infrastructure', action:'PAY OFF', instruction:'Only to house Vulnerabilities' },
      { index:4, condition:'Fewer Economic Coalitions than Social Coalitions', questionId:'q_fewer_economic_than_social', action:'INVEST', instruction:'Place Organizations to form Economic Coalitions first' },
    ]},
    { id:'private_loss_leader', name:'Loss Leader', objective:'Laissez-Faire', goal:2, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Employees ≤ Cases', questionId:'q_employees_lte_cases', action:'INVEST', instruction:'Activate to Remove Vulnerabilities without using Coalitions' },
      { index:3, condition:'Exhausted Infrastructure', questionId:'q_any_exhausted_infrastructure', action:'DEVELOP', instruction:'Replace Infrastructure' },
      { index:4, condition:'Any Private Infrastructure with less than three Population', questionId:'q_any_private_infrastructure_less_than_three_population', action:'PAY OFF', instruction:'Only to exhaust Private Infrastructure with less than three Population' },
    ]},
    { id:'private_volunteer', name:'Volunteer', objective:'Workforce', goal:3, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Available Loans', questionId:'q_any_available_loans', action:'INVEST', instruction:'Place Loans' },
      { index:3, condition:'District with two or more Unhoused Vulnerabilities', questionId:'q_any_district_with_two_or_more_unhoused_vulnerabilities', action:'INVEST', instruction:'Place Organizations' },
      { index:4, condition:'Unhoused Vulnerabilities', questionId:'q_any_unhoused_vulnerabilities', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
    ]},
    { id:'private_broker', name:'Broker', objective:'Laissez-Faire', goal:1, rows:[
      { index:1, condition:'Less than -3 resources', questionId:'q_resources_lt_private_neg3', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:2, condition:'Employees ≤ Cases', questionId:'q_employees_lte_cases', action:'INVEST', instruction:'Activate to Remove Vulnerabilities' },
      { index:3, condition:'Unhoused Population in District with Private Infrastructure', questionId:'q_any_unhoused_population_in_district_with_private_infrastructure', action:'SUBURBANIZE', instruction:'Remove Population where fewest Vulnerabilities' },
      { index:4, condition:'No Laissez-Faire', questionId:'q_no_laissez_faire', action:'DEVELOP', instruction:'Replace Infrastructure' },
    ]},
  ],
};

const questions = {
  q_resources_lt_public_2: { prompt:'Does Public have fewer than 2 Resources?', hint:"Check Public's Resource marker on the edge track." },
  q_resources_gt_public_3: { prompt:'Does Public have more than 3 Resources?', hint:"Check Public's Resource marker on the edge track." },
  q_resources_lt_community_2: { prompt:'Does Community have fewer than 2 Resources?', hint:"Check Community's Resource marker on the edge track." },
  q_resources_lt_private_neg3: { prompt:'Does Private have fewer than -3 Resources?', hint:"Check Private's Resource marker on the edge track." },
  q_any_unhoused_vulnerabilities: { prompt:'Are there any unhoused Vulnerabilities anywhere?', hint:'Check each district for pink cubes not sitting on infrastructure.' },
  q_any_unhoused_population: { prompt:'Is there any unhoused Population anywhere?', hint:'Check for Population cubes in districts that are not on infrastructure.' },
  q_any_exhausted_infrastructure: { prompt:'Is there any exhausted infrastructure on the board?', hint:'Look for infrastructure tiles flipped to their exhausted side.' },
  q_any_unfilled_public_infrastructure: { prompt:'Is there any Public infrastructure that is not full for the needed effect?', hint:'Check Public infrastructure tiles for relevant open capacity.' },
  q_any_unfilled_community_infrastructure: { prompt:'Is there any Community infrastructure that is not full for the needed effect?', hint:'Check Community infrastructure tiles for relevant open capacity.' },
  q_less_than_two_districts_social_gt_economic: { prompt:'Are there fewer than two districts where Social coalitions outnumber Economic coalitions?', hint:'Compare Social vs Economic coalitions district by district.' },
  q_any_district_with_less_than_two_infrastructure: { prompt:'Is there any district with fewer than two total infrastructure tiles?', hint:'Count total infrastructure in each district, regardless of faction.' },
  q_fewer_economic_than_social: { prompt:'Are there fewer Economic coalitions than Social coalitions overall?', hint:'Compare total Economic coalition markers to total Social coalition markers.' },
  q_employees_lte_cases: { prompt:'Does Private have Employees less than or equal to Cases?', hint:'Compare Private Employees to Public Cases in the faction areas.' },
  q_any_unhoused_population_in_district_with_private_infrastructure: { prompt:'Is there unhoused Population in a district that contains Private infrastructure?', hint:'Look for districts containing both Private infrastructure and unhoused Population.' },
  q_no_laissez_faire: { prompt:'Is there currently no district with only Private infrastructure?', hint:'A laissez-faire district has Private infrastructure only — no Public or Community infrastructure.' },
  q_any_inactive_public_organizations: { prompt:'Are there any inactive Public organizations on the board?', hint:'Check Public organization cylinders with the symbol side down.' },
  q_no_district_with_three_infrastructure: { prompt:'Is there no district currently at its full 3-infrastructure capacity?', hint:'For this card, use district capacity: districts other than 2 and 9 can hold up to 3 infrastructure tiles.' },
  q_no_district_with_two_public_infrastructure: { prompt:'Is there no district with at least two Public infrastructure tiles?', hint:'Count Public infrastructure tiles district by district.' },
  q_social_not_equal_economic: { prompt:'Are total Social coalitions and total Economic coalitions unequal?', hint:'Compare total Social coalition markers to total Economic coalition markers on the map.' },
  q_activists_lte_employees: { prompt:'Does Community have Activists less than or equal to Employees?', hint:"Compare Community's Activists to Private's Employees, as tracked in faction areas." },
  q_any_public_org_in_economic_coalition: { prompt:'Is any Public organization currently in an Economic coalition?', hint:'Look for Public organizations paired with Private organizations on the same infrastructure.' },
  q_any_org_in_economic_coalition: { prompt:'Is there a relevant organization currently in an Economic coalition?', hint:'Check whether a legal Community mobilize target is part of an Economic coalition.' },
  q_any_available_loans: { prompt:'Are any Loan markers currently available to place?', hint:'Check the Private faction area for available Loan markers not already on the map or committed.' },
  q_any_unhoused_vulnerabilities_adjacent_available_infrastructure: { prompt:'Are there unhoused Vulnerabilities adjacent to legal infrastructure with room?', hint:'Find unhoused Vulnerabilities, then check whether an adjacent district has legal infrastructure space for the PAY OFF effect.' },
  q_fewer_employees_than_cases: { prompt:'Does Private have fewer Employees than Cases?', hint:'Compare Private Employees to Public Cases.' },
  q_any_private_infrastructure_less_than_three_population: { prompt:'Is there any Private infrastructure with fewer than three Population on it?', hint:'Check each Private infrastructure tile and count housed Population.' },
  q_any_district_with_two_or_more_unhoused_vulnerabilities: { prompt:'Is there any district with two or more unhoused Vulnerabilities?', hint:'Count only Vulnerability cubes not housed on infrastructure, district by district.' },
};

const actionGates = {
  BUDGET: { prompt:'Can any district legally receive Population for this BUDGET action?', hint:'Check whether any legal placement exists under the action and card instruction.' },
  RELOCATE: { prompt:'Is there any legal Population move for this RELOCATE action right now?', hint:'Check for movable Population and a legal destination.' },
  SERVICE: { prompt:'Can Public legally activate or place an organization for this SERVICE effect?', hint:'Check inactive/available Public organizations and legal target districts.' },
  HOUSE: { prompt:'Is there any legal district where this HOUSE action can place or replace infrastructure?', hint:'Check supply, exhausted targets, district capacity, and instruction restrictions.' },
  FUNDRAISE: { prompt:'Can Community legally take FUNDRAISE right now?', hint:'Check the normal FUNDRAISE rules and whether the action is currently available.' },
  MOBILIZE: { prompt:'Is there any legal MOBILIZE move right now?', hint:'Check for legal Population or organization movement.' },
  ORGANIZE: { prompt:'Can Community legally activate or place an organization for this ORGANIZE effect?', hint:'Check inactive/available Community organizations and legal housing slots.' },
  BUILD: { prompt:'Is there any legal BUILD target right now?', hint:'Check for a legal district for Community infrastructure, or a special override if the card text changes the output.' },
  SUBURBANIZE: { prompt:'Is there any legal Population that Private can remove with SUBURBANIZE?', hint:'Check the normal SUBURBANIZE rules and identify legal source districts.' },
  INVEST: { prompt:'Can Private legally activate/place an organization or place a loan for this INVEST effect?', hint:'Check inactive/available Private organizations, available loans, and legal districts.' },
  DEVELOP: { prompt:'Is there any legal DEVELOP target right now?', hint:'Check exhausted infrastructure or any card-specific legal development target.' },
};

const state = {
  screen: 'home',
  selectedFaction: null,
  selectedCardId: null,
  mode: 'act',
  rowIndex: 0,
  stage: 'condition',
  showHint: false,
  history: [],
  result: null,
};

const screenEl = document.getElementById('screen');
const backBtn = document.getElementById('backBtn');
const resetBtn = document.getElementById('resetBtn');
const topTitle = document.getElementById('topTitle');

function selectedCard() {
  if (!state.selectedFaction || !state.selectedCardId) return null;
  return cards[state.selectedFaction].find((c) => c.id === state.selectedCardId) || null;
}
function currentRow() { return selectedCard()?.rows?.[state.rowIndex] || null; }
function currentQuestion() { const row = currentRow(); return row ? questions[row.questionId] : null; }
function currentGate() { const row = currentRow(); return row ? actionGates[row.action] : null; }
function progress() {
  const card = selectedCard();
  return card ? (((state.rowIndex + (state.stage === 'gate' ? 0.5 : 0)) / card.rows.length) * 100) : 0;
}
function resetAll() {
  state.screen = 'home'; state.selectedFaction = null; state.selectedCardId = null; state.mode = 'act';
  state.rowIndex = 0; state.stage = 'condition'; state.showHint = false; state.history = []; state.result = null;
  render();
}
function buildTrace(extra = []) {
  const combined = [...state.history.map(h => h.reason).filter(Boolean), ...extra.filter(Boolean)];
  return combined.length ? combined : ['No rules trace was captured for this result.'];
}
function moveToNextRow(reason) {
  const card = selectedCard();
  if (!card) return;
  state.history.push({ rowIndex: state.rowIndex, stage: state.stage, reason });
  if (state.rowIndex >= card.rows.length - 1) {
    state.result = {
      status: 'discard',
      title: 'Discard this Position card',
      body: 'No listed action was both applicable and effective. Draw a new Position card.',
      trace: state.history.map(h => h.reason).filter(Boolean),
    };
    state.screen = 'result';
    render();
    return;
  }
  state.rowIndex += 1;
  state.stage = 'condition';
  state.showHint = false;
  render();
}
function answerCondition(answer) {
  const row = currentRow();
  if (!row) return;
  if (answer === 'not_sure') { state.showHint = true; render(); return; }
  if (answer === 'no') { moveToNextRow(`Row ${row.index} condition was false: ${row.condition}.`); return; }
  state.history.push({ rowIndex: state.rowIndex, stage: state.stage, reason: `Row ${row.index} condition was true: ${row.condition}.` });
  state.stage = 'gate';
  state.showHint = false;
  render();
}
function answerGate(answer) {
  const row = currentRow();
  if (!row) return;
  if (answer === 'not_sure') { state.showHint = true; render(); return; }
  if (answer === 'no') { moveToNextRow(`Tried ${row.action}, but it would be ineffective. Move to the next row.`); return; }
  state.result = {
    status: 'resolved',
    title: `${row.action} selected`,
    body: `The first applicable and effective row is Row ${row.index}: ${row.action} — ${row.instruction}.`,
    trace: buildTrace([
      `Row ${row.index} condition was true: ${row.condition}.`,
      `${row.action} passed the basic effectiveness gate.`,
      `Selected Row ${row.index}: ${row.action} — ${row.instruction}.`,
      `Next prototype step: ask legal target and tie-break questions for ${row.action}.`,
    ]),
  };
  state.screen = 'result';
  render();
}

function btn(label, cls, onclick) { return `<button class="btn ${cls||''}" onclick="${onclick}">${label}</button>`; }
function escapeHtml(str) { return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

function renderHome() {
  screenEl.innerHTML = `
    <div class="card">
      <div class="hero">
        <div class="hero-icon">🏙️</div>
        <div>
          <h1 class="title">Table-side NP sidekick</h1>
          <div class="subtitle">Mobile-first prototype for Cross Bronx Expressway</div>
        </div>
      </div>
      <div class="soft" style="margin-top:14px;">Picks the first true NP row, checks whether the action is effective, skips dead rows, and shows its reasoning trail.</div>
      <div style="margin-top:14px;">${btn('Start NP resolution','primary','state.screen=\'faction\'; render();')}</div>
    </div>
    <div class="card small muted">Current prototype scope: faction selection, card selection, row-by-row condition checks, basic effectiveness gates, and rules trace. The next layer is legal-target and tie-break questioning.</div>
  `;
}

function renderFaction() {
  screenEl.innerHTML = `
    <div>
      <div class="section-head">Choose NP faction</div>
      <div class="section-sub">Pick the faction you want the app to drive.</div>
    </div>
    <div class="grid">
      ${Object.entries(factions).map(([key, value]) => `
        <div class="faction-item" onclick="state.selectedFaction='${key}'; state.selectedCardId=null; state.screen='card'; render();">
          <div>
            <div class="section-head" style="font-size:18px;">${value.label}</div>
            <div class="section-sub">${cards[key].length} cards loaded</div>
          </div>
          <span class="pill ${value.pill}">${value.short}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCard() {
  const faction = factions[state.selectedFaction];
  screenEl.innerHTML = `
    <div>
      <div class="section-head">Choose Position card</div>
      <div class="section-sub">Loaded full card set for ${faction.label}.</div>
    </div>
    <div class="grid">
      ${cards[state.selectedFaction].map(card => `
        <div class="card-item" onclick="state.selectedCardId='${card.id}'; state.screen='mode'; render();">
          <div class="card-header">
            <div>
              <div class="card-name">${escapeHtml(card.name)}</div>
              <div class="card-objective">Objective: ${escapeHtml(card.objective)}</div>
            </div>
            <div class="goal">Goal ${card.goal}</div>
          </div>
          <div class="grid" style="margin-top:12px;">
            ${card.rows.map(row => `<div class="row-chip"><strong>${row.index}.</strong> ${escapeHtml(row.condition)} → <strong>${escapeHtml(row.action)}</strong></div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderMode() {
  const card = selectedCard();
  screenEl.innerHTML = `
    <div class="card">
      <div>
        <div class="card-name">${escapeHtml(card.name)}</div>
        <div class="card-objective">Objective: ${escapeHtml(card.objective)}</div>
      </div>
      <div style="margin-top:16px;">
        <div class="small" style="font-weight:700; margin-bottom:8px;">Resolution mode</div>
        <div class="mode-grid">
          ${['act','react','plan','event'].map(m => `<button class="btn ${state.mode===m?'primary':'outline'}" onclick="state.mode='${m}'; render();">${m[0].toUpperCase()+m.slice(1)}</button>`).join('')}
        </div>
      </div>
      <div style="margin-top:14px;">${btn(`Resolve ${state.mode}`,'primary','startResolver()')}</div>
    </div>
  `;
}

function startResolver() {
  state.rowIndex = 0; state.stage = 'condition'; state.history = []; state.result = null; state.showHint = false; state.screen = 'resolver'; render();
}

function renderResolver() {
  const card = selectedCard();
  const row = currentRow();
  const question = currentQuestion();
  const gate = currentGate();
  screenEl.innerHTML = `
    <div class="card">
      <div class="progress-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="small muted">${escapeHtml(card.name)} • ${state.mode.toUpperCase()}</div>
          <div class="goal">Row ${row.index}/4</div>
        </div>
        <div class="progressbar"><div class="progress" style="width:${progress()}%"></div></div>
      </div>
      <div class="row-panel" style="margin-top:12px;">
        <div class="small muted">Current row</div>
        <div style="font-size:18px; font-weight:800; margin-top:4px;">${escapeHtml(row.condition)}</div>
        <div class="small" style="margin-top:10px;"><strong>Action:</strong> ${escapeHtml(row.action)}</div>
        <div class="small"><strong>Instruction:</strong> ${escapeHtml(row.instruction)}</div>
      </div>
      <div style="margin-top:14px;" class="grid">
        <div class="question">${escapeHtml(state.stage==='condition' ? question.prompt : gate.prompt)}</div>
        <div class="answers one">
          ${btn('Yes','primary',`state.stage==='condition'?answerCondition('yes'):answerGate('yes')`)}
          ${btn('No','outline',`state.stage==='condition'?answerCondition('no'):answerGate('no')`)}
          ${btn('Not sure','secondary',`state.stage==='condition'?answerCondition('not_sure'):answerGate('not_sure')`)}
        </div>
        ${btn(state.showHint ? 'Hide hint' : 'What should I inspect?','outline','state.showHint=!state.showHint; render();')}
        ${state.showHint ? `<div class="soft">${escapeHtml(state.stage==='condition' ? question.hint : gate.hint)}</div>` : ''}
      </div>
    </div>
    <div class="card">
      <div class="section-head" style="font-size:16px;">Rules trace</div>
      <div class="section-sub">Shows the breadcrumbs instead of doing smoke and mirrors.</div>
      <div class="grid" style="margin-top:12px;">
        ${state.history.length === 0 ? `<div class="muted small">No steps logged yet.</div>` : state.history.map(item => `<div class="trace-item">${escapeHtml(item.reason)}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderResult() {
  const r = state.result;
  screenEl.innerHTML = `
    <div class="card">
      <div style="display:flex; gap:12px; align-items:flex-start;">
        <div class="result-icon ${r.status==='resolved' ? 'resolved' : 'discard'}">${r.status==='resolved' ? '✓' : '!'}</div>
        <div>
          <div class="title">${escapeHtml(r.title)}</div>
          <div class="subtitle" style="margin-top:8px;">${escapeHtml(r.body)}</div>
        </div>
      </div>
      <div class="grid" style="margin-top:14px;">
        ${btn('Run again','primary','startResolver()')}
        ${btn('Pick another card','outline',`state.screen='card'; render();`)}
      </div>
    </div>
    <div class="card">
      <div class="section-head" style="font-size:16px;">Why it did that</div>
      <div class="grid" style="margin-top:12px;">
        ${(r.trace && r.trace.length ? r.trace : ['No rules trace was captured for this result.']).map(line => `<div class="trace-item">${escapeHtml(line)}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderTopTitle() {
  topTitle.innerHTML = state.selectedFaction
    ? `<span class="dot ${state.selectedFaction}"></span> Cross Bronx NP Companion`
    : 'Cross Bronx NP Companion';
}

function render() {
  renderTopTitle();
  if (state.screen === 'home') return renderHome();
  if (state.screen === 'faction') return renderFaction();
  if (state.screen === 'card') return renderCard();
  if (state.screen === 'mode') return renderMode();
  if (state.screen === 'resolver') return renderResolver();
  if (state.screen === 'result') return renderResult();
}

backBtn.addEventListener('click', () => {
  if (state.screen === 'home') return;
  if (state.screen === 'faction') { state.screen = 'home'; return render(); }
  if (state.screen === 'card') { state.screen = 'faction'; return render(); }
  if (state.screen === 'mode') { state.screen = 'card'; return render(); }
  if (state.screen === 'resolver') {
    if (state.history.length === 0) { state.screen = 'mode'; return render(); }
    const last = state.history.pop();
    state.rowIndex = last.rowIndex;
    state.stage = last.stage;
    return render();
  }
  if (state.screen === 'result') { state.screen = 'resolver'; return render(); }
});
resetBtn.addEventListener('click', resetAll);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
window.state = state;
window.render = render;
window.startResolver = startResolver;
window.answerCondition = answerCondition;
window.answerGate = answerGate;
render();
