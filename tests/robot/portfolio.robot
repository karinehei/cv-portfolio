*** Settings ***
Documentation     UI tests for the CV Portfolio website (software tester / QA focus).
...               Requires the app running at BASE_URL (default http://localhost:3000).
Resource          resources/common.robot
Suite Setup       Suite Browser Setup
Suite Teardown    Suite Browser Teardown
Test Tags         ui    portfolio

*** Test Cases ***
Home Page Loads Successfully
    [Documentation]    TC-001: Home page opens and hero section is displayed.
    [Tags]    smoke    p1    home
    Open CV Portfolio
    Get Title    contains    ${EXPECTED_PAGE_TITLE}
    Element By Test Id Should Be Visible    hero-title

Main Navigation Links Are Visible
    [Documentation]    TC-002: All primary navigation links are visible in the header.
    [Tags]    smoke    p1    navigation
    Open CV Portfolio
    @{links}=    Create List    Home    About    Skills    QA Portfolio    Projects    CV    Contact
    FOR    ${link}    IN    @{links}
        Navigation Link Should Be Visible    ${link}
    END

Projects Section Is Visible
    [Documentation]    TC-005: Projects section and heading are visible.
    [Tags]    smoke    p1    projects
    Open CV Portfolio    /#projects
    Section Should Be Visible    projects
    Section Heading Should Be Visible    projects-heading    Projects

QA Testing Project Section Is Visible
    [Documentation]    TC-006: QA portfolio project section and heading are visible.
    [Tags]    smoke    p1    qa
    Open CV Portfolio    /#qa-testing
    Section Should Be Visible    qa-testing
    Section Heading Should Be Visible    qa-heading    QA portfolio project

Contact Form Shows Validation Errors When Submitted Empty
    [Documentation]    TC-009: Empty submit triggers client-side validation on all required fields.
    [Tags]    smoke    p1    contact    validation
    Open Contact Section
    Submit Contact Form
    Text By Test Id Should Contain    contact-name-error    Name is required
    Text By Test Id Should Contain    contact-email-error    Email is required
    Text By Test Id Should Contain    contact-message-error    Message is required

Contact Form Rejects Invalid Email
    [Documentation]    TC-010: Invalid email format shows a clear validation message.
    [Tags]    smoke    p1    contact    validation
    Open Contact Section
    Fill Contact Form    Test User    not-an-email    This message has enough characters.
    Submit Contact Form
    Text By Test Id Should Contain    contact-email-error    Invalid email address

Contact Form Accepts Valid Input And Shows Success Message
    [Documentation]    TC-008: Valid form submission shows success feedback from the API.
    [Tags]    smoke    p1    contact
    Open Contact Section
    Fill Contact Form    Test User    test@example.com    This is a valid test message for the contact form.
    Submit Contact Form
    Text By Test Id Should Contain    contact-success    Contact request received

CV Download And Link Are Visible
    [Documentation]    TC-007: CV download button and LinkedIn link are visible.
    [Tags]    smoke    p2    cv
    Open CV Portfolio    /#cv
    Section Should Be Visible    cv
    Element By Test Id Should Be Visible    cv-download
    Element By Test Id Should Be Visible    cv-linkedin

Language Switcher Shows English Selected By Default
    [Documentation]    TC-012: EN/FI language switcher is visible; English is default.
    [Tags]    smoke    p2    i18n
    Open CV Portfolio
    Element By Test Id Should Be Visible    language-switcher
    Language Button Should Be Pressed    en
    Get Attribute    css=html    lang    ==    en

English Content Visible By Default
    [Documentation]    TC-012: Hero heading and navigation use English by default.
    [Tags]    smoke    p2    i18n
    Open CV Portfolio
    Text By Test Id Should Contain    hero-title    ${EXPECTED_HERO_HEADING}
    Navigation Link Should Be Visible    Home

Finnish Content Appears After Selecting FI
    [Documentation]    TC-012: Finnish UI text appears when FI is selected.
    [Tags]    smoke    p2    i18n
    Open CV Portfolio
    Select Language    fi
    Get Attribute    css=html    lang    ==    fi
    Text By Test Id Should Contain    hero-title    Laadunvarmistus ja testiautomaatio
    Navigation Link Should Be Visible    Etusivu

Finnish Contact Validation Messages
    [Documentation]    TC-012: Contact form client validation messages are in Finnish.
    [Tags]    smoke    p2    i18n    contact
    Open CV Portfolio
    Select Language    fi
    Open Contact Section
    Submit Contact Form
    Text By Test Id Should Contain    contact-name-error    Nimi on pakollinen
    Text By Test Id Should Contain    contact-email-error    Sähköposti on pakollinen
    Text By Test Id Should Contain    contact-message-error    Viesti on pakollinen

Switching Back To English Restores Content
    [Documentation]    TC-012: Selecting EN again restores English UI text.
    [Tags]    smoke    p2    i18n
    Open CV Portfolio
    Select Language    fi
    Text By Test Id Should Contain    hero-title    Laadunvarmistus ja testiautomaatio
    Select Language    en
    Get Attribute    css=html    lang    ==    en
    Text By Test Id Should Contain    hero-title    ${EXPECTED_HERO_HEADING}
    Navigation Link Should Be Visible    Home

Page Title And Main Heading Are Correct
    [Documentation]    TC-001: Browser title and primary h1 heading match expected content.
    [Tags]    smoke    p1    home
    Open CV Portfolio
    Get Title    contains    Software Tester
    Text By Test Id Should Contain    hero-title    ${EXPECTED_HERO_HEADING}

Mobile Menu Opens At Narrow Viewport
    [Documentation]    TC-013 (partial): Mobile menu toggle reveals navigation at 375px width.
    [Tags]    smoke    p2    navigation    mobile
    Open CV Portfolio
    Set Viewport Size    375    667
    Element By Test Id Should Be Visible    menu-toggle
    Click    css=[data-testid="menu-toggle"]
    Wait For Elements State    css=[data-testid="nav-link-contact"]    visible    timeout=5s

Theme Toggle Switches Color Mode
    [Documentation]    TC-014 (partial): Theme toggle changes html data-theme attribute.
    [Tags]    smoke    p2    theme    accessibility
    Open CV Portfolio
    ${before}=    Get Attribute    css=html    data-theme
    Click    css=[data-testid="theme-toggle"]
    Wait Until Keyword Succeeds    5s    0.5s    Html Theme Should Differ From    ${before}
