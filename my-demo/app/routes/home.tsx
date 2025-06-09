import AboutUsPage, { ContactUSPage, Portfolio } from "~/src/componenets/about";
import ServiceNow from "~/src/componenets/services";

export default function Home() {
  return (
    <>
      I Am Home Page
      <br/>
      <AboutUsPage>Hello I am About Us Page <br/> </AboutUsPage>
      <ContactUSPage myName="Amit J" id="s" name="abc" />
      <Portfolio />
      <ServiceNow/>
    </>
  );
}
