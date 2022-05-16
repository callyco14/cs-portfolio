import Contact from "../Components/Contact/index";

export function ContactContainer() {
  return (
    <Contact.Container>
      <Contact>
        <Contact.Title>Contact</Contact.Title>
          <Contact.Text>
            <Contact.Tagline>Let's set up a conversation!</Contact.Tagline>
            <Contact.Content>
                Feel free to reach out through any of my social media linked below.
            </Contact.Content>
          </Contact.Text>
      </Contact>
    </Contact.Container>
  );
}
