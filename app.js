
const factions = {
  public:{label:"Public",short:"PUB",pill:"pub",ring:"ring-pub"},
  community:{label:"Community",short:"COM",pill:"com",ring:"ring-com"},
  private:{label:"Private",short:"PRI",pill:"pri",ring:"ring-pri"},
};

const cards = {"public": [{"id": "public_comptroller", "name": "Comptroller", "objective": "Balanced Budget", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "HOUSE", "instruction": "Place Infrastructure where Public Infrastructure"}, {"index": 3, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 4, "condition": "No District with three Infrastructure", "questionId": "q_no_district_with_three_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure"}]}, {"id": "public_builder", "name": "Builder", "objective": "Social Work", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 4, "condition": "More than 3 Resources", "questionId": "q_resources_gt_public_3", "action": "SERVICE", "instruction": "Place Organization"}]}, {"id": "public_paternal", "name": "Paternal", "objective": "Balanced Budget", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "No District with two Public Infrastructure", "questionId": "q_no_district_with_two_public_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}]}, {"id": "public_committed", "name": "Committed", "objective": "Social Work", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 4, "condition": "Social \u2260 Economic Coalitions", "questionId": "q_social_not_equal_economic", "action": "SERVICE", "instruction": "Place Organizations only to equalize Socio-Economic"}]}, {"id": "public_shepherd", "name": "Shepherd", "objective": "Quality of Life", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 3, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "HOUSE", "instruction": "Replace Infrastructure"}, {"index": 4, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}]}, {"id": "public_workhorse", "name": "Workhorse", "objective": "Public Relations", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Social \u2260 Economic Coalitions", "questionId": "q_social_not_equal_economic", "action": "SERVICE", "instruction": "Place Organizations only to equalize Socio-Economic"}, {"index": 4, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}]}, {"id": "public_provider", "name": "Provider", "objective": "Quality of Life", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 4, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "HOUSE", "instruction": "Replace Infrastructure"}]}, {"id": "public_responsible", "name": "Responsible", "objective": "Public Relations", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Place Organizations"}, {"index": 4, "condition": "No District with two Public Infrastructure", "questionId": "q_no_district_with_two_public_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure where Public Infrastructure"}]}], "community": [{"id": "community_activist", "name": "Activist", "objective": "People Power", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "community_accountable", "name": "Accountable", "objective": "People Power", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "community_leader", "name": "Leader", "objective": "Rehabilitation", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "BUILD", "instruction": "Place Organizations"}, {"index": 4, "condition": "Unfilled Community Infrastructure", "questionId": "q_any_unfilled_community_infrastructure", "action": "MOBILIZE", "instruction": "Only to fill Community Infrastructure"}]}, {"id": "community_dedicated", "name": "Dedicated", "objective": "Rehabilitation", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 4, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}]}, {"id": "community_organizer", "name": "Organizer", "objective": "Social Movement", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unfilled Community Infrastructure", "questionId": "q_any_unfilled_community_infrastructure", "action": "MOBILIZE", "instruction": "Only to fill Community Infrastructure"}, {"index": 4, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}]}, {"id": "community_determined", "name": "Determined", "objective": "Grassroots", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Organization in an Economic Coalition", "questionId": "q_any_org_in_economic_coalition", "action": "MOBILIZE", "instruction": "Only to break Economic Coalitions"}, {"index": 3, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}, {"index": 4, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "BUILD", "instruction": "Place Infrastructure"}]}, {"id": "community_collaborator", "name": "Collaborator", "objective": "Social Movement", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Activists \u2264 Employees", "questionId": "q_activists_lte_employees", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 4, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}]}, {"id": "community_independent", "name": "Independent", "objective": "Grassroots", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Activists \u2264 Employees", "questionId": "q_activists_lte_employees", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Any Public Organization in an Economic Coalition", "questionId": "q_any_public_org_in_economic_coalition", "action": "MOBILIZE", "instruction": "Only to break Economic Coalitions"}]}], "private": [{"id": "private_lender", "name": "Lender", "objective": "Recurring Revenue", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population in District with Private Infrastructure", "questionId": "q_any_unhoused_population_in_district_with_private_infrastructure", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 4, "condition": "Available Loans", "questionId": "q_any_available_loans", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_employer", "name": "Employer", "objective": "Workforce", "goal": 3, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities adjacent available Infrastructure", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 3, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}, {"index": 4, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_buyer", "name": "Buyer", "objective": "Laissez-Faire", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}, {"index": 4, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "DEVELOP", "instruction": "Replace Infrastructure"}]}, {"id": "private_investor", "name": "Investor", "objective": "Trickle Down", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities adjacent available Infrastructure", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 3, "condition": "Fewer Employees than Cases", "questionId": "q_fewer_employees_than_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities without using Coalitions"}, {"index": 4, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}]}, {"id": "private_networked", "name": "Networked", "objective": "Trickle Down", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Vulnerabilities adjacent to Infrastructure with room", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 4, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}]}, {"id": "private_loss_leader", "name": "Loss Leader", "objective": "Laissez-Faire", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities without using Coalitions"}, {"index": 3, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "DEVELOP", "instruction": "Replace Infrastructure"}, {"index": 4, "condition": "Any Private Infrastructure with less than three Population", "questionId": "q_any_private_infrastructure_less_than_three_population", "action": "PAY OFF", "instruction": "Only to exhaust Private Infrastructure with less than three Population"}]}, {"id": "private_volunteer", "name": "Volunteer", "objective": "Workforce", "goal": 3, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Available Loans", "questionId": "q_any_available_loans", "action": "INVEST", "instruction": "Place Loans"}, {"index": 3, "condition": "District with two or more Unhoused Vulnerabilities", "questionId": "q_any_district_with_two_or_more_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Place Organizations"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_broker", "name": "Broker", "objective": "Laissez-Faire", "goal": 1, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population in District with Private Infrastructure", "questionId": "q_any_unhoused_population_in_district_with_private_infrastructure", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 4, "condition": "No Laissez-Faire", "questionId": "q_no_laissez_faire", "action": "DEVELOP", "instruction": "Replace Infrastructure"}]}]};
const questions = {"q_resources_lt_public_2": {"prompt": "Does Public have fewer than 2 Resources?", "hint": "Check Public's Resource marker on the edge track."}, "q_resources_gt_public_3": {"prompt": "Does Public have more than 3 Resources?", "hint": "Check Public's Resource marker on the edge track."}, "q_resources_lt_community_2": {"prompt": "Does Community have fewer than 2 Resources?", "hint": "Check Community's Resource marker on the edge track."}, "q_resources_lt_private_neg3": {"prompt": "Does Private have fewer than -3 Resources?", "hint": "Check Private's Resource marker on the edge track."}, "q_any_unhoused_vulnerabilities": {"prompt": "Are there any unhoused Vulnerabilities anywhere?", "hint": "Check each district for pink cubes not sitting on infrastructure."}, "q_any_unhoused_population": {"prompt": "Is there any unhoused Population anywhere?", "hint": "Check for Population cubes in districts that are not on infrastructure."}, "q_any_exhausted_infrastructure": {"prompt": "Is there any exhausted infrastructure on the board?", "hint": "Look for infrastructure tiles flipped to their exhausted side."}, "q_any_unfilled_public_infrastructure": {"prompt": "Is there any Public infrastructure that is not full for the needed effect?", "hint": "Check Public infrastructure tiles for relevant open capacity."}, "q_any_unfilled_community_infrastructure": {"prompt": "Is there any Community infrastructure that is not full for the needed effect?", "hint": "Check Community infrastructure tiles for relevant open capacity."}, "q_less_than_two_districts_social_gt_economic": {"prompt": "Are there fewer than two districts where Social coalitions outnumber Economic coalitions?", "hint": "Compare Social vs Economic coalitions district by district."}, "q_any_district_with_less_than_two_infrastructure": {"prompt": "Is there any district with fewer than two total infrastructure tiles?", "hint": "Count total infrastructure in each district, regardless of faction."}, "q_fewer_economic_than_social": {"prompt": "Are there fewer Economic coalitions than Social coalitions overall?", "hint": "Compare total Economic coalition markers to total Social coalition markers."}, "q_employees_lte_cases": {"prompt": "Does Private have Employees less than or equal to Cases?", "hint": "Compare Private Employees to Public Cases in the faction areas."}, "q_any_unhoused_population_in_district_with_private_infrastructure": {"prompt": "Is there unhoused Population in a district that contains Private infrastructure?", "hint": "Look for districts containing both Private infrastructure and unhoused Population."}, "q_no_laissez_faire": {"prompt": "Is there currently no district with only Private infrastructure?", "hint": "A laissez-faire district has Private infrastructure only \u2014 no Public or Community infrastructure."}, "q_any_inactive_public_organizations": {"prompt": "Are there any inactive Public organizations on the board?", "hint": "Check Public organization cylinders with the symbol side down."}, "q_no_district_with_three_infrastructure": {"prompt": "Is there no district currently at its full 3-infrastructure capacity?", "hint": "For this card, use district capacity: districts other than 2 and 9 can hold up to 3 infrastructure tiles."}, "q_no_district_with_two_public_infrastructure": {"prompt": "Is there no district with at least two Public infrastructure tiles?", "hint": "Count Public infrastructure tiles district by district."}, "q_social_not_equal_economic": {"prompt": "Are total Social coalitions and total Economic coalitions unequal?", "hint": "Compare total Social coalition markers to total Economic coalition markers on the map."}, "q_activists_lte_employees": {"prompt": "Does Community have Activists less than or equal to Employees?", "hint": "Compare Community's Activists to Private's Employees, as tracked in faction areas."}, "q_any_public_org_in_economic_coalition": {"prompt": "Is any Public organization currently in an Economic coalition?", "hint": "Look for Public organizations paired with Private organizations on the same infrastructure."}, "q_any_org_in_economic_coalition": {"prompt": "Is there a relevant organization currently in an Economic coalition?", "hint": "Check whether a legal Community mobilize target is part of an Economic coalition."}, "q_any_available_loans": {"prompt": "Are any Loan markers currently available to place?", "hint": "Check the Private faction area for available Loan markers not already on the map or committed."}, "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure": {"prompt": "Are there unhoused Vulnerabilities adjacent to legal infrastructure with room?", "hint": "Find unhoused Vulnerabilities, then check whether an adjacent district has legal infrastructure space for the PAY OFF effect."}, "q_fewer_employees_than_cases": {"prompt": "Does Private have fewer Employees than Cases?", "hint": "Compare Private Employees to Public Cases."}, "q_any_private_infrastructure_less_than_three_population": {"prompt": "Is there any Private infrastructure with fewer than three Population on it?", "hint": "Check each Private infrastructure tile and count housed Population."}, "q_any_district_with_two_or_more_unhoused_vulnerabilities": {"prompt": "Is there any district with two or more unhoused Vulnerabilities?", "hint": "Count only Vulnerability cubes not housed on infrastructure, district by district."}};
const actionGates = {"BUDGET": {"prompt": "Can any district legally receive Population for this BUDGET action?", "hint": "Check whether any legal placement exists under the action and card instruction."}, "RELOCATE": {"prompt": "Is there any legal Population move for this RELOCATE action right now?", "hint": "Check for movable Population and a legal destination."}, "SERVICE": {"prompt": "Can Public legally activate or place an organization for this SERVICE effect?", "hint": "Check inactive/available Public organizations and legal target districts."}, "HOUSE": {"prompt": "Is there any legal district where this HOUSE action can place or replace infrastructure?", "hint": "Check supply, exhausted targets, district capacity, and instruction restrictions."}, "FUNDRAISE": {"prompt": "Can Community legally take FUNDRAISE right now?", "hint": "Check the normal FUNDRAISE rules and whether the action is currently available."}, "MOBILIZE": {"prompt": "Is there any legal MOBILIZE move right now?", "hint": "Check for legal Population or organization movement."}, "ORGANIZE": {"prompt": "Can Community legally activate or place an organization for this ORGANIZE effect?", "hint": "Check inactive/available Community organizations and legal housing slots."}, "BUILD": {"prompt": "Is there any legal BUILD target right now?", "hint": "Check for a legal district for Community infrastructure, or a special override if the card text changes the output."}, "SUBURBANIZE": {"prompt": "Is there any legal Population that Private can remove with SUBURBANIZE?", "hint": "Check the normal SUBURBANIZE rules and identify legal source districts."}, "INVEST": {"prompt": "Can Private legally activate/place an organization or place a loan for this INVEST effect?", "hint": "Check inactive/available Private organizations, available loans, and legal districts."}, "DEVELOP": {"prompt": "Is there any legal DEVELOP target right now?", "hint": "Check exhausted infrastructure or any card-specific legal development target."}};
const priorityColumns = {"place_population": {"title": "Place Population", "bullets": ["Infrastructure with room", "Least Population", "Least Vulnerabilities", "Most Infrastructure", "With own Organization", "With Community Organization", "Player selection from remaining spaces"]}, "replace_or_place_infrastructure": {"title": "Replace / Place Infrastructure", "bullets": ["Exhausted Infrastructure", "Most unhoused Population", "Most unhoused Vulnerabilities", "Most Vulnerabilities", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_replace_refresh_organization": {"title": "Place / Replace / Refresh Organization", "bullets": ["Most unhoused Vulnerabilities", "Most Vulnerabilities", "To form Coalition", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_grant_or_loan": {"title": "Place Grant / Loan", "bullets": ["With own Organization", "With Public Organization", "With Community Organization", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_vulnerability": {"title": "Place Vulnerability", "bullets": ["Infrastructure with room", "Least unhoused Vulnerabilities", "Least Vulnerabilities", "Most Organizations", "Fewest own Organizations", "Player selection from remaining spaces"]}, "remove_vulnerability": {"title": "Remove Vulnerability", "bullets": ["Most unhoused Vulnerabilities", "Most Vulnerabilities", "Most Population", "Player selection from remaining spaces"]}, "remove_population": {"title": "Remove Population", "bullets": ["Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "remove_or_activate_organization": {"title": "Remove / Activate Organization", "bullets": ["Least Vulnerabilities", "Most Infrastructure", "With own Organization", "Player selection from remaining spaces"]}, "exhaust_infrastructure": {"title": "Exhaust Infrastructure", "bullets": ["Least Population", "Least unhoused Vulnerabilities", "Least Vulnerabilities", "Most Infrastructure", "Fewest own Organizations", "Player selection from remaining spaces"]}};
const instructionToPriorityColumn = {"Place Population": "place_population", "Place Population only to fill Infrastructure": "place_population", "Place Infrastructure": "replace_or_place_infrastructure", "Place Infrastructure where Public Infrastructure": "replace_or_place_infrastructure", "Replace Infrastructure": "replace_or_place_infrastructure", "Only to fill Public Infrastructure": "place_population", "Only to fill Community Infrastructure": "place_population", "Activate to Remove Vulnerabilities": "remove_vulnerability", "Activate to remove Blight then Remove Vulnerabilities": "remove_vulnerability", "Place Organization": "place_replace_refresh_organization", "Place Organizations": "place_replace_refresh_organization", "Place Organizations only to equalize Socio-Economic": "place_replace_refresh_organization", "Place Organizations to form Social Coalitions first": "place_replace_refresh_organization", "Place Organizations to form Economic Coalitions first": "place_replace_refresh_organization", "Community Infrastructure where fewest Vulnerabilities": "replace_or_place_infrastructure", "Only to house Population": "place_population", "Only to house Vulnerabilities": "place_vulnerability", "Only to break Economic Coalitions": "remove_or_activate_organization", "Place Loans": "place_grant_or_loan", "Remove Population where fewest Vulnerabilities": "remove_population", "Activate to Remove Vulnerabilities without using Coalitions": "remove_vulnerability", "Only to exhaust Private Infrastructure with less than three Population": "exhaust_infrastructure"};

const state = {
  screen:"home",
  playerFaction:null,
  selectedFaction:null,
  npCards:{public:null,community:null,private:null},
  npPlannedActions:{public:null,community:null,private:null},
  mode:"act",
  rowIndex:0,
  stage:"condition",
  priorityStep:0,
  history:[],
  result:null,
  districtChoice:null,
  showHint:false,
};

function npFactions(){ return Object.keys(factions).filter(f => f !== state.playerFaction); }
function currentCard(){ 
  if(!state.selectedFaction) return null; 
  const id = state.npCards[state.selectedFaction];
  return cards[state.selectedFaction].find(c => c.id===id) || null; 
}
function currentRow(){ const c=currentCard(); return c?.rows?.[state.rowIndex] || null; }
function currentQuestion(){ const r=currentRow(); return r? questions[r.questionId]:null; }
function currentGate(){ const r=currentRow(); return r? actionGates[r.action]:null; }
function currentPriorityKey(){ const r=currentRow(); return r? instructionToPriorityColumn[r.instruction]||null:null; }
function currentPriority(){ const k=currentPriorityKey(); return k? priorityColumns[k]:null; }
function currentPriorityBullet(){ const p=currentPriority(); return p? p.bullets[state.priorityStep]:null; }

function resetResolver(){
  state.rowIndex=0; state.stage="condition"; state.priorityStep=0; state.history=[]; state.result=null;
  state.districtChoice=null; state.showHint=false;
}
function resetAll(){
  state.screen="home"; state.playerFaction=null; state.selectedFaction=null; state.npCards={public:null,community:null,private:null}; state.npPlannedActions={public:null,community:null,private:null}; state.mode="act"; resetResolver(); render();
}
function back(){
  const s=state.screen;
  if(s==="home") return;
  if(s==="setup_player") state.screen="home";
  else if(s==="setup_np_card") state.screen = state.playerFaction ? "setup_player":"home";
  else if(s==="dashboard") state.screen="setup_player";
  else if(s==="mode") state.screen="dashboard";
  else if(s==="plan_helper"||s==="event_helper") state.screen="mode";
  else if(s==="resolver") state.screen="mode";
  else if(s==="result") state.screen="dashboard";
  render();
}
document.getElementById('backBtn').onclick = back;
document.getElementById('resetBtn').onclick = resetAll;

function html(strings,...vals){ return strings.reduce((a,s,i)=>a+s+(vals[i]??""),""); }
function cardBlock(title, body){ return `<div class="card">${title?`<h2>${title}</h2>`:""}${body}</div>`; }
function btn(label, onclick, klass=""){ return `<button class="btn ${klass}" onclick="${onclick}">${label}</button>`; }

function choosePlayerFaction(f){
  state.playerFaction=f; state.npCards={public:null,community:null,private:null}; state.npPlannedActions={public:null,community:null,private:null}; resetResolver();
  state.selectedFaction=npFactions()[0]; state.screen="setup_np_card"; render();
}
function chooseNpcCard(id){
  state.npCards[state.selectedFaction]=id;
  const remaining = npFactions().find(f=>!state.npCards[f]);
  if(remaining){ state.selectedFaction=remaining; state.screen="setup_np_card"; }
  else state.screen="dashboard";
  render();
}
function startResolver(f){ state.selectedFaction=f; resetResolver(); state.screen="mode"; render(); }
function startModeResolution(){ 
  resetResolver(); 
  if(state.mode==="plan"){ state.screen="plan_helper"; render(); return; }
  if(state.mode==="event"){ state.screen="event_helper"; render(); return; }
  state.screen="resolver"; 
  render(); 
}

function recordPlannedAction(nextAction){
  if(!state.selectedFaction) return;
  state.npPlannedActions[state.selectedFaction]=nextAction;
  state.result={
    status:"resolved",
    title:`PLAN recorded for ${factions[state.selectedFaction].label} NP`,
    body:`Complete the PLAN procedure: do not call an Audit for an NP PLAN. Refresh an Organization if possible, then use ${nextAction.toUpperCase()} as the next main action for this NP faction.`,
    trace:[
      `PLAN selected for ${factions[state.selectedFaction].label} NP.`,
      `NP PLAN does not call an Audit.`,
      `Refresh an Organization if possible, using Place / Replace / Refresh Organization priorities.`,
      `Next recorded main action: ${nextAction.toUpperCase()}.`,
    ]
  };
  state.screen="result";
  render();
}
function record(reason){ state.history.push(reason); }

function moveNextRow(reason){
  const c=currentCard(); const r=currentRow();
  if(!c||!r) return;
  record(reason);
  if(state.rowIndex >= c.rows.length-1){
    state.result={status:"discard", title:`Discard ${c.name}`, body:"No listed action was both applicable and effective. Draw a new Position card for this NP faction.", trace:[...state.history]};
    state.screen="result"; render(); return;
  }
  state.rowIndex += 1; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.showHint=false; render();
}

function answerCondition(ans){
  const r=currentRow(); const q=currentQuestion(); if(!r||!q) return;
  if(ans==="not_sure"){ state.showHint=true; render(); return; }
  if(ans==="no"){ moveNextRow(`Row ${r.index} condition was false: ${r.condition}.`); return; }
  record(`Row ${r.index} condition was true: ${r.condition}.`);
  state.stage="gate"; state.showHint=false; render();
}
function answerGate(ans){
  const r=currentRow(); const g=currentGate(); if(!r||!g) return;
  if(ans==="not_sure"){ state.showHint=true; render(); return; }
  if(ans==="no"){ moveNextRow(`Tried ${r.action}, but it would be ineffective. Move to the next row.`); return; }
  if(currentPriority()){ state.stage="priority"; state.priorityStep=0; state.showHint=false; render(); return; }
  state.result={status:"resolved", title:`${r.action} selected`, body:`The first applicable and effective row is Row ${r.index}: ${r.action} — ${r.instruction}.`, trace:[...state.history, `${r.action} passed the basic effectiveness gate.`]};
  state.screen="result"; render();
}
function answerPriority(ans){
  const r=currentRow(); const p=currentPriority(); const b=currentPriorityBullet();
  if(!r||!p||!b) return;
  if(ans==="not_sure"){ state.showHint=true; render(); return; }
  if(ans==="yes"){ state.stage="district"; state.districtChoice=null; state.showHint=false; render(); return; }
  if(state.priorityStep >= p.bullets.length-1){
    state.result={status:"resolved", title:`${r.action} needs manual tie-break`, body:`The priority column was exhausted without reducing the remaining tied districts to one district. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.`, trace:[...state.history, `${r.action} passed the basic effectiveness gate.`, `Checked priority column: ${p.title}.`, `No bullet reduced the remaining tied districts to a single district before fallback.`]};
    state.screen="result"; render(); return;
  }
  state.priorityStep += 1; state.districtChoice=null; state.showHint=false; render();
}
function selectDistrict(d){ state.districtChoice=d; render(); }
function answerDistrict(ans){
  const r=currentRow(); const p=currentPriority(); const b=currentPriorityBullet();
  if(!r||!p||!b) return;
  if(ans==="not_sure"){ state.showHint=true; render(); return; }
  if(ans==="still_tied" || ans==="none"){
    if(state.priorityStep >= p.bullets.length-1){
      state.result={status:"resolved", title:`${r.action} needs manual tie-break`, body:`No unique district was produced after the final priority bullet. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.`, trace:[...state.history, `${r.action} passed the basic effectiveness gate.`, `Checked priority column: ${p.title}.`, `Bullet '${b}' did not reduce the remaining tied districts to a unique district.`]};
      state.screen="result"; render(); return;
    }
    state.priorityStep += 1; state.stage="priority"; state.districtChoice=null; state.showHint=false; render(); return;
  }
  state.result={status:"resolved", title:`${r.action} selected • District ${ans}`, body:`Use the NP Aid priority column '${p.title}'. The first bullet that reduced the remaining tied districts to one district was '${b}', leaving District ${ans}.`, trace:[...state.history, `${r.action} passed the basic effectiveness gate.`, `Checked priority column: ${p.title}.`, `Bullet '${b}' reduced the remaining tied districts to District ${ans}.`, `Selected Row ${r.index}: ${r.action} — ${r.instruction}.`]};
  state.screen="result"; render();
}
function handleDiscardReplacement(){
  state.npCards[state.selectedFaction]=null; resetResolver(); state.screen="setup_np_card"; render();
}
function currentHint(){
  if(state.stage==="condition") return currentQuestion()?.hint || "";
  if(state.stage==="gate") return currentGate()?.hint || "";
  if(state.stage==="priority") return "Apply this bullet only to the same remaining tied districts. If it does not reduce the tie, continue to the next bullet.";
  return "Pick the district that remains after applying this bullet to the currently tied districts. If more than one still qualifies, choose 'Still tied'.";
}

function render(){
  const app = document.getElementById('app');
  const cf = state.selectedFaction ? factions[state.selectedFaction] : null;
  document.querySelector('.title').textContent = "Cross Bronx NP Companion";
  app.innerHTML = "";
  if(state.screen==="home"){
    app.innerHTML = cardBlock("", `
      <div class="row" style="align-items:center;margin-bottom:10px">
        <div>
          <div style="font-size:22px;font-weight:800">Solo NP sidekick</div>
          <div class="muted">Pick your faction once. The other two stay remembered as NP factions.</div>
        </div>
      </div>
      <div class="panel" style="margin-bottom:14px">Choose the faction you are playing. The app will remember the current Position cards for the other two factions and only ask for a new card when one gets discarded.</div>
      ${btn("Start solo setup ›", "state.screen='setup_player'; render()", "primary")}
    `);
    return;
  }
  if(state.screen==="setup_player"){
    app.innerHTML = `<div style="margin-bottom:12px"><h2>Which faction are you playing?</h2><p class="muted">The other two factions will be treated as NP factions.</p></div>` +
      Object.entries(factions).map(([k,v])=>`
        <div class="card ${v.ring}" onclick="choosePlayerFaction('${k}')">
          <div class="row"><div><div style="font-size:18px;font-weight:700">${v.label}</div><div class="muted">Play as this faction</div></div><span class="pill ${v.pill}">${v.short}</span></div>
        </div>`).join("");
    return;
  }
  if(state.screen==="setup_np_card"){
    const f = state.selectedFaction;
    app.innerHTML = `<div style="margin-bottom:12px"><h2>Choose Position card for ${factions[f].label}</h2><p class="muted">This card will be remembered until it gets discarded.</p></div>` +
      cards[f].map(card => `
        <div class="card" onclick="chooseNpcCard('${card.id}')">
          <div class="row" style="margin-bottom:10px"><div><div class="titleblue">${card.name}</div><div class="objblue">Objective: ${card.objective}</div></div><span class="badge">Goal ${card.goal}</span></div>
          <div class="grid">
            ${card.rows.map(row => `<div class="panel" style="font-size:14px"><b>${row.index}.</b> ${row.condition} → <b>${row.action}</b></div>`).join("")}
          </div>
        </div>`).join("");
    return;
  }
  if(state.screen==="dashboard"){
    app.innerHTML = `
      <div class="card"><div class="small">You are playing</div><div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div></div>
      ${npFactions().map(f => {
        const card = cards[f].find(c => c.id===state.npCards[f]);
        return `<div class="card">
          <div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ""}`:"No Position card selected"}</div></div><span class="pill ${factions[f].pill}">${factions[f].short}</span></div>
          <div class="grid2">
            ${btn("Resolve turn", `startResolver('${f}')`, card ? "primary":"")}
            ${btn("Change card", `state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`, "outline")}
          </div>
        </div>`;
      }).join("")}
    `;
    return;
  }

  if(state.screen==="plan_helper"){
    const c = currentCard();
    app.innerHTML = cardBlock("", `
      <div class="small">PLAN procedure • ${factions[state.selectedFaction].label} NP</div>
      <div class="titleblue">${c.name}</div>
      <div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div>
      <div class="panel" style="margin-bottom:14px">
        <div style="font-weight:700">PLAN checklist</div>
        <div style="margin-top:8px">1. Do <b>not</b> call an Audit for an NP PLAN.</div>
        <div>2. Refresh an Organization if possible, using the <b>Place / Replace / Refresh Organization</b> priorities.</div>
        <div>3. Record the next main action for this NP faction.</div>
      </div>
      <div class="small" style="margin-bottom:8px">Next main action</div>
      <div class="grid2">${["act","react","event","plan"].map(m => `<button class="btn" onclick="recordPlannedAction('${m}')">${m.toUpperCase()}</button>`).join("")}</div>
    `);
    return;
  }
  if(state.screen==="event_helper"){
    const c = currentCard();
    app.innerHTML = cardBlock("", `
      <div class="small">EVENT procedure • ${factions[state.selectedFaction].label} NP</div>
      <div class="titleblue">${c.name}</div>
      <div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div>
      <div class="panel" style="margin-bottom:14px">
        <div style="font-weight:700">EVENT reminder</div>
        <div style="margin-top:8px">Refer to the current Event card and resolve its instructions first.</div>
        <div style="margin-top:8px">Use NP General Principles and NP General Priorities for any choices required by the Event.</div>
        <div style="margin-top:8px">If given a choice, each faction places its own Infrastructure and Organizations first. NP Public and Community place Grants before Loans; NP Private places Loans before Grants.</div>
      </div>
      <div class="grid">
        ${btn("Done with Event", "state.screen='dashboard'; render()", "primary")}
        ${btn("Back to mode selection", "state.screen='mode'; render()")}
      </div>
    `);
    return;
  }
  if(state.screen==="mode"){
    const c = currentCard();
    app.innerHTML = cardBlock("", `
      <div class="small">Resolving ${factions[state.selectedFaction].label} NP</div>
      <div class="titleblue">${c.name}</div>
      <div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div>
      <div class="small" style="margin-bottom:8px">Resolution mode</div>
      <div class="grid2" style="margin-bottom:14px">
        ${["act","react","plan","event"].map(m => `<button class="btn ${state.mode===m?'primary':''}" onclick="state.mode='${m}'; render()">${m[0].toUpperCase()+m.slice(1)}</button>`).join("")}
      </div>
      ${btn(`Resolve ${state.mode}`, "startModeResolution()", "primary")}
    `);
    return;
  }
  if(state.screen==="resolver"){
    const c=currentCard(), r=currentRow(), q=currentQuestion(), g=currentGate(), p=currentPriority(), b=currentPriorityBullet();
    const progress = ((state.rowIndex + (state.stage==="gate"?0.33:state.stage==="priority"?0.66:state.stage==="district"?0.85:0))/c.rows.length)*100;
    let inner = "";
    if(state.stage==="condition"){
      inner = `<div class="grid">
        ${btn("Yes", "answerCondition('yes')", "primary")}
        ${btn("No", "answerCondition('no')")}
        ${btn("Not sure", "answerCondition('not_sure')", "secondary")}
      </div>`;
      inner = `<div style="font-size:20px;font-weight:700;margin-bottom:12px">${q.prompt}</div>` + inner;
    } else if(state.stage==="gate"){
      inner = `<div style="font-size:20px;font-weight:700;margin-bottom:12px">${g.prompt}</div><div class="grid">
        ${btn("Yes", "answerGate('yes')", "primary")}
        ${btn("No", "answerGate('no')")}
        ${btn("Not sure", "answerGate('not_sure')", "secondary")}
      </div>`;
    } else if(state.stage==="priority"){
      inner = `<div class="bluepanel" style="margin-bottom:12px"><div style="font-weight:700">NP Aid priority column</div><div>${p ? p.title:"No mapped column"}</div><div class="small" style="color:inherit;margin-top:6px">Work top to bottom using the same remaining tied districts until one district wins.</div></div>
      <div style="font-size:20px;font-weight:700;margin-bottom:12px">Check the next priority bullet against the remaining tied districts.</div>
      <div class="panel" style="margin-bottom:12px"><div class="small">Bullet ${state.priorityStep+1}${p ? ` of ${p.bullets.length}`:""}</div><div style="font-size:18px;font-weight:700;margin-top:4px">${b}</div></div>
      <div class="grid">
        ${btn("Yes, compare the remaining tied districts", "answerPriority('yes')", "primary")}
        ${btn("No, this bullet does not reduce the tie", "answerPriority('no')")}
        ${btn("Not sure", "answerPriority('not_sure')", "secondary")}
      </div>`;
    } else {
      inner = `<div class="bluepanel" style="margin-bottom:12px"><div style="font-weight:700">Current priority bullet</div><div>${b}</div></div>
      <div style="font-size:20px;font-weight:700;margin-bottom:12px">Which district remains after applying this bullet to the tied districts?</div>
      <div class="grid4" style="margin-bottom:12px">${["1","2","3","4","5","6","9"].map(d => `<button class="btn ${state.districtChoice===d?'selected':''}" onclick="selectDistrict('${d}')">${d}</button>`).join("")}</div>
      <div class="grid">
        ${btn(`Confirm District ${state.districtChoice ?? "?"}`, state.districtChoice ? `answerDistrict('${state.districtChoice}')` : "void(0)", state.districtChoice ? "primary" : "")}
        ${btn("Still tied, go to the next bullet", "answerDistrict('still_tied')")}
        ${btn("This bullet does not leave a valid district", "answerDistrict('none')")}
        ${btn("Not sure", "answerDistrict('not_sure')", "secondary")}
      </div>`;
    }
    app.innerHTML = `
      <div class="card">
        <div class="row" style="margin-bottom:10px"><div class="small">${c.name} • ${state.mode.toUpperCase()} • ${factions[state.selectedFaction].label} NP</div><span class="badge">Row ${r.index}/4</span></div>
        <div class="progress" style="margin-bottom:12px"><div class="bar" style="width:${progress}%"></div></div>
        <div class="panel" style="margin-bottom:12px">
          <div class="small">Current row</div>
          <div style="font-size:18px;font-weight:700">${r.condition}</div>
          <div style="margin-top:8px;font-size:14px"><b>Action:</b> ${r.action}</div>
          <div style="font-size:14px"><b>Instruction:</b> ${r.instruction}</div>
        </div>
        ${inner}
        ${btn(state.showHint ? "Hide hint" : "What should I inspect?", "state.showHint=!state.showHint; render()")}
        ${state.showHint ? `<div class="hint" style="margin-top:12px">${currentHint()}</div>`:""}
      </div>
      <div class="card"><div style="font-weight:700;margin-bottom:8px">Rules trace</div>
      ${state.history.length ? state.history.map(line => `<div class="trace" style="margin-top:8px">${line}</div>`).join("") : `<div class="muted">No steps logged yet.</div>`}
      </div>`;
    return;
  }
  if(state.screen==="result"){
    const r = state.result;
    const actions = r.status==="discard"
      ? btn("Draw replacement card", "handleDiscardReplacement()")
      : btn("Resolve this NP again", `startResolver('${state.selectedFaction}')`);
    app.innerHTML = `
      <div class="card">
        <div class="row" style="margin-bottom:12px"><div><div style="font-size:22px;font-weight:800">${r.title}</div><div class="muted" style="margin-top:4px">${r.body}</div></div></div>
        <div class="grid">${btn("Return to dashboard", "state.screen='dashboard'; render()", "primary")}${actions}</div>
      </div>
      <div class="card"><div style="font-weight:700;margin-bottom:8px">Why it did that</div>
      ${(r.trace && r.trace.length ? r.trace : ["No rules trace was captured for this result."]).map(line => `<div class="trace" style="margin-top:8px">${line}</div>`).join("")}
      </div>
    `;
  }
}

window.state = state;
window.render = render;
window.choosePlayerFaction = choosePlayerFaction;
window.chooseNpcCard = chooseNpcCard;
window.startResolver = startResolver;
window.startModeResolution = startModeResolution;
window.recordPlannedAction = recordPlannedAction;
window.answerCondition = answerCondition;
window.answerGate = answerGate;
window.answerPriority = answerPriority;
window.selectDistrict = selectDistrict;
window.answerDistrict = answerDistrict;
window.handleDiscardReplacement = handleDiscardReplacement;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
render();
