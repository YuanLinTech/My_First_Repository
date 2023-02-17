import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading 1</Heading>
        <Heading>Heading 2</Heading>
        <Heading>Heading 3</Heading>
        <Section>
          <Heading>Sub-heading 1</Heading>
          <Heading>Sub-heading 2</Heading>
          <Heading>Sub-heading 3</Heading>
          <Section>
            <Heading>Sub-sub-heading 1</Heading>
            <Heading>Sub-sub-heading 2</Heading>
            <Heading>Sub-sub-heading 3</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
