INSERT INTO properties
(property_name, property_description, property_address, property_city, property_state, property_image, property_zip, property_monthly_mortgage, property_desired_rent, property_loan_amount, property_owner_fk)
values
(${propertyName},${propertyDescription}, ${propertyAddress}, ${propertyCity}, ${propertyState}, ${propertyImage}, ${propertyZip}, ${monthlyMortgage}, ${desiredRent}, ${loanAmount}, ${account_id})