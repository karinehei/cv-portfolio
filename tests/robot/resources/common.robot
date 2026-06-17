*** Settings ***
Documentation     Shared keywords and variables for CV Portfolio UI tests.
Library           Browser
Library           Collections

*** Variables ***
${BASE_URL}                 http://localhost:3000
${BROWSER}                  chromium
${HEADLESS}                 ${True}
${EXPECTED_PAGE_TITLE}      CV Portfolio
${EXPECTED_HERO_HEADING}    Quality assurance and test automation
${NAV_LINKS}                Home|About|Skills|QA Portfolio|Projects|CV|Contact

*** Keywords ***
Suite Browser Setup
    New Browser    ${BROWSER}    headless=${HEADLESS}

Suite Browser Teardown
    Close Browser

Open CV Portfolio
    [Documentation]    Open the portfolio at BASE_URL with an optional path or hash.
    [Arguments]    ${path}=${EMPTY}
    ${url}=    Set Variable If    '${path}' != '${EMPTY}'    ${BASE_URL}${path}    ${BASE_URL}
    New Page    ${url}
    Wait For Elements State    css=[data-testid="hero-title"]    visible    timeout=10s

Open Contact Section
    [Documentation]    Navigate directly to the contact form section.
    Open CV Portfolio    /#contact
    Wait For Elements State    css=[data-testid="contact-form"]    visible    timeout=10s

Element By Test Id Should Be Visible
    [Documentation]    Assert an element with data-testid is visible.
    [Arguments]    ${test_id}
    Wait For Elements State    css=[data-testid="${test_id}"]    visible    timeout=10s

Text By Test Id Should Contain
    [Documentation]    Assert element text contains expected string.
    [Arguments]    ${test_id}    ${expected_text}
    Wait For Elements State    css=[data-testid="${test_id}"]    visible    timeout=10s
    Get Text    css=[data-testid="${test_id}"]    contains    ${expected_text}

Section Should Be Visible
    [Documentation]    Assert a page section is present by HTML id.
    [Arguments]    ${section_id}
    Wait For Elements State    css=#${section_id}    visible    timeout=10s

Section Heading Should Be Visible
    [Documentation]    Assert a section heading is visible by its element id.
    [Arguments]    ${heading_id}    ${expected_text}
    Wait For Elements State    css=#${heading_id}    visible    timeout=10s
    Get Text    css=#${heading_id}    contains    ${expected_text}

Navigation Link Should Be Visible
    [Documentation]    Assert a main navigation link is visible by accessible name.
    [Arguments]    ${link_name}
    Wait For Elements State    role=navigation >> role=link[name="${link_name}"]    visible    timeout=10s

Fill Contact Form
    [Documentation]    Fill all contact form fields using stable data-testid selectors.
    [Arguments]    ${name}    ${email}    ${message}
    Fill Text    css=[data-testid="contact-name"]    ${name}
    Fill Text    css=[data-testid="contact-email"]    ${email}
    Fill Text    css=[data-testid="contact-message"]    ${message}

Submit Contact Form
    [Documentation]    Click the contact form submit button.
    Click    css=[data-testid="contact-submit"]

Html Theme Should Differ From
    [Documentation]    Assert the document theme changed after toggle.
    [Arguments]    ${previous_theme}
    ${current}=    Get Attribute    css=html    data-theme
    Should Not Be Equal    ${current}    ${previous_theme}

Select Language
    [Documentation]    Switch UI language using the EN/FI buttons.
    [Arguments]    ${locale}
    Click    css=[data-testid="language-${locale}"]
    Get Attribute    css=[data-testid="language-${locale}"]    aria-pressed    ==    true

Language Button Should Be Pressed
    [Documentation]    Assert a language button shows as selected.
    [Arguments]    ${locale}
    Get Attribute    css=[data-testid="language-${locale}"]    aria-pressed    ==    true

Clear Contact Form
    [Documentation]    Clear all contact form fields.
    Fill Text    css=[data-testid="contact-name"]    ${EMPTY}
    Fill Text    css=[data-testid="contact-email"]    ${EMPTY}
    Fill Text    css=[data-testid="contact-message"]    ${EMPTY}
