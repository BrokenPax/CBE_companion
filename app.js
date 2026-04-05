
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
function pushResolverSnapshot(){ state.resolverSnapshots.push({ rowIndex:state.rowIndex, stage:state.stage, priorityStep:state.priorityStep, districtChoice:state.districtChoice, showHint:state.showHint, history:JSON.parse(JSON.stringify(state.history)), selectedTargets:[...state.selectedTargets] }); }
function stepBackResolver(){ if(!state.resolverSnapshots.length) return; const prev=state.resolverSnapshots.pop(); state.rowIndex=prev.rowIndex; state.stage=prev.stage; state.priorityStep=prev.priorityStep; state.districtChoice=prev.districtChoice; state.selectedTargets=prev.selectedTargets||[]; state.showHint=prev.showHint; state.history=prev.history; render(); }
function buildTrace(extra=[]){ const out=[...state.history.map(h=>h.reason).filter(Boolean), ...extra.filter(Boolean)]; return out.length?out:["No rules trace was captured for this result."]; }
function moveToNextRow(reason){ const c=currentCard(), r=currentRow(); if(!c||!r) return; state.history=[...state.history, {rowIndex:state.rowIndex, stage:state.stage, reason}]; if(state.rowIndex >= c.rows.length-1){ state.result={status:"discard", title:`Discard ${c.name}`, body:"No listed action was both applicable and effective. Draw a new Position card for this NP faction.", trace:state.history.map(h=>h.reason).filter(Boolean)}; state.screen="result"; render(); return; } state.rowIndex += 1; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.showHint=false; render(); }

function answerCondition(answer){ const row=currentRow(); if(!row) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="no"){ moveToNextRow(`Row ${row.index} condition was false: ${row.condition}.`); return; } pushResolverSnapshot(); recordStep(`Row ${row.index} condition was true: ${row.condition}.`); state.stage="gate"; state.showHint=false; render(); }
function answerGate(answer){ const row=currentRow(), gate=currentGate(); if(!row||!gate) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="no"){ moveToNextRow(`Tried ${row.action}, but it would not work here. Move to the next row.`); return; } pushResolverSnapshot(); if(currentPriority()){ state.stage="priority"; state.priorityStep=0; state.showHint=false; render(); return; } state.result={ status:"resolved", title:`${row.action} selected`, body:`The first applicable and effective row is Row ${row.index}: ${row.action} — ${row.instruction}.`, trace:buildTrace([`${row.action} passed the basic effectiveness gate.`]) }; state.screen="result"; render(); }
function answerPriority(answer){ const row=currentRow(), pr=currentPriority(), bullet=currentPriorityBullet(); if(!row||!pr||!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } if(answer==="yes"){ pushResolverSnapshot(); state.stage="district"; state.districtChoice=null; state.showHint=false; render(); return; } if(state.priorityStep >= pr.bullets.length-1){ state.result={status:"resolved", title:`${row.action} needs manual tie-break`, body:"The priority column was exhausted without reducing the remaining tied districts to one district. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.", trace:buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`No bullet reduced the remaining tied districts to a single district before fallback.`]) }; state.screen="result"; render(); return; } state.priorityStep += 1; state.districtChoice=null; state.showHint=false; render(); }
function chooseDistrict(d){ state.districtChoice=d; render(); }
function answerDistrict(answer){ const row=currentRow(), pr=currentPriority(), bullet=currentPriorityBullet(); if(!row||!pr||!bullet) return; if(answer==="not_sure"){ state.showHint=true; render(); return; } pushResolverSnapshot(); if(answer==="still_tied"||answer==="none"){ if(state.priorityStep >= pr.bullets.length-1){ state.result={status:"resolved", title:`${row.action} needs manual tie-break`, body:"No unique district was produced after the final priority bullet. Use player selection from remaining spaces, or draw a new Position card if no legal spaces remain.", trace:buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`Bullet '${bullet}' did not reduce the remaining tied districts to a unique district.`])}; state.screen="result"; render(); return; } state.priorityStep += 1; state.stage="priority"; state.districtChoice=null; state.showHint=false; render(); return; } const nextTargets=[...state.selectedTargets, answer]; const targetLimit=currentTargetLimit(); const trace=buildTrace([`${row.action} passed the basic effectiveness gate.`,`Checked priority column: ${pr.title}.`,`Bullet '${bullet}' reduced the remaining tied districts to District ${answer}.`,`Selected Row ${row.index}: ${row.action} — ${row.instruction}.`,`District ${answer} is target ${nextTargets.length}${isMultiTargetMode() ? ` of up to ${targetLimit}` : ""}.`]); if(isMultiTargetMode() && nextTargets.length < targetLimit){ state.selectedTargets=nextTargets; state.history=[...state.history, {rowIndex:state.rowIndex, stage:"district", reason:`Target ${nextTargets.length} selected: District ${answer}.`}]; state.result={status:"continue", title:`${row.action} • Target ${nextTargets.length} locked`, body:`District ${answer} was selected. You can resolve another district for this same ${row.action} action, up to ${targetLimit} total.`, trace}; state.screen="result"; render(); return; } state.selectedTargets=nextTargets; state.result={status:"resolved", title:`${row.action} selected${nextTargets.length>1 ? ` • ${nextTargets.length} targets` : ` • District ${answer}`}`, body: nextTargets.length>1 ? `Use the NP Aid priority column '${pr.title}'. Final targets: ${nextTargets.map(d=>`District ${d}`).join(", ")}.` : `Use the NP Aid priority column '${pr.title}'. The first bullet that reduced the remaining tied districts to one district was '${bullet}', leaving District ${answer}.`, trace}; state.screen="result"; render(); }
function continueSameAction(){ state.rowIndex=0; state.stage="condition"; state.priorityStep=0; state.districtChoice=null; state.showHint=false; state.showTrace=false; state.result=null; state.screen="resolver"; render(); }
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
  if(state.screen==="mode"){ const c=currentCard(); app.innerHTML=`<div class="card"><div class="small">Resolving ${factions[state.selectedFaction].label} NP</div><div class="titleblue">${c.name}</div><div class="objblue" style="margin-bottom:14px">Objective: ${c.objective}</div><div class="small" style="margin-bottom:8px">Resolution mode</div><div class="grid2" style="margin-bottom:14px">${[["act","Act"],["react","React"],["plan","Plan"],["event","Event"]].map(([v,l])=>btn(l,`state.mode='${v}'; render()`, state.mode===v ? "primary":"")).join("")}</div>${btn(`Resolve ${state.mode}`,"startModeResolution()","primary")}</div>`; return; }
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
  const candidateLine = (state.districtHelper.candidates || []).length < DISTRICTS.length
    ? `Candidate districts filtered to: ${(state.districtHelper.candidates || []).join(", ") || "none"}.`
    : `No district filter was applied.`;
  oldRecordPlannedAction(nextAction);
  if(state.result && Array.isArray(state.result.trace)){
    state.result.trace.unshift(candidateLine);
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
    const hint = state.showHint ? `<div class="hint">Use the <b>Place / Replace / Refresh Organization</b> priority column. You can also jump to the district helper for a more visual elimination pass.</div>` : "";
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
          helperBtn("Run refresh protocol", "state.planStep='priority'; state.showHint=false; render()", "primary"),
          helperBtn("Open district helper", "openDistrictHelper('place_replace_refresh_organization','target')")
        ])}`;
    } else if(state.planStep === "priority"){
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">Refresh protocol</div>
          <div style="margin-top:8px;font-size:12px;text-transform:uppercase;opacity:.75">Priority bullet ${state.planPriorityStep + 1} of ${planPriorityColumn().bullets.length}</div>
          <div style="margin-top:6px;font-size:18px;font-weight:700">${esc(bullet)}</div>
          <div style="margin-top:6px">Does this bullet break the tie for the refresh district?</div>
        </div>
        <div class="grid2">
          ${helperBtn("Yes", "answerPlanPriority('yes')", "primary")}
          ${helperBtn("No", "answerPlanPriority('no')")}
          ${helperBtn(state.showHint ? "Hide hint" : "Need help?", "state.showHint=!state.showHint; render()", "ghost")}
          ${helperBtn("Use district helper", "openDistrictHelper('place_replace_refresh_organization','target')")}
        </div>
        ${hint}`;
    } else if(state.planStep === "district"){
      const districtButtons = DISTRICTS.map(d => helperBtn(`District ${d}`, `choosePlanDistrict('${d}')`, state.planDistrictChoice === d ? "primary" : "")).join("");
      refreshArea = `
        <div class="panel" style="margin-bottom:14px">
          <div style="font-weight:700">Choose the refresh district</div>
          <div style="margin-top:8px">Current bullet: <b>${esc(bullet)}</b></div>
        </div>
        <div class="grid4">${districtButtons}</div>
        <div class="grid2">
          ${helperBtn(`Confirm District ${state.planDistrictChoice || "?"}`, state.planDistrictChoice ? `answerPlanDistrict('${state.planDistrictChoice}')` : "void(0)", state.planDistrictChoice ? "primary" : "")}
          ${helperBtn("Still tied", "answerPlanDistrict('still_tied')")}
          ${helperBtn("No district", "answerPlanDistrict('none')")}
          ${helperBtn("Use district helper", "openDistrictHelper('place_replace_refresh_organization','target')")}
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
  resolverCandidates: state.resolverCandidates || [...DISTRICTS]
});

const originalStartResolver_v2 = startResolver;
startResolver = function(f){
  state.selectedFaction = f;
  resetResolverState();
  state.resolverCandidates = [...DISTRICTS];
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
  originalStartModeResolution_v2();
};

const originalBack_v2 = back;
back = function(){
  if(state.screen === 'round_gate' || state.screen === 'log_action'){
    state.screen = 'dashboard';
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
    resolverCandidates: [...DISTRICTS]
  });
  render();
};

const originalAnswerPriority_v2 = answerPriority;
answerPriority = function(answer){
  if(answer === 'yes'){
    state.resolverCandidates = [...DISTRICTS];
  }
  originalAnswerPriority_v2(answer);
};

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
  const set = new Set(state.resolverCandidates || DISTRICTS);
  if(set.has(d)) set.delete(d); else set.add(d);
  state.resolverCandidates = DISTRICTS.filter(x => set.has(x));
  render();
}
function resetResolverCandidates(){ state.resolverCandidates = [...DISTRICTS]; render(); }
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
    const recentLog = (state.actionLog || []).slice(-5).reverse();
    app.innerHTML = `
      <div class="card">
        <div class="row" style="margin-bottom:12px;align-items:center">
          <div>
            <div class="small">You are playing</div>
            <div style="font-size:22px;font-weight:800">${factions[state.playerFaction].label}</div>
          </div>
          <span class="badge">Round ${state.roundTracker.round} / ${state.roundTracker.max}</span>
        </div>
        <div class="panel" style="margin-bottom:14px">
          <div><b>Current round event:</b> ${esc(criticalLabel)}</div>
          <div style="margin-top:6px"><b>React lockout:</b> HOUSE / BUILD / DEVELOP are auto-skipped during REACT.</div>
          <div style="margin-top:6px"><b>Census trigger:</b> after round 8, ending the round opens Census helper automatically.</div>
        </div>
        <div class="grid2">
          ${btn(state.roundTracker.critical === null ? 'Round start: critical event?' : 'Edit round critical check', "state.screen='round_gate'; render()", 'primary')}
          ${btn('Log completed action', "openActionLogger()")}
          ${btn(state.roundTracker.round === state.roundTracker.max ? 'End round 8 → Census' : `End round ${state.roundTracker.round} → next round`, 'advanceRound()')}
          ${btn('Save / load state', "state.screen='save_load'; render()")}
        </div>
      </div>
      ${npFactions().map(f=>{ const card=cards[f].find(c=>c.id===state.npCards[f]); return `<div class="card"><div class="row" style="margin-bottom:14px"><div><div style="font-size:18px;font-weight:700">${factions[f].label} NP</div><div class="muted">${card ? `${card.name} • ${card.objective}${state.npPlannedActions[f] ? ` • Next: ${state.npPlannedActions[f].toUpperCase()}` : ''}` : 'No Position card selected'}</div></div>${pill(factions[f].short,f)}</div><div class="grid2">${btn('Resolve turn',`startResolver('${f}')`, card ? 'primary':'')}${btn('Change card',`state.selectedFaction='${f}'; state.screen='setup_np_card'; render()`)}</div></div>`; }).join('')}
      <div class="card">
        <div style="font-weight:700;margin-bottom:8px">Recent assisted state log</div>
        ${recentLog.length ? recentLog.map(item=>`<div class="trace" style="margin-top:8px">${esc(actionLogSummary(item))}</div>`).join('') : '<div class="muted">No actions logged yet.</div>'}
      </div>`;
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
          ${btn('Back to dashboard', "state.screen='dashboard'; render()")}
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
    const prompt=state.stage==='condition'?q.prompt:state.stage==='gate'?g.prompt:state.stage==='priority'?'Does this bullet break the tie?':'Which districts still apply after this bullet?';
    const sub=state.stage==='condition'?`Card condition: ${r.condition}`:state.stage==='gate'?`Action check: ${r.action}`:state.stage==='priority'?`${p ? p.title : 'No mapped column'} • Bullet ${state.priorityStep+1}${p ? ` of ${p.bullets.length}` : ''}`:b;
    let actionArea='';
    if(state.stage==='condition') actionArea=`<div class="grid">${btn('Yes',"answerCondition('yes')",'primary')}${btn('No',"answerCondition('no')")}${btn('Not sure',"answerCondition('not_sure')",'secondary')}</div>`;
    else if(state.stage==='gate') actionArea=`<div class="grid">${btn('Yes',"answerGate('yes')",'primary')}${btn('No',"answerGate('no')")}${btn('Not sure',"answerGate('not_sure')",'secondary')}</div>`;
    else if(state.stage==='priority') actionArea=`<div class="bluebullet" style="border-radius:18px;padding:14px"><div style="font-size:12px;text-transform:uppercase;opacity:.8">Priority bullet</div><div style="margin-top:4px;font-size:16px;font-weight:700">${esc(b)}</div></div><div class="grid">${btn('Yes',"answerPriority('yes')",'primary')}${btn('No',"answerPriority('no')")}${btn('Not sure',"answerPriority('not_sure')",'secondary')}</div>`;
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
    else if(r.status==='continue') extra = btn('Resolve another district','continueSameAction()') + btn('Finish this action','finishThisAction()') + btn('Log this NP action','prefillLogFromCurrentResult()');
    else extra = btn('Resolve this NP again',`startResolver('${state.selectedFaction}')`) + btn('Log this action','prefillLogFromCurrentResult()');
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
render();
