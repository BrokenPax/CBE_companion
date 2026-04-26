
const factions = {"public": {"label": "Public", "short": "PUB", "pill": "pub", "ring": "ring-pub"}, "community": {"label": "Community", "short": "COM", "pill": "com", "ring": "ring-com"}, "private": {"label": "Private", "short": "PRI", "pill": "pri", "ring": "ring-pri"}};
const cards = {"public": [{"id": "public_comptroller", "name": "Comptroller", "objective": "Balanced Budget", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "HOUSE", "instruction": "Place Infrastructure where Public Infrastructure"}, {"index": 3, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 4, "condition": "No District with three Infrastructure", "questionId": "q_no_district_with_three_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure"}]}, {"id": "public_builder", "name": "Builder", "objective": "Social Work", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 4, "condition": "More than 3 Resources", "questionId": "q_resources_gt_public_3", "action": "SERVICE", "instruction": "Place Organization"}]}, {"id": "public_paternal", "name": "Paternal", "objective": "Balanced Budget", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "No District with two Public Infrastructure", "questionId": "q_no_district_with_two_public_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}]}, {"id": "public_committed", "name": "Committed", "objective": "Social Work", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 4, "condition": "Social \u2260 Economic Coalitions", "questionId": "q_social_not_equal_economic", "action": "SERVICE", "instruction": "Place Organizations only to equalize Socio-Economic"}]}, {"id": "public_shepherd", "name": "Shepherd", "objective": "Quality of Life", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 3, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "HOUSE", "instruction": "Replace Infrastructure"}, {"index": 4, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}]}, {"id": "public_workhorse", "name": "Workhorse", "objective": "Public Relations", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Social \u2260 Economic Coalitions", "questionId": "q_social_not_equal_economic", "action": "SERVICE", "instruction": "Place Organizations only to equalize Socio-Economic"}, {"index": 4, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}]}, {"id": "public_provider", "name": "Provider", "objective": "Quality of Life", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Unfilled Public Infrastructure", "questionId": "q_any_unfilled_public_infrastructure", "action": "RELOCATE", "instruction": "Only to fill Public Infrastructure"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 4, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "HOUSE", "instruction": "Replace Infrastructure"}]}, {"id": "public_responsible", "name": "Responsible", "objective": "Public Relations", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_public_2", "action": "BUDGET", "instruction": "Place Population only to fill Infrastructure"}, {"index": 2, "condition": "Inactive Public Organizations", "questionId": "q_any_inactive_public_organizations", "action": "SERVICE", "instruction": "Activate to remove Blight then Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "SERVICE", "instruction": "Place Organizations"}, {"index": 4, "condition": "No District with two Public Infrastructure", "questionId": "q_no_district_with_two_public_infrastructure", "action": "HOUSE", "instruction": "Place Infrastructure where Public Infrastructure"}]}], "community": [{"id": "community_activist", "name": "Activist", "objective": "People Power", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "community_accountable", "name": "Accountable", "objective": "People Power", "goal": 3, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "community_leader", "name": "Leader", "objective": "Rehabilitation", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "BUILD", "instruction": "Place Organizations"}, {"index": 4, "condition": "Unfilled Community Infrastructure", "questionId": "q_any_unfilled_community_infrastructure", "action": "MOBILIZE", "instruction": "Only to fill Community Infrastructure"}]}, {"id": "community_dedicated", "name": "Dedicated", "objective": "Rehabilitation", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 3, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 4, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}]}, {"id": "community_organizer", "name": "Organizer", "objective": "Social Movement", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unfilled Community Infrastructure", "questionId": "q_any_unfilled_community_infrastructure", "action": "MOBILIZE", "instruction": "Only to fill Community Infrastructure"}, {"index": 4, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}]}, {"id": "community_determined", "name": "Determined", "objective": "Grassroots", "goal": 1, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Organization in an Economic Coalition", "questionId": "q_any_org_in_economic_coalition", "action": "MOBILIZE", "instruction": "Only to break Economic Coalitions"}, {"index": 3, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}, {"index": 4, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "BUILD", "instruction": "Place Infrastructure"}]}, {"id": "community_collaborator", "name": "Collaborator", "objective": "Social Movement", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Activists \u2264 Employees", "questionId": "q_activists_lte_employees", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population", "questionId": "q_any_unhoused_population", "action": "MOBILIZE", "instruction": "Only to house Population"}, {"index": 4, "condition": "Less than two Districts with more Social than Economic Coalitions", "questionId": "q_less_than_two_districts_social_gt_economic", "action": "ORGANIZE", "instruction": "Place Organizations to form Social Coalitions first"}]}, {"id": "community_independent", "name": "Independent", "objective": "Grassroots", "goal": 2, "rows": [{"index": 1, "condition": "Less than 2 resources", "questionId": "q_resources_lt_community_2", "action": "FUNDRAISE", "instruction": "Community Infrastructure where fewest Vulnerabilities"}, {"index": 2, "condition": "Activists \u2264 Employees", "questionId": "q_activists_lte_employees", "action": "ORGANIZE", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "District with less than two Infrastructure", "questionId": "q_any_district_with_less_than_two_infrastructure", "action": "BUILD", "instruction": "Place Infrastructure"}, {"index": 4, "condition": "Any Public Organization in an Economic Coalition", "questionId": "q_any_public_org_in_economic_coalition", "action": "MOBILIZE", "instruction": "Only to break Economic Coalitions"}]}], "private": [{"id": "private_lender", "name": "Lender", "objective": "Recurring Revenue", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population in District with Private Infrastructure", "questionId": "q_any_unhoused_population_in_district_with_private_infrastructure", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 4, "condition": "Available Loans", "questionId": "q_any_available_loans", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_employer", "name": "Employer", "objective": "Workforce", "goal": 3, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities adjacent available Infrastructure", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 3, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}, {"index": 4, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_buyer", "name": "Buyer", "objective": "Laissez-Faire", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}, {"index": 4, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "DEVELOP", "instruction": "Replace Infrastructure"}]}, {"id": "private_investor", "name": "Investor", "objective": "Trickle Down", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Unhoused Vulnerabilities adjacent available Infrastructure", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 3, "condition": "Fewer Employees than Cases", "questionId": "q_fewer_employees_than_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities without using Coalitions"}, {"index": 4, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}]}, {"id": "private_networked", "name": "Networked", "objective": "Trickle Down", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Vulnerabilities adjacent to Infrastructure with room", "questionId": "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure", "action": "PAY OFF", "instruction": "Only to house Vulnerabilities"}, {"index": 4, "condition": "Fewer Economic Coalitions than Social Coalitions", "questionId": "q_fewer_economic_than_social", "action": "INVEST", "instruction": "Place Organizations to form Economic Coalitions first"}]}, {"id": "private_loss_leader", "name": "Loss Leader", "objective": "Laissez-Faire", "goal": 2, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities without using Coalitions"}, {"index": 3, "condition": "Exhausted Infrastructure", "questionId": "q_any_exhausted_infrastructure", "action": "DEVELOP", "instruction": "Replace Infrastructure"}, {"index": 4, "condition": "Any Private Infrastructure with less than three Population", "questionId": "q_any_private_infrastructure_less_than_three_population", "action": "PAY OFF", "instruction": "Only to exhaust Private Infrastructure with less than three Population"}]}, {"id": "private_volunteer", "name": "Volunteer", "objective": "Workforce", "goal": 3, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Available Loans", "questionId": "q_any_available_loans", "action": "INVEST", "instruction": "Place Loans"}, {"index": 3, "condition": "District with two or more Unhoused Vulnerabilities", "questionId": "q_any_district_with_two_or_more_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Place Organizations"}, {"index": 4, "condition": "Unhoused Vulnerabilities", "questionId": "q_any_unhoused_vulnerabilities", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}]}, {"id": "private_broker", "name": "Broker", "objective": "Laissez-Faire", "goal": 1, "rows": [{"index": 1, "condition": "Less than -3 resources", "questionId": "q_resources_lt_private_neg3", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 2, "condition": "Employees \u2264 Cases", "questionId": "q_employees_lte_cases", "action": "INVEST", "instruction": "Activate to Remove Vulnerabilities"}, {"index": 3, "condition": "Unhoused Population in District with Private Infrastructure", "questionId": "q_any_unhoused_population_in_district_with_private_infrastructure", "action": "SUBURBANIZE", "instruction": "Remove Population where fewest Vulnerabilities"}, {"index": 4, "condition": "No Laissez-Faire", "questionId": "q_no_laissez_faire", "action": "DEVELOP", "instruction": "Replace Infrastructure"}]}]};
const questions = {"q_resources_lt_public_2": {"prompt": "Does Public have fewer than 2 Resources?", "hint": "Check Public's Resource marker on the edge track."}, "q_resources_gt_public_3": {"prompt": "Does Public have more than 3 Resources?", "hint": "Check Public's Resource marker on the edge track."}, "q_resources_lt_community_2": {"prompt": "Does Community have fewer than 2 Resources?", "hint": "Check Community's Resource marker on the edge track."}, "q_resources_lt_private_neg3": {"prompt": "Does Private have fewer than -3 Resources?", "hint": "Check Private's Resource marker on the edge track."}, "q_any_unhoused_vulnerabilities": {"prompt": "Are any Vulnerabilities unhoused?", "hint": "Check each district for pink cubes not sitting on infrastructure."}, "q_any_unhoused_population": {"prompt": "Is any Population unhoused?", "hint": "Check for Population cubes in districts that are not on infrastructure."}, "q_any_exhausted_infrastructure": {"prompt": "Is there any exhausted infrastructure on the board?", "hint": "Look for infrastructure tiles flipped to their exhausted side."}, "q_any_unfilled_public_infrastructure": {"prompt": "Is any Public infrastructure not full?", "hint": "Check Public infrastructure tiles for relevant open capacity."}, "q_any_unfilled_community_infrastructure": {"prompt": "Is any Community infrastructure not full?", "hint": "Check Community infrastructure tiles for relevant open capacity."}, "q_less_than_two_districts_social_gt_economic": {"prompt": "Are fewer than 2 districts led by Social coalitions?", "hint": "Compare Social vs Economic coalitions district by district."}, "q_any_district_with_less_than_two_infrastructure": {"prompt": "Does any district have 0 or 1 infrastructure?", "hint": "Count total infrastructure in each district, regardless of faction."}, "q_fewer_economic_than_social": {"prompt": "Are Economic coalitions behind Social coalitions?", "hint": "Compare total Economic coalition markers to total Social coalition markers."}, "q_employees_lte_cases": {"prompt": "Does Private have Employees less than or equal to Cases?", "hint": "Compare Private Employees to Public Cases in the faction areas."}, "q_any_unhoused_population_in_district_with_private_infrastructure": {"prompt": "Is there unhoused Population in a district with Private infrastructure?", "hint": "Look for districts containing both Private infrastructure and unhoused Population."}, "q_no_laissez_faire": {"prompt": "Is there no laissez-faire district right now?", "hint": "A laissez-faire district has Private infrastructure only \u2014 no Public or Community infrastructure."}, "q_any_inactive_public_organizations": {"prompt": "Are there any inactive Public organizations on the board?", "hint": "Check Public organization cylinders with the symbol side down."}, "q_no_district_with_three_infrastructure": {"prompt": "Is every district still below max infrastructure?", "hint": "For this card, use district capacity: districts other than 2 and 9 can hold up to 3 infrastructure tiles."}, "q_no_district_with_two_public_infrastructure": {"prompt": "Is every district below 2 Public infrastructure?", "hint": "Count Public infrastructure tiles district by district."}, "q_social_not_equal_economic": {"prompt": "Are Social and Economic coalitions uneven?", "hint": "Compare total Social coalition markers to total Economic coalition markers on the map."}, "q_activists_lte_employees": {"prompt": "Does Community have Activists less than or equal to Employees?", "hint": "Compare Community's Activists to Private's Employees, as tracked in faction areas."}, "q_any_public_org_in_economic_coalition": {"prompt": "Is any Public organization currently in an Economic coalition?", "hint": "Look for Public organizations paired with Private organizations on the same infrastructure."}, "q_any_org_in_economic_coalition": {"prompt": "Is there a relevant organization currently in an Economic coalition?", "hint": "Check whether a legal Community mobilize target is part of an Economic coalition."}, "q_any_available_loans": {"prompt": "Are any Loans available?", "hint": "Check the Private faction area for available Loan markers not already on the map or committed."}, "q_any_unhoused_vulnerabilities_adjacent_available_infrastructure": {"prompt": "Is any unhoused Vulnerability next to legal infrastructure with room?", "hint": "Find unhoused Vulnerabilities, then check whether an adjacent district has legal infrastructure space for the PAY OFF effect."}, "q_fewer_employees_than_cases": {"prompt": "Does Private have fewer Employees than Cases?", "hint": "Compare Private Employees to Public Cases."}, "q_any_private_infrastructure_less_than_three_population": {"prompt": "Is any Private infrastructure holding fewer than 3 Population?", "hint": "Check each Private infrastructure tile and count housed Population."}, "q_any_district_with_two_or_more_unhoused_vulnerabilities": {"prompt": "Does any district have 2+ unhoused Vulnerabilities?", "hint": "Count only Vulnerability cubes not housed on infrastructure, district by district."}};
const actionGates = {"BUDGET": {"prompt": "Can BUDGET place Population anywhere?", "hint": "Check whether any legal placement exists under the action and card instruction."}, "RELOCATE": {"prompt": "Can RELOCATE move Population anywhere?", "hint": "Check for movable Population and a legal destination."}, "SERVICE": {"prompt": "Can SERVICE do this anywhere?", "hint": "Check inactive/available Public organizations and legal target districts."}, "HOUSE": {"prompt": "Can HOUSE do this anywhere?", "hint": "Check supply, exhausted targets, district capacity, and instruction restrictions."}, "FUNDRAISE": {"prompt": "Can FUNDRAISE happen right now?", "hint": "Check the normal FUNDRAISE rules and whether the action is currently available."}, "MOBILIZE": {"prompt": "Can MOBILIZE do this anywhere?", "hint": "Check for legal Population or organization movement."}, "ORGANIZE": {"prompt": "Can ORGANIZE do this anywhere?", "hint": "Check inactive/available Community organizations and legal housing slots."}, "BUILD": {"prompt": "Can BUILD do this anywhere?", "hint": "Check for a legal district for Community infrastructure, or a special override if the card text changes the output."}, "SUBURBANIZE": {"prompt": "Can SUBURBANIZE remove Population anywhere?", "hint": "Check the normal SUBURBANIZE rules and identify legal source districts."}, "INVEST": {"prompt": "Can INVEST do this anywhere?", "hint": "Check inactive/available Private organizations, available loans, and legal districts."}, "DEVELOP": {"prompt": "Can DEVELOP do this anywhere?", "hint": "Check exhausted infrastructure or any card-specific legal development target."}};
const priorityColumns = {"place_population": {"title": "Place Population", "bullets": ["Infrastructure with room", "Least Population", "Least Vulnerabilities", "Most Infrastructure", "With own Organization", "With Community Organization", "Player selection from remaining spaces"]}, "replace_or_place_infrastructure": {"title": "Replace / Place Infrastructure", "bullets": ["Exhausted Infrastructure", "Most unhoused Population", "Most unhoused Vulnerabilities", "Most Vulnerabilities", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_replace_refresh_organization": {"title": "Place / Replace / Refresh Organization", "bullets": ["Most unhoused Vulnerabilities", "Most Vulnerabilities", "To form Coalition", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_grant_or_loan": {"title": "Place Grant / Loan", "bullets": ["With own Organization", "With Public Organization", "With Community Organization", "Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "place_vulnerability": {"title": "Place Vulnerability", "bullets": ["Infrastructure with room", "Least unhoused Vulnerabilities", "Least Vulnerabilities", "Most Organizations", "Fewest own Organizations", "Player selection from remaining spaces"]}, "remove_vulnerability": {"title": "Remove Vulnerability", "bullets": ["Most unhoused Vulnerabilities", "Most Vulnerabilities", "Most Population", "Player selection from remaining spaces"]}, "remove_population": {"title": "Remove Population", "bullets": ["Most Population", "Fewest own Organizations", "Player selection from remaining spaces"]}, "remove_or_activate_organization": {"title": "Remove / Activate Organization", "bullets": ["Least Vulnerabilities", "Most Infrastructure", "With own Organization", "Player selection from remaining spaces"]}, "exhaust_infrastructure": {"title": "Exhaust Infrastructure", "bullets": ["Least Population", "Least unhoused Vulnerabilities", "Least Vulnerabilities", "Most Infrastructure", "Fewest own Organizations", "Player selection from remaining spaces"]}};
const instructionToPriorityColumn = {"Place Population": "place_population", "Place Population only to fill Infrastructure": "place_population", "Place Infrastructure": "replace_or_place_infrastructure", "Place Infrastructure where Public Infrastructure": "replace_or_place_infrastructure", "Replace Infrastructure": "replace_or_place_infrastructure", "Only to fill Public Infrastructure": "place_population", "Only to fill Community Infrastructure": "place_population", "Activate to Remove Vulnerabilities": "remove_vulnerability", "Activate to remove Blight then Remove Vulnerabilities": "remove_vulnerability", "Place Organization": "place_replace_refresh_organization", "Place Organizations": "place_replace_refresh_organization", "Place Organizations only to equalize Socio-Economic": "place_replace_refresh_organization", "Place Organizations to form Social Coalitions first": "place_replace_refresh_organization", "Place Organizations to form Economic Coalitions first": "place_replace_refresh_organization", "Community Infrastructure where fewest Vulnerabilities": "replace_or_place_infrastructure", "Only to house Population": "place_population", "Only to house Vulnerabilities": "place_vulnerability", "Only to break Economic Coalitions": "remove_or_activate_organization", "Place Loans": "place_grant_or_loan", "Remove Population where fewest Vulnerabilities": "remove_population", "Activate to Remove Vulnerabilities without using Coalitions": "remove_vulnerability", "Only to exhaust Private Infrastructure with less than three Population": "exhaust_infrastructure"};

const state = {
  screen:"home", playerFaction:null, selectedFaction:null,
  npCards:{public:null,community:null,private:null},
  npPlannedActions:{public:null,community:null,private:null},
  mode:"act", rowIndex:0, selectedTargets:[], targetLimit:1,
  stage:"condition", priorityStep:0, history:[], result:null, districtChoice:null,
  showHint:false, showTrace:false, resolverSnapshots:[],
  planStep:"intro", planPriorityStep:0, planDistrictChoice:null, planRefreshDistrict:null, planTrace:[]
};

const app = document.getElementById('app');
document.getElementById('backBtn').onclick = back;
document.getElementById('resetBtn').onclick = resetAll;

function esc(s){ return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
function btn(label, onclick, klass=""){ return `<button class="btn ${klass}" onclick="${onclick}">${label}</button>`; }
function pill(text, faction){ return `<span class="pill ${factions[faction].pill}">${text}</span>`; }
function npFactions(){ return Object.keys(factions).filter(f => f !== state.playerFaction); }
function currentCard(){ if(!state.selectedFaction) return null; const id=state.npCards[state.selectedFaction]; return cards[state.selectedFaction].find(c=>c.id===id)||null; }
function currentRow(){ const c=currentCard(); return c?.rows?.[state.rowIndex]||null; }
function currentQuestion(){ const r=currentRow(); return r ? questions[r.questionId] : null; }
function currentGate(){ const r=currentRow(); return r ? actionGates[r.action] : null; }
function currentPriorityKey(){ const r=currentRow(); return r ? instructionToPriorityColumn[r.instruction] || null : null; }
function currentPriority(){ const k=currentPriorityKey(); return k ? priorityColumns[k] : null; }
function currentPriorityBullet(){ const p=currentPriority(); return p ? p.bullets[state.priorityStep] : null; }
function currentTargetLimit(){ const row=currentRow(); if(state.mode!=="act") return 1; if(row && ["BUILD","HOUSE","DEVELOP"].includes(row.action)) return 1; return 3; }
function isMultiTargetMode(){ return currentTargetLimit()>1; }
function remainingTargetSlots(){ return Math.max(0, currentTargetLimit() - state.selectedTargets.length); }
function planPriorityColumn(){ return priorityColumns.place_replace_refresh_organization; }
function currentPlanBullet(){ const p=planPriorityColumn(); return p ? p.bullets[state.planPriorityStep] : null; }
function progress(){ const c=currentCard(); return c ? ((state.rowIndex + (state.stage==="gate"?0.33:state.stage==="priority"?0.66:state.stage==="district"?0.85:0))/c.rows.length)*100 : 0; }

function resetResolverState(){ state.rowIndex=0; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.selectedTargets=[]; state.targetLimit=1; state.showHint=false; state.showTrace=false; state.history=[]; state.result=null; state.resolverSnapshots=[]; state.planStep="intro"; state.planPriorityStep=0; state.planDistrictChoice=null; state.planRefreshDistrict=null; state.planTrace=[]; }
function resetAll(){ state.screen="home"; state.playerFaction=null; state.selectedFaction=null; state.npCards={public:null,community:null,private:null}; state.npPlannedActions={public:null,community:null,private:null}; state.mode="act"; resetResolverState(); render(); }
function back(){ const s=state.screen; if(s==="home") return; if(s==="setup_player") state.screen="home"; else if(s==="setup_np_card") state.screen=state.playerFaction?"setup_player":"home"; else if(s==="dashboard") state.screen="setup_player"; else if(s==="mode") state.screen="dashboard"; else if(s==="plan_helper"||s==="event_helper"||s==="resolver") state.screen="mode"; else if(s==="result") state.screen="dashboard"; render(); }

function beginSoloSetup(){ state.screen="setup_player"; render(); }
function choosePlayerFaction(f){ state.playerFaction=f; state.selectedFaction=null; state.npCards={public:null,community:null,private:null}; state.npPlannedActions={public:null,community:null,private:null}; resetResolverState(); const others=Object.keys(factions).filter(x=>x!==f); state.selectedFaction=others[0]; state.screen="setup_np_card"; render(); }
function chooseNpcCard(id){ state.npCards[state.selectedFaction]=id; const remaining=npFactions().find(f=>!state.npCards[f]); if(remaining){ state.selectedFaction=remaining; state.screen="setup_np_card"; } else state.screen="dashboard"; render(); }
function startResolver(f){ state.selectedFaction=f; resetResolverState(); state.screen="mode"; render(); }
function startModeResolution(){ resetResolverState(); state.targetLimit=state.mode==="act"?3:1; if(state.mode==="plan"){ state.screen="plan_helper"; render(); return; } if(state.mode==="event"){ state.screen="event_helper"; render(); return; } state.screen="resolver"; render(); }
function recordPlannedAction(nextAction){ if(!state.selectedFaction) return; state.npPlannedActions[state.selectedFaction]=nextAction; const refreshLine=state.planRefreshDistrict ? `Refresh Organization in District ${state.planRefreshDistrict}, if possible.` : `No legal Organization refresh was identified, so skip the refresh.`; state.result={ status:"resolved", title:`PLAN recorded for ${factions[state.selectedFaction].label} NP`, body:`Complete the PLAN procedure: do not call an Audit, ${refreshLine.toLowerCase()} Then use ${nextAction.toUpperCase()} as the next main action for this NP faction.`, trace:[`PLAN selected for ${factions[state.selectedFaction].label} NP.`,`NP PLAN does not call an Audit.`,refreshLine,...state.planTrace,`Next recorded main action: ${nextAction.toUpperCase()}.`] }; state.screen="result"; render(); }
function answerPlanPriority(answer){ const bullet=currentPlanBullet(); if(!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="yes"){ state.planStep="district"; state.planDistrictChoice=null; state.showHint=false; render(); return; } if(state.planPriorityStep >= planPriorityColumn().bullets.length-1){ state.planTrace=[...state.planTrace,`Exhausted refresh priority column without finding a unique district.`]; state.planRefreshDistrict=null; state.planStep="action"; state.showHint=false; render(); return; } state.planTrace=[...state.planTrace,`Refresh bullet '${bullet}' did not break the tie.`]; state.planPriorityStep += 1; state.planDistrictChoice=null; state.showHint=false; render(); }
function choosePlanDistrict(d){ state.planDistrictChoice=d; render(); }
function answerPlanDistrict(answer){ const bullet=currentPlanBullet(); if(!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="still_tied"){ if(state.planPriorityStep >= planPriorityColumn().bullets.length-1){ state.planTrace=[...state.planTrace,`Bullet '${bullet}' still left multiple districts tied after the final priority.`]; state.planRefreshDistrict=null; state.planStep="action"; state.showHint=false; render(); return; } state.planTrace=[...state.planTrace,`Bullet '${bullet}' still left multiple districts tied.`]; state.planPriorityStep += 1; state.planStep="priority"; state.planDistrictChoice=null; state.showHint=false; render(); return; } if(answer==="none"){ state.planTrace=[...state.planTrace,`No district qualified for refresh at bullet '${bullet}'.`]; state.planRefreshDistrict=null; state.planStep="action"; state.showHint=false; render(); return; } state.planRefreshDistrict=answer; state.planTrace=[...state.planTrace,`Refresh bullet '${bullet}' selected District ${answer}.`]; state.planStep="action"; state.showHint=false; render(); }

function recordStep(reason){ state.history.push({rowIndex:state.rowIndex, stage:state.stage, reason}); }
function pushResolverSnapshot(){ state.resolverSnapshots.push({ rowIndex:state.rowIndex, stage:state.stage, priorityStep:state.priorityStep, districtChoice:state.districtChoice, showHint:state.showHint, history:JSON.parse(JSON.stringify(state.history)), selectedTargets:[...state.selectedTargets], resolverCandidates:[...(state.resolverCandidates||[])], resolverPool:[...(state.resolverPool||[])] }); }
function stepBackResolver(){ if(!state.resolverSnapshots.length) return; const prev=state.resolverSnapshots.pop(); state.rowIndex=prev.rowIndex; state.stage=prev.stage; state.priorityStep=prev.priorityStep; state.districtChoice=prev.districtChoice; state.selectedTargets=prev.selectedTargets||[]; state.showHint=prev.showHint; state.history=prev.history; state.resolverCandidates=prev.resolverCandidates||[...DISTRICTS]; state.resolverPool=prev.resolverPool||[...DISTRICTS]; render(); }
function buildTrace(extra=[]){ const out=[...state.history.map(h=>h.reason).filter(Boolean), ...extra.filter(Boolean)]; return out.length?out:["No rules trace was captured for this result."]; }
function moveToNextRow(reason){ const c=currentCard(), r=currentRow(); if(!c||!r) return; state.history=[...state.history, {rowIndex:state.rowIndex, stage:state.stage, reason}]; if(state.rowIndex >= c.rows.length-1){ state.result={status:"discard", title:`Discard ${c.name}`, body:"No listed action was both applicable and effective. Draw a new Position card for this NP faction.", trace:state.history.map(h=>h.reason).filter(Boolean)}; state.screen="result"; render(); return; } state.rowIndex += 1; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.showHint=false; render(); }

function answerCondition(answer){ const row=currentRow(); if(!row) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="no"){ moveToNextRow(`Row ${row.index} condition was false: ${row.condition}.`); return; } pushResolverSnapshot(); recordStep(`Row ${row.index} condition was true: ${row.condition}.`); state.stage="gate"; state.showHint=false; render(); }
function answerGate(answer){ const row=currentRow(), gate=currentGate(); if(!row||!gate) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="no"){ moveToNextRow(`Tried ${row.action}, but it would not work here. Move to the next row.`); return; } pushResolverSnapshot(); if(currentPriority()){ state.stage="priority"; state.priorityStep=0; state.showHint=false; render(); return; } state.result={ status:"resolved", title:`${row.action} selected`, body:`The first applicable and effective row is Row ${row.index}: ${row.action} — ${row.instruction}.`, trace:buildTrace([`${row.action} passed the basic effectiveness gate.`]) }; state.screen="result"; render(); }
function answerPriority(answer){ const row=currentRow(), pr=currentPriority(), bullet=currentPriorityBullet(); if(!row||!pr||!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="yes"){ pushResolverSnapshot(); state.stage="district"; state.districtChoice=null; state.showHint=false; render(); return; } if(state.priorityStep >= pr.bullets.length-1){ state.result={status:"resolved", title:`${row.action} needs manual tie-break`, body:"The priority column was exhausted without reducing the remaining tied districts to one district. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.", trace:buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`No bullet reduced the remaining tied districts to a single district before fallback.`]) }; state.screen="result"; render(); return; } state.priorityStep += 1; state.districtChoice=null; state.showHint=false; render(); }
function chooseDistrict(d){ state.districtChoice=d; render(); }
function answerDistrict(answer){ const row=currentRow(), pr=currentPriority(), bullet=currentPriorityBullet(); if(!row||!pr||!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } pushResolverSnapshot(); if(answer==="still_tied"||answer==="none"){ if(state.priorityStep >= pr.bullets.length-1){ state.result={status:"resolved", title:`${row.action} needs manual tie-break`, body:"No unique district was produced after the final priority bullet. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.", trace:buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`Bullet '${bullet}' did not reduce the remaining tied districts to a unique district.`])}; state.screen="result"; render(); return; } state.priorityStep += 1; state.stage="priority"; state.districtChoice=null; state.showHint=false; render(); return; } const nextTargets=[...state.selectedTargets, answer]; const targetLimit=currentTargetLimit(); const trace=buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`Bullet '${bullet}' reduced the remaining tied districts to District ${answer}.`,`Selected Row ${row.index}: ${row.action} — ${row.instruction}.`,`District ${answer} is target ${nextTargets.length}${isMultiTargetMode() ? ` of up to ${targetLimit}` : ""}.`]); if(isMultiTargetMode() && nextTargets.length < targetLimit){ state.selectedTargets=nextTargets; state.history=[...state.history, {rowIndex:state.rowIndex, stage:"district", reason:`Target ${nextTargets.length} selected: District ${answer}.`}]; state.result={status:"continue", title:`${row.action} • Target ${nextTargets.length} locked`, body:`District ${answer} was selected. You can resolve another district for this same ${row.action} action, up to ${targetLimit} total.`, trace}; state.screen="result"; render(); return; } state.selectedTargets=nextTargets; state.result={status:"resolved", title:`${row.action} selected${nextTargets.length>1 ? ` • ${nextTargets.length} targets` : ` • District ${answer}`}`, body: nextTargets.length>1 ? `Use the NP Aid priority column '${pr.title}'. Final targets: ${nextTargets.map(d=>`District ${d}`).join(", ")}.` : `Use the NP Aid priority column '${pr.title}'. The first bullet that reduced the remaining tied districts to one district was '${bullet}', leaving District ${answer}.`, trace}; state.screen="result"; render(); }
function continueSameAction(){ state.rowIndex=0; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.showHint=false; state.showTrace=false; state.result=null; state.resolverPool=[...DISTRICTS]; state.resolverCandidates=[]; state.screen="resolver"; render(); }
function finishThisAction(){ state.result={...state.result, status:"resolved", title:`${currentRow()?.action || "Action"} finished`, body:`Final targets: ${state.selectedTargets.map(d=>`District ${d}`).join(", ")}.`, trace: state.result?.trace || []}; render(); }
function handleDiscardReplacement(){ if(!state.selectedFaction) return; state.npCards[state.selectedFaction]=null; resetResolverState(); state.screen="setup_np_card"; render(); }
function currentHint(){ if(state.stage==="condition") return currentQuestion()?.hint || ""; if(state.stage==="gate") return currentGate()?.hint || ""; if(state.stage==="priority") return "Apply this bullet only to the same remaining tied districts. If it does not reduce the tie, continue to the next bullet."; return "Pick the district that remains after applying this bullet to the currently tied districts. If more than one still qualifies, choose 'Still tied'."; }

function render(){ 
  if(state.screen==="home"){ app.innerHTML=`<div class="card"><div class="row" style="align-items:center;margin-bottom:10px"><div><div style="font-size:22px;font-weight:800">Solo NP sidekick</div><div class="muted">Pick your faction once. The other two stay remembered as NP factions.</div></div></div><div class="panel" style="margin-bottom:14px">Choose the faction you are playing. The app will remember the current Position cards for the other two factions and only ask for a new card when one gets discarded.</div>${btn("Start solo setup ›","beginSoloSetup()","primary")}</div>`; return; }
  if(state.screen==="setup_player"){ app.innerHTML=`<div style="margin-bottom:12px"><h2>Which faction are you playing?</h2><p class="muted">The other two factions will be treated as NP factions.</p></div>` + Object.entries(factions).map(([k,v])=>`<div class="card ${v.ring}" style="cursor:pointer" onclick="choosePlayerFaction('${k}')"><div class="row"><div><div style="font-size:18px;font-weight:700">${v.label}</div><div class="muted">Play as this faction</div></div>${pill(v.short,k)}</div></div>`).join(""); return; }
  if(state.screen==="setup_np_card"){ const f=state.selectedFaction; app.innerHTML=`<div style="margin-bottom:12px"><h2>Choose Position card for ${factions[f].label}</h2><p class="muted">This card will be remembered until it gets discarded.</p></div>` + cards[f].map(card=>`<div class="card" style="cursor:pointer" onclick="chooseNpcCard('${card.id}')"><div class="row" style="margin-bottom:10px"><div><div class="titleblue">${esc(card.name)}</div><div class="objblue">Objective: ${esc(card.objective)}</div></div><span class="badge">Goal ${card.goal}</span></div><div class="grid">${card.rows.map(row=>`<div class="panel" style="font-size:14px"><b>${row.index}.</b> ${esc(row.condition)} → <b>${row.action}</b></div>`).join("")}</div></div>`).join(""); return; }
  if(state.screen==="dashboard"){ app.innerHTML=`<div class="card"><div class="small">You are playing</div><div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div></div>` + npFactions().map(f=>{ const card=cards[f].find(c=>c.id===state.npCards[f]); return `<div class="card"><div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ""}` : "No Position card selected"}</div></div>${pill(factions[f].short,f)}</div><div class="grid2">${btn("Resolve turn",`startResolver('${f}')`, card ? "primary":"")}${btn("Change card",`state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div></div>`; }).join(""); return; }
  if(state.screen==="plan_helper"){ const c=currentCard(); const bullet=currentPlanBullet(); const hint=state.showHint ? `<div class="hint">Use the <b>Place / Replace / Refresh Organization</b> priority column: test the current bullet against the tied candidate districts, then move to the next bullet only if it does not produce one district.</div>` : ""; let refreshArea=""; if(state.planStep==="intro"){ refreshArea=`<div class="panel" style="margin-bottom:14px"><div style="font-weight:700">PLAN checklist</div><div style="margin-top:8px">1. Do <b>not</b> call an Audit for an NP PLAN.</div><div>2. Refresh an Organization if possible, using the <b>Place / Replace / Refresh Organization</b> priorities.</div><div>3. Record the next main action for this NP faction.</div></div><div class="grid"><button class="btn primary" onclick="state.planStep='priority'; state.showHint=false; render()">Run refresh protocol</button></div>`; } else if(state.planStep==="priority"){ refreshArea=`<div class="panel" style="margin-bottom:14px"><div style="font-weight:700">Refresh protocol</div><div style="margin-top:8px;font-size:12px;text-transform:uppercase;opacity:.75">Priority bullet ${state.planPriorityStep+1} of ${planPriorityColumn().bullets.length}</div><div style="margin-top:6px;font-size:18px;font-weight:700">${esc(bullet)}</div><div style="margin-top:6px">Does this bullet break the tie for which district should refresh an Organization?</div></div><div class="grid">${btn("Yes","answerPlanPriority('yes')","primary")}${btn("No","answerPlanPriority('no')")}${btn(state.showHint ? "Hide hint":"Need help?","state.showHint=!state.showHint; render()","ghost")}</div>${hint}`; } else if(state.planStep==="district"){ refreshArea=`<div class="panel" style="margin-bottom:14px"><div style="font-weight:700">Choose the refresh district</div><div style="margin-top:8px">Current bullet: <b>${esc(bullet)}</b></div></div><div class="grid4">${["1","2","3","4","5","6","9"].map(d=>`<button class="btn ${state.planDistrictChoice===d?'selected':''}" onclick="choosePlanDistrict('${d}')">${d}</button>`).join("")}</div><div class="grid">${btn(`Confirm District ${state.planDistrictChoice || "?"}`, state.planDistrictChoice ? `answerPlanDistrict('${state.planDistrictChoice}')` : "void(0)", state.planDistrictChoice ? "primary":"")}${btn("Still tied","answerPlanDistrict('still_tied')")}${btn("No district","answerPlanDistrict('none')")}</div>`; } else { const refreshSummary=state.planRefreshDistrict ? `Refresh Organization in <b>District ${state.planRefreshDistrict}</b>, if possible.` : `No legal Organization refresh was identified.`; refreshArea=`<div class="panel" style="margin-bottom:14px"><div style="font-weight:700">Refresh result</div><div style="margin-top:8px">${refreshSummary}</div></div><div class="small" style="margin-bottom:8px">Next main action</div><div class="grid2">${["act","react","event","plan"].map(v=>btn(v.toUpperCase(),`recordPlannedAction('${v}')`)).join("")}</div>`; } const trace=state.planTrace.length ? `<div class="card"><div style="font-weight:700;margin-bottom:8px">Refresh trace</div>${state.planTrace.map(line=>`<div class="trace" style="margin-top:8px">${esc(line)}</div>`).join("")}</div>` : ""; app.innerHTML=`<div class="card"><div class="small">PLAN procedure • ${factions[state.selectedFaction].label} NP</div><div class="titleblue">${c.name}</div><div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div>${refreshArea}</div>${trace}`; return; }
  if(state.screen==="event_helper"){ const c=currentCard(); app.innerHTML=`<div class="card"><div class="small">EVENT procedure • ${factions[state.selectedFaction].label} NP</div><div class="titleblue">${c.name}</div><div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div><div class="panel" style="margin-bottom:14px"><div style="font-weight:700">EVENT reminder</div><div style="margin-top:8px">Refer to the current Event card and resolve its instructions first.</div><div style="margin-top:8px">Use NP General Principles and NP General Priorities for any choices required by the Event.</div><div style="margin-top:8px">If given a choice, each faction places its own Infrastructure and Organizations first. NP Public and Community place Grants before Loans; NP Private places Loans before Grants.</div></div><div class="grid">${btn("Done with Event","state.screen='dashboard'; render()","primary")}${btn("Back to mode selection","state.screen='mode'; render()")}</div></div>`; return; }
  if(state.screen==="mode"){ const c=currentCard(); const helperNote=state.mode==='event'?'Choosing EVENT jumps straight into the EVENT protocol and prefills the action log.':'Resolve the selected NP action.'; app.innerHTML=`<div class="card"><div class="small">Resolving ${factions[state.selectedFaction].label} NP</div><div class="titleblue">${c.name}</div><div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div><div class="small" style="margin-bottom:8px">Resolution mode</div><div class="grid2" style="margin-bottom:14px">${[["act","Act"],["react","React"],["plan","Plan"],["event","Event"]].map(([v,l])=>btn(l,`state.mode='${v}'; render()`, state.mode===v ? "primary":"")).join("")}</div><div class="panel" style="margin-bottom:14px">${helperNote}</div>${btn(state.mode==='event' ? 'Open EVENT protocol' : `Resolve ${state.mode}`,"startModeResolution()","primary")}</div>`; return; }
  if(state.screen==="resolver"){ const c=currentCard(), r=currentRow(), q=currentQuestion(), g=currentGate(), p=currentPriority(), b=currentPriorityBullet(); const headerClass=state.selectedFaction==="public"?"header-public":state.selectedFaction==="community"?"header-community":"header-private"; const prompt=state.stage==="condition"?q.prompt:state.stage==="gate"?g.prompt:state.stage==="priority"?"Does this bullet break the tie?":"Which district wins this bullet?"; const sub=state.stage==="condition"?`Card condition: ${r.condition}`:state.stage==="gate"?`Action check: ${r.action}`:state.stage==="priority"?`${p ? p.title : "No mapped column"} • Bullet ${state.priorityStep+1}${p ? ` of ${p.bullets.length}` : ""}`:b; let actionArea=""; if(state.stage==="condition") actionArea=`<div class="grid">${btn("Yes","answerCondition('yes')","primary")}${btn("No","answerCondition('no')")}${btn("Not sure","answerCondition('not_sure')","secondary")}</div>`; else if(state.stage==="gate") actionArea=`<div class="grid">${btn("Yes","answerGate('yes')","primary")}${btn("No","answerGate('no')")}${btn("Not sure","answerGate('not_sure')","secondary")}</div>`; else if(state.stage==="priority") actionArea=`<div class="bluebullet" style="border-radius:18px;padding:14px"><div style="font-size:12px;text-transform:uppercase;opacity:.8">Priority bullet</div><div style="margin-top:4px;font-size:16px;font-weight:700">${esc(b)}</div></div><div class="grid">${btn("Yes","answerPriority('yes')","primary")}${btn("No","answerPriority('no')")}${btn("Not sure","answerPriority('not_sure')","secondary")}</div>`; else actionArea=`<div class="grid4">${["1","2","3","4","5","6","9"].map(d=>`<button class="btn ${state.districtChoice===d?'selected':''}" onclick="chooseDistrict('${d}')">${d}</button>`).join("")}</div><div class="grid">${btn(`Confirm District ${state.districtChoice || "?"}`, state.districtChoice ? `answerDistrict('${state.districtChoice}')` : "void(0)", state.districtChoice ? "primary":"")}${btn("Still tied","answerDistrict('still_tied')")}${btn("No district","answerDistrict('none')")}${btn("Not sure","answerDistrict('not_sure')","secondary")}</div>`; const targetCard=isMultiTargetMode()?`<div class="targetcard" style="border-radius:18px;padding:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:12px;font-weight:700;text-transform:uppercase">◎ Targets for this action</div><div style="display:flex;flex-wrap:wrap;gap:8px">${Array.from({length:currentTargetLimit()}).map((_,idx)=>{ const value=state.selectedTargets[idx]; return `<span class="chip ${value ? 'chip-filled':'chip-empty'}">${value ? `Target ${idx+1}: District ${value}` : `Target ${idx+1}: —`}</span>`; }).join("")}</div><div style="margin-top:8px;font-size:12px">${remainingTargetSlots()>0 ? `${remainingTargetSlots()} target slot${remainingTargetSlots()===1?'':'s'} left.` : "No target slots left."}</div></div>`:""; const hint=state.showHint?`<div class="hint">${esc(currentHint())}</div>`:""; const trace=state.showTrace?`<div style="padding:0 20px 20px 20px">${state.history.length ? state.history.map(item=>`<div class="trace" style="margin-top:8px">${esc(item.reason)}</div>`).join("") : `<div class="muted">No steps logged yet.</div>`}</div>`:""; app.innerHTML=`<div class="grid4" style="font-size:12px;font-weight:600">${["condition","gate","priority","district"].map((k,i)=>`<div class="${state.stage===k?'stepon':'stepoff'}" style="border-radius:16px;padding:8px 10px;text-align:center">${["Row","Legal","Priority","District"][i]}</div>`).join("")}</div><div class="card" style="padding:0;border:1px solid #e2e8f0;overflow:hidden"><div class="${headerClass}" style="padding:20px"><div class="row"><div><div style="font-size:12px;text-transform:uppercase;opacity:.8">Current row</div><div style="margin-top:4px;font-size:18px;font-weight:700">Row ${r.index} • ${r.action}</div><div style="font-size:14px;opacity:.9">${esc(r.instruction)}</div></div><span class="badge">${esc(c.name)}</span></div><div style="margin-top:12px" class="progress"><div class="bar" style="width:${progress()}%"></div></div></div><div style="padding:20px;display:grid;gap:16px"><div class="checkcard" style="border-radius:18px;padding:14px"><div style="font-size:12px;text-transform:uppercase;color:#000">Check</div><div style="margin-top:4px;font-size:18px;font-weight:700;color:#000">${esc(prompt)}</div><div style="margin-top:8px;font-size:14px;color:#000">${esc(sub)}</div></div>${targetCard}${actionArea}<div class="grid2">${btn("‹ Back one step","stepBackResolver()")}${btn(state.showHint ? "Hide hint":"Need help?","state.showHint=!state.showHint; render()","ghost")}</div>${hint}</div></div><div class="card" style="padding:0;border:1px solid #bae6fd;overflow:hidden"><button style="display:flex;width:100%;justify-content:space-between;align-items:center;padding:16px 20px;background:transparent;border:0" onclick="state.showTrace=!state.showTrace; render()"><div><div style="font-weight:700">Why it did that</div><div class="muted">Rules trace</div></div><span class="badge">${state.showTrace ? "Hide":"Show"}</span></button>${trace}</div>`; return; }
  if(state.screen==="result" && state.result){ const r=state.result; const resultClass=r.status==="resolved"?"result-resolved":r.status==="continue"?"result-continue":"result-discard"; const iconClass=r.status==="resolved"?"iconbox ok":r.status==="continue"?"iconbox cont":"iconbox warn"; const actions=r.status==="discard"?btn("Draw replacement card","handleDiscardReplacement()"):r.status==="continue"?btn("Resolve another district","continueSameAction()")+btn("Finish this action","finishThisAction()"):btn("Resolve this NP again",`startResolver('${state.selectedFaction}')`); app.innerHTML=`<div class="card ${resultClass}"><div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px"><div class="${iconClass}">${r.status==="discard"?"!":"✓"}</div><div><div style="font-size:22px;font-weight:700">${esc(r.title)}</div><div class="muted" style="margin-top:4px">${esc(r.body)}</div></div></div><div class="grid">${btn("Return to dashboard","state.screen='dashboard'; render()","primary")}${actions}</div></div><div class="card"><div style="font-weight:700;margin-bottom:8px">Why it did that</div>${(r.trace && r.trace.length?r.trace:["No rules trace was captured for this result."]).map(line=>`<div class="trace" style="margin-top:8px">${esc(line)}</div>`).join("")}</div>`; return; }
}

window.state=state; window.render=render; window.beginSoloSetup=beginSoloSetup; window.choosePlayerFaction=choosePlayerFaction; window.chooseNpcCard=chooseNpcCard; window.startResolver=startResolver; window.startModeResolution=startModeResolution; window.recordPlannedAction=recordPlannedAction; window.answerCondition=answerCondition; window.answerGate=answerGate; window.answerPriority=answerPriority; window.chooseDistrict=chooseDistrict; window.answerDistrict=answerDistrict; window.continueSameAction=continueSameAction; window.finishThisAction=finishThisAction; window.handleDiscardReplacement=handleDiscardReplacement; window.stepBackResolver=stepBackResolver; window.answerPlanPriority=answerPlanPriority; window.choosePlanDistrict=choosePlanDistrict; window.answerPlanDistrict=answerPlanDistrict;
if('serviceWorker' in navigator){ window.addEventListener('load', ()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
render();

// --- Phase 2 enhancements ---
Object.assign(state, {
  eventWizard: { critical: null, boxes: { act: true, event: true, react: true, plan: true }, notes: "" },
  censusHelper: {
    step: 0,
    checks: { quota: false, correct: false, audit: false, objectives: false, reset: false },
    notes: { quota: "", correct: "", audit: "", objectives: "", reset: "" }
  },
  districtHelper: { column: "place_population", mode: "target", candidates: ["1","2","3","4","5","6","9"], chosen: null },
  saveLoadText: "",
  lastSavedAt: null
});

const DISTRICTS = ["1", "2", "3", "4", "5", "6", "9"];
const REACT_LOCKED_ACTIONS = ["HOUSE", "BUILD", "DEVELOP"];
const LOCAL_SAVE_KEY = "cbe-np-companion-state-v2";

function deepClone(v){ return JSON.parse(JSON.stringify(v)); }
function helperBtn(label, onclick, tone="") { return btn(label, onclick, tone); }
function gridButtons(items, cls="grid2") { return `<div class="${cls}">${items.join("")}</div>`; }
function toggleCandidateDistrict(d){
  const set = new Set(state.districtHelper.candidates || []);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.districtHelper.candidates = DISTRICTS.filter(x => set.has(x));
  if(state.districtHelper.chosen && !set.has(state.districtHelper.chosen)) state.districtHelper.chosen = null;
  render();
}
function clearCandidateDistricts(){ state.districtHelper.candidates = []; state.districtHelper.chosen = null; render(); }
function resetCandidateDistricts(){ state.districtHelper.candidates = [...DISTRICTS]; state.districtHelper.chosen = null; render(); }
function chooseHelperDistrict(d){
  if(!(state.districtHelper.candidates || []).includes(d)) return;
  state.districtHelper.chosen = d;
  render();
}
function districtModeLabel(){ return state.districtHelper.mode === "target" ? "move to / place / refresh" : "remove from / activate"; }
function boardHelperSummary(){
  const col = priorityColumns[state.districtHelper.column];
  const candidates = state.districtHelper.candidates || [];
  const chosen = state.districtHelper.chosen;
  return `${col ? col.title : "Priority"} • ${districtModeLabel()} • ${candidates.length} candidate${candidates.length === 1 ? "" : "s"}${chosen ? ` • Winner: District ${chosen}` : ""}`;
}

function saveStateLocal(){
  const payload = deepClone(state);
  localStorage.setItem(LOCAL_SAVE_KEY, JSON.stringify(payload));
  state.lastSavedAt = new Date().toISOString();
  state.result = {
    status: "resolved",
    title: "State saved",
    body: "The current companion state was saved in this browser.",
    trace: [`Saved local state at ${state.lastSavedAt}.`]
  };
  state.screen = "result";
  render();
}
function loadStateLocal(){
  const raw = localStorage.getItem(LOCAL_SAVE_KEY);
  if(!raw){
    state.result = { status: "discard", title: "No saved state", body: "There is no saved browser state yet.", trace: ["Local save slot was empty."] };
    state.screen = "result";
    render();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    for(const k of Object.keys(state)) delete state[k];
    Object.assign(state, parsed);
    render();
  } catch(err) {
    state.result = { status: "discard", title: "Load failed", body: "The saved state could not be parsed.", trace: [String(err)] };
    state.screen = "result";
    render();
  }
}
function exportStateText(){ state.saveLoadText = JSON.stringify(state, null, 2); render(); }
function importStateText(){
  try {
    const parsed = JSON.parse(state.saveLoadText || "{}");
    for(const k of Object.keys(state)) delete state[k];
    Object.assign(state, parsed);
    render();
  } catch(err) {
    state.result = { status: "discard", title: "Import failed", body: "That JSON could not be parsed.", trace: [String(err)] };
    state.screen = "result";
    render();
  }
}
function updateSaveLoadText(v){ state.saveLoadText = v; }

function setEventCritical(v){ state.eventWizard.critical = v; render(); }
function toggleEventBox(box){ state.eventWizard.boxes[box] = !state.eventWizard.boxes[box]; render(); }
function updateEventWizardNotes(v){ state.eventWizard.notes = v; }
function eventWizardRecommendation(){
  const boxes = state.eventWizard.boxes || {};
  if(state.eventWizard.critical === true){
    if(boxes.event){
      return {
        title: "Choose EVENT",
        body: "This event is critical. If EVENT is available, the NP faction should take EVENT before normal action priorities.",
        trace: ["Critical event selected.", "Critical events override normal NP action selection when EVENT is available."]
      };
    }
    return {
      title: "EVENT was blocked",
      body: "The event is critical, but EVENT is marked unavailable. Fall back to the Position card priority sequence for the next available box.",
      trace: ["Critical event selected.", "EVENT box unavailable, so fall back to normal NP action priority."]
    };
  }
  return {
    title: "Use normal action priority",
    body: "This event is not critical. Follow the NP Position card sequence and pick the first available action box.",
    trace: ["Non-critical event selected.", "No override applies."]
  };
}
function finishEventWizard(){
  const rec = eventWizardRecommendation();
  state.result = {
    status: "resolved",
    title: rec.title,
    body: rec.body,
    trace: [...rec.trace, state.eventWizard.notes ? `Notes: ${state.eventWizard.notes}` : null].filter(Boolean)
  };
  state.screen = "result";
  render();
}

function setCensusStep(idx){ state.censusHelper.step = idx; render(); }
function toggleCensusCheck(key){ state.censusHelper.checks[key] = !state.censusHelper.checks[key]; render(); }
function updateCensusNote(key, v){ state.censusHelper.notes[key] = v; }
function openDistrictHelper(column = null, mode = null){
  if(column) state.districtHelper.column = column;
  if(mode) state.districtHelper.mode = mode;
  state.screen = "district_helper";
  render();
}

const oldBack = back;
back = function(){
  if(["event_wizard", "census_helper", "district_helper", "save_load"].includes(state.screen)){
    state.screen = "dashboard";
    render();
    return;
  }
  oldBack();
};

const oldResetAll = resetAll;
resetAll = function(){
  oldResetAll();
  Object.assign(state, {
    eventWizard: { critical: null, boxes: { act: true, event: true, react: true, plan: true }, notes: "" },
    censusHelper: {
      step: 0,
      checks: { quota: false, correct: false, audit: false, objectives: false, reset: false },
      notes: { quota: "", correct: "", audit: "", objectives: "", reset: "" }
    },
    districtHelper: { column: "place_population", mode: "target", candidates: [...DISTRICTS], chosen: null },
    saveLoadText: "",
    lastSavedAt: null
  });
  render();
};

actionGates.HOUSE.reactLocked = true;
actionGates.BUILD.reactLocked = true;
actionGates.DEVELOP.reactLocked = true;

const oldAnswerCondition = answerCondition;
answerCondition = function(answer){
  const row = currentRow();
  if(answer === "yes" && state.mode === "react" && row && REACT_LOCKED_ACTIONS.includes(row.action)){
    moveToNextRow(`Row ${row.index} matched, but ${row.action} is illegal during REACT. Skip to the next row.`);
    return;
  }
  oldAnswerCondition(answer);
};

const oldRecordPlannedAction = recordPlannedAction;
recordPlannedAction = function(nextAction){
  const refreshLine = state.planRefreshDistrict
    ? `Refresh Organization in District ${state.planRefreshDistrict}, if possible.`
    : `No legal Organization refresh was identified, so skip the refresh.`;
  oldRecordPlannedAction(nextAction);
  if(state.result && Array.isArray(state.result.trace)){
    state.result.trace.unshift(refreshLine);
    state.result.body = `PLAN resolved. ${refreshLine} Next main action: ${nextAction.toUpperCase()}.`;
  }
};

const originalRender = render;
render = function(){
  const app = document.getElementById("app");

  if(state.screen === "dashboard"){
    const selected = state.selectedFaction ? factions[state.selectedFaction].label : "—";
    const planned = Object.entries(state.npPlannedActions || {}).map(([k,v]) => `<div class="trace">${esc(factions[k].label)} next: <b>${esc(String(v || "—").toUpperCase())}</b></div>`).join("") || `<div class="trace">No planned actions recorded yet.</div>`;
    app.innerHTML = `
      <div class="card">
        <div class="small">Cross Bronx NP Companion</div>
        <div style="font-size:24px;font-weight:800;margin-bottom:10px">Phase 2 tools • build v3</div>
        <div class="panel" style="margin-bottom:14px">
          <div><b>Selected NP:</b> ${esc(selected)}</div>
          <div style="margin-top:6px"><b>Planned actions:</b></div>
          <div style="margin-top:8px">${planned}</div>
        </div>
        <div class="grid2">
          ${helperBtn("Interactive PLAN resolver", "state.screen='plan_helper'; render()", "primary")}
          ${helperBtn("Critical-event wizard", "state.screen='event_wizard'; render()")}
          ${helperBtn("Census helper mode", "state.screen='census_helper'; render()")}
          ${helperBtn("District filter helper", "state.screen='district_helper'; render()")}
          ${helperBtn("Save / load state", "state.screen='save_load'; render()")}
          ${helperBtn("Run normal NP resolver", "state.selectedFaction ? startResolver(state.selectedFaction) : beginSoloSetup()")}
        </div>
        <div class="panel" style="margin-top:14px">
          <div style="font-weight:700">React legality lockout</div>
          <div style="margin-top:8px">HOUSE, BUILD, and DEVELOP are automatically skipped during REACT.</div>
        </div>
      </div>`;
    return;
  }

  if(state.screen === "event_wizard"){
    const boxes = state.eventWizard.boxes || {};
    const boxKeys = ["act","event","react","plan"];
    const recommendation = eventWizardRecommendation();
    const boxButtons = boxKeys.map(k => {
      const label = `${boxes[k] ? "✓" : "—"} ${k.toUpperCase()}`;
      return helperBtn(label, `toggleEventBox('${k}')`, boxes[k] ? "primary" : "");
    }).join("");
    app.innerHTML = `
      <div class="card">
        <div class="small">EVENT selection wizard</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Critical event check</div>
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">What counts as critical?</div>
          <div style="margin-top:8px">An event is critical if it exhausts any Infrastructure, or places or replaces any Organization that is not faction-specific.</div>
        </div>
        ${gridButtons([
          helperBtn("Critical event", "setEventCritical(true)", state.eventWizard.critical === true ? "primary" : ""),
          helperBtn("Not critical", "setEventCritical(false)", state.eventWizard.critical === false ? "primary" : "")
        ])}
        <div class="small" style="margin:14px 0 8px">Which action boxes are still available this round?</div>
        <div class="grid2">${boxButtons}</div>
        <div class="panel" style="margin:14px 0">
          <div style="font-weight:700">Recommendation</div>
          <div style="margin-top:8px">${esc(recommendation.body)}</div>
        </div>
        <div class="small" style="margin-bottom:8px">Notes</div>
        <textarea oninput="updateEventWizardNotes(this.value)" style="width:100%;min-height:110px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit">${esc(state.eventWizard.notes || "")}</textarea>
        ${gridButtons([
          helperBtn("Finish wizard", "finishEventWizard()", "primary"),
          helperBtn("Back to dashboard", "state.screen='dashboard'; render()")
        ])}
      </div>`;
    return;
  }

  if(state.screen === "census_helper"){
    const steps = [
      ["quota", "Quota / Corrections / Petitions"],
      ["correct", "Correct / Loans / Bonds"],
      ["audit", "Audit / Comptroller"],
      ["objectives", "Objectives / Goal stars"],
      ["reset", "Reset / Cleanup"]
    ];
    const current = steps[state.censusHelper.step];
    const key = current[0];
    let guidance = "";
    if(key === "quota"){
      guidance = `<div>NP Public and NP Community each pay to move one Vulnerability from Corrections, if possible. NP Private never pays for this.</div><div>For Petitions & Blight: Public prefers districts with at least five Population in Public Infrastructure, most Population first. Community and Private prefer districts with most own Organizations, then highest Population.</div>`;
    } else if(key === "correct"){
      guidance = `<div>NP Public and NP Community always pay to return Loans if possible.</div><div>NP Public pays back Bonds if doing so does not put them into debt. Private Bonds are repaid before Community Bonds.</div>`;
    } else if(key === "audit"){
      guidance = `<div>NP Public offers one Bond to each other faction.</div><div>NP Private always buys if possible. NP Community buys only if it does not already have one.</div><div>NP Public sets Taxes to 1 if possible.</div>`;
    } else if(key === "objectives"){
      guidance = `<div>Check whether the current card's Priority Objective was achieved during Census.</div><div>If the final listed action row was completed, award a goal star and check for a Victory Point.</div>`;
    } else {
      guidance = `<div>Refresh and cleanup as normal. If a Position card scored through either its goal or priority objective, move it to the Record at the end of Census.</div>`;
    }
    const tabs = steps.map((step, idx) => helperBtn(step[1], `setCensusStep(${idx})`, state.censusHelper.step === idx ? "primary" : "")).join("");
    app.innerHTML = `
      <div class="card">
        <div class="small">Census helper mode</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">${esc(current[1])}</div>
        <div class="grid" style="margin-bottom:14px">${tabs}</div>
        <div class="panel" style="margin-bottom:14px">${guidance}</div>
        <label style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <input type="checkbox" ${state.censusHelper.checks[key] ? "checked" : ""} onchange="toggleCensusCheck('${key}')">
          <span>Mark this step complete</span>
        </label>
        <textarea oninput="updateCensusNote('${key}', this.value)" style="width:100%;min-height:120px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit">${esc(state.censusHelper.notes[key] || "")}</textarea>
        ${gridButtons([
          helperBtn("Previous", `setCensusStep(${Math.max(0, state.censusHelper.step - 1)})`),
          helperBtn("Next", `setCensusStep(${Math.min(steps.length - 1, state.censusHelper.step + 1)})`, "primary")
        ])}
      </div>`;
    return;
  }

  if(state.screen === "district_helper"){
    const col = priorityColumns[state.districtHelper.column];
    const candidates = state.districtHelper.candidates || [];
    const columnButtons = Object.entries(priorityColumns).map(([k,v]) => helperBtn(v.title, `state.districtHelper.column='${k}'; render()`, state.districtHelper.column === k ? "primary" : "")).join("");
    const candidateButtons = DISTRICTS.map(d => {
      const active = candidates.includes(d);
      const selected = state.districtHelper.chosen === d;
      const cls = selected ? "selected" : (active ? "primary" : "");
      return `<button class="btn ${cls}" onclick="toggleCandidateDistrict('${d}')">${active ? "✓" : "—"} ${d}</button>`;
    }).join("");
    const finalButtons = candidates.map(d => helperBtn(`District ${d}`, `chooseHelperDistrict('${d}')`, state.districtHelper.chosen === d ? "primary" : "")).join("") || `<div class="muted">No candidates left.</div>`;
    app.innerHTML = `
      <div class="card">
        <div class="small">District helper</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Candidate district filtering</div>
        <div class="small" style="margin-bottom:8px">Priority column</div>
        <div class="grid">${columnButtons}</div>
        <div class="small" style="margin:14px 0 8px">Use this helper for</div>
        ${gridButtons([
          helperBtn("Move to / place / refresh", "state.districtHelper.mode='target'; render()", state.districtHelper.mode === "target" ? "primary" : ""),
          helperBtn("Remove from / activate", "state.districtHelper.mode='source'; render()", state.districtHelper.mode === "source" ? "primary" : "")
        ])}
      </div>
      <div class="card">
        <div style="font-size:18px;font-weight:700">${esc(col.title)}</div>
        <div class="muted" style="margin-top:6px">Work top to bottom. Eliminate districts until one survivor remains.</div>
        <div class="panel" style="margin:14px 0">
          <div style="font-weight:700">Current use</div>
          <div style="margin-top:8px">${esc(districtModeLabel())}</div>
        </div>
        <div class="grid4" style="margin-bottom:14px">${candidateButtons}</div>
        ${gridButtons([
          helperBtn("Reset all", "resetCandidateDistricts()"),
          helperBtn("Clear all", "clearCandidateDistricts()")
        ])}
        <div class="small" style="margin:14px 0 8px">Choose final district from survivors</div>
        <div class="grid4">${finalButtons}</div>
        <div class="panel" style="margin-top:14px">
          <div style="font-weight:700">Summary</div>
          <div style="margin-top:8px">${esc(boardHelperSummary())}</div>
        </div>
        ${gridButtons([
          helperBtn("Back to dashboard", "state.screen='dashboard'; render()"),
          helperBtn("Keep this result", "state.screen='dashboard'; render()", "primary")
        ])}
      </div>`;
    return;
  }

  if(state.screen === "save_load"){
    app.innerHTML = `
      <div class="card">
        <div class="small">Save / load</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">State control</div>
        <div class="grid2" style="margin-bottom:14px">
          ${helperBtn("Save in browser", "saveStateLocal()", "primary")}
          ${helperBtn("Load from browser", "loadStateLocal()")}
          ${helperBtn("Export JSON", "exportStateText()")}
          ${helperBtn("Import JSON", "importStateText()")}
        </div>
        <div class="panel" style="margin-bottom:14px">Local saves stay in this browser. JSON export/import lets you move the state wherever your little rules goblin desires.</div>
        <textarea oninput="updateSaveLoadText(this.value)" style="width:100%;min-height:220px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit">${esc(state.saveLoadText || "")}</textarea>
        ${gridButtons([
          helperBtn("Back to dashboard", "state.screen='dashboard'; render()"),
          helperBtn("Load pasted JSON", "importStateText()", "primary")
        ])}
      </div>`;
    return;
  }

  if(state.screen === "plan_helper"){
    const c = currentCard();
    const bullet = currentPlanBullet();
    const hint = state.showHint ? `<div class="hint">Use the <b>Place / Replace / Refresh Organization</b> priority column and move to the next bullet only when the current one does not break the tie.</div>` : "";
    let refreshArea = "";

    if(state.planStep === "intro"){
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">PLAN checklist</div>
          <div style="margin-top:8px">1. Do <b>not</b> call an Audit for NP PLAN.</div>
          <div>2. Refresh one Organization if possible using <b>Place / Replace / Refresh Organization</b>.</div>
          <div>3. Record the next main action for next round.</div>
        </div>
        ${gridButtons([
          helperBtn("Run refresh protocol", "state.planStep='priority'; state.showHint=false; render()", "primary")
        ])}`;
    } else if(state.planStep === "priority"){
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">Refresh protocol</div>
          <div class="bullet-priority-label">Priority bullet ${state.planPriorityStep + 1} of ${planPriorityColumn().bullets.length}</div>
          <div id="bullet-priority" class="bullet-priority">${esc(bullet)}</div>
          <div class="bullet-priority-note">Does this bullet break the tie for the refresh district?</div>
        </div>
        <div class="grid2">
          ${helperBtn("Yes", "answerPlanPriority('yes')", "primary")}
          ${helperBtn("No", "answerPlanPriority('no')")}
          ${helperBtn(state.showHint ? "Hide hint" : "Need help?", "state.showHint=!state.showHint; render()", "ghost")}
        </div>
        ${hint}`;
    } else if(state.planStep === "district"){
      const districtButtons = DISTRICTS.map(d => helperBtn(`District ${d}`, `choosePlanDistrict('${d}')`, state.planDistrictChoice === d ? "primary" : "")).join("");
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">Choose the refresh district</div>
          <div class="bullet-priority-label" style="margin-top:10px">Current bullet</div>
          <div id="bullet-priority" class="bullet-priority">${esc(bullet)}</div>
        </div>
        <div class="grid4">${districtButtons}</div>
        <div class="grid2">
          ${helperBtn(`Confirm District ${state.planDistrictChoice || "?"}`, state.planDistrictChoice ? `answerPlanDistrict('${state.planDistrictChoice}')` : "void(0)", state.planDistrictChoice ? "primary" : "")}
          ${helperBtn("Still tied", "answerPlanDistrict('still_tied')")}
          ${helperBtn("No district", "answerPlanDistrict('none')")}
        </div>`;
    } else {
      const refreshSummary = state.planRefreshDistrict ? `Refresh Organization in <b>District ${state.planRefreshDistrict}</b>, if possible.` : `No legal Organization refresh was identified.`;
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">Refresh result</div>
          <div style="margin-top:8px">${refreshSummary}</div>
        </div>
        <div class="small" style="margin-bottom:8px">Next main action</div>
        <div class="grid2">
          ${["act","react","event","plan"].map(v => helperBtn(v.toUpperCase(), `recordPlannedAction('${v}')`, v === "act" ? "primary" : "")).join("")}
        </div>`;
    }

    const trace = state.planTrace.length
      ? `<div class="card"><div style="font-weight:700;margin-bottom:8px">Refresh trace</div>${state.planTrace.map(line => `<div class="trace" style="margin-top:8px">${esc(line)}</div>`).join("")}</div>`
      : "";

    app.innerHTML = `
      <div class="card">
        <div class="small">PLAN procedure • ${esc(factions[state.selectedFaction].label)} NP</div>
        <div class="titleblue">${esc(c.name)}</div>
        <div class="objblue" style="margin-bottom:14px">Objective: ${esc(c.objective)}</div>
        ${refreshArea}
      </div>
      ${trace}`;
    return;
  }

  originalRender();
};

window.render = render;
window.back = back;
window.resetAll = resetAll;
window.answerCondition = answerCondition;
window.recordPlannedAction = recordPlannedAction;
window.saveStateLocal = saveStateLocal;
window.loadStateLocal = loadStateLocal;
window.exportStateText = exportStateText;
window.importStateText = importStateText;
window.updateSaveLoadText = updateSaveLoadText;
window.setEventCritical = setEventCritical;
window.toggleEventBox = toggleEventBox;
window.updateEventWizardNotes = updateEventWizardNotes;
window.finishEventWizard = finishEventWizard;
window.setCensusStep = setCensusStep;
window.toggleCensusCheck = toggleCensusCheck;
window.updateCensusNote = updateCensusNote;
window.openDistrictHelper = openDistrictHelper;
window.toggleCandidateDistrict = toggleCandidateDistrict;
window.clearCandidateDistricts = clearCandidateDistricts;
window.resetCandidateDistricts = resetCandidateDistricts;
window.chooseHelperDistrict = chooseHelperDistrict;

render();


// --- Option 2 integration pass ---
Object.assign(state, {
  roundTracker: state.roundTracker || { round: 1, max: 8, critical: null, checked: false, pendingScreen: null },
  actionLog: state.actionLog || [],
  logDraft: state.logDraft || {
    faction: state.playerFaction || 'public',
    mode: 'act',
    districts: [],
    changes: { population: false, vulnerability: false, organization: false, infrastructure: false, markers: false, resources: false },
    notes: ''
  },
  eventProtocol: state.eventProtocol || {
    card: '',
    effect: 'place',
    targeting: 'priority',
    districts: [],
    piece: 'organization',
    housing: 'ask',
    notes: ''
  },
  resolverCandidates: Array.isArray(state.resolverCandidates) ? state.resolverCandidates : [],
  resolverPool: state.resolverPool || [...DISTRICTS]
});

const originalStartResolver_v2 = startResolver;
startResolver = function(f){
  state.selectedFaction = f;
  resetResolverState();
  state.resolverCandidates = [];
  state.resolverPool = [...DISTRICTS];
  if(state.roundTracker && state.roundTracker.critical === null){
    state.roundTracker.pendingScreen = 'mode';
    state.screen = 'round_gate';
    render();
    return;
  }
  state.screen = 'mode';
  render();
};

const originalStartModeResolution_v2 = startModeResolution;
startModeResolution = function(){
  if(state.roundTracker && state.roundTracker.critical === null){
    state.roundTracker.pendingScreen = 'mode';
    state.screen = 'round_gate';
    render();
    return;
  }
  if(state.mode === 'event'){
    openEventProtocol(true);
    return;
  }
  originalStartModeResolution_v2();
};

const originalAnswerGate_v2 = answerGate;
answerGate = function(answer){
  if(answer === 'yes'){
    state.resolverPool = [...DISTRICTS];
    state.resolverCandidates = [];
  }
  originalAnswerGate_v2(answer);
};

const originalBack_v2 = back;
back = function(){
  if(state.screen === 'round_gate'){
    state.screen = 'dashboard';
    render();
    return;
  }
  if(state.screen === 'event_protocol'){
    state.screen = state.eventProtocol && state.eventProtocol.fromResolver ? 'mode' : 'dashboard';
    render();
    return;
  }
  if(state.screen === 'log_action'){
    state.screen = (state.logDraft && state.logDraft.mode === 'event' && state.selectedFaction) ? 'mode' : 'dashboard';
    render();
    return;
  }
  originalBack_v2();
};

const originalResetAll_v2 = resetAll;
resetAll = function(){
  originalResetAll_v2();
  Object.assign(state, {
    roundTracker: { round: 1, max: 8, critical: null, checked: false, pendingScreen: null },
    actionLog: [],
    logDraft: {
      faction: state.playerFaction || 'public',
      mode: 'act',
      districts: [],
      changes: { population: false, vulnerability: false, organization: false, infrastructure: false, markers: false, resources: false },
      notes: ''
    },
    eventProtocol: {
      card: '',
      effect: 'place',
      targeting: 'priority',
      districts: [],
      piece: 'organization',
      housing: 'ask',
      notes: ''
    },
    resolverCandidates: [],
    resolverPool: [...DISTRICTS]
  });
  render();
};

const originalAnswerPriority_v2 = answerPriority;
answerPriority = function(answer){
  if(answer === 'not_sure'){
    originalAnswerPriority_v2(answer);
    return;
  }
  originalAnswerPriority_v2(answer);
};

function applyPriorityDistricts(){
  const row = currentRow(), pr = currentPriority(), bullet = currentPriorityBullet();
  const currentPool = Array.isArray(state.resolverPool) && state.resolverPool.length ? [...state.resolverPool] : [...DISTRICTS];
  const selected = Array.isArray(state.resolverCandidates) ? [...state.resolverCandidates] : [];
  const survivors = selected.length ? selected : currentPool;
  if(!row || !pr || !bullet) return;
  if(survivors.length === 1){
    answerDistrict(survivors[0]);
    return;
  }
  if(state.priorityStep >= pr.bullets.length - 1){
    state.result = {
      status: 'resolved',
      title: `${row.action} needs manual tie-break`,
      body: survivors.length
        ? `The final priority bullet still left multiple districts tied: ${survivors.map(d => `District ${d}`).join(', ')}. Use player choice among the tied districts.`
        : 'No matching district was confirmed on the final priority bullet. Use player choice among legal districts, or draw a new Position card if no legal spaces remain.',
      trace: buildTrace([
        `${row.action} passed the basic effectiveness gate.`,
        `Checked priority column: ${pr.title}.`,
        survivors.length
          ? `Final bullet '${bullet}' narrowed the field to ${survivors.map(d => `District ${d}`).join(', ')} but did not produce a single winner.`
          : `Final bullet '${bullet}' produced no matching districts.`
      ])
    };
    state.screen = 'result';
    render();
    return;
  }
  state.history = [...state.history, {
    rowIndex: state.rowIndex,
    stage: 'priority',
    reason: survivors.length === currentPool.length && selected.length === 0
      ? `Bullet '${bullet}' produced no narrower match. Continue to the next bullet with the same candidate pool.`
      : `Bullet '${bullet}' narrowed the field to ${survivors.map(d => `District ${d}`).join(', ')}.`
  }];
  state.priorityStep += 1;
  state.resolverPool = [...survivors];
  state.resolverCandidates = [];
  state.showHint = false;
  render();
}

function setRoundCritical(v){
  state.roundTracker.critical = v;
  state.roundTracker.checked = true;
  render();
}
function continueRoundGate(){
  const target = state.roundTracker.pendingScreen || 'dashboard';
  state.roundTracker.pendingScreen = null;
  state.screen = target;
  render();
}
function resetLogDraft(){
  state.logDraft = {
    faction: state.playerFaction || 'public',
    mode: 'act',
    districts: [],
    changes: { population: false, vulnerability: false, organization: false, infrastructure: false, markers: false, resources: false },
    notes: ''
  };
}
function openActionLogger(faction=null, mode=null, districts=null){
  if(state.roundTracker && state.roundTracker.critical === null){
    state.roundTracker.pendingScreen = 'log_action';
    state.screen = 'round_gate';
    render();
    return;
  }
  resetLogDraft();
  if(faction) state.logDraft.faction = faction;
  if(mode) state.logDraft.mode = mode;
  if(Array.isArray(districts)) state.logDraft.districts = [...districts];
  state.screen = 'log_action';
  render();
}
function toggleLogDistrict(d){
  const set = new Set(state.logDraft.districts || []);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.logDraft.districts = DISTRICTS.filter(x => set.has(x));
  render();
}
function setLogFaction(f){ state.logDraft.faction = f; render(); }
function setLogMode(m){ state.logDraft.mode = m; render(); }
function toggleLogChange(key){ state.logDraft.changes[key] = !state.logDraft.changes[key]; render(); }
function updateLogNotes(v){ state.logDraft.notes = v; }
function actionLogSummary(entry){
  const districts = entry.districts && entry.districts.length ? ` • D${entry.districts.join(', D')}` : '';
  const changes = Object.entries(entry.changes || {}).filter(([,v]) => v).map(([k]) => k).join(', ');
  return `R${entry.round} • ${factions[entry.faction].label} • ${entry.mode.toUpperCase()}${districts}${changes ? ` • ${changes}` : ''}${entry.notes ? ` • ${entry.notes}` : ''}`;
}
function saveLoggedAction(){
  const entry = {
    round: state.roundTracker.round,
    faction: state.logDraft.faction,
    mode: state.logDraft.mode,
    districts: [...(state.logDraft.districts || [])],
    changes: { ...(state.logDraft.changes || {}) },
    notes: state.logDraft.notes || ''
  };
  state.actionLog = [...(state.actionLog || []), entry];
  state.result = {
    status: 'resolved',
    title: 'Action logged',
    body: `${factions[entry.faction].label} ${entry.mode.toUpperCase()} was recorded for round ${entry.round}.`,
    trace: [actionLogSummary(entry)]
  };
  state.screen = 'result';
  render();
}

function resetEventProtocol(){
  state.eventProtocol = {
    card: '',
    effect: 'place',
    targeting: 'priority',
    districts: [],
    piece: 'organization',
    housing: 'ask',
    notes: '',
    fromResolver: false,
    faction: state.selectedFaction || state.playerFaction || 'public'
  };
}
function openEventProtocol(fromResolver=false){
  if(state.roundTracker && state.roundTracker.critical === null){
    state.roundTracker.pendingScreen = 'event_protocol';
    state.screen = 'round_gate';
    render();
    return;
  }
  resetEventProtocol();
  state.eventProtocol.fromResolver = !!fromResolver;
  state.eventProtocol.faction = state.selectedFaction || state.playerFaction || 'public';
  if(fromResolver) state.mode = 'event';
  state.screen = 'event_protocol';
  render();
}
function setEventField(key, value){ state.eventProtocol[key] = value; render(); }
function updateEventNotes(v){ state.eventProtocol.notes = v; }
function toggleEventDistrict(d){
  const set = new Set(state.eventProtocol.districts || []);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.eventProtocol.districts = DISTRICTS.filter(x => set.has(x));
  render();
}
function eventProtocolTrace(ep){
  const effectLabels = { place:'Place', move:'Move', remove:'Remove', exhaust:'Exhaust / replace infrastructure', marker:'Marker / financing shift', mixed:'Mixed / custom' };
  const targetingLabels = { fixed:'Fixed district from card', priority:'NP priority pairing', manual:'Manual choice', global:'All eligible districts' };
  const pieceLabels = { population:'Population', vulnerability:'Vulnerability', organization:'Organization', infrastructure:'Infrastructure', marker:'Loan / grant / petition / blight / coalition' };
  const housingNotes = { ask:'Ask housing / coalition follow-up', housed:'Place housed if possible', unhoused:'Leave unhoused / unresolved until player assigns' };
  const trace = [
    `Event card: ${ep.card || 'unnamed event'}.`,
    `Effect type: ${effectLabels[ep.effect] || ep.effect}.`,
    `Targeting mode: ${targetingLabels[ep.targeting] || ep.targeting}.`,
    `Primary piece change: ${pieceLabels[ep.piece] || ep.piece}.`
  ];
  if(ep.districts && ep.districts.length) trace.push(`Affected district${ep.districts.length === 1 ? '' : 's'}: ${ep.districts.map(d => `District ${d}`).join(', ')}.`);
  if(ep.effect === 'place' || ep.effect === 'move' || ep.effect === 'exhaust') trace.push(housingNotes[ep.housing] || ep.housing);
  if(ep.targeting === 'priority') trace.push('Use the same district-centric bullet elimination flow as normal NP district selection.');
  if(ep.piece === 'organization') trace.push('If a loan or grant is waiting in the district, the next placed Organization should attach to it if legal.');
  if(ep.piece === 'infrastructure') trace.push('After placing or replacing Infrastructure, house as many eligible unhoused pieces as possible.');
  if(ep.notes) trace.push(`Notes: ${ep.notes}`);
  return trace;
}
function finishEventProtocol(){
  const ep = state.eventProtocol;
  const districtSummary = ep.targeting === 'global' ? 'all eligible districts' : (ep.districts && ep.districts.length ? ep.districts.map(d => `District ${d}`).join(', ') : 'districts still to be chosen');
  resetLogDraft();
  state.logDraft.faction = ep.faction || state.selectedFaction || state.playerFaction || 'public';
  state.logDraft.mode = 'event';
  state.logDraft.districts = ep.targeting === 'global' ? [] : [...(ep.districts || [])];
  const changeMap = { population:'population', vulnerability:'vulnerability', organization:'organization', infrastructure:'infrastructure', marker:'markers' };
  const mapped = changeMap[ep.piece];
  if(mapped) state.logDraft.changes[mapped] = true;
  if(ep.effect === 'marker') state.logDraft.changes.markers = true;
  state.logDraft.notes = [
    ep.card ? `Card: ${ep.card}` : '',
    `Effect: ${ep.effect}`,
    `Targeting: ${ep.targeting}`,
    (ep.effect === 'place' || ep.effect === 'move' || ep.effect === 'exhaust') ? `Housing: ${ep.housing}` : '',
    ep.notes || ''
  ].filter(Boolean).join(' | ');
  state.screen = 'log_action';
  render();
}
function advanceRound(){
  if(state.roundTracker.round >= state.roundTracker.max){
    state.screen = 'census_helper';
    render();
    return;
  }
  state.roundTracker.round += 1;
  state.roundTracker.critical = null;
  state.roundTracker.checked = false;
  state.roundTracker.pendingScreen = null;
  state.result = {
    status: 'resolved',
    title: `Round ${state.roundTracker.round} started`,
    body: 'New event card, new round. The first question is whether the event is critical.',
    trace: [`Advanced to round ${state.roundTracker.round}.`, 'Critical-event check reset for the new round.']
  };
  state.screen = 'result';
  render();
}
function finishCensusCycle(){
  state.roundTracker.round = 1;
  state.roundTracker.critical = null;
  state.roundTracker.checked = false;
  state.roundTracker.pendingScreen = null;
  state.result = {
    status: 'resolved',
    title: 'Census complete',
    body: 'Census helper is complete. Round 1 is ready for the next decade or cycle.',
    trace: ['Census completed.', 'Round tracker reset to Round 1.', 'Critical-event check reset.']
  };
  state.screen = 'result';
  render();
}
function toggleResolverCandidate(d){
  const pool = Array.isArray(state.resolverPool) && state.resolverPool.length ? state.resolverPool : DISTRICTS;
  if(!pool.includes(d)) return;
  const set = new Set(Array.isArray(state.resolverCandidates) ? state.resolverCandidates : []);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.resolverCandidates = pool.filter(x => set.has(x));
  render();
}
function resetResolverCandidates(){ state.resolverCandidates = []; render(); }
function confirmResolverCandidates(){
  const left = state.resolverCandidates || [];
  if(left.length === 1){ answerDistrict(left[0]); return; }
  if(left.length === 0){ answerDistrict('none'); return; }
  answerDistrict('still_tied');
}
function prefillLogFromCurrentResult(){
  const targets = Array.isArray(state.selectedTargets) && state.selectedTargets.length ? [...state.selectedTargets] : (state.result && state.result.title && /District (\d)/.test(state.result.title) ? [RegExp.$1] : []);
  openActionLogger(state.selectedFaction, state.mode, targets);
}

const originalRender_v2 = render;
render = function(){
  const app = document.getElementById('app');

  if(state.screen === 'dashboard'){
    const criticalLabel = state.roundTracker.critical === null ? 'Unchecked' : (state.roundTracker.critical ? 'Critical' : 'Not critical');
    app.innerHTML = `
      <div class="card">
        <div class="row" style="margin-bottom:12px;align-items:center">
          <div>
            <div class="small">Round controls</div>
            <div style="font-size:22px;font-weight:800">Round ${state.roundTracker.round} / ${state.roundTracker.max}</div>
          </div>
          <span class="badge">${esc(criticalLabel)}</span>
        </div>
        <div class="panel" style="margin-bottom:14px">
          <div><b>Current round event:</b> ${esc(criticalLabel)}</div>
          <div style="margin-top:6px"><b>React lockout:</b> HOUSE / BUILD / DEVELOP are auto-skipped during REACT.</div>
          <div style="margin-top:6px"><b>Census trigger:</b> after round 8, ending the round opens Census helper automatically.</div>
        </div>
        <div class="grid2">
          ${btn(state.roundTracker.critical === null ? 'Round start: critical event?' : 'Edit round critical check', "state.screen='round_gate'; render()", 'primary')}
          ${btn(state.roundTracker.round === state.roundTracker.max ? 'End round 8 → Census' : `End round ${state.roundTracker.round} → next round`, 'advanceRound()')}
        </div>
      </div>
      <div class="card">
        <div class="row" style="margin-bottom:12px">
          <div>
            <div class="small">You are playing</div>
            <div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div>
          </div>
          ${pill(factions[state.playerFaction].short,state.playerFaction)}
        </div>
      </div>
      ${npFactions().map(f=>{ const card=cards[f].find(c=>c.id===state.npCards[f]); return `<div class="card"><div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ''}` : 'No Position card selected'}</div></div>${pill(factions[f].short,f)}</div><div class="grid2">${btn('Take NP turn',`startResolver('${f}')`, card ? 'primary':'')}${btn('Change card',`state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div></div>`; }).join('')}`;
    return;
  }

  if(state.screen === 'round_gate'){
    const locked = state.roundTracker.critical;
    app.innerHTML = `
      <div class="card">
        <div class="small">Round ${state.roundTracker.round} opener</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Is this event critical?</div>
        <div class="panel" style="margin-bottom:14px">
          Critical means the event exhausts any Infrastructure, or places or replaces any Organization that is not faction-specific. If not critical, you do not need to answer this again until the next event card.
        </div>
        <div class="grid2" style="margin-bottom:14px">
          ${btn('Critical', 'setRoundCritical(true)', locked === true ? 'primary' : '')}
          ${btn('Not critical', 'setRoundCritical(false)', locked === false ? 'primary' : '')}
        </div>
        <div class="grid2">
          ${btn('Continue', 'continueRoundGate()', locked !== null ? 'primary' : '')}
          ${btn(state.logDraft.mode === 'event' && state.selectedFaction ? 'Back to mode selection' : 'Back to dashboard', state.logDraft.mode === 'event' && state.selectedFaction ? "state.screen='mode'; render()" : "state.screen='dashboard'; render()")}
        </div>
      </div>`;
    return;
  }

  if(state.screen === 'log_action'){
    const changes = [['population','Population'],['vulnerability','Vulnerability'],['organization','Organization'],['infrastructure','Infrastructure'],['markers','Markers / coalitions / loans / grants'],['resources','Resources / debt / tax']];
    app.innerHTML = `
      <div class="card">
        <div class="small">Assisted state tracking</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Log completed action</div>
        <div class="small" style="margin-bottom:8px">Faction</div>
        <div class="grid2" style="margin-bottom:14px">${Object.keys(factions).map(f=>btn(factions[f].label, `setLogFaction('${f}')`, state.logDraft.faction===f ? 'primary' : '')).join('')}</div>
        <div class="small" style="margin-bottom:8px">Action type</div>
        <div class="grid2" style="margin-bottom:14px">${['act','event','react','plan'].map(m=>btn(m.toUpperCase(), `setLogMode('${m}')`, state.logDraft.mode===m ? 'primary' : '')).join('')}</div>
        ${state.logDraft.mode === 'event' ? `<div class="panel" style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">EVENT protocol</div><div class="grid2">${btn('Open EVENT protocol', 'openEventProtocol(state.selectedFaction===state.logDraft.faction)', 'primary')}${btn('Keep logging manually', 'render()')}</div></div>` : ''}
        <div class="small" style="margin-bottom:8px">Affected districts</div>
        <div class="grid4" style="margin-bottom:14px">${DISTRICTS.map(d=>`<button class="btn ${(state.logDraft.districts||[]).includes(d)?'selected':''}" onclick="toggleLogDistrict('${d}')">${d}</button>`).join('')}</div>
        <div class="small" style="margin-bottom:8px">What changed on the board?</div>
        <div class="grid2" style="margin-bottom:14px">${changes.map(([k,label])=>btn(label, `toggleLogChange('${k}')`, state.logDraft.changes[k] ? 'primary' : '')).join('')}</div>
        <div class="small" style="margin-bottom:8px">Notes</div>
        <textarea oninput="updateLogNotes(this.value)" style="width:100%;min-height:120px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit">${esc(state.logDraft.notes || '')}</textarea>
        <div class="grid2" style="margin-top:14px">
          ${btn('Save log entry', 'saveLoggedAction()', 'primary')}
          ${btn('Back to dashboard', "state.screen='dashboard'; render()")}
        </div>
      </div>`;
    return;
  }

  if(state.screen === 'event_protocol'){
    const ep = state.eventProtocol;
    const effectOptions = [['place','Place'],['move','Move'],['remove','Remove'],['exhaust','Exhaust / replace infrastructure'],['marker','Marker / financing shift'],['mixed','Mixed / custom']];
    const targetingOptions = [['fixed','Fixed district from card'],['priority','Use NP priority pairing'],['manual','Manual choice'],['global','All eligible districts']];
    const pieceOptions = [['population','Population'],['vulnerability','Vulnerability'],['organization','Organization'],['infrastructure','Infrastructure'],['marker','Loan / grant / petition / blight / coalition']];
    const housingOptions = [['ask','Ask housing / coalition follow-up'],['housed','Place housed if possible'],['unhoused','Leave unhoused until assigned']];
    app.innerHTML = `
      <div class="card">
        <div class="small">EVENT branch for ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">EVENT protocol</div>
        <div class="panel" style="margin-bottom:14px">Use this when an NP faction takes EVENT, or when a critical event needs help with placement logic. The goal is not to hardcode every card yet; it is to standardize how event effects pick districts and what gets placed, moved, removed, or rehoused.</div>
        <div class="small" style="margin-bottom:8px">Event card or short label</div>
        <input value="${esc(ep.card || '')}" oninput="setEventField('card', this.value)" style="width:100%;border:1px solid #cbd5e1;border-radius:14px;padding:12px;font:inherit;margin-bottom:14px">
        <div class="small" style="margin-bottom:8px">Effect type</div>
        <div class="grid2" style="margin-bottom:14px">${effectOptions.map(([v,l])=>btn(l, `setEventField('effect','${v}')`, ep.effect===v ? 'primary' : '')).join('')}</div>
        <div class="small" style="margin-bottom:8px">How are districts chosen?</div>
        <div class="grid2" style="margin-bottom:14px">${targetingOptions.map(([v,l])=>btn(l, `setEventField('targeting','${v}')`, ep.targeting===v ? 'primary' : '')).join('')}</div>
        <div class="small" style="margin-bottom:8px">Primary piece change</div>
        <div class="grid2" style="margin-bottom:14px">${pieceOptions.map(([v,l])=>btn(l, `setEventField('piece','${v}')`, ep.piece===v ? 'primary' : '')).join('')}</div>
        ${(ep.targeting !== 'global') ? `<div class="small" style="margin-bottom:8px">Affected district(s)</div><div class="grid4" style="margin-bottom:14px">${DISTRICTS.map(d=>`<button class="btn ${(ep.districts||[]).includes(d)?'selected':''}" onclick="toggleEventDistrict('${d}')">${d}</button>`).join('')}</div>` : ''}
        ${(ep.effect === 'place' || ep.effect === 'move' || ep.effect === 'exhaust') ? `<div class="small" style="margin-bottom:8px">Placement / rehousing follow-up</div><div class="grid2" style="margin-bottom:14px">${housingOptions.map(([v,l])=>btn(l, `setEventField('housing','${v}')`, ep.housing===v ? 'primary' : '')).join('')}</div>` : ''}
        <textarea oninput="updateEventNotes(this.value)" style="width:100%;min-height:120px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit" placeholder="Card-specific notes, special instructions, or weirdness you want to remember">${esc(ep.notes || '')}</textarea>
        <div class="grid2" style="margin-top:14px">
          ${btn(state.eventProtocol.fromResolver ? 'Back to mode selection' : 'Back to dashboard', state.eventProtocol.fromResolver ? "state.screen='mode'; render()" : "state.screen='dashboard'; render()")}${btn('Prefill EVENT log', 'finishEventProtocol()', 'primary')}
        </div>
      </div>`;
    return;
  }

  if(state.screen === 'census_helper'){
    const steps = [
      ['quota', 'Quota / Corrections / Petitions'],
      ['correct', 'Correct / Loans / Bonds'],
      ['audit', 'Audit / Comptroller'],
      ['objectives', 'Objectives / Goal stars'],
      ['reset', 'Reset / Cleanup']
    ];
    const current = steps[state.censusHelper.step];
    const key = current[0];
    let guidance = '';
    if(key === 'quota') guidance = `<div>NP Public and NP Community each pay to move one Vulnerability from Corrections, if possible. NP Private never pays for this.</div><div>For Petitions & Blight, use the NP preferences already summarized here in the app.</div>`;
    else if(key === 'correct') guidance = `<div>NP Public and NP Community always pay to return Loans if possible.</div><div>NP Public repays Bonds if doing so does not put them into debt.</div>`;
    else if(key === 'audit') guidance = `<div>NP Public offers one Bond to each other faction.</div><div>NP Private always buys if possible. NP Community buys only if it does not already have one. NP Public sets Taxes to 1 if possible.</div>`;
    else if(key === 'objectives') guidance = `<div>Check the current Position cards for priority objective and goal completion.</div>`;
    else guidance = `<div>Refresh Organizations, clean up temporary items, and discard / record Position cards as normal.</div>`;
    app.innerHTML = `
      <div class="card">
        <div class="small">Triggered automatically after round 8</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Census helper</div>
        <div class="grid" style="margin-bottom:14px">${steps.map((step, idx)=>btn(step[1], `setCensusStep(${idx})`, state.censusHelper.step===idx ? 'primary' : '')).join('')}</div>
        <div class="panel" style="margin-bottom:14px">${guidance}</div>
        <label style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><input type="checkbox" ${state.censusHelper.checks[key] ? 'checked' : ''} onchange="toggleCensusCheck('${key}')"><span>Mark this step complete</span></label>
        <textarea oninput="updateCensusNote('${key}', this.value)" style="width:100%;min-height:120px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit">${esc(state.censusHelper.notes[key] || '')}</textarea>
        <div class="grid2" style="margin-top:14px">
          ${btn('Previous', `setCensusStep(${Math.max(0, state.censusHelper.step - 1)})`)}
          ${btn(state.censusHelper.step === steps.length - 1 ? 'Finish Census' : 'Next', state.censusHelper.step === steps.length - 1 ? 'finishCensusCycle()' : `setCensusStep(${Math.min(steps.length - 1, state.censusHelper.step + 1)})`, 'primary')}
        </div>
      </div>`;
    return;
  }

  if(state.screen === 'resolver'){
    const c=currentCard(), r=currentRow(), q=currentQuestion(), g=currentGate(), p=currentPriority(), b=currentPriorityBullet();
    const headerClass=state.selectedFaction==='public'?'header-public':state.selectedFaction==='community'?'header-community':'header-private';
    const prompt=state.stage==='condition'?q.prompt:state.stage==='gate'?g.prompt:state.stage==='priority'?'Which district or districts match this bullet?':'Which districts still apply after this bullet?';
    const sub=state.stage==='condition'?`Card condition: ${r.condition}`:state.stage==='gate'?`Action check: ${r.action}`:state.stage==='priority'?`${p ? p.title : 'No mapped column'} • Bullet ${state.priorityStep+1}${p ? ` of ${p.bullets.length}` : ''} • Current candidates: ${(state.resolverPool||state.resolverCandidates||[]).map(d => `D${d}`).join(', ')}`:b;
    let actionArea='';
    if(state.stage==='condition') actionArea=`<div class="grid">${btn('Yes',"answerCondition('yes')",'primary')}${btn('No',"answerCondition('no')")}${btn('Not sure',"answerCondition('not_sure')",'secondary')}</div>`;
    else if(state.stage==='gate') actionArea=`<div class="grid">${btn('Yes',"answerGate('yes')",'primary')}${btn('No',"answerGate('no')")}${btn('Not sure',"answerGate('not_sure')",'secondary')}</div>`;
    else if(state.stage==='priority') actionArea=`<div class="panel" style="padding:14px"><div class="bullet-priority-label">Priority bullet</div><div id="bullet-priority" class="bullet-priority">${esc(b)}</div><div class="bullet-priority-note">Select the districts that match this bullet from the remaining candidates. One district left = winner. Several districts left = stay tied and move to the next bullet.</div></div><div class="small" style="margin:8px 0">Remaining candidates: ${((state.resolverPool||DISTRICTS)).map(d => `D${d}`).join(', ') || 'none'}</div><div class="grid4">${(state.resolverPool||DISTRICTS).map(d=>`<button class="btn ${(state.resolverCandidates||[]).includes(d)?'selected':''}" onclick="toggleResolverCandidate('${d}')">${d}</button>`).join('')}</div><div class="grid2">${btn((state.resolverCandidates||[]).length ? `Use ${(state.resolverCandidates||[]).length} selected as matches` : 'No matches on this bullet','applyPriorityDistricts()','primary')}${btn('Clear selections','resetResolverCandidates()')}</div><div class="grid2">${btn('Need hint',"answerPriority('not_sure')",'secondary')}</div>`;
    else actionArea=`
      <div class="panel"><div style="font-weight:700;margin-bottom:8px">Mark the surviving districts for this bullet</div><div class="muted">One survivor = winner. Several survivors = stay tied and move to the next bullet. Zero survivors = no district.</div></div>
      <div class="grid4">${DISTRICTS.map(d=>`<button class="btn ${(state.resolverCandidates||[]).includes(d)?'selected':''}" onclick="toggleResolverCandidate('${d}')">${d}</button>`).join('')}</div>
      <div class="grid2">${btn('Apply survivors','confirmResolverCandidates()','primary')}${btn('Reset all','resetResolverCandidates()')}</div>
      <div class="grid2">${btn('No district',"answerDistrict('none')")}${btn('Not sure',"answerDistrict('not_sure')",'secondary')}</div>`;
    const targetCard=isMultiTargetMode()?`<div class="targetcard" style="border-radius:18px;padding:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:12px;font-weight:700;text-transform:uppercase">◎ Targets for this action</div><div style="display:flex;flex-wrap:wrap;gap:8px">${Array.from({length:currentTargetLimit()}).map((_,idx)=>{ const value=state.selectedTargets[idx]; return `<span class="chip ${value ? 'chip-filled':'chip-empty'}">${value ? `Target ${idx+1}: District ${value}` : `Target ${idx+1}: —`}</span>`; }).join('')}</div><div style="margin-top:8px;font-size:12px">${remainingTargetSlots()>0 ? `${remainingTargetSlots()} target slot${remainingTargetSlots()===1?'':'s'} left.` : 'No target slots left.'}</div></div>`:'';
    const hint=state.showHint?`<div class="hint">${esc(currentHint())}</div>`:'';
    const trace=state.showTrace?`<div style="padding:0 20px 20px 20px">${state.history.length ? state.history.map(item=>`<div class="trace" style="margin-top:8px">${esc(item.reason)}</div>`).join('') : `<div class="muted">No steps logged yet.</div>`}</div>`:'';
    app.innerHTML=`<div class="card"><div class="row"><div><div class="small">Round ${state.roundTracker.round} • ${state.roundTracker.critical ? 'Critical event' : 'Normal event'}</div><div style="font-size:18px;font-weight:700">${factions[state.selectedFaction].label} NP resolver</div></div><span class="badge">${esc(c.name)}</span></div></div><div class="grid4" style="font-size:12px;font-weight:600">${['condition','gate','priority','district'].map((k,i)=>`<div class="${state.stage===k?'stepon':'stepoff'}" style="border-radius:16px;padding:8px 10px;text-align:center">${['Row','Legal','Priority','District'][i]}</div>`).join('')}</div><div class="card" style="padding:0;border:1px solid #e2e8f0;overflow:hidden"><div class="${headerClass}" style="padding:20px"><div class="row"><div><div style="font-size:12px;text-transform:uppercase;opacity:.8">Current row</div><div style="margin-top:4px;font-size:18px;font-weight:700">Row ${r.index} • ${r.action}</div><div style="font-size:14px;opacity:.9">${esc(r.instruction)}</div></div><span class="badge">${state.mode.toUpperCase()}</span></div><div style="margin-top:12px" class="progress"><div class="bar" style="width:${progress()}%"></div></div></div><div style="padding:20px;display:grid;gap:16px"><div class="checkcard" style="border-radius:18px;padding:14px"><div style="font-size:12px;text-transform:uppercase;color:#000">Check</div><div style="margin-top:4px;font-size:18px;font-weight:700;color:#000">${esc(prompt)}</div><div style="margin-top:8px;font-size:14px;color:#000">${esc(sub)}</div></div>${targetCard}${actionArea}<div class="grid2">${btn('‹ Back one step','stepBackResolver()')}${btn(state.showHint ? 'Hide hint':'Need help?','state.showHint=!state.showHint; render()','ghost')}</div>${hint}</div></div><div class="card" style="padding:0;border:1px solid #bae6fd;overflow:hidden"><button style="display:flex;width:100%;justify-content:space-between;align-items:center;padding:16px 20px;background:transparent;border:0" onclick="state.showTrace=!state.showTrace; render()"><div><div style="font-weight:700">Why it did that</div><div class="muted">Rules trace</div></div><span class="badge">${state.showTrace ? 'Hide':'Show'}</span></button>${trace}</div>`;
    return;
  }

  if(state.screen === 'result' && state.result){
    const r=state.result;
    const resultClass=r.status==='resolved'?'result-resolved':r.status==='continue'?'result-continue':'result-discard';
    const iconClass=r.status==='resolved'?'iconbox ok':r.status==='continue'?'iconbox cont':'iconbox warn';
    let extra='';
    if(r.status==='discard') extra = btn('Draw replacement card','handleDiscardReplacement()');
    else if(r.status==='continue') extra = btn('Resolve another district','continueSameAction()') + btn('Finish this action','finishThisAction()');
    else extra = btn('Resolve this NP again',`startResolver('${state.selectedFaction}')`);
    app.innerHTML=`<div class="card ${resultClass}"><div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px"><div class="${iconClass}">${r.status==='discard'?'!':'✓'}</div><div><div style="font-size:22px;font-weight:700">${esc(r.title)}</div><div class="muted" style="margin-top:4px">${esc(r.body)}</div></div></div><div class="grid">${btn('Return to dashboard',"state.screen='dashboard'; render()",'primary')}${extra}</div></div><div class="card"><div style="font-weight:700;margin-bottom:8px">Why it did that</div>${(r.trace && r.trace.length?r.trace:['No rules trace was captured for this result.']).map(line=>`<div class="trace" style="margin-top:8px">${esc(line)}</div>`).join('')}</div>`;
    return;
  }

  originalRender_v2();
};

window.startResolver = startResolver;
window.startModeResolution = startModeResolution;
window.back = back;
window.resetAll = resetAll;
window.answerPriority = answerPriority;
window.setRoundCritical = setRoundCritical;
window.continueRoundGate = continueRoundGate;
window.openActionLogger = openActionLogger;
window.toggleLogDistrict = toggleLogDistrict;
window.setLogFaction = setLogFaction;
window.setLogMode = setLogMode;
window.toggleLogChange = toggleLogChange;
window.updateLogNotes = updateLogNotes;
window.saveLoggedAction = saveLoggedAction;
window.advanceRound = advanceRound;
window.finishCensusCycle = finishCensusCycle;
window.toggleResolverCandidate = toggleResolverCandidate;
window.resetResolverCandidates = resetResolverCandidates;
window.confirmResolverCandidates = confirmResolverCandidates;
window.prefillLogFromCurrentResult = prefillLogFromCurrentResult;
window.applyPriorityDistricts = applyPriorityDistricts;
window.openEventProtocol = openEventProtocol;
window.setEventField = setEventField;
window.updateEventNotes = updateEventNotes;
window.toggleEventDistrict = toggleEventDistrict;
window.finishEventProtocol = finishEventProtocol;
render();


/* --- Advanced 1940s EVENT preset engine --- */
const EVENT_PRESETS_40S = {
  '001': { year: 1940, title: 'Bridge Opening Charts a New Path Forward', order:['private','public','community'], steps:[
    {kind:'infrastructure', action:'exhaust', amount:1, target:'one_district', text:'Exhaust 1 Infrastructure.'},
    {kind:'population', action:'move', amount:2, target:'adjacent', text:'Move 2 Population to any adjacent District(s).'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '002': { year: 1941, title: 'U.S. Enters The War', order:['public','private','community'], steps:[
    {kind:'population', action:'remove', amount:2, target:'any_districts', text:'Remove 2 Population from any District(s).'},
    {kind:'vulnerability', action:'remove_from_corrections', amount:1, target:'corrections', text:'Remove 1 Vulnerability from Corrections.'}
  ]},
  '003': { year: 1942, title: 'Moses Joins City Planning Commission', order:['private','public','community'], steps:[
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'},
    {kind:'phase', action:'quota', amount:null, target:'none', text:'Perform Quota Phase.'}
  ]},
  '004': { year: 1942, title: 'Roosevelt Fixes Prices', order:['public','community','private'], steps:[
    {kind:'infrastructure', action:'replace_private_with_community', amount:1, target:'one_district', text:'Replace 1 Private Infrastructure with 1 Community Infrastructure.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '005': { year: 1943, title: 'The Bronx Gets New Segregated Housing', order:['private','public','community'], steps:[
    {kind:'population', action:'remove', amount:2, target:'one_district', text:'Remove 2 Population from one District.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '006': { year: 1944, title: 'Roosevelt Signs Bill to Help Veterans', order:['community','private','public'], steps:[
    {kind:'organization', action:'place_with_grant_or_loan', amount:1, target:'one_district', text:'Place 1 Organization with a Grant or Loan.'}
  ]},
  '007': { year: 1945, title: "They're Coming Home", order:['community','public','private'], steps:[
    {kind:'population', action:'add', amount:2, target:'any_districts', text:'Add 2 Population to any District(s).'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '008': { year: 1946, title: 'Franco Under Fire in the Bronx', order:['public','private','community'], steps:[
    {kind:'organization', action:'grant_existing', amount:1, target:'one_district', text:'Give 1 Organization a Grant.'}
  ]},
  '009': { year: 1946, title: 'Commercial Flights Bring New Faces', order:['community','private','public'], steps:[
    {kind:'population', action:'add_each', amount:1, repeat:4, target:'four_districts', text:'Add 1 Population each to four Districts.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '010': { year: 1946, title: "Building America’s Suburban Dream", order:['private','public','community'], steps:[
    {kind:'organization', action:'activate_private', amount:1, target:'one_district', text:'Activate 1 Private Organization.'},
    {kind:'population', action:'remove_each', amount:1, repeat:3, target:'three_districts', text:'Remove 1 Population each from three Districts.'},
    {kind:'resources', action:'increase', amount:2, target:'faction', text:'Increase Resources by 2.'}
  ]},
  '011': { year: 1947, title: 'Local Impacts from Operation Bootstrap', order:['community','public','private'], steps:[
    {kind:'population', action:'add', amount:3, target:'one_district', text:'Add 3 Population to one District.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '012': { year: 1947, title: 'In Like Flynn', order:['public','private','community'], steps:[
    {kind:'resources', action:'increase', amount:2, target:'faction', text:'Increase Resources by 2.'},
    {kind:'organization', action:'move', amount:1, target:'any_districts', text:'Move 1 Organization between any Districts.'}
  ]},
  '013': { year: 1947, title: 'Puerto Ricans Fight for Rights', order:['community','public','private'], steps:[
    {kind:'organization', action:'place_with_grant', amount:1, target:'one_district', text:'Place 1 Organization with a Grant.'},
    {kind:'vulnerability', action:'move', amount:1, target:'any_districts', text:'Move 1 Vulnerability to any District.'}
  ]},
  '014': { year: 1949, title: 'Bronx Beaches Go Private', order:['public','private','community'], steps:[
    {kind:'organization', action:'replace_public_with_private', amount:1, target:'one_district', text:'Replace 1 Public Organization with 1 Private Organization.'},
    {kind:'resources', action:'increase', amount:1, target:'faction', text:'Increase Resources by 1.'}
  ]},
  '015': { year: 1949, title: 'Eminent Domain', order:['public','community','private'], steps:[
    {kind:'infrastructure', action:'exhaust', amount:1, target:'one_district', text:'Exhaust 1 Infrastructure.'},
    {kind:'organization', action:'remove', amount:1, target:'one_district', text:'Remove 1 Organization.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]}
};
const EVENT_PRESETS_50S = {
  '016': { year: 1950, title: 'New Public Housing in the Bronx', order:['public','community','private'], steps:[
    {kind:'infrastructure', action:'place_public', amount:1, target:'one_district', text:'Place 1 Public Infrastructure.'},
    {kind:'population', action:'move_up_to', amount:3, target:'any_districts', text:'Move up to 3 Population to any District(s).'},
    {kind:'organization', action:'remove', amount:1, target:'one_district', text:'Remove 1 Organization.'}
  ]},
  '017': { year: 1950, title: 'Economy Pushes Domestic Work Under the Table', order:['community','private','public'], steps:[
    {kind:'resources', action:'increase', amount:1, target:'faction', text:'Increase Resources by 1.'},
    {kind:'vulnerability', action:'add_each', amount:1, repeat:2, target:'two_districts', text:'Add 1 Vulnerability each to two Districts.'}
  ]},
  '018': { year: 1951, title: 'Integration Arrives to Fight in Korea', order:['public','private','community'], steps:[
    {kind:'population', action:'remove_each', amount:1, repeat:2, target:'two_districts', text:'Remove 1 Population from two Districts.'},
    {kind:'vulnerability', action:'remove_from_corrections', amount:1, target:'corrections', text:'Remove 1 Vulnerability from Corrections.'}
  ]},
  '019': { year: 1952, title: 'Property Values Decrease as Lenders Stop Lending', order:['private','public','community'], steps:[
    {kind:'organization', action:'remove', amount:1, target:'one_district', text:'Remove 1 Organization.'},
    {kind:'markers', action:'loans_to_1980', amount:null, target:'none', text:'Place any available Loan markers on the 1980 space.'}
  ]},
  '020': { year: 1952, title: 'Extension Connects Westchester to the City', order:['private','public','community'], steps:[
    {kind:'infrastructure', action:'exhaust', amount:1, target:'one_district', text:'Exhaust 1 Infrastructure.'},
    {kind:'population', action:'move', amount:2, target:'adjacent', text:'Move 2 Population from one District to one adjacent District.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '021': { year: 1953, title: 'Big “Boss” Buckley Back in the Bronx', order:['community','private','public'], steps:[
    {kind:'organization', action:'replace_with_any', amount:1, target:'one_district', text:'Replace 1 Organization with any other Organization.'},
    {kind:'organization', action:'grant_existing', amount:1, target:'one_district', text:'Give 1 Organization a Grant.'}
  ]},
  '022': { year: 1953, title: 'Bronx Attorney Elected to State Assembly', order:['community','public','private'], steps:[
    {kind:'organization', action:'place_with_grant', amount:1, target:'one_district', text:'Place 1 Organization with a Grant.'},
    {kind:'vulnerability', action:'move', amount:2, target:'adjacent', text:'Move 2 Vulnerabilities from one District to one adjacent District.'}
  ]},
  '023': { year: 1954, title: 'Migrants from Puerto Rico Love the Bronx', order:['community','public','private'], steps:[
    {kind:'population', action:'add', amount:3, target:'one_district', text:'Add 3 Population to one District.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '024': { year: 1954, title: 'Little Wagner Takes Mayoral Seat', order:['public','community','private'], steps:[
    {kind:'organization', action:'place_public_with_grant', amount:1, target:'one_district', text:'Place 1 Public Organization with a Grant.'}
  ]},
  '025': { year: 1955, title: 'Major Deegan Honored in Expressway Opening', order:['private','community','public'], steps:[
    {kind:'infrastructure', action:'exhaust', amount:2, target:'one_district', text:'Exhaust 2 Infrastructure.'},
    {kind:'population', action:'move', amount:2, target:'adjacent', text:'Move 2 Population from one District to one adjacent District.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '026': { year: 1956, title: 'Gangs of the Bronx', order:['community','private','public'], steps:[
    {kind:'resources', action:'increase', amount:1, target:'faction', text:'Increase Resources by 1.'},
    {kind:'vulnerability', action:'add', amount:1, target:'one_district', text:'Add 1 Vulnerability to one District.'}
  ]},
  '027': { year: 1957, title: 'Bronx Line Connects With Rest of Subway', order:['private','public','community'], steps:[
    {kind:'population', action:'move', amount:2, target:'adjacent', text:'Move 2 Population from one District to one adjacent District.'},
    {kind:'vulnerability', action:'remove', amount:1, target:'one_district', text:'Remove 1 Vulnerability from one District.'}
  ]},
  '028': { year: 1957, title: 'Community College Comes to the Bronx', order:['public','community','private'], steps:[
    {kind:'organization', action:'place_public_with_grant', amount:1, target:'one_district', text:'Place 1 Public Organization with a Grant.'},
    {kind:'vulnerability', action:'move', amount:2, target:'adjacent', text:'Move 2 Vulnerabilities from one District to one adjacent District.'}
  ]},
  '029': { year: 1958, title: 'Like Father Like Son: Wagner Fights for Working Class New Yorkers', order:['community','public','private'], steps:[
    {kind:'organization', action:'replace_with_any', amount:1, target:'one_district', text:'Replace 1 Organization with any other Organization.'},
    {kind:'vulnerability', action:'move', amount:2, target:'adjacent', text:'Move 2 Vulnerabilities from one District to one adjacent District.'}
  ]},
  '030': { year: 1958, title: 'As the City Grows Some New Yorkers Leave', order:['private','public','community'], steps:[
    {kind:'population', action:'remove_total', amount:4, target:'three_districts', text:'Remove 4 Population total from three Districts.'},
    {kind:'organization', action:'activate_private', amount:1, target:'one_district', text:'Activate 1 Private Organization.'},
    {kind:'resources', action:'increase', amount:2, target:'faction', text:'Increase Resources by 2.'}
  ]}
};
const EVENT_DECKS = {'1940s': EVENT_PRESETS_40S, '1950s': EVENT_PRESETS_50S};

function getEventPreset(){
  const decade = (state.eventProtocol && state.eventProtocol.decade) || '1940s';
  const key = state.eventProtocol && state.eventProtocol.cardKey;
  return key && EVENT_DECKS[decade] ? EVENT_DECKS[decade][key] : null;
}
function ensureEventProtocolShape(){
  if(!state.eventProtocol) resetEventProtocol();
  state.eventProtocol.decade = state.eventProtocol.decade || '1940s';
  state.eventProtocol.cardKey = state.eventProtocol.cardKey || '';
  state.eventProtocol.stepDistricts = state.eventProtocol.stepDistricts || {};
  state.eventProtocol.stepNotes = state.eventProtocol.stepNotes || {};
}
const _oldResetEventProtocol = resetEventProtocol;
resetEventProtocol = function(){
  _oldResetEventProtocol();
  state.eventProtocol.decade = '1940s';
  state.eventProtocol.cardKey = '';
  state.eventProtocol.stepDistricts = {};
  state.eventProtocol.stepNotes = {};
};
function setEventDecade(v){ ensureEventProtocolShape(); state.eventProtocol.decade = v; state.eventProtocol.cardKey=''; state.eventProtocol.card=''; state.eventProtocol.stepDistricts={}; state.eventProtocol.stepNotes={}; render(); }
function chooseEventCardPreset(key){
  ensureEventProtocolShape();
  state.eventProtocol.cardKey = key;
  const preset = getEventPreset();
  if(preset){
    state.eventProtocol.card = `${key} • ${preset.title}`;
    state.eventProtocol.effect = 'mixed';
    state.eventProtocol.targeting = 'preset';
    state.eventProtocol.piece = 'mixed';
    state.eventProtocol.districts = [];
    state.eventProtocol.notes = '';
    state.eventProtocol.stepDistricts = Object.fromEntries(preset.steps.map((_, idx)=>[String(idx), []]));
    state.eventProtocol.stepNotes = Object.fromEntries(preset.steps.map((_, idx)=>[String(idx), '']));
  }
  render();
}
function eventTargetHelp(step){
  const labels = {
    one_district:'Pick the single District affected.',
    any_districts:'Pick the District or Districts affected.',
    adjacent:'Pick the destination District or Districts. Note adjacency, source district, or split in the step note if needed.',
    four_districts:'Pick four Districts if known.',
    three_districts:'Pick three Districts if known.',
    two_districts:'Pick two Districts if known.',
    corrections:'No District selection needed; this step hits Corrections.',
    faction:'No District selection needed; this step hits faction resources.',
    none:'No District selection needed.'
  };
  return labels[step.target] || 'Select the affected Districts.';
}
function shouldShowStepDistricts(step){ return !['corrections','faction','none'].includes(step.target); }
function toggleEventStepDistrict(idx, d){
  ensureEventProtocolShape();
  const key = String(idx);
  const set = new Set(state.eventProtocol.stepDistricts[key] || []);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.eventProtocol.stepDistricts[key] = DISTRICTS.filter(x => set.has(x));
  render();
}
function updateEventStepNote(idx, value){ ensureEventProtocolShape(); state.eventProtocol.stepNotes[String(idx)] = value; }
function summarizeEventStep(step, idx){
  const ds = ((state.eventProtocol.stepDistricts||{})[String(idx)] || []);
  const note = ((state.eventProtocol.stepNotes||{})[String(idx)] || '').trim();
  const districtText = ds.length ? `Districts: ${ds.map(d=>`D${d}`).join(', ')}.` : (shouldShowStepDistricts(step) ? 'Districts still unresolved.' : 'No District selection needed.');
  return `${idx+1}. ${step.text} ${districtText}${note ? ` Note: ${note}` : ''}`;
}
const _oldFinishEventProtocol = finishEventProtocol;
finishEventProtocol = function(){
  ensureEventProtocolShape();
  const preset = getEventPreset();
  if(!preset) return _oldFinishEventProtocol();
  resetLogDraft();
  const ep = state.eventProtocol;
  state.logDraft.faction = ep.faction || state.selectedFaction || state.playerFaction || 'public';
  state.logDraft.mode = 'event';
  const allDistricts = [];
  const changes = new Set();
  preset.steps.forEach((step, idx)=>{
    (((ep.stepDistricts||{})[String(idx)] || [])).forEach(d=>{ if(!allDistricts.includes(d)) allDistricts.push(d); });
    if(step.kind === 'population') changes.add('population');
    if(step.kind === 'vulnerability') changes.add('vulnerability');
    if(step.kind === 'organization') changes.add('organization');
    if(step.kind === 'infrastructure') changes.add('infrastructure');
    if(['phase','resources'].includes(step.kind) || /grant|loan/i.test(step.action||'')) changes.add('markers');
  });
  state.logDraft.districts = allDistricts;
  for (const key of changes) state.logDraft.changes[key] = true;
  const orderText = preset.order.map(f=>factions[f].short).join(' → ');
  state.logDraft.notes = [`${ep.card || `${ep.cardKey} • ${preset.title}`}`, `Year: ${preset.year}`, `Order: ${orderText}`, ...preset.steps.map((step, idx)=>summarizeEventStep(step, idx)), ep.notes || ''].filter(Boolean).join(' | ');
  state.screen = 'log_action';
  render();
};

const _renderEventEnhanced = render;
render = function(){
  const app = document.getElementById('app');
  if(state.screen === 'event_protocol'){
    ensureEventProtocolShape();
    const ep = state.eventProtocol;
    const preset = getEventPreset();
    const cardButtons = Object.entries(EVENT_DECKS[ep.decade] || {}).map(([key, card])=>`<button class="btn ${ep.cardKey===key?'selected':''}" onclick="chooseEventCardPreset('${key}')"><div style="font-weight:700">${key} • ${esc(card.title)}</div><div class="small">${card.year}</div></button>`).join('');
    app.innerHTML = `
      <div class="card">
        <div class="small">EVENT branch for ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Advanced EVENT protocol</div>
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:8px">Deck preset</div>
          <div class="grid2" style="margin-bottom:10px">
            ${btn('1940s deck', "setEventDecade('1940s')", ep.decade==='1940s' ? 'primary' : '')}
            ${btn('1950s deck', "setEventDecade('1950s')", ep.decade==='1950s' ? 'primary' : '')}
            ${btn('Generic manual', "setEventDecade('generic')", ep.decade==='generic' ? 'primary' : '')}
          </div>
          <div class="small">The 1940s and 1950s scans are wired as presets. Generic manual mode is still available for uncoded cards.</div>
        </div>
        ${['1940s','1950s'].includes(ep.decade) ? `<div class="card" style="padding:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Choose ${esc(ep.decade)} event card</div><div class="grid2">${cardButtons}</div></div>` : ''}
        ${preset ? `<div class="card" style="padding:14px;margin-bottom:14px"><div class="row" style="margin-bottom:8px"><div><div style="font-size:18px;font-weight:700">${esc(ep.card || `${ep.cardKey} • ${preset.title}`)}</div><div class="small">${preset.year} • Order: ${preset.order.map(f=>factions[f].short).join(' → ')}</div></div><span class="badge">${preset.steps.length} step${preset.steps.length===1?'':'s'}</span></div>${preset.steps.map((step, idx)=>`<div class="panel" style="margin-top:12px"><div style="font-size:12px;text-transform:uppercase;opacity:.75">Step ${idx+1}</div><div style="margin-top:4px;font-size:16px;font-weight:700">${esc(step.text)}</div><div class="small" style="margin-top:6px">${esc(eventTargetHelp(step))}</div>${shouldShowStepDistricts(step) ? `<div class="grid4" style="margin-top:10px">${DISTRICTS.map(d=>`<button class="btn ${(((ep.stepDistricts||{})[String(idx)]||[]).includes(d))?'selected':''}" onclick="toggleEventStepDistrict(${idx}, '${d}')">${d}</button>`).join('')}</div>` : ''}<textarea oninput="updateEventStepNote(${idx}, this.value)" style="width:100%;min-height:72px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit;margin-top:10px" placeholder="Optional note: adjacency, source district, which org, loan/grant details, etc.">${esc(((ep.stepNotes||{})[String(idx)] || ''))}</textarea></div>`).join('')}</div>` : ''}
        ${ep.decade==='generic' ? `<div class="card" style="padding:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Generic manual mode</div><div class="small" style="margin-bottom:8px">Use this for uncoded decks. The older generic EVENT fields still work here.</div><input value="${esc(ep.card || '')}" oninput="setEventField('card', this.value)" placeholder="Card number / title" style="width:100%;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit"></div>` : ''}
        <textarea oninput="updateEventNotes(this.value)" style="width:100%;min-height:96px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit" placeholder="Overall event notes">${esc(ep.notes || '')}</textarea>
        <div class="grid2" style="margin-top:14px">
          ${btn(state.eventProtocol.fromResolver ? 'Back to mode selection' : 'Back to dashboard', state.eventProtocol.fromResolver ? "state.screen='mode'; render()" : "state.screen='dashboard'; render()")}
          ${btn(preset ? 'Prefill EVENT log from preset' : 'Prefill EVENT log', 'finishEventProtocol()', 'primary')}
        </div>
      </div>`;
    return;
  }
  _renderEventEnhanced();
};
window.setEventDecade = setEventDecade;
window.chooseEventCardPreset = chooseEventCardPreset;
window.toggleEventStepDistrict = toggleEventStepDistrict;
window.updateEventStepNote = updateEventStepNote;
window.finishEventProtocol = finishEventProtocol;
window.render = render;

/* --- Modular core effect resolver library (option 2 event upgrade) --- */
const EVENT_EFFECT_RESOLVERS = {
  infrastructure_exhaust: {
    id: 'infrastructure_exhaust',
    label: 'Exhaust infrastructure',
    targetStrategy: 'district_then_tile',
    prompts: [
      'Choose the district containing the infrastructure tile being exhausted.',
      'Use the note field to identify the tile or current owner if that matters.',
      'Then record any rehousing and anything that becomes unhoused.'
    ],
    defaultChanges: ['infrastructure', 'population', 'vulnerability', 'organization'],
    noteHint: 'Tile identity, rehousing result, pieces left unhoused'
  },
  infrastructure_place_public: {
    id: 'infrastructure_place_public',
    label: 'Place Public infrastructure',
    targetStrategy: 'district_then_house',
    prompts: [
      'Choose the district receiving the new Public infrastructure.',
      'After placement, house as many eligible unhoused pieces as possible.',
      'Use the note field for any important housing choice.'
    ],
    defaultChanges: ['infrastructure', 'population', 'vulnerability', 'organization'],
    noteHint: 'Housing choice, coalition created, pieces still unhoused'
  },
  infrastructure_replace: {
    id: 'infrastructure_replace',
    label: 'Replace infrastructure',
    targetStrategy: 'district_then_tile',
    prompts: [
      'Choose the district containing the infrastructure being replaced.',
      'Use the note field to show what was replaced and what entered.',
      'Record any housing consequences if the swap changed who can be housed.'
    ],
    defaultChanges: ['infrastructure', 'population', 'vulnerability', 'organization'],
    noteHint: 'From/to infrastructure, owner, housing consequences'
  },
  population_add: {
    id: 'population_add',
    label: 'Add population',
    targetStrategy: 'district_pool',
    prompts: [
      'Choose the affected district or districts.',
      'Use the note field if the cubes are split unevenly or housing matters.',
      'If housing is relevant, note whether the new population was housed or left unhoused.'
    ],
    defaultChanges: ['population'],
    noteHint: 'Counts by district, housed vs unhoused'
  },
  population_move: {
    id: 'population_move',
    label: 'Move population',
    targetStrategy: 'source_destination',
    prompts: [
      'Select the destination district(s) here.',
      'Use the note field to record the source district and any adjacency requirement.',
      'Also note whether the moved population ended housed or unhoused.'
    ],
    defaultChanges: ['population'],
    noteHint: 'Source district, adjacency, housed/unhoused result'
  },
  population_remove: {
    id: 'population_remove',
    label: 'Remove population',
    targetStrategy: 'district_pool',
    prompts: [
      'Choose the district or districts population is removed from.',
      'If the card removes one each from multiple districts, use the exact districts.',
      'Use the note field if the total is split in a special way.'
    ],
    defaultChanges: ['population'],
    noteHint: 'Counts removed by district, total split'
  },
  vulnerability_add: {
    id: 'vulnerability_add',
    label: 'Add vulnerability',
    targetStrategy: 'district_pool',
    prompts: [
      'Choose the district or districts receiving vulnerability.',
      'Use the note field if any vulnerability was housed on infrastructure.',
      'If only one district applies, selecting that district completes the targeting.'
    ],
    defaultChanges: ['vulnerability'],
    noteHint: 'Counts by district, housed vs unhoused'
  },
  vulnerability_move: {
    id: 'vulnerability_move',
    label: 'Move vulnerability',
    targetStrategy: 'source_destination',
    prompts: [
      'Select the destination district(s) here.',
      'Use the note field to record source district and any adjacency restriction.',
      'If multiple vulnerability cubes split across destinations, record that split in the note.'
    ],
    defaultChanges: ['vulnerability'],
    noteHint: 'Source district, adjacency, split among destinations'
  },
  vulnerability_remove: {
    id: 'vulnerability_remove',
    label: 'Remove vulnerability',
    targetStrategy: 'district_pool',
    prompts: [
      'Choose the district vulnerability is removed from, unless the step hits Corrections.',
      'Use the note field if the removal came from Corrections or Overflow instead.',
      'Record any special follow-up if the removal opens housing or changes petitions.'
    ],
    defaultChanges: ['vulnerability'],
    noteHint: 'Source district or Corrections, follow-up consequences'
  },
  organization_place: {
    id: 'organization_place',
    label: 'Place organization',
    targetStrategy: 'district_then_house',
    prompts: [
      'Choose the district receiving the organization.',
      'If a grant or loan is waiting, note whether it attached to the new organization.',
      'Use the note field for tile placement and any coalition created.'
    ],
    defaultChanges: ['organization', 'markers'],
    noteHint: 'Faction org, grant/loan, tile placement, coalition'
  },
  organization_remove: {
    id: 'organization_remove',
    label: 'Remove organization',
    targetStrategy: 'district_then_specific',
    prompts: [
      'Choose the district losing the organization.',
      'Use the note field to identify which organization was removed.',
      'If the removed organization defaulted a loan or grant, record that too.'
    ],
    defaultChanges: ['organization', 'markers'],
    noteHint: 'Which org removed, defaulted grant/loan, coalition broken'
  },
  organization_replace: {
    id: 'organization_replace',
    label: 'Replace organization',
    targetStrategy: 'district_then_specific',
    prompts: [
      'Choose the district where the replacement happens.',
      'Use the note field to identify the outgoing organization and the incoming one.',
      'Record any grant, loan, or coalition consequences.'
    ],
    defaultChanges: ['organization', 'markers'],
    noteHint: 'Outgoing org, incoming org, grant/loan, coalition'
  },
  organization_activate: {
    id: 'organization_activate',
    label: 'Activate organization',
    targetStrategy: 'district_then_specific',
    prompts: [
      'Choose the district containing the organization being activated.',
      'Use the note field to identify which organization activated.',
      'Record any immediate effect if the card ties activation to a removal or resource gain.'
    ],
    defaultChanges: ['organization'],
    noteHint: 'Which org activated, linked effect if any'
  },
  markers_shift: {
    id: 'markers_shift',
    label: 'Marker / grant / loan shift',
    targetStrategy: 'special',
    prompts: [
      'This step usually does not target a normal district selection.',
      'Use the note field to record the exact grant, loan, petition, blight, or calendar effect.',
      'If a district is involved anyway, you can still select it manually.'
    ],
    defaultChanges: ['markers'],
    noteHint: 'Grant/loan/petition/blight/calendar detail'
  },
  phase_quota: {
    id: 'phase_quota',
    label: 'Quota / special phase',
    targetStrategy: 'special',
    prompts: [
      'This step triggers a phase instead of moving a normal piece.',
      'Use the note field to record how that phase was resolved.',
      'If the phase changed districts or pieces, summarize the result in the note.'
    ],
    defaultChanges: ['markers'],
    noteHint: 'Phase resolution summary'
  },
  resources_delta: {
    id: 'resources_delta',
    label: 'Resource change',
    targetStrategy: 'special',
    prompts: [
      'This step changes faction resources rather than a district directly.',
      'Use the note field to record the resource delta and any linked condition.',
      'If a district was involved indirectly, you may still select it.'
    ],
    defaultChanges: ['resources'],
    noteHint: 'Resource delta, debt/tax note if relevant'
  },
  generic_manual: {
    id: 'generic_manual',
    label: 'Manual override',
    targetStrategy: 'manual',
    prompts: [
      'Use this when the standard resolver is not a good fit.',
      'Select any districts that matter and explain the full result in the note.',
      'This preserves flexibility without forcing a bad template.'
    ],
    defaultChanges: [],
    noteHint: 'Describe the step in plain English'
  }
};

function inferResolverId(step){
  if(!step) return 'generic_manual';
  const key = `${step.kind||''}:${step.action||''}`;
  const map = {
    'infrastructure:exhaust': 'infrastructure_exhaust',
    'infrastructure:place_public': 'infrastructure_place_public',
    'infrastructure:replace_private_with_community': 'infrastructure_replace',
    'population:add': 'population_add',
    'population:add_each': 'population_add',
    'population:move': 'population_move',
    'population:move_up_to': 'population_move',
    'population:remove': 'population_remove',
    'population:remove_each': 'population_remove',
    'population:remove_total': 'population_remove',
    'vulnerability:add': 'vulnerability_add',
    'vulnerability:add_each': 'vulnerability_add',
    'vulnerability:move': 'vulnerability_move',
    'vulnerability:remove': 'vulnerability_remove',
    'vulnerability:remove_from_corrections': 'vulnerability_remove',
    'organization:place_with_grant_or_loan': 'organization_place',
    'organization:place_with_grant': 'organization_place',
    'organization:place_public_with_grant': 'organization_place',
    'organization:grant_existing': 'markers_shift',
    'organization:remove': 'organization_remove',
    'organization:replace_public_with_private': 'organization_replace',
    'organization:replace_with_any': 'organization_replace',
    'organization:move': 'organization_place',
    'organization:activate_private': 'organization_activate',
    'markers:loans_to_1980': 'markers_shift',
    'phase:quota': 'phase_quota',
    'resources:increase': 'resources_delta'
  };
  return map[key] || 'generic_manual';
}

function ensureEventProtocolV3(){
  ensureEventProtocolShape();
  state.eventProtocol.stepResolver = state.eventProtocol.stepResolver || {};
  state.eventProtocol.stepManual = state.eventProtocol.stepManual || {};
  state.eventProtocol.stepChanges = state.eventProtocol.stepChanges || {};
  const preset = getEventPreset();
  if(preset){
    preset.steps.forEach((step, idx) => {
      const key = String(idx);
      if(!state.eventProtocol.stepResolver[key]) state.eventProtocol.stepResolver[key] = inferResolverId(step);
      if(typeof state.eventProtocol.stepManual[key] !== 'boolean') state.eventProtocol.stepManual[key] = false;
      if(!state.eventProtocol.stepChanges[key]) {
        const resolver = EVENT_EFFECT_RESOLVERS[state.eventProtocol.stepResolver[key]] || EVENT_EFFECT_RESOLVERS.generic_manual;
        state.eventProtocol.stepChanges[key] = {
          population: resolver.defaultChanges.includes('population'),
          vulnerability: resolver.defaultChanges.includes('vulnerability'),
          organization: resolver.defaultChanges.includes('organization'),
          infrastructure: resolver.defaultChanges.includes('infrastructure'),
          markers: resolver.defaultChanges.includes('markers'),
          resources: resolver.defaultChanges.includes('resources')
        };
      }
    });
  }
}

function setEventStepResolver(idx, resolverId){
  ensureEventProtocolV3();
  const key = String(idx);
  state.eventProtocol.stepResolver[key] = resolverId;
  const resolver = EVENT_EFFECT_RESOLVERS[resolverId] || EVENT_EFFECT_RESOLVERS.generic_manual;
  state.eventProtocol.stepChanges[key] = {
    population: resolver.defaultChanges.includes('population'),
    vulnerability: resolver.defaultChanges.includes('vulnerability'),
    organization: resolver.defaultChanges.includes('organization'),
    infrastructure: resolver.defaultChanges.includes('infrastructure'),
    markers: resolver.defaultChanges.includes('markers'),
    resources: resolver.defaultChanges.includes('resources')
  };
  render();
}
function toggleEventStepManual(idx){ ensureEventProtocolV3(); const k=String(idx); state.eventProtocol.stepManual[k] = !state.eventProtocol.stepManual[k]; render(); }
function toggleEventStepChange(idx, changeKey){ ensureEventProtocolV3(); const k=String(idx); state.eventProtocol.stepChanges[k][changeKey] = !state.eventProtocol.stepChanges[k][changeKey]; render(); }
function getResolverForStep(idx, step){ ensureEventProtocolV3(); return EVENT_EFFECT_RESOLVERS[state.eventProtocol.stepResolver[String(idx)]] || EVENT_EFFECT_RESOLVERS.generic_manual; }

function eventStepSummaryDetailed(step, idx){
  const key = String(idx);
  const ds = ((state.eventProtocol.stepDistricts||{})[key] || []);
  const note = ((state.eventProtocol.stepNotes||{})[key] || '').trim();
  const resolver = getResolverForStep(idx, step);
  const changes = Object.entries((state.eventProtocol.stepChanges||{})[key] || {}).filter(([,v])=>v).map(([k])=>k).join(', ');
  const districtText = ds.length ? `Districts: ${ds.map(d=>`D${d}`).join(', ')}.` : (resolver.targetStrategy === 'special' ? 'No normal district selection.' : 'Districts unresolved.');
  const manualText = state.eventProtocol.stepManual[key] ? 'Manual override used.' : '';
  return `${idx+1}. ${step.text} Resolver: ${resolver.label}. ${districtText}${changes ? ` Changes: ${changes}.` : ''}${manualText ? ` ${manualText}` : ''}${note ? ` Note: ${note}` : ''}`;
}

const __oldChooseEventCardPreset_v3 = chooseEventCardPreset;
chooseEventCardPreset = function(key){
  __oldChooseEventCardPreset_v3(key);
  ensureEventProtocolV3();
};
const __oldSetEventDecade_v3 = setEventDecade;
setEventDecade = function(v){ __oldSetEventDecade_v3(v); ensureEventProtocolV3(); };
const __oldOpenEventProtocol_v3 = openEventProtocol;
openEventProtocol = function(fromResolver=false){ __oldOpenEventProtocol_v3(fromResolver); ensureEventProtocolV3(); };

finishEventProtocol = function(){
  ensureEventProtocolV3();
  const preset = getEventPreset();
  if(!preset) return _oldFinishEventProtocol();
  resetLogDraft();
  const ep = state.eventProtocol;
  state.logDraft.faction = ep.faction || state.selectedFaction || state.playerFaction || 'public';
  state.logDraft.mode = 'event';
  const allDistricts = [];
  const mergedChanges = { population:false, vulnerability:false, organization:false, infrastructure:false, markers:false, resources:false };
  preset.steps.forEach((step, idx) => {
    const key = String(idx);
    (((ep.stepDistricts||{})[key] || [])).forEach(d => { if(!allDistricts.includes(d)) allDistricts.push(d); });
    const stepChanges = (ep.stepChanges||{})[key] || {};
    Object.keys(mergedChanges).forEach(k => { if(stepChanges[k]) mergedChanges[k] = true; });
  });
  state.logDraft.districts = allDistricts;
  state.logDraft.changes = mergedChanges;
  const orderText = preset.order.map(f=>factions[f].short).join(' → ');
  state.logDraft.notes = [
    ep.card || `${ep.cardKey} • ${preset.title}`,
    `Year: ${preset.year}`,
    `Order: ${orderText}`,
    ...preset.steps.map((step, idx)=>eventStepSummaryDetailed(step, idx)),
    ep.notes || ''
  ].filter(Boolean).join(' | ');
  state.screen = 'log_action';
  render();
};

const __renderBeforeModularResolver = render;
render = function(){
  const app = document.getElementById('app');
  if(state.screen === 'event_protocol'){
    ensureEventProtocolV3();
    const ep = state.eventProtocol;
    const preset = getEventPreset();
    const cardButtons = ['1940s','1950s'].includes(ep.decade)
      ? Object.entries(EVENT_DECKS[ep.decade] || {}).map(([key, card])=>`<button class="btn ${ep.cardKey===key?'selected':''}" onclick="chooseEventCardPreset('${key}')"><div style="font-weight:700">${key} • ${esc(card.title)}</div><div class="small">${card.year}</div></button>`).join('')
      : '';
    app.innerHTML = `
      <div class="card">
        <div class="small">EVENT branch for ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div>
        <div style="font-size:22px;font-weight:800;margin-bottom:12px">Advanced EVENT protocol • modular resolvers</div>
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700;margin-bottom:8px">Deck preset</div>
          <div class="grid2" style="margin-bottom:10px">
            ${btn('1940s deck', "setEventDecade('1940s')", ep.decade==='1940s' ? 'primary' : '')}
            ${btn('1950s deck', "setEventDecade('1950s')", ep.decade==='1950s' ? 'primary' : '')}
            ${btn('Generic manual', "setEventDecade('generic')", ep.decade==='generic' ? 'primary' : '')}
          </div>
          
        </div>
        ${['1940s','1950s'].includes(ep.decade) ? `<div class="card" style="padding:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Choose ${esc(ep.decade)} event card</div><div class="grid2">${cardButtons}</div></div>` : ''}
        ${preset ? `<div class="card" style="padding:14px;margin-bottom:14px"><div class="row" style="margin-bottom:8px"><div><div style="font-size:18px;font-weight:700">${esc(ep.card || `${ep.cardKey} • ${preset.title}`)}</div><div class="small">${preset.year} • Order: ${preset.order.map(f=>factions[f].short).join(' → ')}</div></div><span class="badge">${preset.steps.length} step${preset.steps.length===1?'':'s'}</span></div>${preset.steps.map((step, idx)=>{
            const key = String(idx);
            const resolver = getResolverForStep(idx, step);
            const stepChanges = (ep.stepChanges||{})[key] || {population:false,vulnerability:false,organization:false,infrastructure:false,markers:false,resources:false};
            return `<div class="panel" style="margin-top:12px">
              <div class="row" style="align-items:flex-start;gap:10px"><div><div style="font-size:12px;text-transform:uppercase;opacity:.75">Step ${idx+1}</div><div style="margin-top:4px;font-size:16px;font-weight:700">${esc(step.text)}</div></div><span class="badge">${esc(resolver.label)}</span></div>
              <div class="small" style="margin-top:8px">Resolver</div>
              <div class="grid2" style="margin-top:8px">${Object.values(EVENT_EFFECT_RESOLVERS).map(r=>btn(r.label, `setEventStepResolver(${idx}, '${r.id}')`, resolver.id===r.id ? 'primary' : '')).join('')}</div>
              <div class="panel" style="margin-top:10px;background:#f8fafc">${resolver.prompts.map(p=>`<div class="small" style="margin-top:4px">• ${esc(p)}</div>`).join('')}</div>
              ${resolver.targetStrategy !== 'special' ? `<div class="small" style="margin-top:10px">Affected district(s)</div><div class="grid4" style="margin-top:8px">${DISTRICTS.map(d=>`<button class="btn ${(((ep.stepDistricts||{})[key]||[]).includes(d))?'selected':''}" onclick="toggleEventStepDistrict(${idx}, '${d}')">${d}</button>`).join('')}</div>` : ''}
                            <div class="grid2" style="margin-top:10px">${btn((ep.stepManual||{})[key] ? 'Manual override on' : 'Use resolver as written', `toggleEventStepManual(${idx})`, (ep.stepManual||{})[key] ? 'primary' : '')}</div>
              <textarea oninput="updateEventStepNote(${idx}, this.value)" style="width:100%;min-height:72px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit;margin-top:10px" placeholder="${esc(resolver.noteHint)}">${esc(((ep.stepNotes||{})[key] || ''))}</textarea>
            </div>`;
          }).join('')}</div>` : ''}
        ${ep.decade==='generic' ? `<div class="card" style="padding:14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Generic manual mode</div><div class="small" style="margin-bottom:8px">Use this for uncoded decks or truly weird cards.</div><input value="${esc(ep.card || '')}" oninput="setEventField('card', this.value)" placeholder="Card number / title" style="width:100%;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit"></div>` : ''}
        <textarea oninput="updateEventNotes(this.value)" style="width:100%;min-height:96px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit" placeholder="Overall event notes">${esc(ep.notes || '')}</textarea>
        <div class="grid2" style="margin-top:14px">
          ${btn(state.eventProtocol.fromResolver ? 'Back to mode selection' : 'Back to dashboard', state.eventProtocol.fromResolver ? "state.screen='mode'; render()" : "state.screen='dashboard'; render()")}
          ${btn(preset ? 'Prefill EVENT log from resolved steps' : 'Prefill EVENT log', 'finishEventProtocol()', 'primary')}
        </div>
      </div>`;
    return;
  }
  __renderBeforeModularResolver();
};
window.chooseEventCardPreset = chooseEventCardPreset;
window.setEventDecade = setEventDecade;
window.openEventProtocol = openEventProtocol;
window.setEventStepResolver = setEventStepResolver;
window.toggleEventStepManual = toggleEventStepManual;
window.toggleEventStepChange = toggleEventStepChange;
window.finishEventProtocol = finishEventProtocol;
window.render = render;


// --- r7 critical-only event wizard + board setup integration ---
const BOARD_SETUP_PRESETS = {
  '1940': {
    label: '1940 setup',
    deck: '1940s',
    resources: { public: 7, community: 5, private: 9 },
    losses: 0,
    taxRate: '1/2',
    corrections: 6,
    factionArea: { public: { loans: 0, grants: 0 }, community: { loans: 0, grants: 0 }, private: { loans: 0, grants: 0 } },
    districts: {
      '1': { infrastructures: [ { faction: 'private', population: 2, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '2': { infrastructures: [ { faction: 'public', population: 5, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '3': { infrastructures: [ { faction: 'public', population: 5, vulnerability: 1, organizations: [ { faction: 'public' } ] }, { faction: 'community', population: 4, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '4': { infrastructures: [ { faction: 'community', population: 5, vulnerability: 1, organizations: [ { faction: 'public', loan: true }, { faction: 'community' } ], coalition: 'social' }, { faction: 'public', population: 3, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '5': { infrastructures: [ { faction: 'private', population: 5, vulnerability: 1, organizations: [] }, { faction: 'public', population: 1, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '6': { infrastructures: [ { faction: 'private', population: 5, vulnerability: 1, organizations: [ { faction: 'private' } ] }, { faction: 'community', population: 4, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 0 } },
      '9': { infrastructures: [ { faction: 'private', population: 4, vulnerability: 1, organizations: [ { faction: 'private' } ] } ], unhoused: { population: 0, vulnerability: 1 } }
    }
  },
  '1950': {
    label: '1950 setup',
    deck: '1950s',
    resources: { public: 5, community: 3, private: 4 },
    losses: 0,
    taxRate: '1/2',
    corrections: 8,
    factionArea: { public: { loans: 1, grants: 0 }, community: { loans: 0, grants: 0 }, private: { loans: 0, grants: 0 } },
    districts: {
      '1': { infrastructures: [ { faction: 'private', population: 4, vulnerability: 1, organizations: [ { faction: 'private' } ] } ], unhoused: { population: 0, vulnerability: 1 } },
      '2': { infrastructures: [ { faction: 'public', population: 2, vulnerability: 1, organizations: [ { faction: 'public' } ] } ], unhoused: { population: 0, vulnerability: 1 } },
      '3': { infrastructures: [ { faction: 'community', population: 5, vulnerability: 1, organizations: [ { faction: 'public' }, { faction: 'private' } ], coalition: 'economic' }, { faction: 'private', population: 3, vulnerability: 1, organizations: [ { faction: 'community' }, { faction: 'private' } ], coalition: 'economic' } ], unhoused: { population: 0, vulnerability: 1 } },
      '4': { infrastructures: [ { faction: 'community', population: 5, vulnerability: 1, organizations: [ { faction: 'public' }, { faction: 'community' } ], coalition: 'social' }, { faction: 'public', population: 4, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '5': { infrastructures: [ { faction: 'private', population: 5, vulnerability: 1, organizations: [ { faction: 'private' } ] }, { faction: 'community', population: 3, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 1 } },
      '6': { infrastructures: [ { faction: 'private', population: 5, vulnerability: 1, organizations: [ { faction: 'public' }, { faction: 'community' } ], coalition: 'social' }, { faction: 'community', population: 2, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 0 } },
      '9': { infrastructures: [ { faction: 'private', population: 5, vulnerability: 1, organizations: [ { faction: 'private' } ] }, { faction: 'public', population: 2, vulnerability: 1, organizations: [] } ], unhoused: { population: 0, vulnerability: 0 } }
    }
  }
};

function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }
function ensureBoardState(){
  state.boardState = state.boardState || null;
  state.currentSetup = state.currentSetup || null;
}
function loadBoardSetupPreset(key){
  ensureBoardState();
  const preset = BOARD_SETUP_PRESETS[key];
  if(!preset) return;
  state.currentSetup = key;
  state.boardState = deepClone(preset);
  state.roundTracker = state.roundTracker || { round: 1, max: 8, critical: null, checked: false, pendingScreen: null };
  state.roundTracker.round = 1;
  state.roundTracker.critical = null;
  state.roundTracker.checked = false;
  state.roundTracker.pendingScreen = null;
  if(state.eventProtocol){
    state.eventProtocol.decade = preset.deck;
    state.eventProtocol.cardKey = '';
    state.eventProtocol.card = '';
    state.eventProtocol.currentStep = 0;
  }
  state.actionLog = state.actionLog || [];
  state.actionLog.unshift({
    faction: 'system',
    mode: 'setup',
    round: 1,
    title: `${preset.label} loaded`,
    body: `${preset.label} loaded. Resources — PUB ${preset.resources.public}, COM ${preset.resources.community}, PRI ${preset.resources.private}. Corrections ${preset.corrections}.`,
    trace: [`Loaded ${preset.label}.`, `Deck set to ${preset.deck}.`, 'Round reset to 1.']
  });
  state.screen = 'dashboard';
  render();
}
function boardStateSummaryHtml(){
  ensureBoardState();
  if(!state.boardState) return `<div class="panel"><div style="font-weight:700;margin-bottom:8px">Board setup</div><div class="muted" style="margin-bottom:10px">Load a decade setup to initialize assisted state tracking before round 1.</div><div class="grid2">${btn('Load 1940 setup', "loadBoardSetupPreset('1940')", 'primary')}${btn('Load 1950 setup', "loadBoardSetupPreset('1950')", 'primary')}</div></div>`;
  const bs = state.boardState;
  const districtRows = Object.entries(bs.districts).map(([d, info]) => {
    const infraText = info.infrastructures.map((inf, idx) => {
      const orgs = (inf.organizations||[]).map(o => `${factions[o.faction].short}${o.loan ? ' loan' : ''}${o.grant ? ' grant' : ''}`).join(', ');
      return `• ${idx+1}: ${factions[inf.faction].short} infra — P${inf.population} V${inf.vulnerability}${orgs ? ` • ${orgs}` : ''}${inf.coalition ? ` • ${inf.coalition}` : ''}`;
    }).join('<br>');
    return `<div class="panel" style="font-size:13px"><div style="font-weight:700;margin-bottom:6px">District ${d}</div>${infraText}<div class="small" style="margin-top:6px">Unhoused: P${info.unhoused.population || 0} / V${info.unhoused.vulnerability || 0}</div></div>`;
  }).join('');
  return `<div class="panel"><div class="row" style="margin-bottom:10px"><div><div style="font-weight:700">${bs.label}</div><div class="small">Deck ${bs.deck} • round ${state.roundTracker.round}</div></div><span class="badge">Loaded</span></div><div class="small" style="margin-bottom:10px">Resources — PUB ${bs.resources.public}, COM ${bs.resources.community}, PRI ${bs.resources.private} • Losses ${bs.losses} • Tax ${bs.taxRate} • Corrections ${bs.corrections}</div><div class="small" style="margin-bottom:10px">Faction area — PUB loans ${bs.factionArea.public.loans}, COM loans ${bs.factionArea.community.loans}, PRI loans ${bs.factionArea.private.loans}</div><div class="grid2" style="margin-bottom:10px">${btn('Reload 1940', "loadBoardSetupPreset('1940')")}${btn('Reload 1950', "loadBoardSetupPreset('1950')")}</div><div class="grid2">${districtRows}</div></div>`;
}

function eventCardIsCritical(preset){
  if(!preset) return false;
  return preset.steps.some(step => {
    if(step.kind === 'infrastructure') return true;
    if(step.kind === 'organization') return true;
    return false;
  });
}
function ensureEventProtocolR7(){
  ensureEventProtocolV3();
  state.eventProtocol.currentStep = Number.isInteger(state.eventProtocol.currentStep) ? state.eventProtocol.currentStep : 0;
}
const __oldChooseEventCardPreset_r7 = chooseEventCardPreset;
chooseEventCardPreset = function(key){ __oldChooseEventCardPreset_r7(key); ensureEventProtocolR7(); state.eventProtocol.currentStep = 0; render(); };
const __oldOpenEventProtocol_r7 = openEventProtocol;
openEventProtocol = function(fromResolver=false){ __oldOpenEventProtocol_r7(fromResolver); ensureEventProtocolR7(); if(state.boardState && state.boardState.deck) state.eventProtocol.decade = state.boardState.deck; state.eventProtocol.currentStep = 0; render(); };
const __oldSetEventDecade_r7 = setEventDecade;
setEventDecade = function(v){ __oldSetEventDecade_r7(v); ensureEventProtocolR7(); state.eventProtocol.currentStep = 0; render(); };
function nextCriticalEventStep(){ ensureEventProtocolR7(); const preset = getEventPreset(); if(!preset) return; if(state.eventProtocol.currentStep < preset.steps.length - 1){ state.eventProtocol.currentStep += 1; render(); return; } finishEventProtocol(); }
function prevCriticalEventStep(){ ensureEventProtocolR7(); if(state.eventProtocol.currentStep > 0){ state.eventProtocol.currentStep -= 1; render(); } else { state.screen = 'mode'; render(); } }

const __oldStartModeResolution_r7 = startModeResolution;
startModeResolution = function(){
  if(state.mode === 'event' && state.roundTracker && state.roundTracker.critical !== true){
    state.result = { status:'resolved', title:'EVENT not available', body:'NP only chooses EVENT when the current card is critical.', trace:['Critical-event check is not marked true.', 'Choose ACT, REACT, or PLAN instead.'] };
    state.screen = 'result';
    render();
    return;
  }
  __oldStartModeResolution_r7();
};

const __renderBeforeR7 = render;
render = function(){
  const app = document.getElementById('app');
  ensureBoardState();
  if(state.screen === 'dashboard'){
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
      ${boardStateSummaryHtml()}
      <div class="card"><div class="small">You are playing</div><div class="row"><div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div>${pill(factions[state.playerFaction].short, state.playerFaction)}</div></div>
      ${npFactions().map(f=>{ const card=cards[f].find(c=>c.id===state.npCards[f]); return `<div class="card"><div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ''}` : 'No Position card selected'}</div></div>${pill(factions[f].short,f)}</div><div class="grid2">${btn('Take NP turn',`startResolver('${f}')`, card ? 'primary':'')}${btn('Change card',`state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div></div>`; }).join('')}
      <div class="card"><div class="row" style="margin-bottom:12px"><div><div style="font-size:18px;font-weight:700">Assisted state log</div><div class="muted">Record what actually changed on the board.</div></div><span class="badge">${state.actionLog.length}</span></div><div class="grid2" style="margin-bottom:12px">${btn('Log completed action','openActionLogger()','primary')}${btn('Save / load state',"state.screen='save_load'; render()")}</div>${state.actionLog.length ? state.actionLog.slice(0,5).map(item=>`<div class="panel" style="margin-top:8px"><div style="font-weight:700">${esc(item.title || `${(item.faction||'').toUpperCase()} ${item.mode}`)}</div><div class="small">${esc(item.body || '')}</div></div>`).join('') : '<div class="muted">No actions logged yet.</div>'}</div>`;
    return;
  }
  if(state.screen === 'mode'){
    const c=currentCard();
    const criticalOnly = state.roundTracker && state.roundTracker.critical === true;
    const modeOptions = criticalOnly ? [['act','Act'],['react','React'],['plan','Plan'],['event','Event']] : [['act','Act'],['react','React'],['plan','Plan']];
    if(!criticalOnly && state.mode === 'event') state.mode = 'act';
    const helperNote = state.mode==='event' ? 'Critical event selected. This will open the step-by-step critical event wizard.' : 'Resolve the selected NP action.';
    app.innerHTML=`<div class="card"><div class="small">Resolving ${factions[state.selectedFaction].label} NP</div><div class="titleblue">${c.name}</div><div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div><div class="small" style="margin-bottom:8px">Resolution mode</div><div class="grid2" style="margin-bottom:14px">${modeOptions.map(([v,l])=>btn(l,`state.mode='${v}'; render()`, state.mode===v ? 'primary':'')).join('')}</div><div class="panel" style="margin-bottom:14px">${helperNote}${criticalOnly ? '<div style="margin-top:8px">EVENT is only available because this round is marked critical.</div>' : '<div style="margin-top:8px">EVENT is hidden because this round is not critical.</div>'}</div>${btn(state.mode==='event' ? 'Open critical EVENT wizard' : `Resolve ${state.mode}`,'startModeResolution()','primary')}</div>`;
    return;
  }
  if(state.screen === 'event_protocol' && state.eventProtocol && state.eventProtocol.fromResolver && state.roundTracker && state.roundTracker.critical === true){
    ensureEventProtocolR7();
    const ep = state.eventProtocol;
    const preset = getEventPreset();
    const cardButtons = ['1940s','1950s'].includes(ep.decade)
      ? Object.entries(EVENT_DECKS[ep.decade] || {}).filter(([,card])=>eventCardIsCritical(card)).map(([key, card])=>`<button class="btn ${ep.cardKey===key?'selected':''}" onclick="chooseEventCardPreset('${key}')"><div style="font-weight:700">${key} • ${esc(card.title)}</div><div class="small">${card.year}</div></button>`).join('')
      : '';
    if(!preset){
      app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div><div style="font-size:22px;font-weight:800;margin-bottom:12px">Choose critical event card</div><div class="panel" style="margin-bottom:14px">Only cards marked critical are shown here. Once you choose one, the wizard walks step by step through each effect like the NP resolver.</div><div class="grid2" style="margin-bottom:14px">${btn('1940s critical cards', "setEventDecade('1940s')", ep.decade==='1940s' ? 'primary' : '')}${btn('1950s critical cards', "setEventDecade('1950s')", ep.decade==='1950s' ? 'primary' : '')}</div><div class="grid2" style="margin-bottom:14px">${cardButtons || '<div class="muted">No critical cards loaded for this deck.</div>'}</div>${btn('Back to mode selection', "state.screen='mode'; render()")}</div>`;
      return;
    }
    const idx = Math.max(0, Math.min(ep.currentStep || 0, preset.steps.length - 1));
    const step = preset.steps[idx];
    const key = String(idx);
    const resolver = getResolverForStep(idx, step);
    const stepChanges = (ep.stepChanges||{})[key] || {population:false,vulnerability:false,organization:false,infrastructure:false,markers:false,resources:false};
    const showDistricts = resolver.targetStrategy !== 'special';
    app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • step ${idx+1} of ${preset.steps.length}</div><div style="font-size:22px;font-weight:800;margin-bottom:8px">${esc(ep.card || `${ep.cardKey} • ${preset.title}`)}</div><div class="small" style="margin-bottom:14px">${preset.year} • Order ${preset.order.map(f=>factions[f].short).join(' → ')}</div><div class="panel" style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Current effect</div><div style="font-size:18px;font-weight:700;margin-bottom:8px">${esc(step.text)}</div>${resolver.prompts.map(p=>`<div class="small" style="margin-top:4px">• ${esc(p)}</div>`).join('')}</div><div class="card" style="padding:14px;margin-bottom:14px"><div class="row" style="margin-bottom:8px"><div style="font-weight:700">Resolver</div><span class="badge">${esc(resolver.label)}</span></div><div class="grid2">${Object.values(EVENT_EFFECT_RESOLVERS).map(r=>btn(r.label, `setEventStepResolver(${idx}, '${r.id}')`, resolver.id===r.id ? 'primary' : '')).join('')}</div>${showDistricts ? `<div class="small" style="margin-top:12px">Affected district(s)</div><div class="grid4" style="margin-top:8px">${DISTRICTS.map(d=>`<button class="btn ${(((ep.stepDistricts||{})[key]||[]).includes(d))?'selected':''}" onclick="toggleEventStepDistrict(${idx}, '${d}')">${d}</button>`).join('')}</div>` : `<div class="panel" style="margin-top:12px">This step does not need normal district picks.</div>`}<div class="grid2" style="margin-top:10px">${btn((ep.stepManual||{})[key] ? 'Manual override on' : 'Use resolver as written', `toggleEventStepManual(${idx})`, (ep.stepManual||{})[key] ? 'primary' : '')}</div><textarea oninput="updateEventStepNote(${idx}, this.value)" style="width:100%;min-height:90px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit;margin-top:10px" placeholder="${esc(resolver.noteHint)}">${esc(((ep.stepNotes||{})[key] || ''))}</textarea></div><div class="grid2">${btn(idx === 0 ? 'Back to card picker' : 'Previous step', 'prevCriticalEventStep()')}${btn(idx === preset.steps.length - 1 ? 'Finish critical event' : 'Next step', 'nextCriticalEventStep()', 'primary')}</div></div>`;
    return;
  }
  __renderBeforeR7();
};
window.loadBoardSetupPreset = loadBoardSetupPreset;
window.nextCriticalEventStep = nextCriticalEventStep;
window.prevCriticalEventStep = prevCriticalEventStep;
window.chooseEventCardPreset = chooseEventCardPreset;
window.openEventProtocol = openEventProtocol;
window.setEventDecade = setEventDecade;
window.startModeResolution = startModeResolution;
window.render = render;

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
  const preset = (state.screen === 'event_protocol' && state.eventProtocol && state.eventProtocol.fromResolver && state.roundTracker && state.roundTracker.critical === true) ? getEventPreset() : null;
  if(preset){
    const step = preset.steps[idx];
    const locked = step && step.resolver;
    if(locked && resolverId !== locked) return;
  }
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
      app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • ${factions[ep.faction || state.selectedFaction || state.playerFaction].label}</div><div style="font-size:22px;font-weight:800;margin-bottom:12px">Choose critical event card</div><div class="panel" style="margin-bottom:14px">Only cards marked critical are shown here. NP Event resolution uses the NP General Principles and NP General Priorities chart for any decisions that are required.</div><div class="grid2" style="margin-bottom:14px">${btn('1940s critical cards', "setEventDecade('1940s')", ep.decade==='1940s' ? 'primary' : '')}${btn('1950s critical cards', "setEventDecade('1950s')", ep.decade==='1950s' ? 'primary' : '')}</div><div class="grid2" style="margin-bottom:14px">${cardButtons || '<div class="muted">No critical cards loaded for this deck.</div>'}</div>${btn('Back to mode selection', "state.screen='mode'; render()")}</div>`;
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
    app.innerHTML = `<div class="card"><div class="small">Critical EVENT wizard • step ${idx+1} of ${preset.steps.length}</div><div style="font-size:22px;font-weight:800;margin-bottom:8px">${esc(ep.card || `${ep.cardKey} • ${preset.title}`)}</div><div class="small" style="margin-bottom:14px">${preset.year} • Order ${preset.order.map(f=>factions[f].short).join(' → ')}</div><div class="panel" style="margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px">Current effect</div><div style="font-size:18px;font-weight:700;margin-bottom:8px">${esc(step.text)}</div>${resolver.prompts.map(p=>`<div class="small" style="margin-top:4px">• ${esc(p)}</div>`).join('')}</div><div class="card" style="padding:14px;margin-bottom:14px"><div class="row" style="margin-bottom:8px"><div style="font-weight:700">Resolver</div><span class="badge">${esc(resolver.label)}</span></div><div class="grid2" style="margin-top:10px">${btn((ep.stepManual||{})[key] ? 'Manual override on' : 'Use resolver as written', `toggleEventStepManual(${idx})`, (ep.stepManual||{})[key] ? 'primary' : '')}${btn('Reset this step priority', `resetEventStepPriority(${idx})`)}</div>${needsPriority ? `<div class="panel" style="margin-top:12px"><div style="font-weight:700">${esc(pr.kind === 'move' ? (pr.phase === 'destination' ? 'Destination district' : 'Origin district') : 'District priority walk')}${summaryBits.length ? ` • ${summaryBits.join(' • ')}` : ''}</div><div class="small" style="margin-top:6px">Column: <b>${esc(priorityColumns[pr.column]?.title || pr.label)}</b></div><div class="small" style="margin-top:6px">${esc(eventPriorityHint(pr))}</div><div class="bullet-priority-label" style="margin-top:10px">Current bullet ${Math.min((pr.bulletIndex||0)+1, bullets.length)} of ${bullets.length}</div><div id="bullet-priority" class="bullet-priority">${esc(currentBullet)}</div><div class="small" style="margin-top:6px">Remaining candidates: ${pool.map(d=>`D${d}`).join(', ') || 'none'}</div><div class="grid4" style="margin-top:10px">${pool.map(d=>`<button class="btn ${selected.includes(d)?'selected':''}" onclick="toggleEventPriorityMatch(${idx}, '${d}')">${d}</button>`).join('')}</div><div class="grid2" style="margin-top:10px">${btn(selected.length ? `Use ${selected.length} selected as matches` : 'No matches on this bullet', `confirmEventPriorityBullet(${idx})`, 'primary')}</div><div class="small" style="margin-top:10px">NP General Principles: move/remove unhoused pieces first; place own pieces first when there is a choice; for movement use Place X for destination and Remove X for origin.</div></div>` : `<div class="panel" style="margin-top:12px">${ep.stepManual[key] ? 'Manual override is on. Pick districts directly and describe the result.' : 'This resolver does not use the NP district priority chart.'}</div><div class="grid4" style="margin-top:10px">${DISTRICTS.map(d=>`<button class="btn ${directDistricts.includes(d)?'selected':''}" onclick="toggleEventStepDistrict(${idx}, '${d}')">${d}</button>`).join('')}</div>`}<textarea oninput="updateEventStepNote(${idx}, this.value)" style="width:100%;min-height:90px;border:1px solid #cbd5e1;border-radius:18px;padding:12px;font:inherit;margin-top:10px" placeholder="${esc(resolver.noteHint)}">${esc(((ep.stepNotes||{})[key] || ''))}</textarea></div><div class="grid2">${btn(idx === 0 ? 'Back to card picker' : 'Previous step', 'prevCriticalEventStep()')}${btn(idx === preset.steps.length - 1 ? 'Finish critical event' : 'Next step', 'nextCriticalEventStep()', 'primary')}</div></div>`;
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

// --- Solo UX pass: friendly mobile flow informed by NP Aid + setup sheets ---
(function installSoloUxPass(){
  const SOLO_CSS_ID = 'solo-ux-pass-styles';
  const SOLO_BUILD_LABEL = 'solo build v14';

  function injectSoloCss(){
    if(document.getElementById(SOLO_CSS_ID)) return;
    const style = document.createElement('style');
    style.id = SOLO_CSS_ID;
    style.textContent = `
      :root{
        --solo-ink:#111827;
        --solo-muted:#5b6472;
        --solo-panel:#eef2f7;
        --solo-line:#d9e2ec;
        --solo-blue:#14532d;
        --solo-accent:#2563eb;
      }
      body{background:#f5f7fb;color:var(--solo-ink);overflow-x:hidden}
      .top{background:rgba(245,247,251,.96)}
      .app{width:100%;max-width:480px;overflow-x:hidden}
      .wrap{padding:14px}
      .card{border-radius:18px;box-shadow:0 2px 12px rgba(15,23,42,.07);border:1px solid rgba(217,226,236,.75);padding:16px}
      .panel{border-radius:14px;background:#edf2f7;border:1px solid rgba(217,226,236,.85)}
      .btn{min-height:56px;border-radius:14px;font-weight:750;line-height:1.18;display:block}
      .btn.primary{background:#12213f;border-color:#12213f}
      .btn.secondary{background:#e8eefc;border-color:#cad7fb}
      .btn.ghost{color:#334155}
      .solo-hero{background:linear-gradient(180deg,#ffffff 0%,#e9f1ff 100%);border-color:#cbdcf8;overflow:hidden}
      .solo-title{font-size:28px;font-weight:900;letter-spacing:0;line-height:1.02;margin-bottom:8px}
      .solo-title,.solo-sub,.solo-action-title,.btn{overflow-wrap:anywhere}
      .solo-sub{font-size:15px;color:#475569;line-height:1.35}
      .solo-step{display:flex;gap:12px;align-items:flex-start;min-width:0}
      .solo-step > div:last-child,.compact-card-row > div,.row > div{min-width:0}
      .solo-num{width:32px;height:32px;border-radius:50%;background:#12213f;color:white;display:flex;align-items:center;justify-content:center;font-weight:900;flex:0 0 auto}
      .solo-num.done{background:#047857}
      .solo-num.wait{background:#94a3b8}
      .solo-stack{display:grid;gap:10px}
      .solo-action{border:1px solid #cbd5e1;background:#fff;border-radius:16px;padding:14px}
      .solo-action.done{background:#f4f7f6;border-color:#b7ddca;opacity:.82}
      .solo-action.done .solo-action-title{color:#647067}
      .solo-action-title{font-size:18px;font-weight:850;margin-bottom:4px}
      .solo-kicker{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#64748b;font-weight:850}
      .solo-pill-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
      .solo-chip{border-radius:999px;background:#e2e8f0;padding:6px 10px;font-size:12px;font-weight:800}
      .solo-chip.good{background:#d1fae5;color:#065f46}
      .solo-chip.warn{background:#fef3c7;color:#92400e}
      .solo-chip.done{background:#bbf7d0;color:#166534}
      .solo-chip.claimed{background:#dbeafe;color:#1e40af}
      .solo-chip.blocked{background:#e5e7eb;color:#64748b}
      .turn-order{display:grid;gap:8px;margin-top:12px}
      .turn-order-step{display:flex;gap:10px;align-items:center;border:1px solid #dbe4ee;background:#fff;border-radius:14px;padding:10px}
      .turn-order-step.done{background:#f1f5f9;color:#64748b}
      .turn-order-step.next{border-color:#12213f;box-shadow:0 0 0 2px rgba(18,33,63,.08)}
      .turn-index{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#e2e8f0;font-weight:900;flex:0 0 auto}
      .turn-order-step.next .turn-index{background:#12213f;color:#fff}
      .solo-rule{border-left:4px solid #2563eb;background:#eff6ff;border-radius:14px;padding:12px 12px 12px 14px}
      .solo-rule b{display:block;margin-bottom:4px}
      .solo-sticky{position:sticky;bottom:10px;z-index:8;background:rgba(245,247,251,.92);backdrop-filter:blur(8px);border:1px solid #dbe4ee;border-radius:18px;padding:10px;box-shadow:0 6px 18px rgba(15,23,42,.12)}
      .aid-column{border:1px solid #dbe4ee;border-radius:14px;padding:12px;background:#fff}
      .aid-column h3{font-size:15px;margin-bottom:8px}
      .aid-list{margin:0;padding-left:18px;color:#334155;font-size:14px;line-height:1.35}
      .compact-card-row{display:flex;gap:10px;align-items:flex-start}
      .mode-grid{display:grid;grid-template-columns:1fr;gap:10px}
      .action-claim-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
      .action-claim{border:1px solid #cbd5e1;border-radius:14px;padding:12px;background:#fff}
      .action-claim.claimed{background:#eff6ff;border-color:#bfdbfe}
      .action-claim.mine{background:#ecfdf5;border-color:#bbf7d0}
      .action-claim.blocked{background:#f1f5f9;color:#64748b}
      .action-claim.selected{box-shadow:0 0 0 2px #12213f;border-color:#12213f}
      @media (min-width:390px){.mode-grid{grid-template-columns:1fr 1fr}}
      @media (max-width:430px){
        .wrap{padding:10px}
        .card{padding:14px;margin-bottom:12px}
        .solo-title{font-size:24px}
        .solo-sub{font-size:14px}
        .solo-pill-row{display:block}
        .solo-chip{display:inline-block;margin:0 4px 6px 0}
        .grid2{grid-template-columns:1fr}
        .action-claim-grid{grid-template-columns:1fr}
        .btn{font-size:15px;padding:12px}
      }
    `;
    document.head.appendChild(style);
  }

  const POSITION_ACTION_CHOICES = {
    public_comptroller: ['act','event','event'],
    public_builder: ['react','act','plan'],
    public_paternal: ['react','event','act'],
    public_committed: ['react','act','plan'],
    public_shepherd: ['react','act','plan'],
    public_workhorse: ['act','event','plan'],
    public_provider: ['act','react','event'],
    public_responsible: ['act','react','event'],
    community_activist: ['act','event','react'],
    community_accountable: ['react','event','act'],
    community_leader: ['react','act','event'],
    community_dedicated: ['act','react','event'],
    community_organizer: ['act','react','plan'],
    community_determined: ['act','event','plan'],
    community_collaborator: ['react','event','act'],
    community_independent: ['react','event','act'],
    private_lender: ['act','react','event'],
    private_employer: ['act','event','react'],
    private_buyer: ['act','react','plan'],
    private_investor: ['react','act','plan'],
    private_networked: ['react','act','event'],
    private_loss_leader: ['react','act','plan'],
    private_volunteer: ['act','react','event'],
    private_broker: ['act','react','plan'],
  };
  const ACTION_LABELS = { act: 'ACT', event: 'EVENT', react: 'REACT', plan: 'PLAN' };

  function safeFactionLabel(f){ return factions[f] ? factions[f].label : 'Not chosen'; }
  function selectedCardFor(f){ return f && state.npCards ? cards[f].find(c => c.id === state.npCards[f]) : null; }
  function ensureTurnTracker(){
    state.roundTracker = state.roundTracker || { round: 1, max: 8, critical: null, checked: false, pendingScreen: null };
    state.roundTracker.turnsTaken = state.roundTracker.turnsTaken || {};
    state.roundTracker.actionClaims = state.roundTracker.actionClaims || {};
    return state.roundTracker.turnsTaken;
  }
  function preferredRoundDeck(){
    ensureTurnTracker();
    return state.roundTracker.eventDeck || (state.boardState && state.boardState.deck) || '1940s';
  }
  function selectedRoundEventPreset(){
    ensureTurnTracker();
    const deck = preferredRoundDeck();
    const key = state.roundTracker.eventKey;
    return key && EVENT_DECKS[deck] ? EVENT_DECKS[deck][key] : null;
  }
  function roundFactionOrder(){
    ensureTurnTracker();
    const preset = selectedRoundEventPreset();
    const order = Array.isArray(state.roundTracker.eventOrder) ? state.roundTracker.eventOrder : (preset ? preset.order : []);
    return order.filter(f => factions[f]);
  }
  function npTurnOrder(){
    const ordered = roundFactionOrder().filter(f => npFactions().includes(f));
    return ordered.length ? ordered : npFactions();
  }
  function roundEventLabel(){
    const preset = selectedRoundEventPreset();
    if(!preset) return 'No event card selected';
    return `${state.roundTracker.eventKey} • ${preset.title}`;
  }
  function roundEventStatusLabel(){
    const preset = selectedRoundEventPreset();
    if(!preset) return 'Choose event card';
    return `${preset.year} • ${state.roundTracker.critical ? 'Critical' : 'Normal'} • ${roundFactionOrder().map(f => factions[f].short).join(' -> ')}`;
  }
  function chooseRoundEventDeck(deck){
    ensureTurnTracker();
    state.roundTracker.eventDeck = deck;
    state.roundTracker.eventKey = '';
    state.roundTracker.eventTitle = '';
    state.roundTracker.eventOrder = [];
    state.roundTracker.critical = null;
    state.roundTracker.checked = false;
    state.screen = 'round_event';
    render();
  }
  function chooseRoundEventCard(key){
    ensureTurnTracker();
    const deck = preferredRoundDeck();
    const preset = EVENT_DECKS[deck] && EVENT_DECKS[deck][key];
    if(!preset) return;
    state.roundTracker.eventDeck = deck;
    state.roundTracker.eventKey = key;
    state.roundTracker.eventTitle = preset.title;
    state.roundTracker.eventYear = preset.year;
    state.roundTracker.eventOrder = [...preset.order];
    state.roundTracker.critical = eventCardIsCritical(preset);
    state.roundTracker.checked = true;
    state.roundTracker.turnsTaken = {};
    state.roundTracker.actionClaims = {};
    if(state.eventProtocol){
      state.eventProtocol.decade = deck;
      state.eventProtocol.cardKey = key;
      state.eventProtocol.card = `${key} • ${preset.title}`;
      state.eventProtocol.currentStep = 0;
    }
    state.screen = 'dashboard';
    render();
  }
  function ensureActionClaims(){
    ensureTurnTracker();
    return state.roundTracker.actionClaims;
  }
  function cardActionChoices(f){
    const card = selectedCardFor(f);
    if(!card) return ['act','event','react','plan'];
    return POSITION_ACTION_CHOICES[card.id] || ['act','event','react','plan'];
  }
  function actionClaimedBy(mode){
    return ensureActionClaims()[mode] || null;
  }
  function actionRoundBlockedReason(mode){
    if(mode === 'event' && state.roundTracker && state.roundTracker.critical === false) return 'Not critical';
    return '';
  }
  function actionAvailableFor(mode, f){
    if(actionRoundBlockedReason(mode)) return false;
    const claimedBy = actionClaimedBy(mode);
    return !claimedBy || claimedBy === f;
  }
  function claimAction(mode, f){
    if(!mode || !f || !factions[f]) return;
    const claims = ensureActionClaims();
    const existing = claims[mode];
    if(existing && existing !== f) return;
    claims[mode] = f;
    render();
  }
  function clearActionClaim(mode){
    if(!mode) return;
    const claims = ensureActionClaims();
    delete claims[mode];
    render();
  }
  function togglePlayerActionClaim(mode){
    if(!state.playerFaction) return;
    if(actionRoundBlockedReason(mode)) return;
    const claimedBy = actionClaimedBy(mode);
    if(claimedBy === state.playerFaction) clearActionClaim(mode);
    else if(!claimedBy) claimAction(mode, state.playerFaction);
  }
  function firstAvailableModeForFaction(f){
    const choices = cardActionChoices(f);
    const uniqueChoices = [...new Set(choices)];
    return uniqueChoices.find(mode => actionAvailableFor(mode, f)) || uniqueChoices[0] || 'act';
  }
  function chooseResolverMode(mode){
    if(!actionAvailableFor(mode, state.selectedFaction)) return;
    state.mode = mode;
    render();
  }
  function claimSelectedAndResolve(){
    if(!state.mode || !state.selectedFaction) return;
    if(!actionAvailableFor(state.mode, state.selectedFaction)){
      render();
      return;
    }
    const claims = ensureActionClaims();
    claims[state.mode] = state.selectedFaction;
    startModeResolution();
  }
  function actionClaimSummaryHtml(){
    const claims = ensureActionClaims();
    const modes = ['act','event','react','plan'];
    return `<div class="action-claim-grid">${modes.map(mode => {
      const claimedBy = claims[mode];
      const mine = claimedBy && claimedBy === state.playerFaction;
      const blocked = actionRoundBlockedReason(mode);
      const cls = blocked ? 'blocked' : (claimedBy ? (mine ? 'mine' : 'claimed') : '');
      const detail = blocked || (claimedBy ? `Claimed by ${safeFactionLabel(claimedBy)}` : 'Available');
      const click = state.playerFaction && !blocked ? `togglePlayerActionClaim('${mode}')` : 'void(0)';
      return `<button class="action-claim ${cls}" onclick="${click}"><div style="font-weight:900">${ACTION_LABELS[mode]}</div><div class="small">${esc(detail)}</div></button>`;
    }).join('')}</div>`;
  }
  function turnOrderHtml(){
    const order = roundFactionOrder();
    if(!order.length) return '<div class="muted">Choose this round\'s event card to bake in faction order.</div>';
    const nextNp = npTurnOrder().find(f => !factionTurnDone(f));
    return `<div class="turn-order">${order.map((f, idx) => {
      const isPlayer = f === state.playerFaction;
      const done = !isPlayer && factionTurnDone(f);
      const next = f === nextNp;
      const note = isPlayer ? 'You' : (done ? 'Done this round' : (next ? 'Next NP turn' : 'Waiting'));
      return `<div class="turn-order-step ${done ? 'done' : ''} ${next ? 'next' : ''}"><div class="turn-index">${idx + 1}</div><div style="min-width:0"><div style="font-weight:900">${safeFactionLabel(f)}</div><div class="small">${esc(note)}</div></div></div>`;
    }).join('')}</div>`;
  }
  function factionTurnDone(f){
    return !!ensureTurnTracker()[f];
  }
  function setFactionTurnDone(f, value=true){
    if(!f || !factions[f]) return;
    const turns = ensureTurnTracker();
    if(value) turns[f] = true;
    else delete turns[f];
    render();
  }
  function returnDashboardMarkingTurn(){
    if(state.selectedFaction && npFactions().includes(state.selectedFaction)) {
      if(state.mode) claimAction(state.mode, state.selectedFaction);
      setFactionTurnDone(state.selectedFaction, true);
      return;
    }
    state.screen = 'dashboard';
    render();
  }
  function shouldOfferTurnDone(){
    if(!state.selectedFaction || !npFactions().includes(state.selectedFaction) || !state.result) return false;
    const title = (state.result.title || '').toLowerCase();
    if(title.includes('event not available')) return false;
    if(title.includes('state saved') || title.includes('load failed') || title.includes('import failed')) return false;
    if(title.includes('round ') && title.includes('started')) return false;
    return ['resolved','discard'].includes(state.result.status);
  }
  function setupProgress(){
    const board = !!state.boardState;
    const player = !!state.playerFaction;
    const npCardsReady = player && npFactions().every(f => !!state.npCards[f]);
    return { board, player, npCardsReady };
  }
  function stepIcon(done){ return `<div class="solo-num ${done ? 'done':'wait'}">${done ? '✓':'-'}</div>`; }
  function setupChecklistHtml(){
    const p = setupProgress();
    return `<div class="solo-stack">
      <div class="solo-step">${stepIcon(p.board)}<div><div style="font-weight:850">Load a setup sheet</div><div class="solo-sub">Use the 1940 or 1950 board setup PDF as the starting board state.</div></div></div>
      <div class="solo-step">${stepIcon(p.player)}<div><div style="font-weight:850">Choose your faction</div><div class="solo-sub">The other two factions become NP factions.</div></div></div>
      <div class="solo-step">${stepIcon(p.npCardsReady)}<div><div style="font-weight:850">Choose NP Position cards</div><div class="solo-sub">Each NP keeps its card until the resolver tells you to replace it.</div></div></div>
    </div>`;
  }
  function nextSoloAction(){
    if(!state.boardState) return { label:'Load setup', onclick:"state.screen='setup_decade'; render()", primary:true, note:'Start from the 1940 or 1950 setup sheet.' };
    if(!state.playerFaction) return { label:'Choose player faction', onclick:"state.screen='setup_player'; render()", primary:true, note:'Pick the faction you will play.' };
    const missing = npFactions().find(f => !state.npCards[f]);
    if(missing) return { label:`Choose ${factions[missing].label} card`, onclick:`state.selectedFaction='${missing}'; state.screen='setup_np_card'; render()`, primary:true, note:'Finish the NP card setup.' };
    if(!selectedRoundEventPreset()) return { label:'Choose event card', onclick:"state.screen='round_event'; render()", primary:true, note:'Bake in this round\'s faction order from the event card.' };
    if(state.roundTracker && state.roundTracker.critical === null) return { label:'Start round: event check', onclick:"state.screen='round_gate'; render()", primary:true, note:'At the start of each round, mark whether the event is critical.' };
    const nextNp = npTurnOrder().find(f => !factionTurnDone(f));
    if(!nextNp) return { label:'End round', onclick:'advanceRound()', primary:true, note:'Both NP factions have taken their turn this round.' };
    return { label:`Take ${factions[nextNp].label} NP turn`, onclick:`startResolver('${nextNp}')`, primary:true, note:'Resolve the first unclaimed action from the Position card.' };
  }
  function startSoloWizard(){
    state.screen = state.boardState ? 'setup_player' : 'setup_decade';
    render();
  }
  function chooseSoloDecade(key){
    loadBoardSetupPreset(key);
    state.screen = state.playerFaction ? 'dashboard' : 'setup_player';
    render();
  }
  function skipSoloDecade(){
    state.screen = 'setup_player';
    render();
  }
  function openNpAid(){
    state.previousScreen = state.screen || 'dashboard';
    state.screen = 'np_aid';
    render();
  }
  function closeNpAid(){
    state.screen = state.previousScreen || 'dashboard';
    render();
  }
  function priorityColumnHtml([key, col]){
    return `<div class="aid-column"><h3>${esc(col.title)}</h3><ol class="aid-list">${col.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ol></div>`;
  }
  function renderHome(app){
    const next = nextSoloAction();
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Cross Bronx Expressway</div>
        <div class="solo-title">Solo play companion</div>
        <div class="solo-sub">A phone-first helper for NP setup, Position-card turns, Event decisions, Census cleanup, and the NP Aid priority chart.</div>
        <div class="solo-pill-row">
          <span class="solo-chip ${state.boardState ? 'good':'warn'}">${state.boardState ? state.boardState.label : 'No setup loaded'}</span>
          <span class="solo-chip">${state.playerFaction ? `You: ${safeFactionLabel(state.playerFaction)}` : 'Faction not chosen'}</span>
          <span class="solo-chip">${SOLO_BUILD_LABEL}</span>
        </div>
      </div>
      <div class="card">${setupChecklistHtml()}</div>
      <div class="card">
        <div class="solo-kicker">Next</div>
        <div class="solo-action-title">${esc(next.note)}</div>
        <div class="grid" style="margin-top:12px">
          ${btn(next.label, next.onclick, next.primary ? 'primary' : '')}
          ${btn('Open NP Aid', 'openNpAid()', 'secondary')}
          ${btn('Load saved game', 'loadStateLocal()')}
        </div>
      </div>`;
  }
  function renderDecadeSetup(app){
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Step 1</div>
        <div class="solo-title">Choose setup sheet</div>
        <div class="solo-sub">The board setup PDFs list starting resources, losses, tax rate, corrections, and district contents.</div>
      </div>
      <div class="grid">
        <button class="btn primary" onclick="chooseSoloDecade('1940')"><div style="font-size:18px">Load 1940 setup</div><div class="small">PUB 7 • COM 5 • PRI 9 • Corrections 6</div></button>
        <button class="btn primary" onclick="chooseSoloDecade('1950')"><div style="font-size:18px">Load 1950 setup</div><div class="small">PUB 5 • COM 3 • PRI 4 • Corrections 8</div></button>
        ${btn('Skip setup sheet for now', 'skipSoloDecade()')}
      </div>`;
  }
  function renderPlayerSetup(app){
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Step 2</div>
        <div class="solo-title">Who are you playing?</div>
        <div class="solo-sub">Tap your faction. The other two become automated NP factions.</div>
      </div>
      <div class="grid">
        ${Object.entries(factions).map(([k,v]) => `<button class="btn ${state.playerFaction===k?'primary':''}" onclick="choosePlayerFaction('${k}')"><div class="compact-card-row"><span>${pill(v.short,k)}</span><div><div style="font-size:18px;font-weight:850">${v.label}</div><div class="small">Play as ${v.label}</div></div></div></button>`).join('')}
      </div>`;
  }
  function renderCardSetup(app){
    const f = state.selectedFaction;
    const existing = selectedCardFor(f);
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Step 3</div>
        <div class="solo-title">${safeFactionLabel(f)} Position card</div>
        <div class="solo-sub">${existing ? `${existing.name} is selected. Tap another card to replace it.` : 'Choose the NP Position card currently drawn for this faction.'}</div>
      </div>
      <div class="grid">
        ${cards[f].map(card => {
          const isSelected = state.npCards[f] === card.id;
          const rows = card.rows.map(row => `<div class="small"><b>${row.index}.</b> ${esc(row.condition)} -> <b>${esc(row.action)}</b></div>`).join('');
          return `<button class="btn ${isSelected ? 'primary':''}" onclick="chooseNpcCard('${card.id}')"><div class="row"><div><div style="font-size:18px;font-weight:900">${esc(card.name)}</div><div class="small">${esc(card.objective)} • Goal ${card.goal}</div></div><span class="badge">${isSelected ? 'Selected':'Choose'}</span></div><div style="margin-top:10px;display:grid;gap:4px">${rows}</div></button>`;
        }).join('')}
      </div>`;
  }
  function renderRoundEventPicker(app){
    ensureTurnTracker();
    const deck = preferredRoundDeck();
    const cardsForDeck = EVENT_DECKS[deck] || {};
    const selectedKey = state.roundTracker.eventKey || '';
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Round ${state.roundTracker.round}</div>
        <div class="solo-title">Choose event card</div>
        <div class="solo-sub">This locks in the faction order printed on the event card for the round.</div>
      </div>
      <div class="card">
        <div class="solo-action-title">Event deck</div>
        <div class="grid2" style="margin-top:12px">
          ${btn('1940s', "chooseRoundEventDeck('1940s')", deck === '1940s' ? 'primary' : '')}
          ${btn('1950s', "chooseRoundEventDeck('1950s')", deck === '1950s' ? 'primary' : '')}
        </div>
      </div>
      <div class="grid">
        ${Object.entries(cardsForDeck).map(([key, card]) => {
          const critical = eventCardIsCritical(card);
          return `<button class="btn ${selectedKey === key ? 'primary' : ''}" onclick="chooseRoundEventCard('${key}')"><div style="font-size:18px;font-weight:900">${key} • ${esc(card.title)}</div><div class="small" style="${selectedKey === key ? 'color:#dbeafe' : ''}">${card.year} • ${critical ? 'Critical' : 'Normal'} • ${card.order.map(f => factions[f].short).join(' -> ')}</div></button>`;
        }).join('')}
      </div>
      <div class="solo-sticky">${btn('Back to dashboard', "state.screen='dashboard'; render()", selectedKey ? 'primary' : '')}</div>`;
  }
  function renderDashboard(app){
    if(!state.playerFaction){
      renderHome(app);
      return;
    }
    const next = nextSoloAction();
    const criticalLabel = state.roundTracker.critical === null ? 'Event unchecked' : (state.roundTracker.critical ? 'Critical event' : 'Normal event');
    const doneCount = npFactions().filter(factionTurnDone).length;
    const npCards = npFactions().map(f => {
      const card = selectedCardFor(f);
      const planned = state.npPlannedActions && state.npPlannedActions[f] ? ` • Next ${state.npPlannedActions[f].toUpperCase()}` : '';
      const done = factionTurnDone(f);
      return `<div class="solo-action ${done ? 'done':''}">
        <div class="row" style="margin-bottom:10px"><div><div class="solo-kicker">${factions[f].label} NP</div><div class="solo-action-title">${card ? esc(card.name) : 'No card selected'}</div><div class="small">${card ? `${esc(card.objective)} • Goal ${card.goal}${planned}` : 'Choose a Position card before this NP turn.'}</div></div><div style="display:grid;gap:6px;justify-items:end">${pill(factions[f].short,f)}${done ? '<span class="solo-chip done">Done this round</span>' : ''}</div></div>
        <div class="grid2">${btn(done ? 'Take again' : 'Take turn', `startResolver('${f}')`, card && !done ? 'primary':'')}${btn(done ? 'Undo done' : 'Mark done', `setFactionTurnDone('${f}', ${done ? 'false' : 'true'})`, done ? '' : 'secondary')}${btn('Card', `state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div>
      </div>`;
    }).join('');
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="row" style="align-items:flex-start">
          <div><div class="solo-kicker">Solo dashboard</div><div class="solo-title">Round ${state.roundTracker.round}</div><div class="solo-sub">${criticalLabel} • You are playing ${safeFactionLabel(state.playerFaction)}</div></div>
          ${pill(factions[state.playerFaction].short, state.playerFaction)}
        </div>
      </div>
      <div class="card">
        <div class="solo-kicker">Best next tap</div>
        <div class="solo-action-title">${esc(next.note)}</div>
        <div class="small" style="margin-top:6px">${doneCount} of ${npFactions().length} NP turns done this round.</div>
        <div class="grid2" style="margin-top:12px">${btn(next.label, next.onclick, 'primary')}${btn('NP Aid', 'openNpAid()', 'secondary')}</div>
      </div>
      <div class="card">
        <div class="row" style="margin-bottom:10px"><div><div class="solo-kicker">Event card</div><div class="solo-action-title">${esc(roundEventLabel())}</div><div class="small">${esc(roundEventStatusLabel())}</div></div></div>
        ${turnOrderHtml()}
        <div class="grid2" style="margin-top:12px">${btn(selectedRoundEventPreset() ? 'Change event card' : 'Choose event card', "state.screen='round_event'; render()", selectedRoundEventPreset() ? '' : 'primary')}${btn(state.roundTracker.critical === null ? 'Critical check' : 'Edit critical check', "state.screen='round_gate'; render()", 'secondary')}</div>
      </div>
      <div class="card">
        <div class="row" style="margin-bottom:10px"><div><div class="solo-kicker">Action boxes</div><div class="solo-action-title">One claim per round</div><div class="small">Tap your player action after you take it. NP turns skip claimed boxes.</div></div></div>
        ${actionClaimSummaryHtml()}
      </div>
      <div class="card">${boardStateSummaryHtml()}</div>
      <div class="solo-stack">${npCards}</div>
      <div class="card">
        <div class="row" style="margin-bottom:12px"><div><div class="solo-action-title">Action log</div><div class="small">Record the board change after resolving an NP action.</div></div><span class="badge">${state.actionLog.length}</span></div>
        <div class="grid2" style="margin-bottom:12px">${btn('Log action','openActionLogger()','primary')}${btn('Save / load',"state.screen='save_load'; render()")}</div>
        ${state.actionLog.length ? state.actionLog.slice(0,4).map(item => `<div class="panel" style="margin-top:8px"><div style="font-weight:800">${esc(item.title || `${(item.faction||'').toUpperCase()} ${item.mode}`)}</div><div class="small">${esc(item.body || '')}</div></div>`).join('') : '<div class="muted">No actions logged yet.</div>'}
      </div>
      <div class="solo-sticky"><div class="grid2">${btn(state.roundTracker.round === state.roundTracker.max ? 'End round 8' : 'End round', 'advanceRound()')}${btn('Save', 'saveStateLocal()', 'secondary')}</div></div>`;
  }
  function renderMode(app){
    const c = selectedCardFor(state.selectedFaction);
    state.mode = actionAvailableFor(state.mode, state.selectedFaction) ? state.mode : firstAvailableModeForFaction(state.selectedFaction);
    const choiceNotes = {
      act: 'Use the ACT box on the Position card.',
      event: state.roundTracker.critical === true ? 'Resolve the selected event card.' : 'Unavailable because this event is not critical.',
      react: 'Skip HOUSE, BUILD, and DEVELOP during REACT.',
      plan: 'Refresh an Organization if possible, then record the next action.'
    };
    const choices = cardActionChoices(state.selectedFaction);
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">${safeFactionLabel(state.selectedFaction)} NP turn</div>
        <div class="solo-title">${esc(c ? c.name : 'Choose a card')}</div>
        <div class="solo-sub">${c ? `${esc(c.objective)} • Goal ${c.goal}` : 'This NP needs a Position card before it can act.'}</div>
      </div>
      <div class="mode-grid">
        ${choices.map((key, idx) => {
          const claimedBy = actionClaimedBy(key);
          const blocked = actionRoundBlockedReason(key);
          const available = actionAvailableFor(key, state.selectedFaction);
          const selected = state.mode === key && available;
          const detail = blocked || (claimedBy && claimedBy !== state.selectedFaction ? `Claimed by ${safeFactionLabel(claimedBy)}` : choiceNotes[key]);
          const cls = selected ? 'primary' : (!available ? 'ghost' : '');
          return `<button class="btn ${cls}" onclick="${available ? `chooseResolverMode('${key}')` : 'void(0)'}"><div class="row" style="gap:8px"><div><div style="font-size:18px">Choice ${idx + 1}: ${ACTION_LABELS[key]}</div><div class="small" style="${selected ? 'color:#dbeafe' : ''}">${esc(detail)}</div></div>${selected ? '<span class="badge">Selected</span>' : ''}</div></button>`;
        }).join('')}
      </div>
      <div class="card">
        <div class="solo-rule"><b>NP Aid reminder</b>Only perform legal actions. If choices remain, use the NP General Priorities chart and the acting faction's principles.</div>
        <div class="grid2" style="margin-top:12px">${btn(`Claim ${ACTION_LABELS[state.mode] || 'ACTION'} and resolve`,'claimSelectedAndResolve()','primary')}${btn('NP Aid','openNpAid()','secondary')}</div>
      </div>`;
  }
  function renderNpAid(app){
    const topPrinciples = NP_AID_GENERAL_PRINCIPLES.slice(0, 4).map(x => `<li>${esc(x)}</li>`).join('');
    const remainingPrinciples = NP_AID_GENERAL_PRINCIPLES.slice(4).map(x => `<li>${esc(x)}</li>`).join('');
    app.innerHTML = `
      <div class="card solo-hero">
        <div class="solo-kicker">Reference</div>
        <div class="solo-title">NP Aid</div>
        <div class="solo-sub">Built from the Non-Player Aid PDF: golden rule, general principles, and priority columns.</div>
      </div>
      <div class="card">
        <div class="solo-rule"><b>Golden rule</b>NP factions follow normal rules and only perform legal actions. When the rules or priorities run out, choose the result that makes the most sense for the South Bronx.</div>
      </div>
      <div class="card">
        <div class="solo-action-title">General principles</div>
        <ol class="aid-list" style="margin-top:10px">${topPrinciples}${remainingPrinciples}</ol>
      </div>
      <div class="card">
        <div class="solo-action-title">General priority columns</div>
        <div class="solo-sub" style="margin-bottom:12px">For movement, use Place X for destination and Remove X for origin.</div>
        <div class="solo-stack">${Object.entries(priorityColumns).map(priorityColumnHtml).join('')}</div>
      </div>
      <div class="solo-sticky">${btn('Back', 'closeNpAid()', 'primary')}</div>`;
  }

  injectSoloCss();

  const __oldBackSoloUx = back;
  back = function(){
    if(state.screen === 'np_aid'){ closeNpAid(); return; }
    if(state.screen === 'setup_decade'){ state.screen = 'home'; render(); return; }
    if(state.screen === 'round_event'){ state.screen = 'dashboard'; render(); return; }
    __oldBackSoloUx();
  };

  const __oldResetAllSoloUx = resetAll;
  resetAll = function(){
    __oldResetAllSoloUx();
    state.previousScreen = null;
    ensureTurnTracker();
    state.roundTracker.turnsTaken = {};
    state.roundTracker.actionClaims = {};
    state.roundTracker.eventKey = '';
    state.roundTracker.eventTitle = '';
    state.roundTracker.eventOrder = [];
    state.screen = 'home';
    render();
  };

  const __oldAdvanceRoundSoloUx = advanceRound;
  advanceRound = function(){
    __oldAdvanceRoundSoloUx();
    ensureTurnTracker();
    state.roundTracker.turnsTaken = {};
    state.roundTracker.actionClaims = {};
    state.roundTracker.eventKey = '';
    state.roundTracker.eventTitle = '';
    state.roundTracker.eventOrder = [];
  };

  const __oldLoadBoardSetupPresetSoloUx = loadBoardSetupPreset;
  loadBoardSetupPreset = function(key){
    __oldLoadBoardSetupPresetSoloUx(key);
    ensureTurnTracker();
    state.roundTracker.turnsTaken = {};
    state.roundTracker.actionClaims = {};
    state.roundTracker.eventDeck = state.boardState && state.boardState.deck ? state.boardState.deck : preferredRoundDeck();
    state.roundTracker.eventKey = '';
    state.roundTracker.eventTitle = '';
    state.roundTracker.eventOrder = [];
  };

  const __oldStartResolverSoloUx = startResolver;
  startResolver = function(f){
    state.selectedFaction = f;
    resetResolverState();
    state.resolverCandidates = [];
    state.resolverPool = [...DISTRICTS];
    if(state.roundTracker && !selectedRoundEventPreset()){
      state.roundTracker.pendingScreen = 'mode';
      state.screen = 'round_event';
      render();
      return;
    }
    state.mode = firstAvailableModeForFaction(f);
    if(state.roundTracker && state.roundTracker.critical === null){
      state.roundTracker.pendingScreen = 'mode';
      state.screen = 'round_gate';
      render();
      return;
    }
    state.screen = 'mode';
    render();
  };

  beginSoloSetup = function(){ startSoloWizard(); };

  const __oldRenderSoloUx = render;
  render = function(){
    injectSoloCss();
    const app = document.getElementById('app');
    if(!app) return;
    if(state.screen === 'home'){ renderHome(app); return; }
    if(state.screen === 'setup_decade'){ renderDecadeSetup(app); return; }
    if(state.screen === 'setup_player'){ renderPlayerSetup(app); return; }
    if(state.screen === 'setup_np_card'){ renderCardSetup(app); return; }
    if(state.screen === 'round_event'){ renderRoundEventPicker(app); return; }
    if(state.screen === 'dashboard'){ renderDashboard(app); return; }
    if(state.screen === 'mode'){ renderMode(app); return; }
    if(state.screen === 'np_aid'){ renderNpAid(app); return; }
    if(state.screen === 'result' && state.result && shouldOfferTurnDone()){
      const r = state.result;
      const resultClass = r.status === 'resolved' ? 'result-resolved' : r.status === 'continue' ? 'result-continue' : 'result-discard';
      const iconClass = r.status === 'discard' ? 'iconbox warn' : 'iconbox ok';
      const extra = r.status === 'discard'
        ? btn('Draw replacement card', 'handleDiscardReplacement()')
        : r.status === 'continue'
          ? btn('Resolve another district', 'continueSameAction()') + btn('Finish this action', 'finishThisAction()')
          : btn('Resolve this NP again', `startResolver('${state.selectedFaction}')`);
      app.innerHTML = `<div class="card ${resultClass}"><div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px"><div class="${iconClass}">${r.status === 'discard' ? '!' : '✓'}</div><div><div style="font-size:22px;font-weight:800">${esc(r.title)}</div><div class="muted" style="margin-top:4px">${esc(r.body)}</div></div></div><div class="grid">${btn('Return and mark done', 'returnDashboardMarkingTurn()', 'primary')}${btn('Return without marking', "state.screen='dashboard'; render()")}${extra}</div></div><div class="card"><div style="font-weight:700;margin-bottom:8px">Why it did that</div>${(r.trace && r.trace.length ? r.trace : ['No rules trace was captured for this result.']).map(line => `<div class="trace" style="margin-top:8px">${esc(line)}</div>`).join('')}</div>`;
      return;
    }
    __oldRenderSoloUx();
  };

  window.render = render;
  window.back = back;
  window.resetAll = resetAll;
  window.advanceRound = advanceRound;
  window.loadBoardSetupPreset = loadBoardSetupPreset;
  window.startResolver = startResolver;
  window.beginSoloSetup = beginSoloSetup;
  window.startSoloWizard = startSoloWizard;
  window.chooseSoloDecade = chooseSoloDecade;
  window.skipSoloDecade = skipSoloDecade;
  window.openNpAid = openNpAid;
  window.closeNpAid = closeNpAid;
  window.chooseRoundEventDeck = chooseRoundEventDeck;
  window.chooseRoundEventCard = chooseRoundEventCard;
  window.chooseResolverMode = chooseResolverMode;
  window.togglePlayerActionClaim = togglePlayerActionClaim;
  window.claimSelectedAndResolve = claimSelectedAndResolve;
  window.setFactionTurnDone = setFactionTurnDone;
  window.returnDashboardMarkingTurn = returnDashboardMarkingTurn;
  render();
})();
