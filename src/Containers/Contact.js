import Contact from "../Components/Contact/index";

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
          </Contact.Text>
      </Contact>
    </Contact.Container>
  );
}
