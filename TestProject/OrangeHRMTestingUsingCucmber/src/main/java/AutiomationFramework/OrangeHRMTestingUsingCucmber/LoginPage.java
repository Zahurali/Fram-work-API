package AutiomationFramework.OrangeHRMTestingUsingCucmber;

import org.openqa.selenium.WebElement;

import Automation.FramWorkAPI.WebTest;
import Utilities.JavaUtilities;

public class LoginPage {
	
	WebTest T;
	public LoginPage(String BrowserName)
	{
		T=new WebTest();
		JavaUtilities.ReadEnvVars();
		T.StartTest(BrowserName);
		T.CreateObjectRepository("LoginPage");
	}
	public void DoLogin(String UserName,String Password)
	{
		/*
		 * 1.Type UserName in UserName field
		 * 2.Type Password in Password field
		 * 3.Click on Login button
		 * WebElement UserName=D.findElementByid("txtUsername").sendKeys(UserName)
		 * 
		 * 
		 */
		
		//EnterText(UE,UserName);
		//EnterText(PE,Password);
		//ClickElement(Btn);
		//WebElement E=D.findElementByName("txtUsername");
		T.EnterText(T.ObjectRepo.get("UserNameField"),UserName);
		//WebElement E=D.findElementByCssSelector("input[type='password']");
		T.EnterText(T.ObjectRepo.get("PasswordField"),Password);
		//WebElement E=D.findElementByxpath("//input[@value='LOGIN']")
		T.ClickElement(T.ObjectRepo.get("LoginButton"));
	}
	
	public void EnterUserName(String UserName)
	{
		T.EnterText(T.ObjectRepo.get("UserNameField"),UserName);
	}
	
	public void EnterPassword(String Password)
	{
		T.EnterText(T.ObjectRepo.get("PasswordField"),Password);
	}
	
	public void ClickLoginButton()
	{
		T.ClickElement(T.ObjectRepo.get("LoginButton"));
	}
	
	public String GetLoginError()
	{
		WebElement ErrorElement=T.FindAndReturnElement("BY_ID", "spanMessage");
		String LoginError=T.GetElementText(ErrorElement);
		return LoginError;
	}

}
