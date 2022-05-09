import Contact from "../Components/Contact/index";
import Git from "../Assets/Icons/github.png";
import Insta from "../Assets/Icons/instagram.png";
import LinkedIn from "../Assets/Icons/LinkedIn.png";
import Mail from "../Assets/Icons/mail.png";
import Call from "../Assets/Icons/phone_outline.png";

export function ContactContainer() {
  return (
    <Contact.Container>
      <Contact>
        <Contact.Title>Contact</Contact.Title>
          <Contact.Text>
            <Contact.Tagline>Let's set up a conversation!</Contact.Tagline>
            <Contact.Content>
                Feel free to reach out through any one of the following:
            </Contact.Content>
            <Contact.Group>
                <a href="tel:7735640609">
                    <Contact.Icon src={Call}></Contact.Icon>
                </a>
                <a href="mailto:callistasukohardjo2023@u.northwestern.edu">
                    <Contact.Icon src={Mail}></Contact.Icon>
                </a>
                <a href="https://www.linkedin.com/in/callista-sukohardjo/">
                    <Contact.Icon src={LinkedIn}></Contact.Icon>
                </a>
                <a href="https://www.instagram.com/callycocreates/">
                    <Contact.Icon src={Insta}></Contact.Icon>
                </a>
                <a href="#">
                    <Contact.Icon src={Git}></Contact.Icon>
                </a>
            </Contact.Group>
          </Contact.Text>
      </Contact>
    </Contact.Container>
  );
}
