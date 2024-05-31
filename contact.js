/**
 * Validates a phone number using a regular expression pattern.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise.
 */
function validatePhoneNumber(phoneNumber) {
    // Regular expression pattern for global phone numbers
    const pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    // Check if the phone number matches the pattern
    if (pattern.test(phoneNumber)) {
        return true; // Valid phone number
    } else {
        return false; // Invalid phone number
    }
}





/**
 * Validates a phone number in the format 123-123-1231 using a regular expression pattern.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise.
 */
function validatePhoneNumberPattern(phoneNumber) {
    // Regular expression pattern for phone numbers in the format 123-123-1231
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    // Check if the phone number matches the pattern
    if (pattern.test(phoneNumber)) {
        return true; // Valid phone number
    } else {
        return false; // Invalid phone number
    }
}




const stateAreaCodes = {
    AL: ['205', '251', '256', '334'],
    AK: ['907'],
    AZ: ['480', '520', '602', '623', '928'],
    AR: ['479', '501', '870'],
    CA: ['209', '213', '310', '323', '408', '415', '510', '530', '559', '562'],
    CO: ['303', '719', '720', '970'],
    CT: ['203', '475', '860', '959'],
    DE: ['302'],
    FL: ['239', '305', '321', '352', '386', '407', '561', '727', '754', '772'],
    GA: ['229', '404', '470', '478', '678', '706', '762', '770', '912'],
    HI: ['808'],
    ID: ['208'],
    IL: ['217', '224', '309', '312', '331', '618', '630', '708', '773', '779'],
    IN: ['219', '260', '317', '463', '574', '765', '812', '930'],
    IA: ['319', '515', '563', '641', '712'],
    KS: ['316', '620', '785', '913'],
    KY: ['270', '364', '502', '606', '859'],
    LA: ['225', '318', '337', '504', '985'],
    ME: ['207'],
    MD: ['240', '301', '410', '443'],
    MA: ['339', '351', '413', '508', '617', '774', '781', '857', '978'],
    MI: ['231', '248', '269', '313', '517', '586', '616', '734', '810', '906'],
    MN: ['218', '320', '507', '612', '651', '763', '952'],
    MS: ['228', '601', '662', '769'],
    MO: ['314', '417', '573', '636', '660', '816'],
    MT: ['406'],
    NE: ['308', '402', '531'],
    NV: ['702', '725', '775'],
    NH: ['603'],
    NJ: ['201', '551', '609', '732', '848', '856', '862', '908', '973'],
    NM: ['505', '575'],
    NY: ['212', '315', '347', '516', '518', '585', '607', '631', '646', '716', '718', '845', '914', '917', '929'],
    NC: ['252', '336', '704', '743', '828', '910', '919', '980', '984'],
    ND: ['701'],
    OH: ['216', '220', '234', '330', '380', '419', '440', '513', '567', '614', '740', '937'],
    OK: ['405', '539', '580', '918'],
    OR: ['458', '503', '541', '971'],
    PA: ['215', '223', '267', '272', '412', '484', '570', '610', '717', '724', '814', '878'],
    RI: ['401'],
    SC: ['803', '843', '854', '864'],
    SD: ['605'],
    TN: ['423', '615', '629', '731', '865', '901', '931'],
    TX: ['210', '214', '254', '281', '325', '346', '361', '409', '430', '432', '469', '512', '682', '713', '737', '806', '817', '830', '832', '903', '915', '936', '940', '956', '972', '979'],
    UT: ['385', '435', '801'],
    VT: ['802'],
    VA: ['276', '434', '540', '571', '703', '757', '804'],
    WA: ['206', '253', '360', '425', '509', '564'],
    WV: ['304', '681'],
    WI: ['262', '414', '534', '608', '715', '920'],
    WY: ['307']
};



