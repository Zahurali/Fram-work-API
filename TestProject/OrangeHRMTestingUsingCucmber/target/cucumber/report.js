$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('AutiomationFramework\OrangeHRMTestingUsingCucmber\Login.feature');
formatter.feature({
  "line": 1,
  "name": "Testing Login functionality of Orange HRM application",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing login functionality with valid credentials",
  "description": "",
  "id": "testing-login-functionality-of-orange-hrm-application;testing-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"Admin\" in UserName field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin123\" in Password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should enter into an application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.User_is_on_Login_screen()"
});
formatter.result({
  "duration": 12651298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterUserName(String)"
});
formatter.result({
  "duration": 370844200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "LoginTestCases_StepDefinations.EnterPassword(String)"
});
formatter.result({
  "duration": 194764300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.ClickLogin_button()"
});
formatter.result({
  "duration": 4671515900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestCases_StepDefinations.CheckIfUserisLoggedIn()"
});
formatter.result({
  "duration": 72500,
  "status": "passed"
});
});